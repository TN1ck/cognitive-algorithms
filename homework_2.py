import scipy as sp
import scipy.io as io
import pdb
import pylab as pl

def load_usps_data(fname, digit=3):
    ''' Loads USPS (United State Postal Service) data from <fname>
    Definition:  X, Y = load_usps_data(fname, digit = 3)
    Input:       fname   - string
                 digit   - optional, integer between 0 and 9, default is 3
    Output:      X       -  DxN array with N images with D pixels
                 Y       -  1D array of length N of class labels
                                 1 - where picture contains the <digit>
                                -1 - otherwise
    '''
    # load the data
    data = io.loadmat(fname)
    # extract images and labels
    X = data['data_patterns']
    Y = data['data_labels']
    Y = Y[digit,:]
    return X, Y

def train_perceptron(X,Y,iterations=200,eta=.1):
    ''' Trains a linear perceptron
    Definition:  w, b, acc  = train_perceptron(X,Y,iterations=200,eta=.1)
    Input:       X       -  DxN array of N data points with D features
                 Y       -  1D array of length N of class labels {-1, 1}
                 iter    -  optional, number of iterations, default 200
                 eta     -  optional, learning rate, default 0.1
    Output:      w       -  1D array of length D, weight vector
                 b       -  bias term for linear classification
                 acc     -  1D array of length iter, contains classification accuracies
                            after each iteration
                            Accuracy = #correctly classified points / N
    '''
    acc = sp.zeros((iterations))
    #include the bias term by adding a row of ones to X
    X = sp.concatenate((sp.ones((1,X.shape[1])), X))
    #initialize weight vector
    weights = sp.ones((X.shape[0]))/X.shape[0]
    # print weights
    for it in sp.arange(iterations):
        # indices of misclassified data
        wrong = (sp.sign(weights.dot(X)) != Y).nonzero()[0]
        # compute accuracy acc[it]
        acc[it] = float(X.shape[1] - wrong.shape[0])/X.shape[1]
        if wrong.shape[0] > 0:
            # pick a random misclassified data point
            ran_index = sp.random.randint(0, wrong.shape[0])
            ran = X[:,wrong[ran_index]]
            #update weight vector (use variable learning rate (eta/(1.+it)) )
            weights = weights + ran*Y[wrong[ran_index]]*(eta/(1.+it))
            if it % 20 == 0:
                print "Iteration %d: Accuracy %0.2f" % (it, acc[it])
    b = -weights[0]
    w = weights[1:]
    #return weight vector, bias and accuracies
    return w,b,acc

def train_ncc(X,Y):
    ''' Trains a nearest centroid classifier
    Definition:  w, b   = train_ncc(X,Y)
    Input:       X       -  DxN array of N data points with D features
                 Y       -  1D array of length N of class labels {-1, 1}
    Output:      w       -  1D array of length D, weight vector
                 b       -  bias term for linear classification
    '''
    w_pos = sp.mean(X.T[(Y ==  1).nonzero()], 0)
    w_neg = sp.mean(X.T[(Y == -1).nonzero()], 0)
    w  = w_pos - w_neg
    b = 0.5*(w_pos.dot(w_pos) - w_neg.dot(w_neg))

    return w,b


def plot_histogram(X, Y, w, b):
    ''' Plots a histogram of classifier outputs (w^T X) for each class with pl.hist
    The title of the histogram is the accuracy of the classification
    Accuracy = #correctly classified points / N

    Definition:     plot_histogram(X, Y, w, b)
    Input:          X       -  DxN array of N data points with D features
                    Y       -  1D array of length N of class labels
    Output:         w       -  1D array of length D, weight vector
                    b       -  bias term for linear classification

    '''
    wTX = w.dot(X)
    wrong = (sp.sign(wTX - b) != Y).nonzero()[0]
    correct = (sp.sign(wTX - b) == Y).nonzero()[0]

    target =     w.dot(X[:,(Y == 1)])
    non_target = w.dot(X[:,(Y == -1)])

    pl.title("Acc " + str(int(round(float(correct.shape[0])/float(X.shape[1]), 2)*100)) + " %")
    pl.hist(non_target, label="target")
    pl.hist(target, label="non target")


def compare_classifiers(digit = 3):
    ''' Loads usps.mat data, trains the perceptron and the Nearest centroid classifiers,
    and plots their weight vector and classifier output
    Definition: compare_classifiers(digit = 3)
    '''
    X,Y = load_usps_data('usps.mat',digit)
    w_ncc,b_ncc = train_ncc(X,Y)
    w_per,b_per,_ = train_perceptron(X,Y)

    pl.figure()
    pl.subplot(2,2,1)
    plot_img(w_ncc)
    pl.title('NCC')
    pl.subplot(2,2,3)
    plot_histogram(X, Y, w_ncc, b_ncc)

    pl.subplot(2,2,2)
    plot_img(w_per)
    pl.title('Perceptron')
    pl.subplot(2,2,4)
    plot_histogram(X, Y, w_per, b_per)
    pl.show()

def analyse_accuracies_perceptron(digit = 3):
    ''' Loads usps.mat data and plots digit recognition accuracy in the linear perceptron
    Definition: analyse_perceptron(digit = 3)
    '''
    X,Y = load_usps_data('usps.mat',digit)
    w_per,b_per,acc = train_perceptron(X,Y)

    pl.figure()
    pl.plot(sp.arange(len(acc)),acc)
    pl.title('Digit recognition accuracy')
    pl.xlabel('Iterations')
    pl.ylabel('Accuracy')

def plot_img(a):
    ''' Plots one image
    Definition: plot_img(a)
    Input:      a - 1D array that contains an image
    '''
    a2 = sp.reshape(a,(sp.sqrt(a.shape[0]), sp.sqrt(a.shape[0])))
    pl.imshow(a2, cmap='gray')
    pl.colorbar()
    pl.setp(pl.gca(), xticks=[], yticks=[])

def plot_imgs(X, Y):
    ''' Plots 3 images from each of the two classes
    Definition:         plot_imgs(X,Y)
    Input:       X       -  DxN array of N pictures with D pixel
                 Y       -  1D array of length N of class labels {1, -1}
    '''
    pl.figure()
    for i in sp.arange(3):
        classpos = (Y == 1).nonzero()[0]
        m = classpos[sp.random.random_integers(0, classpos.shape[0]-1)]
        pl.subplot(2,3,1+i)
        plot_img(X[:, m])
    for i in sp.arange(3):
        classneg = (Y != 1).nonzero()[0]
        m = classneg[sp.random.random_integers(0, classneg.shape[0]-1)]
        pl.subplot(2,3,4+i)
        plot_img(X[:, m])

compare_classifiers()
