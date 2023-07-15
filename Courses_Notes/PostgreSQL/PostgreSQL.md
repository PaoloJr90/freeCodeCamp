[Learn PostgreSQL Tutorial](https://www.youtube.com/watch?v=qw--VYLpxG4)

---

_What is a database?_ \
system where you can:

1. store data
2. manipulate data
3. retrieve data

PostgreSQL is an open-source object-relational database management system (DBMS) \
SQL (Structured Query Language) is the language used to interact with the database \
SQL is used the manage data held in a relational database management system (RDBMS)

_How data is stored in a database?_

- stored in tables
  - columns (fields)
  - rows (records)

A relational database is a database that stores data in tables that are related to each other.

_other database engines:_ \
MySQL, Oracle, Microsoft SQL Server, SQLite

---

### PostgreSQL commands

_Creating a database in PostgreSQL:_

```sql
CREATE DATABASE database_name;
```

_Creating a table in PostgreSQL:_

```sql
CREATE TABLE table_name (column_name data_type column_constraint);

CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  date_of_birth DATE NOT NULL,
  email VARCHAR(150)
);
```

_Insert records into a table:_

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO person (first_name, last_name, gender, date_of_birth)
VALUES ('Anne', 'Smith', 'FEMALE', DATE '1988-01-09');

INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
VALUES ('Jake', 'Jones', 'MALE', DATE '1990-04-10', 'jake@email.com');
```

_Order query results:_

```sql
SELECT * FROM person ORDER BY last_name ASC;
-- ASC is the default if not specified

SELECT * FROM person ORDER BY last_name DESC;
```

_Select distinct records:_

```sql
SELECT DISTINCT country_of_birth FROM person;
```

_Select records with filters:_

```sql
SELECT * FROM person WHERE gender = 'Female' AND (country_of_birth = 'South Africa' OR country_of_birth = 'United States');
```

_Comparison operators:_

```sql
SELECT 1 = 2;
-- false
SELECT 1 <> 2;
-- true; <> is the same as != (not equal)
SELECT 1 > 2;
-- false
SELECT 1 <= 2;
-- true
```

_Limit query results:_

```sql
SELECT * FROM person LIMIT 5;
-- LIMIT 5 means only return the first 5 records
SELECT * FROM person LIMIT 5 OFFSET 5;
-- OFFSET 5 means skip the first 5 records
SELECT * FROM person LIMIT 5 FETCH FIRST 5 ROW ONLY;
-- FETCH FIRST 5 ROW ONLY is the same as LIMIT 5
```

_Using IN operator:_

```sql
SELECT * FROM person WHERE country_of_birth IN ('South Africa', 'United States');
```

_Using BETWEEN operator:_

```sql
SELECT * FROM person WHERE date_of_birth BETWEEN DATE '1995-01-01' AND DATE '2015-01-01';
```

_Using LIKE and ILIKE operator using wildcards:_

```sql
SELECT * FROM person WHERE first_name LIKE 'A%';
-- % is a wildcard that matches any string of zero or more characters
SELECT * from person where email LIKE '%@gmail.com';
-- % can be used at the beginning, end, or middle of a string
SELECT * FROM person WHERE first_name LIKE '_a%';
-- _ is a wildcard that matches any single character
SELECT * FROM person WHERE country_of_birth ILIKE 'a%';
-- ILIKE is case insensitive
```

_Using GROUP BY:_

```sql
SELECT country_of_birth, COUNT(*) from person GROUP BY country_of_birth ORDER BY COUNT(*) DESC;
-- COUNT(*) counts the number of records in each group
-- GROUP BY is used to group the results of a query by one or more columns
-- ORDER BY is used to sort the results and must be used after GROUP BY; it must contain some or all of the columns specified in the SELECT clause
```

_Using GROUP BY HAVING:_

```sql
SELECT country_of_birth, COUNT(*) from person GROUP BY country_of_birth HAVING COUNT(*) > 20 ORDER BY COUNT(*) DESC;
-- HAVING is used to filter the results of a GROUP BY
-- ORDER BY is used to sort the results and must be used after GROUP BY; it must contain some or all of the columns specified in the SELECT clause
```

_Aggregate functions:_

```sql
SELECT COUNT(*) FROM car;
-- COUNT(*) counts the number of records
SELECT AVG(price) FROM car;
-- AVG() calculates the average value of a column
SELECT MAX(price) FROM car;
-- MAX() returns the maximum value of a column
SELECT MIN(price) FROM car;
-- MIN() returns the minimum value of a column
SELECT ROUND(AVG(price)) FROM car;
-- ROUND() rounds the result to the nearest integer
SELECT make, SUM(price) FROM car GROUP BY make ORDER BY SUM(price) DESC;
```

_Arithmetic operators:_

```sql
SELECT 1 + 1;
-- 2
SELECT 1 - 1;
-- 0
SELECT 2 * 2;
-- 4
SELECT id, make, model, price, ROUND(price * 0.10, 2) AS Discount, ROUND(price -(price * 0.10), 2) AS Disounted_Price FROM car;
-- AS is used to give a column an alias
SELECT 4 / 2;
-- 2
SELECT 5 % 2;
-- 1; % is the modulo operator
SELECT 2 ^ 3;
-- 8; ^ is the exponent operator
SELECT 5!;
-- 120; ! is the factorial operator
```

_Handling NULL values:_

```sql
SELECT COALESCE(null, null, 1, 10) AS number;
-- COALESCE() returns the first non-null value in a list
SELECT COALESCE(email, 'Email not provided') FROM person;
-- COALESCE() can be used to replace null values with a default value
-- the second argument of COALESCE() can be a string, number, or any other data type to replace null values
```

_NULLIF() function:_

```sql
SELECT 10/0;
-- returns an error
SELECT NULLIF(10, 10);
-- returns null
SELECT NULLIF(10, 0);
-- returns 10
-- NULLIF() returns null if the two arguments are equal, otherwise it returns the first argument
SELECT 10 / NULLIF(2, 9);
-- returns 5
-- NULLIF() can be used to prevent division by zero
SELECT 10 / NULLIF(2, 2);
-- returns null
SELECT COALESCE(10 / NULLIF(0, 0), 0);
-- returns 0 since the first argument of COALESCE() is null
```

_Dates in PostgreSQL:_

```sql
SELECT NOW();
-- returns the current date and time
SELECT NOW()::DATE;
-- returns the current date; ::DATE is a cast.
SELECT NOW()::TIME;
-- returns the current time
SELECT NOW() - INTERVAL '1 year';
-- returns the current date and time minus 1 year
SELECT (NOW() + INTERVAL '10 months')::DATE;
-- returns the current date plus 10 months
```

_Extracting fields from dates:_

```sql
SELECT EXTRACT(YEAR FROM NOW());
-- returns the current year
SELECT EXTRACT(MONTH FROM NOW());
-- returns the current month
SELECT EXTRACT(DAY FROM NOW());
-- returns the current day
SELECT EXTRACT(DOW FROM NOW());
-- returns the current day of the week
SELECT EXTRACT(DOY FROM NOW());
-- returns the current day of the year
SELECT EXTRACT(CENTURY FROM NOW());
-- returns the current century
```

_Age function:_

```sql
SELECT first_name, last_name, gender, country_of_birth, date_of_birth, EXTRACT(YEAR FROM (AGE(NOW(), date_of_birth))) AS Age FROM person;
-- returns the age of each person in years
```

---

Primary keys (PK) are unique identifiers for each record in a table.

_Change primary key constraints:_

```sql
ALTER TABLE person DROP CONSTRAINT person_pkey;
-- DROP CONSTRAINT is used to drop a constraint
ALTER TABLE person ADD PRIMARY KEY (id);
-- ADD PRIMARY KEY is used to add a primary key constraint
```

UNIQUE constraints ensure that all values in a column are unique.

```sql
ALTER TABLE person ADD CONSTRAINT email_unique UNIQUE (email);
-- ADD CONSTRAINT is used to add a constraint; constraint name is specified
ALTER TABLE person ADD UNIQUE (email);
-- UNIQUE is a shortcut for adding a unique constraint
-- constraint name is not specified - it is handled automatically by PostgreSQL
```

CHECK constraints ensure that all values in a column meet a specific condition.

```sql
ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');
-- ADD CONSTRAINT is used to add a constraint; constraint name is specified
-- CHECK is used to specify the condition
```

DELETE removes records from a table.

```sql
DELETE FROM person;
-- deletes all records from the person table
DELETE FROM person WHERE id = 1;
-- deletes the record with id = 1
DELETE FROM person where gender = 'Female' AND country_of_birth = 'South Africa';
-- deletes record with gender = 'Female' AND country_of_birth = 'South Africa'
```

UPDATE modifies records in a table.

```sql
UPDATE person SET email = 'ommar@gmail.com';
-- updates all records in the person table and sets the email to 'ommar@gmail.com'
UPDATE person SET email = 'ommar@gmail.com' WHERE id = 1;
-- updates the record with id = 1 and sets the email to 'ommar@gmail.com' and leaves the rest of the records unchanged
UPDATE person SET first_name = 'Omar', last_name = 'Montana', email = 'omar.montana@hotmail.com' WHERE id = 1;
-- updates the record with id = 1 and sets the first_name to 'Omar', last_name to 'Montana', and email to 'omar.montana@hotmail.com' and leaves the rest of the records unchanged
```

---

ON CONFLICT DO NOTHING:

```sql
INSERT INTO person (first_name, last_name, gender, date_of_birth, email, country_of_birth) VALUES ('Eldin', 'Plum', 'Male', '2015-03-13', 'eplum0@so-net.ne.jp', 'China') ON CONFLICT (email) DO NOTHING;
-- inserts a new record into the person table but only if the email does not already exist in the table
```

ON CONFLICT DO UPDATE; also known as UPSERT:

```sql
INSERT INTO person (id, first_name, last_name, gender, date_of_birth, email, country_of_birth) VALUES (1, 'Eldin', 'Plum', 'Male', '2015-03-13', 'eplum0@so-net.ne.uk', 'China') ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
-- inserts a new record into the person table but only if the id does not already exist in the table
```

---

Foreign keys (FK) are used to link two tables together. \
JOINS are used to query data from two or more tables. \
Relationships between tables are defined using foreign keys.

```sql
CREATE TABLE car (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  gender VARCHAR(7) NOT NULL,
  email VARCHAR(150),
  date_of_birth DATE NOT NULL,
  country_of_birth VARCHAR(50) NOT NULL,
  car_id BIGINT UNIQUE REFERENCES car(id)
);
-- creates a new table called car
-- car_id is a foreign key that references the id column in the car table
-- see person-car.sql for more details
```

INNER JOINS return records that have matching values in both tables.

```sql
SELECT * FROM person INNER JOIN car ON person.car_id = car.id;
-- returns all records from the person table that have a matching car_id in the car table
SELECT person.first_name, car.make, car.model, car.price FROM person INNER JOIN car ON person.car_id = car.id;
-- returns the first_name, make, model, and price of all records from the person table that have a matching car_id in the car table
```

LEFT JOINS return all records from the left table and the matched records from the right table.

```sql
SELECT * FROM person LEFT JOIN car ON person.car_id = car.id;
-- returns all records from the person table (left-table) and the matched records from the car table (right-table)
SELECT * FROM person LEFT JOIN car ON person.car_id = car.id WHERE car.* IS NULL;
-- returns all records from the person table (left-table) that do not have a matching car_id in the car table (right-table)
-- car.* is used to select all columns from the car table
```

---

Deleting record with foreign key constraints:

- ON DELETE CASCADE: deletes all records in the child table when a record in the parent table is deleted
- best-practice to delete records in the child table first before deleting records in the parent table

---

Exporting query results to a CSV file:

```sql
\copy (SELECT * FROM person LEFT JOIN car ON person.car_id = car.id) TO 'C:\Users\pjang\Desktop\person_car.csv' DELIMITER ',' CSV HEADER;
-- \copy is used to export query results to a CSV file
```

---

SERIAL and SEQUENCES:

- SERIAL is a shortcut for creating an auto-incrementing column
- SERIAL is a shortcut for creating a SEQUENCE and a DEFAULT constraint
- SEQUENCE is an object that generates a sequence of integers
- SEQUENCE is used to generate unique values for a column
- SEQUENCE is used to generate unique values for an auto-incrementing column
- SEQUENCE could use INT, BIGINT, SMALLINT, or any other integer data type

```sql
SELECT nextval('person_id_seq'::regclass);
-- returns the next value in the person_id_seq sequence
SELECT currval('person_id_seq'::regclass);
-- returns the current value in the person_id_seq sequence
SELECT lastval();
-- returns the last value in the sequence that was used in the current session
ALTER SEQUENCE person_id_seq RESTART WITH 10;
-- restarts the person_id_seq sequence with 10
SELECT * FROM person_id_seq;
-- return last_value, log_cnt, and is_called
```

---

PostgreSQL Extensions:

```sql
SELECT * FROM pg_available_extensions;
-- returns a list of all available extensions
```

uuid-ossp extension:

- provides functions for generating UUIDs
- UUIDs are unique identifiers that are used to identify information in computer systems
- UUIDs are 128-bit numbers that are composed of 16 octets (8-bit bytes)
- UUIDs are usually displayed as 32 hexadecimal digits separated by hyphens

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- creates the uuid-ossp extension if it does not already exist
-- install an extension
\df
-- returns a list of all functions
SELECT uuid_generate_v4();
-- returns a random UUID
SELECT * FROM person INNER JOIN car USING (car_uid) WHERE car.* IS NULL;
-- returns all records from the person table (left-table) USING the car_uid column and the matched records from the car table (right-table)
-- USING is used to join tables on columns that have the same name
```

---
