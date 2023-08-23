CREATE OR REPLACE PROCEDURE ACCEPT_OFFER (OFFID IN NUMBER, MSG OUT VARCHAR2) IS
	C NUMBER;
	EMAIL VARCHAR2(100);
	TEMP VARCHAR2(20);
BEGIN
	SELECT STATUS INTO TEMP FROM OFFER
	WHERE OFFERID = OFFID;
	IF TEMP = 'offered' THEN
		UPDATE OFFER
		SET STATUS = 'pending'
		WHERE OFFERID = OFFID;
		MSG := 'CREATED';
	ELSE 
		MSG := 'FAILED';
	END IF;
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


CREATE OR REPLACE PROCEDURE ACCEPT_OFFER_FINALLY (OFFID IN NUMBER, MSG OUT VARCHAR2) IS
	C NUMBER;
	EMAIL VARCHAR2(100);
	TEMP VARCHAR2(20);
BEGIN
	SELECT STATUS INTO TEMP FROM OFFER
	WHERE OFFERID = OFFID;
	IF TEMP <> 'accepted' THEN
		UPDATE OFFER
		SET STATUS = 'accepted'
		WHERE OFFERID = OFFID;
		MSG := 'CREATED';
	ELSE 
		MSG := 'FAILED';
	END IF;
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


CREATE OR REPLACE PROCEDURE ADD_TO_BOOKFRIEND(EMAIL IN VARCHAR2, MSG OUT VARCHAR2) IS
BEGIN
	INSERT INTO BOOKFRIEND VALUES(GET_NEXT_ID_BOOKFRIEND, EMAIL);
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


CREATE OR REPLACE FUNCTION CALCULATE_DISTANCE(
  lat1 NUMBER,
  lon1 NUMBER,
  lat2 NUMBER,
  lon2 NUMBER
) RETURN NUMBER IS
  R NUMBER;
  dLat NUMBER ;
  dLon NUMBER ;
  a NUMBER;
  c NUMBER;
  distance NUMBER ;
BEGIN
	R := 6371; -- Earth's radius in kilometers
  dLat := (lat2 - lat1) * 3.14159265358979323846 / 180;
  dLon := (lon2 - lon1) * 3.14159265358979323846 / 180;
  a := SIN(dLat / 2) * SIN(dLat / 2) +
              COS(lat1 * 3.14159265358979323846 / 180) *
              COS(lat2 * 3.14159265358979323846 / 180) *
              SIN(dLon / 2) * SIN(dLon / 2);
  c := 2 * ATAN2(SQRT(a), SQRT(1 - a));
  distance := R * c;
  RETURN distance;
END;


CREATE OR REPLACE PROCEDURE CREATE_EXCHANGE_OFFER(OFFERID1 IN NUMBER, OFFERID2 IN NUMBER, MSG OUT VARCHAR2) IS
BEGIN
	INSERT INTO EXCHANGEOFFER VALUES(GET_NEXT_EXCHANGEID, OFFERID1, OFFERID2);
	MSG := 'SUCCESS';
EXCEPTION
	WHEN DUP_VAL_ON_INDEX THEN 
		MSG := 'ERROR';
	WHEN OTHERS THEN 
		MSG := 'UNKNOWN ERROR';
END;


CREATE OR REPLACE PROCEDURE CREATE_NOTIFICATION1 (USERID IN NUMBER, OFFERID IN NUMBER, MSG OUT VARCHAR2) IS
	C NUMBER;
	EMAIL VARCHAR2(100);
	STAT VARCHAR(20);
BEGIN
	C := GET_NEXT_ID_NOTIFICATION1;
	STAT := 'show';
	EMAIL := GET_EMAIL_FROM_BOOKFRIENDID(USERID);
	INSERT INTO NOTIFICATION1 VALUES (C, EMAIL, OFFERID, STAT);
	MSG := 'NOTIFICATION1 SENT';
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


CREATE OR REPLACE PROCEDURE CREATE_NOTIFICATION2 (USERID IN NUMBER, OFFERID IN NUMBER, MSG OUT VARCHAR2) IS
	C NUMBER;
	EMAIL VARCHAR2(100);
BEGIN
	C := GET_NEXT_ID_NOTIFICATION2;
	EMAIL := GET_EMAIL_FROM_BOOKFRIENDID(USERID);
	INSERT INTO NOTIFICATION2 VALUES (C, EMAIL, OFFERID, 'unread');
	MSG := 'NOTIFICATION2 SENT';
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


CREATE OR REPLACE PROCEDURE CREATE_OFFER(MSG IN VARCHAR2, PHOTO IN VARCHAR2, ID IN NUMBER, ISBN IN VARCHAR2, MSG2 OUT VARCHAR2) IS
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


CREATE OR REPLACE PROCEDURE DISABLE_NOTIFICATION (ID IN NUMBER, MSG OUT VARCHAR2) IS
BEGIN
	UPDATE NOTIFICATION1 
	SET STATUS = 'done'
	WHERE NOTIFICATIONID = ID;
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



CREATE OR REPLACE FUNCTION GET_EMAIL_FROM_BOOKFRIENDID(ID IN NUMBER)
RETURN VARCHAR2 IS 
	EMAIL VARCHAR2(100);
BEGIN 
	SELECT EMAILID INTO EMAIL FROM BOOKFRIEND WHERE BOOKFRIENDID=ID;
	RETURN EMAIL;
END;

-- CREATE OR REPLACE PROCEDURE CREATE_OFFER(MSG IN VARCHAR2, PHOTO IN VARCHAR2, EMAIL, )


CREATE OR REPLACE FUNCTION GET_LATITUDE_FROM_EMAIL(EMAIL IN VARCHAR2) 
RETURN NUMBER IS
	LAT NUMBER;
BEGIN 
	SELECT LATITUDE INTO LAT FROM USERMAN WHERE EMAILID = EMAIL;
	RETURN LAT;
END;



CREATE OR REPLACE FUNCTION GET_LONGITUDE_FROM_EMAIL(EMAIL IN VARCHAR2) 
RETURN NUMBER IS
	LON NUMBER;
BEGIN 
	SELECT LONGITUDE INTO LON FROM USERMAN WHERE EMAILID = EMAIL;
	RETURN LON;
END;



CREATE OR REPLACE FUNCTION GET_NAME_FROM_EMAILID(EMAIL IN VARCHAR2)
RETURN VARCHAR2 IS 
	NAME VARCHAR2(200);
BEGIN
	SELECT FIRSTNAME || ' ' || LASTNAME INTO NAME FROM USERMAN 
	WHERE EMAILID = EMAIL;
	RETURN NAME;
END;



CREATE OR REPLACE FUNCTION GET_NEXT_EXCHANGEID
RETURN NUMBER IS 
	ID NUMBER;
BEGIN 
	SELECT COUNT(EXCHANGEID) INTO ID FROM EXCHANGEOFFER;
	ID := ID + 1;
	RETURN ID;
END;



CREATE OR REPLACE FUNCTION GET_NEXT_ID_BOOKFRIEND
RETURN NUMBER IS 
	C NUMBER;
	MSG VARCHAR2(50);
BEGIN
	SELECT COUNT(BOOKFRIENDID) INTO C FROM BOOKFRIEND;
	C := C + 1001;
	RETURN C;
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



CREATE OR REPLACE FUNCTION GET_NEXT_ID_NOTIFICATION1
RETURN NUMBER IS 
	C NUMBER;
	MSG VARCHAR2(50);
BEGIN
	SELECT COUNT(NOTIFICATIONID) INTO C FROM NOTIFICATION1;
	C := C + 1;
	RETURN C;
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



CREATE OR REPLACE FUNCTION GET_NEXT_ID_NOTIFICATION2
RETURN NUMBER IS 
	C NUMBER;
	MSG VARCHAR2(50);
BEGIN
	SELECT COUNT(NOTIFICATIONID) INTO C FROM NOTIFICATION2;
	C := C + 1;
	RETURN C;
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



CREATE OR REPLACE FUNCTION GET_NEXT_OFFERID
RETURN NUMBER IS 
	ID NUMBER;
BEGIN 
	SELECT COUNT(OFFERID) INTO ID FROM OFFER;
	ID := ID + 1;
	RETURN ID;
END;



CREATE OR REPLACE PROCEDURE NEW_ADDRESS(LATITUDE IN NUMBER, LONGITUDE IN NUMBER, MSG OUT VARCHAR2) IS 
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



CREATE OR REPLACE PROCEDURE SIGNUP(EMAIL IN VARCHAR2, PASSWORD IN VARCHAR2, FIRSTNAME IN VARCHAR2, DATEOFBIRTH IN DATE, GENDER IN VARCHAR2, LASTNAME IN VARCHAR2, LATITUDE IN NUMBER, LONGITUDE IN NUMBER, CONTACTNO1 IN VARCHAR2, CONTACTNO2 IN VARCHAR2, MSG OUT VARCHAR2) IS
	M2 VARCHAR2(50);
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