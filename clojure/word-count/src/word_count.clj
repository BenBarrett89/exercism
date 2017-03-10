(ns word-count
  (:require [clojure.string :as str]))

(defn to-words [sentence]
  (str/split sentence #" ")
)

(defn prepare-word [word]
  (re-find (re-matcher #"[a-z0-9]+" (str/lower-case word)))
)

(defn count-words [words raw-word]
  (def word (prepare-word raw-word))
  (cond
    (nil? word) words
    (contains? words word) (assoc words word (+ (get words word) 1))
    :else (assoc words word 1)
  )
)

(defn word-count [sentence]
  (reduce count-words {} (to-words sentence))
)
