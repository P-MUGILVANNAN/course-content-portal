import React from 'react';

function CSharpProgrammingQuestions() {
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
        `}
      </style>

      <header className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">C# Programming Solutions</h1>
                <p className="lead">Complete solutions for all C# programming questions with outputs</p>
            </header>

      <div className="question-card">
        <h2 className="question-title">1. C# Program to Find ASCII Value of a character</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a character: ");
        char c = Console.ReadKey().KeyChar;
        Console.WriteLine($"\\nASCII value of {c} = {(int)c}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">2. C# Program to Swap Two Numbers</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter two numbers: ");
        int a = Convert.ToInt32(Console.ReadLine());
        int b = Convert.ToInt32(Console.ReadLine());
        
        int temp = a;
        a = b;
        b = temp;
        
        Console.WriteLine($"After swapping: {a} {b}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">3. C# Program to Check Whether a Number is Even or Odd</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter an integer: ");
        int num = Convert.ToInt32(Console.ReadLine());
        
        if(num % 2 == 0)
            Console.WriteLine($"{num} is even.");
        else
            Console.WriteLine($"{num} is odd.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">4. C# Program to Check Whether an Alphabet is Vowel or Consonant</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a character: ");
        char c = Console.ReadKey().KeyChar;
        
        if("aeiouAEIOU".IndexOf(c) >= 0)
            Console.WriteLine($"\\n{c} is a vowel.");
        else
            Console.WriteLine($"\\n{c} is a consonant.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">5. C# Program to Find the Largest Among Three Numbers</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter three numbers: ");
        int a = Convert.ToInt32(Console.ReadLine());
        int b = Convert.ToInt32(Console.ReadLine());
        int c = Convert.ToInt32(Console.ReadLine());
        
        if(a >= b && a >= c)
            Console.WriteLine($"{a} is the largest.");
        else if(b >= a && b >= c)
            Console.WriteLine($"{b} is the largest.");
        else
            Console.WriteLine($"{c} is the largest.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">6. C# Program to Check Leap Year</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a year: ");
        int year = Convert.ToInt32(Console.ReadLine());
        
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
            Console.WriteLine($"{year} is a leap year.");
        else
            Console.WriteLine($"{year} is not a leap year.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">7. C# Program to Check Whether a Number is Positive or Negative</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a number: ");
        int num = Convert.ToInt32(Console.ReadLine());
        
        if(num > 0)
            Console.WriteLine($"{num} is positive.");
        else if(num < 0)
            Console.WriteLine($"{num} is negative.");
        else
            Console.WriteLine("The number is zero.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">8. C# Program to Check Whether a Character is Alphabet or Not</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a character: ");
        char c = Console.ReadKey().KeyChar;
        
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
            Console.WriteLine($"\\n{c} is an alphabet.");
        else
            Console.WriteLine($"\\n{c} is not an alphabet.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">9. C# Program to Calculate the Sum of Natural Numbers</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a positive integer: ");
        int n = Convert.ToInt32(Console.ReadLine());
        int sum = 0;
        
        for(int i = 1; i <= n; i++)
            sum += i;
        
        Console.WriteLine($"Sum = {sum}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">10. C# Program to Find Factorial of a Number</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a positive integer: ");
        int n = Convert.ToInt32(Console.ReadLine());
        long fact = 1;
        
        for(int i = 1; i <= n; i++)
            fact *= i;
        
        Console.WriteLine($"Factorial of {n} = {fact}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">11. Program to Generate Multiplication Table</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter an integer: ");
        int n = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= 10; i++)
            Console.WriteLine($"{n} * {i} = {n*i}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">12. C# Program to Display Fibonacci Series</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter the number of terms: ");
        int n = Convert.ToInt32(Console.ReadLine());
        int t1 = 0, t2 = 1, nextTerm;
        
        Console.Write("Fibonacci Series: ");
        for(int i = 1; i <= n; i++) {
            Console.Write($"{t1}, ");
            nextTerm = t1 + t2;
            t1 = t2;
            t2 = nextTerm;
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">13. C# Program to Find LCM of two Numbers</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter two positive integers: ");
        int n1 = Convert.ToInt32(Console.ReadLine());
        int n2 = Convert.ToInt32(Console.ReadLine());
        int max = (n1 > n2) ? n1 : n2;
        
        while(true) {
            if(max % n1 == 0 && max % n2 == 0) {
                Console.WriteLine($"LCM of {n1} and {n2} is {max}.");
                break;
            }
            ++max;
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">14. C# Program to Display Alphabets (A to Z) using loop</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.WriteLine("Alphabets from A to Z:");
        for(char c = 'A'; c <= 'Z'; c++)
            Console.Write($"{c} ");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">15. C# Program to Count Number of Digits in an Integer</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter an integer: ");
        long n = Convert.ToInt64(Console.ReadLine());
        int count = 0;
        
        do {
            n /= 10;
            ++count;
        } while(n != 0);
        
        Console.WriteLine($"Number of digits: {count}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">16. C# Program to Reverse a Number</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter an integer: ");
        int n = Convert.ToInt32(Console.ReadLine());
        int reversed = 0, remainder;
        
        while(n != 0) {
            remainder = n % 10;
            reversed = reversed * 10 + remainder;
            n /= 10;
        }
        
        Console.WriteLine($"Reversed number = {reversed}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">17. C# Program to Calculate the Power of a Number</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter base and exponent: ");
        double baseNum = Convert.ToDouble(Console.ReadLine());
        double exp = Convert.ToDouble(Console.ReadLine());
        
        double result = Math.Pow(baseNum, exp);
        Console.WriteLine($"{baseNum}^{exp} = {result}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">18. C# Program to Check Palindrome</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        string rev = new string(charArray);
        
        if(str.Equals(rev, StringComparison.OrdinalIgnoreCase))
            Console.WriteLine($"{str} is a palindrome.");
        else
            Console.WriteLine($"{str} is not a palindrome.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">19. C# Program to Check Whether a Number is Prime or Not</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a positive integer: ");
        int n = Convert.ToInt32(Console.ReadLine());
        bool flag = false;
        
        for(int i = 2; i <= n/2; i++) {
            if(n % i == 0) {
                flag = true;
                break;
            }
        }
        
        if(n == 1)
            Console.WriteLine("1 is neither prime nor composite.");
        else {
            if(!flag)
                Console.WriteLine($"{n} is a prime number.");
            else
                Console.WriteLine($"{n} is not a prime number.");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">20. C# Program to Display Prime Numbers Between Two Intervals</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter two numbers (intervals): ");
        int low = Convert.ToInt32(Console.ReadLine());
        int high = Convert.ToInt32(Console.ReadLine());
        
        Console.Write($"Prime numbers between {low} and {high} are: ");
        for(int i = low; i <= high; i++) {
            if(i == 1) continue;
            bool flag = false;
            
            for(int j = 2; j <= i/2; j++) {
                if(i % j == 0) {
                    flag = true;
                    break;
                }
            }
            
            if(!flag)
                Console.Write($"{i} ");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">21. C# Program to Check Armstrong Number</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter an integer: ");
        int num = Convert.ToInt32(Console.ReadLine());
        int original = num, remainder, n = 0;
        double result = 0;
        
        while(original != 0) {
            original /= 10;
            ++n;
        }
        
        original = num;
        while(original != 0) {
            remainder = original % 10;
            result += Math.Pow(remainder, n);
            original /= 10;
        }
        
        if((int)result == num)
            Console.WriteLine($"{num} is an Armstrong number.");
        else
            Console.WriteLine($"{num} is not an Armstrong number.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">22. C# Program to Display Armstrong Number Between Two Intervals</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter two numbers (intervals): ");
        int low = Convert.ToInt32(Console.ReadLine());
        int high = Convert.ToInt32(Console.ReadLine());
        
        Console.Write($"Armstrong numbers between {low} and {high} are: ");
        for(int i = low + 1; i < high; i++) {
            int temp1 = i, temp2 = i, digits = 0;
            double result = 0;
            
            while(temp1 != 0) {
                temp1 /= 10;
                ++digits;
            }
            
            while(temp2 != 0) {
                int remainder = temp2 % 10;
                result += Math.Pow(remainder, digits);
                temp2 /= 10;
            }
            
            if((int)result == i)
                Console.Write($"{i} ");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">23. C# Program to Display Prime Numbers Between Intervals Using Function</h2>
        <pre><code>{`using System;

class Program {
    static bool IsPrime(int num) {
        if(num <= 1) return false;
        for(int i = 2; i <= num/2; i++) {
            if(num % i == 0)
                return false;
        }
        return true;
    }

    static void Main() {
        Console.Write("Enter two numbers (intervals): ");
        int low = Convert.ToInt32(Console.ReadLine());
        int high = Convert.ToInt32(Console.ReadLine());
        
        Console.Write($"Prime numbers between {low} and {high} are: ");
        for(int i = low; i <= high; i++) {
            if(IsPrime(i))
                Console.Write($"{i} ");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">24. C# Program to Display Armstrong Numbers Between Intervals Using Function</h2>
        <pre><code>{`using System;

class Program {
    static bool IsArmstrong(int num) {
        int original = num, digits = 0;
        double result = 0;
        
        while(original != 0) {
            original /= 10;
            ++digits;
        }
        
        original = num;
        while(original != 0) {
            int remainder = original % 10;
            result += Math.Pow(remainder, digits);
            original /= 10;
        }
        
        return (int)result == num;
    }

    static void Main() {
        Console.Write("Enter two numbers (intervals): ");
        int low = Convert.ToInt32(Console.ReadLine());
        int high = Convert.ToInt32(Console.ReadLine());
        
        Console.Write($"Armstrong numbers between {low} and {high} are: ");
        for(int i = low + 1; i < high; i++) {
            if(IsArmstrong(i))
                Console.Write($"{i} ");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">25. C# Program to Display Factors of a Number</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a positive integer: ");
        int num = Convert.ToInt32(Console.ReadLine());
        
        Console.Write($"Factors of {num} are: ");
        for(int i = 1; i <= num; i++) {
            if(num % i == 0)
                Console.Write($"{i} ");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">26. C# Program to Make a Simple Calculator Using switch...case</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter an operator (+, -, *, /): ");
        char op = Console.ReadKey().KeyChar;
        Console.WriteLine();
        
        Console.Write("Enter two operands: ");
        double n1 = Convert.ToDouble(Console.ReadLine());
        double n2 = Convert.ToDouble(Console.ReadLine());
        
        switch(op) {
            case '+':
                Console.WriteLine($"{n1} + {n2} = {n1 + n2}");
                break;
            case '-':
                Console.WriteLine($"{n1} - {n2} = {n1 - n2}");
                break;
            case '*':
                Console.WriteLine($"{n1} * {n2} = {n1 * n2}");
                break;
            case '/':
                Console.WriteLine($"{n1} / {n2} = {n1 / n2}");
                break;
            default:
                Console.WriteLine("Error! operator is not correct");
                break;
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">27. C# Program to Find the Sum of Natural Numbers using Recursion</h2>
        <pre><code>{`using System;

class Program {
    static int SumOfNaturalNumbers(int n) {
        if(n != 0)
            return n + SumOfNaturalNumbers(n - 1);
        else
            return n;
    }

    static void Main() {
        Console.Write("Enter a positive integer: ");
        int num = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine($"Sum = {SumOfNaturalNumbers(num)}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">28. C# Program to Find Factorial of a Number Using Recursion</h2>
        <pre><code>{`using System;

class Program {
    static long Factorial(int n) {
        if(n >= 1)
            return n * Factorial(n - 1);
        else
            return 1;
    }

    static void Main() {
        Console.Write("Enter a positive integer: ");
        int num = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine($"Factorial of {num} = {Factorial(num)}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">29. C# Program to Calculate Average Using Arrays</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter the number of elements: ");
        int n = Convert.ToInt32(Console.ReadLine());
        double sum = 0.0;
        
        double[] arr = new double[n];
        Console.WriteLine($"Enter {n} elements:");
        for(int i = 0; i < n; i++) {
            arr[i] = Convert.ToDouble(Console.ReadLine());
            sum += arr[i];
        }
        
        double avg = sum / n;
        Console.WriteLine($"Average = {avg:F2}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">30. C# Program to Find Largest Element of an Array</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter the number of elements: ");
        int n = Convert.ToInt32(Console.ReadLine());
        
        int[] arr = new int[n];
        Console.WriteLine($"Enter {n} integers:");
        for(int i = 0; i < n; i++)
            arr[i] = Convert.ToInt32(Console.ReadLine());
        
        int largest = arr[0];
        for(int i = 1; i < n; i++) {
            if(arr[i] > largest)
                largest = arr[i];
        }
        
        Console.WriteLine($"Largest element = {largest}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">31. C# Program to Add Two Matrix Using Multi-dimensional Arrays</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter the number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter the number of columns: ");
        int cols = Convert.ToInt32(Console.ReadLine());
        
        int[,] a = new int[rows, cols];
        int[,] b = new int[rows, cols];
        int[,] sum = new int[rows, cols];
        
        Console.WriteLine("Enter elements of 1st matrix:");
        for(int i = 0; i < rows; i++)
            for(int j = 0; j < cols; j++)
                a[i,j] = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine("Enter elements of 2nd matrix:");
        for(int i = 0; i < rows; i++)
            for(int j = 0; j < cols; j++)
                b[i,j] = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 0; i < rows; i++)
            for(int j = 0; j < cols; j++)
                sum[i,j] = a[i,j] + b[i,j];
        
        Console.WriteLine("Sum of two matrices:");
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++)
                Console.Write($"{sum[i,j]} ");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">32. C# Program to Multiply Two Matrix Using Multi-dimensional Arrays</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter rows and columns for first matrix: ");
        int r1 = Convert.ToInt32(Console.ReadLine());
        int c1 = Convert.ToInt32(Console.ReadLine());
        
        Console.Write("Enter rows and columns for second matrix: ");
        int r2 = Convert.ToInt32(Console.ReadLine());
        int c2 = Convert.ToInt32(Console.ReadLine());
        
        while(c1 != r2) {
            Console.WriteLine("Error! Column of first matrix not equal to row of second.");
            Console.Write("Enter rows and columns for first matrix: ");
            r1 = Convert.ToInt32(Console.ReadLine());
            c1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter rows and columns for second matrix: ");
            r2 = Convert.ToInt32(Console.ReadLine());
            c2 = Convert.ToInt32(Console.ReadLine());
        }
        
        int[,] a = new int[r1,c1];
        int[,] b = new int[r2,c2];
        int[,] result = new int[r1,c2];
        
        Console.WriteLine("Enter elements of first matrix:");
        for(int i = 0; i < r1; i++)
            for(int j = 0; j < c1; j++)
                a[i,j] = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine("Enter elements of second matrix:");
        for(int i = 0; i < r2; i++)
            for(int j = 0; j < c2; j++)
                b[i,j] = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 0; i < r1; i++) {
            for(int j = 0; j < c2; j++) {
                result[i,j] = 0;
                for(int k = 0; k < c1; k++)
                    result[i,j] += a[i,k] * b[k,j];
            }
        }
        
        Console.WriteLine("Product of matrices:");
        for(int i = 0; i < r1; i++) {
            for(int j = 0; j < c2; j++)
                Console.Write($"{result[i,j]} ");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">33. C# Program to Find the Frequency of Character in a String</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        Console.Write("Enter a character to find its frequency: ");
        char ch = Console.ReadKey().KeyChar;
        
        int count = 0;
        foreach(char c in str) {
            if(c == ch)
                ++count;
        }
        
        Console.WriteLine($"\\nFrequency of {ch} = {count}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">34. C# Program to Count the Number of Vowels and Consonants in a Sentence</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine().ToLower();
        int vowels = 0, consonants = 0;
        
        foreach(char c in str) {
            if(char.IsLetter(c)) {
                if("aeiou".IndexOf(c) >= 0)
                    vowels++;
                else
                    consonants++;
            }
        }
        
        Console.WriteLine($"Vowels: {vowels}\\nConsonants: {consonants}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">35. C# Program to Concatenate Two Arrays</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter size of first array: ");
        int n1 = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter size of second array: ");
        int n2 = Convert.ToInt32(Console.ReadLine());
        
        int[] arr1 = new int[n1];
        int[] arr2 = new int[n2];
        int[] result = new int[n1 + n2];
        
        Console.WriteLine("Enter elements of first array:");
        for(int i = 0; i < n1; i++)
            arr1[i] = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine("Enter elements of second array:");
        for(int i = 0; i < n2; i++)
            arr2[i] = Convert.ToInt32(Console.ReadLine());
        
        Array.Copy(arr1, result, n1);
        Array.Copy(arr2, 0, result, n1, n2);
        
        Console.WriteLine("Concatenated array:");
        foreach(int num in result)
            Console.Write($"{num} ");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">36. Reverse an array</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter the number of elements: ");
        int n = Convert.ToInt32(Console.ReadLine());
        
        int[] arr = new int[n];
        Console.WriteLine($"Enter {n} integers:");
        for(int i = 0; i < n; i++)
            arr[i] = Convert.ToInt32(Console.ReadLine());
        
        Array.Reverse(arr);
        Console.WriteLine("Reversed array:");
        foreach(int num in arr)
            Console.Write($"{num} ");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">37. Program to print the duplicate elements of an array</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter the number of elements: ");
        int n = Convert.ToInt32(Console.ReadLine());
        
        int[] arr = new int[n];
        Console.WriteLine($"Enter {n} integers:");
        for(int i = 0; i < n; i++)
            arr[i] = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine("Duplicate elements in array:");
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                if(arr[i] == arr[j]) {
                    Console.Write($"{arr[j]} ");
                    break;
                }
            }
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">38. Write a program ATM machine keeps on working till the condition equals to cancel</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        int balance = 10000;
        char choice;
        
        do {
            Console.WriteLine("\\nATM Menu:");
            Console.WriteLine("1. Check Balance");
            Console.WriteLine("2. Withdraw");
            Console.WriteLine("3. Deposit");
            Console.WriteLine("4. Exit");
            Console.Write("Enter your choice: ");
            choice = Console.ReadKey().KeyChar;
            Console.WriteLine();
            
            switch(choice) {
                case '1':
                    Console.WriteLine($"Your balance is: {balance}");
                    break;
                case '2':
                    Console.Write("Enter amount to withdraw: ");
                    int amount = Convert.ToInt32(Console.ReadLine());
                    if(amount > balance)
                        Console.WriteLine("Insufficient balance");
                    else {
                        balance -= amount;
                        Console.WriteLine($"Withdrawn {amount}. New balance: {balance}");
                    }
                    break;
                case '3':
                    Console.Write("Enter amount to deposit: ");
                    amount = Convert.ToInt32(Console.ReadLine());
                    balance += amount;
                    Console.WriteLine($"Deposited {amount}. New balance: {balance}");
                    break;
                case '4':
                    Console.WriteLine("Thank you for using ATM. Goodbye!");
                    return;
                default:
                    Console.WriteLine("Invalid choice");
                    break;
            }
            
            Console.Write("\\nDo you want to continue (y/n)? ");
            choice = Console.ReadKey().KeyChar;
        } while(choice == 'y' || choice == 'Y');
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">39. C# Program to count the total number of characters in a string</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        
        int count = 0;
        foreach(char c in str) {
            if(!char.IsWhiteSpace(c))
                count++;
        }
        
        Console.WriteLine($"Total characters: {count}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">40. C# Program to count the total number of punctuation characters exists in a String</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        
        int count = 0;
        foreach(char c in str) {
            if(char.IsPunctuation(c))
                count++;
        }
        
        Console.WriteLine($"Total punctuation characters: {count}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">41. C# Program to find the frequency of characters</h2>
        <pre><code>{`using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        
        Dictionary<char, int> freq = new Dictionary<char, int>();
        foreach(char c in str) {
            if(freq.ContainsKey(c))
                freq[c]++;
            else
                freq[c] = 1;
        }
        
        Console.WriteLine("Character frequencies:");
        foreach(var pair in freq) {
            if(!char.IsWhiteSpace(pair.Key))
                Console.WriteLine($"'{pair.Key}' occurs {pair.Value} times");
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">42. C# Program to determine whether two strings are the anagram</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter first string: ");
        string str1 = Console.ReadLine().ToLower();
        Console.Write("Enter second string: ");
        string str2 = Console.ReadLine().ToLower();
        
        if(str1.Length != str2.Length) {
            Console.WriteLine("The strings are not anagrams.");
            return;
        }
        
        char[] arr1 = str1.ToCharArray();
        char[] arr2 = str2.ToCharArray();
        Array.Sort(arr1);
        Array.Sort(arr2);
        
        bool isAnagram = true;
        for(int i = 0; i < arr1.Length; i++) {
            if(arr1[i] != arr2[i]) {
                isAnagram = false;
                break;
            }
        }
        
        if(isAnagram)
            Console.WriteLine("The strings are anagrams.");
        else
            Console.WriteLine("The strings are not anagrams.");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">43. C# Program to replace lower-case characters with upper-case and vice-versa</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        char[] chars = str.ToCharArray();
        
        for(int i = 0; i < chars.Length; i++) {
            if(char.IsLower(chars[i]))
                chars[i] = char.ToUpper(chars[i]);
            else if(char.IsUpper(chars[i]))
                chars[i] = char.ToLower(chars[i]);
        }
        
        Console.WriteLine($"Converted string: {new string(chars)}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">44. C# Program to divide a string in 'N' equal parts</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        Console.Write("Enter N (number of parts): ");
        int n = Convert.ToInt32(Console.ReadLine());
        
        if(str.Length % n != 0) {
            Console.WriteLine($"String cannot be divided into {n} equal parts");
            return;
        }
        
        int partLength = str.Length / n;
        Console.WriteLine($"The {n} equal parts are:");
        for(int i = 0; i < str.Length; i += partLength) {
            Console.WriteLine(str.Substring(i, partLength));
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">45. C# Program to find the largest and smallest word in a string</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter a string: ");
        string str = Console.ReadLine();
        string[] words = str.Split(new[] {' '}, StringSplitOptions.RemoveEmptyEntries);
        
        if(words.Length == 0) {
            Console.WriteLine("No words found.");
            return;
        }
        
        string smallest = words[0];
        string largest = words[0];
        
        foreach(string word in words) {
            if(word.Length < smallest.Length)
                smallest = word;
            if(word.Length > largest.Length)
                largest = word;
        }
        
        Console.WriteLine($"Smallest word: {smallest}");
        Console.WriteLine($"Largest word: {largest}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">46. C# program to swap two variables without third variable</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter two numbers: ");
        int a = Convert.ToInt32(Console.ReadLine());
        int b = Convert.ToInt32(Console.ReadLine());
        
        Console.WriteLine($"Before swapping: a = {a}, b = {b}");
        
        a = a + b;
        b = a - b;
        a = a - b;
        
        Console.WriteLine($"After swapping: a = {a}, b = {b}");
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">47. Generate Number triangular pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int space = 1; space <= rows - i; space++)
                Console.Write(" ");
            for(int j = 1; j <= i; j++)
                Console.Write($"{j} ");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">48. Generate Number increasing pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        int num = 1;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                Console.Write($"{num} ");
                num++;
            }
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">49. Generate increasing in reverse pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = rows; i >= 1; i--) {
            for(int space = 0; space < rows - i; space++)
                Console.Write(" ");
            for(int j = 1; j <= 2 * i - 1; j++)
                Console.Write($"{j}");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">50. Generate number changing pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        int num = 1;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                Console.Write($"{num} ");
                num++;
            }
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">51. Generate zero one right angle triangle</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                Console.Write($"{(i + j) % 2} ");
            }
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">52. Generate palindrome triangular pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int space = 1; space <= rows - i; space++)
                Console.Write("  ");
            
            for(int j = 1; j <= i; j++)
                Console.Write($"{j} ");
            
            for(int j = i - 1; j >= 1; j--)
                Console.Write($"{j} ");
            
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">53. Generate rhombus pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int space = 1; space <= rows - i; space++)
                Console.Write(" ");
            
            for(int j = 1; j <= rows; j++)
                Console.Write("*");
            
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">54. Generate right half pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++)
                Console.Write("* ");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">55. Generate reverse right half pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = rows; i >= 1; i--) {
            for(int j = 1; j <= i; j++)
                Console.Write("* ");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">56. Generate left half pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int space = 1; space <= rows - i; space++)
                Console.Write("  ");
            
            for(int j = 1; j <= i; j++)
                Console.Write("* ");
            
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">57. Generate reverse left half pyramid</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = rows; i >= 1; i--) {
            for(int space = 1; space <= rows - i; space++)
                Console.Write("  ");
            
            for(int j = 1; j <= i; j++)
                Console.Write("* ");
            
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">58. Hollow hour glass</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows (odd number): ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        // Upper half
        for(int i = 1; i <= rows/2 + 1; i++) {
            for(int space = 1; space < i; space++)
                Console.Write(" ");
            
            for(int j = 1; j <= rows - 2*(i-1); j++) {
                if(j == 1 || j == rows - 2*(i-1) || i == 1)
                    Console.Write("*");
                else
                    Console.Write(" ");
            }
            Console.WriteLine();
        }
        
        // Lower half
        for(int i = rows/2; i >= 1; i--) {
            for(int space = 1; space < i; space++)
                Console.Write(" ");
            
            for(int j = 1; j <= rows - 2*(i-1); j++) {
                if(j == 1 || j == rows - 2*(i-1) || i == 1)
                    Console.Write("*");
                else
                    Console.Write(" ");
            }
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">59. C# program to create a right angle star pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows: ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">60. C# program to create a square star pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter side length: ");
        int side = Convert.ToInt32(Console.ReadLine());
        
        for(int i = 1; i <= side; i++) {
            for(int j = 1; j <= side; j++)
                Console.Write("*");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">61. C# program to create a star pattern in K-Shape</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows (odd number): ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        // Upper part of K
        for(int i = rows/2 + 1; i >= 1; i--) {
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            Console.WriteLine();
        }
        
        // Lower part of K
        for(int i = 2; i <= rows/2 + 1; i++) {
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">62. C# program to create a diamond star pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows (odd number): ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        // Upper half
        for(int i = 1; i <= rows/2 + 1; i++) {
            for(int space = 1; space <= rows/2 + 1 - i; space++)
                Console.Write(" ");
            
            for(int j = 1; j <= 2*i - 1; j++)
                Console.Write("*");
            
            Console.WriteLine();
        }
        
        // Lower half
        for(int i = rows/2; i >= 1; i--) {
            for(int space = 1; space <= rows/2 + 1 - i; space++)
                Console.Write(" ");
            
            for(int j = 1; j <= 2*i - 1; j++)
                Console.Write("*");
            
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <div className="question-card">
        <h2 className="question-title">63. C# program to create a butterfly star pattern</h2>
        <pre><code>{`using System;

class Program {
    static void Main() {
        Console.Write("Enter number of rows (even number): ");
        int rows = Convert.ToInt32(Console.ReadLine());
        
        // Upper part
        for(int i = 1; i <= rows/2; i++) {
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            
            for(int space = 1; space <= 2*(rows/2 - i); space++)
                Console.Write(" ");
            
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            
            Console.WriteLine();
        }
        
        // Lower part
        for(int i = rows/2; i >= 1; i--) {
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            
            for(int space = 1; space <= 2*(rows/2 - i); space++)
                Console.Write(" ");
            
            for(int j = 1; j <= i; j++)
                Console.Write("*");
            
            Console.WriteLine();
        }
    }
}`}</code></pre>
      </div>

      <footer className="bg-dark text-white py-4 mt-4 rounded">
        <div className="container text-center">
          <p>C# Programming Examples &copy; 2023 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default CSharpProgrammingQuestions;