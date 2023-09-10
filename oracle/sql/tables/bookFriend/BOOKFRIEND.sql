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

 Date: 10/09/2023 23:43:23
*/


-- ----------------------------
-- Table structure for BOOKFRIEND
-- ----------------------------
DROP TABLE "PROJECT"."BOOKFRIEND";

CREATE TABLE "PROJECT"."BOOKFRIEND" (
  "BOOKFRIENDID" NUMBER(10, 0) VISIBLE NOT NULL,
  "EMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

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
-- Foreign Keys structure for table BOOKFRIEND
-- ----------------------------
ALTER TABLE "PROJECT"."BOOKFRIEND" ADD CONSTRAINT "SYS_C008161" FOREIGN KEY ("EMAILID") REFERENCES "PROJECT"."USERMAN" ("EMAILID") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;