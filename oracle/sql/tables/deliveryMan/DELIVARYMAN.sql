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

 Date: 10/09/2023 23:43:38
*/


-- ----------------------------
-- Table structure for DELIVARYMAN
-- ----------------------------
DROP TABLE "PROJECT"."DELIVARYMAN";

CREATE TABLE "PROJECT"."DELIVARYMAN" (
  "DELIVARYMANID" NUMBER(10, 0) VISIBLE NOT NULL,
  "EMAILID" VARCHAR2(50 BYTE) VISIBLE NOT NULL
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

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
-- Foreign Keys structure for table DELIVARYMAN
-- ----------------------------
ALTER TABLE "PROJECT"."DELIVARYMAN" ADD CONSTRAINT "SYS_C008156" FOREIGN KEY ("EMAILID") REFERENCES "PROJECT"."USERMAN" ("EMAILID") ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;