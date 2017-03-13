(ns rna-transcription
  (:require [clojure.string :as str]))

(def dnaToRnaMap (hash-map
  "G" "C"
  "C" "G"
  "T" "A"
  "A" "U"
))

(defn mapDnaToRna [dna-nucleotide]
  (assert (contains? dnaToRnaMap dna-nucleotide))
  (get dnaToRnaMap dna-nucleotide)
)

(defn to-rna [dna-strand]
  (str/join (for [dna-nucleotide (str/split dna-strand #"")] (mapDnaToRna dna-nucleotide)))
)
