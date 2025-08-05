import React from 'react';

function JavaPrograms() {
    return (
        <div className="container py-4">
            <style>
                {`
          pre {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #dee2e6;
            overflow-x: auto;
          }
          .program-card {
            margin-bottom: 2rem;
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            padding: 1.5rem;
          }
          .program-title {
            color: #0d6efd;
            margin-bottom: 1rem;
          }
          .output {
            background-color: #f0f0f0;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-family: monospace;
            white-space: pre-wrap;
          }
          .nav-pills .nav-link.active {
            background-color: #0d6efd;
          }
          .nav-link {
            color: #495057;
          }
        `}
            </style>

            <header className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">Java Programming Solutions</h1>
                <p className="lead">Complete solutions for all Java programming questions with outputs</p>
            </header>

            <div className="row">
                <main className="col">
                    <section id="basic-programs" className="mb-5">
                        <h2 className="h2 mb-4 border-bottom pb-2">Basic Java Programs</h2>

                        <div className="program-card" id="ascii-value">
                            <h3 className="program-title">1. Java Program to Find ASCII Value of a character</h3>
                            <pre><code>{`public class AsciiValue {
    public static void main(String[] args) {
        char ch = 'A';
        int ascii = ch;
        System.out.println("ASCII value of " + ch + " is: " + ascii);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`ASCII value of A is: 65`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="swap-numbers">
                            <h3 className="program-title">2. Java Program to Swap Two Numbers</h3>
                            <pre><code>{`public class SwapNumbers {
    public static void main(String[] args) {
        int a = 5, b = 10;
        System.out.println("Before swap: a = " + a + ", b = " + b);
        
        // Swap using temporary variable
        int temp = a;
        a = b;
        b = temp;
        
        System.out.println("After swap: a = " + a + ", b = " + b);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Before swap: a = 5, b = 10
After swap: a = 10, b = 5`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="even-odd">
                            <h3 className="program-title">3. Java Program to Check Whether a Number is Even or Odd</h3>
                            <pre><code>{`public class EvenOdd {
    public static void main(String[] args) {
        int num = 29;
        if(num % 2 == 0) {
            System.out.println(num + " is even");
        } else {
            System.out.println(num + " is odd");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`29 is odd`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="vowel-consonant">
                            <h3 className="program-title">4. Java Program to Check Whether an Alphabet is Vowel or Consonant</h3>
                            <pre><code>{`public class VowelConsonant {
    public static void main(String[] args) {
        char ch = 'i';
        
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            System.out.println(ch + " is vowel");
        } else {
            System.out.println(ch + " is consonant");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`i is vowe`}l</pre>
                            </div>
                        </div>

                        <div className="program-card" id="largest-three">
                            <h3 className="program-title">5. Java Program to Find the Largest Among Three Numbers</h3>
                            <pre><code>{`public class LargestNumber {
    public static void main(String[] args) {
        int a = 10, b = 20, c = 30;
        
        if(a >= b && a >= c) {
            System.out.println(a + " is largest");
        } else if(b >= a && b >= c) {
            System.out.println(b + " is largest");
        } else {
            System.out.println(c + " is largest");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`30 is largest`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="leap-year">
                            <h3 className="program-title">6. Java Program to Check Leap Year</h3>
                            <pre><code>{`public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        
        if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            System.out.println(year + " is a leap year");
        } else {
            System.out.println(year + " is not a leap year");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`2024 is a leap year`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="positive-negative">
                            <h3 className="program-title">7. Java Program to Check Whether a Number is Positive or Negative</h3>
                            <pre><code>{`public class PositiveNegative {
    public static void main(String[] args) {
        int number = 12;
        
        if(number < 0) {
            System.out.println(number + " is negative");
        } else if(number > 0) {
            System.out.println(number + " is positive");
        } else {
            System.out.println(number + " is zero");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`12 is positive`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="check-alphabet">
                            <h3 className="program-title">8. Java Program to Check Whether a Character is Alphabet or Not</h3>
                            <pre><code>{`public class CheckAlphabet {
    public static void main(String[] args) {
        char c = '*';
        
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            System.out.println(c + " is an alphabet");
        } else {
            System.out.println(c + " is not an alphabet");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* is not an alphabet`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="sum-natural">
                            <h3 className="program-title">9. Java Program to Calculate the Sum of Natural Numbers</h3>
                            <pre><code>{`public class SumNatural {
    public static void main(String[] args) {
        int num = 100, sum = 0;
        
        for(int i = 1; i <= num; ++i) {
            sum += i;
        }
        
        System.out.println("Sum = " + sum);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Sum = 5050`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="factorial">
                            <h3 className="program-title">10. Java Program to Find Factorial of a Number</h3>
                            <pre><code>{`public class Factorial {
    public static void main(String[] args) {
        int num = 5;
        long factorial = 1;
        
        for(int i = 1; i <= num; ++i) {
            factorial *= i;
        }
        
        System.out.println("Factorial of " + num + " = " + factorial);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Factorial of 5 = 120`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="multiplication-table">
                            <h3 className="program-title">11. Program to Generate Multiplication Table</h3>
                            <pre><code>{`public class MultiplicationTable {
    public static void main(String[] args) {
        int num = 5;
        
        for(int i = 1; i <= 10; ++i) {
            System.out.printf("%d * %d = %d \\n", num, i, num * i);
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`5 * 1 = 5
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

                        <div className="program-card" id="fibonacci">
                            <h3 className="program-title">12. Java Program to Display Fibonacci Series</h3>
                            <pre><code>{`public class Fibonacci {
    public static void main(String[] args) {
        int n = 10, a = 0, b = 1;
        System.out.print("First " + n + " terms: ");
        
        for (int i = 1; i <= n; ++i) {
            System.out.print(a + " ");
            int sum = a + b;
            a = b;
            b = sum;
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`First 10 terms: 0 1 1 2 3 5 8 13 21 34`}</pre>
                            </div>
                        </div>
                    </section>

                    <section id="number-programs" className="mb-5">
                        <h2 className="h2 mb-4 border-bottom pb-2">Number Programs</h2>

                        <div className="program-card" id="lcm">
                            <h3 className="program-title">13. Java Program to Find LCM of two Numbers</h3>
                            <pre><code>{`public class LCM {
    public static void main(String[] args) {
        int n1 = 72, n2 = 120, lcm;
        
        lcm = (n1 > n2) ? n1 : n2;
        
        while(true) {
            if(lcm % n1 == 0 && lcm % n2 == 0) {
                System.out.printf("LCM of %d and %d is %d.", n1, n2, lcm);
                break;
            }
            ++lcm;
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`LCM of 72 and 120 is 360.`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="display-alphabets">
                            <h3 className="program-title">14. Java Program to Display Alphabets (A to Z) using loop</h3>
                            <pre><code>{`public class DisplayAlphabets {
    public static void main(String[] args) {
        char c;
        
        for(c = 'A'; c <= 'Z'; ++c) {
            System.out.print(c + " ");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="count-digits">
                            <h3 className="program-title">15. Java Program to Count Number of Digits in an Integer</h3>
                            <pre><code>{`public class CountDigits {
    public static void main(String[] args) {
        int count = 0, num = 123456;
        
        while(num != 0) {
            num /= 10;
            ++count;
        }
        
        System.out.println("Number of digits: " + count);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Number of digits: 6`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="reverse-number">
                            <h3 className="program-title">16. Java Program to Reverse a Number</h3>
                            <pre><code>{`public class ReverseNumber {
    public static void main(String[] args) {
        int num = 1234, reversed = 0;
        
        while(num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        
        System.out.println("Reversed Number: " + reversed);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Reversed Number: 4321`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="power-number">
                            <h3 className="program-title">17. Java Program to Calculate the Power of a Number</h3>
                            <pre><code>{`public class Power {
    public static void main(String[] args) {
        int base = 3;
        int exponent = 4;
        long result = calculatePower(base, exponent);
        System.out.println("Result = " + result);
    }

    public static long calculatePower(int base, int exponent) {
        long result = 1;
        for(int i = 1; i <= exponent; i++) {
            result = result * base;
        }
        return result;
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Result = 81`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="palindrome">
                            <h3 className="program-title">18. Java Program to Check Palindrome</h3>
                            <pre><code>{`public class Palindrome {
    public static void main(String[] args) {
        String str = "madam", reverseStr = "";
        int strLength = str.length();
        
        for(int i = strLength - 1; i >= 0; --i) {
            reverseStr = reverseStr + str.charAt(i);
        }
        
        if(str.equals(reverseStr)) {
            System.out.println(str + " is palindrome");
        } else {
            System.out.println(str + " is not palindrome");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`madam is palindrome`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="prime-number">
                            <h3 className="program-title">19. Java Program to Check Whether a Number is Prime or Not</h3>
                            <pre><code>{`public class Prime {
    public static void main(String[] args) {
        int num = 29;
        int factor = 0;
        
        for(int i = 1; i <= num; ++i) {
            if(num % i == 0) {
                factor++;
            }
        }
        
        if(factor==2) {
            System.out.println(num + " is prime");
        } else {
            System.out.println(num + " is not prime");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`29 is prime`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="prime-intervals">
                            <h3 className="program-title">20. Java Program to Display Prime Numbers Between Two Intervals</h3>
                            <pre><code>{`public class PrimeInterval {
    public static void main(String[] args) {
        int low = 20, high = 50;

        for (int num = low; num <= high; num++) {
            int count = 0;

            // Count factors of the number
            for (int i = 1; i <= num; i++) {
                if (num % i == 0) {
                    count++;
                }
            }

            // Prime numbers have only 2 factors: 1 and itself
            if (count == 2) {
                System.out.print(num + " ");
            }
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`23 29 31 37 41 43 47`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="armstrong">
                            <h3 className="program-title">21. Java Program to Check Armstrong Number</h3>
                            <pre><code>{`public class Armstrong {
    public static void main(String[] args) {
        int number = 371, originalNumber, remainder, result = 0;
        originalNumber = number;
        
        while(originalNumber != 0) {
            remainder = originalNumber % 10;
            result += Math.pow(remainder, 3);
            originalNumber /= 10;
        }
        
        if(result == number) {
            System.out.println(number + " is Armstrong");
        } else {
            System.out.println(number + " is not Armstrong");
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`371 is Armstrong`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="armstrong-intervals">
                            <h3 className="program-title">22. Java Program to Display Armstrong Number Between Two Intervals</h3>
                            <pre><code>{`public class ArmstrongInterval {
    public static void main(String[] args) {
        int low = 100, high = 1000;
        
        for(int number = low + 1; number < high; ++number) {
            int digits = 0;
            int result = 0;
            int originalNumber = number;
            
            while(originalNumber != 0) {
                originalNumber /= 10;
                ++digits;
            }
            
            originalNumber = number;
            
            while(originalNumber != 0) {
                int remainder = originalNumber % 10;
                result += Math.pow(remainder, digits);
                originalNumber /= 10;
            }
            
            if(result == number) {
                System.out.print(number + " ");
            }
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`153 370 371 407`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="prime-function">
                            <h3 className="program-title">23. Java Program to Display Prime Numbers Between Intervals Using Function</h3>
                            <pre><code>{`public class PrimeFunction {
    public static void main(String[] args) {
        int low = 20, high = 50;
        printPrimes(low, high);
    }

    public static void printPrimes(int low, int high) {
        while (low <= high) {
            if (checkPrime(low)) {
                System.out.print(low + " ");
            }
            ++low;
        }
    }

    public static boolean checkPrime(int num) {
        int count = 0;

        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }

        return count == 2;
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`23 29 31 37 41 43 47`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="armstrong-function">
                            <h3 className="program-title">24. Java Program to Display Armstrong Numbers Between Intervals Using Function</h3>
                            <pre><code>{`public class ArmstrongFunction {
    public static void main(String[] args) {
        int low = 100, high = 1000;
        
        for(int number = low + 1; number < high; ++number) {
            if(checkArmstrong(number)) {
                System.out.print(number + " ");
            }
        }
    }
    
    public static boolean checkArmstrong(int num) {
        int digits = 0, result = 0, original = num;
        
        while(original != 0) {
            original /= 10;
            ++digits;
        }
        
        original = num;
        
        while(original != 0) {
            int remainder = original % 10;
            result += Math.pow(remainder, digits);
            original /= 10;
        }
        
        return result == num;
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`153 370 371 407`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="factors">
                            <h3 className="program-title">25. Java Program to Display Factors of a Number</h3>
                            <pre><code>{`public class Factors {
    public static void main(String[] args) {
        int number = 60;
        System.out.print("Factors of " + number + " are: ");
        
        for(int i = 1; i <= number; ++i) {
            if(number % i == 0) {
                System.out.print(i + " ");
            }
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Factors of 60 are: 1 2 3 4 5 6 10 12 15 20 30 60`}</pre>
                            </div>
                        </div>
                    </section>

                    <div className="program-card" id="simple-calculator">
                        <h3 className="program-title">26. Java Program to Make a Simple Calculator Using switch...case</h3>
                        <pre><code>{`import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        double first = reader.nextDouble();
        double second = reader.nextDouble();
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = reader.next().charAt(0);
        double result;
        
        switch(operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            default:
                System.out.println("Invalid operator!");
                return;
        }
        
        System.out.printf("%.1f %c %.1f = %.1f", first, operator, second, result);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output (example input: 10, 5, *):</h4>
                            <pre>{`Enter two numbers: 10 5
Enter operator (+, -, *, /): *
10.0 * 5.0 = 50.0`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="sum-natural-recursion">
                        <h3 className="program-title">27. Java Program to Find the Sum of Natural Numbers using Recursion</h3>
                        <pre><code>{`public class SumNaturalRecursion {
    public static void main(String[] args) {
        int number = 20;
        int sum = addNumbers(number);
        System.out.println("Sum = " + sum);
    }
    
    public static int addNumbers(int num) {
        if(num == 0) {
            return 0;
        } else {
            return num + addNumbers(num - 1);
        }
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Sum = 210`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="factorial-recursion">
                        <h3 className="program-title">28. Java Program to Find Factorial of a Number Using Recursion</h3>
                        <pre><code>{`public class FactorialRecursion {
    public static void main(String[] args) {
        int num = 6;
        long factorial = multiplyNumbers(num);
        System.out.println("Factorial of " + num + " = " + factorial);
    }
    
    public static long multiplyNumbers(int num) {
        if(num == 1) {
            return 1;
        } else {
            return num * multiplyNumbers(num - 1);
        }
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Factorial of 6 = 720`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="array-average">
                        <h3 className="program-title">29. Java Program to Calculate Average Using Arrays</h3>
                        <pre><code>{`public class ArrayAverage {
    public static void main(String[] args) {
        int[] arr = {45, 67, 45, 20, 33, 45};
        int sum = 0;
        
        for(int i=0;i<arr.length;i++) {
            sum += arr[i];
        }
        
        double average = sum / arr.length;
        System.out.println("Average = "+ average);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Average = 42.0`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="largest-array">
                        <h3 className="program-title">30. Java Program to Find Largest Element of an Array</h3>
                        <pre><code>{`public class LargestArray {
    public static void main(String[] args) {
        int[] arr = {23, 34, 50, 33, 55, 43, 5, 66};
        int largest = arr[0];
        
        for(int i=0;i<arr.length;i++) {
            if(largest < arr[i]) {
                largest = arr[i];
            }
        }
        
        System.out.println("Largest element = "+ largest);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Largest element = 55.50`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="add-matrices">
                        <h3 className="program-title">31. Java Program to Add Two Matrix Using Multi-dimensional Arrays</h3>
                        <pre><code>{`public class AddMatrices {
    public static void main(String[] args) {
        int rows = 2, columns = 3;
        int[][] firstMatrix = { {2, 3, 4}, {5, 2, 3} };
        int[][] secondMatrix = { {-4, 5, 3}, {5, 6, 3} };
        int[][] sum = new int[rows][columns];
        
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < columns; j++) {
                sum[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
            }
        }
        
        System.out.println("Sum of two matrices is: ");
        for(int[] row : sum) {
            for(int column : row) {
                System.out.print(column + "    ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Sum of two matrices is: 
-2    8    7    
10    8    6`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="multiply-matrices">
                        <h3 className="program-title">32. Java Program to Multiply Two Matrix Using Multi-dimensional Arrays</h3>
                        <pre><code>{`public class MultiplyMatrices {
    public static void main(String[] args) {
        int r1 = 2, c1 = 3;
        int r2 = 3, c2 = 2;
        int[][] firstMatrix = { {3, -2, 5}, {3, 0, 4} };
        int[][] secondMatrix = { {2, 3}, {-9, 0}, {0, 4} };
        int[][] product = new int[r1][c2];
        
        for(int i = 0; i < r1; i++) {
            for(int j = 0; j < c2; j++) {
                for(int k = 0; k < c1; k++) {
                    product[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
                }
            }
        }
        
        System.out.println("Product of two matrices is: ");
        for(int[] row : product) {
            for(int column : row) {
                System.out.print(column + "    ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Product of two matrices is: 
24   29    
6    25`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="char-frequency">
                        <h3 className="program-title">33. Java Program to Find the Frequency of Character in a String</h3>
                        <pre><code>{`public class FrequencyChar {
    public static void main(String[] args) {
        String str = "This website is awesome.";
        char ch = 'e';
        int frequency = 0;
        
        for(int i = 0; i < str.length(); i++) {
            if(ch == str.charAt(i)) {
                ++frequency;
            }
        }
        
        System.out.println("Frequency of " + ch + " = " + frequency);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Frequency of e = 4`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="vowel-consonant-count">
                        <h3 className="program-title">34. Java Program to Count the Number of Vowels and Consonants in a Sentence</h3>
                        <pre><code>{`public class CountVowelsConsonants {
    public static void main(String[] args) {
        String line = "This is a simple sentence";
        int vowels = 0, consonants = 0;
        
        line = line.toLowerCase();
        for(int i = 0; i < line.length(); ++i) {
            char ch = line.charAt(i);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                ++vowels;
            } else if(ch >= 'a' && ch <= 'z') {
                ++consonants;
            }
        }
        
        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Vowels: 9
Consonants: 11`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="concatenate-arrays">
                        <h3 className="program-title">35. Java Program to Concatenate Two Arrays</h3>
                        <pre><code>{`import java.util.Arrays;

public class ConcatArrays {
    public static void main(String[] args) {
        int[] array1 = {1, 2, 3};
        int[] array2 = {4, 5, 6};
        int length = array1.length + array2.length;
        int[] result = new int[length];
        int pos = 0;
        
        for(int item : array1) {
            result[pos] = item;
            pos++;
        }
        
        for(int item : array2) {
            result[pos] = item;
            pos++;
        }
        
        System.out.println(Arrays.toString(result));
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`[1, 2, 3, 4, 5, 6]`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="current-date">
                        <h3 className="program-title">36. Java Program to Get Current Date/Time</h3>
                        <pre><code>{`import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CurrentDateTime {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        System.out.println("Current Date and Time: " + formattedDateTime);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output (example):</h4>
                            <pre>Current Date and Time: 2023-05-15 14:30:45</pre>
                        </div>
                    </div>

                    <div className="program-card" id="multiple-inheritance">
                        <h3 className="program-title">37. Java Program to Implement multiple inheritance</h3>
                        <pre><code>{`interface Backend {
    void connectServer();
}

interface Frontend {
    void responsive(String str);
}

class Website implements Backend, Frontend {
    String language;
    
    public void connectServer() {
        System.out.println("Connected to server");
    }
    
    public void responsive(String str) {
        language = str;
        System.out.println("Website is responsive in " + language);
    }
}

public class MultipleInheritance {
    public static void main(String[] args) {
        Website w = new Website();
        w.connectServer();
        w.responsive("English");
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Connected to server
Website is responsive in English`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="linkedlist-add">
                        <h3 className="program-title">38. Java Program to Add elements to a LinkedList</h3>
                        <pre><code>{`import java.util.LinkedList;

public class LinkedListAdd {
    public static void main(String[] args) {
        LinkedList<String> languages = new LinkedList<>();
        
        languages.add("Java");
        languages.add("Python");
        languages.add("JavaScript");
        languages.add("Kotlin");
        
        System.out.println("LinkedList: " + languages);
        
        languages.add(1, "C++");
        System.out.println("Updated LinkedList: " + languages);
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`LinkedList: [Java, Python, JavaScript, Kotlin]
Updated LinkedList: [Java, C++, Python, JavaScript, Kotlin]`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="reverse-array">
                        <h3 className="program-title">39. Reverse an array</h3>
                        <pre><code>{`import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original array: " + Arrays.toString(arr));
        reverse(arr);
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
    
    public static void reverse(int[] arr) {
        for(int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Original array: [1, 2, 3, 4, 5]
Reversed array: [5, 4, 3, 2, 1]`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="duplicate-elements">
                        <h3 className="program-title">40. Program to print the duplicate elements of an array</h3>
                        <pre><code>{`public class DuplicateElements {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 2, 7, 8, 8, 3};
        System.out.println("Duplicate elements: ");
        
        for(int i = 0; i < arr.length; i++) {
            for(int j = i + 1; j < arr.length; j++) {
                if(arr[i] == arr[j]) {
                    System.out.println(arr[j]);
                }
            }
        }
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output:</h4>
                            <pre>{`Duplicate elements: 
2
3
8`}</pre>
                        </div>
                    </div>

                    <div className="program-card" id="atm-machine">
                        <h3 className="program-title">41. Write a program ATM machine keeps on working till the condition equals to cancel</h3>
                        <pre><code>{`import java.util.Scanner;

public class ATMMachine {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double balance = 10000; // Initial balance
        
        while(true) {
            System.out.println("\\n1. Check Balance");
            System.out.println("2. Deposit");
            System.out.println("3. Withdraw");
            System.out.println("4. Cancel");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            
            if(choice == 4) {
                System.out.println("Thank you for using our ATM!");
                break;
            }
            
            switch(choice) {
                case 1:
                    System.out.println("Balance: " + balance);
                    break;
                case 2:
                    System.out.print("Enter amount to deposit: ");
                    double deposit = sc.nextDouble();
                    balance += deposit;
                    System.out.println("Deposit successful. New balance: " + balance);
                    break;
                case 3:
                    System.out.print("Enter amount to withdraw: ");
                    double withdraw = sc.nextDouble();
                    if(withdraw > balance) {
                        System.out.println("Insufficient balance!");
                    } else {
                        balance -= withdraw;
                        System.out.println("Withdrawal successful. New balance: " + balance);
                    }
                    break;
                default:
                    System.out.println("Invalid choice!");
            }
        }
        sc.close();
    }
}`}</code></pre>
                        <div className="output">
                            <h4>Output (example interaction):</h4>
                            <pre>1. Check Balance
                                2. Deposit
                                3. Withdraw
                                4. Cancel
                                Enter your choice: 1
                                Balance: 10000.0

                                1. Check Balance
                                2. Deposit
                                3. Withdraw
                                4. Cancel
                                Enter your choice: 2
                                Enter amount to deposit: 5000
                                Deposit successful. New balance: 15000.0

                                1. Check Balance
                                2. Deposit
                                3. Withdraw
                                4. Cancel
                                Enter your choice: 3
                                Enter amount to withdraw: 3000
                                Withdrawal successful. New balance: 12000.0

                                1. Check Balance
                                2. Deposit
                                3. Withdraw
                                4. Cancel
                                Enter your choice: 4
                                Thank you for using our ATM!</pre>
                        </div>
                    </div>


                    <section id="string-programs" className="mb-5">
                        <h2 className="h2 mb-4 border-bottom pb-2">String Programs</h2>

                        <div className="program-card" id="count-characters">
                            <h3 className="program-title">42. Java Program to count the total number of characters in a string</h3>
                            <pre><code>{`public class CountCharacters {
    public static void main(String[] args) {
        String str = "The best of both worlds";
        int count = 0;
        
        for(int i = 0; i < str.length(); i++) {
            if(str.charAt(i) != ' ') {
                count++;
            }
        }
        
        System.out.println("Total characters: " + count);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Total characters: 17`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="count-punctuation">
                            <h3 className="program-title">43. Java Program to count the total number of punctuation characters exists in a String</h3>
                            <pre><code>{`public class CountPunctuation {
    public static void main(String[] args) {
        String str = "He said, 'The mailman loves you.' I heard it with my own ears.";
        int count = 0;
        
        for(int i = 0; i < str.length(); i++) {
            if(str.charAt(i) == '!' || str.charAt(i) == ',' || str.charAt(i) == ';' 
               || str.charAt(i) == '.' || str.charAt(i) == '?' || str.charAt(i) == '-' 
               || str.charAt(i) == '\'' || str.charAt(i) == '\"' || str.charAt(i) == ':') {
                count++;
            }
        }
        
        System.out.println("Total punctuation marks: " + count);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Total punctuation marks: 5`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="frequency-characters">
                            <h3 className="program-title">44. Java Program to find the frequency of characters</h3>
                            <pre><code>{`public class FrequencyCharacters {
    public static void main(String[] args) {
        String str = "picture perfect";
        int[] freq = new int[str.length()];
        char[] string = str.toCharArray();
        
        for(int i = 0; i < str.length(); i++) {
            freq[i] = 1;
            for(int j = i+1; j < str.length(); j++) {
                if(string[i] == string[j]) {
                    freq[i]++;
                    string[j] = '0'; // Set to avoid printing visited character
                }
            }
        }
        
        System.out.println("Characters and their frequencies");
        for(int i = 0; i < freq.length; i++) {
            if(string[i] != ' ' && string[i] != '0') {
                System.out.println(string[i] + "-" + freq[i]);
            }
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Characters and their frequencies
p-2
i-1
c-2
t-2
u-1
r-2
e-3
f-1`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="anagram">
                            <h3 className="program-title">45. Java Program to determine whether two strings are the anagram</h3>
                            <pre><code>{`import java.util.Arrays;

public class Anagram {
    public static void main(String[] args) {
        String str1 = "Brag";
        String str2 = "Grab";
        
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        
        if(str1.length() != str2.length()) {
            System.out.println("Not Anagram");
        } else {
            char[] string1 = str1.toCharArray();
            char[] string2 = str2.toCharArray();
            
            Arrays.sort(string1);
            Arrays.sort(string2);
            
            if(Arrays.equals(string1, string2)) {
                System.out.println("Anagram");
            } else {
                System.out.println("Not Anagram");
            }
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>Anagram</pre>
                            </div>
                        </div>

                        <div className="program-card" id="case-conversion">
                            <h3 className="program-title">46. Java Program to replace lower-case characters with upper-case and vice-versa</h3>
                            <pre><code>{`public class CaseConversion {
    public static void main(String[] args) {
        String str = "Great Power";
        StringBuffer newStr = new StringBuffer(str);
        
        for(int i = 0; i < str.length(); i++) {
            if(Character.isLowerCase(str.charAt(i))) {
                newStr.setCharAt(i, Character.toUpperCase(str.charAt(i)));
            } else if(Character.isUpperCase(str.charAt(i))) {
                newStr.setCharAt(i, Character.toLowerCase(str.charAt(i)));
            }
        }
        
        System.out.println("Converted string: " + newStr);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>Converted string: gREAT pOWER</pre>
                            </div>
                        </div>

                        <div className="program-card" id="divide-string">
                            <h3 className="program-title">47. Java Program to divide a string in 'N' equal parts.</h3>
                            <pre><code>{`public class DivideString {
    public static void main(String[] args) {
        String str = "aaaabbbbcccc";
        int n = 3;
        int len = str.length();
        int partSize = len/n;
        
        if(len % n != 0) {
            System.out.println("Cannot divide into equal parts");
        } else {
            for(int i = 0; i < len; i += partSize) {
                System.out.println(str.substring(i, i + partSize));
            }
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`aaaa
bbbb
cccc`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="largest-smallest-word">
                            <h3 className="program-title">48. Java Program to find the largest and smallest word in a string</h3>
                            <pre><code>{`public class LargestSmallestWord {
    public static void main(String[] args) {
        String str = "Hardships often prepare ordinary people for an extraordinary destiny";
        String[] words = str.split(" ");
        String smallest = words[0];
        String largest = words[0];
        
        for(int i = 0; i < words.length; i++) {
            if(words[i].length() < smallest.length()) {
                smallest = words[i];
            }
            if(words[i].length() > largest.length()) {
                largest = words[i];
            }
        }
        
        System.out.println("Smallest word: " + smallest);
        System.out.println("Largest word: " + largest);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Smallest word: an
Largest word: extraordinary`}</pre>
                            </div>
                        </div>
                    </section>

                    <section id="oop-programs" className="mb-5">
                        <h2 className="h2 mb-4 border-bottom pb-2">OOP Programs</h2>

                        <div className="program-card" id="inheritance-types">
                            <h3 className="program-title">49. Java program based on the concept of single level, multilevel, hierarchical Inheritance</h3>
                            <pre><code>{`// Single Inheritance
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}

// Multilevel Inheritance
class BabyDog extends Dog {
    void weep() {
        System.out.println("Weeping...");
    }
}

// Hierarchical Inheritance
class Cat extends Animal {
    void meow() {
        System.out.println("Meowing...");
    }
}

public class InheritanceTypes {
    public static void main(String[] args) {
        // Single Inheritance
        Dog d = new Dog();
        d.bark();
        d.eat();
        
        // Multilevel Inheritance
        BabyDog bd = new BabyDog();
        bd.weep();
        bd.bark();
        bd.eat();
        
        // Hierarchical Inheritance
        Cat c = new Cat();
        c.meow();
        c.eat();
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Barking...
Eating...
Weeping...
Barking...
Eating...
Meowing...
Eating...`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="overloading-overriding">
                            <h3 className="program-title">50. Java program based on the concept of method overloading, method overriding</h3>
                            <pre><code>{`// Method Overloading
class Adder {
    static int add(int a, int b) {
        return a + b;
    }
    
    static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    static double add(double a, double b) {
        return a + b;
    }
}

// Method Overriding
class Bank {
    int getRateOfInterest() {
        return 0;
    }
}

class SBI extends Bank {
    int getRateOfInterest() {
        return 8;
    }
}

class ICICI extends Bank {
    int getRateOfInterest() {
        return 7;
    }
}

public class OverloadingOverriding {
    public static void main(String[] args) {
        // Method Overloading
        System.out.println(Adder.add(11, 11));
        System.out.println(Adder.add(11, 11, 11));
        System.out.println(Adder.add(12.3, 12.6));
        
        // Method Overriding
        Bank b1 = new SBI();
        Bank b2 = new ICICI();
        System.out.println("SBI Rate of Interest: " + b1.getRateOfInterest());
        System.out.println("ICICI Rate of Interest: " + b2.getRateOfInterest());
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`22
33
24.9
SBI Rate of Interest: 8
ICICI Rate of Interest: 7`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="abstract-method">
                            <h3 className="program-title">51. Java program to create a abstract method with hierarchical inheritance</h3>
                            <pre><code>{`abstract class Shape {
    abstract void draw();
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing Rectangle");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

public class AbstractMethod {
    public static void main(String[] args) {
        Shape s1 = new Rectangle();
        Shape s2 = new Circle();
        
        s1.draw();
        s2.draw();
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Drawing Rectangle
Drawing Circle`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="encapsulation">
                            <h3 className="program-title">52. Java program based on the encapsulation</h3>
                            <pre><code>{`class Person {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("John");
        p.setAge(30);
        
        System.out.println("Name: " + p.getName());
        System.out.println("Age: " + p.getAge());
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Name: John
Age: 30`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="oops">
                            <h3 className="program-title">53. Java program for OOPS</h3>
                            <pre><code>{`// Class and Object
class Student {
    String name;
    int age;
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Inheritance
class CollegeStudent extends Student {
    String college;
    
    void display() {
        super.display();
        System.out.println("College: " + college);
    }
}

// Interface
interface Playable {
    void play();
}

// Polymorphism
class Football implements Playable {
    public void play() {
        System.out.println("Playing Football");
    }
}

class Cricket implements Playable {
    public void play() {
        System.out.println("Playing Cricket");
    }
}

public class OOPS {
    public static void main(String[] args) {
        // Class and Object
        Student s1 = new Student();
        s1.name = "Alice";
        s1.age = 20;
        s1.display();
        
        // Inheritance
        CollegeStudent cs = new CollegeStudent();
        cs.name = "Bob";
        cs.age = 21;
        cs.college = "XYZ College";
        cs.display();
        
        // Polymorphism
        Playable game1 = new Football();
        Playable game2 = new Cricket();
        game1.play();
        game2.play();
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Name: Alice
Age: 20
Name: Bob
Age: 21
College: XYZ College
Playing Football
Playing Cricket`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="swap-without-var">
                            <h3 className="program-title">54. Java program to swap two variables without third variable</h3>
                            <pre><code>{`public class SwapWithoutVar {
    public static void main(String[] args) {
        int a = 5, b = 10;
        System.out.println("Before swap: a = " + a + ", b = " + b);
        
        a = a + b;
        b = a - b;
        a = a - b;
        
        System.out.println("After swap: a = " + a + ", b = " + b);
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`Before swap: a = 5, b = 10
After swap: a = 10, b = 5`}</pre>
                            </div>
                        </div>
                    </section>

                    <section id="pattern-programs" className="mb-5">
                        <h2 className="h2 mb-4 border-bottom pb-2">Pattern Programs</h2>

                        <div className="program-card" id="number-triangle">
                            <h3 className="program-title">55. Generate Number triangular pattern</h3>
                            <pre><code>{`public class NumberTriangle {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; ++i) {
            for(int j = 1; j <= rows - i; ++j) {
                System.out.print(" ");
            }
            
            for(int j = 1; j <= i; ++j) {
                System.out.print(j + " ");
            }
            
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="number-increasing-pyramid">
                            <h3 className="program-title">56. Generate Number increasing pyramid</h3>
                            <pre><code>{`public class NumberIncreasingPyramid {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; ++i) {
            for(int j = 1; j <= i; ++j) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="reverse-pyramid">
                            <h3 className="program-title">57. Generate increasing in reverse pyramid</h3>
                            <pre><code>{`public class ReversePyramid {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = rows; i >= 1; --i) {
            for(int j = 1; j <= i; ++j) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="number-changing-pyramid">
                            <h3 className="program-title">58. Generate number changing pyramid</h3>
                            <pre><code>{`public class NumberChangingPyramid {
    public static void main(String[] args) {
        int rows = 4, num = 1;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`1 
2 3 
4 5 6 
7 8 9 10`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="zero-one-triangle">
                            <h3 className="program-title">59. Generate zero one right angle triangle</h3>
                            <pre><code>{`public class ZeroOneTriangle {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                if((i + j) % 2 == 0) {
                    System.out.print("1 ");
                } else {
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="palindrome-triangle">
                            <h3 className="program-title">60. Generate palindrome triangular pattern</h3>
                            <pre><code>{`public class PalindromeTriangle {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            // Spaces
            for(int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }
            
            // Left half
            for(int j = i; j >= 1; j--) {
                System.out.print(j + " ");
            }
            
            // Right half
            for(int j = 2; j <= i; j++) {
                System.out.print(j + " ");
            }
            
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`        1 
      2 1 2 
    3 2 1 2 3 
  4 3 2 1 2 3 4 
5 4 3 2 1 2 3 4 5`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="rhombus-pattern">
                            <h3 className="program-title">61. Generate rhombus pattern</h3>
                            <pre><code>{`public class RhombusPattern {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            // Spaces
            for(int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            
            // Stars
            for(int j = 1; j <= rows; j++) {
                System.out.print("* ");
            }
            
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`    * * * * * 
   * * * * * 
  * * * * * 
 * * * * * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="right-half-pyramid">
                            <h3 className="program-title">62. Generate right half pyramid</h3>
                            <pre><code>{`public class RightHalfPyramid {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* 
* * 
* * * 
* * * * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="reverse-right-half-pyramid">
                            <h3 className="program-title">63. Generate reverse right half pyramid</h3>
                            <pre><code>{`public class ReverseRightHalfPyramid {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = rows; i >= 1; i--) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* * * * * 
* * * * 
* * * 
* * 
*`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="left-half-pyramid">
                            <h3 className="program-title">64. Generate left half pyramid</h3>
                            <pre><code>{`public class LeftHalfPyramid {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            // Spaces
            for(int j = 1; j <= rows - i; j++) {
                System.out.print("  ");
            }
            
            // Stars
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`        * 
      * * 
    * * * 
  * * * * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="reverse-left-half-pyramid">
                            <h3 className="program-title">65. Generate reverse left half pyramid</h3>
                            <pre><code>{`public class ReverseLeftHalfPyramid {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = rows; i >= 1; i--) {
            // Spaces
            for(int j = 1; j <= rows - i; j++) {
                System.out.print("  ");
            }
            
            // Stars
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* * * * * 
  * * * * 
    * * * 
      * * 
        *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="hour-glass">
                            <h3 className="program-title">66. Hollow hour glass</h3>
                            <pre><code>{`public class HollowHourGlass {
    public static void main(String[] args) {
        int rows = 5;
        
        // Upper half
        for(int i = 1; i <= rows; i++) {
            // Spaces
            for(int j = 1; j < i; j++) {
                System.out.print(" ");
            }
            
            // Stars
            for(int j = 1; j <= (rows - i + 1); j++) {
                if(i == 1 || j == 1 || j == (rows - i + 1)) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        
        // Lower half
        for(int i = rows - 1; i >= 1; i--) {
            // Spaces
            for(int j = 1; j < i; j++) {
                System.out.print(" ");
            }
            
            // Stars
            for(int j = 1; j <= (rows - i + 1); j++) {
                if(i == 1 || j == 1 || j == (rows - i + 1)) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* * * * * 
 *     * 
  *   * 
   * * 
    * 
   * * 
  *   * 
 *     * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="right-angle-star">
                            <h3 className="program-title">67. Java program to create a right angle star pattern</h3>
                            <pre><code>{`public class RightAngleStar {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* 
* * 
* * * 
* * * * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="square-star">
                            <h3 className="program-title">68. Java program to create a square star pattern</h3>
                            <pre><code>{`public class SquareStar {
    public static void main(String[] args) {
        int size = 5;
        
        for(int i = 1; i <= size; i++) {
            for(int j = 1; j <= size; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="k-shape-star">
                            <h3 className="program-title">69. Java program to create a star pattern in K-Shape</h3>
                            <pre><code>{`public class KShapeStar {
    public static void main(String[] args) {
        int rows = 5;
        
        // Upper part
        for(int i = rows; i >= 1; i--) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // Lower part
        for(int i = 2; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`* * * * * 
* * * * 
* * * 
* * 
* 
* * 
* * * 
* * * * 
* * * * *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="diamond-star">
                            <h3 className="program-title">70. Java program to create a diamond star pattern</h3>
                            <pre><code>{`public class DiamondStar {
    public static void main(String[] args) {
        int rows = 5;
        
        // Upper part
        for(int i = 1; i <= rows; i++) {
            // Spaces
            for(int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            
            // Stars
            for(int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower part
        for(int i = rows - 1; i >= 1; i--) {
            // Spaces
            for(int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            
            // Stars
            for(int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`}</pre>
                            </div>
                        </div>

                        <div className="program-card" id="butterfly-star">
                            <h3 className="program-title">71. Java program to create a butterfly star pattern</h3>
                            <pre><code>{`public class ButterflyStar {
    public static void main(String[] args) {
        int rows = 5;
        
        // Upper part
        for(int i = 1; i <= rows; i++) {
            // Left stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            
            // Spaces
            for(int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }
            
            // Right stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower part
        for(int i = rows; i >= 1; i--) {
            // Left stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            
            // Spaces
            for(int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }
            
            // Right stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`}</code></pre>
                            <div className="output">
                                <h4>Output:</h4>
                                <pre>{`*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *`}</pre>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container text-center">
                    <p>Java Programming Questions &copy; 2025 | All Programs with Solutions and Outputs</p>
                </div>
            </footer>
        </div>
    );
}

export default JavaPrograms;