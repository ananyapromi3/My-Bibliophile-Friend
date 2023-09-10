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

 Date: 10/09/2023 23:46:50
*/


-- ----------------------------
-- Table structure for PUBLISHER
-- ----------------------------
DROP TABLE "PROJECT"."PUBLISHER";

CREATE TABLE "PROJECT"."PUBLISHER" (
  "NAME" VARCHAR2(100 BYTE) VISIBLE NOT NULL,
  "ADDRESS" VARCHAR2(200 BYTE) VISIBLE
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

-- ----------------------------
-- Primary Key structure for table PUBLISHER
-- ----------------------------
ALTER TABLE "PROJECT"."PUBLISHER" ADD CONSTRAINT "SYS_C008087" PRIMARY KEY ("NAME");

-- ----------------------------
-- Checks structure for table PUBLISHER
-- ----------------------------
ALTER TABLE "PROJECT"."PUBLISHER" ADD CONSTRAINT "SYS_C008086" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;