Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
- Parameter: empty
- Return: Converts the value of string into Uppercase and return the (string data type).
```js
let name = 'Arya Stark';
name.toUpperCase();
```
- toUpperCase - convert the value of string to uppercase.

3. `toLowerCase`
- Parameter: empty
- Return: Converts the value of string into Uppercase and return the (string data type).
```js
let name = 'Arya Stark';
name.toUpperCase();
```
toLowerCase - convert the value of string to lowercase.

4. `trim`
- Parameter: empty
- Return: It return trimed string(string data type).

```js
let name = '   Arya Stark   ';
name.trim();
```
- trim - It removes whitespaces form both the ends.

5. `trimEnd`
- Parameter: empty
- Return: It return trimed string form end(string data type).

```js
let name = '   Arya Stark   ';
name.trimEnd();
```
- trim - It removes whitespaces form the end.

6. `trimStart`
- Parameter: empty
- Return: It return trimed string form start(string data type).

```js
let name = '   Arya Stark   ';
name.trimStart();
```
- trim - It removes whitespaces form the start.

7. `concat`
- Parameter: One or more array to concat.
- Return: It return a new array by contining the parameter(string data type).

```js
    let name = 'Arya';
     let sentance = 'A quick brown fox jumped over a lazy dog';
     let houseName = 'Starks';
     name.concat("Stark"); // Arya Stark
     sentance.concat( ",", " Pochi");
  ```
  - concat: It combines two or more array into single array by concatinating them.

8. `endsWith`
- Parameter: It checks either the input value exits on end or not.
- Return: true / false; (boolean data type).

```js
let sentance = 'A quick brown fox jumped over a lazy dog';
sentance.endsWith("dog");
sentance.endsWith("lazy");
```
9. `includes`
- Parameter: a string to be searched for and the position within the string at which to begin searching for searchstring.
-Return: true / false; (boolean data type).
```js
let sentence = 'A quick brown fox jumped over a lazy dog';
let name = 'Arya Stark';

name.includes("Arya"); // true
sentence.includes('over'); // true
sentence.includes('Stark'); // false
```
10. `indexOf`
- Parameter: a string and position in number
- Return: return a number
```js
let sentence = 'A quick brown fox jumped over a lazy dog';
let name = 'Arya Stark';
name.indexOf(`k`);
sentence.indexOf(`fox`);
sentence.indexOf(`t`); // -1
```
- indexOf: It locates the postion/ index of the element in the array. It return default value of -1 if it is not found.

11. `lastIndexOf`
- Parameter: a string and position in number
- Return: return a number
```js
let sentence = 'A quick brown fox jumped over a lazy dog';
let name = 'Arya Stark';
sentence.lastIndexOf(`quick`); // 2
sentence.lastIndexOf(`a`); // 33
sentence.lastIndexOf(`5`); // -1

```
- lastIndexOf: It locates the postion/index of the element in the array, it starts it's search from backward. It return default value of -1 if it is not found.

12. `padEnd`
-Parameter: a target length in number data type and a string to pad.
-Return: return the padded string.
```js
let user = "kartik";
user.padEnd(10);
user.padEnd(10, ".");
user.padEnd(25, "kartik");
```
padEnd: pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`
-Parameter: a target length in number data type and a string to pad.
-Return: return the padded string.
```js
let user = "kartik";
user.padEnd(10);
user.padEnd(10, ".");
user.padEnd(25, "kartik");
```
padEnd: pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start of the current string.

14. `repeat`
Parameter: a count as number

Return: return the repeated string
```js
let user = "kartik";
user.repeat(3); // 'kartikkartikkartik'
user.repeat(3.5); // 'kartikkartikkartik'
user.repeat(1/2); // ""
```
15. `replace`
- Parameter: Can be a string or an object
- Return: A new string, with one, some, or all matches of the pattern replaced by the specified replacement.
```js
let sentence = 'A quick brown fox jumped over a lazy dog';
sentence.replace("o", "m");
```
replace: The replace() method returns a new string with some or all matches replaced by a replacement.

16. `slice`
- Parameter: number
- Return: It returns a new value.

```js
let sentence = 'A quick brown fox jumped over a lazy dog';
sentence.slice(3);
```
- slice: It modify the array by extracting the specified string without making change in its original array.

17. `split`
- Parameter: seperator is a string and a limit is a number which is optional.
return: an array of string.
```js
let sentence = 'A quick brown fox jumped over a lazy dog';
sentence.split(""); // (40) ['A', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 'e', 'd', ' ', 'o', 'v', 'e', 'r', ' ', 'a', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g']
sentence.split(" "); // ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', 'dog']
sentence.split(" ", 2); //(2) ['A', 'quick']
```
18. `substring`
Parameter: two index as number data type

Return: a string
```js
let sentence = 'A quick brown fox jumped over a lazy dog';
sentence.substring(1, 15);
let sentence = 'A quick brown fox jumped over a lazy dog';
sentence.substring(20);
```
