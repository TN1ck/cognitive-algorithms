(defproject playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2127"]
                 [cloact "0.1.0"]]

  :plugins [[lein-cljsbuild "1.0.1"]
            [org.clojars.wokier/lein-bower "0.3.0"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "playground"
              :source-paths ["src"]
              :compiler {
                :output-to "playground.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
