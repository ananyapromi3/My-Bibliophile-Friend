CREATE TABLE Author (
	name VARCHAR(100) NOT NULL,
	bornOn NUMERIC(4, 0),
	diedOn NUMERIC(4, 0),
	type VARCHAR(50),
	nationality VARCHAR(20),
	PRIMARY KEY (name)
);
CREATE TABLE Address (
	latitude FLOAT NOT NULL,
	longitude FLOAT NOT NULL,
	PRIMARY KEY (latitude, longitude),
);
CREATE TABLE Publisher (
	name VARCHAR(100) NOT NULL,
	address VARCHAR(200),
	website VARCHAR(50),
	email VARCHAR(50),
	contactNo NUMERIC(15, 0),
	PRIMARY KEY (name)
);
CREATE TABLE User (
	emailID VARCHAR(50) NOT NULL,
	contactNo1 NUMERIC(15, 0),
	contactNo2 NUMERIC(15, 0),
	firstName VARCHAR(50) NOT NULL,
	dateOfBirth DATE NOT NULL,
	gender VARCHAR(10) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	latitude NUMERIC(3, 7) NOT NULL,
	longitude NUMERIC(3, 7) NOT NULL,
	PRIMARY KEY (emailID),
	FOREIGN KEY (latitude, longitude) REFERENCES Address(latitude, longitude)
);
CREATE TABLE Delivary_Man (
	delivaryManID NUMERIC(10, 0) NOT NULL,
	emailID VARCHAR(50) NOT NULL,
	PRIMARY KEY (emailID),
	FOREIGN KEY (emailID) REFERENCES User(emailID),
	UNIQUE (delivaryManID)
);
CREATE TABLE Book_Man (
	bookManID NUMERIC(10, 0) NOT NULL,
	emailID VARCHAR(50) NOT NULL,
	PRIMARY KEY (emailID),
	FOREIGN KEY (emailID) REFERENCES User(emailID),
	UNIQUE (bookManID)
);
CREATE TABLE Notification (
	time TIMESTAMP NOT NULL,
	message VARCHAR(500),
	userEmailID VARCHAR(50) NOT NULL,
	PRIMARY KEY (time),
	FOREIGN KEY (userEmailID) REFERENCES User(emailID)
);
CREATE TABLE Book (
	ISBN VARCHAR(50) NOT NULL,
	title VARCHAR(100) NOT NULL,
	pageCount NUMERIC(5, 0),
	language VARCHAR(10) NOT NULL,
	genre VARCHAR(10) NOT NULL,
	publishYear NUMERIC(4, 0),
	price NUMERIC(5, 2),
	coverPhoto VARCHAR(100),
	publisherName VARCHAR(100),
	PRIMARY KEY (ISBN),
	FOREIGN KEY (publisherName) REFERENCES Publisher(name)
);
CREATE TABLE Exchange_Offer (
	exchangeID NUMERIC(10, 0) NOT NULL,
	processStartDate DATE,
	exchangeCompletionDate DATE,
	delivaryManEmailID VARCHAR(50),
	PRIMARY KEY (exchangeID),
	FOREIGN KEY (delivaryManEmailID) REFERENCES Delivary_Man(emailID)
);
CREATE TABLE Offer (
	declareDate DATE NOT NULL,
	offerID NUMERIC(10, 0) NOT NULL,
	message VARCHAR(500),
	bookConditionPhoto VARCHAR(100) NOT NULL,
	userEmailID VARCHAR(50) NOT NULL,
	ISBN VARCHAR(50) NOT NULL,
	exchangeID NUMERIC(10, 0),
	PRIMARY KEY (offerID),
	FOREIGN KEY (userEmailID) REFERENCES Book_Man(emailID),
	FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
	FOREIGN KEY (exchangeID) REFERENCES Exchange_Offer(exchangeID)
);
CREATE TABLE Review (
	messageForUs VARCHAR(500),
	dateOfReview DATE NOT NULL,
	rateUs NUMERIC(1, 0) NOT NULL,
	reviewID NUMERIC(10, 0) NOT NULL,
	emailID VARCHAR(50) NOT NULL,
	PRIMARY KEY (reviewID),
	FOREIGN KEY (emailID) REFERENCES User(emailID)
);
CREATE TABLE WrittenBy (
	ISBN VARCHAR(50) NOT NULL,
	name VARCHAR(100) NOT NULL,
	PRIMARY KEY (ISBN, name),
	FOREIGN KEY (ISBN) REFERENCES Book(ISBN),
	FOREIGN KEY (name) REFERENCES Author(name)
);