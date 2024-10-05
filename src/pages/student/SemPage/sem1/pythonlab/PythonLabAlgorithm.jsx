import React from 'react';
import alg1 from "../pythonlab/alg1.txt";
import alg2 from "../pythonlab/alg2.txt";
import alg3 from "../pythonlab/alg3.txt";
import alg4 from "../pythonlab/alg4.txt";
import alg5 from "../pythonlab/alg5.txt";
import alg6 from "../pythonlab/alg6.txt";
import alg7 from "../pythonlab/alg7.txt";
import alg8 from "../pythonlab/alg8.txt";
import alg9 from "../pythonlab/alg9.txt";
import alg10 from "../pythonlab/alg10.txt";
import alg11 from "../pythonlab/alg11.txt";
import alg12 from "../pythonlab/alg12.txt";
import alg13 from "../pythonlab/alg13.txt";
import alg14 from "../pythonlab/alg14.txt";
import alg15 from "../pythonlab/alg15.txt";
import alg16 from "../pythonlab/alg16.txt";
import alg17 from "../pythonlab/alg17.txt";
import alg18 from "../pythonlab/alg18.txt";

import AlgorithmTable from '../../AlgorithmTable';

const PythonLabAlgorithm = () => {
    const algorithms = [
        { id: '1', title: '1. Simple desktop calculator using Python. Only the five basic arithmetic operators.', file: alg1 },
        { id: '2', title: '2. Create, concatenate, and print a string and access a sub-string from a given string.', file: alg2 },
        { id: '3', title: '3. Familiarize time and date in various formats (Eg. “Thu Jul 11 10:26:23 IST 2024”).', file: alg3 },
        { id: '4', title: '4. Write a program to create, append, and remove lists in Python using NumPy.', file: alg4 },
        { id: '5', title: '5. Program to find the largest of three numbers.', file: alg5 },
        { id: '6', title: '6. Convert temperature values back and forth between Celsius (c), and Fahrenheit (f). [Formula: c/5 = f-32/9]', file: alg6 },
        { id: '7', title: '7. Program to construct patterns of stars (*), using a nested for loop.', file: alg7 },
        { id: '8', title: '8. A program that prints prime numbers less than N.', file: alg8 },
        { id: '9', title: '9. Program to find the factorial of a number using Recursion.', file: alg9 },
        { id: '10', title: '10. Recursive function to add two positive numbers.', file: alg10 },
        { id: '11', title: '11. Recursive function to multiply two positive numbers.', file: alg11 },
        { id: '12', title: '12. Recursive function to find the greatest common divisor of two positive numbers.', file: alg12 },
        { id: '13', title: '13. A program that accepts the lengths of three sides of a triangle as inputs. The program should output whether or not the triangle is a right triangle (Recall from the Pythagorean Theorem that in a right triangle, the square of one side equals the sum of the squares of the other two sides). Implement using functions.', file: alg13 },
        { id: '14', title: '14. Program to define a module to find Fibonacci Numbers and import the module to another program.', file: alg14 },
        { id: '15', title: '15. Program to check whether the given number is a valid mobile number or not using functions. Rules: 1. Every number should contain exactly 10 digits. 2. The first digit should be 7 or 8 or 9', file: alg15 },
        { id: '16', title: '16. Input two lists from the user. Merge these lists into a third list such that in the merged list, all even numbers occur first followed by odd numbers. Both the even numbers and odd numbers should be in sorted order.', file: alg16 },
        { id: '17', title: '17. Write a program to play a sticks game in which there are 16 sticks. Two players take turns to play the game. Each player picks one set of sticks (needn’t be adjacent) during his turn. A set contains 1, 2, or 3 sticks. The player who takes the last stick is the loser. The number of sticks in the set is to be input.', file: alg17 },
        { id: '18', title: '18. Suppose you\'re on a game show, and you are given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what is behind the doors, opens another door, say No. 3, which has a goat. He then asks, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?', file: alg18 }
    ];
  
    return (
        <div>
            <AlgorithmTable programs={algorithms} />
        </div>
    );
};

export default PythonLabAlgorithm;
