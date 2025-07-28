---
published: true
---

# Chapter 1

### Section 1 - Intro
Program (aka software) = set of instructions computer follows to perform a task

### Section 2 - Hardware and Software
  **Hardware** = all physical components of a computer
  1 CPU = part that runs the program
  2 Main memory (RAM) = temp work area, where program is stored while its running
  3 Secondary storage devices = holds info for longer
    $\quad$ Disk drive = stores by magnetically encoding on spinning circular disk
    $\quad$Solid state drive = stores in solid state memory
    $\quad$External storage
  4 Input devices (mouse, touchscreen, etc)
  5 Output devices (graphic image, video display)

  **Software**
  1 Operating system (macOS, windows, etc)
  2 Utility program (virus scanner, file compression, etc)
  3 Software dev tools (assembler, compiler, interpreter, etc)

### Section 3 - How computers store data
  All data that is stored in a computer is converted to sequences of 0s and 1s

### Section 4 - How a program works
  Machine language = each op that a CPU can perform
  Instruction set = entire set that a CPU can perform

  When a CPU executes a program, it is engaged in fetch-decode-execute cycle
    $\quad$ Fetch = Read next instruction into memory
    $\quad$ Decode = decode instruction from prev step
    $\quad$ Execute = perform the operation
    
  Languages
    $\quad$ Low level (Assembly) = uses short words instead of raw machine language
    $\quad$ High level = lets you create programs without knowing how CPU works
    
  **Key words, operators, syntax**
    Key word = words that have a specific purpose and cant be used for anything else
    Operators = perform various operations
    Syntax = set of rules that must be followed while using the program
    
  **Compilers and Interpreters**
    Compilers = translates high level into seperate machine language program which can then be executed
    Interpreter = translates AND executes instructions in high level language
    Source code = statements written in high level language

### Chapter 1 Problems and Solutions
Digital data = data stored in binary
Digital device = any device that works with binary data

A program has to be copied into what type of memory each time the CPU executes it?
Main memory aka RAM

Compiler = translates a high-level language program into a separate machine language program
Interpreter = both translates and executes the instructions in a highlevel language program?

---

# Chapter 2

### Section 1 - Designing a Program

**Program development cycle**
1 Design the program  Understand the task the program is to perform  Determine steps needed to perform task
2 Write the code
3 Correct syntax errors
4 Test the program5 Correct logic errors

### Section 2 - Input, processing, output

Computer 3 step process
1 Receive input
2 Perform some process on the input
3 Produce output

---

# Chapter 3 - Decision Structures, Boolean Logic

1) Control structure = a logical design that controls the order in which a set of statements executes
    Essentially just says "this is the order you need to run in"
2) Sequence structure = set of statements that run in the order they appear
3) Decision structure = control structure, operates under conditions

Single alternative decision structure = only offers one alternate path
  if true just keep going, if false do this

Dual alternative decision structure = offers two alternate paths
  if true do this, if false do this

Boolean expression = expression that can be evaled as either true or false

# Ch 4

Repetition structure = causes statements to executre repeatedly
Condition controlled loop = uses T/F to control number of times something repeats
Count controlled loop = repeats a specified number of times
Loop iteration = each execution of the body of a loop

### 4.4 Running Total

**accumulator**: variable that is used to accumulate the total of the numbers.
needs to be initialized before the loop

### Augmented assignment operators

### 4.5 Sentinels

**Sentinel** = a special value that marks the end of a sequence of values
$\quad$ makes it so that the user doesn't have to plug in extra info

### 4.6 Input Validation Loops

**Input validation** = process of inspecting input data to make sure it is valid before it is used in a computation.

Input validation loop = error trap = error handler

**Priming read** = gets the first input value that will be tested by the validation loop

### 4.7 Nested Loops

1) An inner loop goes through all of its iterations for every single iteration of an outer loop.
2) Inner loops complete their iterations faster than outer loops.
3) To get the total number of iterations of a nested loop, multiply the number of iterations of all the loops.

```python
for hours in range(1):    
    for minutes in range(60):        
        for seconds in range(60):           
            print(hours, ':', minutes, ':', seconds)
```