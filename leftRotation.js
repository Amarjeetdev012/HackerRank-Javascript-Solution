//problem statement

The problem states that we’ll be getting an array as an input (e.g. [1,2,3,4,5]) along with an integer (d). Then, we need to shift each of the array’s elements unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2].

My favorite way to solve algorithms is by performing these steps:

Draw it out; and do it manually as a human would
Take those steps, and write it out, or pseudo code it into steps
THEN begin translating that into code.
So, by taking these steps,

Take the first element of the array…
Put in the back
Repeat this as many times as d says.
//

A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

Example


After  rotations, .

Function Description

Complete the rotateLeft function in the editor below.

rotateLeft has the following parameters:

int d: the amount to rotate by
int arr[n]: the array to rotate
Returns

int[n]: the rotated array
Input Format

The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
The second line contains  space-separated integers that describe .

Constraints

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
Explanation

To perform  left rotations, the array undergoes the following sequence of changes:




//solution


function rotateLeft(d, arr) {
    let data = arr.splice(d)
    console.log(data)
    let result = data.concat(arr)
    return result
}



