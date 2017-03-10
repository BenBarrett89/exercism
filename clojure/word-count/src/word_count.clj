(ns word-count
  (:use [clojure.string :only [lower-case]]))

(defn to-words [sentence]
  (map lower-case (re-seq #"\w+" sentence))
)

(defn word-count [sentence]
  (->> sentence (to-words) (frequencies))
)
