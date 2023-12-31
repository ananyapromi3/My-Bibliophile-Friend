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

 Date: 10/09/2023 23:45:27
*/


-- ----------------------------
-- Table structure for EXCHANGEOFFER
-- ----------------------------
DROP TABLE "PROJECT"."EXCHANGEOFFER";

CREATE TABLE "PROJECT"."EXCHANGEOFFER" (
	"EXCHANGEID" NUMBER(10, 0) VISIBLE NOT NULL,
	"OFFERID1" NUMBER(10, 0) VISIBLE,
	"OFFERID2" NUMBER(10, 0) VISIBLE,
	"STATUS" VARCHAR2(100 BYTE) VISIBLE
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
	INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

-- ----------------------------
-- Primary Key structure for table EXCHANGEOFFER
-- ----------------------------
ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008228" PRIMARY KEY ("EXCHANGEID");

-- ----------------------------
-- Checks structure for table EXCHANGEOFFER
-- ----------------------------
ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008227" CHECK ("EXCHANGEID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table EXCHANGEOFFER
-- ----------------------------
CREATE TRIGGER "PROJECT"."EXCHANGE_NOTIFICATION" AFTER
	INSERT ON "PROJECT"."EXCHANGEOFFER" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW
DECLARE
	EMAIL1 VARCHAR2(100);
	EMAIL2 VARCHAR2(100);
	NAME1  VARCHAR2(100);
	NAME2  VARCHAR2(100);
	BOOK1  VARCHAR2(500);
	BOOK2  VARCHAR2(500);
BEGIN
	EMAIL1 := GET_EMAIL_FROM_OFFERID(:NEW.OFFERID1);
	EMAIL2 := GET_EMAIL_FROM_OFFERID(:NEW.OFFERID2);
	BOOK1 := GET_BOOK_NAME_FROM_OFFERID(:NEW.OFFERID1);
	BOOK2 := GET_BOOK_NAME_FROM_OFFERID(:NEW.OFFERID2);
	NAME1 := GET_NAME_FROM_EMAILID(EMAIL1);
	NAME2 := GET_NAME_FROM_EMAILID(EMAIL2);
	INSERT INTO NOTI VALUES (
		NAME2
		||' will exchage '
		||BOOK2
		||' with your '
		||BOOK1
		||'. Order ID: #BIB'
		||:NEW.EXCHANGEID,
		SYSDATE,
		EMAIL1,
		'UNREAD',
		GET_NEXT_NOTIID()
	);
	INSERT INTO NOTI VALUES (
		NAME1
		||' will exchage '
		||BOOK1
		||' with your '
		||BOOK2
		||'. Order ID: #BIB'
		||:NEW.EXCHANGEID,
		SYSDATE,
		EMAIL2,
		'UNREAD',
		GET_NEXT_NOTIID()
	);
END;
/

-- ----------------------------
-- Foreign Keys structure for table EXCHANGEOFFER
-- ----------------------------
ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008229" FOREIGN KEY ("OFFERID1") REFERENCES "PROJECT"."OFFER" ("OFFERID") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

ALTER TABLE "PROJECT"."EXCHANGEOFFER" ADD CONSTRAINT "SYS_C008230" FOREIGN KEY ("OFFERID2") REFERENCES "PROJECT"."OFFER" ("OFFERID") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;