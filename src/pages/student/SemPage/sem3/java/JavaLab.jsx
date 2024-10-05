import React from 'react';
import file1 from "../java/file1.txt";
import file2 from "../java/file2.txt";
import file3 from "../java/file3.txt";
import file4 from "../java/file4.txt";
import file5 from "../java/file5.txt";
import file6 from "../java/file6.txt";
import file7 from "../java/file7.txt";
import file8 from "../java/file8.txt";
import file9 from "../java/file9.txt";
import file10 from "../java/file10.txt";
import file11 from "../java/file11.txt";
import file12 from "../java/file12.txt";
import file13 from "../java/file13.txt";
import file14 from "../java/file14.txt";
import file15 from "../java/file15.txt";
import file16 from "../java/file16.txt";
import file17 from "../java/file17.txt";
import file18 from "../java/file18.txt";
import file19 from "../java/file19.txt";
import file20 from "../java/file20.txt";
import file21 from "../java/file21.txt";
import file22 from "../java/file22.txt";
import file23 from "../java/file23.txt";
import file24 from "../java/file24.txt";
import file25 from "../java/file25.txt";
import file26 from "../java/file26.txt";
import file27 from "../java/file27.txt";
import file28 from "../java/file28.txt";
import file29 from "../java/file29.txt";
import file30 from "../java/file30.txt";
import file31 from "../java/file31.txt";
import file32 from "../java/file32.txt";
import file33 from "../java/file33.txt";
import file34 from "../java/file34.txt";
import file35 from "../java/file35.txt";
import file36 from "../java/file36.txt";
import file37 from "../java/file37.txt";
import file38 from "../java/file38.txt";
import file39 from "../java/file39.txt";
import file40 from "../java/file40.txt";
import file41 from "../java/file41.txt";
import file42 from "../java/file42.txt";
import file43 from "../java/file43.txt";
import file44 from "../java/file44.txt";
import file45 from "../java/file45.txt";
import file46 from "../java/file46.txt";
import file47 from "../java/file47.txt";
import file48 from "../java/file48.txt";
import file49 from "../java/file49.txt";
import file50 from "../java/file50.txt";
import file51 from "../java/file51.txt";
import file52 from "../java/file52.txt";
import file53 from "../java/file53.txt";
import file54 from "../java/file54.txt";
import file55 from "../java/file55.txt";
import file56 from "../java/file56.txt";
import file57 from "../java/file57.txt";

import ProgramTable from '../../ProgramTable';

const JavaLab = () => {
    
    const programs = [
        { id: '1', title: '1. Print Hello World', file: file1 },
        { id: '2', title: '2. Add Two Integer Numbers', file: file2 },
        { id: '3', title: '3. Find the Largest of Two Numbers (using If-else)', file: file3 },
        { id: '4', title: '4. Find the Sum of First n Natural Numbers (using for loop)', file: file4 },
        { id: '5', title: '5. Check Whether a Given Number is Prime or Not (using flag variable)', file: file5 },
        { id: '6', title: '6. Check Whether a Given Number is Perfect or Not', file: file6 },
        { id: '7', title: '7. Find the Sum of the Digits of a Given Number (using while or do-while loop)', file: file7 },
        { id: '8', title: '8. Find the Reverse of a Number', file: file8 },
        { id: '9', title: '9. Check Whether a Given Number is Palindrome or Not', file: file9 },
        { id: '10', title: '10. Read and Display Student Details', file: file10 },
        { id: '11', title: '11. Check Whether a Given Year is a Leap Year or Not', file: file11 },
        { id: '12', title: '12. Find the Roots of a Quadratic Equation (including imaginary roots)', file: file12 },
        { id: '13', title: '13. Implement a Basic Calculator (using a switch case)', file: file13 },
        { id: '14', title: '14. Check Whether a Given Number is Armstrong Number or Not (3-digit Armstrong number)', file: file14 },
        { id: '15', title: '15. Find the Factorial of a Number', file: file15 },
        { id: '16', title: '16. Print the Fibonacci Series', file: file16 },
        { id: '17', title: '17. Find the Factorial of a Number Using Command-line Arguments', file: file17 },
        { id: '18', title: '18. Implement Linear Search (using a 1D array)', file: file18 },
        { id: '19', title: '19. Find the Largest of n Numbers', file: file19 },
        { id: '20', title: '20. Implement Bubble Sort', file: file20 },
        { id: '21', title: '21. Find the Second Largest and Second Smallest Number in an Array', file: file21 },
        { id: '22', title: '22. Implement Binary Search', file: file22 },
        { id: '23', title: '23. Add Two Matrices (using a 2D array)', file: file23 },
        { id: '24', title: '24. Find the Transpose of a Matrix', file: file24 },
        { id: '25', title: '25. Multiply Two Matrices', file: file25 },
        { id: '26', title: '26. Sort an Array Using the Sort Method in Arrays Class (use for-each to print the array)', file: file26 },
        { id: '27', title: '27. Print the Reverse of a String Using the Reverse Method in StringBuilder/StringBuffer Class (use for-each to print the reverse)', file: file27 },
        { id: '28', title: '28. Check Whether a Given String is Palindrome or Not (using charAt method in String class)', file: file28 },
        { id: '29', title: '29. Sort a Given Set of Strings (use sort method and for-each construct)', file: file29 },
        { id: '30', title: '30. Find the Factorial of a Number Using Recursion', file: file30 },
        { id: '31', title: '31. Find the Sum of the Digits of a Number Using Recursion', file: file31 },
        { id: '32', title: '32. Create a Class Box with Instance Variables Length, Width, and Height. Include a Method Volume to Compute the Volume of the Box. Create Another Class BoxDemo with the Main Function That Creates an Object of Class Box Named MyBox1 and Set the Values for Instance Variables (Length, Width, and Height). Invoke the Function Volume in Box to Compute the Volume of the Created Object MyBox1.', file: file32 },
        { id: '33', title: '33. Implement Stack Using Arrays', file: file33 },
        { id: '34', title: '34. Design a Class to Represent a Bank Account (Include Data Members and Methods for Deposit, Withdraw, and Display)', file: file34 },
        { id: '35', title: '35. Create a Class Named Employee with Members Name, Age, Phone Number, Address, Salary. Two Classes Officer and Manager Inherit the Employee Class with Additional Data Members Specialization and Department. Print Details of Officer and Manager Objects.', file: file35 },
        { id: '36', title: '36. Write Two Classes, Employee and Engineer. Engineer Should Inherit from Employee Class. Display Engineer Salary and Employee Details Using a Single Object Instantiation.', file: file36 },
        { id: '37', title: '37. Create an Abstract Class Named Shape with an Empty Method Named NumberOfSides(). Provide Three Classes Named Rectangle, Triangle, and Hexagon That Extend Shape and Implement NumberOfSides() Method.', file: file37 },
        { id: '38', title: '38. Create a Package studpack with Student Class and Sports Interface. Create a Result Class Extending Student Class and Implementing Sports Interface to Display Total Marks. Use the Result Class in a Program to Display Total for 5 Students.', file: file38 },
        { id: '39', title: '39. Java Program Showing Usage of Try, Catch, and Finally', file: file39 },
        { id: '40', title: '40. Find the Factorial of a Number Using BufferedReader Class', file: file40 },
        { id: '41', title: '41. Copy Contents of One File to Another Using FileReader/FileWriter Class', file: file41 },
        { id: '42', title: '42. Read a Line of Integers and Display Each Integer and the Sum Using StringTokenizer Class', file: file42 },
        { id: '43', title: '43. Copy Contents of One File to Another Using FileInputStream and FileOutputStream Classes', file: file43 },
        { id: '44', title: '44. Create a Java Package Named NewPackage with Class NewClass Having Method ParityCheck to Check If a Number is Odd or Even. Import This Package and Call the Method ParityCheck.', file: file44 },
        { id: '45', title: '45. Implement Stack Using Collections Framework', file: file45 },
        { id: '46', title: '46. Implement Queue Using Collections Framework (list elements using iterator interface)', file: file46 },
        { id: '47', title: '47. Implement ArrayList Using Collections Framework', file: file47 },
        { id: '48', title: '48. Create Multiple Child Threads to Print Odd and Even Numbers (extending Thread class)', file: file48 },
        { id: '49', title: '49. Implement a Multi-threaded Program with Three Threads: Generate Random Integer, Compute Square if Even, or Print Cube if Odd (using Runnable Interface and Random Class)', file: file49 },
        { id: '50', title: '50. Create a Doubly Linked List, Delete a Given Element, and Display the List Contents After Deletion (using Collections Framework - LinkedList Interface)', file: file50 },
        { id: '51', title: '51. Java GUI Program to Add Two Numbers (Using Swing package)', file: file51 },
        { id: '52', title: '52. Java GUI Program to Find the Factorial of a Number', file: file52 },
        { id: '53', title: '53. Java GUI Program to Check Whether a Given String is Palindrome or Not (Use StringBuilder class)', file: file53 },
        { id: '54', title: '54. Java GUI Program to Implement a Basic Calculator', file: file54 },
        { id: '55', title: '55. Implement a Registration Form in Java', file: file55 },
        { id: '56', title: '56. Execute Basic SQL Commands', file: file56 },
        { id: '57', title: '57. Insert, Delete, and Display All Records from a Table Using JDBC', file: file57 }
    ];
    
    
        
  
  return(
    <div>
  <ProgramTable programs={programs} />;
    </div>
  )

};

export default JavaLab;
