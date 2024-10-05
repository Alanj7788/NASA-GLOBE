import React from 'react';
import file1 from "../shell/file1.txt";
import file2 from "../shell/file2.txt";
import file3 from "../shell/file3.txt";
import file4 from "../shell/file4.txt";
import file5 from "../shell/file5.txt";
import file6 from "../shell/file6.txt";
import file7 from "../shell/file7.txt";
import file8 from "../shell/file8.txt";
import file9 from "../shell/file9.txt";
import file10 from "../shell/file10.txt";
import file11 from "../shell/file11.txt";
import file12 from "../shell/file12.txt";
import file13 from "../shell/file13.txt";
import file14 from "../shell/file14.txt";
import file15 from "../shell/file15.txt";

import ProgramTable from '../../ProgramTable';

const ShellLab = () => {
    const programs = [
        { id: '1', title: '1. Write a shell program to check whether the given number is odd or even.', file: file1 },
        { id: '2', title: '2. Write a shell program to swap two integers.', file: file2 },
        { id: '3', title: '3. Write a shell program to find the factorial of a number using a for loop.', file: file3 },
        { id: '4', title: '4. Write a shell program to find the sum of the first n numbers using a while loop.', file: file4 },
        { id: '5', title: '5. Write a shell program to implement a basic calculator.', file: file5 },
        { id: '6', title: '6. Write a shell script to convert temperature from Celsius to Fahrenheit.', file: file6 },
        { id: '7', title: '7. Write a shell script to find the largest among the three numbers inputted.', file: file7 },
        { id: '8', title: '8. Write a shell script to find the gcd of two numbers.', file: file8 },
        { id: '9', title: '9. Write a shell script to generate the Fibonacci series up to n.', file: file9 },
        { id: '10', title: '10. Write a shell script to check whether a given number is prime or not.', file: file10 },
        { id: '11', title: '11. Write a shell script to find the average of n numbers.', file: file11 },
        { id: '12', title: '12. Write a shell script to print given three alphabets in alphabetical order. (Input should be taken from the command line.)', file: file12 },
        { id: '13', title: '13. Write a shell script to print the given three strings in dictionary order.', file: file13 },
        { id: '14', title: '14. Write a shell script to perform the following tasks according to the user choice menu:\n- Area of Circle\n- Circumference of Circle\n- Area of Rectangle\n- Area of Square', file: file14 },
        { id: '15', title: '15. Write a shell script to do the following in order:\n- Check whether a directory by the name “bash” exists\n- If not, create one.\n- List all the directories.', file: file15 }
    ];

    return (
        <div>
            <ProgramTable programs={programs} />
        </div>
    );
};

export default ShellLab;
