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

 Date: 10/09/2023 23:47:45
*/


-- ----------------------------
-- Table structure for WRITTENBY
-- ----------------------------
DROP TABLE "PROJECT"."WRITTENBY";

CREATE TABLE "PROJECT"."WRITTENBY" (
  "ISBN" VARCHAR2(50 BYTE) VISIBLE NOT NULL,
  "NAME" VARCHAR2(100 BYTE) VISIBLE NOT NULL
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

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
-- Foreign Keys structure for table WRITTENBY
-- ----------------------------
ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008139" FOREIGN KEY ("ISBN") REFERENCES "PROJECT"."BOOK" ("ISBN") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

ALTER TABLE "PROJECT"."WRITTENBY" ADD CONSTRAINT "SYS_C008140" FOREIGN KEY ("NAME") REFERENCES "PROJECT"."AUTHOR" ("NAME") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;