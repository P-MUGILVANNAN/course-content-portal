import React from 'react';

function PythonPrograms() {
  return (
    <div className="container py-4">
      <style>
        {`
          .program-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
          }
          .program-title {
            color: #0d6efd;
            margin-bottom: 15px;
          }
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            font-size:15px;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .output {
            background-color: #e9ecef;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            border-left: 3px solid #6c757d;
          }
          .output-title {
            font-weight: bold;
            color: #495057;
            margin-bottom: 0.5rem;
          }
        `}
      </style>

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Python Programming Solutions</h1>
        <p className="lead">Complete solutions for all Python programming questions with outputs</p>
      </header>

      {/* Page 1 Programs */}
      <section className="mb-5">
        <h2 className="mb-3">Basic Python Programs</h2>
        
        <div className="program-card">
          <h3 className="program-title">1. Python Program to Find ASCII Value of a Character</h3>
          <pre><code>{`# Program to find the ASCII value of a character
char = input("Enter a character: ")
print(f"The ASCII value of '{char}' is", ord(char))`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a character: A<br />
            The ASCII value of 'A' is 65</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">2. Python Program to Swap Two Numbers</h3>
          <pre><code>{`# Program to swap two numbers
a = 5
b = 10

# Method 1: Using temporary variable
temp = a
a = b
b = temp
print("After swapping (Method 1):", a, b)

# Method 2: Without temporary variable
a, b = b, a
print("After swapping (Method 2):", a, b)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>After swapping (Method 1): 10 5<br />
            After swapping (Method 2): 5 10</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">3. Python Program to Check Whether a Number is Even or Odd</h3>
          <pre><code>{`# Program to check if a number is even or odd
num = int(input("Enter a number: "))
if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a number: 7<br />7 is odd</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a number: 4<br />4 is even</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">4. Python Program to Check Whether an Alphabet is Vowel or Consonant</h3>
          <pre><code>{`# Program to check vowel or consonant
char = input("Enter a character: ").lower()

if char in ['a', 'e', 'i', 'o', 'u']:
    print(f"{char} is a vowel")
else:
    print(f"{char} is a consonant")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a character: e<br />e is a vowel</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a character: z<br />z is a consonant</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">5. Python Program to Find the Largest Among Three Numbers</h3>
          <pre><code>{`# Program to find the largest of three numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

largest = max(num1, num2, num3)
print(f"The largest number is {largest}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter first number: 12<br />
            Enter second number: 25<br />
            Enter third number: 7<br />
            The largest number is 25.0</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">6. Python Program to Check Leap Year</h3>
          <pre><code>{`# Program to check leap year
year = int(input("Enter a year: "))

if (year % 400 == 0) or (year % 100 != 0 and year % 4 == 0):
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a year: 2020<br />2020 is a leap year</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a year: 1900<br />1900 is not a leap year</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">7. Python Program to Check Whether a Number is Positive or Negative</h3>
          <pre><code>{`# Program to check positive or negative number
num = float(input("Enter a number: "))

if num > 0:
    print("Positive number")
elif num < 0:
    print("Negative number")
else:
    print("Zero")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a number: 5.5<br />Positive number</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a number: -3<br />Negative number</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 3):</div>
            <div>Enter a number: 0<br />Zero</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">8. Python Program to Check Whether a Character is Alphabet or Not</h3>
          <pre><code>{`# Program to check if character is alphabet
char = input("Enter a character: ")

if char.isalpha():
    print(f"{char} is an alphabet")
else:
    print(f"{char} is not an alphabet")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a character: A<br />A is an alphabet</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a character: 5<br />5 is not an alphabet</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">9. Python Program to Calculate the Sum of Natural Numbers</h3>
          <pre><code>{`# Program to calculate sum of natural numbers
n = int(input("Enter a positive integer: "))
sum = n * (n + 1) // 2
print(f"Sum of first {n} natural numbers is {sum}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a positive integer: 10<br />Sum of first 10 natural numbers is 55</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">10. Python Program to Find Factorial of a Number</h3>
          <pre><code>{`# Program to find factorial of a number
num = int(input("Enter a number: "))
factorial = 1

if num < 0:
    print("Factorial doesn't exist for negative numbers")
elif num == 0:
    print("Factorial of 0 is 1")
else:
    for i in range(1, num + 1):
        factorial *= i
    print(f"Factorial of {num} is {factorial}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a number: 5<br />Factorial of 5 is 120</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">11. Program to Generate Multiplication Table</h3>
          <pre><code>{`# Program to generate multiplication table
num = int(input("Enter a number: "))

print(f"Multiplication table for {num}:")
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a number: 7<br />
            Multiplication table for 7:<br />
            7 x 1 = 7<br />
            7 x 2 = 14<br />
            7 x 3 = 21<br />
            7 x 4 = 28<br />
            7 x 5 = 35<br />
            7 x 6 = 42<br />
            7 x 7 = 49<br />
            7 x 8 = 56<br />
            7 x 9 = 63<br />
            7 x 10 = 70</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">12. Python Program to Display Fibonacci Series</h3>
          <pre><code>{`# Program to display Fibonacci series
n = int(input("Enter number of terms: "))
a, b = 0, 1

print("Fibonacci sequence:")
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter number of terms: 8<br />
            Fibonacci sequence:<br />
            0 1 1 2 3 5 8 13</div>
          </div>
        </div>
      </section>

      {/* Page 2 Programs */}
      <section className="mb-5">
        <h2 className="mb-3">Intermediate Python Programs</h2>
        
        <div className="program-card">
          <h3 className="program-title">13. Python Program to Find LCM of two Numbers</h3>
          <pre><code>{`# Program to find LCM of two numbers
def compute_lcm(x, y):
    greater = max(x, y)
    while True:
        if greater % x == 0 and greater % y == 0:
            lcm = greater
            break
        greater += 1
    return lcm

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print(f"LCM of {num1} and {num2} is {compute_lcm(num1, num2)}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter first number: 12<br />
            Enter second number: 18<br />
            LCM of 12 and 18 is 36</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">14. Python Program to Display Alphabets (A to Z) using loop</h3>
          <pre><code>{`# Program to display alphabets A to Z
print("Uppercase Alphabets:")
for char in range(65, 91):
    print(chr(char), end=" ")

print("\\nLowercase Alphabets:")
for char in range(97, 123):
    print(chr(char), end=" ")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Uppercase Alphabets:<br />
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            Lowercase Alphabets:<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">15. Python Program to Count Number of Digits in an Integer</h3>
          <pre><code>{`# Program to count digits in a number
num = int(input("Enter a number: "))
count = 0

while num != 0:
    num //= 10
    count += 1

print(f"Number of digits: {count}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a number: 12345<br />Number of digits: 5</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">16. Python Program to Reverse a Number</h3>
          <pre><code>{`# Program to reverse a number
num = int(input("Enter a number: "))
reversed_num = 0

while num != 0:
    digit = num % 10
    reversed_num = reversed_num * 10 + digit
    num //= 10

print(f"Reversed number: {reversed_num}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a number: 1234<br />Reversed number: 4321</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">17. Python Program to Calculate the Power of a Number</h3>
          <pre><code>{`# Program to calculate power of a number
base = float(input("Enter base: "))
exponent = int(input("Enter exponent: "))

result = 1
for _ in range(exponent):
    result *= base

print(f"{base} to the power {exponent} is {result}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter base: 2<br />
            Enter exponent: 5<br />
            2.0 to the power 5 is 32.0</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">18. Python Program to Check Palindrome</h3>
          <pre><code>{`# Program to check palindrome
# For number
num = int(input("Enter a number: "))
original = num
reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num = num // 10

if original == reverse:
    print(f"{original} is a palindrome")
else:
    print(f"{original} is not a palindrome")

# For string
text = input("Enter a string: ")
if text == text[::-1]:
    print(f"{text} is a palindrome")
else:
    print(f"{text} is not a palindrome")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1 - Number):</div>
            <div>Enter a number: 121<br />121 is a palindrome</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2 - String):</div>
            <div>Enter a string: madam<br />madam is a palindrome</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 3 - Not Palindrome):</div>
            <div>Enter a string: hello<br />hello is not a palindrome</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">19. Python Program to Check Whether a Number is Prime or Not</h3>
          <pre><code>{`# Program to check prime number
num = int(input("Enter a number: "))

if num > 1:
    for i in range(2, int(num/2)+1):
        if num % i == 0:
            print(f"{num} is not a prime number")
            break
    else:
        print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a number: 17<br />17 is a prime number</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a number: 15<br />15 is not a prime number</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">20. Python Program to Display Prime Numbers Between Two Intervals</h3>
          <pre><code>{`# Program to display prime numbers between intervals
lower = int(input("Enter lower bound: "))
upper = int(input("Enter upper bound: "))

print(f"Prime numbers between {lower} and {upper}:")
for num in range(lower, upper + 1):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                break
        else:
            print(num, end=" ")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter lower bound: 10<br />
            Enter upper bound: 50<br />
            Prime numbers between 10 and 50:<br />
            11 13 17 19 23 29 31 37 41 43 47</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">21. Python Program to Check Armstrong Number</h3>
          <pre><code>{`# Program to check Armstrong number
num = int(input("Enter a number: "))
order = len(str(num))
sum = 0
temp = num

while temp > 0:
    digit = temp % 10
    sum += digit ** order
    temp //= 10

if num == sum:
    print(f"{num} is an Armstrong number")
else:
    print(f"{num} is not an Armstrong number")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter a number: 153<br />153 is an Armstrong number</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter a number: 123<br />123 is not an Armstrong number</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">22. Python Program to Display Armstrong Number Between Two Intervals</h3>
          <pre><code>{`# Program to display Armstrong numbers between intervals
lower = int(input("Enter lower bound: "))
upper = int(input("Enter upper bound: "))

print(f"Armstrong numbers between {lower} and {upper}:")
for num in range(lower, upper + 1):
    order = len(str(num))
    sum = 0
    temp = num
    
    while temp > 0:
        digit = temp % 10
        sum += digit ** order
        temp //= 10
    
    if num == sum:
        print(num, end=" ")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter lower bound: 100<br />
            Enter upper bound: 1000<br />
            Armstrong numbers between 100 and 1000:<br />
            153 370 371 407</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">23. Python Program to Display Prime Numbers Between Intervals Using Function</h3>
          <pre><code>{`# Program to display prime numbers using function
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

lower = int(input("Enter lower bound: "))
upper = int(input("Enter upper bound: "))

print(f"Prime numbers between {lower} and {upper}:")
for num in range(lower, upper + 1):
    if is_prime(num):
        print(num, end=" ")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter lower bound: 20<br />
            Enter upper bound: 60<br />
            Prime numbers between 20 and 60:<br />
            23 29 31 37 41 43 47 53 59</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">24. Python Program to Display Armstrong Numbers Between Intervals Using Function</h3>
          <pre><code>{`# Program to display Armstrong numbers using function
def is_armstrong(num):
    order = len(str(num))
    sum = 0
    temp = num
    
    while temp > 0:
        digit = temp % 10
        sum += digit ** order
        temp //= 10
    
    return num == sum

lower = int(input("Enter lower bound: "))
upper = int(input("Enter upper bound: "))

print(f"Armstrong numbers between {lower} and {upper}:")
for num in range(lower, upper + 1):
    if is_armstrong(num):
        print(num, end=" ")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter lower bound: 100<br />
            Enter upper bound: 500<br />
            Armstrong numbers between 100 and 500:<br />
            153 370 371 407</div>
          </div>
        </div>
      </section>

      {/* Page 3 Programs */}
      <section className="mb-5">
        <h2 className="mb-3">Advanced Python Programs</h2>
        
        <div className="program-card">
          <h3 className="program-title">25. Python Program to Display Factors of a Number</h3>
          <pre><code>{`# Program to display factors of a number
num = int(input("Enter a number: "))

print(f"Factors of {num}:")
for i in range(1, num + 1):
    if num % i == 0:
        print(i, end=" ")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a number: 24<br />
            Factors of 24:<br />
            1 2 3 4 6 8 12 24</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">26. Python Program to Make a Simple Calculator Using switch...case</h3>
          <pre><code>{`# Program to make a simple calculator (Python doesn't have switch-case, so we use dictionary)
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y

operations = {
    '1': add,
    '2': subtract,
    '3': multiply,
    '4': divide
}

print("Select operation:")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.Divide")

choice = input("Enter choice(1/2/3/4): ")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if choice in operations:
    result = operations[choice](num1, num2)
    print(f"Result: {result}")
else:
    print("Invalid input")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Select operation:<br />
            1.Add<br />
            2.Subtract<br />
            3.Multiply<br />
            4.Divide<br />
            Enter choice(1/2/3/4): 3<br />
            Enter first number: 5<br />
            Enter second number: 6<br />
            Result: 30.0</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">27. Python Program to Find the Sum of Natural Numbers using Recursion</h3>
          <pre><code>{`# Program to find sum of natural numbers using recursion
def sum_natural(n):
    if n <= 1:
        return n
    else:
        return n + sum_natural(n - 1)

num = int(input("Enter a positive integer: "))
if num < 0:
    print("Enter a positive number")
else:
    print(f"Sum of first {num} natural numbers is {sum_natural(num)}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a positive integer: 5<br />
            Sum of first 5 natural numbers is 15</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">28. Python Program to Find Factorial of a Number Using Recursion</h3>
          <pre><code>{`# Program to find factorial using recursion
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

num = int(input("Enter a number: "))
if num < 0:
    print("Factorial doesn't exist for negative numbers")
elif num == 0:
    print("Factorial of 0 is 1")
else:
    print(f"Factorial of {num} is {factorial(num)}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a number: 5<br />
            Factorial of 5 is 120</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">29. Python Program to Calculate Average Using Lists</h3>
          <pre><code>{`# Program to calculate average using lists
numbers = []
n = int(input("Enter number of elements: "))

for i in range(n):
    num = float(input(f"Enter number {i+1}: "))
    numbers.append(num)

average = sum(numbers) / n
print(f"Average is {average}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter number of elements: 4<br />
            Enter number 1: 10<br />
            Enter number 2: 20<br />
            Enter number 3: 30<br />
            Enter number 4: 40<br />
            Average is 25.0</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">30. Python Program to Find Largest Element of a list</h3>
          <pre><code>{`# Program to find largest element in a list
numbers = []
n = int(input("Enter number of elements: "))

for i in range(n):
    num = float(input(f"Enter number {i+1}: "))
    numbers.append(num)

print(f"Largest element is {max(numbers)}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter number of elements: 5<br />
            Enter number 1: 23<br />
            Enter number 2: 45<br />
            Enter number 3: 12<br />
            Enter number 4: 67<br />
            Enter number 5: 34<br />
            Largest element is 67.0</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">31. Python Program to Add Two Matrix Using List</h3>
          <pre><code>{`# Program to add two matrices
X = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

Y = [[9, 8, 7],
     [6, 5, 4],
     [3, 2, 1]]

result = [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]]

for i in range(len(X)):
    for j in range(len(X[0])):
        result[i][j] = X[i][j] + Y[i][j]

print("Resultant Matrix:")
for r in result:
    print(r)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Resultant Matrix:<br />
            [10, 10, 10]<br />
            [10, 10, 10]<br />
            [10, 10, 10]</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">32. Python Program to Multiply Two Matrix Using List</h3>
          <pre><code>{`# Program to multiply two matrices
X = [[1, 2],
     [3, 4],
     [5, 6]]

Y = [[1, 2, 3, 4],
     [5, 6, 7, 8]]

result = [[0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]]

for i in range(len(X)):
    for j in range(len(Y[0])):
        for k in range(len(Y)):
            result[i][j] += X[i][k] * Y[k][j]

print("Resultant Matrix:")
for r in result:
    print(r)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Resultant Matrix:<br />
            [11, 14, 17, 20]<br />
            [23, 30, 37, 44]<br />
            [35, 46, 57, 68]</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">33. Python Program to Find the Frequency of Character in a String</h3>
          <pre><code>{`# Program to find frequency of a character in string
string = input("Enter a string: ")
char = input("Enter a character to find frequency: ")

count = string.count(char)
print(f"Frequency of '{char}' in '{string}' is {count}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: programming<br />
            Enter a character to find frequency: m<br />
            Frequency of 'm' in 'programming' is 2</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">34. Python Program to Count the Number of Vowels and Consonants in a Sentence</h3>
          <pre><code>{`# Program to count vowels and consonants
sentence = input("Enter a sentence: ").lower()
vowels = consonants = 0

for char in sentence:
    if char in ['a', 'e', 'i', 'o', 'u']:
        vowels += 1
    elif char.isalpha():
        consonants += 1

print(f"Vowels: {vowels}, Consonants: {consonants}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a sentence: Hello World<br />
            Vowels: 3, Consonants: 7</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">35. Python Program to Concatenate Two Arrays</h3>
          <pre><code>{`# Program to concatenate two arrays
array1 = [1, 2, 3]
array2 = [4, 5, 6]

# Method 1: Using + operator
concatenated = array1 + array2
print("Concatenated array (Method 1):", concatenated)

# Method 2: Using extend()
array1.extend(array2)
print("Concatenated array (Method 2):", array1)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Concatenated array (Method 1): [1, 2, 3, 4, 5, 6]<br />
            Concatenated array (Method 2): [1, 2, 3, 4, 5, 6]</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">36. Python Program to Get Current Date/Time</h3>
          <pre><code>{`# Program to get current date/time
from datetime import datetime

now = datetime.now()
print("Current date and time:", now)
print("Formatted date:", now.strftime("%d/%m/%Y %H:%M:%S"))`}</code></pre>
          <div className="output">
            <div className="output-title">Sample Output:</div>
            <div>Current date and time: 2023-06-15 14:30:45.123456<br />
            Formatted date: 15/06/2023 14:30:45</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">37. Python Program to Implement multiple inheritance</h3>
          <pre><code>{`# Program to implement multiple inheritance
class Father:
    def father_method(self):
        print("Father's method")

class Mother:
    def mother_method(self):
        print("Mother's method")

class Child(Father, Mother):
    def child_method(self):
        print("Child's method")

child = Child()
child.father_method()
child.mother_method()
child.child_method()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Father's method<br />
            Mother's method<br />
            Child's method</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">38. Python Program to find the positive and negative count in list</h3>
          <pre><code>{`# Program to find positive and negative count in list
numbers = [1, -2, 3, -4, 5, -6, 0]
positive = negative = zero = 0

for num in numbers:
    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1
    else:
        zero += 1

print(f"Positive: {positive}, Negative: {negative}, Zero: {zero}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Positive: 3, Negative: 2, Zero: 1</div>
          </div>
        </div>
      </section>

      {/* Page 4 Programs */}
      <section className="mb-5">
        <h2 className="mb-3">String and List Manipulation Programs</h2>
        
        <div className="program-card">
          <h3 className="program-title">39. Reverse a list</h3>
          <pre><code>{`# Program to reverse a list
my_list = [1, 2, 3, 4, 5]

# Method 1: Using reverse()
my_list.reverse()
print("Reversed list (Method 1):", my_list)

# Method 2: Using slicing
reversed_list = my_list[::-1]
print("Reversed list (Method 2):", reversed_list)

# Method 3: Using reversed()
reversed_list = list(reversed(my_list))
print("Reversed list (Method 3):", reversed_list)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Reversed list (Method 1): [5, 4, 3, 2, 1]<br />
            Reversed list (Method 2): [5, 4, 3, 2, 1]<br />
            Reversed list (Method 3): [5, 4, 3, 2, 1]</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">40. Program to print the duplicate elements of a list</h3>
          <pre><code>{`# Program to print duplicate elements in a list
my_list = [1, 2, 3, 2, 4, 5, 4]
duplicates = []

for item in my_list:
    if my_list.count(item) > 1 and item not in duplicates:
        duplicates.append(item)

print("Duplicate elements:", duplicates)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Duplicate elements: [2, 4]</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">41. Write a program ATM machine keeps on working till the condition equals to cancel</h3>
          <pre><code>{`# ATM machine program
balance = 10000

while True:
    print("\\nATM Menu:")
    print("1. Check Balance")
    print("2. Withdraw")
    print("3. Deposit")
    print("4. Cancel")
    
    choice = input("Enter your choice: ")
    
    if choice == '1':
        print(f"Your balance is: {balance}")
    elif choice == '2':
        amount = float(input("Enter amount to withdraw: "))
        if amount > balance:
            print("Insufficient balance")
        else:
            balance -= amount
            print(f"Withdrawal successful. New balance: {balance}")
    elif choice == '3':
        amount = float(input("Enter amount to deposit: "))
        balance += amount
        print(f"Deposit successful. New balance: {balance}")
    elif choice == '4':
        print("Thank you for using our ATM. Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")`}</code></pre>
          <div className="output">
            <div className="output-title">Sample Output:</div>
            <div>ATM Menu:<br />
            1. Check Balance<br />
            2. Withdraw<br />
            3. Deposit<br />
            4. Cancel<br />
            Enter your choice: 1<br />
            Your balance is: 10000<br /><br />
            
            ATM Menu:<br />
            1. Check Balance<br />
            2. Withdraw<br />
            3. Deposit<br />
            4. Cancel<br />
            Enter your choice: 2<br />
            Enter amount to withdraw: 500<br />
            Withdrawal successful. New balance: 9500<br /><br />
            
            ATM Menu:<br />
            1. Check Balance<br />
            2. Withdraw<br />
            3. Deposit<br />
            4. Cancel<br />
            Enter your choice: 4<br />
            Thank you for using our ATM. Goodbye!</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">42. Python Program to count the total number of characters in a string</h3>
          <pre><code>{`# Program to count total characters in a string
string = input("Enter a string: ")
count = len(string)
print(f"Total characters: {count}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: Hello World<br />
            Total characters: 11</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">43. Python Program to count the total number of punctuation characters exists in a String</h3>
          <pre><code>{`# Program to count punctuation in a string
import string

text = input("Enter a string: ")
count = 0

for char in text:
    if char in string.punctuation:
        count += 1

print(f"Total punctuation characters: {count}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: Hello, world! How are you?<br />
            Total punctuation characters: 3</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">44. Python Program to find the frequency of characters</h3>
          <pre><code>{`# Program to find frequency of all characters
text = input("Enter a string: ")
frequency = {}

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print("Character frequency:")
for char, count in frequency.items():
    print(f"'{char}': {count}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: programming<br />
            Character frequency:<br />
            'p': 1<br />
            'r': 2<br />
            'o': 1<br />
            'g': 2<br />
            'a': 1<br />
            'm': 2<br />
            'i': 1<br />
            'n': 1</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">45. Python Program to determine whether two strings are the anagram</h3>
          <pre><code>{`# Program to check if two strings are anagrams
def is_anagram(str1, str2):
    return sorted(str1.lower()) == sorted(str2.lower())

string1 = input("Enter first string: ")
string2 = input("Enter second string: ")

if is_anagram(string1, string2):
    print("The strings are anagrams")
else:
    print("The strings are not anagrams")`}</code></pre>
          <div className="output">
            <div className="output-title">Output (Example 1):</div>
            <div>Enter first string: listen<br />
            Enter second string: silent<br />
            The strings are anagrams</div>
            <div className="output-title" style={{marginTop: '10px'}}>Output (Example 2):</div>
            <div>Enter first string: hello<br />
            Enter second string: world<br />
            The strings are not anagrams</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">46. Python Program to replace lower-case characters with upper-case and vice-versa</h3>
          <pre><code>{`# Program to swap case of characters
string = input("Enter a string: ")
swapped = string.swapcase()
print(f"String after case swap: {swapped}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: Hello World<br />
            String after case swap: hELLO wORLD</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">47. Python Program to divide a string in 'N' equal parts.</h3>
          <pre><code>{`# Program to divide string into N equal parts
string = input("Enter a string: ")
n = int(input("Enter number of parts: "))

part_length = len(string) // n
parts = [string[i*part_length:(i+1)*part_length] for i in range(n)]

print(f"The string divided into {n} equal parts:")
for part in parts:
    print(part)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: programming<br />
            Enter number of parts: 3<br />
            The string divided into 3 equal parts:<br />
            pro<br />
            gra<br />
            mming</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">48. Python Program to find the largest and smallest word in a string</h3>
          <pre><code>{`# Program to find largest and smallest word
string = input("Enter a string: ")
words = string.split()

if not words:
    print("No words found")
else:
    largest = smallest = words[0]
    
    for word in words[1:]:
        if len(word) > len(largest):
            largest = word
        elif len(word) < len(smallest):
            smallest = word
    
    print(f"Largest word: '{largest}'")
    print(f"Smallest word: '{smallest}'")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Enter a string: Python is a programming language<br />
            Largest word: 'programming'<br />
            Smallest word: 'a'</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">49. Python program based on the concept of single level, multilevel, hierarchical Inheritance</h3>
          <pre><code>{`# Program demonstrating different types of inheritance

# Single level inheritance
class Parent:
    def parent_method(self):
        print("Parent method")

class Child(Parent):
    def child_method(self):
        print("Child method")

# Multilevel inheritance
class GrandParent:
    def grandparent_method(self):
        print("Grandparent method")

class Parent(GrandParent):
    def parent_method(self):
        print("Parent method")

class Child(Parent):
    def child_method(self):
        print("Child method")

# Hierarchical inheritance
class Parent:
    def parent_method(self):
        print("Parent method")

class Child1(Parent):
    def child1_method(self):
        print("Child1 method")

class Child2(Parent):
    def child2_method(self):
        print("Child2 method")

# Testing single level
print("Single level inheritance:")
child = Child()
child.parent_method()
child.child_method()

# Testing multilevel
print("\\nMultilevel inheritance:")
child = Child()
child.grandparent_method()
child.parent_method()
child.child_method()

# Testing hierarchical
print("\\nHierarchical inheritance:")
child1 = Child1()
child2 = Child2()
child1.parent_method()
child1.child1_method()
child2.parent_method()
child2.child2_method()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Single level inheritance:<br />
            Parent method<br />
            Child method<br /><br />
            
            Multilevel inheritance:<br />
            Grandparent method<br />
            Parent method<br />
            Child method<br /><br />
            
            Hierarchical inheritance:<br />
            Parent method<br />
            Child1 method<br />
            Parent method<br />
            Child2 method</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">50. Python program based on the concept of method overloading, method overriding</h3>
          <pre><code>{`# Program demonstrating method overloading and overriding

# Method overloading (Python doesn't support directly, so we use default args)
class Calculator:
    def add(self, a, b=0, c=0):
        return a + b + c

# Method overriding
class Parent:
    def show(self):
        print("Parent's show method")

class Child(Parent):
    def show(self):
        print("Child's show method")

# Testing method overloading
print("Method overloading:")
calc = Calculator()
print("add(1):", calc.add(1))
print("add(1, 2):", calc.add(1, 2))
print("add(1, 2, 3):", calc.add(1, 2, 3))

# Testing method overriding
print("\\nMethod overriding:")
parent = Parent()
child = Child()
parent.show()
child.show()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Method overloading:<br />
            add(1): 1<br />
            add(1, 2): 3<br />
            add(1, 2, 3): 6<br /><br />
            
            Method overriding:<br />
            Parent's show method<br />
            Child's show method</div>
          </div>
        </div>
      </section>

      {/* Page 5 Programs */}
      <section className="mb-5">
        <h2 className="mb-3">OOPS and Pattern Programs</h2>
        
        <div className="program-card">
          <h3 className="program-title">51. Python program to create a abstract method with hierarchical inheritance</h3>
          <pre><code>{`# Program with abstract method and hierarchical inheritance
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        print("Bark")

class Cat(Animal):
    def make_sound(self):
        print("Meow")

# Testing
dog = Dog()
cat = Cat()

print("Dog sound:", end=" ")
dog.make_sound()

print("Cat sound:", end=" ")
cat.make_sound()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Dog sound: Bark<br />
            Cat sound: Meow</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">52. Python program based on the encapsulation</h3>
          <pre><code>{`# Program demonstrating encapsulation
class BankAccount:
    def __init__(self, account_holder, balance):
        self.__account_holder = account_holder  # Private attribute
        self.__balance = balance                # Private attribute
    
    # Public method to access private attribute
    def get_balance(self):
        return self.__balance
    
    # Public method to modify private attribute with validation
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False

# Testing
account = BankAccount("John Doe", 1000)
print("Initial balance:", account.get_balance())

account.deposit(500)
print("After deposit:", account.get_balance())

account.withdraw(200)
print("After withdrawal:", account.get_balance())`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Initial balance: 1000<br />
            After deposit: 1500<br />
            After withdrawal: 1300</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">53. Python program for OOPS</h3>
          <pre><code>{`# Program demonstrating OOP concepts
class Car:
    # Class attribute
    wheels = 4
    
    # Constructor
    def __init__(self, make, model, year):
        # Instance attributes
        self.make = make
        self.model = model
        self.year = year
        self.__mileage = 0  # Private attribute
    
    # Instance method
    def drive(self, miles):
        self.__mileage += miles
        print(f"Driving {miles} miles. Total mileage: {self.__mileage}")
    
    # Getter method
    def get_mileage(self):
        return self.__mileage
    
    # Static method
    @staticmethod
    def is_vintage(year):
        return year < 1990

# Creating objects
car1 = Car("Toyota", "Corolla", 2020)
car2 = Car("Ford", "Mustang", 1969)

# Accessing attributes and methods
print(f"{car1.make} {car1.model} has {car1.wheels} wheels")
car1.drive(100)
car1.drive(50)
print(f"Total mileage: {car1.get_mileage()}")

# Static method
print(f"Is {car2.year} vintage? {Car.is_vintage(car2.year)}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Toyota Corolla has 4 wheels<br />
            Driving 100 miles. Total mileage: 100<br />
            Driving 50 miles. Total mileage: 150<br />
            Total mileage: 150<br />
            Is 1969 vintage? True</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">54. Python program to swap two variables without third variable</h3>
          <pre><code>{`# Program to swap two variables without third variable
a = 5
b = 10

print(f"Before swap: a = {a}, b = {b}")

# Method 1: Using arithmetic operations
a = a + b
b = a - b
a = a - b

print(f"After swap (Method 1): a = {a}, b = {b}")

# Method 2: Using tuple unpacking
a, b = b, a
print(f"After swap (Method 2): a = {a}, b = {b}")`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>Before swap: a = 5, b = 10<br />
            After swap (Method 1): a = 10, b = 5<br />
            After swap (Method 2): a = 5, b = 10</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">55. Generate Number triangular pattern</h3>
          <pre><code>{`# Program to generate number triangular pattern
rows = 5
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>1<br />
            1 2<br />
            1 2 3<br />
            1 2 3 4<br />
            1 2 3 4 5</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">56. Generate Number increasing pyramid</h3>
          <pre><code>{`# Program to generate number increasing pyramid
rows = 5
num = 1
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(num, end=" ")
        num += 1
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>1<br />
            2 3<br />
            4 5 6<br />
            7 8 9 10<br />
            11 12 13 14 15</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">57. Generate increasing in reverse pyramid</h3>
          <pre><code>{`# Program to generate increasing reverse pyramid
rows = 5
for i in range(rows, 0, -1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>1 2 3 4 5<br />
            1 2 3 4<br />
            1 2 3<br />
            1 2<br />
            1</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">58. Generate number changing pyramid</h3>
          <pre><code>{`# Program to generate number changing pyramid
rows = 5
num = 1
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(num, end=" ")
        num += 1
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>1<br />
            2 3<br />
            4 5 6<br />
            7 8 9 10<br />
            11 12 13 14 15</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">59. Generate zero one right angle triangle</h3>
          <pre><code>{`# Program to generate zero one right angle triangle
rows = 5
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j % 2, end=" ")
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>1<br />
            1 0<br />
            1 0 1<br />
            1 0 1 0<br />
            1 0 1 0 1</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">60. Generate palindrome triangular pattern</h3>
          <pre><code>{`# Program to generate palindrome triangular pattern
rows = 5
for i in range(1, rows + 1):
    # Print spaces
    print(" " * (rows - i), end="")
    
    # Print left half
    for j in range(1, i + 1):
        print(j, end="")
    
    # Print right half
    for j in range(i - 1, 0, -1):
        print(j, end="")
    
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>    1<br />
            &nbsp;&nbsp;&nbsp;121<br />
            &nbsp;&nbsp;12321<br />
            &nbsp;1234321<br />
            123454321</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">61. Generate rhombus pattern</h3>
          <pre><code>{`# Program to generate rhombus pattern
n = 5
for i in range(n):
    print(" " * (n - i - 1) + "*" * n)
`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;*****<br />
            &nbsp;&nbsp;&nbsp;*****<br />
            &nbsp;&nbsp;*****<br />
            &nbsp;*****<br />
            *****</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">62. Generate right half pyramid</h3>
          <pre><code>{`# Program to generate right half pyramid
rows = 5
for i in range(1, rows + 1):
    print("*" * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>*<br />
            **<br />
            ***<br />
            ****<br />
            *****</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">63. Generate reverse right half pyramid</h3>
          <pre><code>{`# Program to generate reverse right half pyramid
rows = 5
for i in range(rows, 0, -1):
    print("*" * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>*****<br />
            ****<br />
            ***<br />
            **<br />
            *</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">64. Generate left half pyramid</h3>
          <pre><code>{`# Program to generate left half pyramid
rows = 5
for i in range(1, rows + 1):
    print(" " * (rows - i) + "*" * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;&nbsp;**<br />
            &nbsp;&nbsp;***<br />
            &nbsp;****<br />
            *****</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">65. Generate reverse left half pyramid</h3>
          <pre><code>{`# Program to generate reverse left half pyramid
rows = 5
for i in range(rows, 0, -1):
    print(" " * (rows - i) + "*" * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>*****<br />
            &nbsp;****<br />
            &nbsp;&nbsp;***<br />
            &nbsp;&nbsp;&nbsp;**<br />
            &nbsp;&nbsp;&nbsp;&nbsp;*</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">66. Hollow hour glass</h3>
          <pre><code>{`# Program to generate hollow hourglass pattern
n = 5

# Upper half
for i in range(n, 0, -1):
    print(" " * (n - i), end="")
    for j in range(1, 2*i):
        if j == 1 or j == 2*i-1 or i == n:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Lower half
for i in range(2, n+1):
    print(" " * (n - i), end="")
    for j in range(1, 2*i):
        if j == 1 or j == 2*i-1 or i == n:
            print("*", end="")
        else:
            print(" ", end="")
    print()`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>*********<br />
            &nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            &nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            *********</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">67. Python program to create a right angle star pattern</h3>
          <pre><code>{`# Program to create right angle star pattern
rows = 5
for i in range(1, rows + 1):
    print("* " * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>*<br />
            * *<br />
            * * *<br />
            * * * *<br />
            * * * * *</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">68. Python program to create a square star pattern</h3>
          <pre><code>{`# Program to create square star pattern
size = 5
for i in range(size):
    print("* " * size)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>* * * * *<br />
            * * * * *<br />
            * * * * *<br />
            * * * * *<br />
            * * * * *</div>
          </div>
        </div>
      </section>

      {/* Page 6 Programs */}
      <section className="mb-5">
        <h2 className="mb-3">Star Pattern Programs</h2>
        
        <div className="program-card">
          <h3 className="program-title">69. Python program to create a star pattern in K-Shape</h3>
          <pre><code>{`# Program to create K-shape star pattern
n = 5

# Upper part of K
for i in range(n, 0, -1):
    print("* " * i)

# Lower part of K
for i in range(2, n + 1):
    print("* " * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>* * * * *<br />
            * * * *<br />
            * * *<br />
            * *<br />
            *<br />
            * *<br />
            * * *<br />
            * * * *<br />
            * * * * *</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">70. Python program to create a diamond star pattern</h3>
          <pre><code>{`# Program to create diamond star pattern
n = 5

# Upper part of diamond
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * i)

# Lower part of diamond
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "* " * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            &nbsp;&nbsp;&nbsp;* *<br />
            &nbsp;&nbsp;* * *<br />
            &nbsp;* * * *<br />
            * * * * *<br />
            &nbsp;* * * *<br />
            &nbsp;&nbsp;* * *<br />
            &nbsp;&nbsp;&nbsp;* *<br />
            &nbsp;&nbsp;&nbsp;&nbsp;*</div>
          </div>
        </div>

        <div className="program-card">
          <h3 className="program-title">71. Python program to create a butterfly star pattern</h3>
          <pre><code>{`# Program to create butterfly star pattern
n = 5

# Upper part of butterfly
for i in range(1, n + 1):
    print("* " * i + "  " * (2 * (n - i)) + "* " * i)

# Lower part of butterfly
for i in range(n, 0, -1):
    print("* " * i + "  " * (2 * (n - i)) + "* " * i)`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            <div>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br />
            * *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* *<br />
            * * *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* * *<br />
            * * * *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* * * *<br />
            * * * * *&nbsp;* * * * *<br />
            * * * * *&nbsp;* * * * *<br />
            * * * *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* * * *<br />
            * * *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* * *<br />
            * *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* *<br />
            *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</div>
          </div>
        </div>
      </section>

      <footer className="text-center mt-5 mb-3">
        <p>© 2025 Python Programming Examples. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PythonPrograms;