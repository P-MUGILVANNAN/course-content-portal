import React from 'react';

function PhpPrograms() {
  return (
    <div className="bg-light container py-4">
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
          .program-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
          }
          .program-title {
            color: #0d6efd;
            margin-bottom: 10px;
          }
          .output {
            background-color: #e9ecef;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 10px;
            font-family: 'Courier New', monospace;
            white-space: pre-wrap;
          }
          .output-title {
            font-weight: bold;
            margin-bottom: 5px;
          }
        `}
      </style>

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">PHP Programming Solutions</h1>
        <p className="lead">Complete solutions for all PHP programming questions with outputs</p>
      </header>

      <div className="container">
        {/* Program 1 */}
        <div className="program-card">
          <h2 className="program-title">1. PHP Program to Swap Two Numbers</h2>
          <pre><code>{`<?php
// Using temporary variable
$a = 5;
$b = 10;

echo "Before swap: a = $a, b = $b\\n";

$temp = $a;
$a = $b;
$b = $temp;

echo "After swap: a = $a, b = $b";

// Without temporary variable (alternative)
$a = $a + $b;
$b = $a - $b;
$a = $a - $b;
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Before swap: a = 5, b = 10<br />
            After swap: a = 10, b = 5
          </div>
        </div>

        {/* Program 2 */}
        <div className="program-card">
          <h2 className="program-title">2. PHP Program to Check Whether a Number is Even or Odd</h2>
          <pre><code>{`<?php
function checkEvenOdd($num) {
    if ($num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

$number = 7;
echo "$number is " . checkEvenOdd($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            7 is Odd
          </div>
        </div>

        {/* Program 3 */}
        <div className="program-card">
          <h2 className="program-title">3. PHP Program to Check Whether an Alphabet is Vowel or Consonant</h2>
          <pre><code>{`<?php
function checkVowelConsonant($char) {
    $char = strtolower($char);
    if ($char == 'a' || $char == 'e' || $char == 'i' || $char == 'o' || $char == 'u') {
        return "Vowel";
    } else {
        return "Consonant";
    }
}

$letter = 'E';
echo "$letter is a " . checkVowelConsonant($letter);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            E is a Vowel
          </div>
        </div>

        {/* Program 4 */}
        <div className="program-card">
          <h2 className="program-title">4. PHP Program to Find the Largest Among Three Numbers</h2>
          <pre><code>{`<?php
function findLargest($a, $b, $c) {
    if ($a >= $b && $a >= $c) {
        return $a;
    } elseif ($b >= $a && $b >= $c) {
        return $b;
    } else {
        return $c;
    }
}

$num1 = 10;
$num2 = 25;
$num3 = 15;
echo "Largest number is: " . findLargest($num1, $num2, $num3);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Largest number is: 25
          </div>
        </div>

        {/* Program 5 */}
        <div className="program-card">
          <h2 className="program-title">5. PHP Program to Check Leap Year</h2>
          <pre><code>{`<?php
function isLeapYear($year) {
    if (($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

$year = 2024;
echo isLeapYear($year) ? "$year is a leap year" : "$year is not a leap year";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            2024 is a leap year
          </div>
        </div>

        {/* Program 6 */}
        <div className="program-card">
          <h2 className="program-title">6. PHP Program to Check Whether a Number is Positive or Negative</h2>
          <pre><code>{`<?php
function checkNumber($num) {
    if ($num > 0) {
        return "Positive";
    } elseif ($num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

$number = -5;
echo "$number is " . checkNumber($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            -5 is Negative
          </div>
        </div>

        {/* Program 7 */}
        <div className="program-card">
          <h2 className="program-title">7. PHP Program to Check Whether a Character is Alphabet or Not</h2>
          <pre><code>{`<?php
function isAlphabet($char) {
    $char = strtolower($char);
    if (($char >= 'a' && $char <= 'z')) {
        return "Alphabet";
    } else {
        return "Not an alphabet";
    }
}

$character = 'D';
echo "$character is " . isAlphabet($character);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            D is Alphabet
          </div>
        </div>

        {/* Program 8 */}
        <div className="program-card">
          <h2 className="program-title">8. PHP Program to Calculate the Sum of Natural Numbers</h2>
          <pre><code>{`<?php
function sumOfNaturalNumbers($n) {
    $sum = 0;
    for ($i = 1; $i <= $n; $i++) {
        $sum += $i;
    }
    return $sum;
}

$limit = 10;
echo "Sum of first $limit natural numbers is: " . sumOfNaturalNumbers($limit);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Sum of first 10 natural numbers is: 55
          </div>
        </div>

        {/* Program 9 */}
        <div className="program-card">
          <h2 className="program-title">9. PHP Program to Find Factorial of a Number</h2>
          <pre><code>{`<?php
function factorial($n) {
    $result = 1;
    for ($i = 1; $i <= $n; $i++) {
        $result *= $i;
    }
    return $result;
}

$number = 5;
echo "Factorial of $number is: " . factorial($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Factorial of 5 is: 120
          </div>
        </div>

        {/* Program 10 */}
        <div className="program-card">
          <h2 className="program-title">10. Program to Generate Multiplication Table</h2>
          <pre><code>{`<?php
function multiplicationTable($num) {
    for ($i = 1; $i <= 10; $i++) {
        echo "$num x $i = " . ($num * $i) . "<br>";
    }
}

$number = 7;
multiplicationTable($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            7 x 1 = 7<br />
            7 x 2 = 14<br />
            7 x 3 = 21<br />
            7 x 4 = 28<br />
            7 x 5 = 35<br />
            7 x 6 = 42<br />
            7 x 7 = 49<br />
            7 x 8 = 56<br />
            7 x 9 = 63<br />
            7 x 10 = 70
          </div>
        </div>

        {/* Program 11 */}
        <div className="program-card">
          <h2 className="program-title">11. PHP Program to Display Fibonacci Series</h2>
          <pre><code>{`<?php
function fibonacci($n) {
    $first = 0;
    $second = 1;
    
    echo "Fibonacci Series up to $n terms: ";
    for ($i = 1; $i <= $n; $i++) {
        echo $first . " ";
        $next = $first + $second;
        $first = $second;
        $second = $next;
    }
}

$terms = 10;
fibonacci($terms);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Fibonacci Series up to 10 terms: 0 1 1 2 3 5 8 13 21 34
          </div>
        </div>

        {/* Program 12 */}
        <div className="program-card">
          <h2 className="program-title">12. PHP Program to Find LCM of two Numbers</h2>
          <pre><code>{`<?php
function gcd($a, $b) {
    while ($b != 0) {
        $temp = $a % $b;
        $a = $b;
        $b = $temp;
    }
    return $a;
}

function lcm($a, $b) {
    return ($a * $b) / gcd($a, $b);
}

$num1 = 12;
$num2 = 18;
echo "LCM of $num1 and $num2 is: " . lcm($num1, $num2);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            LCM of 12 and 18 is: 36
          </div>
        </div>

        {/* Program 13 */}
        <div className="program-card">
          <h2 className="program-title">13. PHP Program to Display Alphabets (A to Z) using loop</h2>
          <pre><code>{`<?php
echo "Alphabets from A to Z: ";
for ($i = ord('A'); $i <= ord('Z'); $i++) {
    echo chr($i) . " ";
}
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Alphabets from A to Z: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </div>
        </div>

        {/* Program 14 */}
        <div className="program-card">
          <h2 className="program-title">14. PHP Program to Count Number of Digits in an Integer</h2>
          <pre><code>{`<?php
function countDigits($num) {
    $count = 0;
    $num = abs($num); // Handle negative numbers
    
    do {
        $count++;
        $num = (int)($num / 10);
    } while ($num != 0);
    
    return $count;
}

$number = 12345;
echo "Number of digits in $number is: " . countDigits($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Number of digits in 12345 is: 5
          </div>
        </div>

        {/* Program 15 */}
        <div className="program-card">
          <h2 className="program-title">15. PHP Program to Reverse a Number</h2>
          <pre><code>{`<?php
function reverseNumber($num) {
    $reversed = 0;
    $num = abs($num); // Handle negative numbers
    
    while ($num > 0) {
        $digit = $num % 10;
        $reversed = $reversed * 10 + $digit;
        $num = (int)($num / 10);
    }
    
    return $reversed;
}

$number = 12345;
echo "Reverse of $number is: " . reverseNumber($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Reverse of 12345 is: 54321
          </div>
        </div>

        {/* Program 16 */}
        <div className="program-card">
          <h2 className="program-title">16. PHP Program to Calculate the Power of a Number</h2>
          <pre><code>{`<?php
function power($base, $exponent) {
    $result = 1;
    for ($i = 1; $i <= $exponent; $i++) {
        $result *= $base;
    }
    return $result;
}

$base = 2;
$exponent = 5;
echo "$base raised to the power $exponent is: " . power($base, $exponent);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            2 raised to the power 5 is: 32
          </div>
        </div>

        {/* Program 17 */}
        <div className="program-card">
          <h2 className="program-title">17. PHP Program to Check Palindrome</h2>
          <pre><code>{`<?php
function isPalindrome($str) {
    $str = strtolower(preg_replace('/[^A-Za-z0-9]/', '', $str));
    return $str == strrev($str);
}

$string = "Madam";
echo isPalindrome($string) ? "'$string' is a palindrome" : "'$string' is not a palindrome";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            'Madam' is a palindrome
          </div>
        </div>

        {/* Program 18 */}
        <div className="program-card">
          <h2 className="program-title">18. PHP Program to Check Whether a Number is Prime or Not</h2>
          <pre><code>{`<?php
function isPrime($num) {
    if ($num <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            return false;
        }
    }
    return true;
}

$number = 17;
echo isPrime($number) ? "$number is a prime number" : "$number is not a prime number";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            17 is a prime number
          </div>
        </div>

        {/* Program 19 */}
        <div className="program-card">
          <h2 className="program-title">19. PHP Program to Display Prime Numbers Between Two Intervals</h2>
          <pre><code>{`<?php
function isPrime($num) {
    if ($num <= 1) return false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) return false;
    }
    return true;
}

function displayPrimes($start, $end) {
    echo "Prime numbers between $start and $end are: ";
    for ($i = $start; $i <= $end; $i++) {
        if (isPrime($i)) {
            echo $i . " ";
        }
    }
}

$start = 10;
$end = 50;
displayPrimes($start, $end);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Prime numbers between 10 and 50 are: 11 13 17 19 23 29 31 37 41 43 47
          </div>
        </div>

        {/* Program 20 */}
        <div className="program-card">
          <h2 className="program-title">20. PHP Program to Check Armstrong Number</h2>
          <pre><code>{`<?php
function isArmstrong($num) {
    $sum = 0;
    $temp = $num;
    $digits = strlen((string)$num);
    
    while ($temp != 0) {
        $digit = $temp % 10;
        $sum += pow($digit, $digits);
        $temp = (int)($temp / 10);
    }
    
    return $num == $sum;
}

$number = 153;
echo isArmstrong($number) ? "$number is an Armstrong number" : "$number is not an Armstrong number";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            153 is an Armstrong number
          </div>
        </div>

        {/* Program 21 */}
        <div className="program-card">
          <h2 className="program-title">21. PHP Program to Display Armstrong Number Between Two Intervals</h2>
          <pre><code>{`<?php
function isArmstrong($num) {
    $sum = 0;
    $temp = $num;
    $digits = strlen((string)$num);
    
    while ($temp != 0) {
        $digit = $temp % 10;
        $sum += pow($digit, $digits);
        $temp = (int)($temp / 10);
    }
    
    return $num == $sum;
}

function displayArmstrongNumbers($start, $end) {
    echo "Armstrong numbers between $start and $end are: ";
    for ($i = $start; $i <= $end; $i++) {
        if (isArmstrong($i)) {
            echo $i . " ";
        }
    }
}

$start = 100;
$end = 1000;
displayArmstrongNumbers($start, $end);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Armstrong numbers between 100 and 1000 are: 153 370 371 407
          </div>
        </div>

        {/* Program 22 */}
        <div className="program-card">
          <h2 className="program-title">22. PHP Program to Display Prime Numbers Between Intervals Using Function</h2>
          <pre><code>{`<?php
function isPrime($num) {
    if ($num <= 1) return false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) return false;
    }
    return true;
}

function displayPrimesInRange($start, $end) {
    echo "Prime numbers between $start and $end are: ";
    for ($i = $start; $i <= $end; $i++) {
        if (isPrime($i)) {
            echo $i . " ";
        }
    }
}

$start = 10;
$end = 50;
displayPrimesInRange($start, $end);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Prime numbers between 10 and 50 are: 11 13 17 19 23 29 31 37 41 43 47
          </div>
        </div>

        {/* Program 23 */}
        <div className="program-card">
          <h2 className="program-title">23. PHP Program to Display Armstrong Numbers Between Intervals Using Function</h2>
          <pre><code>{`<?php
function isArmstrong($num) {
    $sum = 0;
    $temp = $num;
    $digits = strlen((string)$num);
    
    while ($temp != 0) {
        $digit = $temp % 10;
        $sum += pow($digit, $digits);
        $temp = (int)($temp / 10);
    }
    
    return $num == $sum;
}

function displayArmstrongInRange($start, $end) {
    echo "Armstrong numbers between $start and $end are: ";
    for ($i = $start; $i <= $end; $i++) {
        if (isArmstrong($i)) {
            echo $i . " ";
        }
    }
}

$start = 100;
$end = 1000;
displayArmstrongInRange($start, $end);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Armstrong numbers between 100 and 1000 are: 153 370 371 407
          </div>
        </div>

        {/* Program 24 */}
        <div className="program-card">
          <h2 className="program-title">24. PHP Program to Display Factors of a Number</h2>
          <pre><code>{`<?php
function displayFactors($num) {
    echo "Factors of $num are: ";
    for ($i = 1; $i <= $num; $i++) {
        if ($num % $i == 0) {
            echo $i . " ";
        }
    }
}

$number = 24;
displayFactors($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Factors of 24 are: 1 2 3 4 6 8 12 24
          </div>
        </div>

        {/* Program 25 */}
        <div className="program-card">
          <h2 className="program-title">25. PHP Program to Make a Simple Calculator Using switch...case</h2>
          <pre><code>{`<?php
function calculator($num1, $num2, $operator) {
    switch ($operator) {
        case '+':
            return $num1 + $num2;
        case '-':
            return $num1 - $num2;
        case '*':
            return $num1 * $num2;
        case '/':
            if ($num2 != 0) {
                return $num1 / $num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operator";
    }
}

$num1 = 10;
$num2 = 5;
$operator = '*';
echo "$num1 $operator $num2 = " . calculator($num1, $num2, $operator);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            10 * 5 = 50
          </div>
        </div>

        {/* Program 26 */}
        <div className="program-card">
          <h2 className="program-title">26. PHP Program to Find the Sum of Natural Numbers using Recursion</h2>
          <pre><code>{`<?php
function sumNaturalNumbers($n) {
    if ($n == 1) {
        return 1;
    } else {
        return $n + sumNaturalNumbers($n - 1);
    }
}

$limit = 10;
echo "Sum of first $limit natural numbers is: " . sumNaturalNumbers($limit);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Sum of first 10 natural numbers is: 55
          </div>
        </div>

        {/* Program 27 */}
        <div className="program-card">
          <h2 className="program-title">27. PHP Program to Find Factorial of a Number Using Recursion</h2>
          <pre><code>{`<?php
function factorial($n) {
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

$number = 5;
echo "Factorial of $number is: " . factorial($number);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Factorial of 5 is: 120
          </div>
        </div>

        {/* Program 28 */}
        <div className="program-card">
          <h2 className="program-title">28. PHP Program to Find the Frequency of Character in a String</h2>
          <pre><code>{`<?php
function charFrequency($str, $char) {
    $count = 0;
    for ($i = 0; $i < strlen($str); $i++) {
        if (strtolower($str[$i]) == strtolower($char)) {
            $count++;
        }
    }
    return $count;
}

$string = "Hello World";
$character = 'l';
echo "Frequency of '$character' in '$string' is: " . charFrequency($string, $character);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Frequency of 'l' in 'Hello World' is: 3
          </div>
        </div>

        {/* Program 29 */}
        <div className="program-card">
          <h2 className="program-title">29. PHP Program to Count the Number of Vowels and Consonants in a Sentence</h2>
          <pre><code>{`<?php
function countVowelsConsonants($str) {
    $vowels = 0;
    $consonants = 0;
    $str = strtolower($str);
    
    for ($i = 0; $i < strlen($str); $i++) {
        $char = $str[$i];
        if ($char >= 'a' && $char <= 'z') {
            if ($char == 'a' || $char == 'e' || $char == 'i' || $char == 'o' || $char == 'u') {
                $vowels++;
            } else {
                $consonants++;
            }
        }
    }
    
    return array('vowels' => $vowels, 'consonants' => $consonants);
}

$sentence = "Hello World";
$counts = countVowelsConsonants($sentence);
echo "Vowels: " . $counts['vowels'] . ", Consonants: " . $counts['consonants'];
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Vowels: 3, Consonants: 7
          </div>
        </div>

        {/* Program 30 */}
        <div className="program-card">
          <h2 className="program-title">30. PHP Program to Concatenate Two Arrays</h2>
          <pre><code>{`<?php
function concatenateArrays($arr1, $arr2) {
    return array_merge($arr1, $arr2);
}

$array1 = array(1, 2, 3);
$array2 = array(4, 5, 6);
$result = concatenateArrays($array1, $array2);
print_r($result);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Array<br />
            (<br />
            {`  [0] => 1<br />
  [1] => 2<br />
  [2] => 3<br />
  [3] => 4<br />
  [4] => 5<br />
  [5] => 6<br />`}
            )
          </div>
        </div>

        {/* Program 31 */}
        <div className="program-card">
          <h2 className="program-title">31. PHP Program to Get Current Date/Time</h2>
          <pre><code>{`<?php
echo "Current date and time: " . date('Y-m-d H:i:s');
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Current date and time: [Current date and time will be displayed here]
          </div>
        </div>

        {/* Program 32 */}
        <div className="program-card">
          <h2 className="program-title">32. PHP Program to Implement multiple inheritance</h2>
          <pre><code>{`<?php
// PHP doesn't support multiple inheritance directly, but we can use traits
trait Trait1 {
    public function method1() {
        echo "Method 1 from Trait1\\n";
    }
}

trait Trait2 {
    public function method2() {
        echo "Method 2 from Trait2\\n";
    }
}

class MyClass {
    use Trait1, Trait2;
    
    public function method3() {
        echo "Method 3 from MyClass\\n";
    }
}

$obj = new MyClass();
$obj->method1();
$obj->method2();
$obj->method3();
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Method 1 from Trait1<br />
            Method 2 from Trait2<br />
            Method 3 from MyClass
          </div>
        </div>

        {/* Program 33 */}
        <div className="program-card">
          <h2 className="program-title">33. Write a program ATM machine keeps on working till the condition equals to cancel</h2>
          <pre><code>{`<?php
function atmMachine() {
    $balance = 1000; // Initial balance
    
    while (true) {
        echo "\\nATM Menu:\\n";
        echo "1. Check Balance\\n";
        echo "2. Deposit\\n";
        echo "3. Withdraw\\n";
        echo "4. Exit\\n";
        
        $choice = readline("Enter your choice (1-4): ");
        
        switch ($choice) {
            case '1':
                echo "Your balance is: $balance\\n";
                break;
            case '2':
                $amount = readline("Enter amount to deposit: ");
                if ($amount > 0) {
                    $balance += $amount;
                    echo "Deposit successful. New balance: $balance\\n";
                } else {
                    echo "Invalid amount\\n";
                }
                break;
            case '3':
                $amount = readline("Enter amount to withdraw: ");
                if ($amount > 0 && $amount <= $balance) {
                    $balance -= $amount;
                    echo "Withdrawal successful. New balance: $balance\\n";
                } else {
                    echo "Invalid amount or insufficient balance\\n";
                }
                break;
            case '4':
                echo "Thank you for using our ATM. Goodbye!\\n";
                return;
            default:
                echo "Invalid choice. Please try again.\\n";
        }
    }
}

atmMachine();
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            [Sample output for ATM simulation]<br />
            ATM Menu:<br />
            1. Check Balance<br />
            2. Deposit<br />
            3. Withdraw<br />
            4. Exit<br />
            Enter your choice (1-4): 1<br />
            Your balance is: 1000<br />
            ... (program continues until user selects exit)
          </div>
        </div>

        {/* Program 34 */}
        <div className="program-card">
          <h2 className="program-title">34. PHP Program to count the total number of characters in a string</h2>
          <pre><code>{`<?php
function countCharacters($str) {
    return strlen($str);
}

$string = "Hello World";
echo "Number of characters in '$string' is: " . countCharacters($string);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Number of characters in 'Hello World' is: 11
          </div>
        </div>

        {/* Program 35 */}
        <div className="program-card">
          <h2 className="program-title">35. PHP Program to count the total number of punctuation characters exists in a String</h2>
          <pre><code>{`<?php
function countPunctuation($str) {
    $punctuation = 0;
    $punctuationMarks = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}'];
    
    for ($i = 0; $i < strlen($str); $i++) {
        if (in_array($str[$i], $punctuationMarks)) {
            $punctuation++;
        }
    }
    
    return $punctuation;
}

$string = "Hello, World! How are you?";
echo "Number of punctuation marks in '$string' is: " . countPunctuation($string);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Number of punctuation marks in 'Hello, World! How are you?' is: 3
          </div>
        </div>

        {/* Program 36 */}
        <div className="program-card">
          <h2 className="program-title">36. PHP Program to find the frequency of characters</h2>
          <pre><code>{`<?php
function characterFrequency($str) {
    $frequency = array();
    
    for ($i = 0; $i < strlen($str); $i++) {
        $char = strtolower($str[$i]);
        if (isset($frequency[$char])) {
            $frequency[$char]++;
        } else {
            $frequency[$char] = 1;
        }
    }
    
    return $frequency;
}

$string = "Hello World";
$frequency = characterFrequency($string);
echo "Character frequency in '$string':\\n";
print_r($frequency);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Character frequency in 'Hello World':<br />
            Array<br />
            (<br />
            {`  [h] => 1<br />
  [e] => 1<br />
  [l] => 3<br />
  [o] => 2<br />
  [ ] => 1<br />
  [w] => 1<br />
  [r] => 1<br />
  [d] => 1<br />`}
            )
          </div>
        </div>

        {/* Program 37 */}
        <div className="program-card">
          <h2 className="program-title">37. PHP Program to determine whether two strings are the anagram</h2>
          <pre><code>{`<?php
function areAnagrams($str1, $str2) {
    $str1 = strtolower(preg_replace('/[^a-z]/', '', $str1));
    $str2 = strtolower(preg_replace('/[^a-z]/', '', $str2));
    
    if (strlen($str1) != strlen($str2)) {
        return false;
    }
    
    $count1 = array_count_values(str_split($str1));
    $count2 = array_count_values(str_split($str2));
    
    return $count1 == $count2;
}

$string1 = "listen";
$string2 = "silent";
echo areAnagrams($string1, $string2) ? "'$string1' and '$string2' are anagrams" : "'$string1' and '$string2' are not anagrams";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            'listen' and 'silent' are anagrams
          </div>
        </div>

        {/* Program 38 */}
        <div className="program-card">
          <h2 className="program-title">38. PHP Program to replace lower-case characters with upper-case and vice-versa</h2>
          <pre><code>{`<?php
function swapCase($str) {
    $result = '';
    for ($i = 0; $i < strlen($str); $i++) {
        $char = $str[$i];
        if (ctype_lower($char)) {
            $result .= strtoupper($char);
        } elseif (ctype_upper($char)) {
            $result .= strtolower($char);
        } else {
            $result .= $char;
        }
    }
    return $result;
}

$string = "Hello World! 123";
echo "Original: $string\\n";
echo "Swapped case: " . swapCase($string);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Original: Hello World! 123<br />
            Swapped case: hELLO wORLD! 123
          </div>
        </div>

        {/* Program 39 */}
        <div className="program-card">
          <h2 className="program-title">39. PHP Program to divide a string in 'N' equal parts</h2>
          <pre><code>{`<?php
function divideString($str, $n) {
    $length = strlen($str);
    if ($length % $n != 0) {
        return "String cannot be divided into $n equal parts";
    }
    
    $partLength = $length / $n;
    $parts = array();
    
    for ($i = 0; $i < $length; $i += $partLength) {
        $parts[] = substr($str, $i, $partLength);
    }
    
    return $parts;
}

$string = "abcdefghij";
$n = 2;
$result = divideString($string, $n);
echo "String divided into $n parts:\\n";
print_r($result);
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            String divided into 2 parts:<br />
            Array<br />
            (<br />
            {`  [0] => abcde<br />
  [1] => fghij<br />`}
            )
          </div>
        </div>

        {/* Program 40 */}
        <div className="program-card">
          <h2 className="program-title">40. PHP Program to find the largest and smallest word in a string</h2>
          <pre><code>{`<?php
function findLargestAndSmallestWord($str) {
    $words = preg_split('/\\s+/', trim($str));
    $largest = $smallest = $words[0];
    
    foreach ($words as $word) {
        if (strlen($word) > strlen($largest)) {
            $largest = $word;
        }
        if (strlen($word) < strlen($smallest)) {
            $smallest = $word;
        }
    }
    
    return array('largest' => $largest, 'smallest' => $smallest);
}

$string = "The quick brown fox jumps over the lazy dog";
$result = findLargestAndSmallestWord($string);
echo "Largest word: " . $result['largest'] . "\\n";
echo "Smallest word: " . $result['smallest'];
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Largest word: quick<br />
            Smallest word: The
          </div>
        </div>

        {/* Program 41 */}
        <div className="program-card">
          <h2 className="program-title">41. PHP program based on the concept of single level, multilevel, hierarchical Inheritance</h2>
          <pre><code>{`<?php
// Single level inheritance
class Animal {
    public function eat() {
        echo "Animal is eating\\n";
    }
}

class Dog extends Animal {
    public function bark() {
        echo "Dog is barking\\n";
    }
}

// Multilevel inheritance
class Puppy extends Dog {
    public function weep() {
        echo "Puppy is weeping\\n";
    }
}

// Hierarchical inheritance
class Cat extends Animal {
    public function meow() {
        echo "Cat is meowing\\n";
    }
}

// Single level
$dog = new Dog();
$dog->eat();
$dog->bark();

// Multilevel
$puppy = new Puppy();
$puppy->eat();
$puppy->bark();
$puppy->weep();

// Hierarchical
$cat = new Cat();
$cat->eat();
$cat->meow();
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Animal is eating<br />
            Dog is barking<br />
            Animal is eating<br />
            Dog is barking<br />
            Puppy is weeping<br />
            Animal is eating<br />
            Cat is meowing
          </div>
        </div>

        {/* Program 42 */}
        <div className="program-card">
          <h2 className="program-title">42. PHP program based on the concept of method overloading, method overriding</h2>
          <pre><code>{`<?php
// Method overriding
class ParentClass {
    public function show() {
        echo "Parent class method\\n";
    }
}

class ChildClass extends ParentClass {
    public function show() {
        echo "Child class method (overridden)\\n";
    }
}

// Method overloading (PHP doesn't support directly, but we can simulate)
class OverloadExample {
    public function __call($name, $arguments) {
        if ($name == 'sum') {
            if (count($arguments) == 2) {
                return $arguments[0] + $arguments[1];
            } elseif (count($arguments) == 3) {
                return $arguments[0] + $arguments[1] + $arguments[2];
            }
        }
    }
}

// Method overriding
$child = new ChildClass();
$child->show();

// Method overloading
$overload = new OverloadExample();
echo "Sum of 2 numbers: " . $overload->sum(5, 10) . "\\n";
echo "Sum of 3 numbers: " . $overload->sum(5, 10, 15) . "\\n";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Child class method (overridden)<br />
            Sum of 2 numbers: 15<br />
            Sum of 3 numbers: 30
          </div>
        </div>

        {/* Program 43 */}
        <div className="program-card">
          <h2 className="program-title">43. PHP program to create a abstract method with hierarchical inheritance</h2>
          <pre><code>{`<?php
abstract class Shape {
    abstract public function area();
    abstract public function perimeter();
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($radius) {
        $this->radius = $radius;
    }
    
    public function area() {
        return pi() * pow($this->radius, 2);
    }
    
    public function perimeter() {
        return 2 * pi() * $this->radius;
    }
}

class Rectangle extends Shape {
    private $length;
    private $width;
    
    public function __construct($length, $width) {
        $this->length = $length;
        $this->width = $width;
    }
    
    public function area() {
        return $this->length * $this->width;
    }
    
    public function perimeter() {
        return 2 * ($this->length + $this->width);
    }
}

$circle = new Circle(5);
echo "Circle Area: " . $circle->area() . "\\n";
echo "Circle Perimeter: " . $circle->perimeter() . "\\n";

$rectangle = new Rectangle(4, 6);
echo "Rectangle Area: " . $rectangle->area() . "\\n";
echo "Rectangle Perimeter: " . $rectangle->perimeter() . "\\n";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Circle Area: 78.539816339745<br />
            Circle Perimeter: 31.415926535898<br />
            Rectangle Area: 24<br />
            Rectangle Perimeter: 20
          </div>
        </div>

        {/* Program 44 */}
        <div className="program-card">
          <h2 className="program-title">44. PHP program based on the encapsulation</h2>
          <pre><code>{`<?php
class BankAccount {
    private $accountNumber;
    private $balance;
    
    public function __construct($accountNumber, $initialBalance = 0) {
        $this->accountNumber = $accountNumber;
        $this->balance = $initialBalance;
    }
    
    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
            return true;
        }
        return false;
    }
    
    public function withdraw($amount) {
        if ($amount > 0 && $amount <= $this->balance) {
            $this->balance -= $amount;
            return true;
        }
        return false;
    }
    
    public function getBalance() {
        return $this->balance;
    }
    
    public function getAccountNumber() {
        return $this->accountNumber;
    }
}

$account = new BankAccount("123456789", 1000);
echo "Account Number: " . $account->getAccountNumber() . "\\n";
echo "Initial Balance: " . $account->getBalance() . "\\n";

$account->deposit(500);
echo "After deposit: " . $account->getBalance() . "\\n";

$account->withdraw(200);
echo "After withdrawal: " . $account->getBalance() . "\\n";
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Account Number: 123456789<br />
            Initial Balance: 1000<br />
            After deposit: 1500<br />
            After withdrawal: 1300
          </div>
        </div>

        {/* Program 45 */}
        <div className="program-card">
          <h2 className="program-title">45. PHP program for OOPS</h2>
          <pre><code>{`<?php
// Complete OOP example with all concepts
class Person {
    protected $name;
    protected $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function introduce() {
        echo "Hello, my name is {$this->name} and I am {$this->age} years old.\\n";
    }
}

class Student extends Person {
    private $studentId;
    private $courses = array();
    
    public function __construct($name, $age, $studentId) {
        parent::__construct($name, $age);
        $this->studentId = $studentId;
    }
    
    public function addCourse($course) {
        $this->courses[] = $course;
    }
    
    public function getCourses() {
        return $this->courses;
    }
    
    public function introduce() {
        parent::introduce();
        echo "I am a student with ID: {$this->studentId}\\n";
    }
}

interface WorkerInterface {
    public function work();
}

trait LoggingTrait {
    public function log($message) {
        echo "Log: $message\\n";
    }
}

class Teacher extends Person implements WorkerInterface {
    use LoggingTrait;
    
    private $subject;
    
    public function __construct($name, $age, $subject) {
        parent::__construct($name, $age);
        $this->subject = $subject;
    }
    
    public function work() {
        echo "{$this->name} is teaching {$this->subject}\\n";
    }
    
    public function introduce() {
        parent::introduce();
        echo "I teach {$this->subject}\\n";
    }
}

// Create objects and demonstrate OOP concepts
$student = new Student("Alice", 20, "S12345");
$student->addCourse("Math");
$student->addCourse("Physics");
$student->introduce();
echo "Courses: " . implode(", ", $student->getCourses()) . "\\n";

$teacher = new Teacher("Bob", 35, "Computer Science");
$teacher->introduce();
$teacher->work();
$teacher->log("Teacher created");
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Hello, my name is Alice and I am 20 years old.<br />
            I am a student with ID: S12345<br />
            Courses: Math, Physics<br />
            Hello, my name is Bob and I am 35 years old.<br />
            I teach Computer Science<br />
            Bob is teaching Computer Science<br />
            Log: Teacher created
          </div>
        </div>

        {/* Program 46 */}
        <div className="program-card">
          <h2 className="program-title">46. PHP program to swap two variables without third variable</h2>
          <pre><code>{`<?php
$a = 5;
$b = 10;

echo "Before swap: a = $a, b = $b\\n";

$a = $a + $b;
$b = $a - $b;
$a = $a - $b;

echo "After swap: a = $a, b = $b";

// Alternative method using XOR
$a = $a ^ $b;
$b = $a ^ $b;
$a = $a ^ $b;
?>`}</code></pre>
          <div className="output">
            <div className="output-title">Output:</div>
            Before swap: a = 5, b = 10<br />
            After swap: a = 10, b = 5
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white py-4 mt-4 rounded">
        <div className="container text-center">
          <p>PHP Programming Solutions &copy; 2023 | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default PhpPrograms;