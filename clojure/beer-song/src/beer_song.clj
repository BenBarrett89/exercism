(ns beer-song
  (:use [clojure.string :only [capitalize join]])
)

(defn get-bottles-of-beer [number]
  (cond
    (== number 0) "no more bottles of beer"
    (== number 1) "1 bottle of beer"
    :else (format "%d bottles of beer" number)
  )
)

(defn get-beer-on-the-wall [number]
  (str (get-bottles-of-beer number) " on the wall")
)

(defn get-action [number]
  (cond
    (== number 0) "Go to the store and buy some more"
    (== number 1) "Take it down and pass it around"
    :else "Take one down and pass it around"
  )
)

(defn get-next-number [number]
  (if (== number 0) 99 (- number 1))
)

(defn verse [number]
  (str
    (capitalize (get-beer-on-the-wall number)) ", "
    (get-bottles-of-beer number) ".\n"
    (get-action number) ", "
    (get-beer-on-the-wall (get-next-number number)) ".\n"
  )
)

(defn sing-song [start end]
  (->>
    (range start (- end 1) -1)
    (map #(verse %))
    (join "\n")
  )
)

(defn sing
  ([start end] (sing-song start end))
  ([start] (sing start 0))
)
