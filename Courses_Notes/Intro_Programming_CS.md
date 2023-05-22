[Introduction to Progamming & Computer Science](https://www.youtube.com/watch?v=zOjov-2OZ0E)

<details open>
<summary> What is Programming? </summary>
"Programming" Definitions:

    - The process of preparing an instructional program for a device
    - Attempting to get a computer to complete a specific task without making mistakes

Computers are only smart because we program them to be

Computer only understands machine code (binary):

- Series of 1's and 0's fed and interpreted by the computer
- Only way a computer can read english instructions

Difficult (almost impossible) for humans to understand binary code:

- Programming languages serve as a middle-man
  - Translate instructions into machine code that the computer understands

Each language is unique in how they operate:

- Java & Python: general purpose languages
- HTML/CSS: designed for specific tasks (ex: web design)

Each language has an attribute known as power or level

- Comparing it to machine code --> lower = more similar to machine code
- Low-level languages: Assembly or C
- High-level languages: Java or Python

How do we write code?
We use IDE's (Integrated Development Environments) to write code

- A place (graphic interface) to write, run and debug code and convert it to machine code
  - Ex: Visual Studio, NetBeans, IntelliJ
- Also include:
  - Built-in error-checking (syntax errors)
  - Auto-fill
  - Project hierachy
  - Console

Each language has its own set of rules to follow within an IDE

- Programming grammar is referred to as syntax
  - Ex:
    - how you type certain functions
    - What you put at the end of each line
- Each language syntax is unique
- Breaking programming rules will result in an error

Examples in creating a variable (each language take a different approach):

```java
// Java
int variable = 3;
```

```python
# Python
x = 3
```

```JavaScript
// JavaScript
var x = 3;
```

How do we get information from computers? <br>
Programmers keep track of their progress by looking at the console ( a developer tool)

- An interface within the computer that outputs text from the program using code
  - More specifically, a print statement (syntax varies depending on the language)
    - Prints text to the console for the programmer's viewing
- Tends to be hidden away begin the scenes

What can computer's do?
Computer already knows how to do simple arithmetic: addition, subtraction, multiplication and division

- Additional operator: modulus (%) --> allows us to get the remainder of divisional operation
  - Ex: 10 % 3 = 1 --> divide 10 by 3, ignore the answer, and output the remainder = 1
  - Useful for determining if a number is even or odd (remainder = 0 (even), remainder = 1 (odd)

Computers can work with strings (text)

- Anything enclosed by quotation marks is denoted as a string
- Concatenation: adding strings together
</details>

---

<details open>
<summary>What are variables?</summary>

Something that can store information

    - Can be referenced and manipulated (added to/modified)
    - Each variable has a type, a name a piece of information stored inside of it
    - Name is simply a name for the variable
    - Type of variables (primitive)
    	- Integer (ex: 4)
    	- Boolean (True or False)
    	- Float (ex: pi)
    	- Double (ex: 4.0)
    	- String (ex: "Hi")
    	- Char (ex: "A")

_Integers_ <br>
A variable that can store an integer value (negative and positive)

- Cannot hold any decimal values

_Booleans_ <br>
Can only store a value of true or false

- No other type of information
- Used in conditional statements

_Floats and doubles_<br>
Both are type of floating point data types

- Can store number with decimal places
- Float variables:
  - Can store up to 32 bits of information
- Double variables
  - Can store up to 64 bits of information

_Strings_ <br>
Can store strings of letters (text)

- Useful for displaying text and storing input information
  - Information the user puts into our program
- Strings can be concatenated together to form combinations of string variables
- Also useful for outputting information in a readable format for the user

_Chars --> Characters_

- Each hold one character
- Useful when a programmer wants to read one button press of one character in a string without using a string variable
  - Ex: game controlled by keyboard (each key pressed needs to be translated into carrying out a function)

**Why are variable so useful?**

- Taking input from the user
- Making our program have variability - have it changed based on certain factors
- Manipulating variables is necessary for many tasks in programming

How do we manipulate variables? <br>
When we define a variable, the computer creates a little space in memory that store your variable name and its contents

- Ex: y = 10 (python)
- Reasons to do this:
  - Want to store information for later use in the program
  - Using it to store information given by the user
- Trying to reference a blank variable will results in a NullPointerException
- Variables can point to the same contents - usually done to save space in code for things that will have the same value
  - Ex: y = 10, b = y
- Variables can be updated
  - Ex: y = 10 --> y = 15
- After code has run its course, variable are deleted in memory
- Integer, float and double variables can be:
  - Added
  - Subtracted
  - Multiplied
  - Divided
  - Modulused
- String variables can be added
- Char's and Booleans cannot be operated on

**Naming variables** <br>
Important rule for naming variables

- They MUST be one continuous string
- Most programmers name variables according to camelCase (easier to read)
  - Don't capitalize the first word, but capitalize the first letter of all words after it
    § Ex: thePlayerScore
- Could also use underscores (\_)

</details>

---

**What are conditional statements?** <br>
Most basic conditional statement is the IF statement

- If something is true, do this, otherwise do something else
- Each programming language has their unique syntax for coding an IF statement
- Each condition is evaluated as a Boolean (True or False)

The else-if statement <br>
Will only be evaluated if the preceding IF (or else-if) was bypassed due to being false

The else statement
Comes after an if/if-else statement and will always carry our instructions

- Carries our instructions if all previous cases are not true/false

If, else-if and else statements can clutter code. To circumnavigate this problem, we may use a switch statement:

- An easily collapsible way to write many if-else statements
  - Input a variable, then determine which "cases" that variable could be
- Example: Switch(var):
  - Start with a colon (:)
    - Each switch statement also includes a "default" case (else statement)
    ```javascript
    // JavaScript
    switch (var) {
        case 1:
            // Do something
            break;
        case 2:
            // Do something
            break;
        default:
            // Do something
            break;
    }
    ```
- Adds variability to programming
- Program runs differently based on user input
- If a user does something, we want to be able to adapt accordingly
- Without, a program would run the same way every time

---

**What are Array's?** <br>
Variables are very good at storing singular bits of information. They are unable to hold more than one piece of data

An array is a list of data:

- Can be integers, strings or even other arrays
- All information in an array is related
- Like columns in Excel/Google Sheets

Important note about arrays is how we reference each element inside of them

- In programming, we use indexes; the data's place in the array
- Zero-based indexing (first element = 0th index)
- Referencing an outside element of the array would result in a n "out-of-bounds" error

Can choose to create an array with elements immediately

- ex: y = [1,2,3]
  Or to populate later
- Create an array with a specific size, but choose to add elements later
  - Ex: y = [" "," "," "]

When we create arrays, their sizes are final

- Cannot be increased or decrease in size through conventional methods (python allows this)
- This allows us to easily access their indexes

Arrays cannot have different data types within (python allows this)

Putting an array inside an array is known as a 2-dimensional array

- Similar to matrices in math/physics classes
- To index 2D arrays we use 2 numbers (ex: (2,1))
  - First number is the row
  - Second number is the column

**What are Loops?** <br>
A statement that is used to run certain instructions repeatedly

- Very useful for repeated sections of code

_The For loop_ <br>
Consists of three parts

1. An integer value
2. A conditional statement the integer must reach to exit the loop
3. An operation to modify the integer value after the instructions inside the loop are completed
   To avoid an infinite loop, you must ensure to setup a condition that, given the initial integer value and the operation, will at some point be met

_The For Each loop_ <br>
Used for iterating through entire arrays or lists

- The loop will go through each element in the array and carry out a set of instructions for each value
- Useful for performing operations across an entire collection of data

_The While loop_ <br>

- Will continually carry out its instructions while a conditional statement given to it is true
- Similar to a for loop, but broken apart
- Can sometime be used to purposely create an infinite loop

_The Do-While loop_ <br>

- Functionally similar to while loops
- However, will always carry out instructions at least once
- Instructions inside loop will run once before checking the conditional statement

Benefits of Loops:

- Perform operations many times in a row
- Able to iterate through arrays and lists
- Decrease clutter of your code

---

**Errors Introduction:** <br>
Code doesn't always work as expected!

- These are known as errors/bugs
- Three different types:
  - Syntax errors
  - Runtime errors
  - Logic errors

_Syntax errors_ <br>

- Parts in the program that fail to meet the programming language's rules
- Usually the easiest of the 3 to solve
  - Highlighted by the IDE in most cases; the usually provide helpful hints
  - Some IDE's will restrict running code unless all syntax errors are corrected
- Like misspellings or grammatical errors

_Runtime errors_ <br>

- Don't appear until the program is actually "run"
- Caused by a part of the code not being able to be computed in a reasonable amount of time
  - Most common form --> the infinite loop
    - Given some condition, with no feasible way to finish the task (ending condition)
    - Put the computer in error mode causing a crash

Preventing runtime errors

- Carefully plan out the code before writing (pseudocode)

_Logic errors_ <br>

- Code runs smoothly without runtime or syntax errors, but the result is not what was intended/expected
- Often the hardest type of errors to solve/debug
  - Most of the time, the error is unknown to the programmer

Preventing logic errors

- Code incrementally; test application often (in small pieces) so that if there is an error, it will be quickly found

How do we debug code?

- IDE will usually print out an error message in the console
- Online forums like StackOverflow
- Use of print statements in the console to determine where program goes wrong and track down root-cause
- Use of break-points
  - Pauses the program when the line you placed the breakpoint at is reached until you continue
- When error section is found, first comment it out (a documentation tool for programmers)

**Commenting code:**

```java
// Java
// This is a comment
```

```python
# Python
# This is a comment
```

```javascript
// JavaScript
// This is a comment
```

Preventing errors:

- Backup code frequently
- Use of SCM (Source-Control Managers) like Git in conjunction with GitHub - cloud service to easily pull previous version of program
  - Useful for backtracking to find when the error was written
- Run your program frequently
  - Prevents from saving a backup that doesn't work
  - Easier to solve errors

---

<details open>
<summary>What are functions?</summary>
A segment of code that be run by "calling" the function name

- Depending on the type of function, may do something in return
- Can be called numerous times and in numerous places
- Abstracts code to a single line; more going on in the background - Ex: print("Hello World")
  Print statements, for loop, basic math operators etc. are all examples of functions
  Functions serve many purposes:
- Recycle sections of code which serve the same purpose
- Used for equations you want to allow multiple inputs of
- Used to save space within your program

Many functions out there! IDE will help with importing functions to your program

_Four type of functions:_ <br>

- Separated by whether or not they take in arguments
- Separated by whether or not they return values

_Arguments:_ <br>

- Variables we pass into a function in order to be manipulated and then either:
  - Returned back
  - Printed to the console
  - Used in another operation
  - Ex: max function --> max(60 ,2) = 60
- Are a way for programmers to have one function that can do many different things
- Add variability and help diversify code

_Functions without Arguments_ <br>

- Packaging smaller functions into one function to call
  - Simplify code

_Functions can either return variables, or not:_ <br>

- Returning something simply means the function will return back to the user, either:
  - A string, integer, array etc.
    § Ex: max(1,2,3) = 3
- Returning functions must be returned into something
  - Usually a variable but can also be printed
- A function which takes no arguments and returns no values are known as void functions
  - Cannot be set to any variable since it returns no values

Adaptability of functions:

- Functions are super useful for making large change to your code easily
  - Each function call is just a copy of that function code
  - Changing the function will change all future calls of that function

_How can we import functions?_ <br>
Importing functions allows you to gain access to libraries of pre-made functions

- There are thousands of already-made functions at your disposal

_Libraries:_ <br>

- A collection of functions that all have the same theme
  - Math library, data analysis library (ex: pandas for python) etc.

_Importing libraries is as simple as using an import statement_ <br>

- Usually consists of the word "import" followed by the library you would like to import
- Can also opt to import select classes from the library instead of importing the entire library
  - Reduce wasted computing power on import of needless functions in library
  - Saves programming runtime
    - ex: (in python): instead of import math, from math import factorial

---

**Function Creation:** <br>

- Function naming conventions follow variable naming convention
  - Can't be two words
  - Often follow camelCase structure
- Each language differentiates how you tell the computer you are about to make a function
  - ex: (in python): def printStats()

_Making functions which take in arguments:_ <br>

- We put any variables we want the user to pass into the function inside the parenthesis
  - When we call that function, we are then required to pass those variables as arguments
- Can mix variable types when making arguments
  - When you call a function, you have to pass in it's designated variable types
    - Otherwise an error will be thrown

_The difference between returning and not:_ <br>

- When making a returning function:
  - In some cases, you must define what type of variable will be returned by that function
  - No matter what path your code takes, it MUST return a variable
    - Prepare a catchall return statement to capture any missing cases
  - Cannot return one of variable if you have already defined the function to return another type

_Returning with arguments:_ <br>

- Combine what we learned from previous examples

  - Assign your arguments between the parentheses
  - Define what you want to return
  - Ensure no matter what path your code takes, it returns something

</details>

---

**What are ArrayLists and Dictionaries?** <br>

_ArrayLists or Lists_ <br>

- A growing array which dynamically changes it size
- Starts with an initial size of 10
- Useful when you don't know the exact number of values the arrayList will need to store

_Dictionaries_ <br>

- Like an array in that it stores multiple values
- However, instead of being referenced linearly, each value is tied to an identifier that is used to reference it
  - Identifier = "key"
- When referencing a value in a dictionary, you use it's unique key, and the dictionary will tell you the value tied to it
- Each key must be unique, otherwise the computer will get confused as to what value the key is trying to reference
  - You can store the values to different keys
- Dictionaries are iterable; can perform operations or comparisons on all values in them

_How can we use Data Structures?_ <br>
Searching algorithms

- Ways in which we can look through a list of values store in an array and find a particular piece of data
- While computers today are much faster than before, small differences in efficiency add up when searching through huge lists

The two states of lists/arrays:

- Lists can be either be in sorted or unsorted

---

**Determining efficiency:** <br>

- Efficiency is base on two values
  - Worst case scenario
  - Average number of items
- Known as Big 0 notation

**The Linear Search:** <br>

- Start at the beginning and systematically check each data point until you find what you are looking for
- Can work on both sorted and unsorted lists

_Efficiency of the linear search:_ <br>

- Worst case scenario
  - We have to check every element in the list - 0(n)
- Average scenario
  - On average we find our search term halfway - 0(n/2)

**The Binary Search:** <br>

- Uses a recursive process
  - Breaks down the list into smaller and smaller parts to find the item you're looking for faster
- Takes advantage of the fact the list is sorted

_Efficiency of the binary search:_ <br>

- Worst case scenario
  - Runs in logarithmic time - 0(log n)
- Average scenario
  - We find our search term in logarithmic time - 0(log n)

**What is Recursion?**

- The practice of using functions that repeatedly call themselves
- In the instructions that occur within a function, one of the instructions will be a call to that same function
- Very useful because it breaks large problems into much simple pieces to compute

**The Stack** <br>

- A data structure which contains all of the tasks you instruct your program to complete
- Based on a certain method, your program will then carry out the tasks you give it

_LIFO structure_ <br>

- Our programs will follow the LIFO data structure
  - Last in, first out
- This mean the last item put on the stack will be the first one removed from it

If you were to create a recursive function without a reachable base case, processes would continue to be added to the stack, causing a stack overflow error

- Similar to adding chores before any one is completed

---

**What is pseudocode?** <br>
Most programmers spend the majority of their job thinking about their code rather than writing it

No good program has ever been written simply from the programmer getting the prompt or idea, sitting down, hopping on an IDE and starting to write code

Programmers use pseudocode to plan out their code (different methodologies):

- Can be compared to an outline for a paper
- Explain the main topics of the essay and plan out the major talking points
- Don't worry about the nitty-gritty details
  - Word choice
  - Grammar conventions
  - Proper formatting

_Pseudocode methodologies:_ <br>
Flowchart (thinking through the flow of a function/program):

- Can be useful to think through the process of a particular function

Write-up (getting general idea of a program/function):

- Writing what you want your code to do chronologically
- Step-by-step for what the program will accomplish
- Allows you not to get bogged down with the syntax and naming conventions you have to follow
- Simply taking a not of what the program's ultimate goal should be

Functionality planning (listing out the functions of a certain program)

- Writing out the main features you want the user to have when using your program
- What functions or smaller programs you're going to need to complete those features
