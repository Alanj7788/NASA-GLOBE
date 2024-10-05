import React from 'react';

const IntroC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">C Programming Guide</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction to C</h2>
        <p className="text-lg leading-relaxed">
          C is a powerful general-purpose programming language that is widely used for system and application software. Developed in the early 1970s by Dennis Ritchie, C has become one of the most popular programming languages due to its simplicity, efficiency, and flexibility.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Syntax</h2>
        <p className="text-lg leading-relaxed">
          Every C program must have a `main` function, which is the entry point of the program. Here’s a simple example:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mt-4">
          <code>
            {`#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`}
          </code>
        </pre>
        <p className="text-lg leading-relaxed mt-4">
          In the above example:
        </p>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          <li><strong>#include &lt;stdio.h&gt;</strong>: This is a preprocessor command that includes the standard input-output library before compiling the program.</li>
          <li><strong>int main()</strong>: The main function where the execution of the program begins.</li>
          <li><strong>printf()</strong>: A function used to print text to the screen.</li>
          <li><strong>return 0;</strong>: Ends the `main` function and returns 0 to the operating system.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Input and Output</h2>
        <p className="text-lg leading-relaxed">
          In C, `printf` and `scanf` are commonly used for output and input operations, respectively. Here’s how you can use them:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mt-4">
          <code>
            {`#include <stdio.h>
int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("You entered: %d", num);
    return 0;
}`}
          </code>
        </pre>
        <p className="text-lg leading-relaxed mt-4">
          Explanation:
        </p>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          <li><strong>scanf("%d", &num);</strong>: This reads an integer from the user and stores it in the variable `num`.</li>
          <li><strong>printf("You entered: %d", num);</strong>: This prints the entered number to the screen.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Header Files</h2>
        <p className="text-lg leading-relaxed">
          Header files in C contain declarations for functions and macros, which can be included in your programs using the `#include` directive. Some common header files include:
        </p>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          <li><strong>&lt;stdio.h&gt;</strong>: Standard Input Output functions.</li>
          <li><strong>&lt;stdlib.h&gt;</strong>: General utilities like memory management, random numbers, etc.</li>
          <li><strong>&lt;math.h&gt;</strong>: Mathematical functions like `sin`, `cos`, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Control Structures</h2>
        <p className="text-lg leading-relaxed">
          C supports various control structures like if-else, switch-case, loops (for, while, do-while) to control the flow of the program. Here’s an example of a simple if-else statement:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mt-4">
          <code>
            {`#include <stdio.h>
int main() {
    int num = 10;
    if(num > 0) {
        printf("Positive number");
    } else {
        printf("Negative number");
    }
    return 0;
}`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg leading-relaxed">
          This guide covers the basic concepts of C programming that are essential for beginners. Understanding these concepts will help you build a solid foundation in C and advance to more complex topics.
        </p>
      </section>
    </div>
  );
};

export default IntroC;
