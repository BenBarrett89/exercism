(ns anagram
  (:use [clojure.string :only [lower-case split]])
)

(defn split-to-sorted-letters [word]
  (sort (split (lower-case word) #""))
)

(defn not-same-word [word potential-anagram]
  (not= (lower-case word) (lower-case potential-anagram))
)

(defn same-letters [word potential-anagram]
  (= (split-to-sorted-letters word) (split-to-sorted-letters potential-anagram))
)

(defn anagram-of [word potential-anagram]
    (and
      (not-same-word word potential-anagram)
      (same-letters word potential-anagram)
    )
)

(defn anagrams-for [word potential-anagrams]
  (filter #(anagram-of word %) potential-anagrams)
)
