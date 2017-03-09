(ns bob
  (:require [clojure.string :as str]))

(defn containsLetters [talk]
  (re-find (re-matcher #"[a-zA-Z]+" talk))
)

(defn lettersAllUppercase [talk]
  (= (str/upper-case talk) talk)
)

(defn shouting [talk]
  (and (containsLetters talk) (lettersAllUppercase talk))
)

(defn question [talk]
  (str/ends-with? talk "?")
)

(defn silence [talk]
  (str/blank? talk)
)

(defn response-for [talk]
  (if (silence talk)
    "Fine. Be that way!"
    (if (shouting talk)
      "Whoa, chill out!"
      (if (question talk)
        "Sure."
        "Whatever."
      )
    )
  )
)
