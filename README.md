# Beatles Loops

Create three functions that pay homage to Fab Four. These functions will have one of each type of loops: for, do and do/while.

Make sure you run the tests with `learn -b` to get the full output in the browser.


## johnLennonFacts()
+ Create a function `johnLennonFacts` which accepts one array, a list of odd facts about the Beatles' guitarist.

```js
facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
```

* In the body of the function, create a variable, excitingFacts that stores an empty array.
* Use a while loop to add `"!!!"` to the end of every fact
* Use the push array method to add the new exciting fact to excitingFacts
* Your function should return excitingFacts

## theBeatlesPlay()
Create a function `theBeatlesPlay`, which accepts two parameters- an array of musicians and an array of instruments.
 * In the body of the function, create an empty array stored in a variable
 * The function should also contain a for loop which loops over the array of musicians.
 * The body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: `"John Lennon plays guitar"`. You can index the musicians array and the instruments array at the same time [Rosetta Code Reference](http://www.rosettacode.org/wiki/Loop_over_multiple_arrays_simultaneously#Imperative).
 * Add each string to the empty array
 * The function should return the array of new strings.

## iLoveTheBeatles()
Create a function `iLoveTheBeatles` which prints "I love the Beatles" at least once and up to 10 times. The function should accept a parameter indicating the number of times the declaration of love should be printed.

* The body of the function should create a variable that stores an empty array.
* Implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array.
* The condition of the loop should check to see that the parameter number is less than `10`.
* The function should return the array with the strings `"I love the Beatles!"`.
