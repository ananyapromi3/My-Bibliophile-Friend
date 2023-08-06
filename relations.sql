DELETE FROM Book;
DELETE FROM Author;
DELETE FROM Address;
DELETE FROM Publisher;
DELETE FROM User;
DELETE FROM Delivary_Man;
DELETE FROM Book_Man;
DELETE FROM Notification;
DELETE FROM Exchange_Offer;
DELETE FROM Offer;
DELETE FROM Review;
DELETE FROM WrittenBy;

-- Book
-- ISBN VARCHAR(50) NOT NULL,
-- title VARCHAR(100) NOT NULL,
-- pageCount NUMERIC(5, 0),
-- language VARCHAR(10) NOT NULL,
-- genre VARCHAR(10) NOT NULL,
-- publishYear NUMERIC(4, 0),
-- price NUMERIC(5, 2),
-- coverPhoto VARCHAR(100),
-- publisherName VARCHAR(100)
INSERT INTO Book VALUES ('978-984-94751-1-8', 'Chander Gari', 63, 'Bangla', 'Novel', 2020, 200, NULL, 'Mermaid Media & Publications');
INSERT INTO Book VALUES ('984-70096-0357-0', 'Shohoj Calculus', 86, 'Bangla', 'Math', 2016, 160, NULL, 'Tamralipi');

-- Author
-- name VARCHAR(100) NOT NULL,
-- bornOn NUMERIC(4, 0),
-- diedOn NUMERIC(4, 0),
-- type VARCHAR(50),
-- nationality VARCHAR(20)
INSERT INTO Author VALUES ('Ananya Shahrin Promi', 2003, NULL, NULL, 'Bangladeshi');
INSERT INTO Author VALUES ('Muhammed Zafar Iqbal', 1952, NULL, 'Writer', 'Bangladeshi');
INSERT INTO Author VALUES ('Humayun Ahmed', 1948, 2012, 'Novelist', 'Bangladeshi');
INSERT INTO Author VALUES ('Paulo Coelho', 1947, NULL, 'Lyricist', 'Brazilian');

-- Publisher 
-- name VARCHAR(100) NOT NULL,
-- address VARCHAR(200),
-- website VARCHAR(50),
-- email VARCHAR(50),
-- contactNo NUMERIC(15, 0)
INSERT INTO Publisher VALUES ('Mermaid Media & Publications', '218 Elephant Road, Bata Signal, Dhaka', NULL, 'mermaidmediabd@gmail.com', 01731495857);
INSERT INTO Publisher VALUES ('Tamralipi', '38/2A, Banglabazar, Dhaka-1100', NULL, NULL, NULL);

-- WrittenBy 
-- ISBN VARCHAR(50) NOT NULL,
-- name VARCHAR(100) NOT NULL
INSERT INTO WrittenBy VALUES ('978-984-94751-1-8', 'Ananya Shahrin Promi');
INSERT INTO WrittenBy VALUES ('984-70096-0357-0', 'Muhammed Zafar Iqbal');