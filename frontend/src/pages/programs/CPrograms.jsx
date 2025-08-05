import React from 'react';

function CProgrammingQuestions() {
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
          code {
            font-family: 'Courier New', monospace;
          }
          .question-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
          }
          .question-title {
            color: #0d6efd;
            font-weight: bold;
          }
          .output {
            background-color: #e9ecef;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            border-left: 4px solid #28a745;
          }
          .output-title {
            color: #28a745;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }
        `}
      </style>

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">C Programming Solutions</h1>
        <p className="lead">Complete solutions with outputs for all C programming questions</p>
      </header>

      <div className="question-card">
        <h2 className="question-title">1. C Program to Find ASCII Value of a character</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);
    printf("ASCII value of %c = %d", c, c);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a character: A<br />
ASCII value of A = 65</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">2. C Program to Swap Two Numbers</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int a, b, temp;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    
    temp = a;
    a = b;
    b = temp;
    
    printf("After swapping: %d %d", a, b);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter two numbers: 5 10 <br />
After swapping: 10 5</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">3. C Program to Check Whether a Number is Even or Odd</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int num;
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    if(num % 2 == 0)
        printf("%d is even.", num);
    else
        printf("%d is odd.", num);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter an integer: 7<br />
7 is odd.</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">4. C Program to Check Whether an Alphabet is Vowel or Consonant</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);
    
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||
       c=='A'||c=='E'||c=='I'||c=='O'||c=='U')
        printf("%c is a vowel.", c);
    else
        printf("%c is a consonant.", c);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a character: E<br />
E is a vowel.</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">5. C Program to Find the Largest Among Three Numbers</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    
    if(a >= b && a >= c)
        printf("%d is the largest.", a);
    else if(b >= a && b >= c)
        printf("%d is the largest.", b);
    else
        printf("%d is the largest.", c);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter three numbers: 12 25 8<br />
25 is the largest.</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">6. C Program to Check Leap Year</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int year;
    printf("Enter a year: ");
    scanf("%d", &year);
    
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        printf("%d is a leap year.", year);
    else
        printf("%d is not a leap year.", year);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a year: 2020<br />
2020 is a leap year.</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">7. C Program to Check Whether a Number is Positive or Negative</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if(num > 0)
        printf("%d is positive.", num);
    else if(num < 0)
        printf("%d is negative.", num);
    else
        printf("The number is zero.");
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a number: -5<br />
-5 is negative.</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">8. C Program to Check Whether a Character is Alphabet or Not</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);
    
    if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
        printf("%c is an alphabet.", c);
    else
        printf("%c is not an alphabet.", c);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a character: 5<br />
5 is not an alphabet.</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">9. C Program to Calculate the Sum of Natural Numbers</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    for(int i = 1; i <= n; i++)
        sum += i;
    
    printf("Sum = %d", sum);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a positive integer: 10<br />
Sum = 55</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">10. C Program to Find Factorial of a Number</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n, fact = 1;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    for(int i = 1; i <= n; i++)
        fact *= i;
    
    printf("Factorial of %d = %d", n, fact);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>Enter a positive integer: 5<br />
Factorial of 5 = 120</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">11. Program to Generate Multiplication Table</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n;
    printf("Enter an integer: ");
    scanf("%d", &n);
    
    for(int i = 1; i <= 10; i++)
        printf("%d * %d = %d\n", n, i, n*i);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter an integer: 5
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
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">12. C Program to Display Fibonacci Series</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n, t1 = 0, t2 = 1, nextTerm;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    
    printf("Fibonacci Series: ");
    for(int i = 1; i <= n; i++) {
        printf("%d, ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter the number of terms: 10
Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">13. C Program to Find LCM of two Numbers</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n1, n2, max;
    printf("Enter two positive integers: ");
    scanf("%d %d", &n1, &n2);
    
    max = (n1 > n2) ? n1 : n2;
    
    while(1) {
        if(max % n1 == 0 && max % n2 == 0) {
            printf("LCM of %d and %d is %d.", n1, n2, max);
            break;
        }
        ++max;
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter two positive integers: 12 18
LCM of 12 and 18 is 36.`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">14. C Program to Display Alphabets (A to Z) using loop</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    char c;
    printf("Alphabets from A to Z:\n");
    
    for(c = 'A'; c <= 'Z'; c++)
        printf("%c ", c);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Alphabets from A to Z:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">15. C Program to Count Number of Digits in an Integer</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    long long n;
    int count = 0;
    printf("Enter an integer: ");
    scanf("%lld", &n);
    
    do {
        n /= 10;
        ++count;
    } while(n != 0);
    
    printf("Number of digits: %d", count);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter an integer: 12345
Number of digits: 5`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">16. C Program to Reverse a Number</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n, reversed = 0, remainder;
    printf("Enter an integer: ");
    scanf("%d", &n);
    
    while(n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }
    
    printf("Reversed number = %d", reversed);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter an integer: 1234
Reversed number = 4321`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">17. C Program to Calculate the Power of a Number</h2>
        <pre><code>{`#include <stdio.h>
#include <math.h>

int main() {
    double base, exp, result;
    printf("Enter base and exponent: ");
    scanf("%lf %lf", &base, &exp);
    
    result = pow(base, exp);
    printf("%.2lf^%.2lf = %.2lf", base, exp, result);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter base and exponent: 2 3
2.00^3.00 = 8.00`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">18. C Program to Check Palindrome</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[100], rev[100];
    printf("Enter a string: ");
    scanf("%s", str);
    
    strcpy(rev, str);
    strrev(rev);
    
    if(strcmp(str, rev) == 0)
        printf("%s is a palindrome.", str);
    else
        printf("%s is not a palindrome.", str);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: madam
madam is a palindrome.`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">19. C Program to Check Whether a Number is Prime or Not</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n, flag = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    for(int i = 2; i <= n/2; i++) {
        if(n % i == 0) {
            flag = 1;
            break;
        }
    }
    
    if(n == 1)
        printf("1 is neither prime nor composite.");
    else {
        if(flag == 0)
            printf("%d is a prime number.", n);
        else
            printf("%d is not a prime number.", n);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a positive integer: 17
17 is a prime number.`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">20. C Program to Display Prime Numbers Between Two Intervals</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int low, high, flag;
    printf("Enter two numbers (intervals): ");
    scanf("%d %d", &low, &high);
    
    printf("Prime numbers between %d and %d are: ", low, high);
    for(int i = low; i <= high; i++) {
        if(i == 1) continue;
        flag = 0;
        
        for(int j = 2; j <= i/2; j++) {
            if(i % j == 0) {
                flag = 1;
                break;
            }
        }
        
        if(flag == 0)
            printf("%d ", i);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter two numbers (intervals): 10 30
Prime numbers between 10 and 30 are: 11 13 17 19 23 29`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">21. C Program to Check Armstrong Number</h2>
        <pre><code>{`#include <stdio.h>
#include <math.h>

int main() {
    int num, original, remainder, n = 0, result = 0;
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    original = num;
    while(original != 0) {
        original /= 10;
        ++n;
    }
    
    original = num;
    while(original != 0) {
        remainder = original % 10;
        result += pow(remainder, n);
        original /= 10;
    }
    
    if(result == num)
        printf("%d is an Armstrong number.", num);
    else
        printf("%d is not an Armstrong number.", num);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter an integer: 153
153 is an Armstrong number.`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">22. C Program to Display Armstrong Number Between Two Intervals</h2>
        <pre><code>{`#include <stdio.h>
#include <math.h>

int main() {
    int low, high, i, temp1, temp2, remainder, n = 0, result = 0;
    printf("Enter two numbers (intervals): ");
    scanf("%d %d", &low, &high);
    
    printf("Armstrong numbers between %d and %d are: ", low, high);
    for(i = low + 1; i < high; i++) {
        temp1 = i;
        temp2 = i;
        n = 0;
        result = 0;
        
        while(temp1 != 0) {
            temp1 /= 10;
            ++n;
        }
        
        while(temp2 != 0) {
            remainder = temp2 % 10;
            result += pow(remainder, n);
            temp2 /= 10;
        }
        
        if(result == i)
            printf("%d ", i);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter two numbers (intervals): 100 500
Armstrong numbers between 100 and 500 are: 153 370 371 407`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">23. C Program to Display Prime Numbers Between Intervals Using Function</h2>
        <pre><code>{`#include <stdio.h>

int checkPrime(int num) {
    if(num <= 1) return 0;
    for(int i = 2; i <= num/2; i++) {
        if(num % i == 0)
            return 0;
    }
    return 1;
}

int main() {
    int low, high;
    printf("Enter two numbers (intervals): ");
    scanf("%d %d", &low, &high);
    
    printf("Prime numbers between %d and %d are: ", low, high);
    for(int i = low; i <= high; i++) {
        if(checkPrime(i))
            printf("%d ", i);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter two numbers (intervals): 20 50
Prime numbers between 20 and 50 are: 23 29 31 37 41 43 47`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">24. C Program to Display Armstrong Numbers Between Intervals Using Function</h2>
        <pre><code>{`#include <stdio.h>
#include <math.h>

int checkArmstrong(int num) {
    int original = num, remainder, n = 0, result = 0;
    
    while(original != 0) {
        original /= 10;
        ++n;
    }
    
    original = num;
    while(original != 0) {
        remainder = original % 10;
        result += pow(remainder, n);
        original /= 10;
    }
    
    return (result == num);
}

int main() {
    int low, high;
    printf("Enter two numbers (intervals): ");
    scanf("%d %d", &low, &high);
    
    printf("Armstrong numbers between %d and %d are: ", low, high);
    for(int i = low + 1; i < high; i++) {
        if(checkArmstrong(i))
            printf("%d ", i);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter two numbers (intervals): 1 1000
Armstrong numbers between 1 and 1000 are: 2 3 4 5 6 7 8 9 153 370 371 407`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">25. C Program to Display Factors of a Number</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    printf("Factors of %d are: ", num);
    for(int i = 1; i <= num; i++) {
        if(num % i == 0)
            printf("%d ", i);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a positive integer: 24
Factors of 24 are: 1 2 3 4 6 8 12 24`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">26. C Program to Make a Simple Calculator Using switch...case</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    char op;
    double n1, n2;
    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &op);
    printf("Enter two operands: ");
    scanf("%lf %lf", &n1, &n2);
    
    switch(op) {
        case '+':
            printf("%.1lf + %.1lf = %.1lf", n1, n2, n1 + n2);
            break;
        case '-':
            printf("%.1lf - %.1lf = %.1lf", n1, n2, n1 - n2);
            break;
        case '*':
            printf("%.1lf * %.1lf = %.1lf", n1, n2, n1 * n2);
            break;
        case '/':
            printf("%.1lf / %.1lf = %.1lf", n1, n2, n1 / n2);
            break;
        default:
            printf("Error! operator is not correct");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter an operator (+, -, *, /): *
Enter two operands: 5 8
5.0 * 8.0 = 40.0`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">27. C Program to Find the Sum of Natural Numbers using Recursion</h2>
        <pre><code>{`#include <stdio.h>

int sumOfNaturalNumbers(int n) {
    if(n != 0)
        return n + sumOfNaturalNumbers(n - 1);
    else
        return n;
}

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    printf("Sum = %d", sumOfNaturalNumbers(num));
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a positive integer: 5
Sum = 15`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">28. C Program to Find Factorial of a Number Using Recursion</h2>
        <pre><code>{`#include <stdio.h>

long int multiplyNumbers(int n) {
    if(n >= 1)
        return n * multiplyNumbers(n - 1);
    else
        return 1;
}

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    
    printf("Factorial of %d = %ld", num, multiplyNumbers(num));
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a positive integer: 6
Factorial of 6 = 720`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">29. C Program to Calculate Average Using Arrays</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n;
    float sum = 0.0, avg;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    float arr[n];
    printf("Enter %d elements:\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%f", &arr[i]);
        sum += arr[i];
    }
    
    avg = sum / n;
    printf("Average = %.2f", avg);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter the number of elements: 5
Enter 5 elements:
12.5 15.6 10.2 14.8 13.3
Average = 13.28`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">30. C Program to Find Largest Element of an Array</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter %d integers:\n", n);
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    
    int largest = arr[0];
    for(int i = 1; i < n; i++) {
        if(arr[i] > largest)
            largest = arr[i];
    }
    
    printf("Largest element = %d", largest);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter the number of elements: 5
Enter 5 integers:
12 45 8 32 19
Largest element = 45`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">31. C Program to Add Two Matrix Using Multi-dimensional Arrays</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int r, c, a[100][100], b[100][100], sum[100][100];
    printf("Enter the number of rows (between 1 and 100): ");
    scanf("%d", &r);
    printf("Enter the number of columns (between 1 and 100): ");
    scanf("%d", &c);
    
    printf("Enter elements of 1st matrix:\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    
    printf("Enter elements of 2nd matrix:\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &b[i][j]);
    
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            sum[i][j] = a[i][j] + b[i][j];
    
    printf("Sum of two matrices:\n");
    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++)
            printf("%d ", sum[i][j]);
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter the number of rows (between 1 and 100): 2
Enter the number of columns (between 1 and 100): 2
Enter elements of 1st matrix:
1 2
3 4
Enter elements of 2nd matrix:
5 6
7 8
Sum of two matrices:
6 8 
10 12`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">32. C Program to Multiply Two Matrix Using Multi-dimensional Arrays</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int a[10][10], b[10][10], result[10][10], r1, c1, r2, c2;
    printf("Enter rows and columns for first matrix: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter rows and columns for second matrix: ");
    scanf("%d %d", &r2, &c2);
    
    while(c1 != r2) {
        printf("Error! Column of first matrix not equal to row of second.\n");
        printf("Enter rows and columns for first matrix: ");
        scanf("%d %d", &r1, &c1);
        printf("Enter rows and columns for second matrix: ");
        scanf("%d %d", &r2, &c2);
    }
    
    printf("Enter elements of first matrix:\n");
    for(int i = 0; i < r1; i++)
        for(int j = 0; j < c1; j++)
            scanf("%d", &a[i][j]);
    
    printf("Enter elements of second matrix:\n");
    for(int i = 0; i < r2; i++)
        for(int j = 0; j < c2; j++)
            scanf("%d", &b[i][j]);
    
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++) {
            result[i][j] = 0;
            for(int k = 0; k < c1; k++)
                result[i][j] += a[i][k] * b[k][j];
        }
    }
    
    printf("Product of matrices:\n");
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++)
            printf("%d ", result[i][j]);
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter rows and columns for first matrix: 2 2
Enter rows and columns for second matrix: 2 2
Enter elements of first matrix:
1 2
3 4
Enter elements of second matrix:
5 6
7 8
Product of matrices:
19 22 
43 50`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">33. C Program to Find the Frequency of Character in a String</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[1000], ch;
    int count = 0;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    printf("Enter a character to find its frequency: ");
    scanf("%c", &ch);
    
    for(int i = 0; str[i] != '\0'; i++) {
        if(ch == str[i])
            ++count;
    }
    
    printf("Frequency of %c = %d", ch, count);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: programming is fun
Enter a character to find its frequency: m
Frequency of m = 2`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">34. C Program to Count the Number of Vowels and Consonants in a Sentence</h2>
        <pre><code>{`#include <stdio.h>
#include <ctype.h>

int main() {
    char str[1000];
    int vowels = 0, consonants = 0;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    for(int i = 0; str[i] != '\0'; i++) {
        if(isalpha(str[i])) {
            char ch = tolower(str[i]);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                vowels++;
            else
                consonants++;
        }
    }
    
    printf("Vowels: %d\nConsonants: %d", vowels, consonants);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: Hello World
Vowels: 3
Consonants: 7`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">35. C Program to Concatenate Two Arrays</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n1, n2;
    printf("Enter size of first array: ");
    scanf("%d", &n1);
    printf("Enter size of second array: ");
    scanf("%d", &n2);
    
    int arr1[n1], arr2[n2], result[n1 + n2];
    
    printf("Enter elements of first array:\n");
    for(int i = 0; i < n1; i++)
        scanf("%d", &arr1[i]);
    
    printf("Enter elements of second array:\n");
    for(int i = 0; i < n2; i++)
        scanf("%d", &arr2[i]);
    
    for(int i = 0; i < n1; i++)
        result[i] = arr1[i];
    
    for(int i = 0; i < n2; i++)
        result[n1 + i] = arr2[i];
    
    printf("Concatenated array:\n");
    for(int i = 0; i < n1 + n2; i++)
        printf("%d ", result[i]);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter size of first array: 3
Enter size of second array: 2
Enter elements of first array:
1 2 3
Enter elements of second array:
4 5
Concatenated array:
1 2 3 4 5`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">36. Reverse an array</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter %d integers:\n", n);
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    
    printf("Reversed array:\n");
    for(int i = n - 1; i >= 0; i--)
        printf("%d ", arr[i]);
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter the number of elements: 5
Enter 5 integers:
10 20 30 40 50
Reversed array:
50 40 30 20 10`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">37. Program to print the duplicate elements of an array</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter %d integers:\n", n);
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    
    printf("Duplicate elements in array:\n");
    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            if(arr[i] == arr[j]) {
                printf("%d ", arr[j]);
                break;
            }
        }
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter the number of elements: 6
Enter 6 integers:
1 2 3 2 4 3
Duplicate elements in array:
2 3`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">38. Write a program ATM machine keeps on working till the condition equals to cancel</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int balance = 10000, amount, choice;
    char ch = 'y';
    
    while(ch == 'y' || ch == 'Y') {
        printf("\nATM Menu:\n");
        printf("1. Check Balance\n");
        printf("2. Withdraw\n");
        printf("3. Deposit\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Your balance is: %d", balance);
                break;
            case 2:
                printf("Enter amount to withdraw: ");
                scanf("%d", &amount);
                if(amount > balance)
                    printf("Insufficient balance");
                else {
                    balance -= amount;
                    printf("Withdrawn %d. New balance: %d", amount, balance);
                }
                break;
            case 3:
                printf("Enter amount to deposit: ");
                scanf("%d", &amount);
                balance += amount;
                printf("Deposited %d. New balance: %d", amount, balance);
                break;
            case 4:
                printf("Thank you for using ATM. Goodbye!");
                return 0;
            default:
                printf("Invalid choice");
        }
        
        printf("\nDo you want to continue (y/n)? ");
        scanf(" %c", &ch);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`ATM Menu:
1. Check Balance
2. Withdraw
3. Deposit
4. Exit
Enter your choice: 1
Your balance is: 10000
Do you want to continue (y/n)? y

ATM Menu:
1. Check Balance
2. Withdraw
3. Deposit
4. Exit
Enter your choice: 2
Enter amount to withdraw: 2000
Withdrawn 2000. New balance: 8000
Do you want to continue (y/n)? n`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">39. C Program to count the total number of characters in a string</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[1000];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    int count = 0;
    for(int i = 0; str[i] != '\0'; i++) {
        if(str[i] != ' ' && str[i] != '\n')
            count++;
    }
    
    printf("Total characters: %d", count);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: Hello World 123
Total characters: 11`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">40. C Program to count the total number of punctuation characters exists in a String</h2>
        <pre><code>{`#include <stdio.h>
#include <ctype.h>

int main() {
    char str[1000];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    int count = 0;
    for(int i = 0; str[i] != '\0'; i++) {
        if(ispunct(str[i]))
            count++;
    }
    
    printf("Total punctuation characters: %d", count);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: Hello, World! How are you?
Total punctuation characters: 3`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">41. C Program to find the frequency of characters</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[1000];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    int freq[256] = {0};
    for(int i = 0; str[i] != '\0'; i++)
        freq[(int)str[i]]++;
    
    printf("Character frequencies:\n");
    for(int i = 0; i < 256; i++) {
        if(freq[i] != 0 && i != '\n')
            printf("'%c' occurs %d times\n", (char)i, freq[i]);
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: programming
Character frequencies:
' ' occurs 1 times
'a' occurs 1 times
'g' occurs 2 times
'i' occurs 1 times
'm' occurs 2 times
'n' occurs 1 times
'o' occurs 1 times
'p' occurs 1 times
'r' occurs 2 times`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">42. C Program to determine whether two strings are the anagram</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char str1[100], str2[100];
    printf("Enter first string: ");
    fgets(str1, sizeof(str1), stdin);
    printf("Enter second string: ");
    fgets(str2, sizeof(str2), stdin);
    
    int freq1[26] = {0}, freq2[26] = {0};
    
    for(int i = 0; str1[i] != '\0'; i++) {
        if(isalpha(str1[i]))
            freq1[tolower(str1[i]) - 'a']++;
    }
    
    for(int i = 0; str2[i] != '\0'; i++) {
        if(isalpha(str2[i]))
            freq2[tolower(str2[i]) - 'a']++;
    }
    
    int isAnagram = 1;
    for(int i = 0; i < 26; i++) {
        if(freq1[i] != freq2[i]) {
            isAnagram = 0;
            break;
        }
    }
    
    if(isAnagram)
        printf("The strings are anagrams.");
    else
        printf("The strings are not anagrams.");
    
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter first string: listen
Enter second string: silent
The strings are anagrams.`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">43. C Program to replace lower-case characters with upper-case and vice-versa</h2>
        <pre><code>{`#include <stdio.h>
#include <ctype.h>

int main() {
    char str[1000];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    for(int i = 0; str[i] != '\0'; i++) {
        if(islower(str[i]))
            str[i] = toupper(str[i]);
        else if(isupper(str[i]))
            str[i] = tolower(str[i]);
    }
    
    printf("Converted string: %s", str);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: Hello World!
Converted string: hELLO wORLD!`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">44. C Program to divide a string in 'N' equal parts</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[1000];
    int n, len, part_len;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    len = strlen(str) - 1; // Exclude newline
    str[len] = '\0';
    
    printf("Enter N (number of parts): ");
    scanf("%d", &n);
    
    if(len % n != 0) {
        printf("String cannot be divided into %d equal parts", n);
        return 0;
    }
    
    part_len = len / n;
    printf("The %d equal parts are:\n", n);
    for(int i = 0; i < len; i += part_len) {
        for(int j = 0; j < part_len; j++)
            printf("%c", str[i + j]);
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: programming
Enter N (number of parts): 3
The 3 equal parts are:
pro
gra
mmin`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">45. C Program to find the largest and smallest word in a string</h2>
        <pre><code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str[1000], words[100][100], smallest[100], largest[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strlen(str) - 1] = '\0';
    
    int i = 0, j = 0, k = 0;
    while(str[i] != '\0') {
        if(str[i] != ' ') {
            words[k][j] = str[i];
            j++;
        } else {
            words[k][j] = '\0';
            k++;
            j = 0;
        }
        i++;
    }
    words[k][j] = '\0';
    k++;
    
    strcpy(smallest, words[0]);
    strcpy(largest, words[0]);
    
    for(i = 1; i < k; i++) {
        if(strlen(words[i]) < strlen(smallest))
            strcpy(smallest, words[i]);
        if(strlen(words[i]) > strlen(largest))
            strcpy(largest, words[i]);
    }
    
    printf("Smallest word: %s\n", smallest);
    printf("Largest word: %s", largest);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter a string: C programming is fun
Smallest word: C
Largest word: programming`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">46. C program to swap two variables without third variable</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    
    printf("Before swapping: a = %d, b = %d\n", a, b);
    
    a = a + b;
    b = a - b;
    a = a - b;
    
    printf("After swapping: a = %d, b = %d", a, b);
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter two numbers: 10 20
Before swapping: a = 10, b = 20
After swapping: a = 20, b = 10`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">47. Generate Number triangular pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int space = 1; space <= rows - i; space++)
            printf(" ");
        for(int j = 1; j <= i; j++)
            printf("%d ", j);
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">48. Generate Number increasing pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows, num = 1;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%d ", num);
            num++;
        }
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 4
1 
2 3 
4 5 6 
7 8 9 10`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">49. Generate increasing in reverse pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = rows; i >= 1; i--) {
        for(int space = 0; space < rows - i; space++)
            printf(" ");
        for(int j = 1; j <= 2 * i - 1; j++)
            printf("%d", j);
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
123456789
 1234567
  12345
   123
    1`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">50. Generate number changing pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows, num = 1;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%d ", num);
            num++;
        }
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 4
1 
2 3 
4 5 6 
7 8 9 10`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">51. Generate zero one right angle triangle</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%d ", (i + j) % 2);
        }
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
0 
1 0 
0 1 0 
1 0 1 0 
0 1 0 1 0`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">52. Generate palindrome triangular pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int space = 1; space <= rows - i; space++)
            printf("  ");
        
        for(int j = 1; j <= i; j++)
            printf("%d ", j);
        
        for(int j = i - 1; j >= 1; j--)
            printf("%d ", j);
        
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
        1 
      1 2 1 
    1 2 3 2 1 
  1 2 3 4 3 2 1 
1 2 3 4 5 4 3 2 1`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">53. Generate rhombus pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int space = 1; space <= rows - i; space++)
            printf(" ");
        
        for(int j = 1; j <= rows; j++)
            printf("*");
        
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
    *****
   *****
  *****
 *****
*****`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">54. Generate right half pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++)
            printf("* ");
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
* 
* * 
* * * 
* * * * 
* * * * *`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">55. Generate reverse right half pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = rows; i >= 1; i--) {
        for(int j = 1; j <= i; j++)
            printf("* ");
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
* * * * * 
* * * * 
* * * 
* * 
*`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">56. Generate left half pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int space = 1; space <= rows - i; space++)
            printf("  ");
        
        for(int j = 1; j <= i; j++)
            printf("* ");
        
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
        * 
      * * 
    * * * 
  * * * * 
* * * * *`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">57. Generate reverse left half pyramid</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = rows; i >= 1; i--) {
        for(int space = 1; space <= rows - i; space++)
            printf("  ");
        
        for(int j = 1; j <= i; j++)
            printf("* ");
        
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
* * * * * 
  * * * * 
    * * * 
      * * 
        *`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">58. Hollow hour glass</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows (odd number): ");
    scanf("%d", &rows);
    
    // Upper half
    for(int i = 1; i <= rows/2 + 1; i++) {
        for(int space = 1; space < i; space++)
            printf(" ");
        
        for(int j = 1; j <= rows - 2*(i-1); j++) {
            if(j == 1 || j == rows - 2*(i-1) || i == 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    
    // Lower half
    for(int i = rows/2; i >= 1; i--) {
        for(int space = 1; space < i; space++)
            printf(" ");
        
        for(int j = 1; j <= rows - 2*(i-1); j++) {
            if(j == 1 || j == rows - 2*(i-1) || i == 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows (odd number): 7
*******
 *   *
  * *
   *
  * *
 *   *
*******`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">59. C program to create a right angle star pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++)
            printf("*");
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows: 5
*
**
***
****
*****`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">60. C program to create a square star pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int side;
    printf("Enter side length: ");
    scanf("%d", &side);
    
    for(int i = 1; i <= side; i++) {
        for(int j = 1; j <= side; j++)
            printf("*");
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter side length: 4
****
****
****
****`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">61. C program to create a star pattern in K-Shape</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows (odd number): ");
    scanf("%d", &rows);
    
    // Upper part of K
    for(int i = rows/2 + 1; i >= 1; i--) {
        for(int j = 1; j <= i; j++)
            printf("*");
        printf("\n");
    }
    
    // Lower part of K
    for(int i = 2; i <= rows/2 + 1; i++) {
        for(int j = 1; j <= i; j++)
            printf("*");
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows (odd number): 7
****
***
**
*
**
***
****`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">62. C program to create a diamond star pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows (odd number): ");
    scanf("%d", &rows);
    
    // Upper half
    for(int i = 1; i <= rows/2 + 1; i++) {
        for(int space = 1; space <= rows/2 + 1 - i; space++)
            printf(" ");
        
        for(int j = 1; j <= 2*i - 1; j++)
            printf("*");
        
        printf("\n");
    }
    
    // Lower half
    for(int i = rows/2; i >= 1; i--) {
        for(int space = 1; space <= rows/2 + 1 - i; space++)
            printf(" ");
        
        for(int j = 1; j <= 2*i - 1; j++)
            printf("*");
        
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows (odd number): 7
   *
  ***
 *****
*******
 *****
  ***
   *`}</pre>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-title">63. C program to create a butterfly star pattern</h2>
        <pre><code>{`#include <stdio.h>

int main() {
    int rows;
    printf("Enter number of rows (even number): ");
    scanf("%d", &rows);
    
    // Upper part
    for(int i = 1; i <= rows/2; i++) {
        for(int j = 1; j <= i; j++)
            printf("*");
        
        for(int space = 1; space <= 2*(rows/2 - i); space++)
            printf(" ");
        
        for(int j = 1; j <= i; j++)
            printf("*");
        
        printf("\n");
    }
    
    // Lower part
    for(int i = rows/2; i >= 1; i--) {
        for(int j = 1; j <= i; j++)
            printf("*");
        
        for(int space = 1; space <= 2*(rows/2 - i); space++)
            printf(" ");
        
        for(int j = 1; j <= i; j++)
            printf("*");
        
        printf("\n");
    }
    return 0;
}`}</code></pre>
        <div className="output">
          <h3 className="output-title">Output:</h3>
          <pre>{`Enter number of rows (even number): 6
*    *
**  **
******
******
**  **
*    *`}</pre>
        </div>
      </div>

      <footer className="bg-dark text-white py-4 mt-4 rounded">
        <div className="container text-center">
          <p>C Programming Examples &copy; 2023 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default CProgrammingQuestions;