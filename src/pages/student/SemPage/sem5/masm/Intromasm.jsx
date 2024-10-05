import React from 'react';

const Intromasm = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Introduction to MASM-8086</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Registers and Usage</h2>
      
      <h3 className="text-xl font-semibold mb-2">General-Purpose Registers:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>AX (Accumulator):</strong> Often used for arithmetic and logic operations. It is also used in some string manipulation instructions.</li>
        <li><strong>BX (Base):</strong> Used as a base register for memory addressing.</li>
        <li><strong>CX (Counter):</strong> Primarily used as a loop counter in string and loop operations.</li>
        <li><strong>DX (Data):</strong> Used in multiplication and division operations, as well as certain I/O operations.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Index Registers:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>SI (Source Index):</strong> Used as a source index in string operations.</li>
        <li><strong>DI (Destination Index):</strong> Used as a destination index in string operations.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Segment Registers:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>CS (Code Segment):</strong> Contains the starting address of the code segment.</li>
        <li><strong>DS (Data Segment):</strong> Contains the starting address of the data segment.</li>
        <li><strong>SS (Stack Segment):</strong> Points to the beginning of the stack segment.</li>
        <li><strong>ES (Extra Segment):</strong> An additional segment register often used for extra data segment addressing.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Pointer Registers:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>SP (Stack Pointer):</strong> Points to the top of the stack.</li>
        <li><strong>BP (Base Pointer):</strong> Used as a base pointer for stack operations.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Flag Register:</h3>
      <ul className="list-disc pl-6 mb-8">
        <li><strong>FLAGS (Status Flags):</strong> Contains various status flags such as zero flag (ZF), carry flag (CF), sign flag (SF), etc., indicating the result of arithmetic and logical operations.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Basic Instructions</h2>
      
      <h3 className="text-xl font-semibold mb-2">Data Copy Instructions:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>MOV (Move):</strong> <code className="bg-gray-100 p-1 rounded">MOV AX, BX</code> ; Copy the value in BX to AX</li>
        <li><strong>LEA (Load Effective Address):</strong> <code className="bg-gray-100 p-1 rounded">LEA SI, array</code> ; Load the effective address of 'array' into SI</li>
        <li><strong>XCHG (Exchange):</strong> <code className="bg-gray-100 p-1 rounded">XCHG AX, BX</code> ; Exchange the values in AX and BX</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Arithmetic Instructions:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>ADD (Addition):</strong> <code className="bg-gray-100 p-1 rounded">ADD AX, BX</code> ; Add the value in BX to AX</li>
        <li><strong>SUB (Subtraction):</strong> <code className="bg-gray-100 p-1 rounded">SUB CX, DX</code> ; Subtract the value in DX from CX</li>
        <li><strong>MUL (Unsigned Multiplication):</strong> it multiplies the value and store in AX register
          <ul className="list-none pl-6">
            <li><code className="bg-gray-100 p-1 rounded">MOV AX, 5</code></li>
            <li><code className="bg-gray-100 p-1 rounded">MOV BX, 10</code></li>
            <li><code className="bg-gray-100 p-1 rounded">MUL BX</code> ; AX = AX * BX</li>
          </ul>
        </li>
        <li><strong>DIV (Unsigned Division):</strong> It divides the value in AX register and stores the remainder in AH and quotient in AL register
          <ul className="list-none pl-6">
            <li><code className="bg-gray-100 p-1 rounded">MOV AX, 30</code></li>
            <li><code className="bg-gray-100 p-1 rounded">MOV CX, 5</code></li>
            <li><code className="bg-gray-100 p-1 rounded">DIV CX</code> ; AL = AX / CX, AH = AX % CX</li>
          </ul>
        </li>
        <li><strong>AAA (ASCII Adjust After Addition):</strong> Adjusts the result after addition to correct BCD representation.</li>
        <li><strong>AAM (ASCII Adjust After Multiplication):</strong> Adjusts the result after multiplication to correct BCD representation.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Logical Instructions:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>AND (Bitwise AND):</strong> <code className="bg-gray-100 p-1 rounded">AND AL, 0Fh</code> ; Perform a bitwise AND with AL and 0Fh</li>
        <li><strong>OR (Bitwise OR):</strong> <code className="bg-gray-100 p-1 rounded">OR BL, 80h</code> ; Perform a bitwise OR with BL and 80h</li>
        <li><strong>XOR (Bitwise XOR):</strong> <code className="bg-gray-100 p-1 rounded">XOR AX, AX</code> ; Perform a bitwise XOR on AX with itself (AX = 0)</li>
        <li><strong>NOT (Bitwise NOT):</strong> <code className="bg-gray-100 p-1 rounded">NOT DX</code> ; Perform a bitwise NOT on DX</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Branch Instructions:</h3>
      <ul className="list-disc pl-6 mb-8">
        <li><strong>JMP (Unconditional Jump):</strong> <code className="bg-gray-100 p-1 rounded">JMP label</code> ; Jump to the specified label unconditionally</li>
        <li><strong>JE (Jump if Equal):</strong> <code className="bg-gray-100 p-1 rounded">CMP AX, BX</code> ; Compare AX and BX <code className="bg-gray-100 p-1 rounded">JE equal_label</code> ; Jump to equal_label if they are equal</li>
        <li><strong>JNE (Jump if Not Equal):</strong> <code className="bg-gray-100 p-1 rounded">CMP CX, DX</code> ; Compare CX and DX <code className="bg-gray-100 p-1 rounded">JNE not_equal_label</code> ; Jump to not_equal_label if they are not equal</li>
        <li><strong>JG (Jump if Greater):</strong> <code className="bg-gray-100 p-1 rounded">CMP AX, BX</code> ; Compare AX and BX <code className="bg-gray-100 p-1 rounded">JG greater_label</code> ; Jump to greater_label if AX > BX</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">INT 21H DOS Function</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>01H:</strong>
          <ul className="list-none pl-6">
            <li><code className="bg-gray-100 p-1 rounded">MOV AH, 01H</code> ; request keyboard input</li>
            <li><code className="bg-gray-100 p-1 rounded">INT 21H</code> ; interrupt to process the function</li>
          </ul>
        </li>
        <li><strong>02H:</strong>
          <ul className="list-none pl-6">
            <li><code className="bg-gray-100 p-1 rounded">MOV AH, 02H</code> ; request character output</li>
            <li><code className="bg-gray-100 p-1 rounded">MOV DL, 'A'</code> ; set character to output</li>
            <li><code className="bg-gray-100 p-1 rounded">INT 21H</code> ; interrupt to process the function</li>
          </ul>
        </li>
        <li><strong>09H:</strong>
          <ul className="list-none pl-6">
            <li><code className="bg-gray-100 p-1 rounded">MOV AH, 09H</code> ; request string output</li>
            <li><code className="bg-gray-100 p-1 rounded">MOV DX, offset message</code> ; set offset of string in memory</li>
            <li><code className="bg-gray-100 p-1 rounded">INT 21H</code> ; interrupt to process the function</li>
          </ul>
        </li>
        <li><strong>4CH:</strong>
          <ul className="list-none pl-6">
            <li><code className="bg-gray-100 p-1 rounded">MOV AH, 4CH</code> ; terminate program</li>
            <li><code className="bg-gray-100 p-1 rounded">INT 21H</code> ; interrupt to terminate program</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Intromasm;
