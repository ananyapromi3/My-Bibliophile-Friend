/*
 Navicat Premium Data Transfer

 Source Server         : Project
 Source Server Type    : Oracle
 Source Server Version : 190000 (Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production)
 Source Host           : 0.0.0.0:1521
 Source Schema         : PROJECT

 Target Server Type    : Oracle
 Target Server Version : 190000 (Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production)
 File Encoding         : 65001

 Date: 21/08/2023 05:15:19
*/


-- ----------------------------
-- Table structure for ADDRESS
-- ----------------------------
DROP TABLE "PROJECT"."ADDRESS";
CREATE TABLE "PROJECT"."ADDRESS" (
  "LATITUDE" NUMBER(10,7) VISIBLE NOT NULL,
  "LONGITUDE" NUMBER(10,7) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of ADDRESS
-- ----------------------------
INSERT INTO "PROJECT"."ADDRESS" VALUES ('23.7661639', '90.3588734');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('34.0522', '-118.2437');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('34.052235', '-118.243683');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('37.7749', '-122.4194');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('37.7749295', '-122.4194155');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('40.712776', '-74.005974');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('40.7128', '-74.0059');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('41.8781', '-87.6298');
INSERT INTO "PROJECT"."ADDRESS" VALUES ('51.5074', '-0.1278');

-- ----------------------------
-- Table structure for AUTHOR
-- ----------------------------
DROP TABLE "PROJECT"."AUTHOR";
CREATE TABLE "PROJECT"."AUTHOR" (
  "NAME" VARCHAR2(100 BYTE) VISIBLE NOT NULL,
  "BORNON" NUMBER(4,0) VISIBLE,
  "DIEDON" NUMBER(4,0) VISIBLE,
  "TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "NATIONALITY" VARCHAR2(20 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of AUTHOR
-- ----------------------------
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Daffodil Jackson', '1991', '2012', 'Poet', 'British');
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Abrar Rahman Abir', '2000', NULL, 'Novelist', 'Bangladeshi');
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Daffodil Hill Press', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Amy Ingalls, Pryor Rayburn, and Jennie Roberts', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Elizabeth Dale', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Clare Helen Welsh', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Katie Dale', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Lou Treleaven', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Amanda Brandon', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Jenny Jinks', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Jenny Moore', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Frank P. Harvey', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Arthur R. Jensen', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Murray C. Kemp', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('George W. Liebmann', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Immanuel Etkes', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Jeremy Iggers', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Mark A. S. McMenamin', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Michael A. Fishbane', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Michael Fishbane', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Samuel C. Heilman', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('E. Rae Harcum', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Ellen F. Rosen', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Kevin L. Lyles', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('José Hernández', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Henry Lyttleton Savage', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Martti Koskenniemi', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('E. Brooks Holifield', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Daniel Berrigan', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('George F. Rengert', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Thomas Merton', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Benjamin J. Cohen', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Ze''ev Wolfson', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Thomas D. Wickens', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Nada Kakabadse', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Andrew Kakabadse', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Kent H. Butts', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Paul R. Thomas', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Colin S. Gray', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Paul Routledge', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Simon Dalby', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Gearoid Otuathail', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('George L. Beckford', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Martha C. Searcy', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('James Edward Miller', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Charles Russ', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('James M. Stayer', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Andrei S. Markovits', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Simon Reich', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Dirk Verheyen', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Gerard Braunthal', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Martin F. Parnell', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('W. E. Mosse', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Odie B. Faulk', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('John Harper', NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Ananya Shahrin Promi', '2003', NULL, NULL, 'Bangladeshi');
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Muhammed Zafar Iqbal', '1952', NULL, 'Writer', 'Bangladeshi');
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Humayun Ahmed', '1948', '2012', 'Novelist', 'Bangladeshi');
INSERT INTO "PROJECT"."AUTHOR" VALUES ('Paulo Coelho', '1947', NULL, 'Lyricist', 'Brazilian');

-- ----------------------------
-- Table structure for BOOK
-- ----------------------------
DROP TABLE "PROJECT"."BOOK";
CREATE TABLE "PROJECT"."BOOK" (
  "ISBN" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "TITLE" VARCHAR2(500 BYTE) VISIBLE NOT NULL,
  "PAGECOUNT" NUMBER(5,0) VISIBLE,
  "LANGUAGE" VARCHAR2(20 BYTE) VISIBLE NOT NULL,
  "PUBLISHYEAR" NUMBER(4,0) VISIBLE,
  "PRICE" NUMBER(5,2) VISIBLE,
  "COVERPHOTO" VARCHAR2(100 BYTE) VISIBLE,
  "PUBLISHERNAME" VARCHAR2(100 BYTE) VISIBLE,
  "SUMMARY" VARCHAR2(3500 BYTE) VISIBLE,
  "GENRE" VARCHAR2(100 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of BOOK
-- ----------------------------
INSERT INTO "PROJECT"."BOOK" VALUES ('9780773516052', 'The Future''s Back: Nuclear Rivalry, Deterrence Theory and Crisis Stability after the Cold War', '208', 'English', '1997', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780773516052.jpeg', NULL, 'Arguing that previous critiques of rational choice and deterrence theory are not convincing, Frank Harvey constructs a new set of empirical tests of rational deterrence theory to illuminate patterns of interaction between rival nuclear powers. He analyses the crisis management techniques used by the United States and the Soviet Union in twenty-eight post-war crises and isolates factors that promote or inhibit escalation of these crises. This "crises"-based data set serves as the basis for identifying patterns of response when one nuclear state is threatened by another. The Future''s Back offers new directions for testing that emphasize a more unified approach to theory building and assesses the feasibility of alternative courses of action to prevent escalation of future disputes characterized by nuclear rivalry.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780253207524', 'The Garments of Torah: Essays in Biblical Hermeneutics', '168', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780253207524.jpeg', NULL, '"In this almost painfully beautiful book . . . Fishbane . . . explores the question of the kind of canon, privileged status, or Logos, the Torah actually has for the post-modern Western Jew. " --Theology Today "A book well worth reading." --The Jerusalem Post "This wonderful volume documents the intellectual and spiritual odyssey of one of North America''s foremost Jewish biblical scholars." --Shofar', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780671524890', 'The Gate Behind the Wall', '192', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780671524890.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780807806982', 'The Gawain-Poet: Studies in His Personality and Background', NULL, 'English', '1956', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521623117', 'The Gentle Civilizer of Nations: The Rise and Fall of International Law 1870-1960', '584', 'English', '2002', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780521623117.jpeg', NULL, 'International law was born from the impulse to ''civilize'' late nineteenth-century attitudes towards race and society, argues Martti Koskenniemi in this extensive study of the rise and fall of modern international law. In a work of wide-ranging intellectual scope, now available for the first time in paperback, Koskenniemi traces the emergence of a liberal sensibility relating to international matters in the late nineteenth century, and its subsequent decline after the Second World War. He combines legal analysis, historical and political critique and semi-biographical studies of key figures (including Hans Kelsen, Hersch Lauterpacht, Carl Schmitt and Hans Morgenthau); he also considers the role of crucial institutions (the Institut de droit international, the League of Nations). His discussion of legal and political realism at American law schools ends in a critique of post-1960 ''instrumentalism''. This book provides a unique reflection on the possibility of critical international law today.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780822304142', 'The Gentlemen Theologians: American Theology in Southern Culture, 1795-1860', '272', 'English', '1978', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780822304142.jpeg', NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780807005385', 'The Geography of Faith; Conversations Between Daniel Berrigan, When Underground, and Robert Coles', '179', 'English', '1971', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781893361409.jpeg', NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780333961278', 'The Geopolitics of Governance: The Impact of Contrasting Philosophies', '149', 'English', '2001', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780333961278.jpeg', NULL, 'Considerable attention has been given to the topic of governance and its relevance to private and public sector organisations. However, little attention has been given to the impact of adopting different governance models on societies and nations which are unaccustomed to alternative ways of working. With both an enterprise level and a societal level of analysis in mind, this book explores the governance impact on both the structure of organisation and performance of organisation, and also examines what are the likely stakeholder reactions and social repercussions of the emerging encroachment of the shareholder value philosophy championed by Anglo-American enterprises on stakeholder societies such as France, Germany, Japan and the Scandinavian countries.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781555879259', 'The Geopolitics of Hunger, 2000-2001: Hunger and Power', NULL, 'English', '2001', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781555879259.jpeg', NULL, 'This volume explores the use of hunger as a weapon in food crises around the world. It also discusses strategies to counter inequitable food distribution while maintaining neutrality in complex situations and reviews political approaches to combating hunger and attaining food justice.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780813372617', 'The Geopolitics of Southern Africa: South Africa As Regional Superpower', '193', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780429311260.jpeg', NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780813116273', 'The Geopolitics of Super Power', '288', 'English', '1988', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780813101811.jpeg', NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780807863459', 'The United States and Italy, 1940-1950: The Politics and Diplomacy of Stabilization', '376', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780773508422', 'The German Peasants'' War and Anabaptist Community of Goods', '256', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780773511828.jpeg', NULL, 'James Stayer argues that the Anabaptist community of goods continued the popular radicalism of the early reformation and the peasants'' war of 1525. During the German reformation, hundreds of thousands of commoners were mobilized by the hope that established clerical and aristocratic order could be replaced by justice and equity based on the divine law of the Bible. After the defeat of the commoners in the peasants'' war, some of the most ardent adherents of social and religious reform attempted to achieve these same aspirations by trying to implement the apostolic model of Acts 2 and 4 through the Anabaptists. Thus, as Stayer reveals, the peasants'' war was an essential formative experience for many of the original leaders of Anabaptism.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780813383590', 'The German Question: A Cultural, Historical and Geopolitical Exploration', '228', 'English', '1991', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, 'The German question is considered here in the wake of reunification. The book incorporates historical, cultural and geopolitical considerations in exploring the issue in terms of its four central dimensions - Germany''s identity, national unity, power and role in world politics.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780813315355', 'The German Social Democrats since 1969: A Party in Power and Opposition', '402', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, 'A study of the German Social Democratic party since 1969. It covers social democracy, labour, political parties, the politics of the Left and German politics in a changing Europe.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780820431079', 'The German-Jewish Dialogue Reconsidered: A Symposium in Honor of George L. Mosse', NULL, 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, 'Was there a German-Jewish dialogue? This seemingly innocent question was silenced by the Holocaust. Since then, it is out of the question to take comfortable refuge to a distant past when Mendelssohn and Lessing started this dialogue. Adorno/Horkheimer, Arendt, and above all Scholem have repeatedly pointed out, how the noble promises of the Enlightenment were perverted, which led to a complete failure of Jewish emancipation in Germany. It is against this backdrop of warning posts that we dare to return to an important chapter of Jewish culture in Germany. This project should not be seen, however, as an attempt to idealize the past or to harmonize the present, but as a plea for a new dialogue between Germans and Jews about their common past.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780198229902', 'The German-Jewish Economic Elite, 1820-1935: A Socio-Cultural Profile', '384', 'English', '1989', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780198229902.jpeg', NULL, 'This unique study makes an important contribution to our understanding of the changing problem of `Jewishness'' in a German environment as it presented itself to a privileged group of Jews. Following on from Jews in the German Economy (OUP, 1987), which analysed the economic activities of thiselite, it presents a detailed picture of the group''s socio-cultural profile. Based largely on autobiographical material, it covers such matters as attitudes to Judaism, relations at different levels with Gentiles and with other Jews, marriage patterns, the public role, political culture, culturalactivities, and patronage. The major underlying theme is the conflict between preservation of the Jewish identity, and integration into the surrounding society. Different forms of self-identification are examined, as well as various patterns of conformity.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780813319599', 'Germans and Their Neighbors', '432', 'English', '1993', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, 'For Germany''s neighbours, the 1990 reunification of divided Germany has raised old memories and new concerns in public and scholarly discourse. The shape and influence of these issues are the subject of this book.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('984-70096-0357-0', 'Shohoj Calculus', '86', 'Bangla', '2016', '160', 'https://m.media-amazon.com/images/I/41YzEgyb2tL._AC_UF1000,1000_QL80_.jpg', 'Tamralipi', 'Analysis in simple language with formulas, which will serve as math aids for secondary students including math olympiad', 'Math');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780231105590', 'The Garden of Ediacara: Discovering the First Complex Life', '368', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780231105590.jpeg', NULL, 'During an expedition in Sonora, Mexico, paleontologist Mark A. S. McMenamin unearthed fossils of creatures dated at approximately 600 million years old--making them the oldest large body fossils ever discovered. These circular fossils, known as Ediacarans, seemed to defy explanation. Representatives of marine life forms that existed in Precambrian times, as much as fifty million years before life on earth began to diversify rapidly, the specimens bore a superficial resemblance to jellyfish.  A typical Ediacaran had a quilted body, three curving arms at the center, and a fringe of fine radial lines. McMenamin''s curiosity was fueled by the puzzle of whether the Ediacarans were animals or some other type of organism. How could such complex forms of life appear so suddenly, without extensive records of prior evolution? Yet, this seems to be exactly what the Ediacarans had done.  The Garden of Ediacara presents a mesmerizing documentary of a major scientific discovery, detailing McMenamin''s trip to Namibia, where, with a party that included the renowned paleontologist Adolf Seilacher, the author investigates a spectacular cast made from a colony of fossils in the Nama desert. He chronicles the long, often futile search made by earlier scientists for Ediacara, which began more than a century ago in Europe, North America, and Africa, and the various types of Ediacaran fossils that have been uncovered in the years since.  McMenamin concludes that Ediacarans were not animals because they never passed through the ball-shaped embryonic stage peculiar to known animal life forms. But, remarkably, Ediacarans seem to have developed a central nervous system and a brain independent from animal evolution. This startling conclusion has profound implications for our understanding of evolutionary biology, for it indicates that the path toward intelligent life was embarked upon more than once on this planet.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780275945145', 'The Gatekeepers of Psychology: Evaluation of Peer Review by Case History', '256', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780275945145.jpeg', NULL, 'This book is a wake-up call for those who contend that the peer review system for journal publications works. It supports the current groundswell of dissatisfaction with peer review. Harcum and Rosen challenge the notion of simple biases of researchers and argue that many reviews are simply incompetent. The biases against new scientific approaches and philosophies are exacerbated if proposed by unknown researchers or if contrary to the established research stars. The authors also destroy the myth of the appeal system as a forum whereby peers can debate scientific issues. The primary purpose of this work is to raise the consciousness of the scientific community, particularly psychologists, about serious flaws in peer review. The authors demonstrate in a dramatic way how poor the system really is, and propose a critical change--the institution of a viable system for appeals.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780275960827', 'The Gatekeepers: Federal District Courts in the Political Process', '328', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780275960827.jpeg', NULL, 'There are more than 600 Federal district judges serving today, and they decide some 230,000 civil cases each year. About 90% of the decisions they reach are final. Lyles argues that these lower court judges not only influence the flow of information to the judicial hierarchy, but they formulate questions that influence how higher courts, including the Supreme Court, respond. As such they are key elements in the formulation and implementation of public policy. To cite a few examples, they desegregate school districts, run mental institutions and prisons, break up monopolies, and reapportion legislatures. Lyles begins by examining the structure and function of federal courts and detailing the history, operation, and purpose of the district courts. He then turns to the selection, nomination, and appointment of district judges. Lyles then analyzes the extent to which presidents might advance policy objectives through their judicial appointments to the district courts. After examining how African-American, Latino, and white judges, male and female, view their roles as policy actors, Lyles concludes with a discussion of the implications of the study. Important for students and scholars of contemporary public policy and the court system.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9783527406234 ', 'Handbook of time series analysis', '496', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780471976707 ', 'Encyclopedia of analytical chemistry', '940', 'English', '2000', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415250948', 'Game theory', '369', 'English', '2004', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781856047715 ', 'Metadata for digital collections', '343', 'English', '2011', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405136662 ', 'Games and information', '528', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781856047340 ', 'The intranet management handbook', '233', 'English', '2011', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780130611994', 'More reading power', '276', 'English', '2004', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780131305489', 'Reading power', '294', 'English', '2005', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780136127802', 'From reading to writing 2', '196', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781843255093', 'Advanced grammar & vocabulary', '237', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405881180', 'Longman pronunciation dictionary', '922', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859649350', 'English for banking in higher education studies', '133', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521555500', 'Language in use', '128', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405851374', 'Longman exams dictionary', '1834', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780132338431', 'Academic connections 1', '166', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859649114', 'English for the energy industries', '245', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521684347', 'Academic listening encounters', '138', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521547260', 'English for the financial sector', '108', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521677462', 'English vocabulary in use', '315', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521547253', 'English for the financial sector', '159', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781412965569', 'Research design', '260', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859649428', 'English for tourism and hospitality in higher education studies', '132', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521684323', 'Academic listening encounters', '164', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780132338417', 'Academic connections 4', '197', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521775298', 'Business vocabulary in use', '172', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781846793660', 'University writing course', '120', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780759396272', 'Key words for fluency', '175', 'English', '2004', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405852313 (student bk)', 'Cutting edge', '175', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415453219', 'Academic writing and publishing', '196', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859647806', 'Skills in English. Level 2', '70', 'English', '2005', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521524001', 'Language links', '205', 'English', '2005', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859647905', 'Skills in English. Level 3', '76', 'English', '2005', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780132345248', 'Contemporary topics 2', '133', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780335219681', 'How to write a thesis', '301', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521603782', 'English collocations in use. Intermediate', '190', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781905085132', 'Negotiating', '64', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521685436', 'Professional English in use', '118', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521707800', 'English collocations in use', '188', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781905085156', 'IELTS resource pack', '22366', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781413022452', 'Destinations 2', '273', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781408241363', 'Focus on IELTS', '5785', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859649442', 'English for business studies in higher education studies', '132', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781118399651', 'Morson and Dawson''s gastrointestinal pathology', '1', 'English', '2013', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521675437', 'Essential grammar in use', '319', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521754835', 'Academic listening encounters', '160', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('0471177806 ', 'Encyclopedia of smart materials', '590', 'English', '2002', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521555470', 'Language in use', '130', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521669948', 'Exploring grammar in writing', '168', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859649367', 'English for business studies in higher education', '132', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780470697054', 'Dynamics of smart structures', '396', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405826891', 'Language leader', '192', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521568449', 'Exploring grammar in context', '286', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780462098975', 'Achieve IELTS', '192', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415924986', 'A world history of tax rebellions', '502', 'English', '2003', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781847208361', 'Gene cartels', '394', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781900783958', 'Presenting', '64', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405827980', 'Longman photo dictionary', '144', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521675178', 'International legal English', '320', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781905085514', 'Absolute legal English', '112', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859641316', 'English practice grammar', '224', 'English', '2001', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780759396289', 'Key words for fluency', '196', 'English', '2005', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780007190232', 'Collins COBUILD business vocabulary in practice', '248', 'English', '2004', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781424071128', 'Great writing 2', '293', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781424071135', 'Great writing 3', '268', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780462007526', 'Achieve IELTS 2', '112', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521608794', 'Objective IELTS', '64', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781413022483', 'Destinations 2', '124', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781413022964', 'Destinations 1', '215', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521527279', 'English phrasal verbs in use', '206', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780906717592', 'Conversation gambits', '96', 'English', '2002', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781413000009', 'Writing essentials', '328', 'English', '2003', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781905085187', 'Meetings', '64', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415478489 ', 'Classical econophysics', '364', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780132338448', 'Academic connections 2', '157', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780618474615', 'Key concepts 1', '208', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780618382408', 'Key concepts 1', '143', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781899396658', 'Conversation lessons', '128', 'English', '2002', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781413009293', 'Hot topics 2', '182', 'English', '2006', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781405881364', 'Market leader', '176', 'English', '2005', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781905085286', 'Absolute financial English', '136', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780132345231', 'Contemporary topics 3', '133', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781424003815', 'Reading the news', '112', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780887276798', 'Integrated Chinese', '424', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521608732', 'Objective IELTS', '64', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521608695', 'Language links', '269', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781598741933', 'Developing grounded theory', '279', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781900783316', 'Basic business role plays', '90', 'English', '1998', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780155072558', 'Discoveries in academic writing', '334', 'English', '2002', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780131990272', 'Advanced reading power', '311', 'English', '2007', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780521684187', 'English phrasal verbs in use', '185', 'English', '2010', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781859649503', 'English for tourism and hospitality in higher education studies', '226', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781413009309', 'Hot topics 3', '204', 'English', '2008', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781847874429', 'How to Do Your Research Project', '254', 'English', '2009', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780309214216 (pbk.)', 'Reference manual on scientific evidence', '1', 'English', '2011', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219817', 'Monica and the Worst Horse Ever', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219817.jpeg', NULL, 'Monica and her Rock River Stables friends are headed on a trail ride for the weekend. But from the start, things go wrong: Monica''s horse can''t go, so she has to ride an old pony. The snobby horse owners are making fun of everyone, as usual, and bossing Rory around. And worst of all, a really annoying kid from another town has started hanging around Monica and Chloe. Will the trail ride be able to find its way back on track?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220592', 'Bus Ride Bully', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220592.jpeg', NULL, 'Gavin hates riding the bus. Max, the bus bully, is always picking on him. But when Max is gone for a few days, Gavin starts to worry. Does Gavin actually miss the bus bully?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220158', 'First Day, No Way!', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220158.jpeg', NULL, 'Kaylee and Jenna have always been in the same class-until this year. Without Jenna by her side, Kaylee has a bad case of the first day blues. Will anything, or anyone, cheer her up?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220141', 'The Lost Lunch', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220141.jpeg', NULL, 'When Andrew''s lunch goes missing, he is left sad and hungry. With the help of his friend Dylan, the search for the lost lunch begins!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780275961039', 'The g Factor: The Science of Mental Ability', '664', 'English', '1998', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780275961039.jpeg', NULL, 'Jensen provides a comprehensive treatment of one of the major constructs of behavioral science--general mental ability--labeled the g factor by its discoverer, Charles Spearman. The g factor is about individual differences in mental abilities. In factor analyses of any and every large and diverse collection of measures of mental abilities, however varied the content of knowledge and skills they call upon, g emerges as the largest, most general source of differences between individuals and between certain subpopulations. Jensen fully and clearly explains the psychometric, statistical, genetic, and physiological basis of g, as well as the major theoretical challenges to the concept.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415130387', 'The Gains from Trade and the Gains from Aid: Essays in International Trade Theory', '416', 'English', '1995', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780415130387.jpeg', NULL, 'This book focuses on the normative side of trade theory and is divided into five parts: * trade under perfect competition; * restricted trade under perfect competition; * trade under imperfect competition and other distortions; * Compensation: lumpsum, non-lumpsum or neither? * International trade', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780275958862', 'The Gallows in the Grove: Civil Society in American Law', '264', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780275958862.jpeg', NULL, 'Writing of the France of the 1930s, the late Simone Weil declared, The state has morally killed everything smaller than itself. Liebmann asserts that a comparable development has recently taken place in the United States, fostering civic apathy and an inability to address serious social problems, and that, not for the first time, abuse of judicial review has caused the Constitution to be used as a tool of class interests. After a general survey of these consequences, Liebmann discusses the original constitutional debates and understanding. He then assesses First Amendment doctrine, through a discussion of the views of Harry Kalven, the most influential modern commentator on free speech issues, and then discusses the appropriate relationship of constitutional restraints to governmental fostering of public policy, on zoning, education, law enforcement, urban renewal, day care, traffic regulation, and care of the elderly, and illustrates the hopeful developments that are possible if judicial restraint is restored. A significant analysis for all scholars and researchers in the areas of constitutional law and current American public policy and politics.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780520223943', 'The Gaon of Vilna: The Man and His Image', '304', 'English', '2002', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780520223943.jpeg', NULL, 'A legendary figure in his own lifetime, Rabbi Eliahu ben Shlomo Zalman (1720-1797) was known as the "Gaon of Vilna." He was the acknowledged master of Talmudic studies in the vibrant intellectual center of Vilna, revered throughout Eastern Europe for his learning and his ability to traverse with ease seemingly opposed domains of thought and activity. After his death, the myth that had been woven around him became even more powerful and was expressed in various public images. The formation of these images was influenced as much by the needs and wishes of those who clung to and depended on them as by the actual figure of the Gaon. In this penetrating study, Immanuel Etkes sheds light on aspects of the Vilna Gaon''s "real" character and traces several public images of him as they have developed and spread from the early nineteenth century until the present.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780465078059', 'The Garden of Eating: Food, Sex, and Morality', '224', 'English', '1996', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780465078059.jpeg', NULL, '"Imagine Adam and Eve today. Where they once had to wrestle with biting into one perfect apple, they would now want to know if it was a Macintosh or a Rome Beauty, organic or tainted by pesticides, picked by union labor or migrant workers. All this before getting around to the issue of original sin." "As Jeremy Iggers notes in this wise and witty book, the staggering selections in our supermarkets and the prodigious bounty of the American table should make us as happy as kings. But the truth is that while the American food experience is richer than ever before, it has never been more troubled. Over the last three decades - ever since Julia Child appeared on the scene - Americans have experienced a distinct loss of innocence about food and eating." "Our contemporary relationship to food is laden with guilt, fear, and psychopathology. Eating, which is something we used to do simply to survive, has become increasingly eroticized, politicized, fetishized, and heavily burdened with moral significance. We worry incessantly about weight and cholesterol as well as environmental exploitation, carcinogens, food contamination, eating disorders, and much more. We have boxes of chocolates at our disposal, but we are never satisfied." "And yet our obsession with food provides a window into the American psyche. In this lively work of social history, Iggers explains with enormous charm and insight why the new food guilt is not as American as apple pie and what we can - and must - do to satisfy our hunger."--BOOK JACKET.Title Summary field provided by Blackwell North America, Inc. All Rights Reserved', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220585', 'Shark in the Library!', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220585.jpeg', NULL, 'Noah is thrilled when the week''s library theme is sea creatures. But when Noah can''t find the stuffed shark, he is disappointed. Noah knows there is a shark in the library, and he is going to find it!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434216397', 'Gruesome Ghosts', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434216397.jpeg', NULL, 'Have you ever seen a ghost? Damian Drooth has. When he spends the night in a creepy old house, he comes face to face with two gruesome ghosts. Only a brave detective like Damian Drooth can solve this creepy crime.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434216380', 'Under Cover', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434216380.jpeg', NULL, 'Damian Drooth, Super Sleuth, is on the case when kids'' bikes go missing. Using his amazing brain power and smarts, he tracks down a dangerous thief who''s working under cover.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434223210', 'The Cheese Ball Trap', '72', 'English', '2008', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434223210.jpeg', NULL, 'Klooz is on school break, and he''s so bored that he''ll even accept a case from his mother.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221452', 'Zombie in the Library', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221452.jpeg', NULL, 'A zombie, made of unread and discarded books, comes to life during a lighting storm. A young boy makes the mistake of visiting the library after hours, and comes face to face with the hungry creature!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050414', 'Pug and the Mud', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050414.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050353', 'Too Big', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050353.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503392', 'Ten Hens', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503392.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503316', 'Pip and Chips', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503316.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503347', 'Ron and Bob', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503347.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503378', 'Gus', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503378.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503309', 'Max and the Bat', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503309.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050759', 'At the Bake Shop', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050759.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050346', 'Jon and Sis', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050346.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050797', 'Jade Gets Her Cake', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050797.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050407', 'Lin and Baby Sis', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050407.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874258', 'The Ten Moth Brothers', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874258.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503330', 'Tag with Sam', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503330.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490816', 'Who Will Win the Cup', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490816.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050858', 'The Brides', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050858.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050568', 'The Wish', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050568.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050803', 'The Flat Tire', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050803.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050520', 'Off to the Shop', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050520.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050674', 'Glen''s Big Day', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050674.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874265', 'On a Whim', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874265.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874241', 'Pip the Math Whiz', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874241.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874210', 'Tish on a Ship', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874210.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874272', 'Whin''s Whip', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874272.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874289', 'Jack the Duck', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874289.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503385', 'Meg''s Pet Hen', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503385.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490793', 'Rory the Tea-Rex', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490793.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050315', 'In the Cab', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050315.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050483', 'Pug in the Shop', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050483.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050544', 'In the Bath', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050544.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050896', 'The Last Page', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050896.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050742', 'The Bee Sting', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050742.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050377', 'Liz and the Box', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050377.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874234', 'Chaz and Rich', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874234.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503361', 'Bud', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503361.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490779', 'Kung Fu Kid', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490779.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490762', 'SID Snake in Disguise', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490762.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490786', 'Run, Bean, Run!', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490786.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050711', 'The Splash Pad', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050711.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050575', 'The Dog Run', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050575.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050605', 'A Day at the Playground', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050605.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050322', 'My Pal Jax', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050322.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050889', 'The Long Ride', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050889.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050452', 'A Can of Pop', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050452.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874203', 'Shep and Tish', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874203.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874227', 'Chip the Fish', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874227.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798986874296', 'The Lost Chicks', '16', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798986874296.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503354', 'Hot Dog Shop', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503354.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490823', 'Chick-a-Boo!', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490823.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490830', 'Big Tooth!', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490830.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050513', 'Dip That Chip', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050513.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9798889050827', 'Ice Pops', '4', 'English', '2022', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9798889050827.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781737503323', 'Max and Pip', '12', 'English', '2021', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781737503323.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781728490809', 'Park Shark', '32', 'English', '2024', NULL, 'https://mm-static-media.s3.amazonaws.com/books/cover-art/9781728490809.jpeg', NULL, 'null', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780817302252', 'The Georgia-Florida Contest in the American Revolution, 1776-1778', '288', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, 'Normal0falsefalsefalseMicrosoftInternetExplorer4 Almost from the time of Georgia''s settlement by Oglethorpe in 1733, both Georgians and Carolinians had made periodic unsuccessful attempts to conquer the Spanish Castillo San Marcos in St. Augustine; and during the American Revolution (in 1776, 1777, and 1778) the rebels tried without success to take the fortification, which was then a British stronghold. Each of the three expeditions was less successful than the preceding one, and between the formal campaigns vicious partisan warfare between loyalists and rebels devastated much of the area between the Altamaha and St. Johns rivers. This book presents a detailed history of the three Georgia-Florida campaigns. Indecisive and lacking the glamour of either the contemporary campaigns in the North, or the later campaigns in the South, they appeared isolated from the mainstream of the revolutionary struggle. The rebels were handicapped by divided command, personal quarrels, difficult terrain, and miserable weather. While Searcy emphasizes the military aspects of the period, she also treats the conflict between civil and military authorities, the effects of war on the civilian populace, and the interaction of economic matters with military affairs. Her work clarifies the importance of these military activities in the subsequent British strategy in the occupation of Georgia and the Carolinas.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780195083514', 'The Geronimo Campaign', '256', 'English', '1993', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780195083514.jpeg', NULL, 'The surrender of the great Apache leader Geronimo to U.S Army Lieutenant Charles B. Gatewood in August of 1886 brought to an end a struggle that had begun in the early years of the century, and had figured prominently in the western campaign of the Civil War. The words addressed by Gatewoodto Geronimo as they met along the banks of Mexico''s Bavispe River echoed those spoken in many such a meeting between victorious American commander and vanquished Native American. "Accept these terms or fight it out to the bitter end," said Gatewood. The terms were forced relocation to Florida andthe ceding of the ancestral homeland of the Apaches to white settlers; the bitter end was, quite simply, annihilation.In The Geronimo Campaign, Odie B. Faulk, a leading historian of the American Southwest, offers a lively and often chilling account of the war that raged over the deserts and mountains of Arizona, New Mexico, and northern Mexico in the mid 1880''s, and traces its legacy well past the ultimatumdelivered to Geronimo on August 25, 1886. Faulk is especially concerned with the campaign''s wider historical setting and significance, and with the sad record of betrayal of the Native American by the U.S. Government.In a very real sense, it is the stuff of Greek tragedy. Here among the mesas of the Southwest was inevitable conflict and inevitable defeat, with both sides losing and yet surviving their loss. The Apaches were forced to endure years of captivity and humiliation, and--like the Sioux,Comanche, and Nez Perce before them--the obliteration of their traditional way of life. The Army, seemingly the winner, was torn by conflicting claims of glory by its hubristic leaders. And Americans lost much that Apache culture might have contributed to their country, as well as more than ameasure of American self-respect.Few emerge from Faulk''s riveting account with their dignity and stature intact: only the titanic figure of Geronimo, and to a lesser extent the two men he knew and trusted among his opponents, Gatewood and General George Crook, retain a semblance of honor. Faulk shows that neither side wantedwar, that both sides believed in the righteousness of their cause, and that the real instigators of the conflict were rapacious American settlers--the "Tucson Ring" of merchants--who sold grain, hay, and other provisions to the troops as well as to those living on the Indian reservations.Faulk''s realistic and colorful narrative highlights many of the campaign''s ironies as well as its dangers and vicissitudes. In addition, it vividly recreates life in an Army command post on the western frontier, offers an exceptionally clear and sympathetic life history of Geronimo, and shedsnew light on the conflict through many hitherto unknown documents originally collected by Gatewood''s son. Also included is a brief history of the Apache people, a full bibliography and notes, and many vintage photographs which lend a rare immediacy to this tragic story.The Geronimo Campaign ends with the great chief hundreds of miles away from his ancestral home, Crook relieved of his command, and Gatewood largely forgotten in the honors and awards bestowed by the Army in recognition of Geronimo''s capitulation. A true American saga, this is a book foranyone who wishes to understand the roots of, and the reasons for, the tragic Indian Wars of the nineteenth century, a tragedy whose repercussions are still felt today.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780193161283', 'The Forms and Orders of Western Liturgy from the Tenth to the Eighteenth Century: A Historical Introduction and Guide for Students and Musicians', '352', 'English', '1991', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/real_life.png', NULL, 'An introduction to the principal forms and orders of Western liturgy between about 900 and 1700, this book explains their nature and basic historical origin, and presents in detail the contents and orders of principal services as well as additional and special forms of worship. This book emphasizes the mainstream of Western liturgy derived from the medieval Roman Rite as found in secular and monastic churches. After the Reformation it concentrates on the rites of the Roman Catholic church and the Church of England. Harper discusses the nature of liturgy and provides an historical summary and individual chapters on medieval churches and their communities, the Christian calendar, medieval liturgical books, the Psalms, the Office, the Mass, Processions and Additional Observances, Holy Week and Easter, the Tridentine Rite, and the English Book of Common Prayer. Harper concludes with two chapters which raise the problems of establishing the order of a liturgical service, and introduces selected medieval sources accessible in facsimile or edition. A select, annotated bibliography and a glossary of ecclesiastical and liturgical terms are included.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780375836015', 'The Boy Who Loved Words', '40', 'English', '2006', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780375836015.jpeg', NULL, 'In this Parents'' Choice Gold Award-winning book, Selig collects words, ones that stir his heart (Mama!) and ones that make him laugh (giggle). But what to do with so many luscious words? After helping a poet find the perfect words for his poem (lozenge, lemon, and licorice), he figures it out: His purpose is to spread the word to others. And so he begins to sprinkle, disburse, and broadcast them to people in need.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780399239915', 'The Liberation of Gabriel King', '192', 'English', '2005', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780399239915.jpeg', NULL, 'Gabriel King is afraid of everything: spiders, the rope swing over the lake, andmost of all, going to fifth grade.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781905236640', 'Mama Panya''s Pancakes', '40', 'English', '2006', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781905236640.jpeg', NULL, 'On market day, Mama Panya''s son Adika invites everyone he sees to a pancake dinner. How will Mama Panya ever feed them all? This clever and heartwarming story about Kenyan village life teaches the importance of sharing, even when you have little to give', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781404813212', 'A Killer Whale''s World', '24', 'English', '2006', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781404813212.jpeg', NULL, 'Describes the development of a baby killer whale to its maturity.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9788184774634', 'Confessions of a Listmaniac: The Life and Times of Lyla the Ordinary', '200', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', NULL, NULL, 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279709', 'Shark Bait', '144', 'English', '2006', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279709.jpeg', NULL, 'Action has a new hero - Sam Fox! With a talent for attracting danger, Sam Fox is an expert at getting himself into (and out of) the most extreme situations. This series has a strong appeal with a courageous young hero and exotic settings and has non-stop action and short chapters which will engage reluctant readers.When Sam and his friend are swept off the coast of the Great Barrier Reef, Sam must fight to keep them alive. As night falls over the ocean, the underwater predators start moving in?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279716', 'Scorpion Sting', '128', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279716.jpeg', NULL, NULL, 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279679', 'Over the Edge', '240', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279679.jpeg', NULL, NULL, 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279686', 'Double Cross', '224', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279686.jpeg', NULL, 'Teenaged Chloe Yan has had to leave behind her beloved Montreal to move to East Hastings, Ontario where her new stepfather, Louis Levesque, has just become the chief of police.  From the second she met him, Chloe thought Jonah was a jerk. So what''s she doing going all over the place with him, telling lies, getting in trouble, all to prove that his father isn''t a murderer? Especially when she isn''t even sure it''s true? In this nail-biting sequel to Over the Edge, Chloe finally pieces together what happened the day Mary Shackleton died. The trouble is, the closer she gets to the truth, the closer she is to danger.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279754', 'The Ham Heist', '96', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279754.jpeg', NULL, 'Jack''s person, Sarge, is getting married. And that means a big party, with lots of food! All the dogs are excited, so when the ham for the wedding reception is stolen, Jack has plenty of canine suspects. With the help of his junior Jack, Preacher, Jack is soon on the case of The Ham Heist.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279518', 'When Molly Was a Harvey Girl', '232', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279518.jpeg', NULL, NULL, 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279655', 'Darius Bell and the Glitter Pool', '214', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279655.jpeg', NULL, 'What Darius saw was enough to dazzle anyone. But was it really what it appeared to be? And more importantly, was it enough to get his family out of the terrible trouble they were in?The Bell family''s ancestors were showered with honors, gifts and grants of land. In exchange, they have bestowed a Gift, once every 25 years, on the town. The Gifts have ranged from a statue to a bell tower with stained-glass windows, but now it''s Darius''s father''s turn - and there is no money for an impressive gift. It looks as though a wheelbarrow full of vegetables is the best they can do. Darius is determined to preserve the family honor, and when an earthquake reveals something glorious, he thinks he''s found the answer...', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781935279624', 'Roll up the Streets', '220', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781935279624.jpeg', NULL, 'Jake Machet has moved to a lousy little town filled with creeps and an ever-present stink that no one else notices. Along with his new friend Sammie, Jake probes the smelly underbelly of his new home, following the trail of stench straight to J.P. Rumblegut, corndog and doll maker extraordinaire. They uncover a hideous conspiracy involving sticky streets, sewage, doped-up corndogs, Space Planet Janet dolls, and a mysterious portrait of a beauty queen that won''t stop frowning at him. Eventually Jake and Sammie discover the secret behind the brainwashing meatsticks... a plot to zombify the entire country!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220790', 'The Shadow Masters', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220790.jpeg', NULL, 'Reporter CLARK KENT investigates the theft of black crystals from a METROPOLIS museum. As he searches for clues, electrical transformers beneath the street suddenly explode! CLARK quickly changes into his alter ego, SUPERMAN, and locates the problem. It''s ACRATA, a super heroine who can teleport through shadows. She insists that the power must be shut down, or the earth will be doomed. SUPERMAN isn''t convinced. He stops ACRATA, but soon a new problem arrives. The evil ECLIPSO appears, carrying the stolen crystals and threatening to take over the world. SUPERMAN and ACRATA must stop him from casting an evil shadow over Earth.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219404', 'Dr. Psycho''s Circus of Crime', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219404.jpeg', NULL, 'When a crime wave erupts in Washington D.C., WONDER WOMAN investigates and discovers a strange connection between the cases -- each criminal had recently visited the circus! The AMAZON PRINCESS goes undercover under the Big Top, and she soon learns that the evil DR. PSYCHO has taken over and is brainwashing his audience into committing crimes. If WONDER WOMAN can''t stop him, the Capital City will quickly become a three-ring circus.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220172', 'The Fruit of All Evil', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220172.jpeg', NULL, 'As WONDER WOMAN speaks at a Peace Day Conference in New York City, a young girl passes out apples to spectators. Then suddenly, the crowd becomes angry and turns violent. In the center of the chaos, a fire erupts, and ARES, the god of war, emerges from the flames. His daughter, ERIS, has created enough anger with her Golden Apples of Discord to refuel her father''s evil superpowers. But when ERISis wounded, he must strike a deal with WONDER WOMAN. Save his daughter, or he will destroy the world.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780198237389', 'The German Language and the Real World: Sociolinguistic, Cultural, and Pragmatic Perspectives on Contemporary German', '428', 'English', '1997', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780198237389.jpeg', NULL, 'This collection of specially commissioned essays focuses on the forms, functions, and uses of contemporary German in the period of dynamic change following reunification. Some contributors address broad issueslanguage and national identity, the status of German as an international language,language change and attempts to fix the form of the language, and sociolinguistic variationwhile others examine topics of particular significance in the current sociopolitical climate. These include social change and linguistic variation in Berlin after the Wall, the political language of the Rightand Left, the speech of youth subcultures, language and gender, language and television, and language in intercultural communication.Reviews of the hardback edition`This volume fills a void in up-to-date English-language information on German linguistics. Highly recommended for all college and university collections, as well as public libraries.'' Choice, 33: 3, November 1995`The appearance of this collection is timely. . .it updates us on important, immediate issues affecting German language and society''`. . .while this work will be appreciated most by those focusing on sociolinguistics in the German-speaking context, those searching for comparative sociolinguistic material will find it a valuable source as well.''`All in all, Stevenson has organized an interesting and useful volume for Germanophile sociolinguists and for those interested in a multidimensional real German.'' Language Learning, 46:1, March 1996', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415104388', 'The German Language Today: A Linguistic Introduction', '288', 'English', '2004', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780415104388.jpeg', NULL, 'This clear and accessible text provides a complete introduction to basic linguistic terms and descriptions of language structures. The German Language Today describes in detail the main liguistic features of the language and the wide variety of speech forms and vocabulary existing within the German-speaking community. It also introduces sociolinguistic and linguistic topics as they relate to the German language, and illustrates them widely with examples. The German Language Today describes the sounds, inflectional processes, syntactic structures, competing forms and different layers of words in the language. Topics covered include: The distribution of German and its dialects The linguistic consequences of German reunification The application of modern linguistic concepts to German, incorporating the findings of the latest German linguistic research. The book has been written with the specific needs of students in mind. It will be invaluable to students of modern German linguistics or modern German society and will be a useful reference resource for postgraduates and teachers of German.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780801428029', 'The German Predicament: Memory and Power in the New Europe', '272', 'English', '1997', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780801428029.jpeg', NULL, 'What does the unification of Germany really mean? In their stimulating exploration of that question, Andrei S. Markovits and Simon Reich sketch diametrically different interpretations than are frequently offered by commentators. One is that Germany, well aware of the Holocaust, has been ''Europeanized'' and is now prepared to serve as the capitalist and democratic locomotive that powers Europe. The other is that the proclivities behind Auschwitz have been suppressed rather than obliterated from the German psyche. Germany''s liberal democracy was imposed by the allied victors, according to this view, and will one day dissolve, revealing the old expansionist tendencies to try to ''Germanize'' all of Europe. Markovits and Reich argue that benign contemporary assessments of Germany''s postwar democracy, combined with admiration for the country''s economic achievements, contribute to German influence far greater than military might was able to achieve. Yet, at the same time, some Germans have internalized liberal and pacifist principles and now see their nation as powerless, simply a larger Switzerland. As a result, while the Germans have enormous influence and latitude, they have not taken responsibility for leadership. The prime reason for this gap beween ideology and structure, Markovits and Reich suggest, lies in the politics of collective memory.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781571811448', 'The German Skills Machine: Sustaining Comparative Advantage in a Global Economy', '496', 'English', '1999', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781571811448.jpeg', NULL, 'In recent years the German economy has grown sluggishly and created few new jobs. These developments have led observers to question the future viability of a model that in the past seemed able to combine economic growth, competitiveness in export markets, and low social inequality. This volume brings together empirical and comparative research from across the social sciences to examine whether or not Germany''s system of skill provision is still capable of meeting the economic and social challenges now facing all the advanced capitalist economies. At issue is the question of whether or not the celebrated German training system, an essential element of the high-skill, high-wage equilibrium, can continue to provide the skills necessary for German companies to hold their economic niche in a world characterized by increasing trade and financial interdependence. Combining an examination of the competitiveness of the German training system with an analysis of the robustness of the political institutions that support it, this volume seeks to understand the extent to which the German system for imparting craft skills can adjust to changes in the organization of production in the advanced industrial states.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219923', 'Rumble in the Rainforest', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219923.jpeg', NULL, 'While visiting the rainforest, WONDER WOMAN discovers that a logging company has secretly destroyed a large area of trees. Traveling deeper into the forest to investigate, she is suddenly attacked by two angry super-villains -- POISON IVY and GORILLA GRODD! However, these foes soon realize that they share a common enemy with the AMAZON PRINCESS. And, for one day, they''ll unite to stop the destruction of their habitat before it''s lost forever.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780198277613', 'The German Tradition of Organized Capitalism: Self-Government in the Coal Industry', '272', 'English', '1994', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780198277613.jpeg', NULL, 'Dr Parnell provides a two-level analysis of the politics of government-industry relations in Germany. On the one hand, he presents an in-depth examination of the politics of the German coal industry. On the other, he offers a more general account of the characteristic relationship betweenstate and industry in one of the most successful post-war economies.He argues that the crucial concept in understanding those relations is Selbstverwaltung (self-government). This notion, despite evolving over time, displays a continuity in its key features that serves to elucidate the unique position of the state in government-industry relations in Germany. Theauthor argues that by shedding further light on existing theories of organized capitalism and corporatism, the notion of self-government can provide a basis for the analysis of broader socio-economic relations within the German-speaking world, and, in particular, the German economy''s continuedsuccess.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780313286292', 'The Germanic Mosaic: Cultural and Linguistic Diversity in Society', '336', 'English', '1994', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780313286292.jpeg', NULL, 'This is a comprehensive and up-to-date critical examination of cultural diversity in Germanic-speaking societies. It goes beyond ethnic, religious, and gender stereotypes to show minority groups as active participants in German history rather than as passive victims. This collection of critical and theoretical essays seeks to interpret the current philosophical, aesthetic, and literary thinking about diversity in literature and language. The book is divided into four parts: literary analyses of works produced by members of minority populations, linguistic discussions and case studies of minority groups, structures and strategies of discourse and prejudice, and studies of remedies for problems of racism and discrimination. Some of the most significant writers and thinkers in the field have contributed, making this volume of critical concern to scholars and students of German, modern languages, and comparative studies.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780192839107', 'The German-Jewish Dialogue: An Anthology of Literary Texts, 1749-1993', '432', 'English', '1999', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780192839107.jpeg', NULL, '`I love the German character more than anything else in the world, and my breast is an archive of German song''So wrote Heinrich Heine in 1824, adding: `It is likely that my Muse gave her German dress something of a foreign cut from annoyance with the German character''. Here Heine sums up the ambivalent emotions of Jews who felt at home in German culture and yet, even in the age of emancipation, foundGermany less than welcoming. This anthology illustrates the history of Jews in Germany from the eighteenth century, when it was first proposed to give Jews civil rights, to the 1990''s and the problems of living after the Holocaust. The texts include short stories, plays, poems, essays, letters anddiary entries, all chosen for their literary merit as well as the light they shed on the relations between Jews in Germany and Austria and their Gentile fellow-citizens. Ritchie Robertson''s lucid introduction provides the necessary historical context and his translations make available in Englishin some cases for the first time - both Jewish writers on various aspects of Jewish experience and responses of Gentile writers to the Jews in their midst. Each is introduced by a short illuminating preface.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780844739496', 'The Germans: Portrait of a New Nation', '100', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780844739496.jpeg', NULL, 'Today, five years after unification, Germany is emerging as Europe''s most powerful country. Who are the Germans today? How can we better understand the profound changes taking place in Germany? How will these changes affect American interests abroad and at home?', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219794', 'Sword of the Dragon', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219794.jpeg', NULL, 'While flying the INVISIBLE JET, WONDER WOMAN spots a message in the clouds, demanding that she head to the ancient monument of Stonehenge. When she arrives, the AMAZON PRINCESS finds dozens of tourists held hostage by MORGAINE LE FEY. The evil sorceress threatens to harm them all, if WONDER WOMAN doesn''t steal the all-powerful STAR SWORD of MERLIN. Believing she has no choice, WONDER WOMAN agrees, but the task will not be easy. She must convince a guardian dragon that the sword will soon fall into the wrong hands -- if it is not in her own.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221391', 'The Burglar Who Bit the Big Apple', '88', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221391.jpeg', NULL, 'While in New York City on a field trip, Sam Archer and her friends find themselves immersed in a run of crimes at sightseeing locations.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221384', 'The Crook Who Crossed the Golden Gate Bridge', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221384.jpeg', NULL, 'In San Francisco on a field trip, Gum Shoo and his friends get caught up in a wave of pickpocketing.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221407', 'The Ghost Who Haunted the Capitol', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221407.jpeg', NULL, 'A field trip to Washington, D.C. turns into a middle-grade mystery! In this Field Trip Mysteries book, sixth-grader Edward "Egg" Garrison and his friends travel to the nation''s capital. But when they arrived at Union Station, people scream and flee the popular landmark. They''ve seen a ghost, the ghost of George Washington, the first U.S. president! The four friends find themselves smackdab in another mind-bending mystery. And if they don''t act fast, the United States Capitol will soon become a haunted house. Written by acclaimed author Steve Brezenoff, this easy-to-read chapter book is sprinkled with visual and verbal clues, allowing emergent readers to solve the mystery themselves. A perfect choice for budding mystery lovers.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221414', 'The Zombie Who Visited New Orleans', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221414.jpeg', NULL, 'On a class trip to New Orleans, Catalina Cat Duran and her friends find themselves in the middle of a voodoo mystery.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219428', 'Aladdin and the Magic Lamp', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219428.jpeg', NULL, 'The story of Aladdin, a poor youth living in Al Kal''as. One day, the crafty boy outsmarts an evil sorcerer, getting his hands on a magical lamp that houses a wish-fulfilling genie! Soon, all of Aladdin''s dreams come true, and he finds himself wealthy and married to a beautiful princess. All is well until, one day, the evil sorceror returns to reclaim the magical lamp.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219886', 'Ali Baba and the Forty Thieves', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219886.jpeg', NULL, 'The story of Ali Baba, a young Persian boy who discovers a cave filled with gold and jewels, the hidden treasures of forty deadly thieves. Unfortunately, his greedy brother, Kassim, cannot wait to get his hands on the riches. Returning to the cave, he is captured by the thieves and killed, and now the evil men want revenge on Ali Baba as well.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221346', 'The Fisherman and the Genie', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221346.jpeg', NULL, 'The story of an evil Persian king, who marries a new wife each day and then kills her the next morning. To stop this murderous ruler, a brave woman named Scheherazade risks her own life and marries the king herself . . . but not without a plan. On their wedding night, she will entertain him with the tale of the Fisherman and the Genie, a legend so great, he''ll never want it to end.  ', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219879', 'The Seven Voyages of Sinbad', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219879.jpeg', NULL, 'The story of Sinbad the Sailor, who sets sail in search of great riches and discovers even greater adventures. On his seven treacherous voyages, the Persian explorer braves a shipwreck, fights off savage cannibals, and battles a giant Cyclops, surviving to tell his legendary tales. ', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220134', 'Monster Speller', '40', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220134.jpeg', NULL, 'Gabby''s pet monster is supposed to compete at the district-wide spelling bee. But how can Dwight be a champion speller when no one understands him? After speech therapy fails, it seems the only answer is an interpreter. But if Vice Principal Burns has anything to say about it, there won''t be an interpreter or a monster speller.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219770', 'The Evil Echo', '40', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219770.jpeg', NULL, 'With the evil Echo around, Halo Nightly faces her strongest villain yet -- herself. Echo is a sneaky shape shifter that morphs into Halo and causes her all sorts of problems. When Echo steals Halo''s candy, Halo is forced to battle someone who is every bit as powerful as she is.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221278', 'The Incredible Rockhead and the Spectacular Scissorlegz', '40', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221278.jpeg', NULL, 'The Incredible Rockhead and the Spectacular Scissorlegz team up to tackle a task far greater than either has ever known! Their mission: to seek out and defeat the man behind countless evil experiments, the mutant-making General himself. Upon arriving at his secret headquarters, the duo finds dozens of teenage mutants locked up like twisted science experiments -- and some of them aren''t happy to have visitors. Unable to tell friend from foe, the two superheroes will have to fight through the ranks of the General''s minions, and make some mutant friends, to have any chance at defeating their sinister creator.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219763', 'The Incredible Rockhead vs Papercut!', '40', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219763.jpeg', NULL, 'Chip Stone, a.k.a. the Incredible Rockhead, has yet to meet his match -- until now. Rockhead is up against an enemy designed to defeat him -- Papercut! With the entire school watching, this paper tiger is looking to cover Rockhead in the most action-packed game of paper, rock, scissors the world has ever seen. Is this the end of our boulder-headed hero, or will Rock find a way to hammer Paper into pulp?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434216359', 'Linebacker Block', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434216359.jpeg', NULL, 'Logan moved to Westfield a year ago. This season, he''ll be playing against some of his old friends. Will they see him as a traitor? Will he be able to be loyal to his new team without making his old friends mad?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434216342', 'Quarterback Comeback', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434216342.jpeg', NULL, 'Can the Wildcats'' quarterback lead his team to victory against their football rivals? The Huskies are the biggest and best team in the conference. The Wildcats lose to them every year. But with their new quarterback, Carlos, the coach thinks they have a chance this year. With action-packed text and high-impact art, Jake Maddox Sport Stories deliver a game-winning reading experience for young sports fans.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434216373', 'Running Back Dreams', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434216373.jpeg', NULL, 'Will a teammate''s injury lead to a running back''s dream  come true? In the Wildcats'' biggest game of the year, Noah''s on the bench as usual. But when another player is injured, Coach puts Noah in. And soon, the outcome of the football game rests on his shoulders. With action-packed text and high-impact art, Jake Maddox Sport Stories deliver a game-winning reading experience for young sports fans.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434216366', 'Speed Receiver', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434216366.jpeg', NULL, 'Can a speedy football receiver outrun his all-star brother''s footsteps? Andrew''s been improving his speed at the wide receiver position. But he''ll need to work overtime to lead his team to victory and impress his older brother. With action-packed text and high-impact art, Jake Maddox Sport Stories deliver a game-winning reading experience for young sports fans.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221483', 'Hide and Shriek!', '48', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221483.jpeg', NULL, 'Before the monsters can play Hide and Seek, they need to make some rules. No flying like a vampire bat, no sniffing like a werewolf, and absolutely no magic!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221506', 'The King of Halloween Castle', '48', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221506.jpeg', NULL, 'The monsters must relight the flame of Halloween. If they don''t, the haunted holiday could be extinguished for good.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221490', 'Lost in Spooky Forest', '48', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221490.jpeg', NULL, 'What frightens Frankenstein? When the monsters get lost in the woods, they''ll discover that even the mightiest of monsters can get spooked.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221520', 'Monster Mansion', '48', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221520.jpeg', NULL, 'When you''re a monster, spending the night in a haunted mansion should be easy. Unfortunately, no one told that to the ghosts.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221537', 'My Missing Monster', '48', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221537.jpeg', NULL, 'When one of the monsters'' pets goes missing, they all must lend a hand, or a paw, or a claw.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221513', 'New Monster in School', '48', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221513.jpeg', NULL, 'Being the new kid at school is never easy, especially when you''re a monster! Luckily, in Transylmania, the other kids are monsters too.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219800', 'Monica and the Bratty Stepsister', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219800.jpeg', NULL, 'Monica tries hard to be nice to her 8-year-old stepsister, but it''s hard. When she has to spend the whole day with Angela, it seems like Angela''s trying to sabotage her at every turn. Will Monica make it through the day?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219824', 'Monica and the Doomed Dance', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219824.jpeg', NULL, 'Every year, Rock Creek Stables hosts a barn dance, and the proceeds benefit hungry horses. It''s such a worthy cause that Monica wants to get involved. But kids at Pine Tree Middle School won''t go to a dance in Rock Creek. How can Monica prove that Pine Tree kids care too?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434219831', 'Monica and the School Spirit Meltdown', '88', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434219831.jpeg', NULL, 'Monica has the chance of a lifetime: she''s been asked to ride with her friends in a parade! But the problem is, the parade is for the Rock Creek football team, and they''re Pine Tree Middle School''s rivals in the big game. How can she support her school and her friends from Rock Creek, and still ride in the parade?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781423116646', 'Hip and Hop, Don''t Stop!', '40', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781423116646.jpeg', NULL, 'Hip is a turtle who raps really slowly. Hop is a bunny who raps superfast. Even though they both live in Oldskool County, they have never met. When they see a sign for a rap-off, they become fast friends. But when the big contest arrives, neither slow nor fast wins the prize.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780823419524', 'The Little Red Hen and the Passover Matzah', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780823419524.jpeg', NULL, 'Little Red Hen must make matzah for Passover. She asks her friends for help planting grains. "Sorry, bub," neighs Horse. "Think again," barks Dog. Of course, the Little Red Hen does it all herself. A classic tale gets a Jewish twist in this hilarious story.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780618543595', 'The Loathsome Dragon', '32', 'English', '2005', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780618543595.jpeg', NULL, 'A lovely princess, a brave prince, a wicked stepmother, evil enchantments, magic rowan wood, and an immense, scaly dragon. . . . Favorite fairytale elements sparkle in The Loathsome Dragon, a traditional English tale. Majestic, romantic paintings by two-time Caldecott medalist David Wiesner display the remarkable artistry and dizzying perspectives his work is known for.  Now available once again--with several new illustrations, revised text, and a brief source note--this picture-book classic will delight David Wiesner''s many fans, and win him a generation of new ones.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780823422630', 'Love-a-Duck', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780823422630.jpeg', NULL, 'Jane loves her rubber ducky, Love-a-Duck, and he loves her too! But one day the squeak seems to have gone out of him. Will Jane stop loving him if he can''t squeak like a good rubber ducky? Then Love-a-Duck accidentally falls out of the window and ends up at the park. He rides in a baby carriage, bobs in the pond with real ducks, and even meets fish swimming below. Love-a-Duck is on the adventure of a lifetime...but will he ever get his squeak back?  ', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780545161794', 'One More Hug for Madison', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545161794.jpeg', NULL, 'Madison is an adorable little mouse who wants just one more thing before she goes to bed. Perhaps she needs just one more drink or one more blanket...''Settle your little ones down and share this sweet and reassuring bedtime book.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780805086836', 'Pigs to the Rescue', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780805086836.jpeg', NULL, 'Farmer Greenstalk and his family have the darnedest luck. Broken-down tractors, kites stuck in trees--they''re always having problems! It''s a good thing they have such helpful farm animals on hand. This time around, the pigs want to pitch in, and boy, do they ever! The Greenstalks soon find, though, that life might just be a little easierwithout their help... Pigs to the Rescue is a 2011 Bank Street - Best Children''s Book of the Year.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780689878961', 'Turkey Bowl', '32', 'English', '2006', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780689878961.jpeg', NULL, ' It''s Thanksgiving, and that means it''s time for...football! Ethan has waited his whole nine-year-old life to be old enough to play in the annual family Turkey Bowl football game. This is his year. He wakes up Thanksgiving Day, dresses in all of his football finest, and runs downstairs to greet the team -- his whole family.  But the kitchen isn''t full of aunts and cousins and uncles -- a blizzard has snowed them out. And it looks like the Turkey Bowl just isn''t meant to be this year. After all, who could play football in a blizzard?  Ethan, that''s who!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780060546649', 'What''s That, Mittens?', '32', 'English', '2009', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780060546649.jpeg', NULL, 'Mittens the kitten is looking for some fun, but he''s all alone! When Mittens hears a scratching noise behind the fence, he digs and digs until he is face to face, eye to eye, and nose to nose with the big dog who lives next door, Max. With fun read-aloud sounds, What''s That, Mittens is a fun introduction to reading for the youngest readers. This My First I Can Read Book is perfect for shared reading with toddlers and very young children. Basic language, word repetition, and whimsical illustrations make this book just right for the emergent reader.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780545017565', 'While the World Is Sleeping', '32', 'English', '2009', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545017565.jpeg', NULL, 'Spend the night on an exploration with foxes, porcupines, raccoons, fish, mice, and more as their day begins while the rest of the world is fast asleep. Fly across the night on a snowy owl as you glide over meadows, lakes, forests, and rivers with only the moon to light the way.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780873952842', 'The Gaucho Martin Fierro', '99', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780873952842.jpeg', NULL, 'This is a poem of protest drawn from the life of the gaucho, who was forced to yield his freedom and individuality to the social and material changes that invaded his beloved pampas--a protest which arose from years of abuse and neglect suffered from landowners, militarists, and the Argentine political establishment. This poem, composed and first published more than a century ago, could have been written today by spokesmen for other oppressed groups in other parts of the world. For this reason, perhaps, the poem has such universal appeal that it has been translated into nineteen languages, making it available to more than half of the world''s people. Hernandez''s poem was an attempt to alert the government, and particularly the city dwellers, to the problems faced by the gaucho minority in adjusting to the new, unfamiliar culture imposed on them by the Central Government soon after the fall of the dictator Juan Manuel de Rosas in 1852, under the slogan "Politics of Progress." Moreover, the poem supplied a historical link to the gauchos'' contribution to the national development of Argentina, for the gaucho had performed a major role in the country''s independence from Spain. They had also fought in the civil wars of Argentina and had cleared the pampas of marauding Indian bands that plagued the pastoral development of the region. According to Hernandes they had been by turns abused, neglected, and finally dispersed, ultimately losing their identity as a social group. Those interested in the Martin Fierro as literature, as social protest, as anthropology, or as an example of the annihilation of a minority group--and its very identity--have joined in making it the most widely read, analyzed, and discussed literary work produced in Argentina. Now, after several hundred editions in Spanish and other languages, Martin Fierro is recognized as a masterpiece of world literature. The aim of this English version has been to achieve a line-by-line rendition faithful to the original in substance and tone, but without attempting to recreate Hernandez''s meter or rhyme. The translators present it here as a catalyst for enjoyment, provocation, and insight.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415001021', 'The Geography of Contemporary China: The Impact of the Post-Mao Decade', '256', 'English', '1990', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780203401415.jpeg', NULL, 'This book considers the impact of the last 10 years of Deng Xiaoping''s rule on China''s physical environment, as well as its people, industry, agriculture and trade. It assesses the contribution of this decade towards regional development, urbanization, the environment and geopolitics.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780813389868', 'The Geography of Illegal Drugs', '160', 'English', '1996', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780813366500.jpeg', NULL, 'The nightly news and other media provide a constant reminder of illegal drug transport over American borders and along routes between various U.S. cities. The general public is well aware that law enforcement efforts to address the foreign supply and trafficking of illegal drugs into the United States is an ongoing battle.This useful and readable compendium gives a fascinating account of how illegal drugs are transported into and around the United States and throughout its neighborhoods. Criminologist and geographer George F. Rengert takes a unique approach to the problem of illegal drug distribution and U.S. drug markets. Using maps and charts to illustrate his findings, Rengert applies spacial diffusion models to the illegal drug trade and explains why certain drugs are transported and found in different parts of the country. For example, the highest concentration of marijuana plants is not on either coast, but rather across the middle of the United States--throughout what is known as the corn belt. At the local level Rengert assesses the patterns and processes that interconnect drug sales and neighborhood deterioration and change.The book also addresses the important issues of how illegal drugs in this country operate on wholesale and retail levels and ways in which law enforcement at the federal, state, and local levels contend with this widespread problem. Using ethnographic material to provide real-life examples, Rengert explores how drug dealers on the street expand spatially and predictably in their neighborhoods. He illustrates how this knowledge helps law enforcement in efforts to get these drugs off the streets.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780811200981', 'The Geography of Lograire: Long Poem', '1', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780811200981.jpeg', NULL, 'It was completed in the summer of 1968, a few months before he set out from Our Lady of Gethsemani monastery in Kentucky on the Asian journey from which he did not return. The text is as he left it. It lacks that final editing that he would have done in proof, but it is substantially a completed, self-contained work. Lograire, as with William Carlos Williams''s Paterson, is first of all a country of the imagination, but it is also a person--Merton himself--for its "geography" is the map, the inner choreography, of his mind. The charting in the poem is his search for self-location: where, and even how, does a man find himself in the geography of all men? Sections of personal experience are set against passages re-imagined from anthropological and historical texts, material that Merton chose for its character of myth to illustrate the general experience of mankind. The myths of Lograire form a mosaic of African legends, Mixtecart motifs and Mayan religious customs, the pantheism of the fanatical Ranters in 17th-century England, the records of an early arctic expedition and of Ibn Battuta, the 14th-century Arab traveler, the Cargo Cults of Melanesia and the Ghost Dances of the American Indians. "A poet," Merton wrote in his prefatory note to Lograire, "spends his life attempting to build or to dream the world in which he lives. But more than that he realizes that this world is at once his and everybody''s. It grows out of a common participation which is nevertheless recorded in authentically personal images. I have without scruple mixed what is my own experience with what is almost everybody else''s." Many modern poets have used history and myth in their work; what sets The Geography of Lograire apart is the invention of Merton''s method--his process for elevating fact to the level of myth. It is a complex technique of fractured syntax, multiple meanings; the distortion of dream, irony and parody.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780801435133', 'The Geography of Money', '248', 'English', '1998', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780801435133.jpeg', NULL, 'The traditional assumption holds that the territory of money coincides precisely with the political frontiers of each nation state: France has the franc, the United Kingdom has the pound, the United States has the dollar. But the disparity between that simple mental landscape and the actual organization of currency spaces has grown in recent years, as territorial boundaries of individual states limit currency circulation less and less. Many currencies are used outside their "home" country for transactions either between nations or within foreign states. In this book, Benjamin J. Cohen asks what this new geography of money reveals about financial and political power. Cohen shows how recent changes in the geography of money challenge state sovereignty. He examines the role of money and the scope of cross-border currency competition in today''s world. Drawing on new work in geography and network theory to explain the new spatial organization of monetary relations, Cohen suggests that international relations, political as well as economic, are being dramatically reshaped by the increasing interpenetration of national monetary spaces. This process, he explains, generates tensions and insecurities as well as opportunities for cooperation.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9781563240751', 'The Geography of Survival: Ecology in the Post Soviet Era', '172', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781563240751.jpeg', NULL, 'In 1989 a Soviet environmental expert writer under the pseudonym Boris Komarov startled the world. His book "The Destruction of Nature in the Soviet Union", was both a chilling description of the environmental devastation in the Soviet Union and an indictment of the official policy and public apathy that allows it to be perpetuated. Today Boris Komarov writes freely under his own name - Ze''ev Wolfson. But the ecological crisis he documents has only become more severe, more widespread, more deadly. In "The Geography of Survival" Wolfson speaks out in unmistakable terms about the world''s choice to embrace the cause of our collective survival or to let desertisation, pollution, disaster, famine, epidemic, and war work their own solution.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780805807202', 'The Geometric Supposer: What Is It a Case Of?', '272', 'English', '1993', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780805807202.jpeg', NULL, 'This volume is a case study of education reform and innovation using technology that examines the issue from a wide variety of perspectives. It brings together the views and experiences of software designers, curriculum writers, teachers and students, researchers and administrators. Thus, it stands in contrast to other analyses of innovation that tend to look through the particular prisms of research, classroom practice, or software design. The Geometric Supposer encourages a belief in a better tomorrow for schools. On its surface, the Geometric Supposer provides the means for radically altering the way in which geometry is taught and the quality of learning that can be achieved. At a deeper level, however, it suggests a powerful metaphor for improving education that can be played out in many different instructional contexts.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780805816563', 'The Geometry of Multivariate Statistics', '176', 'English', '1994', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780805816563.jpeg', NULL, 'A traditional approach to developing multivariate statistical theory is algebraic. Sets of observations are represented by matrices, linear combinations are formed from these matrices by multiplying them by coefficient matrices, and useful statistics are found by imposing various criteria of optimization on these combinations. Matrix algebra is the vehicle for these calculations. A second approach is computational. Since many users find that they do not need to know the mathematical basis of the techniques as long as they have a way to transform data into results, the computation can be done by a package of computer programs that somebody else has written. An approach from this perspective emphasizes how the computer packages are used, and is usually coupled with rules that allow one to extract the most important numbers from the output and interpret them. Useful as both approaches are--particularly when combined--they can overlook an important aspect of multivariate analysis. To apply it correctly, one needs a way to conceptualize the multivariate relationships that exist among variables.  This book is designed to help the reader develop a way of thinking about multivariate statistics, as well as to understand in a broader and more intuitive sense what the procedures do and how their results are interpreted. Presenting important procedures of multivariate statistical theory geometrically, the author hopes that this emphasis on the geometry will give the reader a coherent picture into which all the multivariate techniques fit.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780415162708', 'The Geopolitics Reader', '344', 'English', '1997', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780415162708.jpeg', NULL, 'The Geopolitics Readeroffers an interdisciplinary sourcebook of the most important political, geographical, historical and sociological readings of geopolitics in the late twentieth century. The Reader is divided into five parts which draw on the most illuminating examples of imperial, Cold War, contemporary geopolitics, new environmental themes and multiple resistances to the practices of geopolitics. The editors provide comprehensive introductions and critical comment at the beginning of each part and visual ''geopolitical texts'' in the form of political cartoons are integrated throughout. Encouraging exploration of divergent viewpoints of global conflict and change this invaluable compendium includes readings by Martin Luther King, Vaclav Havel and George Bush.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9789768125408', 'The George Beckford Papers', '468', 'English', '2000', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9789768125408.jpeg', NULL, 'This volume presents papers by George Beckford which cover topics ranging from agricultural economics to political economy, to the social economy of man space, to the cultural roots of Caribbean creativity and a vision of one independent, sovereign and self-reliant Caribbean nation.', NULL);
INSERT INTO "PROJECT"."BOOK" VALUES ('9780064442558', 'The Witch Who Was Afraid of Witches', '48', 'English', '1978', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780064442558.jpeg', NULL, 'A bewitching tale for beginning readers, the perfect early chapter book story for Halloween! Wendy is a little witch who is afraid of her mean, bossy witch sisters--until one special Halloween night when she makes a magical discovery: Wendy''s sisters can fly fast, cackle loudly, and cast spells, but Wendy can fly even faster. Can she find a way to out-witch her sisters In this I Can Read Level 4 paperback--complete with full-color art and short chapters--Alice Low has adapted her popular story specifically for readers bridging to chapter books.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220639', 'Buzz Beaker and the Outer Space Trip', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220639.jpeg', NULL, 'Buzz dreams of going into outer space. One night, his dream comes true. With his dog, Raggs, by his side, he sneaks onto a spaceship. Together, Raggs and Buzz have an awesome outer space adventure.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220622', 'Buzz Beaker and the Putt-Putt Contest', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220622.jpeg', NULL, 'Mike''s Mini Golf is having a contest. Whoever builds the best new golf hole wins great prizes. Buzz works hard on his entry, but someone is standing in the way of his win. Does Buzz have what it takes to beat the smartest kid in his class?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220615', 'Buzz Beaker and the Speed Secret', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220615.jpeg', NULL, 'Buzz enters a downhill ski race to test his latest invention. It is a paint that makes his skis go super fast! But when he sees the other skiers in their fancy gear, Buzz feels nervous. Will his speed secret be enough to bring him a win?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220073', 'Little Lizard''s Big Party', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220073.jpeg', NULL, 'It''s Gary the lizards birthday and he wants a party.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220066', 'Little Lizard''s Family Fun', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220066.jpeg', NULL, 'Each member of the lizard family enjoys a different hobby.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220059', 'Little Lizard''s First Day', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220059.jpeg', NULL, 'It''s Gary the lizards first day of school.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220080', 'Little Lizard''s New Bike', '32', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220080.jpeg', NULL, 'Gary the lizard goes with his parents to buy a new bike.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220523', 'The Best Trick: A Pet Club Story', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220523.jpeg', NULL, 'It''s pet day at school, and Jake is really excited. His dog, Buddy, has so many cool tricks. But when it''s time for Buddy to perform, not much happens.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220530', 'Find the Cat!: A Pet Club Story', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220530.jpeg', NULL, 'Kayla''s cat, Daisy, is missing. Kayla is so worried. She calls her friends, and soon enough the entire Pet Club is on the case.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220493', 'The Noisy Night: A Pet Club Story', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220493.jpeg', NULL, 'The Pet Club is going camping! From bonfires and tasty treats to scary stories and strange noises, this will be one fun adventure!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221292', 'Stage Fright', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221292.jpeg', NULL, 'Klooz has to crack one of his hardest cases yet, and it all starts in the basement of the theater...', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221445', 'The Book That Ate My Brother', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221445.jpeg', NULL, 'Jack writes a letter to the Librarian because he needs help. His brother has been eaten by a book!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781416991410', 'LMNO Peas', '40', 'English', '2010', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781416991410.jpeg', NULL, 'Get ready to roll through the alphabet with a jaunty cast of busy little peas. Featuring a range of zippy characters from Acrobat Peas to Zoologist Peas, this delightful picture book highlights a variety of interests, hobbies, and careers--each one themed to a letter of the alphabet--and gives a wonderful sense of the colorful world we live in. Children will have so much fun poring over the detailed scenes that they won''t even realize they''re learning the alphabet along the way!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221469', 'Inkfoot', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221469.jpeg', NULL, 'An inky beast attacks the library and bookshelves of a small mountain town. The Librarian and the Specialist must track the monster down before it obliterates every book in its sludgy path.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221476', 'Rats on the Page', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221476.jpeg', NULL, 'A mysterious picture book turns children into hungry rat creatures. The rats travel through the sewers of the Library of Doom and begin to devour the library''s most precious treasures.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221421', 'The Sea of Lost Books', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221421.jpeg', NULL, 'The underwater library has been attacked. The Librarian will have to retrieve all of the lost books.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221438', 'The Vampire Chapter', '72', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221438.jpeg', NULL, 'Someone, or something, is draining all the books of their ink.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220547', 'Pets at the Party: A Pet Club Story', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220547.jpeg', NULL, 'Lucy is throwing Ajax a birthday party. She remembers balloons, games, and cake. But something is missing. Will the party be ruined?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434230065', 'Balancing Act', '144', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434230065.jpeg', NULL, 'The All-School Equestrian Games are coming up, and Annie Boyd is desperate to ride in them on her horse, Bobby.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434230072', 'Heads or Tails?', '144', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434230072.jpeg', NULL, 'A horse-tail thief is on the prowl in Ridgeview. All over town, horse tails are disappearing. No horse is safe. Determined to protect her horse, Bobby, Annie Boyd is on the hunt for the criminal. But when she gets involved in the mystery, is she putting Bobby in danger?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434230089', 'Making Waves', '144', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434230089.jpeg', NULL, 'Her best friend. Spending time at the beach. Horses. It''s Annie''s idea of the perfect vacation. But when Reese and Annie have an argument, things go downhill fast. And things go from bad to worse when some of the horses at Seahorse Stables escape. Is there any hope for this disaster?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434230096', 'Taking a Break', '144', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434230096.jpeg', NULL, 'Annie has been waiting for a chance to show off her riding skills. A trail ride in the mountains is the perfect time. And her friend Jade is coming along. It''ll be just like before Annie moved to Ridgeview and left Jade behind in the city. She can''t wait. But things never work out as planned . . . .', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781442401754', 'Comic Crazy ... Take 2!', '64', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781442401754.jpeg', NULL, 'Fans went so crazy for it the first time, Spotlight''s doing a second installment of SpongeBob''sComic Crazy!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780525421412', 'Whiteout', '272', 'English', '2009', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780525421412.jpeg', NULL, 'A teacher is found dead in a whiteout blizzard. If Chass doesn''t act fast, she could be next . . . Whiteout continues the story of Chastity, who has been on the run with her mother for as long as she can remember. Stumbling through a whiteout blizzard in Greenville, Minnesota, Chass trips over a dead body, and then sees a mysterious man disappear into the storm. With her haunted past, Chass knows all about running from killers, and she is sure that Kyle Van Epps is back. But Chass is sick of running, and if she hopes to ever have a normal life again, she has only one choice: find the killer before the killer finds her. ', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9780553495034', 'The Widow and the King', '624', 'English', NULL, NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9780553495034.jpeg', NULL, 'This stunning book opens 12 years after the end of The Cup of the World and tells the story of Ambrose, son of Phaedra and last in the king''s line, who is living exiled with his mother in the dilapidated manor of Tarceny. Ambrose''s life is threatened by the hooded priest of the Undercraft, an ancestral spirit of pure evil who must end Ambrose''s life in order to survive himself. And even when Ambrose is hidden within the house of the Widow of Develin, a hallowed place of learning and haven of education, the priest and his minions slowly and subtly infiltrate within, subverting the minds of those most educated and powerful and leaving Ambrose in mortal danger.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('133-234-1837', 'Premer Tajmohol', '100', 'Bangla', '2023', '220', 'https://i.ytimg.com/vi/eNA5yIE84eU/maxresdefault.jpg', NULL, NULL, 'Romantic');
INSERT INTO "PROJECT"."BOOK" VALUES ('978-984-94751-1-8', 'Chander Gari', '63', 'Bangla', '2020', '200', 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/663552a53_197285.jpg', 'Mermaid Media & Publications', 'They are six young people full of youthfulness. After completing the course of college life, he entered the university only. The story of their adventurous journey is described in the novel ''Chander Gari''. A small group of youngsters, who named themselves BLAST. On the one hand, various events. Traditions, murders with friends, misunderstandings, while Chander gari''s driver Aziz - who is close to these youngsters; How can they reach their desired destination by driving Chander gari with indomitable courage and skill. The story of the novel is developed in the narrative. How dreams are shaped by the extreme will of youth. Vali''s journey comes to fruition - the description of it is revealed in writer Ananya Shahreen Promi''s novel ''Chander Gari''.', 'Novel');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221308', 'Cheerleading Really Is a Sport', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221308.jpeg', NULL, 'Alicia''s brother Danny and his friends are always putting down cheerleading. One of them even said the cheerleaders don''t belong at the Victory School. But Alicia knows that everyone on the team has something special, like her super jumping ability. She just has to prove to Danny and the others that cheerleading really is a sport.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220578', 'Don''t Break the Balance Beam!', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220578.jpeg', NULL, 'Kenzie''s super strength makes her a super tumbler. But it causes all sorts of problems on the balance beam. When she doesn''t control her strength, she falls off or even worse. If she doesn''t learn to control her strength soon, all of her teammates will be laughing and saying one thing: don''t break the balance beam!', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220165', 'It''s Hard to Dribble with Your Feet', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220165.jpeg', NULL, 'Carmen is a star dribbler for the Victory basketball team. She never loses control of the ball. But when she decides to try out for soccer, she learns that handling a soccer ball doesn''t come nearly as easy. After Carmen hears some other girls talking about her, she feels awful. She just didn''t realize that it''s hard to dribble with your feet.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220561', 'Nobody Wants to Play with a Ball Hog', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220561.jpeg', NULL, 'Tyler couldn''t believe it when he discovered his super ability while playing basketball with his dad. He''s a perfect shot! Since he can''t miss, he quits passing to his teammates. Soon the other teams figure out how to stop him, and his teammates get mad. When will Tyler learn that nobody wants to play with a ball hog?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220554', 'A Running Back Can''t Always Rush', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220554.jpeg', NULL, 'Danny loves to go fast. With his super speed, he can rush down the football field in seconds. The trouble is he forgets to slow down off of the field. When he zips through his homework, he makes mistakes. When he eats too fast, he feels sick. How will Danny learn that a running back can''t always rush?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220714', 'There Are No Figure Eights in Hockey', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220714.jpeg', NULL, 'Josh has already won a gold medal in figure skating, so he is looking for a new challenge. He decides that hockey is a good fit for his super skating ability. But when he gets out on the hockey rink, he soon realizes changing sports won''t be as easy as he thought. After all, there are no figure eights in hockey.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220097', 'Avalanche Freestyle', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220097.jpeg', NULL, 'Rich kid Tony Jay is a shoe-in to win the Silver Falls snowboarding tournament, but his biggest competition, Jack Hewlitt, can''t afford to enter. Tony may be spoiled, but he knows that victory means nothing if you don''t beat the best. So, he agrees to hold a one-on-one freestyle run with Jack atop the Silver Falls Mountains. But just when things start to heat up, a massive avalanche threatens to put both boys on ice, turning their friendly competition into a race for their lives.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220103', 'End Zone Thunder', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220103.jpeg', NULL, 'Hank "Thunder" Wilde and Jonas "Lightning" Fine are total opposites. Jonas is flashy, while Hank lets his booming hits do the talking. However, both teens have one thing in common -- their competition to become team captain is hurting the Cyclones'' run at the state championship. Will "Thunder" and "Lightning" rip the Cyclones apart, or will the two wide receivers come together to create the perfect offensive storm?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434222190', 'Paintball Punk', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434222190.jpeg', NULL, 'Chester Coyote is a very talented paintball player. Unfortunately, he would rather be a lone wolf than run with the pack. His team, the Wolves, is in the state paintball finals, but he isn''t seeing eye-to-eye with his best friend, Cora Ramirez, the Wolves'' team captain. Chester won''t follow her orders, and his class-clown personality is turning the rest of the Wolves against him. If Chester doesn''t decide to play well with others, he''ll lose his friends -- as well as the paintball championship.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220707', 'Shot Clock Slam', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220707.jpeg', NULL, 'Perry the Playmaker has always been the Tigers'' go-to guy -- until super-tall and ultra-talented Jason joins the team. Feeding the ball to Jason in the post is a guaranteed two points, but Perry refuses to play nice. Instead, he hogs the ball and takes bad shots, ruining the team''s rhythm. Will Perry''s selfishness spoil the Tigers'' run at the state championship, or will the two talented teens team up to slam dunk the competition?', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220110', 'Skateboard Breakdown', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220110.jpeg', NULL, 'Ty Taggart has always loved skating. But ever since his older brother, Nick, died in combat, Ty has been off his game. He skates recklessly and has lost all interest in the local skating tournament. But when Nick''s best friend, Edwin, pays him a visit, Ty is able to reign in his anger and realize his true skating potential. In the finals, everyone is dazzled by Ty''s slick, flashy tricks -- until he wipes out and breaks his board. Ty will have to pick up the pieces and reassemble his board overnight if he hopes to prevail.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434221285', 'Spotlight Striker', '56', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434221285.jpeg', NULL, 'Carlos Ramirez has always been the Strikers'' best scorer. He pulls off bicycle kicks with ease, and his best friend, Tou Yang, knows exactly where to put the passes. But the state''s best team, the Bandits, are coming to town, and Carlos hears that he''ll have a very special fan in the stands. His uncle, a professional soccer player, will be watching his nephew''s every move during the Strikers'' biggest game of the year. As the pressure to perform sets in, Carlos struggles to even hit the ball, let alone do bicycle kicks. Everyone has seen that Carlos is a gifted athlete, but no one knows whether he''ll shine as the center of attention, or be blinded by the spotlight.', 'Trade Fiction');
INSERT INTO "PROJECT"."BOOK" VALUES ('9781434220608', 'Buzz Beaker and the Cave Creatures', '32', 'English', '2011', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/9781434220608.jpeg', NULL, 'Buzz and his dad head to a cave to test a new invention. As they explore the cave, they see crystals, snakes, and bats. Then Buzz spots something really special! Maybe Buzz''s latest invention has led to a great discovery.', 'Trade Fiction');

-- ----------------------------
-- Table structure for BOOKFRIEND
-- ----------------------------
DROP TABLE "PROJECT"."BOOKFRIEND";
CREATE TABLE "PROJECT"."BOOKFRIEND" (
  "BOOKFRIENDID" NUMBER(10,0) VISIBLE NOT NULL,
  "EMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of BOOKFRIEND
-- ----------------------------
INSERT INTO "PROJECT"."BOOKFRIEND" VALUES ('1001', 'user5@example.com');
INSERT INTO "PROJECT"."BOOKFRIEND" VALUES ('1002', 'user6@example.com');
INSERT INTO "PROJECT"."BOOKFRIEND" VALUES ('1003', 'user7@example.com');
INSERT INTO "PROJECT"."BOOKFRIEND" VALUES ('1004', 'user8@example.com');
INSERT INTO "PROJECT"."BOOKFRIEND" VALUES ('1005', 'user9@example.com');
INSERT INTO "PROJECT"."BOOKFRIEND" VALUES ('1006', 'user10@example.com');

-- ----------------------------
-- Table structure for DELIVARYMAN
-- ----------------------------
DROP TABLE "PROJECT"."DELIVARYMAN";
CREATE TABLE "PROJECT"."DELIVARYMAN" (
  "DELIVARYMANID" NUMBER(10,0) VISIBLE NOT NULL,
  "EMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of DELIVARYMAN
-- ----------------------------
INSERT INTO "PROJECT"."DELIVARYMAN" VALUES ('5001', 'user1@example.com');
INSERT INTO "PROJECT"."DELIVARYMAN" VALUES ('5002', 'user2@example.com');
INSERT INTO "PROJECT"."DELIVARYMAN" VALUES ('5003', 'user3@example.com');
INSERT INTO "PROJECT"."DELIVARYMAN" VALUES ('5004', 'user4@example.com');

-- ----------------------------
-- Table structure for EXCHANGEOFFER
-- ----------------------------
DROP TABLE "PROJECT"."EXCHANGEOFFER";
CREATE TABLE "PROJECT"."EXCHANGEOFFER" (
  "EXCHANGEID" NUMBER(10,0) VISIBLE NOT NULL,
  "PROCESSSTARTDATE" DATE VISIBLE,
  "EXCHANGECOMPLETIONDATE" DATE VISIBLE,
  "DELIVARYMANEMAILID" VARCHAR2(50 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of EXCHANGEOFFER
-- ----------------------------

-- ----------------------------
-- Table structure for NOTIFICATION1
-- ----------------------------
DROP TABLE "PROJECT"."NOTIFICATION1";
CREATE TABLE "PROJECT"."NOTIFICATION1" (
  "NOTIFICATIONID" NUMBER(10,0) VISIBLE NOT NULL,
  "EMAILWHOREQUESTED" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "OFFERID" NUMBER(10,0) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of NOTIFICATION1
-- ----------------------------

-- ----------------------------
-- Table structure for OFFER
-- ----------------------------
DROP TABLE "PROJECT"."OFFER";
CREATE TABLE "PROJECT"."OFFER" (
  "OFFERID" NUMBER(10,0) VISIBLE NOT NULL,
  "MESSAGE" VARCHAR2(500 BYTE) VISIBLE,
  "BOOKCONDITIONPHOTO" VARCHAR2(100 BYTE) VISIBLE NOT NULL,
  "USEREMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "ISBN" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "TIME" TIMESTAMP(6) VISIBLE,
  "STATUS" VARCHAR2(10 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of OFFER
-- ----------------------------
INSERT INTO "PROJECT"."OFFER" VALUES ('1', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user7@example.com', '9780813372617', TO_TIMESTAMP('2023-08-14 21:07:58.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('2', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user7@example.com', '9780813372617', TO_TIMESTAMP('2023-08-14 21:11:16.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('3', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user7@example.com', '9780813372617', TO_TIMESTAMP('2023-08-15 03:13:25.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('5', 'kmefksn', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692158980/my-uploads/c7ezwfh6jrb66hfaikml.jpg', 'user6@example.com', '9798889050452', TO_TIMESTAMP('2023-08-16 10:10:24.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('6', 'kmf', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692159179/my-uploads/yspfornimndg2ttymma3.jpg', 'user6@example.com', '9798889050452', TO_TIMESTAMP('2023-08-16 10:12:50.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('7', 'kmfjih', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692159179/my-uploads/yspfornimndg2ttymma3.jpg', 'user6@example.com', '9798889050452', TO_TIMESTAMP('2023-08-16 10:13:04.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('8', 'kmfjihkjgnryjwr4', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692159179/my-uploads/yspfornimndg2ttymma3.jpg', 'user6@example.com', '9798889050452', TO_TIMESTAMP('2023-08-16 10:13:28.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('14', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '978-984-94751-1-8', TO_TIMESTAMP('2023-08-21 01:42:44.335000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('15', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:43:29.996000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('16', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:45:06.293000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('26', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 01:58:37.451000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('27', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:01:52.193000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('28', 'ggg', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 02:02:24.948000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('36', 'nooooo', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9780136127802', TO_TIMESTAMP('2023-08-21 02:16:24.549000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('37', 'regre', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692562743/my-uploads/srozgwxm4yxdiklunul1.jpg', 'user5@example.com', '9781434221292', TO_TIMESTAMP('2023-08-21 02:19:07.849000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('38', 'rgtrb', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692562771/my-uploads/tghp0vq6wpdgszkqtu1b.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:19:37.447000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('39', 'trjjj', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9780193161283', TO_TIMESTAMP('2023-08-21 02:20:16.124000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('40', 'reh', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692562843/my-uploads/wcqojordbiamax1hozgu.png', 'user5@example.com', '9798986874234', TO_TIMESTAMP('2023-08-21 02:20:50.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('41', 'loca loca loca', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563112/my-uploads/f2utoltunimyg9hmnunp.png', 'user5@example.com', '9781434221438', TO_TIMESTAMP('2023-08-21 02:25:20.631000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('42', 'vfreb', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563189/my-uploads/oxexmnsvh97sywd9jrdk.png', 'user5@example.com', '9781728490779', TO_TIMESTAMP('2023-08-21 02:26:38.385000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('43', 'erg', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563385/my-uploads/easzogijxjkuri284bsh.png', 'user5@example.com', '9781728490779', TO_TIMESTAMP('2023-08-21 02:29:50.524000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('44', 'vaaaa', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563491/my-uploads/tksggnzic8omwjwlmdd8.png', 'user5@example.com', '9781728490779', TO_TIMESTAMP('2023-08-21 02:31:39.434000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('45', 'eg', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563572/my-uploads/jo50dzvgl7lypyaqsnzo.png', 'user5@example.com', '9781434220110', TO_TIMESTAMP('2023-08-21 02:32:57.596000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('46', 'regt', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563610/my-uploads/kq66myfo7tnln6kyyqcm.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:33:36.111000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('47', 'regtttt', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563793/my-uploads/mqx10e7mjndmvmxqlnij.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:36:40.265000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('48', 'fvfrt', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692563828/my-uploads/kijcoipyfkolhhxumzoe.png', 'user5@example.com', '9780136127802', TO_TIMESTAMP('2023-08-21 02:37:37.440000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('4', 'regtrb', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user6@example.com', '9780773516052', TO_TIMESTAMP('2023-08-15 03:25:55.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('32', 'klmlnk', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:07:08.969000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('10', 'this is', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692167668/my-uploads/netuez7ejdwpswf6f8db.jpg', 'user5@example.com', '133-234-1837', TO_TIMESTAMP('2023-08-16 12:33:56.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('11', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '978-984-94751-1-8', TO_TIMESTAMP('2023-08-21 00:40:23.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('12', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '978-984-94751-1-8', TO_TIMESTAMP('2023-08-21 00:41:12.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('13', 'CFV', 'REV', 'user6@example.com', '978-984-94751-1-8', TO_TIMESTAMP('2023-08-21 01:27:58.417000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'OFFERED');
INSERT INTO "PROJECT"."OFFER" VALUES ('49', 'rvgrt', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434221292', TO_TIMESTAMP('2023-08-21 02:38:22.110000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('9', 'Ei book e boiche Zamuna', 'https://res.cloudinary.com/dxcudg1mx/image/upload/v1692163064/my-uploads/q1k0dmyk0ulxlnf9tkr5.jpg', 'user5@example.com', '133-234-1837', TO_TIMESTAMP('2023-08-16 11:17:10.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('17', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:47:07.189000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('18', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:47:26.058000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('19', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:49:26.809000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('20', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:50:33.618000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('21', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:52:54.301000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('22', 'efwf', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434219886', TO_TIMESTAMP('2023-08-21 01:55:07.161000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('23', 'aaaaa', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220639', TO_TIMESTAMP('2023-08-21 01:55:42.274000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('24', 'bbbbbbb', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220639', TO_TIMESTAMP('2023-08-21 01:56:19.659000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('25', 'sssss', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 01:56:41.578000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('29', 'dddd', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9798889050605', TO_TIMESTAMP('2023-08-21 02:04:29.282000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('30', 'kln', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9798889050605', TO_TIMESTAMP('2023-08-21 02:05:00.365000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('31', NULL, 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220554', TO_TIMESTAMP('2023-08-21 02:05:35.774000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('33', 'asssa', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:09:37.095000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('34', 'rtg', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220097', TO_TIMESTAMP('2023-08-21 02:13:54.655000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');
INSERT INTO "PROJECT"."OFFER" VALUES ('35', 'reg', 'https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png', 'user5@example.com', '9781434220608', TO_TIMESTAMP('2023-08-21 02:14:35.066000', 'SYYYY-MM-DD HH24:MI:SS:FF6'), 'offered');

-- ----------------------------
-- Table structure for PUBLISHER
-- ----------------------------
DROP TABLE "PROJECT"."PUBLISHER";
CREATE TABLE "PROJECT"."PUBLISHER" (
  "NAME" VARCHAR2(100 BYTE) VISIBLE NOT NULL,
  "ADDRESS" VARCHAR2(200 BYTE) VISIBLE,
  "WEBSITE" VARCHAR2(50 BYTE) VISIBLE,
  "EMAIL" VARCHAR2(50 BYTE) VISIBLE,
  "CONTACTNO" NUMBER(15,0) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of PUBLISHER
-- ----------------------------
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Routledge', 'New York', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Edward Elgar', 'Cheltenham', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Wiley-VCH', 'Weinhein', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('John Wiley & Sons', 'Chichester', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Facet Publishing', 'London', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Blackwell Publishing', 'Malden, MA', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Longman', 'White Plains, NY', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Pearson Education', 'New York', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Express Publishing', 'Newbury', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Garnet Publishing', 'United Kingdom', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Cambridge University Press', 'United Kingdom', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('SAGE', 'California', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('THOMSON', 'United Kingdom', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Open University Press', 'New York', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('DELTA Publishing', 'London', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Marshall Cavendish', 'London', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Harper Collins Publishers', 'Glasgow', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Heinle, Cengage Learning', 'Boston', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Marshall Cavendish Education', 'London', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Thomson Heinle', 'Boston', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Cheng and Tsui Company', 'Boston', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Left Coast Press, Inc.', 'Walnut Creek', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Heinle, Gengage Learning', 'Boston', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('National Academies Press,', 'Washington, D.C. :', NULL, NULL, NULL);
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Mermaid Media & Publications', '218 Elephant Road, Bata Signal, Dhaka', NULL, 'mermaidmediabd@gmail.com', '1731495857');
INSERT INTO "PROJECT"."PUBLISHER" VALUES ('Tamralipi', '38/2A, Banglabazar, Dhaka-1100', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for REVIEW
-- ----------------------------
DROP TABLE "PROJECT"."REVIEW";
CREATE TABLE "PROJECT"."REVIEW" (
  "MESSAGEFORUS" VARCHAR2(500 BYTE) VISIBLE,
  "DATEOFREVIEW" DATE VISIBLE NOT NULL,
  "RATEUS" NUMBER(1,0) VISIBLE NOT NULL,
  "REVIEWID" NUMBER(10,0) VISIBLE NOT NULL,
  "EMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of REVIEW
-- ----------------------------

-- ----------------------------
-- Table structure for USERMAN
-- ----------------------------
DROP TABLE "PROJECT"."USERMAN";
CREATE TABLE "PROJECT"."USERMAN" (
  "EMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "PASSWORD" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "FIRSTNAME" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "DATEOFBIRTH" DATE VISIBLE NOT NULL,
  "GENDER" VARCHAR2(10 BYTE) VISIBLE NOT NULL,
  "LASTNAME" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "LATITUDE" NUMBER(10,7) VISIBLE NOT NULL,
  "LONGITUDE" NUMBER(10,7) VISIBLE NOT NULL,
  "CONTACTNO1" VARCHAR2(20 BYTE) VISIBLE,
  "CONTACTNO2" VARCHAR2(20 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of USERMAN
-- ----------------------------
INSERT INTO "PROJECT"."USERMAN" VALUES ('ananyapromi@gmail.com', 'nonono', 'Ananya', TO_DATE('2023-08-23 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Female', 'Promi', '37.7749295', '-122.4194155', '+8801745362617', '+8801748927463');
INSERT INTO "PROJECT"."USERMAN" VALUES ('EWG@JKB', 'HIHJIJ', 'HIUBJ', TO_DATE('2023-08-24 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'JNJK', 'JBJB', '23.7661639', '90.3588734', '98YY9', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('d2@gmail.com', 'duiefhiuf', 'uhih', TO_DATE('2023-08-01 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'male', 'uihhiu', '37.7749295', '-122.4194155', 'undefined', 'undefined');
INSERT INTO "PROJECT"."USERMAN" VALUES ('user1@example.com', 'AmiAmiAmi1', 'John', TO_DATE('1990-01-15 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Male', 'Doe', '37.7749295', '-122.4194155', '+8801745362613', '+8801748927463');
INSERT INTO "PROJECT"."USERMAN" VALUES ('user2@example.com', 'TumiTumiTumi2', 'Jane', TO_DATE('2002-04-23 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Female', 'Smith', '34.052235', '-118.243683', '+8801547823747', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user3@example.com', 'EijeEijeEije3', 'Saika', TO_DATE('1998-03-12 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Male', 'Johnson', '40.712776', '-74.005974', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user4@example.com', 'HiThereHello2u', 'Emily', TO_DATE('2010-12-29 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Female', 'Brown', '51.5074', '-0.1278', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user5@example.com', 'NoWayHome12345', 'Alex', TO_DATE('2002-04-13 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Non-binary', 'Taylor', '41.8781', '-87.6298', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user6@example.com', 'AndThenThereWereNone', 'Samantha', TO_DATE('1989-09-02 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Female', 'Williams', '34.0522', '-118.2437', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user7@example.com', 'HaveABeautifulDay@', 'Daniel', TO_DATE('1996-08-10 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Male', 'Anderson', '37.7749', '-122.4194', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user8@example.com', 'Crying_1_2_3', 'Amanda', TO_DATE('1990-04-15 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Female', 'Martinez', '40.7128', '-74.0059', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user9@example.com', 'NobodyLovesM3', 'Robert', TO_DATE('2000-08-19 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Male', 'Walker', '34.0522', '-118.2437', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('user10@example.com', 'IAMUSER10', 'Laura', TO_DATE('2002-06-20 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'Female', 'Lee', '34.0522', '-118.2437', '+8801748927463', NULL);
INSERT INTO "PROJECT"."USERMAN" VALUES ('d22@gmail.com', 'duiefhiuf', 'uhih', TO_DATE('2023-08-01 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), 'male', 'uihhiu', '37.7749295', '-122.4194155', 'undefined', 'undefined');

-- ----------------------------
-- Table structure for WRITTENBY
-- ----------------------------
DROP TABLE "PROJECT"."WRITTENBY";
CREATE TABLE "PROJECT"."WRITTENBY" (
  "ISBN" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "NAME" VARCHAR2(100 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of WRITTENBY
-- ----------------------------
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('133-234-1837', 'Abrar Rahman Abir');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('133-234-1837', 'Ananya Shahrin Promi');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('978-984-94751-1-8', 'Ananya Shahrin Promi');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780193161283', 'John Harper');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780195083514', 'Odie B. Faulk');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780198229902', 'W. E. Mosse');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780198277613', 'Martin F. Parnell');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780231105590', 'Mark A. S. McMenamin');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780253207524', 'Michael A. Fishbane');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780253207524', 'Michael Fishbane');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780275945145', 'E. Rae Harcum');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780275945145', 'Ellen F. Rosen');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780275958862', 'George W. Liebmann');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780275960827', 'Kevin L. Lyles');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780275961039', 'Arthur R. Jensen');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780333961278', 'Andrew Kakabadse');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780333961278', 'Nada Kakabadse');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780415104388', 'Charles Russ');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780415130387', 'Murray C. Kemp');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780415162708', 'Gearoid Otuathail');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780415162708', 'Paul Routledge');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780415162708', 'Simon Dalby');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780465078059', 'Jeremy Iggers');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780520223943', 'Immanuel Etkes');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780521623117', 'Martti Koskenniemi');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780671524890', 'Samuel C. Heilman');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780773508422', 'James M. Stayer');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780773516052', 'Frank P. Harvey');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780801428029', 'Andrei S. Markovits');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780801428029', 'Simon Reich');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780801435133', 'Benjamin J. Cohen');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780805816563', 'Thomas D. Wickens');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780807005385', 'Daniel Berrigan');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780807806982', 'Henry Lyttleton Savage');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780807863459', 'James Edward Miller');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780811200981', 'Thomas Merton');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780813116273', 'Colin S. Gray');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780813315355', 'Gerard Braunthal');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780813372617', 'Kent H. Butts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780813372617', 'Paul R. Thomas');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780813383590', 'Dirk Verheyen');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780813389868', 'George F. Rengert');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780817302252', 'Martha C. Searcy');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780822304142', 'E. Brooks Holifield');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9780873952842', 'José Hernández');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781563240751', 'Ze''ev Wolfson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490762', 'Lou Treleaven');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490779', 'Katie Dale');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490786', 'Amanda Brandon');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490793', 'Clare Helen Welsh');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490809', 'Jenny Moore');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490816', 'Elizabeth Dale');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490823', 'Amanda Brandon');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781728490830', 'Jenny Jinks');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503309', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503316', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503323', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503330', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503347', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503354', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503361', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503378', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503385', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9781737503392', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9789768125408', 'George L. Beckford');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050315', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050322', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050346', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050353', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050377', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050407', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050414', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050452', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050483', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050513', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050520', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050544', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050568', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050575', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050605', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050674', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050711', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050742', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050759', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050797', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050803', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050827', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050858', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050889', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798889050896', 'Daffodil Jackson');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874203', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874210', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874227', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874234', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874241', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874258', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874265', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874272', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874289', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('9798986874296', 'Amy Ingalls, Pryor Rayburn, and Jennie Roberts');
INSERT INTO "PROJECT"."WRITTENBY" VALUES ('984-70096-0357-0', 'Muhammed Zafar Iqbal');

-- ----------------------------
-- Function structure for CREATE_OFFER
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "PROJECT"."CREATE_OFFER" AS
BEGIN 
	INSERT INTO OFFER VALUES (GET_NEXT_OFFERID, MSG, PHOTO, GET_EMAIL_FROM_BOOKFRIENDID(ID), ISBN, SYSTIMESTAMP, 'offered');
	MSG2 := 'OFFER CREATED';
EXCEPTION
	WHEN DUP_VAL_ON_INDEX THEN 
		MSG2 := 'ERROR';
	WHEN OTHERS THEN 
		MSG2 := 'UNKNOWN ERROR';
END;

-- DECLARE
-- 	MSG VARCHAR2(100);
-- BEGIN
-- 	CREATE_OFFER('CFV', 'REV', 1002, '978-984-94751-1-8', MSG);
-- 	DBMS_OUTPUT.PUT_LINE(MSG);
-- END;
/

-- ----------------------------
-- Function structure for GET_EMAIL_FROM_BOOKFRIENDID
-- ----------------------------
CREATE OR REPLACE
FUNCTION "PROJECT"."GET_EMAIL_FROM_BOOKFRIENDID" AS
BEGIN 
	SELECT EMAILID INTO EMAIL FROM BOOKFRIEND WHERE BOOKFRIENDID=ID;
	RETURN EMAIL;
END;

-- CREATE OR REPLACE PROCEDURE CREATE_OFFER(MSG IN VARCHAR2, PHOTO IN VARCHAR2, EMAIL, )
/

-- ----------------------------
-- Function structure for GET_NEXT_OFFERID
-- ----------------------------
CREATE OR REPLACE
FUNCTION "PROJECT"."GET_NEXT_OFFERID" AS
BEGIN 
	SELECT COUNT(OFFERID) INTO ID FROM OFFER;
	ID := ID + 1;
	RETURN ID;
END;
/

-- ----------------------------
-- Function structure for NEW_ADDRESS
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "PROJECT"."NEW_ADDRESS" AS
BEGIN
	INSERT INTO ADDRESS VALUES (LATITUDE, LONGITUDE);
	MSG := 'DONE';
EXCEPTION
	WHEN DUP_VAL_ON_INDEX THEN 
		MSG := 'DUPLICATE';
	WHEN NO_DATA_FOUND THEN 
		MSG := 'NO DATA';
	WHEN TOO_MANY_ROWS THEN 
		MSG := 'MANY ROWS';
	WHEN INVALID_NUMBER THEN 
		MSG := 'CONVERSION FAILED';
	WHEN VALUE_ERROR THEN 
		MSG := 'VALUE ERROR';
	WHEN ZERO_DIVIDE THEN 
		MSG := '0 DEVIDE';
	WHEN OTHERS THEN 
		MSG := 'UNKNOWN ERROR';
END;
/

-- ----------------------------
-- Function structure for SIGNUP
-- ----------------------------
CREATE OR REPLACE
PROCEDURE "PROJECT"."SIGNUP" AS
BEGIN
	NEW_ADDRESS(LATITUDE, LONGITUDE, M2);
	INSERT INTO USERMAN VALUES(EMAIL, PASSWORD, FIRSTNAME, DATEOFBIRTH, GENDER, LASTNAME, LATITUDE, LONGITUDE, CONTACTNO1, CONTACTNO2);
	MSG := 'SUCCESSFUL';
EXCEPTION
	WHEN DUP_VAL_ON_INDEX THEN 
		MSG := 'DUPLICATE';
	WHEN NO_DATA_FOUND THEN 
		MSG := 'NO DATA';
	WHEN TOO_MANY_ROWS THEN 
		MSG := 'MANY ROWS';
	WHEN INVALID_NUMBER THEN 
		MSG := 'CONVERSION FAILED';
	WHEN VALUE_ERROR THEN 
		MSG := 'VALUE ERROR';
	WHEN ZERO_DIVIDE THEN 
		MSG := '0 DEVIDE';
	WHEN OTHERS THEN 
		MSG := 'UNKNOWN ERROR';
END;
/

-- ----------------------------
-- Primary Key structure for table ADDRESS
-- ----------------------------
ALTER TABLE "PROJECT"."ADDRESS" ADD CONSTRAINT "SYS_C008085" PRIMARY KEY ("LATITUDE", "LONGITUDE");

-- ----------------------------
-- Checks structure for table ADDRESS
-- ----------------------------
ALTER TABLE "PROJECT"."ADDRESS" ADD CONSTRAINT "SYS_C008083" CHECK ("LATITUDE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."ADDRESS" ADD CONSTRAINT "SYS_C008084" CHECK ("LONGITUDE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table AUTHOR
-- ----------------------------
ALTER TABLE "PROJECT"."AUTHOR" ADD CONSTRAINT "SYS_C008082" PRIMARY KEY ("NAME");

-- ----------------------------
-- Checks structure for table AUTHOR
-- ----------------------------
ALTER TABLE "PROJECT"."AUTHOR" ADD CONSTRAINT "SYS_C008081" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table BOOK
-- ----------------------------
ALTER TABLE "PROJECT"."BOOK" ADD CONSTRAINT "SYS_C008116" PRIMARY KEY ("ISBN");

-- ----------------------------
-- Checks structure for table BOOK
-- ----------------------------
ALTER TABLE "PROJECT"."BOOK" ADD CONSTRAINT "SYS_C008112" CHECK ("ISBN" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."BOOK" ADD CONSTRAINT "SYS_C008113" CHECK ("TITLE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."BOOK" ADD CONSTRAINT "SYS_C008114" CHECK ("LANGUAGE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table BOOKFRIEND
-- ----------------------------
ALTER TABLE "PROJECT"."BOOKFRIEND" ADD CONSTRAINT "SYS_C008159" PRIMARY KEY ("EMAILID");

-- ----------------------------
-- Uniques structure for table BOOKFRIEND
-- ----------------------------
ALTER TABLE "PROJECT"."BOOKFRIEND" ADD CONSTRAINT "SYS_C008160" UNIQUE ("BOOKFRIENDID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table BOOKFRIEND
-- ----------------------------
ALTER TABLE "PROJECT"."BOOKFRIEND" ADD CONSTRAINT "SYS_C008157" CHECK ("BOOKFRIENDID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."BOOKFRIEND" ADD CONSTRAINT "SYS_C008158" CHECK ("EMAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table DELIVARYMAN
-- ----------------------------
ALTER TABLE "PROJECT"."DELIVARYMAN" ADD CONSTRAINT "SYS_C008154" PRIMARY KEY ("EMAILID");

-- ----------------------------
-- Uniques structure for table DELIVARYMAN
-- ----------------------------
ALTER TABLE "PROJECT"."DELIVARYMAN" ADD CONSTRAINT "SYS_C008155" UNIQUE ("DELIVARYMANID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table DELIVARYMAN
-- ----------------------------
ALTER TABLE "PROJECT"."DELIVARYMAN" ADD CONSTRAINT "SYS_C008152" CHECK ("DELIVARYMANID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."DELIVARYMAN" ADD CONSTRAINT "SYS_C008153" CHECK ("EMAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table EXCHANGEOFFER
-- ----------------------------
ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008167" PRIMARY KEY ("EXCHANGEID");

-- ----------------------------
-- Checks structure for table EXCHANGEOFFER
-- ----------------------------
ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008166" CHECK ("EXCHANGEID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table NOTIFICATION1
-- ----------------------------
ALTER TABLE "PROJECT"."NOTIFICATION1" ADD CONSTRAINT "SYS_C008203" PRIMARY KEY ("NOTIFICATIONID");

-- ----------------------------
-- Checks structure for table NOTIFICATION1
-- ----------------------------
ALTER TABLE "PROJECT"."NOTIFICATION1" ADD CONSTRAINT "SYS_C008200" CHECK ("NOTIFICATIONID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."NOTIFICATION1" ADD CONSTRAINT "SYS_C008201" CHECK ("EMAILWHOREQUESTED" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."NOTIFICATION1" ADD CONSTRAINT "SYS_C008202" CHECK ("OFFERID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table OFFER
-- ----------------------------
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008174" PRIMARY KEY ("OFFERID");

-- ----------------------------
-- Checks structure for table OFFER
-- ----------------------------
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008170" CHECK ("OFFERID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008171" CHECK ("BOOKCONDITIONPHOTO" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008172" CHECK ("USEREMAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008173" CHECK ("ISBN" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table PUBLISHER
-- ----------------------------
ALTER TABLE "PROJECT"."PUBLISHER" ADD CONSTRAINT "SYS_C008087" PRIMARY KEY ("NAME");

-- ----------------------------
-- Checks structure for table PUBLISHER
-- ----------------------------
ALTER TABLE "PROJECT"."PUBLISHER" ADD CONSTRAINT "SYS_C008086" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table REVIEW
-- ----------------------------
ALTER TABLE "PROJECT"."REVIEW" ADD CONSTRAINT "SYS_C008182" PRIMARY KEY ("REVIEWID");

-- ----------------------------
-- Checks structure for table REVIEW
-- ----------------------------
ALTER TABLE "PROJECT"."REVIEW" ADD CONSTRAINT "SYS_C008178" CHECK ("DATEOFREVIEW" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."REVIEW" ADD CONSTRAINT "SYS_C008179" CHECK ("RATEUS" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."REVIEW" ADD CONSTRAINT "SYS_C008180" CHECK ("REVIEWID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."REVIEW" ADD CONSTRAINT "SYS_C008181" CHECK ("EMAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table USERMAN
-- ----------------------------
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008150" PRIMARY KEY ("EMAILID");

-- ----------------------------
-- Checks structure for table USERMAN
-- ----------------------------
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008141" CHECK ("EMAILID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008142" CHECK ("PASSWORD" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008144" CHECK ("FIRSTNAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008145" CHECK ("DATEOFBIRTH" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008146" CHECK ("GENDER" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008147" CHECK ("LASTNAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008148" CHECK ("LATITUDE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008149" CHECK ("LONGITUDE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table WRITTENBY
-- ----------------------------
ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008138" PRIMARY KEY ("ISBN", "NAME");

-- ----------------------------
-- Checks structure for table WRITTENBY
-- ----------------------------
ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008136" CHECK ("ISBN" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008137" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table BOOK
-- ----------------------------
ALTER TABLE "PROJECT"."BOOK" ADD CONSTRAINT "SYS_C008117" FOREIGN KEY ("PUBLISHERNAME") REFERENCES "PROJECT"."PUBLISHER" ("NAME") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table BOOKFRIEND
-- ----------------------------
ALTER TABLE "PROJECT"."BOOKFRIEND" ADD CONSTRAINT "SYS_C008161" FOREIGN KEY ("EMAILID") REFERENCES "PROJECT"."USERMAN" ("EMAILID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table DELIVARYMAN
-- ----------------------------
ALTER TABLE "PROJECT"."DELIVARYMAN" ADD CONSTRAINT "SYS_C008156" FOREIGN KEY ("EMAILID") REFERENCES "PROJECT"."USERMAN" ("EMAILID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table EXCHANGEOFFER
-- ----------------------------
ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008168" FOREIGN KEY ("DELIVARYMANEMAILID") REFERENCES "PROJECT"."DELIVARYMAN" ("EMAILID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table NOTIFICATION1
-- ----------------------------
ALTER TABLE "PROJECT"."NOTIFICATION1" ADD CONSTRAINT "SYS_C008204" FOREIGN KEY ("OFFERID") REFERENCES "PROJECT"."OFFER" ("OFFERID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table OFFER
-- ----------------------------
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008175" FOREIGN KEY ("USEREMAILID") REFERENCES "PROJECT"."BOOKFRIEND" ("EMAILID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."OFFER" ADD CONSTRAINT "SYS_C008176" FOREIGN KEY ("ISBN") REFERENCES "PROJECT"."BOOK" ("ISBN") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table REVIEW
-- ----------------------------
ALTER TABLE "PROJECT"."REVIEW" ADD CONSTRAINT "SYS_C008183" FOREIGN KEY ("EMAILID") REFERENCES "PROJECT"."USERMAN" ("EMAILID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table USERMAN
-- ----------------------------
ALTER TABLE "PROJECT"."USERMAN" ADD CONSTRAINT "SYS_C008151" FOREIGN KEY ("LATITUDE", "LONGITUDE") REFERENCES "PROJECT"."ADDRESS" ("LATITUDE", "LONGITUDE") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table WRITTENBY
-- ----------------------------
ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008139" FOREIGN KEY ("ISBN") REFERENCES "PROJECT"."BOOK" ("ISBN") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008140" FOREIGN KEY ("NAME") REFERENCES "PROJECT"."AUTHOR" ("NAME") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
