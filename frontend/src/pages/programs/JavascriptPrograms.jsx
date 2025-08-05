import React from 'react';

function JavaScriptPrograms() {
  return (
    <div className="container py-4">
      <style>
        {`
          pre {
            background-color: #f5f5f5;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            border: 1px solid #ddd;
          }
          code {
            font-family: 'Courier New', monospace;
            color: #333;
          }
          .program-card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .program-card h3 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.5rem;
            margin-top: 0;
          }
          .output {
            background-color: #f8f9fa;
            border-left: 4px solid #28a745;
            padding: 1rem;
            margin-top: 1rem;
            font-family: 'Courier New', monospace;
          }
          .output-title {
            color: #28a745;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }
          .nav-pills .nav-link.active {
            background-color: #3498db;
          }
          .nav-pills .nav-link {
            color: #2c3e50;
          }
          .category-title {
            background-color: #3498db;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            margin: 1.5rem 0 1rem;
          }
        `}
      </style>

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">JavaScript Programming Solutions</h1>
        <p className="lead">Complete solutions for all JavaScript programming questions with outputs</p>
      </header>

      <div className="row">
        <main className="col">
          {/* Basic Programs Section */}
          <section id="basic-programs">
            <h2 className="category-title">Basic Programs</h2>

            <div className="program-card">
              <h3>1. JavaScript Program to Swap Two Numbers</h3>
              <p>This program swaps the values of two variables.</p>
              <pre><code>{`// Using temporary variable
let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(\`After swapping: a = \${a}, b = \${b}\`);

// Without temporary variable (ES6 destructuring)
[a, b] = [b, a];
console.log(\`After swapping: a = \${a}, b = \${b}\`);`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>After swapping: a = 10, b = 5</div>
                <div>After swapping: a = 5, b = 10</div>
              </div>
            </div>

            <div className="program-card">
              <h3>2. JavaScript Program to Check Whether a Number is Even or Odd</h3>
              <pre><code>{`function checkEvenOdd(num) {
  if(num % 2 === 0) {
    return \`\${num} is Even\`;
  } else {
    return \`\${num} is Odd\`;
  }
}

console.log(checkEvenOdd(7));  // 7 is Odd
console.log(checkEvenOdd(12)); // 12 is Even`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>7 is Odd</div>
                <div>12 is Even</div>
              </div>
            </div>

            <div className="program-card">
              <h3>3. JavaScript Program to Check Whether an Alphabet is Vowel or Consonant</h3>
              <pre><code>{`function checkVowelConsonant(char) {
  // Convert to lowercase for case-insensitive check
  char = char.toLowerCase();
  
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return \`\${char} is a Vowel\`;
  } else if(char >= 'a' && char <= 'z') {
    return \`\${char} is a Consonant\`;
  } else {
    return \`\${char} is not an alphabet\`;
  }
}

console.log(checkVowelConsonant('A')); // a is a Vowel
console.log(checkVowelConsonant('b')); // b is a Consonant
console.log(checkVowelConsonant('1')); // 1 is not an alphabet`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>a is a Vowel</div>
                <div>b is a Consonant</div>
                <div>1 is not an alphabet</div>
              </div>
            </div>

            <div className="program-card">
              <h3>4. JavaScript Program to Find the Largest Among Three Numbers</h3>
              <pre><code>{`function findLargest(a, b, c) {
  if(a >= b && a >= c) {
    return a;
  } else if(b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Using Math.max() alternative
function findLargestSimple(...nums) {
  return Math.max(...nums);
}

console.log(findLargest(5, 10, 3)); // 10
console.log(findLargestSimple(5, 10, 3, 15, 2)); // 15`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>10</div>
                <div>15</div>
              </div>
            </div>

            <div className="program-card">
              <h3>5. JavaScript Program to Check Leap Year</h3>
              <pre><code>{`function isLeapYear(year) {
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return \`\${year} is a leap year\`;
  } else {
    return \`\${year} is not a leap year\`;
  }
}

console.log(isLeapYear(2020)); // 2020 is a leap year
console.log(isLeapYear(1900)); // 1900 is not a leap year
console.log(isLeapYear(2000)); // 2000 is a leap year`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>2020 is a leap year</div>
                <div>1900 is not a leap year</div>
                <div>2000 is a leap year</div>
              </div>
            </div>

            <div className="program-card">
              <h3>6. JavaScript Program to Check Whether a Number is Positive or Negative</h3>
              <pre><code>{`function checkPositiveNegative(num) {
  if(num > 0) {
    return \`\${num} is Positive\`;
  } else if(num < 0) {
    return \`\${num} is Negative\`;
  } else {
    return "The number is Zero";
  }
}

console.log(checkPositiveNegative(5));  // 5 is Positive
console.log(checkPositiveNegative(-3)); // -3 is Negative
console.log(checkPositiveNegative(0));  // The number is Zero`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>5 is Positive</div>
                <div>-3 is Negative</div>
                <div>The number is Zero</div>
              </div>
            </div>

            <div className="program-card">
              <h3>7. JavaScript Program to Check Whether a Character is Alphabet or Not</h3>
              <pre><code>{`function isAlphabet(char) {
  if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    return \`\${char} is an alphabet\`;
  } else {
    return \`\${char} is not an alphabet\`;
  }
}

// Using regular expression
function isAlphabetRegex(char) {
  return /^[a-zA-Z]$/.test(char) 
    ? \`\${char} is an alphabet\` 
    : \`\${char} is not an alphabet\`;
}

console.log(isAlphabet('A'));       // A is an alphabet
console.log(isAlphabet('5'));       // 5 is not an alphabet
console.log(isAlphabetRegex('z'));  // z is an alphabet
console.log(isAlphabetRegex('@'));  // @ is not an alphabet`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>A is an alphabet</div>
                <div>5 is not an alphabet</div>
                <div>z is an alphabet</div>
                <div>@ is not an alphabet</div>
              </div>
            </div>

            <div className="program-card">
              <h3>8. JavaScript Program to Calculate the Sum of Natural Numbers</h3>
              <pre><code>{`// Using loop
function sumNaturalNumbers(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Using mathematical formula
function sumNaturalNumbersFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumNaturalNumbers(10));         // 55
console.log(sumNaturalNumbersFormula(10));  // 55`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>55</div>
                <div>55</div>
              </div>
            </div>

            <div className="program-card">
              <h3>9. JavaScript Program to Find Factorial of a Number</h3>
              <pre><code>{`// Using iterative approach
function factorial(n) {
  let result = 1;
  for(let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Using recursive approach
function factorialRecursive(n) {
  if(n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorial(5));          // 120
console.log(factorialRecursive(5)); // 120`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>120</div>
                <div>120</div>
              </div>
            </div>

            <div className="program-card">
              <h3>10. Program to Generate Multiplication Table</h3>
              <pre><code>{`function multiplicationTable(number, limit = 10) {
  console.log(\`Multiplication Table for \${number}\`);
  for(let i = 1; i <= limit; i++) {
    console.log(\`\${number} x \${i} = \${number * i}\`);
  }
}

multiplicationTable(5);
/* Output:
Multiplication Table for 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/

// For HTML output version
function generateTableHTML(number, limit = 10) {
  let table = '<table border="1"><tr><th colspan="2">Multiplication Table for ' + number + '</th></tr>';
  for(let i = 1; i <= limit; i++) {
    table += \`<tr><td>\${number} x \${i}</td><td>\${number * i}</td></tr>\`;
  }
  table += '</table>';
  return table;
}`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>Multiplication Table for 5</div>
                <div>5 x 1 = 5</div>
                <div>5 x 2 = 10</div>
                <div>5 x 3 = 15</div>
                <div>...</div>
                <div>5 x 10 = 50</div>
              </div>
            </div>

            <div className="program-card">
              <h3>11. JavaScript Program to Display Fibonacci Series</h3>
              <pre><code>{`// Generate Fibonacci series up to n terms
function fibonacciSeries(n) {
  let series = [0, 1];
  
  if(n === 1) return [0];
  if(n === 2) return series;
  
  for(let i = 2; i < n; i++) {
    series.push(series[i-1] + series[i-2]);
  }
  
  return series;
}

// Recursive approach for nth Fibonacci number
function fibonacciRecursive(n) {
  if(n <= 1) return n;
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciRecursive(10)); // 55`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</div>
                <div>55</div>
              </div>
            </div>
          </section>

          {/* Number Programs Section */}
          <section id="number-programs">
            <h2 className="category-title">Number Programs</h2>

            <div className="program-card">
              <h3>12. JavaScript Program to Find LCM of two Numbers</h3>
              <pre><code>{`// Function to find GCD using Euclidean algorithm
function gcd(a, b) {
  if(b === 0) return a;
  return gcd(b, a % b);
}

// LCM formula: (a * b) / GCD(a, b)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15)); // 60
console.log(lcm(5, 7));   // 35`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>60</div>
                <div>35</div>
              </div>
            </div>

            <div className="program-card">
              <h3>13. JavaScript Program to Display Alphabets (A to Z) using loop</h3>
              <pre><code>{`// Display uppercase A-Z
function displayAlphabets() {
  let result = '';
  for(let i = 65; i <= 90; i++) {
    result += String.fromCharCode(i) + ' ';
  }
  return result.trim();
}

// Display lowercase a-z
function displayLowercaseAlphabets() {
  let result = '';
  for(let i = 97; i <= 122; i++) {
    result += String.fromCharCode(i) + ' ';
  }
  return result.trim();
}

console.log(displayAlphabets());
console.log(displayLowercaseAlphabets());`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
                <div>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
              </div>
            </div>

            <div className="program-card">
              <h3>14. JavaScript Program to Count Number of Digits in an Integer</h3>
              <pre><code>{`function countDigits(num) {
  // Convert to string and count characters
  return Math.abs(num).toString().length;
}

// Without converting to string
function countDigitsMath(num) {
  num = Math.abs(num);
  let count = 0;
  
  do {
    count++;
    num = Math.floor(num / 10);
  } while(num > 0);
  
  return count;
}

console.log(countDigits(12345));      // 5
console.log(countDigitsMath(-9876));  // 4
console.log(countDigits(0));          // 1`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>5</div>
                <div>4</div>
                <div>1</div>
              </div>
            </div>

            <div className="program-card">
              <h3>15. JavaScript Program to Reverse a Number</h3>
              <pre><code>{`function reverseNumber(num) {
  let reversed = 0;
  let isNegative = num < 0;
  num = Math.abs(num);
  
  while(num > 0) {
    reversed = reversed * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  
  return isNegative ? -reversed : reversed;
}

// Using string conversion
function reverseNumberString(num) {
  const reversed = Math.abs(num).toString().split('').reverse().join('');
  return num < 0 ? -reversed : +reversed;
}

console.log(reverseNumber(12345));      // 54321
console.log(reverseNumber(-6789));      // -9876
console.log(reverseNumberString(12345)); // 54321`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>54321</div>
                <div>-9876</div>
                <div>54321</div>
              </div>
            </div>

            <div className="program-card">
              <h3>16. JavaScript Program to Calculate the Power of a Number</h3>
              <pre><code>{`// Using Math.pow()
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Using exponentiation operator **
function powerOperator(base, exponent) {
  return base ** exponent;
}

// Using loop
function powerLoop(base, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2, 3));        // 8
console.log(powerOperator(2, 3)); // 8
console.log(powerLoop(2, 3));     // 8`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>8</div>
                <div>8</div>
                <div>8</div>
              </div>
            </div>

            <div className="program-card">
              <h3>17. JavaScript Program to Check Palindrome</h3>
              <pre><code>{`// Check if a number is palindrome
function isNumberPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

// Check if a string is palindrome
function isStringPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isNumberPalindrome(121));      // true
console.log(isNumberPalindrome(123));      // false
console.log(isStringPalindrome("Madam"));  // true
console.log(isStringPalindrome("Hello"));  // false`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>true</div>
                <div>false</div>
                <div>true</div>
                <div>false</div>
              </div>
            </div>

            <div className="program-card">
              <h3>18. JavaScript Program to Check Whether a Number is Prime or Not</h3>
              <pre><code>{`function isPrime(num) {
  if(num <= 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  
  for(let i = 3; i <= Math.sqrt(num); i += 2) {
    if(num % i === 0) return false;
  }
  
  return true;
}

// Optimized version
function isPrimeOptimized(num) {
  if(num <= 1) return false;
  if(num <= 3) return true;
  
  if(num % 2 === 0 || num % 3 === 0) return false;
  
  for(let i = 5; i * i <= num; i += 6) {
    if(num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
}

console.log(isPrime(7));          // true
console.log(isPrime(10));         // false
console.log(isPrimeOptimized(7)); // true`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>true</div>
                <div>false</div>
                <div>true</div>
              </div>
            </div>

            <div className="program-card">
              <h3>19. JavaScript Program to Display Prime Numbers Between Two Intervals</h3>
              <pre><code>{`function displayPrimesBetween(start, end) {
  const primes = [];
  
  for(let num = start; num <= end; num++) {
    if(isPrime(num)) {
      primes.push(num);
    }
  }
  
  return primes;
}

// Using the isPrime function from previous example
console.log(displayPrimesBetween(10, 50));
// [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>20. JavaScript Program to Check Armstrong Number</h3>
              <pre><code>{`function isArmstrongNumber(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  let sum = 0;
  
  for(const digit of digits) {
    sum += Math.pow(parseInt(digit), power);
  }
  
  return sum === num;
}

console.log(isArmstrongNumber(153));  // true (1³ + 5³ + 3³ = 153)
console.log(isArmstrongNumber(370));  // true
console.log(isArmstrongNumber(123));  // false`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>true</div>
                <div>true</div>
                <div>false</div>
              </div>
            </div>

            <div className="program-card">
              <h3>21. JavaScript Program to Display Armstrong Number Between Two Intervals</h3>
              <pre><code>{`function displayArmstrongNumbers(start, end) {
  const armstrongNumbers = [];
  
  for(let num = start; num <= end; num++) {
    if(isArmstrongNumber(num)) {
      armstrongNumbers.push(num);
    }
  }
  
  return armstrongNumbers;
}

// Using the isArmstrongNumber function from previous example
console.log(displayArmstrongNumbers(100, 1000));
// [153, 370, 371, 407]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[153, 370, 371, 407]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>22. JavaScript Program to Display Prime Numbers Between Intervals Using Function</h3>
              <pre><code>{`// This is similar to example 19, but demonstrating function usage
function getPrimesInRange(start, end, callback) {
  const primes = [];
  
  for(let num = start; num <= end; num++) {
    if(isPrime(num)) {
      primes.push(num);
    }
  }
  
  if(callback && typeof callback === 'function') {
    callback(primes);
  }
  
  return primes;
}

// Usage
getPrimesInRange(10, 50, (primes) => {
  console.log('Primes between 10 and 50:', primes);
});`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>Primes between 10 and 50: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>23. JavaScript Program to Display Armstrong Numbers Between Intervals Using Function</h3>
              <pre><code>{`// Similar to example 21 but with callback function
function getArmstrongNumbersInRange(start, end, callback) {
  const armstrongNumbers = [];
  
  for(let num = start; num <= end; num++) {
    if(isArmstrongNumber(num)) {
      armstrongNumbers.push(num);
    }
  }
  
  if(callback && typeof callback === 'function') {
    callback(armstrongNumbers);
  }
  
  return armstrongNumbers;
}

// Usage
getArmstrongNumbersInRange(100, 1000, (numbers) => {
  console.log('Armstrong numbers between 100 and 1000:', numbers);
});`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>Armstrong numbers between 100 and 1000: [153, 370, 371, 407]</div>
              </div>
            </div>
          </section>

          {/* String Programs Section */}
          <section id="string-programs">
            <h2 className="category-title">String Programs</h2>

            <div className="program-card">
              <h3>24. JavaScript Program to Display Factors of a Number</h3>
              <pre><code>{`function displayFactors(num) {
  const factors = [];
  
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
      factors.push(i);
    }
  }
  
  return factors;
}

// Optimized version
function displayFactorsOptimized(num) {
  const factors = [];
  
  for(let i = 1; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      factors.push(i);
      if(i !== num / i) {
        factors.push(num / i);
      }
    }
  }
  
  // Sort the factors
  return factors.sort((a, b) => a - b);
}

console.log(displayFactors(12)); // [1, 2, 3, 4, 6, 12]
console.log(displayFactorsOptimized(12)); // [1, 2, 3, 4, 6, 12]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[1, 2, 3, 4, 6, 12]</div>
                <div>[1, 2, 3, 4, 6, 12]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>25. JavaScript Program to split the string</h3>
              <pre><code>{`// Split string by space
function splitStringBySpace(str) {
  return str.split(' ');
}

// Split string by any delimiter
function splitString(str, delimiter) {
  return str.split(delimiter);
}

// Split string into characters
function splitIntoChars(str) {
  return str.split('');
}

console.log(splitStringBySpace("Hello World")); // ["Hello", "World"]
console.log(splitString("apple,orange,banana", ",")); // ["apple", "orange", "banana"]
console.log(splitIntoChars("JavaScript")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>["Hello", "World"]</div>
                <div>["apple", "orange", "banana"]</div>
                <div>["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>26. JavaScript Program to Find the Frequency of Character in a String</h3>
              <pre><code>{`function characterFrequency(str, char) {
  let count = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  
  return count;
}

// Using reduce
function characterFrequencyReduce(str, char) {
  return [...str].reduce((count, c) => 
    c.toLowerCase() === char.toLowerCase() ? count + 1 : count, 0);
}

console.log(characterFrequency("Hello World", "l")); // 3
console.log(characterFrequencyReduce("Programming", "m")); // 2`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>3</div>
                <div>2</div>
              </div>
            </div>

            <div className="program-card">
              <h3>27. JavaScript Program to Count the Number of Vowels and Consonants in a Sentence</h3>
              <pre><code>{`function countVowelsConsonants(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;
  
  const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
  
  for(const char of cleanStr) {
    if(vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  
  return { vowels: vowelCount, consonants: consonantCount };
}

// Using regular expressions
function countVowelsConsonantsRegex(str) {
  const vowelCount = (str.match(/[aeiou]/gi) || []).length;
  const consonantCount = (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
  return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsConsonants("Hello World!"));
// { vowels: 3, consonants: 7 }
console.log(countVowelsConsonantsRegex("JavaScript is awesome"));
// { vowels: 8, consonants: 10 }`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>{`{ vowels: 3, consonants: 7 }`}</div>
                <div>{`{ vowels: 8, consonants: 10 }`}</div>
              </div>
            </div>

            <div className="program-card">
              <h3>28. JavaScript Program to determine whether two strings are the anagram</h3>
              <pre><code>{`function areAnagrams(str1, str2) {
  // Remove non-alphanumeric chars and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check length
  if(cleanStr1.length !== cleanStr2.length) return false;
  
  // Sort and compare
  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

// Using character count
function areAnagramsCharCount(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  if(cleanStr1.length !== cleanStr2.length) return false;
  
  const charCount = {};
  
  for(const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for(const char of cleanStr2) {
    if(!charCount[char]) return false;
    charCount[char]--;
  }
  
  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagramsCharCount("rail safety", "fairy tales")); // true
console.log(areAnagrams("hello", "world")); // false`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>true</div>
                <div>true</div>
                <div>false</div>
              </div>
            </div>

            <div className="program-card">
              <h3>29. JavaScript Program to replace lower-case characters with upper-case and vice-versa</h3>
              <pre><code>{`function swapCase(str) {
  return str.split('').map(char => {
    if(char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

// Using regular expression
function swapCaseRegex(str) {
  return str.replace(/[a-zA-Z]/g, char => 
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
}

console.log(swapCase("Hello World")); // "hELLO wORLD"
console.log(swapCaseRegex("JavaScript")); // "jAVAsCRIPT"`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>"hELLO wORLD"</div>
                <div>"jAVAsCRIPT"</div>
              </div>
            </div>

            <div className="program-card">
              <h3>30. JavaScript Program to divide a string in 'N' equal parts.</h3>
              <pre><code>{`function divideString(str, n) {
  if(str.length % n !== 0) {
    return "String cannot be divided into equal parts";
  }
  
  const partLength = str.length / n;
  const parts = [];
  
  for(let i = 0; i < str.length; i += partLength) {
    parts.push(str.substr(i, partLength));
  }
  
  return parts;
}

console.log(divideString("abcdefghij", 2)); // ["abcde", "fghij"]
console.log(divideString("JavaScript", 3)); // ["Jav", "aSc", "rip"]
console.log(divideString("Hello", 3)); // "String cannot be divided into equal parts"`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>["abcde", "fghij"]</div>
                <div>["Jav", "aSc", "rip"]</div>
                <div>String cannot be divided into equal parts</div>
              </div>
            </div>

            <div className="program-card">
              <h3>31. JavaScript program to swap two variables without third variable</h3>
              <pre><code>{`// Using arithmetic operators
let a = 5;
let b = 10;

a = a + b;  // a becomes 15
b = a - b;  // b becomes 5
a = a - b;  // a becomes 10

console.log(\`a: \${a}, b: \${b}\`); // a: 10, b: 5

// Using destructuring assignment (ES6)
let x = 15;
let y = 20;

[x, y] = [y, x];

console.log(\`x: \${x}, y: \${y}\`); // x: 20, y: 15`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>a: 10, b: 5</div>
                <div>x: 20, y: 15</div>
              </div>
            </div>
          </section>

          {/* Array Programs Section */}
          <section id="array-programs">
            <h2 className="category-title">Array Programs</h2>

            <div className="program-card">
              <h3>32. JavaScript Program to filter the even numbers in an Array</h3>
              <pre><code>{`function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Using reduce
function filterEvenNumbersReduce(arr) {
  return arr.reduce((evens, num) => {
    if(num % 2 === 0) evens.push(num);
    return evens;
  }, []);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbersReduce([10, 15, 20, 25])); // [10, 20]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[2, 4, 6]</div>
                <div>[10, 20]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>33. JavaScript Program to Concatenate Two Arrays</h3>
              <pre><code>{`// Using concat method
function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Using spread operator
function concatArraysSpread(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Using push (modifies first array)
function concatArraysPush(arr1, arr2) {
  arr1.push(...arr2);
  return arr1;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(concatArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]
console.log(concatArraysSpread(array1, array2)); // [1, 2, 3, 4, 5, 6]
console.log(concatArraysPush([...array1], array2)); // [1, 2, 3, 4, 5, 6]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[1, 2, 3, 4, 5, 6]</div>
                <div>[1, 2, 3, 4, 5, 6]</div>
                <div>[1, 2, 3, 4, 5, 6]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>34. JavaScript Program to find the positive and negative count in an Array</h3>
              <pre><code>{`function countPositivesNegatives(arr) {
  let positive = 0;
  let negative = 0;
  
  for(const num of arr) {
    if(num > 0) {
      positive++;
    } else if(num < 0) {
      negative++;
    }
  }
  
  return { positive, negative };
}

// Using reduce
function countPositivesNegativesReduce(arr) {
  return arr.reduce((counts, num) => {
    if(num > 0) counts.positive++;
    else if(num < 0) counts.negative++;
    return counts;
  }, { positive: 0, negative: 0 });
}

console.log(countPositivesNegatives([1, -2, 3, -4, 5, 0]));
// { positive: 3, negative: 2 }
console.log(countPositivesNegativesReduce([-1, -2, 0, 4, 5]));
// { positive: 2, negative: 2 }`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>{`{ positive: 3, negative: 2 }`}</div>
                <div>{`{ positive: 2, negative: 2 }`}</div>
              </div>
            </div>

            <div className="program-card">
              <h3>35. Reverse an Array</h3>
              <pre><code>{`// Using reverse method
function reverseArray(arr) {
  return [...arr].reverse();
}

// Without using reverse method
function reverseArrayManual(arr) {
  const reversed = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Using swap in place
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr;
}

const originalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(originalArray)); // [5, 4, 3, 2, 1]
console.log(reverseArrayManual(originalArray)); // [5, 4, 3, 2, 1]
console.log(reverseArrayInPlace([...originalArray])); // [5, 4, 3, 2, 1]`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[5, 4, 3, 2, 1]</div>
                <div>[5, 4, 3, 2, 1]</div>
                <div>[5, 4, 3, 2, 1]</div>
              </div>
            </div>

            <div className="program-card">
              <h3>36. Program to print the duplicate elements of an Array</h3>
              <pre><code>{`function findDuplicates(arr) {
  const duplicates = [];
  const seen = {};
  
  for(const item of arr) {
    if(seen[item] && !duplicates.includes(item)) {
      duplicates.push(item);
    } else {
      seen[item] = true;
    }
  }
  
  return duplicates;
}

// Using filter and indexOf
function findDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 4, 7, 4])); // [2, 4]
console.log(findDuplicatesFilter(['a', 'b', 'a', 'c', 'b', 'd'])); // ['a', 'b']`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>[2, 4]</div>
                <div>['a', 'b']</div>
              </div>
            </div>

            <div className="program-card">
              <h3>37. JavaScript Program to Find Largest Element of an Array</h3>
              <pre><code>{`// Using Math.max with spread operator
function findLargestElement(arr) {
  return Math.max(...arr);
}

// Using reduce
function findLargestElementReduce(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

// Using loop
function findLargestElementLoop(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargestElement([10, 5, 20, 8, 15])); // 20
console.log(findLargestElementReduce([-1, -5, -3, -2])); // -1
console.log(findLargestElementLoop([100, 200, 150, 300])); // 300`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>20</div>
                <div>-1</div>
                <div>300</div>
              </div>
            </div>

            <div className="program-card">
              <h3>38. JavaScript Program to Calculate Average Using an Array</h3>
              <pre><code>{`// Using reduce
function calculateAverage(arr) {
  if(arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

// Using loop
function calculateAverageLoop(arr) {
  if(arr.length === 0) return 0;
  
  let sum = 0;
  for(const num of arr) {
    sum += num;
  }
  
  return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
console.log(calculateAverageLoop([5, 10, 15])); // 10
console.log(calculateAverage([])); // 0`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>30</div>
                <div>10</div>
                <div>0</div>
              </div>
            </div>
          </section>

          {/* Mathematical Programs Section */}
          <section id="mathematical-programs">
            <h2 className="category-title">Mathematical Programs</h2>

            <div className="program-card">
              <h3>39. JavaScript Program to Make a Simple Calculator Using switch...case</h3>
              <pre><code>{`function calculator(num1, num2, operator) {
  let result;
  
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    case '**':
      result = num1 ** num2;
      break;
    default:
      result = 'Invalid operator';
  }
  
  return result;
}

console.log(calculator(5, 3, '+'));  // 8
console.log(calculator(5, 3, '-'));  // 2
console.log(calculator(5, 3, '*'));  // 15
console.log(calculator(5, 3, '/'));  // 1.666...
console.log(calculator(5, 3, '%'));  // 2
console.log(calculator(2, 3, '**')); // 8
console.log(calculator(2, 3, 'x'));  // Invalid operator`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>8</div>
                <div>2</div>
                <div>15</div>
                <div>1.6666666666666667</div>
                <div>2</div>
                <div>8</div>
                <div>Invalid operator</div>
              </div>
            </div>

            <div className="program-card">
              <h3>40. JavaScript Program to Find the Sum of Natural Numbers using Recursion</h3>
              <pre><code>{`function sumNaturalRecursive(n) {
  if(n <= 1) {
    return n;
  }
  return n + sumNaturalRecursive(n - 1);
}

console.log(sumNaturalRecursive(5));  // 15 (5+4+3+2+1)
console.log(sumNaturalRecursive(10)); // 55`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>15</div>
                <div>55</div>
              </div>
            </div>

            <div className="program-card">
              <h3>41. JavaScript Program to Find Factorial of a Number Using Recursion</h3>
              <pre><code>{`function factorialRecursive(n) {
  if(n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));  // 120
console.log(factorialRecursive(7));  // 5040`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>120</div>
                <div>5040</div>
              </div>
            </div>
          </section>

          {/* Miscellaneous Programs Section */}
          <section id="miscellaneous">
            <h2 className="category-title">Miscellaneous Programs</h2>

            <div className="program-card">
              <h3>42. JavaScript Program to Get Current Date/Time</h3>
              <pre><code>{`function getCurrentDateTime() {
  const now = new Date();
  
  return {
    date: now.toDateString(),
    time: now.toTimeString(),
    localeDate: now.toLocaleDateString(),
    localeTime: now.toLocaleTimeString(),
    isoString: now.toISOString(),
    customFormat: \`\${now.getFullYear()}-\${(now.getMonth()+1).toString().padStart(2, '0')}-\${now.getDate().toString().padStart(2, '0')} \${now.getHours().toString().padStart(2, '0')}:\${now.getMinutes().toString().padStart(2, '0')}:\${now.getSeconds().toString().padStart(2, '0')}\`
  };
}

console.log(getCurrentDateTime());
/* Example output:
{
  date: "Wed May 25 2022",
  time: "14:30:45 GMT+0530 (India Standard Time)",
  localeDate: "5/25/2022",
  localeTime: "2:30:45 PM",
  isoString: "2022-05-25T09:00:45.000Z",
  customFormat: "2022-05-25 14:30:45"
}
*/`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>{`{
  date: "Wed May 25 2022",
  time: "14:30:45 GMT+0530 (India Standard Time)",
  localeDate: "5/25/2022",
  localeTime: "2:30:45 PM",
  isoString: "2022-05-25T09:00:45.000Z",
  customFormat: "2022-05-25 14:30:45"
}`}</div>
              </div>
            </div>

            <div className="program-card">
              <h3>43. JavaScript Program to count the total number of characters in a string</h3>
              <pre><code>{`function countCharacters(str) {
  return str.length;
}

// Excluding spaces
function countCharactersNoSpaces(str) {
  return str.replace(/\s/g, '').length;
}

console.log(countCharacters("Hello World")); // 11
console.log(countCharactersNoSpaces("Hello World")); // 10`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>11</div>
                <div>10</div>
              </div>
            </div>

            <div className="program-card">
              <h3>44. JavaScript Program to count the total number of punctuation characters exists in a String</h3>
              <pre><code>{`function countPunctuation(str) {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~]/g;
  const matches = str.match(punctuation);
  return matches ? matches.length : 0;
}

console.log(countPunctuation("Hello, World! How are you?")); // 3
console.log(countPunctuation("This is a test")); // 0`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>3</div>
                <div>0</div>
              </div>
            </div>

            <div className="program-card">
              <h3>45. Write a program ATM machine keeps on working till the condition equals to cancel</h3>
              <pre><code>{`function atmMachine() {
  let balance = 1000; // Initial balance
  let choice;
  
  do {
    choice = prompt(\`Current balance: \${balance}\\n\\n1. Withdraw\\n2. Deposit\\n3. Check Balance\\n4. Exit\\n\\nEnter your choice:\`);
    
    switch(choice) {
      case '1': // Withdraw
        const withdrawAmount = parseFloat(prompt('Enter amount to withdraw:'));
        if(isNaN(withdrawAmount)) {
          alert('Invalid amount');
        } else if(withdrawAmount > balance) {
          alert('Insufficient funds');
        } else {
          balance -= withdrawAmount;
          alert(\`Successfully withdrew \${withdrawAmount}. New balance: \${balance}\`);
        }
        break;
        
      case '2': // Deposit
        const depositAmount = parseFloat(prompt('Enter amount to deposit:'));
        if(isNaN(depositAmount) || depositAmount <= 0) {
          alert('Invalid amount');
        } else {
          balance += depositAmount;
          alert(\`Successfully deposited \${depositAmount}. New balance: \${balance}\`);
        }
        break;
        
      case '3': // Check Balance
        alert(\`Your current balance is: \${balance}\`);
        break;
        
      case '4': // Exit
        alert('Thank you for using our ATM. Goodbye!');
        break;
        
      case null: // User clicked cancel
        alert('Session cancelled');
        break;
        
      default:
        alert('Invalid choice. Please try again.');
    }
  } while(choice !== '4' && choice !== null);
}

// Note: This is for browser environment
// To run in Node.js, you would need to use a library like readline`}</code></pre>
              <div className="output">
                <div className="output-title">Output:</div>
                <div>This program simulates an ATM interface in the browser. The output depends on user interaction:</div>
                <ul>
                  <li>Displays current balance and menu options</li>
                  <li>Processes withdrawals and deposits</li>
                  <li>Shows balance when requested</li>
                  <li>Exits when user chooses option 4 or clicks cancel</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default JavaScriptPrograms;