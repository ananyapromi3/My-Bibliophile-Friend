DELETE FROM Book;
DELETE FROM Author;
DELETE FROM Address;
DELETE FROM Publisher;
DELETE FROM UserMan;
DELETE FROM Delivary_Man;
DELETE FROM Book_Man;
DELETE FROM Notification;
DELETE FROM Exchange_Offer;
DELETE FROM Offer;
DELETE FROM Review;
DELETE FROM WrittenBy;


-- Publisher 
-- name VARCHAR(100) NOT NULL,
-- address VARCHAR(200),
-- website VARCHAR(50),
-- email VARCHAR(50),
-- contactNo NUMERIC(15, 0)
INSERT INTO Publisher VALUES ('Mermaid Media & Publications', '218 Elephant Road, Bata Signal, Dhaka', NULL, 'mermaidmediabd@gmail.com', 01731495857);
INSERT INTO Publisher VALUES ('Tamralipi', '38/2A, Banglabazar, Dhaka-1100', NULL, NULL, NULL);
INSERT INTO Publisher VALUES ('ABC Publications', '123 Main St, Dhaka', 'www.abcpub.com', 'contact@abcpub.com', 1234567890);
INSERT INTO Publisher VALUES ('XYZ Books', '456 Oak Ave, Chittagong', 'www.xyzbooks.com', 'info@xyzbooks.com', 9876543210);
INSERT INTO Publisher VALUES ('Books R Us', '789 Elm Rd, Sylhet', 'www.booksrus.com', 'sales@booksrus.com', 5678901234);
INSERT INTO Publisher VALUES ('Novelty Press', '101 Maple Ln, Rajshahi', 'www.novelpress.com', 'support@novelpress.com', 4321098765);
INSERT INTO Publisher VALUES ('Inkwell Publishers', '222 Birch St, Khulna', 'www.inkwellpub.com', 'info@inkwellpub.com', 8765432109);
INSERT INTO Publisher VALUES ('Sunrise Books', '333 Pine Ave, Barisal', 'www.sunrisebooks.com', 'contact@sunrisebooks.com', 2109876543);
INSERT INTO Publisher VALUES ('Moonlight Publications', '444 Cedar Rd, Comilla', 'www.moonpub.com', 'sales@moonpub.com', 6543210987);
INSERT INTO Publisher VALUES ('Starlit Press', '555 Willow Dr, Cox''s Bazar', 'www.starlitpress.com', 'info@starlitpress.com', 7890123456);
INSERT INTO Publisher VALUES ('Horizon Books', '666 Poplar St, Rangpur', 'www.horizonbooks.com', 'support@horizonbooks.com', 5432109876);
INSERT INTO Publisher VALUES ('Fiction House', '777 Elm St, Jessore', 'www.fictionhouse.com', 'contact@fictionhouse.com', 9012345678);
INSERT INTO Publisher VALUES ('Acme Publishers', '888 Oak Rd, Gazipur', 'www.acmepub.com', 'info@acmepub.com', 2345678901);
INSERT INTO Publisher VALUES ('Wonder Books', '999 Maple Ave, Narayanganj', 'www.wonderbooks.com', 'sales@wonderbooks.com', 8901234567);
INSERT INTO Publisher VALUES ('Dreamscape Publications', '111 Pine Rd, Feni', 'www.dreamscapepub.com', 'contact@dreamscapepub.com', 7654321098);
INSERT INTO Publisher VALUES ('Scribbler Press', '222 Cedar St, Dinajpur', 'www.scribblerpress.com', 'info@scribblerpress.com', 1098765432);
INSERT INTO Publisher VALUES ('Mystic Books', '333 Willow Ave, Pabna', 'www.mysticbooks.com', 'support@mysticbooks.com', 4321098765);
INSERT INTO Publisher VALUES ('Whimsical Publications', '444 Poplar Rd, Bogra', 'www.whimsicalpub.com', 'sales@whimsicalpub.com', 6543210987);
INSERT INTO Publisher VALUES ('Journey Books', '555 Elm St, Tangail', 'www.journeybooks.com', 'contact@journeybooks.com', 8765432109);
INSERT INTO Publisher VALUES ('Adventure Press', '666 Oak Ave, Barishal', 'www.adventurepress.com', 'info@adventurepress.com', 2109876543);
INSERT INTO Publisher VALUES ('Chronicle Books', '777 Maple Rd, Pirojpur', 'www.chroniclebooks.com', 'contact@chroniclebooks.com', 5432109876);
INSERT INTO Publisher VALUES ('Enigma Publishers', '888 Pine St, Bhola', 'www.enigmapub.com', 'sales@enigmapub.com', 9012345678);
INSERT INTO Publisher VALUES ('Eclipse Books', '999 Willow Ave, Jhalokati', 'www.eclipsebooks.com', 'info@eclipsebooks.com', 2345678901);
INSERT INTO Publisher VALUES ('Perennial Press', '111 Poplar Rd, Barguna', 'www.perennialpress.com', 'support@perennialpress.com', 8901234567);
INSERT INTO Publisher VALUES ('Harmony Publications', '222 Elm St, Patuakhali', 'www.harmonypub.com', 'contact@harmonypub.com', 7654321098);
INSERT INTO Publisher VALUES ('Rainbow Books', '333 Oak Ave, Satkhira', 'www.rainbowbooks.com', 'info@rainbowbooks.com', 1098765432);
INSERT INTO Publisher VALUES ('Moonshadow Press', '444 Maple Rd, Khagrachari', 'www.moonshadowpub.com', 'sales@moonshadowpub.com', 4321098765);
INSERT INTO Publisher VALUES ('Voyage Books', '555 Cedar St, Cox''s Bazar', 'www.voyagebooks.com', 'contact@voyagebooks.com', 6543210987);
INSERT INTO Publisher VALUES ('Celestial Publications', '666 Pine Rd, Bandarban', 'www.celestialpub.com', 'info@celestialpub.com', 8765432109);
INSERT INTO Publisher VALUES ('Elysian Press', '777 Willow Ave, Rangamati', 'www.elysianpress.com', 'support@elysianpress.com', 2109876543);
INSERT INTO Publisher VALUES ('Evergreen Books', '888 Poplar Rd, Chittagong', 'www.evergreenbooks.com', 'contact@evergreenbooks.com', 5432109876);
INSERT INTO Publisher VALUES ('Wanderlust Publishers', '999 Elm St, Khulna', 'www.wanderlustpub.com', 'sales@wanderlustpub.com', 9012345678);
INSERT INTO Publisher VALUES ('Whispering Woods Publications', '111 Oak Ave, Dhaka', 'www.whisperingwoods.com', 'info@whisperingwoods.com', 2345678901);
INSERT INTO Publisher VALUES ('Fairy Tale Press', '222 Maple Rd, Chattogram', 'www.fairytalepress.com', 'contact@fairytalepress.com', 8901234567);
INSERT INTO Publisher VALUES ('Puzzlebox Publications', '333 Cedar St, Rajshahi', 'www.puzzleboxpub.com', 'sales@puzzleboxpub.com', 1098765432);
INSERT INTO Publisher VALUES ('Imagination Books', '444 Pine Rd, Dhaka', 'www.imaginationbooks.com', 'info@imaginationbooks.com', 4321098765);
INSERT INTO Publisher VALUES ('Wise Words Press', '555 Poplar St, Chittagong', 'www.wisewordspress.com', 'contact@wisewordspress.com', 6543210987);
INSERT INTO Publisher VALUES ('Talespin Books', '666 Elm Rd, Sylhet', 'www.talespinbooks.com', 'sales@talespinbooks.com', 876543210);


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
INSERT INTO Book VALUES ('978-984-94751', 'Chander Gari', 63, 'Bangla', 'Novel', 2020, 200, NULL, 'Mermaid Media & Publications');
INSERT INTO Book VALUES ('984-70096-0357-0', 'Shohoj Calculus', 86, 'Bangla', 'Math', 2016, 160, NULL, 'Tamralipi');
INSERT INTO Book VALUES ('978-984-94751-1-8', 'The Enchanted Garden', 350, 'English', 'Fantasy', 2022, 25.99, 'enchanted_garden.jpg', 'ABC Publications');
INSERT INTO Book VALUES ('978-984-94751-2-5', 'Lost in Time', 280, 'English', 'Science Fiction', 2021, 19.99, 'lost_in_time.jpg', 'ABC Publications');
INSERT INTO Book VALUES ('978-984-94751-3-2', 'Secrets of the Moon', 400, 'English', 'Mystery', 2023, 22.50, 'secrets_of_moon.jpg', 'XYZ Books');
INSERT INTO Book VALUES ('978-984-94751-4-9', 'The Quest for Atlantis', 320, 'English', 'Adventure', 2020, 21.75, 'quest_for_atlantis.jpg', 'XYZ Books');
INSERT INTO Book VALUES ('978-984-94751-5-6', 'Whispers in the Woods', 420, 'English', 'Fantasy', 2021, 23.00, 'whispers_in_woods.jpg', 'Books R Us');
INSERT INTO Book VALUES ('978-984-94751-6-3', 'The Art of War', 250, 'English', 'Non-fiction', 2019, 18.50, 'art_of_war.jpg', 'Books R Us');
INSERT INTO Book VALUES ('978-984-94751-7-0', 'A Glimpse of Eternity', 380, 'English', 'Romance', 2022, 24.00, 'glimpse_of_eternity.jpg', 'Novelty Press');
INSERT INTO Book VALUES ('978-984-94751-8-7', 'The Time Traveler', 300, 'English', 'Science Fiction', 2023, 20.50, 'time_traveler.jpg', 'Novelty Press');
INSERT INTO Book VALUES ('978-984-94751-9-4', 'Murder at Midnight', 280, 'English', 'Mystery', 2021, 19.99, 'murder_at_midnight.jpg', 'Inkwell Publishers');
INSERT INTO Book VALUES ('978-984-94752-0-0', 'The Chronicles of Light', 400, 'English', 'Fantasy', 2020, 21.50, 'chronicles_of_light.jpg', 'Inkwell Publishers');
INSERT INTO Book VALUES ('978-984-94752-1-7', 'Journey to the Stars', 340, 'English', 'Science Fiction', 2023, 23.25, 'journey_to_stars.jpg', 'Sunrise Books');
INSERT INTO Book VALUES ('978-984-94752-2-4', 'The Forgotten Island', 280, 'English', 'Adventure', 2019, 18.99, 'forgotten_island.jpg', 'Sunrise Books');
INSERT INTO Book VALUES ('978-984-94752-3-1', 'The Moonlit Garden', 370, 'English', 'Romance', 2021, 22.00, 'moonlit_garden.jpg', 'Moonlight Publications');
INSERT INTO Book VALUES ('978-984-94752-4-8', 'The Puzzle Master', 320, 'English', 'Mystery', 2020, 20.50, 'puzzle_master.jpg', 'Moonlight Publications');
INSERT INTO Book VALUES ('978-984-94752-5-5', 'Stardust Dreams', 400, 'English', 'Fantasy', 2022, 25.00, 'stardust_dreams.jpg', 'Starlit Press');
INSERT INTO Book VALUES ('978-984-94752-6-2', 'Beyond the Horizon', 290, 'English', 'Science Fiction', 2023, 21.75, 'beyond_the_horizon.jpg', 'Starlit Press');
INSERT INTO Book VALUES ('978-984-94752-7-9', 'The Book of Wonders', 420, 'English', 'Fantasy', 2021, 23.50, 'book_of_wonders.jpg', 'Horizon Books');
INSERT INTO Book VALUES ('978-984-94752-8-6', 'The Mind\'s Eye', 350, 'English', 'Science Fiction', 2022, 24.25, 'minds_eye.jpg', 'Horizon Books');
INSERT INTO Book VALUES ('978-984-94752-9-3', 'Dancing in the Rain', 280, 'English', 'Romance', 2020, 19.99, 'dancing_in_rain.jpg', 'Fiction House');
INSERT INTO Book VALUES ('978-984-94753-0-9', 'The Secret Garden', 300, 'English', 'Mystery', 2019, 20.50, 'secret_garden.jpg', 'Fiction House');
INSERT INTO Book VALUES ('978-984-94753-1-6', 'A Walk in the Clouds', 340, 'English', 'Romance', 2021, 22.00, 'walk_in_clouds.jpg', 'Acme Publishers');
INSERT INTO Book VALUES ('978-984-94753-2-3', 'The Quantum Paradox', 320, 'English', 'Science Fiction', 2023, 21.75, 'quantum_paradox.jpg', 'Acme Publishers');
INSERT INTO Book VALUES ('978-984-94753-3-0', 'The Magic Mirror', 370, 'English', 'Fantasy', 2022, 23.25, 'magic_mirror.jpg', 'Wonder Books');
INSERT INTO Book VALUES ('978-984-94753-4-7', 'The Hidden Path', 290, 'English', 'Adventure', 2020, 18.99, 'hidden_path.jpg', 'Wonder Books');
INSERT INTO Book VALUES ('978-984-94753-5-4', 'The Midnight Caller', 390, 'English', 'Mystery', 2021, 24.00, 'midnight_caller.jpg', 'Dreamscape Publications');
INSERT INTO Book VALUES ('978-984-94753-6-1', 'The Power of Dreams', 320, 'English', 'Fantasy', 2022, 20.50, 'power_of_dreams.jpg', 'Dreamscape Publications');
INSERT INTO Book VALUES ('978-984-94753-7-8', 'Into the Unknown', 340, 'English', 'Science Fiction', 2020, 22.00, 'into_the_unknown.jpg', 'Scribbler Press');
INSERT INTO Book VALUES ('978-984-94753-8-5', 'The Secrets of the Sea', 400, 'English', 'Adventure', 2019, 23.50, 'secrets_of_sea.jpg', 'Scribbler Press');
INSERT INTO Book VALUES ('978-984-94753-9-2', 'The Alchemist\'s Apprentice', 290, 'English', 'Fantasy', 2022, 19.99, 'alchemists_apprentice.jpg', 'Mystic Books');
INSERT INTO Book VALUES ('978-984-94754-0-8', 'The Journey Home', 350, 'English', 'Romance', 2021, 24.25, 'journey_home.jpg', 'Mystic Books');
INSERT INTO Book VALUES ('978-984-94754-1-5', 'The Hidden Gem', 320, 'English', 'Mystery', 2023, 21.75, 'hidden_gem.jpg', 'Whimsical Publications');
INSERT INTO Book VALUES ('978-984-94754-2-2', 'The Last Enchantment', 400, 'English', 'Fantasy', 2020, 23.00, 'last_enchantment.jpg', 'Whimsical Publications');
INSERT INTO Book VALUES ('978-984-94754-3-9', 'Through the Looking Glass', 280, 'English', 'Science Fiction', 2021, 19.99, 'looking_glass.jpg', 'Journey Books');
INSERT INTO Book VALUES ('978-984-94754-4-6', 'The Forgotten Forest', 320, 'English', 'Adventure', 2022, 21.50, 'forgotten_forest.jpg', 'Journey Books');
INSERT INTO Book VALUES ('978-984-94754-5-3', 'The Moonlight Sonata', 340, 'English', 'Romance', 2023, 22.25, 'moonlight_sonata.jpg', 'Adventure Press');
INSERT INTO Book VALUES ('978-984-94754-6-0', 'The Forbidden Island', 380, 'English', 'Mystery', 2020, 24.00, 'forbidden_island.jpg', 'Adventure Press');
INSERT INTO Book VALUES ('978-984-94754-7-7', 'The Lost City', 290, 'English', 'Adventure', 2022, 20.99, 'lost_city.jpg', 'Chronicle Books');
INSERT INTO Book VALUES ('978-984-94754-8-4', 'The Quest for Knowledge', 360, 'English', 'Science Fiction', 2021, 23.50, 'quest_for_knowledge.jpg', 'Chron');


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
INSERT INTO Author VALUES ('Emily Green', 1985, NULL, 'Fiction', 'American');
INSERT INTO Author VALUES ('David White', 1978, NULL, 'Science Fiction', 'British');
INSERT INTO Author VALUES ('Emma Black', 1990, NULL, 'Mystery', 'Australian');
INSERT INTO Author VALUES ('Daniel Blue', 1982, NULL, 'Adventure', 'Canadian');
INSERT INTO Author VALUES ('Sophia Silver', 1987, NULL, 'Fantasy', 'Irish');
INSERT INTO Author VALUES ('John Smith', 1965, NULL, 'Non-fiction', 'American');
INSERT INTO Author VALUES ('Olivia Rose', 1995, NULL, 'Romance', 'British');
INSERT INTO Author VALUES ('Michael Brown', 1972, NULL, 'Science Fiction', 'American');
INSERT INTO Author VALUES ('Alice Green', 1989, NULL, 'Mystery', 'Canadian');
INSERT INTO Author VALUES ('Lucy White', 1984, NULL, 'Science Fiction', 'Australian');
INSERT INTO Author VALUES ('Oliver Gray', 1992, NULL, 'Adventure', 'British');
INSERT INTO Author VALUES ('Emma White', 1991, NULL, 'Romance', 'Irish');
INSERT INTO Author VALUES ('Daniel Green', 1988, NULL, 'Fantasy', 'American');
INSERT INTO Author VALUES ('Emily Blue', 1980, NULL, 'Science Fiction', 'Canadian');
INSERT INTO Author VALUES ('Sophia Black', 1986, NULL, 'Fantasy', 'British');
INSERT INTO Author VALUES ('Michael Blue', 1979, NULL, 'Science Fiction', 'Australian');
INSERT INTO Author VALUES ('Olivia Gray', 1983, NULL, 'Fantasy', 'Irish');
INSERT INTO Author VALUES ('David Black', 1970, NULL, 'Fantasy', 'American');
INSERT INTO Author VALUES ('Lucy White', 1981, NULL, 'Romance', 'Canadian');
INSERT INTO Author VALUES ('Sophia Silver', 1993, NULL, 'Mystery', 'Australian');
INSERT INTO Author VALUES ('John Black', 1977, NULL, 'Adventure', 'British');
INSERT INTO Author VALUES ('Oliver Gray', 1996, NULL, 'Fantasy', 'American');
INSERT INTO Author VALUES ('Alice Green', 1976, NULL, 'Mystery', 'Canadian');
INSERT INTO Author VALUES ('David White', 1989, NULL, 'Science Fiction', 'Australian');
INSERT INTO Author VALUES ('Emma Black', 1982, NULL, 'Mystery', 'British');
INSERT INTO Author VALUES ('Daniel Blue', 1973, NULL, 'Adventure', 'Irish');
INSERT INTO Author VALUES ('Sophia Silver', 1980, NULL, 'Fantasy', 'Canadian');
INSERT INTO Author VALUES ('Emily Green', 1991, NULL, 'Fiction', 'American');
INSERT INTO Author VALUES ('Michael Brown', 1978, NULL, 'Science Fiction', 'British');
INSERT INTO Author VALUES ('Olivia Rose', 1985, NULL, 'Romance', 'Australian');
INSERT INTO Author VALUES ('John Smith', 1982, NULL, 'Non-fiction', 'Canadian');
INSERT INTO Author VALUES ('Lucy White', 1990, NULL, 'Science Fiction', 'British');
INSERT INTO Author VALUES ('Sophia Black', 1974, NULL, 'Fantasy', 'American');
INSERT INTO Author VALUES ('Oliver Gray', 1997, NULL, 'Adventure', 'Irish');
INSERT INTO Author VALUES ('David Black', 1986, NULL, 'Fantasy', 'Canadian');
INSERT INTO Author VALUES ('Emma White', 1975, NULL, 'Romance', 'Australian');
INSERT INTO Author VALUES ('Daniel Green', 1983, NULL, 'Fantasy', 'British');
INSERT INTO Author VALUES ('Emily Blue', 1988, NULL, 'Science Fiction', 'American');
INSERT INTO Author VALUES ('Sophia Silver', 1981, NULL, 'Mystery', 'Canadian');
INSERT INTO Author VALUES ('Michael Blue', 1979, NULL, 'Science Fiction', 'Irish');
INSERT INTO Author VALUES ('Olivia Gray', 1986, NULL, 'Fantasy', 'British');
INSERT INTO Author VALUES ('David White', 1972, NULL, 'Science Fiction', 'American');
INSERT INTO Author VALUES ('Emma Black', 1984, NULL, 'Mystery', 'Canadian');
INSERT INTO Author VALUES ('Daniel Blue', 1977, NULL, 'Adventure', 'British');
INSERT INTO Author VALUES ('Sophia Silver', 1989, NULL, 'Fantasy', 'Australian');
INSERT INTO Author VALUES ('John Smith', 1970, NULL, 'Non-fiction', 'Irish');
INSERT INTO Author VALUES ('Oliver Gray', 1992, NULL, 'Adventure', 'Canadian');
INSERT INTO Author VALUES ('Alice Green', 1985, NULL, 'Mystery', 'British');
INSERT INTO Author VALUES ('David Black', 1981, NULL, 'Fantasy', 'American');
INSERT INTO Author VALUES ('Lucy White', 1979, NULL, 'Science Fiction', 'Australian');
INSERT INTO Author VALUES ('Sophia Black', 1983, NULL, 'Fantasy', 'Canadian');
INSERT INTO Author VALUES ('Michael Blue', 1978, NULL, 'Science Fiction', 'British');
INSERT INTO Author VALUES ('Olivia Gray', 1972, NULL, 'Fantasy', 'American');


-- WrittenBy 
-- ISBN VARCHAR(50) NOT NULL,
-- name VARCHAR(100) NOT NULL
INSERT INTO WrittenBy VALUES ('978-984-94751', 'Ananya Shahrin Promi');
INSERT INTO WrittenBy VALUES ('984-70096-0357-0', 'Muhammed Zafar Iqbal');
INSERT INTO WrittenBy VALUES ('978-984-94751-1-8', 'Emily Green');
INSERT INTO WrittenBy VALUES ('978-984-94751-1-8', 'Daniel Green');
INSERT INTO WrittenBy VALUES ('978-984-94751-2-5', 'David White');
INSERT INTO WrittenBy VALUES ('978-984-94751-3-2', 'Emma Black');
INSERT INTO WrittenBy VALUES ('978-984-94751-4-9', 'Daniel Blue');
INSERT INTO WrittenBy VALUES ('978-984-94751-5-6', 'Sophia Silver');
INSERT INTO WrittenBy VALUES ('978-984-94751-6-3', 'John Smith');
INSERT INTO WrittenBy VALUES ('978-984-94751-7-0', 'Olivia Rose');
INSERT INTO WrittenBy VALUES ('978-984-94751-8-7', 'Michael Brown');
INSERT INTO WrittenBy VALUES ('978-984-94751-9-4', 'Alice Green');
INSERT INTO WrittenBy VALUES ('978-984-94752-0-0', 'David Black');
INSERT INTO WrittenBy VALUES ('978-984-94753-0-9', 'Emily Green');
INSERT INTO WrittenBy VALUES ('978-984-94753-1-6', 'Daniel White');
INSERT INTO WrittenBy VALUES ('978-984-94753-2-3', 'Sophia Silver');
INSERT INTO WrittenBy VALUES ('978-984-94753-3-0', 'John Black');
INSERT INTO WrittenBy VALUES ('978-984-94753-4-7', 'Lucy White');
