// problem statement

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

Example


Queries are interpreted as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1
Add the values of  between the indices  and  inclusive:

index->	 1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
	[3,3,3,10,10,8,8,8,1, 0]
The largest value is  after all operations are performed.

Function Description

Complete the function arrayManipulation in the editor below.

arrayManipulation has the following parameters:

int n - the number of elements in the array
int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
Returns

int - the maximum value in the resultant array
Input Format

The first line contains two space-separated integers  and , the size of the array and the number of operations.
Each of the next  lines contains three space-separated integers ,  and , the left index, right index and summand.

Constraints

Sample Input

5 3
1 2 100
2 5 100
3 4 100
Sample Output

200
Explanation

After the first update the list is 100 100 0 0 0.
After the second update list is 100 200 100 100 100.
After the third update list is 100 200 200 200 100.

The maximum value is .



//   

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

For example, the length of your array of zeros $n=10$. Your list of queries is as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1
Add the values of $k$ between the indices $a$ and $b$ inclusive:

 1 2 3  4  5 6 7 8 9 10  <---index
[0,0,0, 0, 0,0,0,0,0, 0]
[3,3,3, 3, 3,0,0,0,0, 0]
[3,3,3,10,10,7,7,7,0, 0]
[3,3,3,10,10,8,8,8,1, 0]
The largest value is 10 after all operations are performed.

Sample Input
5 3
1 2 100
2 5 100
3 4 100
Sample Output
200

// 



// solution 



function arrayManipulation(n, queries) {
    let arr = []
    let maxValue = 0
    let currentNumber = 0;
    queries.forEach(([startIndex, endIndex, value]) => {
        arr[startIndex] = arr[startIndex] || { start: 0, end: 0 };
        arr[endIndex] = arr[endIndex] || { start: 0, end: 0 };
        arr[startIndex].start += value;
        arr[endIndex].end += value;
    });
    arr.forEach((data) => {
        if (data) {
            currentNumber += data.start;
            if (currentNumber > maxValue) {
                maxValue = currentNumber;
            }
            currentNumber -= data.end;
        }
    });
    return maxValue;
}

