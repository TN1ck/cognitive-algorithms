(ns playground.slides
  (:require [cloact.core :as cloact :refer [atom]]
            [playground.itr :as itr]
            [playground.svg :as svg]))


(defn slide [content]
  [:section content])

(defn slide-header []
  (slide [:div
          [:h2 "Optimizing Spatial\nFilters for Robust EEG\nSingle-Trial Analysis"]
          [:h4 "A summary of the paper by Tom Nick"]]))

(defn slide-eeg []
  (slide
   [:div.left
    [:div.explain
     [:h3 "EEG - Electroencephalography"]
     [:p "Electroencephalography (EEG) is the recording of electrical activity along the scalp."]
     [:div.center
      [:img {:src "resources/img/EEG_cap.png"}]]
     ]]))

(defn slide-spatial []
  (slide
   [:div.left
    [:div.center
     [:strong "Spatial filters help us to transform the signal to something more useful."]]
    [:br]
    [:ul
        [:li "Raw EEG scalp potentials are known to have a poor spatial resolution owing to volume conduction."]
        [:li "Multichannel EEG gives us a rather blurred image"]
        [:li "Visual Cortex dominates other signals, e.g. the sensomotoric ones."]]]))

(defn slide-single-trial []
  (slide
   [:div.left
    [:div.explain
     [:h3 "Single-Trial Analysis"]
     [:p "Instead of calculating the mean across trials, we look at each trial invidually."]
     [:br]
     [:p "There are two classes:"]
     [:ul
      [:li
       [:b "univariate"]
       [:br]
       [:p "In univariate we extract the information using all trials."]]
      [:li
       [:b "multivariate"]
       [:br]
       [:p "In multivariate we extract information from each trial individually."]]]
     [:br]
     [:p "Here we use multivariate to build a classifier using the the trial/label tupels"]]]))

(defn slide-bci []
  (slide
   [:div.left
    [:h3 "The BCI-System"]
    [:div.center
     [:img {:src "/resources/img/bci.png"}]]]))

(defn slide-bci-2 []
  (slide
   [:div.left
    [:h3 "BCI based on sensorimotor rythms"]
    [:img {:src "/resources/img/erd.png"}]
    [:p "ERD during motor imagery of the left and right hand."]
    [:ul
     [:li "User imagines a movement"]
     [:li "SMR create event related desynchronization"]
     [:li "After signal-processing, filtering and classifying the imagined movement will create the BCI-corresponding action."]]]))

(defn slide-key-facts []
  (slide
   [:div.left
    [:h3 "This specific Experiment"]
    [:ul
     [:li "3 Classes - " [:b "left hand, right hand, foot"]]
     [:li "420 trials of imaginary movement (140 for each class) in a random- ized order for each subject in the " [:b "calibration phase"]]
     [:li "5 sessions, 100 runs each in the " [:b "feedback phase"]]
     [:li "55 Elecrodes were used to measure the brain activity"]]]))

(defn slide-itr []
  (slide
   [:div.left
    [:h3 "Information Transfer Rate"]
    [:p "Used to measure the performance of the classifier."]
    [:p "$$ITR = \\frac{\\text{decisions}}{\\text{duration}} \\cdot
     \\left(p\\log_2(p) + (1 - p)\\log_2\\left(\\frac{1-p}{N - 1}\\right) + \\log_2(N) \\right)$$"]
    [:br]
    (itr/itr-component)]))

(defn waves []
  (slide
   [:div.left
    [:h3 "Macroscopic brain activity"]
    [:p "There are different types of brain-waves:"]
    [:p "Here I list all the types with a nice animation and show why alpha-waves are a problem for the mu-waves."]]))

(defn waves-again []
  (slide
   [:div.left
    [:h3 "Alpha-waves dominate Mu-waves"]
    [:p "show same stuff as before, make clear we have to do something."]]))

(defn experiment []
  (slide
   [:div.left
    [:h3 "Motor Cortex"]
    [:p "There is a mapping between somatosensory/motor cortex and the body parts."]
    [:div.center.fragment
      [:img {:src "resources/img/motor.gif" :height 400}]]
    [:b.fragment "Event-related desynchronisation (ERD) is caused also by imagined movements."]]))

(defn slide-filter []
  (slide
   [:div.center
    [:strong "Only 50% of the contribution to each elcetrode comes from a source within 3cm radius."]]))

(defn introduction []
  [(slide-header)
   (slide
     [:strong "After a short training, control a mousepointer only with your mind. Works also when you're disabled."])
   (slide-eeg)
   (slide-single-trial)
   (slide-bci)
   ;; (slide-bci-2)
   (slide
    [:div.left
     [:h3 "Performance in BCI"]
     [:ul
      [:li.fragment "12 out of 14 BCI novices were able to contral the BCI system in " [:b "their very first session."]]
      [:li.fragment "A test subject was able to write at a speed of " [:b "1.4 WPM"] " (7 letters per min)"]
      [:li.fragment "An Accuracy of 90% per average was achieved, "[:b "up to 98%"]" in one case"]
      [:li.fragment [:b "37 B/MIN"] " was the maximum ITR achieved"]]])
   (experiment)
   (slide-filter)
   (slide-spatial)
   ])

(defn classifier []
  [(slide
    [:strong "The Classifier determines in which direction the cursor should move. The higher the accuracy, the dimension or time spent for a decision the better the ITR."])
   (slide-itr)
   (slide
    [:div.left
     [:h3 "Overview"]
     [:p.fragment "Let $X \\in \\mathbb{R}^{C ~ \\times ~ T}$ be a short segment of EEG signal."]
     ;;[:div {:dangerouslySetInnerHTML (str "__html: " svg/eeg)}]
     [:img.fragment.no-border {:src "resources/img/cogalg.svg" :height 400}]
     [:p.fragment "$X$ is " [:b "filtered, centered"] " and " [:b "scaled."]]])
   (slide
    [:div.left
     [:p.fragment "The Classifier is a function that predicts the label of a trial $X$."]
     [:p.fragment "$$f(X) = \\underbrace{\\sum^J_{j=1}\\beta_j\\overbrace{\\log(\\underbrace{w_j^TXX^Tw_j}_{1: CSP})}^{2} + \\beta_0}_{3: LDA}$$"]
     [:ol
      [:li.fragment "At first the signal is projected by $J$ spatial filters."]
      [:li.fragment "Next it takes the logarithm of the power of the projected signal."]
      [:li.fragment "Finally it linearly combines these J dimensional features and adds a bias $\\beta_0$"]]
     [:br]
     [:br]
     [:b.fragment "This is the state-of-the-art approach, LDA + CSP has proven to yield the best results."]])])

(defn csp []
  [(slide
    [:strong "In a nutshell, CSP filters maximize the variance of the spatially filtered signal under one condition while minimizing it for the other condition."])
   (slide
    [:div.left
     [:p [:b "CSP"] " maximizes the variance of two classes the data is split into."]
     [:p.fragment [:b "PCA"] " maximizes the variance of the data."]
     [:br]
     [:div.center.fragment [:strong "CSP is like a supervised version of PCA."]]])
   (slide
    [:div.left
     [:h3 "PCA Recap"]
     [:p "We obtained some data $[x_1, \\dots, x_N] \\in \\mathbb{R}^{D \\times N}$ "]
     [:p "PCA finds a direction $w \\in \\mathbb{R}^D$ such that the variance of the projected data $w^TX$ is maximal"]
     [:p "$$Var(w^TX) = w^TXX^Tw$$"]
     [:p "Find the maximum"]
     [:p "$$\\text{argmax}_w \\frac{w^TXX^Tw}{w^Tw}$$"]
     [:p "Setting the derivative to zero yields $XX^Tw = \\lambda w$"]
     [:b.fragment "The direction of maximal variance in the data is equal to the eigenvector having the largest eigenvalue."]])
   (slide
    [:div.left
     [:h3 "How to calculate the CSP"]
     [:p "Let $\\Sigma_+ \\in \\mathbb{R}^{C~\\times ~C}$ and $\\Sigma_- \\in \\mathbb{R}^{C~\\times ~C}$ be the estimates of the covariance matrices. + and - denotate the two conditions."]
     [:p "$$\\Sigma_c = \\frac{1}{\\#(I_c)}\\sum_{i \\in I_c}X_iX_i^T\\quad\\quad c \\in \\{+,-\\}$$"]
     [:p "Where as $I_c$ is the set of labels for the given $c \\in \\{+,-\\}$"]
     [:br]])
   (slide
    [:div.left
     [:h3 "How to calculate the CSP - part 2"]
     [:ul
      [:li "$\\Sigma_+ - \\Sigma_-$ is the " [:b "discriminative activity"] " - maximize this"]
      [:li "$\\Sigma_+ + \\Sigma_-$ is the " [:b "common activity"] " - minimize this"]]
     [:p "The CSP finds a direction so the common activity is minimal and discriminative is maximal."]
     [:p "$$\\text{argmax}_w = \\frac{w^T(\\Sigma_+ - \\Sigma_-)w}{w^T(\\Sigma_+ + \\Sigma_-)w}$$"]
     [:br]
     [:p "Setting the derivative to zero yields, " [:b "like in the PCA to an eigenvalue-problem."]]])
   (slide
    [:div.left
     [:h3 "How to calculate the CSP - part 3"]
     [:br]
     [:p "$$\\Sigma_+w = \\lambda\\Sigma_-w$$"]
     [:br]
     [:p "Wehreas $W$ consists of the column-vectors $w_j$ with $\\lambda_j = w_j^T\\Sigma_cw_j$"]
     [:ul
      [:li "Note: $\\lambda^c \\ge 0$ is the variance in condition $c$ in the corresponding surrogate channel and $\\lambda_j^+ + \\lambda_j^- = 1$"]
      [:li "So if $\\lambda^+$ is close to 1, $w_j$ yields high variance in the positive condition and low variance in the negative."]]])
   (slide
    [:div.left
     [:h3 "CSP"]
     [:p "We call each vector $w_j \\in \\mathbb{R}^C(j=1,\\dots, C)$ of $W$ a " [:b "filter"]]
     [:p "We call each row $a_j \\in \\mathbb{R}^C(j=1, \\dots, C)$ of ${W^{-1}}^T$ a " [:b "pattern"]]
     [:div.center [:img {:src "resources/img/patterns.png" :height "400"}]]
     ])
   ;;(slide
   ;; [:div.left
   ;;  [:h3 "Feedback with CSP Filters"]
   ;;  [:p "During BCI Feedback, the most recent segemnt of EEG is processed and translated by the classifier into a signal."]
   ;;  [:br]
   ;;  [:p.fragment "The time-interval can change in length, shorter give us a more responsive feedback with more noise, longer gives us a delay but the accuracy is higher."]])
   (slide
    [:div.left
     [:h3 "Variants and Extensions"]
     [:ul
      [:li [:b "Multiclass: "] "extend the CSP to multiclass problems"]
      [:li [:b "CSSP: "] "using a delayed input the signal to gain a simple frequency filter"]
      [:li [:b "Regularizing CSP: "] "because CSP shows us which rows are the most important (highest EV) we can reduce the number of electrodes without losing much accuracy."]
      [:li [:b "Reduce calibration data: "] "use prior information from trials to improve the calibration-phase before a feedback-phase"]]])])