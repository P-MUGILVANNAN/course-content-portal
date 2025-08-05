import React from 'react';

function CppPrograms() {
    return (
        <div className="container py-4">
            <style>
                {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          .program-card {
            margin-bottom: 2rem;
            border-left: 4px solid #0d6efd;
            padding-left: 1rem;
          }
          .program-title {
            color: #0d6efd;
          }
          .output {
            background-color: #2d3748;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-family: monospace;
            white-space: pre-wrap;
          }
        `}
            </style>

            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">C++ Programming Solutions</h1>
                <p className="lead">Complete solutions for all C++ programming questions with outputs</p>
            </header>

            <div className="row">
                <div className="col">
                    {/* Basic Programs */}
                    <section id="ascii" className="program-card">
                        <h2 className="program-title">1. C++ Program to Find ASCII Value of a Character</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    char c;
    cout << "Enter a character: ";
    cin >> c;
    cout << "ASCII Value of " << c << " is " << int(c);
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a character: A
ASCII Value of A is 65`}
                        </pre>
                    </section>

                    <section id="swap" className="program-card">
                        <h2 className="program-title">2. C++ Program to Swap Two Numbers</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int a, b, temp;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    cout << "Before swapping: a = " << a << ", b = " << b << endl;
    
    temp = a;
    a = b;
    b = temp;
    
    cout << "After swapping: a = " << a << ", b = " << b;
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter two numbers: 5 10
Before swapping: a = 5, b = 10
After swapping: a = 10, b = 5`}
                        </pre>
                    </section>

                    <section id="even-odd" className="program-card">
                        <h2 className="program-title">3. C++ Program to Check Whether a Number is Even or Odd</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter an integer: ";
    cin >> num;

    if (num % 2 == 0)
        cout << num << " is even.";
    else
        cout << num << " is odd.";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter an integer: 4
4 is even.

Example Output 2:
Enter an integer: 7
7 is odd.`}
                        </pre>
                    </section>

                    <section id="vowel" className="program-card">
                        <h2 className="program-title">4. C++ Program to Check Whether an Alphabet is Vowel or Consonant</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    char c;
    bool isVowel = false;

    cout << "Enter an alphabet: ";
    cin >> c;

    switch(tolower(c)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            isVowel = true;
    }

    if (isVowel)
        cout << c << " is a vowel.";
    else if (isalpha(c))
        cout << c << " is a consonant.";
    else
        cout << "Not an alphabet.";
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter an alphabet: E
E is a vowel.

Example Output 2:
Enter an alphabet: z
z is a consonant.

Example Output 3:
Enter an alphabet: 5
Not an alphabet.`}
                        </pre>
                    </section>

                    <section id="largest" className="program-card">
                        <h2 className="program-title">5. C++ Program to Find the Largest Among Three Numbers</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    float n1, n2, n3;

    cout << "Enter three numbers: ";
    cin >> n1 >> n2 >> n3;

    if(n1 >= n2 && n1 >= n3)
        cout << "Largest number: " << n1;
    else if(n2 >= n1 && n2 >= n3)
        cout << "Largest number: " << n2;
    else
        cout << "Largest number: " << n3;
  
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter three numbers: 12.5 10.2 14.7
Largest number: 14.7`}
                        </pre>
                    </section>

                    <section id="leap" className="program-card">
                        <h2 className="program-title">6. C++ Program to Check Leap Year</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int year;
    cout << "Enter a year: ";
    cin >> year;

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                cout << year << " is a leap year.";
            else
                cout << year << " is not a leap year.";
        }
        else
            cout << year << " is a leap year.";
    }
    else
        cout << year << " is not a leap year.";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a year: 2000
2000 is a leap year.`}
                        </pre>
                    </section>

                    <section id="positive" className="program-card">
                        <h2 className="program-title">7. C++ Program to Check Whether a Number is Positive or Negative</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    double num;
    cout << "Enter a number: ";
    cin >> num;

    if (num > 0)
        cout << "Positive number";
    else if (num < 0)
        cout << "Negative number";
    else
        cout << "Zero";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a number: 5.5
Positive number`}
                        </pre>
                    </section>

                    <section id="alphabet" className="program-card">
                        <h2 className="program-title">8. C++ Program to Check Whether a Character is Alphabet or Not</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    char c;
    cout << "Enter a character: ";
    cin >> c;

    if (isalpha(c))
        cout << c << " is an alphabet.";
    else
        cout << c << " is not an alphabet.";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a character: A
A is an alphabet.`}
                        </pre>
                    </section>

                    <section id="sum-natural" className="program-card">
                        <h2 className="program-title">9. C++ Program to Calculate the Sum of Natural Numbers</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;

    cout << "Enter a positive integer: ";
    cin >> n;

    for (int i = 1; i <= n; ++i) {
        sum += i;
    }

    cout << "Sum = " << sum;
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a positive integer: 10
Sum = 55`}
                        </pre>
                    </section>

                    <section id="factorial" className="program-card">
                        <h2 className="program-title">10. C++ Program to Find Factorial of a Number</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;
    unsigned long long factorial = 1;

    cout << "Enter a positive integer: ";
    cin >> n;

    if (n < 0)
        cout << "Error! Factorial of a negative number doesn't exist.";
    else {
        for(int i = 1; i <= n; ++i) {
            factorial *= i;
        }
        cout << "Factorial of " << n << " = " << factorial;    
    }

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a positive integer: 5
Factorial of 5 = 120`}
                        </pre>
                    </section>

                    <section id="multiplication" className="program-card">
                        <h2 className="program-title">11. Program to Generate Multiplication Table</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Enter a positive integer: ";
    cin >> n;

    for (int i = 1; i <= 10; ++i) {
        cout << n << " * " << i << " = " << n * i << endl;
    }
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a positive integer: 5
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50`}</pre>
                    </section>

                    <section id="fibonacci" className="program-card">
                        <h2 className="program-title">12. C++ Program to Display Fibonacci Series</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n, t1 = 0, t2 = 1, nextTerm = 0;

    cout << "Enter the number of terms: ";
    cin >> n;

    cout << "Fibonacci Series: ";

    for (int i = 1; i <= n; ++i) {
        if(i == 1) {
            cout << t1 << ", ";
            continue;
        }
        if(i == 2) {
            cout << t2 << ", ";
            continue;
        }
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
        
        cout << nextTerm << ", ";
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter the number of terms: 10
Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,`}
                        </pre>
                    </section>

                    <section id="lcm" className="program-card">
                        <h2 className="program-title">13. C++ Program to Find LCM of two Numbers</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n1, n2, max;

    cout << "Enter two numbers: ";
    cin >> n1 >> n2;
    
    max = (n1 > n2) ? n1 : n2;

    do {
        if (max % n1 == 0 && max % n2 == 0) {
            cout << "LCM = " << max;
            break;
        }
        else
            ++max;
    } while (true);
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter two numbers: 12 18
LCM = 36`}
                        </pre>
                    </section>

                    <section id="alphabets" className="program-card">
                        <h2 className="program-title">14. C++ Program to Display Alphabets (A to Z) using loop</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    char c;

    cout << "Alphabets from A to Z are: " << endl;

    for(c = 'A'; c <= 'Z'; ++c)
        cout << c << " ";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Alphabets from A to Z are:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`}
                        </pre>
                    </section>

                    <section id="digits" className="program-card">
                        <h2 className="program-title">15. C++ Program to Count Number of Digits in an Integer</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    long long n;
    int count = 0;

    cout << "Enter an integer: ";
    cin >> n;

    do {
        n /= 10;
        ++count;
    } while (n != 0);

    cout << "Number of digits: " << count;
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter an integer: 123456789
Number of digits: 9`}
                        </pre>
                    </section>

                    <section id="reverse" className="program-card">
                        <h2 className="program-title">16. C++ Program to Reverse a Number</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n, reversedNumber = 0, remainder;

    cout << "Enter an integer: ";
    cin >> n;

    while(n != 0) {
        remainder = n % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        n /= 10;
    }

    cout << "Reversed Number = " << reversedNumber;

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter an integer: 12345
Reversed Number = 54321`}
                        </pre>
                    </section>

                    <section id="power" className="program-card">
                        <h2 className="program-title">17. C++ Program to Calculate the Power of a Number</h2>
                        <pre>{`#include <iostream>
#include <cmath>
using namespace std;

int main() {
    float base, exponent, result;

    cout << "Enter base and exponent: ";
    cin >> base >> exponent;
    
    result = pow(base, exponent);

    cout << base << "^" << exponent << " = " << result;
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter base and exponent: 2 5
2^5 = 32`}
                        </pre>
                    </section>

                    <section id="palindrome" className="program-card">
                        <h2 className="program-title">18. C++ Program to Check Palindrome</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n, num, digit, rev = 0;
    
    cout << "Enter a positive number: ";
    cin >> num;

    n = num;

    do {
        digit = num % 10;
        rev = (rev * 10) + digit;
        num = num / 10;
    } while (num != 0);

    if (n == rev)
        cout << "The number is a palindrome.";
    else
        cout << "The number is not a palindrome.";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a positive number: 12321
The number is a palindrome.`}
                        </pre>
                    </section>

                    <section id="prime" className="program-card">
                        <h2 className="program-title">19. C++ Program to Check Whether a Number is Prime or Not</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;
    bool isPrime = true;

    cout << "Enter a positive integer: ";
    cin >> n;

    if (n == 0 || n == 1) {
        isPrime = false;
    }
    else {
        for (int i = 2; i <= n/2; ++i) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime)
        cout << n << " is a prime number";
    else
        cout << n << " is not a prime number";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a positive integer: 17
17 is a prime number`}
                        </pre>
                    </section>

                    <section id="prime-interval" className="program-card">
                        <h2 className="program-title">20. C++ Program to Display Prime Numbers Between Two Intervals</h2>
                        <pre>{`#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= n/2; i++)
        if (n % i == 0) return false;
    return true;
}

int main() {
    int low, high;
    cout << "Enter two numbers (intervals): ";
    cin >> low >> high;

    cout << "Prime numbers between " << low << " and " << high << " are: ";

    for (int i = low; i <= high; i++)
        if (isPrime(i))
            cout << i << " ";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter two numbers (intervals): 10 50
Prime numbers between 10 and 50 are: 11 13 17 19 23 29 31 37 41 43 47`}
                        </pre>
                    </section>

                    <section id="armstrong" className="program-card">
                        <h2 className="program-title">21. C++ Program to Check Armstrong Number</h2>
                        <pre>{`#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int num, originalNum, remainder, n = 0, result = 0, power;

    cout << "Enter an integer: ";
    cin >> num;

    originalNum = num;

    while (originalNum != 0) {
        originalNum /= 10;
        ++n;
    }

    originalNum = num;

    while (originalNum != 0) {
        remainder = originalNum % 10;
        power = pow(remainder, n);
        result += power;
        originalNum /= 10;
    }

    if (result == num)
        cout << num << " is an Armstrong number.";
    else
        cout << num << " is not an Armstrong number.";
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter an integer: 153
153 is an Armstrong number.`}
                        </pre>
                    </section>

                    <section id="armstrong-interval" className="program-card">
                        <h2 className="program-title">22. C++ Program to Display Armstrong Number Between Two Intervals</h2>
                        <pre>{`#include <iostream>
#include <cmath>
using namespace std;

bool isArmstrong(int num) {
    int originalNum, remainder, n = 0, result = 0;
    originalNum = num;

    while (originalNum != 0) {
        originalNum /= 10;
        ++n;
    }

    originalNum = num;

    while (originalNum != 0) {
        remainder = originalNum % 10;
        result += pow(remainder, n);
        originalNum /= 10;
    }

    return result == num;
}

int main() {
    int low, high;
    cout << "Enter two numbers (intervals): ";
    cin >> low >> high;

    cout << "Armstrong numbers between " << low << " and " << high << " are: ";

    for (int num = low; num <= high; ++num) {
        if (isArmstrong(num))
            cout << num << " ";
    }

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter two numbers (intervals): 100 1000
Armstrong numbers between 100 and 1000 are: 153 370 371 407`}
                        </pre>
                    </section>

                    <section id="factors" className="program-card">
                        <h2 className="program-title">23. C++ Program to Display Factors of a Number</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Enter a positive integer: ";
    cin >> n;

    cout << "Factors of " << n << " are: ";  
    for (int i = 1; i <= n; ++i) {
        if (n % i == 0)
            cout << i << " ";
    }

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a positive integer: 24
Factors of 24 are: 1 2 3 4 6 8 12 24`}
                        </pre>
                    </section>

                    <section id="calculator" className="program-card">
                        <h2 className="program-title">24. C++ Program to Make a Simple Calculator Using switch...case</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    char op;
    float num1, num2;

    cout << "Enter operator (+, -, *, /): ";
    cin >> op;

    cout << "Enter two operands: ";
    cin >> num1 >> num2;

    switch(op) {
        case '+':
            cout << num1 << " + " << num2 << " = " << num1 + num2;
            break;
        case '-':
            cout << num1 << " - " << num2 << " = " << num1 - num2;
            break;
        case '*':
            cout << num1 << " * " << num2 << " = " << num1 * num2;
            break;
        case '/':
            if (num2 != 0)
                cout << num1 << " / " << num2 << " = " << num1 / num2;
            else
                cout << "Error! Division by zero.";
            break;
        default:
            cout << "Error! Operator is not correct";
    }

    return 0;
}`}</pre>
                        <pre className="output">
                           {`Example Output 1:
Enter operator (+, -, *, /): +
Enter two operands: 5 3
5 + 3 = 8`}</pre>
                    </section>

                    <section id="sum-recursion" className="program-card">
                        <h2 className="program-title">25. C++ Program to Find the Sum of Natural Numbers using Recursion</h2>
                        <pre>{`#include <iostream>
using namespace std;

int sum(int n) {
    if (n != 0)
        return n + sum(n - 1);
    return 0;
}

int main() {
    int n;

    cout << "Enter a positive integer: ";
    cin >> n;

    cout << "Sum = " << sum(n);

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a positive integer: 5
Sum = 15`}
                        </pre>
                    </section>

                    <section id="factorial-recursion" className="program-card">
                        <h2 className="program-title">26. C++ Program to Find Factorial of a Number Using Recursion</h2>
                        <pre>{`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n > 1)
        return n * factorial(n - 1);
    else
        return 1;
}

int main() {
    int n;

    cout << "Enter a positive integer: ";
    cin >> n;

    cout << "Factorial of " << n << " = " << factorial(n);

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a positive integer: 5
Factorial of 5 = 120`}
                        </pre>
                    </section>

                    {/* Array Programs */}
                    <section id="average-array" className="program-card">
                        <h2 className="program-title">27. C++ Program to Calculate Average Using Arrays</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;
    float num[100], sum = 0.0, average;

    cout << "Enter the numbers of elements: ";
    cin >> n;

    for (int i = 0; i < n; ++i) {
        cout << "Enter number " << i + 1 << ": ";
        cin >> num[i];
        sum += num[i];
    }

    average = sum / n;
    cout << "Average = " << average;

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter the numbers of elements: 5
Enter number 1: 10
Enter number 2: 20
Enter number 3: 30
Enter number 4: 40
Enter number 5: 50
Average = 30`}
                        </pre>
                    </section>

                    <section id="largest-array" className="program-card">
                        <h2 className="program-title">28. C++ Program to Find Largest Element of an Array</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;
    float arr[100];

    cout << "Enter total number of elements(1 to 100): ";
    cin >> n;
    cout << endl;

    for(int i = 0; i < n; ++i) {
        cout << "Enter Number " << i + 1 << ": ";
        cin >> arr[i];
    }

    for(int i = 1; i < n; ++i) {
        if(arr[0] < arr[i])
            arr[0] = arr[i];
    }

    cout << endl << "Largest element = " << arr[0];

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter total number of elements(1 to 100): 5

Enter Number 1: 10
Enter Number 2: 30
Enter Number 3: 20
Enter Number 4: 50
Enter Number 5: 40

Largest element = 50`}
                        </pre>
                    </section>

                    <section id="add-matrix" className="program-card">
                        <h2 className="program-title">29. C++ Program to Add Two Matrix Using Multi-dimensional Arrays</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int r, c, a[100][100], b[100][100], sum[100][100];

    cout << "Enter number of rows (between 1 and 100): ";
    cin >> r;

    cout << "Enter number of columns (between 1 and 100): ";
    cin >> c;

    cout << "Enter elements of 1st matrix:" << endl;
    for (int i = 0; i < r; ++i)
        for (int j = 0; j < c; ++j) {
            cout << "Enter element a" << i + 1 << j + 1 << ": ";
            cin >> a[i][j];
        }

    cout << "Enter elements of 2nd matrix:" << endl;
    for (int i = 0; i < r; ++i)
        for (int j = 0; j < c; ++j) {
            cout << "Enter element b" << i + 1 << j + 1 << ": ";
            cin >> b[i][j];
        }

    for (int i = 0; i < r; ++i)
        for (int j = 0; j < c; ++j)
            sum[i][j] = a[i][j] + b[i][j];

    cout << "Sum of two matrices: " << endl;
    for (int i = 0; i < r; ++i)
        for (int j = 0; j < c; ++j) {
            cout << sum[i][j] << "  ";
            if (j == c - 1)
                cout << endl;
        }

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter number of rows (between 1 and 100): 2
Enter number of columns (between 1 and 100): 2
Enter elements of 1st matrix:
Enter element a11: 1
Enter element a12: 2
Enter element a21: 3
Enter element a22: 4
Enter elements of 2nd matrix:
Enter element b11: 5
Enter element b12: 6
Enter element b21: 7
Enter element b22: 8
Sum of two matrices:
6  8
10 12`}
                        </pre>
                    </section>

                    <section id="multiply-matrix" className="program-card">
                        <h2 className="program-title">30. C++ Program to Multiply Two Matrix Using Multi-dimensional Arrays</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int a[10][10], b[10][10], mult[10][10], r1, c1, r2, c2;

    cout << "Enter rows and columns for first matrix: ";
    cin >> r1 >> c1;

    cout << "Enter rows and columns for second matrix: ";
    cin >> r2 >> c2;

    while (c1 != r2) {
        cout << "Error! column of first matrix not equal to row of second." << endl;
        cout << "Enter rows and columns for first matrix: ";
        cin >> r1 >> c1;
        cout << "Enter rows and columns for second matrix: ";
        cin >> r2 >> c2;
    }

    cout << "Enter elements of matrix 1:" << endl;
    for(int i = 0; i < r1; ++i)
        for(int j = 0; j < c1; ++j) {
            cout << "Enter element a" << i + 1 << j + 1 << ": ";
            cin >> a[i][j];
        }

    cout << "Enter elements of matrix 2:" << endl;
    for(int i = 0; i < r2; ++i)
        for(int j = 0; j < c2; ++j) {
            cout << "Enter element b" << i + 1 << j + 1 << ": ";
            cin >> b[i][j];
        }

    for(int i = 0; i < r1; ++i)
        for(int j = 0; j < c2; ++j) {
            mult[i][j] = 0;
            for(int k = 0; k < c1; ++k)
                mult[i][j] += a[i][k] * b[k][j];
        }

    cout << "Output Matrix:" << endl;
    for(int i = 0; i < r1; ++i)
        for(int j = 0; j < c2; ++j) {
            cout << mult[i][j] << "  ";
            if(j == c2 - 1)
                cout << endl;
        }

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter rows and columns for first matrix: 2 2
Enter rows and columns for second matrix: 2 2
Enter elements of matrix 1:
Enter element a11: 1
Enter element a12: 2
Enter element a21: 3
Enter element a22: 4
Enter elements of matrix 2:
Enter element b11: 5
Enter element b12: 6
Enter element b21: 7
Enter element b22: 8
Output Matrix:
19  22
43  50`}
                        </pre>
                    </section>

                    {/* String Programs */}
                    <section id="frequency" className="program-card">
                        <h2 className="program-title">31. C++ Program to Find the Frequency of Character in a String</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    char ch;
    int count = 0;

    cout << "Enter a string: ";
    getline(cin, str);

    cout << "Enter a character to find frequency: ";
    cin >> ch;

    for (int i = 0; i < str.size(); i++)
        if (str[i] == ch)
            ++count;

    cout << "Frequency of " << ch << " = " << count;

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a string: programming
Enter a character to find frequency: g
Frequency of g = 2`}
                        </pre>
                    </section>

                    <section id="vowels-consonants" className="program-card">
                        <h2 className="program-title">32. C++ Program to Count the Number of Vowels and Consonants in a Sentence</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string line;
    int vowels, consonants;

    vowels = consonants = 0;

    cout << "Enter a line of string: ";
    getline(cin, line);

    for(int i = 0; i < line.length(); ++i) {
        if(line[i]=='a' || line[i]=='e' || line[i]=='i' ||
           line[i]=='o' || line[i]=='u' || line[i]=='A' ||
           line[i]=='E' || line[i]=='I' || line[i]=='O' ||
           line[i]=='U') {
            ++vowels;
        }
        else if((line[i]>='a'&& line[i]<='z') || (line[i]>='A'&& line[i]<='Z')) {
            ++consonants;
        }
    }

    cout << "Vowels: " << vowels << endl;
    cout << "Consonants: " << consonants;

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a line of string: Hello World
Vowels: 3
Consonants: 7`}
                        </pre>
                    </section>

                    <section id="concatenate" className="program-card">
                        <h2 className="program-title">33. C++ Program to Concatenate Two Arrays</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int arr1[100], arr2[100], merged[200];
    int size1, size2, size, i, j;

    cout << "Enter size of first array: ";
    cin >> size1;

    cout << "Enter elements in first array: ";
    for(i=0; i<size1; i++)
        cin >> arr1[i];

    cout << "Enter size of second array: ";
    cin >> size2;

    cout << "Enter elements in second array: ";
    for(i=0; i<size2; i++)
        cin >> arr2[i];

    size = size1 + size2;

    for(i=0; i<size1; i++)
        merged[i] = arr1[i];

    for(j=0; j<size2; j++)
        merged[i++] = arr2[j];

    cout << "Array after concatenation: ";
    for(i=0; i<size; i++)
        cout << merged[i] << " ";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter size of first array: 3
Enter elements in first array: 1 2 3
Enter size of second array: 3
Enter elements in second array: 4 5 6
Array after concatenation: 1 2 3 4 5 6`}
                        </pre>
                    </section>

                    <section id="datetime" className="program-card">
                        <h2 className="program-title">34. C++ Program to Get Current Date/Time</h2>
                        <pre>{`#include <iostream>
#include <ctime>
using namespace std;

int main() {
    time_t now = time(0);
    char* dt = ctime(&now);

    cout << "The local date and time is: " << dt << endl;

    tm *gmtm = gmtime(&now);
    dt = asctime(gmtm);
    cout << "The UTC date and time is: " << dt << endl;

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
The local date and time is: Wed Oct 25 14:30:00 2023

The UTC date and time is: Wed Oct 25 18:30:00 2023`}
                        </pre>
                    </section>

                    <section id="inheritance" className="program-card">
                        <h2 className="program-title">35. C++ Program to Implement multiple inheritance</h2>
                        <pre>{`#include <iostream>
using namespace std;

class Base1 {
public:
    void greet() {
        cout << "Hello from Base1" << endl;
    }
};

class Base2 {
public:
    void greet() {
        cout << "Hello from Base2" << endl;
    }
};

class Derived : public Base1, public Base2 {
public:
    void greet() {
        Base1::greet(); // Resolving ambiguity by specifying which greet to use
    }
};

int main() {
    Derived d;
    d.greet();
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Hello from Base1`}
                        </pre>
                    </section>

                    <section id="reverse-array" className="program-card">
                        <h2 className="program-title">36. Reverse an array</h2>
                        <pre>{`#include <iostream>
using namespace std;

void reverseArray(int arr[], int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    reverseArray(arr, 0, n-1);

    cout << "Reversed array: ";
    printArray(arr, n);

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Original array: 1 2 3 4 5 6
Reversed array: 6 5 4 3 2 1`}
                        </pre>
                    </section>

                    <section id="duplicates" className="program-card">
                        <h2 className="program-title">37. Program to print the duplicate elements of an array</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 2, 7, 8, 8, 3};
    int length = sizeof(arr)/sizeof(arr[0]);

    cout << "Duplicate elements in given array: " << endl;
    for(int i = 0; i < length; i++) {
        for(int j = i + 1; j < length; j++) {
            if(arr[i] == arr[j])
                cout << arr[j] << endl;
        }
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Duplicate elements in given array:
2
3
8`}
                        </pre>
                    </section>

                    <section id="atm" className="program-card">
                        <h2 className="program-title">38. Write a program ATM machine keeps on working till the condition equals to cancel</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    double balance = 5000.0;
    int choice;
    double amount;

    do {
        cout << "\\nATM Menu:" << endl;
        cout << "1. Check Balance" << endl;
        cout << "2. Deposit" << endl;
        cout << "3. Withdraw" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch(choice) {
            case 1:
                cout << "Your balance is: $" << balance << endl;
                break;
            case 2:
                cout << "Enter amount to deposit: $";
                cin >> amount;
                balance += amount;
                cout << "Deposit successful. New balance: $" << balance << endl;
                break;
            case 3:
                cout << "Enter amount to withdraw: $";
                cin >> amount;
                if(amount > balance)
                    cout << "Insufficient funds!" << endl;
                else {
                    balance -= amount;
                    cout << "Withdrawal successful. New balance: $" << balance << endl;
                }
                break;
            case 4:
                cout << "Thank you for using our ATM. Goodbye!" << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
    } while(choice != 4);

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
ATM Menu:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Enter your choice: 1
Your balance is: $5000

ATM Menu:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Enter your choice: 2
Enter amount to deposit: $1000
Deposit successful. New balance: $6000

ATM Menu:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Enter your choice: 3
Enter amount to withdraw: $2000
Withdrawal successful. New balance: $4000

ATM Menu:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Enter your choice: 4
Thank you for using our ATM. Goodbye!`}
                        </pre>
                    </section>

                    <section id="char-count" className="program-card">
                        <h2 className="program-title">39. C++ Program to count the total number of characters in a string</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    int count = 0;

    cout << "Enter a string: ";
    getline(cin, str);

    for(int i = 0; str[i] != '\\0'; ++i) {
        if(str[i] != ' ') // Excluding spaces from count
            ++count;
    }

    cout << "Total number of characters: " << count;
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a string: Hello World
Total number of characters: 10`}
                        </pre>
                    </section>

                    <section id="punctuation" className="program-card">
                        <h2 className="program-title">40. C++ Program to count the total number of punctuation characters exists in a String</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    int count = 0;

    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); ++i) {
        if (ispunct(str[i]))
            ++count;
    }

    cout << "Total number of punctuation characters: " << count;
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a string: Hello, World! How are you?
Total number of punctuation characters: 3`}
                        </pre>
                    </section>

                    <section id="anagram" className="program-card">
                        <h2 className="program-title">41. C++ Program to determine whether two strings are the anagram</h2>
                        <pre>{`#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

bool areAnagram(string str1, string str2) {
    int n1 = str1.length();
    int n2 = str2.length();

    if (n1 != n2)
        return false;

    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());

    for (int i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}

int main() {
    string str1, str2;

    cout << "Enter first string: ";
    getline(cin, str1);
    cout << "Enter second string: ";
    getline(cin, str2);

    if (areAnagram(str1, str2))
        cout << "The two strings are anagram of each other";
    else
        cout << "The two strings are not anagram of each other";

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter first string: listen
Enter second string: silent
The two strings are anagram of each other`}
                        </pre>
                    </section>

                    <section id="case-convert" className="program-card">
                        <h2 className="program-title">42. C++ Program to replace lower-case characters with upper-case and vice-versa</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); i++) {
        if (islower(str[i]))
            str[i] = toupper(str[i]);
        else if (isupper(str[i]))
            str[i] = tolower(str[i]);
    }

    cout << "Converted string: " << str;
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a string: Hello World
Converted string: hELLO wORLD`}
                        </pre>
                    </section>

                    <section id="string-split" className="program-card">
                        <h2 className="program-title">43. C++ Program to divide a string in 'N' equal parts</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

void divideString(string str, int n) {
    int str_size = str.length();
    
    if (str_size % n != 0) {
        cout << "String cannot be divided into " << n << " equal parts.";
        return;
    }

    int part_size = str_size / n;
    for (int i = 0; i < str_size; i++) {
        if (i % part_size == 0)
            cout << endl;
        cout << str[i];
    }
}

int main() {
    string str;
    int n;

    cout << "Enter a string: ";
    getline(cin, str);
    cout << "Enter number of parts: ";
    cin >> n;

    divideString(str, n);
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output 1:
Enter a string: programming
Enter number of parts: 2

 progra
mming`}
                        </pre>
                    </section>

                    <section id="largest-word" className="program-card">
                        <h2 className="program-title">44. C++ Program to find the largest and smallest word in a string</h2>
                        <pre>{`#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    vector<string> words;
    stringstream ss(str);
    string word;

    while (ss >> word)
        words.push_back(word);

    string smallest = words[0];
    string largest = words[0];

    for (size_t i = 1; i < words.size(); i++) {
        if (words[i].length() < smallest.length())
            smallest = words[i];
        if (words[i].length() > largest.length())
            largest = words[i];
    }

    cout << "Smallest word: " << smallest << endl;
    cout << "Largest word: " << largest << endl;

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter a string: C++ is a powerful programming language
Smallest word: a
Largest word: programming`}
                        </pre>
                    </section>

                    {/* OOP Programs */}
                    <section id="inheritance-types" className="program-card">
                        <h2 className="program-title">45. C++ program based on the concept of single level, multilevel, hierarchical Inheritance</h2>
                        <pre>{`#include <iostream>
using namespace std;

// Single Level Inheritance
class Base {
public:
    void display() {
        cout << "Base class display" << endl;
    }
};

class Derived1 : public Base {
public:
    void show() {
        cout << "Derived1 class show" << endl;
    }
};

// Multilevel Inheritance
class Derived2 : public Derived1 {
public:
    void print() {
        cout << "Derived2 class print" << endl;
    }
};

// Hierarchical Inheritance
class Derived3 : public Base {
public:
    void output() {
        cout << "Derived3 class output" << endl;
    }
};

int main() {
    cout << "Single Level Inheritance:" << endl;
    Derived1 d1;
    d1.display();
    d1.show();

    cout << "\\nMultilevel Inheritance:" << endl;
    Derived2 d2;
    d2.display();
    d2.show();
    d2.print();

    cout << "\\nHierarchical Inheritance:" << endl;
    Derived3 d3;
    d3.display();
    d3.output();

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Single Level Inheritance:
Base class display
Derived1 class show

Multilevel Inheritance:
Base class display
Derived1 class show
Derived2 class print

Hierarchical Inheritance:
Base class display
Derived3 class output`}
                        </pre>
                    </section>

                    <section id="overloading" className="program-card">
                        <h2 className="program-title">46. C++ program based on the concept of method overloading, method overriding</h2>
                        <pre>{`#include <iostream>
using namespace std;

// Method Overloading
class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
};

// Method Overriding
class Base {
public:
    virtual void show() {
        cout << "Base class show" << endl;
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived class show" << endl;
    }
};

int main() {
    cout << "Method Overloading Example:" << endl;
    Calculator calc;
    cout << "2 + 3 = " << calc.add(2, 3) << endl;
    cout << "2.5 + 3.5 = " << calc.add(2.5, 3.5) << endl;
    cout << "2 + 3 + 4 = " << calc.add(2, 3, 4) << endl;

    cout << "\\nMethod Overriding Example:" << endl;
    Base* b;
    Derived d;
    b = &d;
    b->show();

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Method Overloading Example:
2 + 3 = 5
2.5 + 3.5 = 6
2 + 3 + 4 = 9

Method Overriding Example:
Derived class show`}
                        </pre>
                    </section>

                    <section id="abstract" className="program-card">
                        <h2 className="program-title">47. C++ program to create a abstract method with hierarchical inheritance</h2>
                        <pre>{`#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        cout << "Drawing Square" << endl;
    }
};

class Triangle : public Shape {
public:
    void draw() override {
        cout << "Drawing Triangle" << endl;
    }
};

int main() {
    Shape* shapes[3];
    Circle c;
    Square s;
    Triangle t;

    shapes[0] = &c;
    shapes[1] = &s;
    shapes[2] = &t;

    for (int i = 0; i < 3; i++) {
        shapes[i]->draw();
    }

    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Drawing Circle
Drawing Square
Drawing Triangle`}
                        </pre>
                    </section>

                    <section id="encapsulation" className="program-card">
                        <h2 className="program-title">48. C++ program based on the encapsulation</h2>
                        <pre>{`#include <iostream>
using namespace std;

class Employee {
private:
    string name;
    int age;
    double salary;

public:
    // Setter methods
    void setName(string n) {
        name = n;
    }
    
    void setAge(int a) {
        if(a > 0) age = a;
    }
    
    void setSalary(double s) {
        if(s > 0) salary = s;
    }
    
    // Getter methods
    string getName() {
        return name;
    }
    
    int getAge() {
        return age;
    }
    
    double getSalary() {
        return salary;
    }
    
    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Salary: " << salary << endl;
    }
};

int main() {
    Employee emp;
    emp.setName("John Doe");
    emp.setAge(30);
    emp.setSalary(50000.0);
    
    cout << "Employee Details:" << endl;
    emp.display();
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Employee Details:
Name: John Doe
Age: 30
Salary: 50000`}
                        </pre>
                    </section>

                    <section id="oops" className="program-card">
                        <h2 className="program-title">49. C++ program for OOPS</h2>
                        <pre>{`#include <iostream>
#include <string>
using namespace std;

class Car {
private:
    string brand;
    string model;
    int year;

public:
    // Constructor
    Car(string b, string m, int y) : brand(b), model(m), year(y) {}
    
    // Method to display car details
    void displayDetails() {
        cout << "Brand: " << brand << endl;
        cout << "Model: " << model << endl;
        cout << "Year: " << year << endl;
    }
    
    // Method to start the car
    void startEngine() {
        cout << "Engine started for " << brand << " " << model << endl;
    }
};

int main() {
    // Create an object of Car
    Car myCar("Toyota", "Corolla", 2020);
    
    // Call methods on the object
    cout << "Car Details:" << endl;
    myCar.displayDetails();
    myCar.startEngine();
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Car Details:
Brand: Toyota
Model: Corolla
Year: 2020
Engine started for Toyota Corolla`}
                        </pre>
                    </section>

                    <section id="swap-no-var" className="program-card">
                        <h2 className="program-title">50. C++ program to swap two variables without third variable</h2>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int a, b;
    
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    cout << "Before swapping: a = " << a << ", b = " << b << endl;
    
    // Swapping without third variable
    a = a + b;
    b = a - b;
    a = a - b;
    
    cout << "After swapping: a = " << a << ", b = " << b << endl;
    
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output:
Enter two numbers: 5 10
Before swapping: a = 5, b = 10
After swapping: a = 10, b = 5`}
                        </pre>
                    </section>

                    {/* Pattern Programs */}
                    <section id="patterns" className="program-card">
                        <h2 className="program-title">51-60. C++ Pattern Programs</h2>
                        <h3>Number triangular pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; ++i) {
        for(int space = 1; space <= rows-i; ++space)
            cout << " ";
        
        for(int j = 1; j <= i; ++j)
            cout << j << " ";
        
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`}
                        </pre>

                        <h3>Number increasing pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; ++i) {
        for(int j = 1; j <= i; ++j)
            cout << j << " ";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`}
                        </pre>

                        <h3>Increasing in reverse pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = rows; i >= 1; --i) {
        for(int j = 1; j <= i; ++j)
            cout << j << " ";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1`}
                        </pre>

                        <h3>Number changing pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows, num = 1;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            cout << num << " ";
            num++;
        }
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 4):
1
2 3
4 5 6
7 8 9 10`}
                        </pre>

                        <h3>Zero one right angle triangle</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            if((i+j) % 2 == 0)
                cout << "1 ";
            else
                cout << "0 ";
        }
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1`}
                        </pre>

                        <h3>Palindrome triangular pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        // Print spaces
        for(int j = 1; j <= rows-i; j++)
            cout << "  ";
        
        // Print left half
        for(int j = i; j >= 1; j--)
            cout << j << " ";
        
        // Print right half
        for(int j = 2; j <= i; j++)
            cout << j << " ";
        
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
1
2 1 2
3 2 1 2 3
4 3 2 1 2 3 4
5 4 3 2 1 2 3 4 5`}
                        </pre>

                        <h3>Rhombus pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        // Print spaces
        for(int j = 1; j <= rows-i; j++)
            cout << " ";
        
        // Print stars
        for(int j = 1; j <= rows; j++)
            cout << "*";
        
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*****
*****
*****
*****
*****`}
                        </pre>

                        <h3>Right half pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*
* *
* * *
* * * *
* * * * *`}
                        </pre>

                        <h3>Reverse right half pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = rows; i >= 1; i--) {
        for(int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
* * * * *
* * * *
* * *
* *
*`}
                        </pre>

                        <h3>Left half pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        // Print spaces
        for(int j = 1; j <= rows-i; j++)
            cout << "  ";
        
        // Print stars
        for(int j = 1; j <= i; j++)
            cout << "* ";
        
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*
* *
* * *
* * * *
* * * * *`}
                        </pre>

                        <h3>Reverse left half pyramid</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = rows; i >= 1; i--) {
        // Print spaces
        for(int j = 1; j <= rows-i; j++)
            cout << "  ";
        
        // Print stars
        for(int j = 1; j <= i; j++)
            cout << "* ";
        
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
* * * * *
* * * *
* * *
* *
*`}
                        </pre>

                        <h3>Hollow hour glass</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows (odd number): ";
    cin >> rows;

    // Upper half
    for(int i = 1; i <= rows/2+1; i++) {
        for(int j = 1; j < i; j++)
            cout << " ";
        for(int j = 1; j <= rows-2*(i-1); j++) {
            if(j == 1 || j == rows-2*(i-1) || i == 1)
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }

    // Lower half
    for(int i = rows/2; i >= 1; i--) {
        for(int j = 1; j < i; j++)
            cout << " ";
        for(int j = 1; j <= rows-2*(i-1); j++) {
            if(j == 1 || j == rows-2*(i-1) || i == 1)
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*****
*   *
* *
*
* *
*   *
*****`}
                        </pre>

                        <h3>Right angle star pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++)
            cout << "*";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*
**
***
****
*****`}
                        </pre>

                        <h3>Square star pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= rows; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 4):
* * * *
* * * *
* * * *
* * * *`}
                        </pre>

                        <h3>Star pattern in K-Shape</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    // Upper part of K
    for(int i = rows; i >= 1; i--) {
        for(int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }

    // Lower part of K
    for(int i = 2; i <= rows; i++) {
        for(int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
* * * * *
* * * *
* * *
* *
*
* *
* * *
* * * *
* * * * *`}
                        </pre>

                        <h3>Diamond star pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    // Upper part of diamond
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= rows-i; j++)
            cout << " ";
        for(int j = 1; j <= 2*i-1; j++)
            cout << "*";
        cout << endl;
    }

    // Lower part of diamond
    for(int i = rows-1; i >= 1; i--) {
        for(int j = 1; j <= rows-i; j++)
            cout << " ";
        for(int j = 1; j <= 2*i-1; j++)
            cout << "*";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*
***
*****
*******
*********
*******
*****
***
*`}
                        </pre>

                        <h3>Butterfly star pattern</h3>
                        <pre>{`#include <iostream>
using namespace std;

int main() {
    int rows;
    cout << "Enter number of rows: ";
    cin >> rows;

    // Upper part of butterfly
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++)
            cout << "*";
        for(int j = 1; j <= 2*(rows-i); j++)
            cout << " ";
        for(int j = 1; j <= i; j++)
            cout << "*";
        cout << endl;
    }

    // Lower part of butterfly
    for(int i = rows; i >= 1; i--) {
        for(int j = 1; j <= i; j++)
            cout << "*";
        for(int j = 1; j <= 2*(rows-i); j++)
            cout << " ";
        for(int j = 1; j <= i; j++)
            cout << "*";
        cout << endl;
    }
    return 0;
}`}</pre>
                        <pre className="output">
                            {`Example Output (rows = 5):
*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *`}
                        </pre>
                    </section>
                </div>
            </div>

            <footer className="bg-dark text-white p-4 mt-4">
                <div className="container text-center">
                    <p>C++ Programming Examples &copy; 2023 | All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default CppPrograms;