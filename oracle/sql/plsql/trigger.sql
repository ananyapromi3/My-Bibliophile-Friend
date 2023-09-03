CREATE OR REPLACE TRIGGER EXCHANGE_NOTIFICATION AFTER
    INSERT ON EXCHANGEOFFER FOR EACH ROW
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
        ||' wants to exchage '
        ||BOOK2
        ||' with your '
        ||BOOK1,
        SYSDATE,
        EMAIL1,
        'UNREAD'
    );
    INSERT INTO NOTI VALUES (
        NAME1
        ||' wants to exchage '
        ||BOOK1
        ||' with your '
        ||BOOK2,
        SYSDATE,
        EMAIL2,
        'UNREAD'
    );
END;
CREATE OR REPLACE TRIGGER OFFER_STATUS_CHANGE AFTER INSERT ON NOTIFICATION1 FOR EACH ROW DECLARE MS VARCHAR2(
    100
);
BEGIN
    ACCEPT_OFFER(:NEW.OFFERID, MS);
END;
CREATE OR REPLACE TRIGGER OFFER_STATUS_CHANGE AFTER INSERT ON NOTIFICATION1 FOR EACH ROW DECLARE EMAIL1 VARCHAR2(
    100
);
NAME2 VARCHAR2(100);
BOOK1 VARCHAR2(500);
BEGIN
    EMAIL1 := GET_EMAIL_FROM_OFFERID(:NEW.OFFERID);
    NAME2 := GET_NAME_FROM_EMAILID(:NEW.EMAILWHOREQUESTED);
    BOOK1 := GET_BOOK_NAME_FROM_OFFERID(:NEW.OFFERID);
    INSERT INTO NOTI VALUES (
        NAME2
        ||' wants to accept your offer of exchanging'
        ||BOOK1,
        SYSDATE,
        EMAIL1,
        'UNREAD'
    );
END;
CREATE OR REPLACE TRIGGER CREATE_NOTI_FOR_DELIVERY_ACC AFTER INSERT ON DELIVARYOFFER FOR EACH ROW DECLARE EMAIL1 VARCHAR2(
    100
);
NAME1 VARCHAR2(500);
FEE NUMBER;
BEGIN
    FEE := ROUND(:NEW.FEE/2, 2);
    EMAIL1 := GET_EMAIL_FROM_OFFERID(:NEW.OFFERID);
    NAME1 := GET_NAME_FROM_EMAILID(GET_EMAIL_FROM_DELIVARYMANID(:NEW.DELIVARYMANID));
    INSERT INTO NOTI VALUES (
        'Delivery man '
        ||NAME1
        ||' has accepted your order ##BIB'
        ||:NEW.EXCHANGEID
        ||'. Delivery charge: '
        ||FEE
        ||'TK',
        SYSDATE,
        EMAIL1,
        'UNREAD'
    );
END;