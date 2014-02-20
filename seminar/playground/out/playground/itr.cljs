(ns playground.itr
  (:require [cloact.core :as cloact :refer [atom]]))

(defn calc-itr [params]
  (let [log-2 (fn log-2 [x] (/ (Math/log x) (Math/log 2)))
        {:keys [accuracy decisions duration targets]} params]
    (assoc params :itr
      (* (/ decisions duration)
         (+ (* accuracy (log-2 accuracy))
            (* (- 1 accuracy)
               (log-2 (/ (- 1 accuracy)
                         (dec targets))))
            (log-2 targets))))))

(def itr-data
  (atom
   (calc-itr {:accuracy 0.99 :decisions 20 :duration 5 :targets 2})))

(defn set-itr [key val]
  (swap! itr-data #(calc-itr (assoc % key val))))


(defn slider [{:keys [value min max param]}]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change #(set-itr param (-> % .-target .-value))}])


(defn itr-component []
  (let [{:keys [accuracy decisions duration targets itr]} @itr-data
        [color diagnose] (cond
                          (< itr 0) ["red" "random"]
                          (< itr 10) ["orange" "foo"]
                          (< itr 30) ["blue" "foo2"]
                          :else ["green" "perfect"])]
    [:div
     [:div
      "Targets: " targets
      [slider {:value targets :min 1 :max 20 :param :targets}]]
     [:div
      "Decisions: " decisions
      [slider {:value decisions :min 1 :max 150 :param :decisions}]]
     [:div
      "Duration: " duration "min"
      [slider {:value duration :min 1 :max 10 :param :duration}]]
     [:div
      "Accuracy: " (/ (Math/round (* accuracy 10000)) 100) "%"
      [:input {:type "range"
               :value (* accuracy 100)
               :min 0 :max 100
           :style {:width "100%"}
           :on-change #(set-itr :accuracy
                                (* (int (-> % .-target .-value)) 0.01))}]]
     [:br]
     [:h3 (/ (Math/round (* itr 100)) 100) " B/min"]]))