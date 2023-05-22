[Intro to Object-Oriented Programming](https://www.youtube.com/watch?v=SiBw7os-_zI)

**In order to understand OOP, it's best to first understand what objects are. In order to understand what objects are, it's best to first understand what primitive data types are.**

Primitive data types store single, simple values; examples include:

- byte
- Int
- Float
- Boolean
- Double
- Char

understanding objects with chess-piece (knight) example:

- would need a variable for each piece of data
  - color
  - position
  - captured or not
  - etc.

In the past, programmers only had access to using variables to build programs/software.

the structure (in C):

- stores many pieces of data
- can store different types of data
- can store other structures within it
- a precursor to the object
- cannot define functions within a structure
  - chess example: cannot store the knight's move function

the array:

- stores many pieces of data
- cannot store different types of data

Object are instances of a class

- chess example: represents only one singular knight

Classes are templates for objects

- chess example: represents any given knight

example:

    Class Knight:
        move() --> function specific to knights, as other piece move in a different manner
        position;
        color;
        color & position --> variables are defined, but not initialized as different instances of a knight will have different values for these variables

OOP helps programmers create complex programs by grouping together related data and functions

---

## Four main principles in OOP:

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

<details open>
<summary>Encapsulation</summary>

- bundling data with methods the can operate on that data within a class
- the idea of hiding data within a class, preventing anything outside that class from directly interacting with it
- does not mean members of other classes cannot interact with the attributes of another object
- members of other classes can interact with the attributes of another object through its methods
  - methods are function defined with the class
  - Getting Methods --> retrieving information
  - Setting Methods --> changing information
    - setting methods allow the programmer to easily keep track of attributes that depend on one another
    - setting method allow multiple attributes to be changed as they should, rather than requiring to individually change them
- may only want some attributes to be "read-only" from outside the class
  - would need to define a getter method but not a setter method
  - the variable could only be reference, not changed
- generally best to not allow external classes to directly edit an object's attributes
  - each piece of code should not have access to or rely on the inner working of other section of code
- information hiding, or keeping the data of one class hidden from external classes, helps keep control of the program and prevent it from becoming too complicated

</details>

<details open>
<summary>Abstraction</summary>

- only showing essential details and keeping everything else hidden
- Driving car example (essential need-to-knows/abstractions):
  - how the steering wheel steers the car
  - how the gas and brake pedals affect the car
  - how much gas the car has
  - not important to most people:
    - how the car functions internally
  - as long as you understand the outcome, the process is not very important
- users of your classes should not worry about the inner details/workings of those classes
  - best if the section that you work on is able to function without knowledge of the inner working of another's section
  - think of your program in terms of interface and implementation
- the interface refers to the way sections of code communicate with one another
  - typically done through methods that each class is able to access
  - chess example: knight using the king's getter method to validate if a knight's move will put its king in check (the interface)
    - king's implementation is not important to the knight class
- the implementation of these methods, or how they are coded, should be hidden
- if classes are entangled, then one change creates a ripple effect that causes many more changes
- creating an interface through which classes can interact ensures that each piece can be individually developed
- abstraction allow a program to be worked on incrementally and prevents it from becoming entangled and complex
- determine specific point of contact that can act as an interface between classes, and only worry about the implementation when coding it

</details>

<details open>
<summary>Inheritance</summary>

- the principle that allows classes to derive from other classes
  - example: class Weapon (in a video-game) --> methods could include: weaponDamage(), weaponAttack(). Sword or club would be subclasses that inherit some properties/attributes from the superclass (Weapon). Weapon could be a subclass to another "Item" class
- the class hierarchy acts as a web of classes with different relationships to one another
- access modifiers change which classes have access to other classes, methods, or attributes
  - Three main access modifiers:
    - Public
    - Private
    - Protected
- Public modifiers can be accessed from anywhere in your program
- Private members can only be accessed from within the same class that the member is defined
  - allows you to create multiple private members of the same name in different locations so that they do no conflict with one another
- Protected members can be accessed within the class it is defined, as well as any subclasses of that class
  - this make protected members private to the hierarchy in which they are defined

</details>

<details open>
<summary>Polymorphism</summary>

- describes methods that are able to take on many forms
- allows methods of the same name to exist both in the same class, and different classes
- Two types of polymorphism:
  - dynamic polymorphism
  - static polymorphism
- dynamic polymorphism occurs during the runtime/execution of the program
  - describes when a method signature is in both a subclass and superclass
  - the methods share the same name/parameters but have different implementations
  - the implementation of the subclass that the object is an instance of overrides that of the superclass
  - Car example: class Car (superclass), class sportsCar (subclass)
    - each may have a .drive(miles) method but the gas attribute may decrease by different amount
  - this works because the form of the method is decided base on where in the class hierarchy it is called
  - the implementation of a method signature that will be used is determined dynamically as the program is run
  - allows to write methods in the superclass without having to include "if" statements to account for exactly which subclass is being used when the method is called
- static polymorphism occurs during compile-time rather than during runtime
  - this refer to when multiple methods with the same name but different arguments are defined in the same class
  - ways to differentiate methods of the same name:
    - different number of parameters
    - different types of parameters
    - different order of parameters
  - known as method overloading
    - despite the methods having the same name, their signatures are different due to their different arguments
    - class Car example:
      - .drive(int spd, string dest) --> use this method when calling myCar.drive(45, "Work)
      - .drive(int spd, int dest) --> use this method when calling myCar.drive(15, 60)
      - .drive(string dest, int spd) --> use this method when calling myCar.drive("School", 30)
    - method overloading can cause trouble if you do not keep straight which parameters you need for which implementation
    - using the incorrect argument may not cause an error if it matches that of another form of the method, which can cause issues

</details>
