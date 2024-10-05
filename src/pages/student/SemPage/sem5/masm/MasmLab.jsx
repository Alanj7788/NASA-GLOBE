import React from 'react';
import file1 from "../masm/file1.txt";
import file2 from "../masm/file2.txt";
import file3 from "../masm/file3.txt";
import file4 from "../masm/file4.txt";
import file5 from "../masm/file5.txt";
import file6 from "../masm/file6.txt";
import file7 from "../masm/file7.txt";
import file8 from "../masm/file8.txt";
import file9 from "../masm/file9.txt";
import file10 from "../masm/file10.txt";
import file11 from "../masm/file11.txt";
import file12 from "../masm/file12.txt";
import file13 from "../masm/file13.txt";
import file14 from "../masm/file14.txt";
import file15 from "../masm/file15.txt";
import file16 from "../masm/file16.txt";
import file17 from "../masm/file17.txt";
import file18 from "../masm/file18.txt";
import file19 from "../masm/file19.txt";
import file20 from "../masm/file20.txt";
import file21 from "../masm/file21.txt";
import file22 from "../masm/file22.txt";
import file23 from "../masm/file23.txt";

import ProgramTable from '../../ProgramTable';

const MasmLab = () => {
    const programs = [
        { id: '1', title: 'Hello Program', file: file1 },
        { id: '2', title: 'String Input and Output', file: file2 },
        { id: '3', title: 'String Input and Output (Using DOS Functions)', file: file3 },
        { id: '4', title: 'Palindrome Check', file: file4 },
        { id: '5', title: 'String Length Calculation', file: file5 },
        { id: '6', title: 'String Reversal using Stack', file: file6 },
        { id: '7', title: 'Print number', file: file7 },
        { id: '8', title: 'Number Input and Output', file: file8 },
        { id: '9', title: 'Even or Odd Check', file: file9 },
        { id: '10', title: 'Addition of Two Numbers', file: file10 },
        { id: '11', title: 'Multiplication of Two Numbers', file: file11 },
        { id: '12', title: 'Multiplication without Using MUL', file: file12 },
        { id: '13', title: 'Division of Two Numbers', file: file13 },
        { id: '14', title: 'Division without Using DIV', file: file14 },
        { id: '15', title: 'Factorization', file: file15 },
        { id: '16', title: 'Array Input and Output', file: file16 },
        { id: '17', title: 'Array Sorting', file: file17 },
        { id: '18', title: 'Finding the Largest Number in an Array', file: file18 },
        { id: '19', title: 'Sum of the First 10 Even Numbers', file: file19 },
        { id: '20', title: 'Number of a\'s in a string', file: file20 },
        { id: '21', title: 'Triangle Pattern', file: file21 },
        { id: '22', title: 'Fibonacci Series', file: file22 },
        { id: '23', title: 'Prime Number Check', file: file23 }
    ];
    
    
  
  return(
    <div>
  <ProgramTable programs={programs} />;
    </div>
  )

};

export default MasmLab;
