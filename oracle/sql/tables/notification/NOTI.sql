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

 Date: 10/09/2023 23:45:43
*/


-- ----------------------------
-- Table structure for NOTI
-- ----------------------------
DROP TABLE "PROJECT"."NOTI";

CREATE TABLE "PROJECT"."NOTI" (
  "MSG" VARCHAR2(500 BYTE) VISIBLE,
  "TIME" DATE VISIBLE,
  "EMAILID" VARCHAR2(100 BYTE) VISIBLE,
  "STATUS" VARCHAR2(50 BYTE) VISIBLE,
  "NOTIID" NUMBER VISIBLE NOT NULL
) LOGGING NOCOMPRESS PCTFREE 10 INITRANS 1 STORAGE (
  INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645 BUFFER_POOL DEFAULT
) PARALLEL 1 NOCACHE DISABLE ROW MOVEMENT;

-- ----------------------------
-- Primary Key structure for table NOTI
-- ----------------------------
ALTER TABLE "PROJECT"."NOTI" ADD CONSTRAINT "SYS_C008290" PRIMARY KEY ("NOTIID");

-- ----------------------------
-- Foreign Keys structure for table NOTI
-- ----------------------------
ALTER TABLE "PROJECT"."NOTI" ADD CONSTRAINT "FK_NOTI_EMAIL" FOREIGN KEY ("EMAILID") REFERENCES "PROJECT"."USERMAN" ("EMAILID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;