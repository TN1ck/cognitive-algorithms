# Tom Nick - 340528
# Maximilian Bachl - 341455
import numpy as np
import pylab as pl
import scipy as sp
import scipy.linalg as lg
import pdb


def pca(X,ncomp=10):
    ''' Principal Component Analysis
	INPUT: 	X       - DxN array of N data points with D features
	        ncomp   - number of principal components to estimate
	OUTPUT: W       - D x ncomp array of directions of maximal variance,
	                 sorted by their eigenvalues
	        H       - ncomp x N array of projected data '''
    ncomp = min(np.hstack((X.shape, ncomp)))
    # print(ncomp)
    #center the data
    # pdb.set_trace()
    mean = np.mean(X, axis=1)
    # Hack in order that python doesn't suck anymore
    mean = map(lambda x: [x], mean)
    # pdb.set_trace()
    X = X - mean
    # compute linear kernel
    K = (X.T).dot(X)
    # print(X)
    # print(K)
    # compute eigenvectors and sort them according to their eigenvalues
    # pdb.set_trace()
    eigvals = lg.eigvals(K)
    num_of_eigvals = len(eigvals)
    eigvals = np.sort(eigvals)
    # pdb.set_trace()
    eigvals = eigvals[::-1]
    # pdb.set_trace()
    eigvals = eigvals[0:ncomp]
    eigenvectors = lg.eigh(K, eigvals=(num_of_eigvals-ncomp, num_of_eigvals-1))
    # pdb.set_trace()
    eigenvectors = eigenvectors[1]
    # pdb.set_trace()
    # compute W and H
    W = X.dot(eigenvectors)

    # Hack of the century!!!!111!11
    W = W.T
    W = W[::-1]
    W = W.T

    H = (W.T).dot(X)

    return W, H

def get_data(fname='newsdata_BOW.npz'):
	foo = np.load(fname)
	dates = foo['dates']
	BOW = np.array(foo['BOW_features'].tolist().todense())
	words = foo['words']
	return BOW,words,dates

def nmf(X,ncomp=10,its=100):
	'''Non-negative matrix factorization as in Lee and Seung http://dx.doi.org/10.1038/44565
	INPUT: 	X       -  DxN array of N data points with D features
	        ncomp	- number of factors to estimate
			its	    - number of iterations
	OUTPUT: W       - D x ncomp array
	        H       - ncomp x N array '''
	ncomp = min(np.hstack((X.shape, 10)))
	X = X + 1e-19
	# initialize randomly
	W = sp.random.rand(X.shape[0],ncomp)
	H = sp.random.rand(X.shape[1],ncomp).T
	# update for its iterations
	for it in sp.arange(its):
		H = H * (W.T.dot(X)/(W.T.dot(W.dot(H))))
		W = W * (X.dot(H.T)/(W.dot(H.dot(H.T))))
	return W,H

def plot_trends(ntopics=8,method=nmf,topwhat=10):
    #load data
    BOW,words,dates = get_data()
    topics,trends = method(BOW,ntopics)
    for itopic in range(ntopics):
		pl.figure(figsize=(13,10))
		pl.plot(trends[itopic,:].T)
		ranks = (-abs(topics[:,itopic])).argsort()
		thislabel = words[ranks[:topwhat]]
		pl.legend([thislabel])
		days = sp.arange(0,BOW.shape[-1],24*7)
		pl.xticks(days,dates[days],rotation=20)
    pl.show()

def test_assignment6():
    ##Example 1
    X = sp.array([[0, 1], [0, 1]])
    W, H = pca(X, ncomp = 1)
    # pdb.set_trace()
    assert(sp.all(W / W[0] == [[1], [1]]))
    print '2 datapoint test passed'

    ##Example 2
    #generate 2D data
    N = 100
    cov = sp.array([[10, 4], [4, 5]])
    X = sp.random.multivariate_normal([0, -20], cov, N).T
    #do pca
    W, H = pca(X)
    #plot result
    pl.figure()
    pc0 = 10*W[:,0] / np.linalg.norm(W[:,0])
    pc1 = 10*W[:,1] / np.linalg.norm(W[:,1])
    pl.plot([-pc0[0], pc0[0]], [-pc0[1]-20, pc0[1]-20], '-k', label='1st PC')
    pl.hold(True)
    pl.plot([-pc1[0], pc1[0]], [-pc1[1]-20, pc1[1]-20], '-.r', label='2nd PC')
    pl.plot(X[0,:], X[1,:], '+', color='k')
    pl.axis('equal')
    pl.legend(loc=1)
    pl.show()

plot_trends(method=pca)
# test_assignment6()