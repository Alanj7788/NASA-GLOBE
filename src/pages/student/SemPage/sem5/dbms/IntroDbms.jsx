import React from 'react';

const IntroDbms = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Introduction to DBMS Commands</h1>

      <h2 className="text-2xl font-semibold mb-4">Data Definition Language (DDL)</h2>
      
      <h3 className="text-xl font-semibold mb-2">1. CREATE TABLE</h3>
      <p className="mb-4">Creates a new table in the database.</p>
      <pre className="p-4 mb-4">
        <code>
          CREATE TABLE table_name ({'\n'}
          &nbsp;&nbsp;&nbsp;column1 datatype constraint,{'\n'}
          &nbsp;&nbsp;&nbsp;column2 datatype constraint,{'\n'}
          &nbsp;&nbsp;&nbsp;...{'\n'}
          );
          {'\n'}
          <strong>Example:</strong>{'\n'}
          CREATE TABLE employees ({'\n'}
          &nbsp;&nbsp;&nbsp;employee_id INT PRIMARY KEY,{'\n'}
          &nbsp;&nbsp;&nbsp;first_name VARCHAR(50),{'\n'}
          &nbsp;&nbsp;&nbsp;last_name VARCHAR(50){'\n'}
          );
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. ALTER TABLE</h3>
      <p className="mb-4">Modifies an existing table structure.</p>
      <pre className="p-4 mb-4">
        <code>
          ALTER TABLE table_name ADD column_name datatype;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          ALTER TABLE employees ADD email VARCHAR(100);
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. DROP TABLE</h3>
      <p className="mb-4">Deletes an existing table and its data.</p>
      <pre className="p-4 mb-4">
        <code>
          DROP TABLE table_name;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          DROP TABLE employees;
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">4. CREATE INDEX</h3>
      <p className="mb-4">Creates an index (search key) on a table's column.</p>
      <pre className="p-4 mb-4">
        <code>
          CREATE INDEX index_name ON table_name (column_name);
          {'\n'}
          <strong>Example:</strong>{'\n'}
          CREATE INDEX idx_last_name ON employees (last_name);
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">5. DROP INDEX</h3>
      <p className="mb-4">Deletes an existing index.</p>
      <pre className="p-4 mb-4">
        <code>
          DROP INDEX index_name;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          DROP INDEX idx_last_name;
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Data Manipulation Language (DML)</h2>

      <h3 className="text-xl font-semibold mb-2">1. SELECT</h3>
      <p className="mb-4">Retrieves data from one or more tables.</p>
      <pre className="p-4 mb-4">
        <code>
          SELECT column_name FROM table_name;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          SELECT first_name, last_name FROM employees;
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. INSERT</h3>
      <p className="mb-4">Adds new records to a table.</p>
      <pre className="p-4 mb-4">
        <code>
          INSERT INTO table_name (column1, column2) VALUES (value1, value2);
          {'\n'}
          <strong>Example:</strong>{'\n'}
          INSERT INTO employees (first_name, last_name) VALUES ('John', 'Doe');
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. UPDATE</h3>
      <p className="mb-4">Modifies existing records in a table.</p>
      <pre className="p-4 mb-4">
        <code>
          UPDATE table_name SET column1 = value1 WHERE condition;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          UPDATE employees SET last_name = 'Smith' WHERE first_name = 'John';
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">4. DELETE</h3>
      <p className="mb-4">Removes existing records from a table.</p>
      <pre className="p-4 mb-4">
        <code>
          DELETE FROM table_name WHERE condition;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          DELETE FROM employees WHERE first_name = 'John';
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-4">Data Control Language (DCL)</h2>

      <h3 className="text-xl font-semibold mb-2">1. GRANT</h3>
      <p className="mb-4">Gives specific privileges to users.</p>
      <pre className="p-4 mb-4">
        <code>
          GRANT privilege ON object TO user;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          GRANT SELECT ON employees TO user1;
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. REVOKE</h3>
      <p className="mb-4">Removes specific privileges from users.</p>
      <pre className="p-4 mb-4">
        <code>
          REVOKE privilege ON object FROM user;
          {'\n'}
          <strong>Example:</strong>{'\n'}
          REVOKE SELECT ON employees FROM user1;
        </code>
      </pre>
    </div>
  );
}

export default IntroDbms;
