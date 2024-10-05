import React from 'react';
import file1 from "../compiler/file1.txt";
import file2 from "../compiler/file2.txt";
import file3 from "../compiler/file3.txt";
import file4 from "../compiler/file4.txt";
import file5 from "../compiler/file5.txt";
import file6 from "../compiler/file6.txt";
import file7 from "../compiler/file7.txt";
import file8 from "../compiler/file8.txt";
import file9 from "../compiler/file9.txt";
import file10 from "../compiler/file10.txt";
import file11 from "../compiler/file11.txt";
import file12 from "../compiler/file12.txt";
import file13 from "../compiler/file13.txt";
import file14 from "../compiler/file14.txt";
import file15 from "../compiler/file15.txt";
import file16 from "../compiler/file16.txt";
import file17 from "../compiler/file17.txt";
import file18 from "../compiler/file18.txt";
import file19 from "../compiler/file19.txt";
import file20 from "../compiler/file20.txt";


import ProgramTable from '../../ProgramTable';

const CompilerLab = () => {
    const programs = [
        { id: '1', title: '1. Familiarization of Lex', file: file1 },
        { id: '2', title: '2. Lex program to count number of words, lines, characters.', file: file2 },
        { id: '3', title: '3. Lex program to find the sum of two integer numbers.', file: file3 },
        { id: '4', title: '4. Lex program to identify and count positive and negative numbers.', file: file4 },
        { id: '5', title: '5. Lex program to count vowels and consonants.', file: file5 },
        { id: '6', title: '6. Lex program to remove spaces,newline, tab from input.txt file.', file: file6 },
        { id: '7', title: '7. Lex program to find the length of input string including spaces.', file: file7 },
        { id: '8', title: '8. Lex program to find the length of input string not including spaces.', file: file8 },
        { id: '9', title: '9. Lex program to check whether the given number is odd or even.', file: file9 },
        { id: '10', title: '10. Lex program to find the square of a number.', file: file10 },
        { id: '11', title: '11. Lex program to count number of words, lines, characters from input.txt file.', file: file11 },
        { id: '12', title: '12. Lex program to print the reverse of number.', file: file12 },
        { id: '13', title: '13. Lex program to print the sum of digits of the given number.', file: file13 },
        { id: '14', title: '14. Lex program to check whether the given number is prime or not.', file: file14 },
        { id: '15', title: '15. Lex program to print fibonacci series upto the given limit.', file: file15 },

    ];
  
  return(
    <div>
  <ProgramTable programs={programs} />;
    </div>
  )

};

export default CompilerLab;
