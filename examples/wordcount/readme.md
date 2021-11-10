# az_words.js

Loads as `js.words`.

> `getWords(text)` => `string[]`

Returns an array of all words in passed text.

> `getWordCount(text)`, `getSentenceCount(text)`, `getCharacterCount(text)`

Return the number of words, sentences, and characters in passed text, respectively.

> `getWordCountInTags(env: sk.getEnv(), tags: string[])` => `[tag: string, files: number, words: number, characters: number, sentences: number][]`

Requires Dataview.

Returns the wordcounts for each provided tag. Reads all the files in each tag, so may be a bit slow. Tags may be a string array or comma-separated string, without the `#`. 

Note that tags will include their subtags and thus using both a tag and its subtags will count their totals multiple times in the total sum.

> `getWordCountInFiles(env: sk.getEnv(), files?: TFile[])` async => `[[files: number, words: number, characters: number, sentences: number]]`

Returns the total wordcount for all passed files. If no files are passed, counts all files in vault.

> `getCountOfWords(sk: sk, files?: TFile[], exclusions?: string[])` async => `{words: [string, number][]}`

Returns a count of all unique words (excluding filtered words) present in your vault as an array of words and their frequency. Reads all the files in your vault, so a bit slow (125ms for 500~ files on my machine).

If files are provided, will narrow search to those files, else will search all files. If exclusions are provided, will exclude those words, else will exclude a packaged list of exclusions.

> `getCountOfWordsInTags(env: sk.getEnv(), tags: string | string[], exclusions?: string[])`

Requires Dataview.

Runs `getCountOfWords` on all files with one or more of the included tags. Tags may be a string array or comma-separated string, without the `#`. 

# Templates

These use (and thus require) Dataview to query tags and build their tables. Maybe I'll make a table utility in the future.

Depending on the number of files you're counting, these can be relatively expensive operations. I implemented the render modal feature specifically for utilities such as these that fit better as a modal than as a page element.

## az_word-count.eta

An example using `getWordCountInTags()`.

`tags` - comma separated list of tags in which to count words.

Renders a dataview table displaying the results.

## az_word-frequency.eta

An example using `getCountOfWords()` and `getCountOfWordsInTags()`.

`tags` - comma separated list of tags in which to count words. If tags are not provided, will count all words in vault.

Renders a dataview table displaying the results.


