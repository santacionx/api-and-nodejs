# SQL Command Reference

This repository contains a comprehensive guide to SQL commands for database manipulation and management.

## Table of Contents

1. [Database Creation](#database-creation)
2. [Schema Design](#schema-design)
3. [Basic Queries](#basic-queries)
4. [Conditional Queries](#conditional-queries)
5. [Table Manipulation](#table-manipulation)
6. [Advanced Operations](#advanced-operations)

## Database Creation

```sql
CREATE DATABASE IF NOT EXISTS instagram;
-- DROP DATABASE college;
USE instagram;
```
## schema-design
```sql
CREATE TABLE student (
  usn INT,
  name VARCHAR(30),
  age INT
);

-- Inserting data
INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);

-- Retrieving data
SELECT * FROM student;


CREATE TABLE user (
  id INT,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(30) UNIQUE,
  followers INT DEFAULT 0,
  following INT,
  age INT,
  CONSTRAINT check_age CHECK (age >= 13),
  PRIMARY KEY (id)
);

INSERT INTO user
(id, name, email, followers, following, age)
VALUES
(1, "adam", "adam@gmail.com", 1000, 0, 15),
-- ... (other user inserts)

CREATE TABLE post (
  id INT PRIMARY KEY,
  content VARCHAR(100),
  userid INT,
  FOREIGN KEY (userid) REFERENCES user(id)
);

INSERT INTO post
(id, content, userid)
VALUES
(100, "adam insta is live", 1),
-- ... (other post inserts)

```

## basic-queries
```sql
SELECT id, age, name FROM user;
SELECT DISTINCT * FROM post;

Aggregate Functions
SELECT MAX(age) FROM user;
SELECT COUNT(age) FROM user WHERE age > 15;


```
## conditional-queries
```sql
Filtering Records
SELECT * FROM user WHERE age <= 16;
SELECT * FROM user WHERE age BETWEEN 15 AND 17;
-- ... (other conditional queries)

Sorting Results
SELECT * FROM user ORDER BY followers DESC;

```

## table-manipulation
```sql
Update and Delete Records
UPDATE user
SET followers = 3000
WHERE age = 17;

DELETE FROM user
WHERE age = 17;

Schema Modifications
ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT 'banglore';

-- ... (other schema changes)


```
## advanced-operations
```sql
Grouping and Aggregation
SELECT age, MAX(followers) FROM user GROUP BY age;
SELECT age, MAX(followers) FROM user GROUP BY age HAVING MAX(followers) > 1000;
-- ... (other advanced queries)

Other Operations
-- Truncate table data
TRUNCATE TABLE user;

-- ... (other advanced operations)
```
