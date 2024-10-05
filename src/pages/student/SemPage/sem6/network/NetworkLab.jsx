import React from 'react';
import file1 from "../network/file1.txt";
import file2 from "../network/file2.txt";
import file3 from "../network/file3.txt";
import file4 from "../network/file4.txt";
import file5 from "../network/file5.txt";
import file6 from "../network/file6.txt";
import file7 from "../network/file7.txt";
import file8 from "../network/file8.txt";
import file9 from "../network/file9.txt";
import file10 from "../network/file10.txt";
import file11 from "../network/file11.txt";
import file12 from "../network/file12.txt";
import file13 from "../network/file13.txt";
import file14 from "../network/file14.txt";
import file15 from "../network/file15.txt";
import file16 from "../network/file16.txt";
import file17 from "../network/file17.txt";
import file18 from "../network/file18.txt";
import file19 from "../network/file19.txt";
import file20 from "../network/file20.txt";
import file21 from "../network/file21.txt"; // Stop and Wait ARQ with error checking
import file22 from "../network/file22.txt"; // Go-Back-N ARQ with sliding window handling and retransmissions
import file23 from "../network/file23.txt"; // Selective Repeat ARQ with sliding windows

import ProgramTable from '../../ProgramTable';

const NetworkLab = () => {
    const programs = [
        { id: '1', title: '1. Basics of UNIX/LINUX Basic Networking Commands', file: file1 },
        { id: '2', title: '2. Introduction to Socket Programming in C', file: file2 },
        { id: '3', title: '3. Simple TCP Client-Server program', file: file3 },
        { id: '4', title: '4. Simple UDP Client-Server program', file: file4 },
        { id: '5', title: '5. Simple UDP Server-Client program displaying current calendar time', file: file5 },
        { id: '6', title: '6. TCP Client-Server Chat program', file: file6 },
        { id: '7', title: '7. UDP Client-Server Chat program', file: file7 },
        { id: '8', title: '8. TCP Server-Client program for username and password authentication', file: file8 },
        { id: '9', title: '9. TCP Server-Client program implementing a dictionary with meanings and antonyms', file: file9 },
        { id: '10', title: '10. TCP Server-Client program to get MAC and IP address of the client', file: file10 },
        { id: '11', title: '11. Multi-user chat server using TCP', file: file11 },
        { id: '12', title: '12. Echo server using TCP', file: file12 },
        { id: '13', title: '13. Broadcast server using TCP', file: file13 },
        { id: '14', title: '14. Factorial of a number using TCP socket', file: file14 },
        { id: '15', title: '15. Factorial of a number using UDP socket', file: file15 },
        { id: '16', title: '16. Prime number check using TCP socket', file: file16 },
        { id: '17', title: '17. Prime number check using UDP socket', file: file17 },
        { id: '18', title: '18. Reverse of a string using TCP socket', file: file18 },
        { id: '19', title: '19. Fibonacci series using TCP socket', file: file19 },
        { id: '20', title: '20. ARQ protocols for reliable data transmission', file: file20 },
        { id: '21', title: '21. Stop and Wait ARQ with error checking', file: file21 },
        { id: '22', title: '22. Go-Back-N ARQ with sliding window handling and retransmissions', file: file22 },
        { id: '23', title: '23. Selective Repeat ARQ with sliding windows', file: file23 },
    ];

    return (
        <div>
            <ProgramTable programs={programs} />
        </div>
    );
};

export default NetworkLab;
