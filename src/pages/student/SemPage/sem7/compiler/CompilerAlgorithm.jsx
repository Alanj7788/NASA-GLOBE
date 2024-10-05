import React from 'react';
import alg1 from "../compiler/alg1.txt";
import alg2 from "../compiler/alg2.txt";
import alg3 from "../compiler/alg3.txt";
import alg4 from "../compiler/alg4.txt";
import alg5 from "../compiler/alg5.txt";
import alg6 from "../compiler/alg6.txt";

import AlgorithmTable from '../../AlgorithmTable';

const CompilerAlgorithm = () => {
    const algorithms = [
        { id: '1', title: 'Count number of lines , words, and characters.', file: alg1 },
        { id: '2', title: 'Count positive and negative numbers.', file: alg2 },
        { id: '3', title: 'Count vowels and consonants.', file: alg3 },
        { id: '4', title: 'To remove spaces , newline , tab.', file: alg4 },
        { id: '5', title: 'To find the length of input string.', file: alg5 },
        { id: '6', title: '', file: alg6 },
    ];
  
    return (
        <div>
            <AlgorithmTable programs={algorithms} />
        </div>
    );
};

export default CompilerAlgorithm;
