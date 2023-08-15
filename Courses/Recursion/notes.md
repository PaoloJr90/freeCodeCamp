[Recursion](https://www.youtube.com/watch?v=IJDJ0kBx2LM)

## Recursion

- Recursion is a process (a function in our case) that calls itself
- It's used to solve problems that can be broken down into smaller, repetitive problems
- It's important to have a base case when using recursion, otherwise it will run forever

Some tradeoffs:
| Pros | Cons |
| ---- | ---- |
|Bridges the gap between elegance and complexity | Slowness due to CPU overhead |
|Reduces the need for complex loops and auxiliary data structures | Can lead to stack overflow exceptions
|Can reduce time complexity easily with memoization | Can be unncessarily complex if poorly constructed
| Workds really well with recursive structures like trees, graphs and JSON objects

_Call Stack_

- A stack is a data structure that uses the Last In, First Out (LIFO) principle
- The call stack keeps track of the functions that are currently being executed
- When a function is called, it's pushed onto the call stack
- When a function returns, it's popped off the call stack

```java
// expected output = "hello my friends"
public String A() {
    return "hello " + B();
}
public String B() {
    return "my " + C();
}
public String C() {
    return "friends.";
}
// A() is pushed onto the call stack - this is called a stack frame
// A() calls B(), so B() is pushed onto the call stack - another stack frame
// B() calls C(), so C() is pushed onto the call stack - another stack frame
// C() returns "friends.", so C() is popped off the call stack
// B() returns "my friends.", so B() is popped off the call stack
// A() returns "hello my friends", so A() is popped off the call stack
```

_Call Stack with Recursion_

```java
public String A() {
    return A();
}
// A() is pushed onto the call stack
// A() calls A(), so A() is pushed onto the call stack
// A() calls A(), so A() is pushed onto the call stack
// A() calls A(), so A() is pushed onto the call stack
// and so on...
// Eventually, the call stack will overflow and throw a StackOverflowException
// we have run out of memory
// this is why it's important to have a base case; a condition that will stop the recursion
```

_String Reversal_

```java
public String reverseString(String input) {
    // what is the base case? When do I want to stop recursing?
    if (input.equals("")) {
        return "";
    }
    // what is the smallest amount of work I can do in each iteration?
    return reverseString(input.substring(1)) + input.charAt(0);
}
```

_Palindrome_

```java
public static boolean isPalindrome(String input) {
    // define the base case / stopping condition
    if (input.length() == 0 || input.length() == 1) {
        return true;
    }
    // Do some work to shrink the problem space
    if (input.charAt(0) == input.charAt(input.length() - 1)) {
        return isPalindrome(input.substring(1, input.length() - 1));
    }
    // additional base-casr to handle non-palindromes
    return false;
}
```

_Recursion with numbers_

```java
// decimal to binary
// have to divide integers by 2 and keep track of the remainders
// the remainders will be the binary digits
// when the integer (decimal) is 0, we're done; this is the base case
public class DecimalToBinary {
    public static void main(String[] args) {
        String binary = findBinary(233, "");
    }
public static String findBinary(int decimal, String result) {
    if (decimal == 0) {
        return result;
    }
    result = decimal % 2 + result;
    return findBinary(decimal / 2, result);
    }
}
```

_Sum of Natural Numbers_

```java
// sum of numbers from 1 to n; n is the input
public class SumOfNaturalNumbers {
    public static in recursiveSummation(int inputNumber) {
        if (inputNumber <= 1)
        return inputNumber;
        return inputNumber + recursiveSummation(inputNumber - 1);
    }
    public static void main(String[] args) {
        int result = recursiveSummation(5);
        int result2 = recursiveSummation(10);
        System.out.println(result);
        System.out.println(result2);
    }
}
```

## Divide & Conquer

1. divide problem into several subproblems
   - normall the subproblems are similar to the original
2. Conquer the subproblems by solving them recursively
   - base case: solve small enough problem by brute force
3. Combine the solutions to get a solution to the subproblems
   - finally, a solution to the original problem
4. Divide & Conquer is a recursive algorithm design paradigm

_Binary Search_

- Binary search is a divide and conquer algorithm that searches a sorted array for a target value

```java
public static in binarySearch(in[] A, int left, int right, int x) {
    if(left > right) {
        return -1;
    }
    int mid = (left + right) / 2;

    if (x == A[mid]) {
        return mid;
    }
    if (x < A[mid]) {
        return binarySearch(A, left, mid - 1, x);
    }
    return binarySearch(A, mid + 1, right, x);
}
```

_Fibonacci (non-optimized)_

```java
public static long fib(long n) {
    if ((n == 0) || (n ==1))
    return n;
    else
        return fib(n - 1) + fib(n - 2);
}
// fibonnaci sequence adds the previous two numbers to get the next number
// in this recursive call the previous two numbers are calculated each time
```

_Merge Sort_

- Merge sort is a divide and conquer algorithm that sorts a list, by dividing it into two halves, sorting the two lists independently, and then merging the results

```java
public class MergeSort {
    public static void main(String[] args) {
        int[] data = { 9, 5, 1, 4, 3 };
        mergeSort(data, 0, data.length - 1);
        System.out.println("stop");
    }
    public static void mergeSort(int[] data, int start, int end) {
        if (start < end) {
            int mid = (start + end) / 2;
            mergeSort(data, start, mid);
            mergeSort(data, mid + 1, end);
            merge(data, start, mid, end);
        }

    public static void merge(in[], int start, int mid, int end) {
        // build a temp array to avoid modifying the original array
        int[] temp = new int[end - start + 1];
        int i = start, j = mid + 1, k = 0;

        // while both sub-arrays have values, then try and merge them in sorted order
        while (i <= mid && j <= end) {
        if (data[i] <= data[j]) {
            temp[k] = data[i];
            } else {
                temp[k++] = data[j++];
            }
        }
        // add the rest of the values from the left sub-array into the result
        while (i <= mid) {
            temp[k] = data[i];
            i++; k++;
        }
        // add the rest of the values from the right sub-array into the result
        while (j <= end) {
            temp[k] = data[j];
            j++; k++;
        }

        for (i = start; i <= end; i++) {
            data[i] = temp[i - start];
        }
    }
    }
}
```
