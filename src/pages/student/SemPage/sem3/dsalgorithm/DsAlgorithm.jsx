import React from 'react';
import file1 from "../dsalgorithm/file1.txt";
import file2 from "../dsalgorithm/file2.txt";
import file3 from "../dsalgorithm/file3.txt";
import file4 from "../dsalgorithm/file4.txt";
import file5 from "../dsalgorithm/file5.txt";
import file6 from "../dsalgorithm/file6.txt";
import file7 from "../dsalgorithm/file7.txt";
import file8 from "../dsalgorithm/file8.txt";
import file9 from "../dsalgorithm/file9.txt";
import file10 from "../dsalgorithm/file10.txt";
import file11 from "../dsalgorithm/file11.txt";
import file12 from "../dsalgorithm/file12.txt";
import file13 from "../dsalgorithm/file13.txt";
import file14 from "../dsalgorithm/file14.txt";
import file15 from "../dsalgorithm/file15.txt";
import file16 from "../dsalgorithm/file16.txt";
import file17 from "../dsalgorithm/file17.txt";
import file18 from "../dsalgorithm/file18.txt";
import file19 from "../dsalgorithm/file19.txt";
import file20 from "../dsalgorithm/file20.txt";
import file21 from "../dsalgorithm/file21.txt";
import file22 from "../dsalgorithm/file22.txt";
import file23 from "../dsalgorithm/file23.txt";
import file24 from "../dsalgorithm/file24.txt";
import file25 from "../dsalgorithm/file25.txt";
import file26 from "../dsalgorithm/file26.txt";
import file27 from "../dsalgorithm/file27.txt";
import file28 from "../dsalgorithm/file28.txt";
import file29 from "../dsalgorithm/file29.txt";
import file30 from "../dsalgorithm/file30.txt";
import file31 from "../dsalgorithm/file31.txt";
import file32 from "../dsalgorithm/file32.txt";
import file33 from "../dsalgorithm/file33.txt";
import file34 from "../dsalgorithm/file34.txt";
import file35 from "../dsalgorithm/file35.txt";
import file36 from "../dsalgorithm/file36.txt";

import ProgramTable from '../../ProgramTable';

const DsAlgorithm = () => {
    const programs = [
        { id: '1', title: '1. Linear Search using Function', file: file1 },
        { id: '2', title: '2. Bubble Sort using Function', file: file2 },
        { id: '3', title: '3. Binary Search using Recursion', file: file3 },
        { id: '4', title: '4. Insertion Sort', file: file4 },
        { id: '5', title: '5. Selection Sort', file: file5 },
        { id: '6', title: '6. Quick Sort', file: file6 },
        { id: '7', title: '7. Merge Sort', file: file7 },
        { id: '8', title: '8. Polynomial Addition using Arrays', file: file8 },
        { id: '9', title: '9. Convert Sparse Matrix to Tuple Form', file: file9 },
        { id: '10', title: '10. Add Two Sparse Matrices', file: file10 },
        { id: '11', title: '11. Transpose of a Sparse Matrix', file: file11 },
        { id: '12', title: '12. Stack ADT using Arrays', file: file12 },
        { id: '13', title: '13. Reverse String using Stack', file: file13 },
        { id: '14', title: '14. Convert Infix Expression to Postfix', file: file14 },
        { id: '15', title: '15. Evaluate Postfix Expression', file: file15 },
        { id: '16', title: '16. Convert Infix Expression to Prefix', file: file16 },
        { id: '17', title: '17. Evaluate Prefix Expression', file: file17 },
        { id: '18', title: '18. Queue using Arrays', file: file18 },
        { id: '19', title: '19. Circular Queue using Arrays', file: file19 },
        { id: '20', title: '20. Double-Ended Queue using Arrays', file: file20 },
        { id: '21', title: '21. Priority Queue using Arrays', file: file21 },
        { id: '22', title: '22. Singly Linked List (Basic Operations)', file: file22 },
        { id: '23', title: '23. Stack using Linked List', file: file23 },
        { id: '24', title: '24. Queue using Linked List', file: file24 },
        { id: '25', title: '25. Circular Linked List (Basic Operations)', file: file25 },
        { id: '26', title: '26. Polynomial Addition using Linked List', file: file26 },
        { id: '27', title: '27. Doubly Linked List (Basic Operations)', file: file27 },
        { id: '28', title: '28. Count Number of Nodes in Singly Linked List', file: file28 },
        { id: '29', title: '29. Binary Tree Representation using Arrays', file: file29 },
        { id: '30', title: '30. Binary Tree Representation using Linked List', file: file30 },
        { id: '31', title: '31. Heap Sort', file: file31 },
        { id: '32', title: '32. Binary Tree Traversal Algorithms', file: file32 },
        { id: '33', title: '33. Find Height of Binary Tree (Recursive)', file: file33 },
        { id: '34', title: '34. Hash Table using Hash Function H(k)=k', file: file34 },
        { id: '35', title: '35. Binary Search Trees', file: file35 },
        { id: '36', title: '36. DFS and BFS on Undirected Connected Graph', file: file36 }
    ];
    
  
  return(
    <div>
  <ProgramTable programs={programs} />;
    </div>
  )

};

export default DsAlgorithm;
