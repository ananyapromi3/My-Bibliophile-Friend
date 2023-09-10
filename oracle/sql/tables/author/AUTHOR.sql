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

 Date: 10/09/2023 23:29:46
*/


-- ----------------------------
-- Table structure for AUTHOR
-- ----------------------------
DROP TABLE "PROJECT"."AUTHOR";

CREATE TABLE "PROJECT"."AUTHOR" (
  "NAME" VARCHAR2(100 BYTE) VISIBLE NOT NULL,
  "BORNON" NUMBER(4, 0) VISIBLE,
  "DIEDON" NUMBER(4, 0) VISIBLE,
  "TYPE" VARCHAR2(50 BYTE) VISIBLE,
  "NATIONALITY" VARCHAR2(20 BYTE) VISIBLE
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

-- ----------------------------
-- Primary Key structure for table AUTHOR
-- ----------------------------
ALTER TABLE "PROJECT"."AUTHOR" ADD CONSTRAINT "SYS_C008082" PRIMARY KEY ("NAME");

-- ----------------------------
-- Checks structure for table AUTHOR
-- ----------------------------
ALTER TABLE "PROJECT"."AUTHOR" ADD CONSTRAINT "SYS_C008081" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;