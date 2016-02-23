# Beatles Loops

Create three functions that pay homage to Fab Four. These functions will have one of each type of loops: for, do and do/while.

Make sure you run the tests with `learn -b` to get the full output in the browser.


## Lennon Facts in a While Loop

Your first function will use a while loop to add exaggerated punctuation to  odd facts about the Beatles' guitarist. 

```js
facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
```

* **Name**: johnLennonFacts 
* **Input**:  one parameter, the array of original facts
* **Code Block**:
 1. Create a variable, excitingFacts that stores an empty array.
 2. Use a while loop to add `"!!!"` to the end of every fact
 3. Use the push array method to add the new exciting fact to excitingFacts
* **Output**: return the modified sentences, excitingFacts

## The Fab Four in a For Loop
Create a function that uses a for loop to explain the role of each Brit by using a list of their names and their instruments. 

```js
musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
```

* **Name**: theBeatlesPlay, 
* **Input**: two parameters- an array of musicians and an array of instruments.
* **Code Block**: 
 1. Create an empty array stored in a variable
 2. Use a for loop which loops over the array of musicians.
 3. Create a string using the first index of the musicians array and the first index of the instruments array to produce: `"John Lennon plays guitar"`. You can index the musicians array and the instruments array at the same time [Rosetta Code Reference](http://www.rosettacode.org/wiki/Loop_over_multiple_arrays_simultaneously#Imperative).
 4. Add each string to the empty array
* **Output**: The function should return the array of new strings.

## Devotion in a Do/While Loop
Your last function will use a do/while loop to express adoration with the Beatles. This function will make sure everyone is aware of your feelings at least once. 

![beatles-fan](https://media.giphy.com/media/auXbijuTThe36/giphy.gif)

* **Name**: iLovetheBeatles
* **Input**: one parameter, a number
* **Code Block**:
 1. Create a variable that stores an empty array.
 2. Implement a do/while loop inside the function that adds `"I love the Beatles!"` to the empty array.
 3. Then the loop should increment the number passed in as a parameter.
 4. The condition of the loop should check to see that the parameter number is less than `15`.
* **Output**: The function should return the array with the strings `"I love the Beatles!"`.