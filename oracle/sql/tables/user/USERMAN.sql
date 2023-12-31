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

 Date: 10/09/2023 23:47:15
*/


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
  "LATITUDE" NUMBER(10, 7) VISIBLE NOT NULL,
  "LONGITUDE" NUMBER(10, 7) VISIBLE NOT NULL,
  "CONTACTNO1" VARCHAR2(20 BYTE) VISIBLE,
  "CONTACTNO2" VARCHAR2(20 BYTE) VISIBLE
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

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