# SQL Command Reference

This repository contains a comprehensive guide to SQL commands for database manipulation and management.

## Table of Contents

1. [Database Creation](#database-creation)
2. [Schema Design](#schema-design)
3. [Basic Queries](#basic-queries)
4. [Conditional Queries](#conditional-queries)
5. [Table Manipulation](#table-manipulation)
6. [Advanced Operations](#advanced-operations)

## points to remeber 
```sql
-- show databases;

-- show tables;
-- TABLE QUERIES
-- CREATE (SCHEME DESIGN) , INSERT , UPDATE, ALTER, TRUNCATE, DELETE
-- Data typeS:
 -- char(0-255), varchar(0-255), blob(0-65535), INT, TINYINT  ,BIGINT, BIT,
-- FLOAT, DOUBLE,BOOLEAN,DATE,YEAR ,unsigned +ve numbers
-- constraints (rules)
-- NOT NULL,  UNIQUE , DEFAULT # , CONSTRAINT (*VARIABLE_check) CHECK (CONDITION),
-- PRIMARY KEY(UNIQUE+NOTNULL) only 1, foreign key (table1) -- references  (table2) [set of cols ref pk of another table] duplicate and null
-- INSERT INTO TABLE_NAME (COLS) VALUE (C1,C3)
-- select  distinct c1,c2 from tablename
-- clauses certain condition
-- where (conditions); +,-*,/,%,=,!=,<,<=,>,>=,and or not in between all like any,&,|
-- and (both true) , or (any 1 true) , between (range), IN (list match)
-- limit clause (sets upperlimit on number)

select  *  from user limit 2;
-- orderby(col) asc clause (sort asc desc)
select  *  from user order by  followers desc;
-- aggregate functions return 1 value
-- count(), max(), min(), sum(),avg()

-- group by clause  with aggregate only (group rows same value into summary row) call only col used in group by only


select age ,max(followers) from user group by (age);

-- having clause ~ where clause but!!  groupby used  
select age ,max(followers) from user group by (age) having (max(followers)>1000 ) order by age desc;


-- general order
-- select , from , where, groupby, having orderby

-- table queries (existing rows update)
-- update  table name set col1=val1 where condition

-- table queries (change schema )
-- alter table add,drop, rename table,change column old new type,modify add new type or constraint

alter table user
add column city varchar(25) default "banglore";

select * from user; 

alter table user
drop column city ;

alter table user
rename to  instauser ;

select * from instauser ; 
alter table instauser
rename to  user ;


alter table user
change column followers subs int  default 0 ;
select * from user ; 

alter table user
modify subs int default 0 ;
select * from user ; 
-- table queries (delete table data  ) trucate

```

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
