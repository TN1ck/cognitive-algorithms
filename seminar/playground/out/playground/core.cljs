(ns playground.core
	(:require [cloact.core :as cloact :refer [atom]]
            [playground.slides :as slides]))

(defn presentation []
  [:div.reveal
   [:div.slides
    (apply concat
      [(slides/introduction)
       (slides/classifier)
       (slides/csp)])]])

(defn run-presentation []
  (cloact/render-component [presentation]
                           (.-body js/document)))

(run-presentation)

(. js/Reveal
   (initialize
    (js-obj
     "transition" "linear"
     "backgroundTransition" "slide"
     "controls" false
     "progress" true
     "history" true
     "center" false
     "dependencies" (array
                     (js-obj
                      "src" "bower_components/reveal.js/plugin/math/math.js"
                      "async" false)))))

(. js/console (log "Hello world1!"))
