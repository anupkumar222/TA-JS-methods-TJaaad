Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array.

2. `join`
- Parameter: Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.

- Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.

3. `flat`
It flatens the array and defaults to 1.
No mutation

4. `push`
It is used to add elements in the end of the array.
Mutation off array.

5. `indexOf`
It locates the the position in the array.
No mutation

6. `lastIndexOf`

7. `includes`
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

No mutation

8. `reverse`
It reverse the sequence of the array.

mutates
9. `every`
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
No mutation

10. `shift`
The shift() method removes the first element from an array and returns that removed element.AIt changes the length of the array.
Mutates

11. `splice`
It removes or replace the existing array.
Mutate

12. `find`
 It returns the first element in the provided array that satisfies the provided testing function. 
 default value is undefined.
 No mutation

13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
