SELECT
    *
FROM
    AUTHOR    A
WHERE
    A.NAME IN (
        SELECT
            W.NAME
        FROM
            WRITTENBY W
        WHERE
            W.ISBN=:ISBN
    );

SELECT
    (
        SELECT
            BOOKFRIENDID
        FROM
            BOOKFRIEND B
        WHERE
            U.EMAILID=B.EMAILID
    ) ID
FROM
    USERMAN U
WHERE
    U.EMAILID LIKE :EMAIL
    AND UTL_RAW.CAST_TO_VARCHAR2(DBMS_CRYPTO.DECRYPT(U.PASSWORD, 4353, UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend'))) = :PASSWORD;

UPDATE NOTI
SET
    STATUS='READ'
WHERE
    EMAILID=GET_EMAIL_FROM_BOOKFRIENDID(:ID);

SELECT
    N.NOTIFICATIONID
FROM
    NOTIFICATION1 N
    JOIN OFFER O
    ON N.OFFERID=O.OFFERID
WHERE
    O.USEREMAILID = GET_EMAIL_FROM_BOOKFRIENDID(:ID)
    AND N.STATUS='show';

SELECT
    EMAILID,
    LATITUDE,
    LONGITUDE,
    UTL_RAW.CAST_TO_VARCHAR2(DBMS_CRYPTO.DECRYPT(PASSWORD, 4353, UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend'))) PASS,
    FIRSTNAME,
    LASTNAME,
    DATEOFBIRTH,
    GENDER,
    CONTACTNO1,
    CONTACTNO2
FROM
    USERMAN
WHERE
    EMAILID=GET_EMAIL_FROM_BOOKFRIENDID(:ID);

UPDATE USERMAN
SET
    PASSWORD = DBMS_CRYPTO.ENCRYPT(
        UTL_RAW.CAST_TO_RAW(:PASSWORD),
        4353,
        UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend')
    ),
    FIRSTNAME = :FIRSTNAME,
    LASTNAME = :LASTNAME,
    LONGITUDE = :LONGITUDE,
    LATITUDE = :LATITUDE,
    CONTACTNO1 = :PHN1,
    CONTACTNO2 = :PHN2
WHERE
    EMAILID = :EMAIL;

SELECT
    *
FROM
    AUTHOR    A
WHERE
    A.NAME IN (
        SELECT
            W.NAME
        FROM
            WRITTENBY W
        WHERE
            W.ISBN=:ISBN
    );

SELECT
    *
FROM
    AUTHOR    A
WHERE
    A.NAME IN (
        SELECT
            W.NAME
        FROM
            WRITTENBY W
        WHERE
            W.ISBN=:ISBN
    );

SELECT
    D.EXCHANGEID,
    D.FEE,
    D.STATUS,
    GET_NAME_FROM_EMAILID(O.USEREMAILID)                        NAME1,
    GET_NAME_FROM_EMAILID(U.USEREMAILID)                        NAME2,
    GET_CONTACT_FROM_EMAIL(O.USEREMAILID)                       PHN1,
    GET_CONTACT_FROM_EMAIL(U.USEREMAILID)                       PHN2,
    GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(O.OFFERID)) LATI1,
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(O.OFFERID)) LONGI1,
    GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(U.OFFERID)) LATI2,
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(U.OFFERID)) LONGI2
FROM
    OFFER         O
    JOIN EXCHANGEOFFER E
    ON O.OFFERID = E.OFFERID1 JOIN OFFER U
    ON U.OFFERID = E.OFFERID2
    JOIN DELIVARYOFFER D
    ON D.EXCHANGEID = E.EXCHANGEID
WHERE
    D.DELIVARYMANID = :ID
    AND D.STATUS = 'pending';

UPDATE DELIVARYOFFER
SET
    STATUS = 'Delivered'
WHERE
    EXCHANGEID = :ID;

SELECT
    (
        SELECT
            DELIVARYMANID
        FROM
            DELIVARYMAN B
        WHERE
            U.EMAILID=B.EMAILID
    ) ID
FROM
    USERMAN U
WHERE
    U.EMAILID LIKE :EMAIL
    AND UTL_RAW.CAST_TO_VARCHAR2(DBMS_CRYPTO.DECRYPT(U.PASSWORD, 4353, UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend'))) = :PASSWORD;

SELECT
    EMAILID,
    LATITUDE,
    LONGITUDE,
    UTL_RAW.CAST_TO_VARCHAR2(DBMS_CRYPTO.DECRYPT(PASSWORD, 4353, UTL_RAW.CAST_TO_RAW ('MyBibliophileFriend'))) PASS,
    FIRSTNAME,
    LASTNAME,
    DATEOFBIRTH,
    GENDER,
    CONTACTNO1,
    CONTACTNO2
FROM
    USERMAN
WHERE
    EMAILID=GET_EMAIL_FROM_DELIVARYMANID(:ID);

SELECT
    EXCHANGEID,
    OFFERID1,
    OFFERID2,
    STATUS,
    GET_EMAIL_FROM_OFFERID(OFFERID1)                                                                                                                                                                                                                                 EMAIL1,
    GET_EMAIL_FROM_OFFERID(OFFERID2)                                                                                                                                                                                                                                 EMAIL2,
    GET_NAME_FROM_EMAILID(GET_EMAIL_FROM_OFFERID(OFFERID1))                                                                                                                                                                                                          NAME1,
    GET_NAME_FROM_EMAILID(GET_EMAIL_FROM_OFFERID(OFFERID2))                                                                                                                                                                                                          NAME2,
    CALCULATE_DISTANCE(GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID1)), GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID1)), GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID2)), GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID2))) DISTANCE,
    GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID1))                                                                                                                                                                                                        LATI1,
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID1))                                                                                                                                                                                                       LONGI1,
    GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID2))                                                                                                                                                                                                        LATI2,
    GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_OFFERID(OFFERID2))                                                                                                                                                                                                       LONGI2
FROM
    EXCHANGEOFFER
WHERE
    STATUS = 'PENDING'
ORDER BY
    DISTANCE ASC;

SELECT
    GET_NAME_FROM_EMAILID(T.MAIL) NAME,
    SUM(SHARE_CNT)                SHARED_COUNT,
    T.MAIL                        EMAIL
FROM
    (
        SELECT
            A.MAIL2  MAIL,
            COUNT(*) SHARE_CNT
        FROM
            (
                SELECT
                    EXCHANGEID,
                    GET_EMAIL_FROM_OFFERID(OFFERID1) MAIL1,
                    GET_EMAIL_FROM_OFFERID(OFFERID2) MAIL2
                FROM
                    EXCHANGEOFFER
            ) A
        WHERE
            A.MAIL1 = GET_EMAIL_FROM_BOOKFRIENDID(:ID)
        GROUP BY
            A.MAIL2 UNION
            SELECT
                A.MAIL1  MAIL,
                COUNT(*) SHARE_CNT
            FROM
                (
                    SELECT
                        EXCHANGEID,
                        GET_EMAIL_FROM_OFFERID(OFFERID1) MAIL1,
                        GET_EMAIL_FROM_OFFERID(OFFERID2) MAIL2
                    FROM
                        EXCHANGEOFFER
                ) A
            WHERE
                A.MAIL2 = GET_EMAIL_FROM_BOOKFRIENDID(:ID)
            GROUP BY
                A.MAIL1
    ) T
GROUP BY
    T.MAIL
ORDER BY
    SHARED_COUNT DESC;

SELECT
    DISTINCT GENRE
FROM
    BOOK
WHERE
    GENRE IS NOT NULL
ORDER BY
    GENRE ASC;

SELECT
    DISTINCT NAME
FROM
    WRITTENBY
WHERE
    NAME IS NOT NULL
ORDER BY
    NAME ASC;

SELECT
    D.EXCHANGEID,
    D.FEE,
    D.STATUS,
    GET_NAME_FROM_EMAILID(O.USEREMAILID) NAME1,
    GET_NAME_FROM_EMAILID(U.USEREMAILID) NAME2
FROM
    OFFER         O
    JOIN EXCHANGEOFFER E
    ON O.OFFERID=E.OFFERID1 JOIN OFFER U
    ON U.OFFERID=E.OFFERID2
    JOIN DELIVARYOFFER D
    ON D.EXCHANGEID=E.EXCHANGEID
WHERE
    D.DELIVARYMANID = :ID
    AND D.STATUS = 'Delivered';

SELECT
    OFFERID,
    MESSAGE,
    GET_BOOK_NAME_FROM_OFFERID(OFFERID)                                                                                                                                                                                    BOOK,
    BOOKCONDITIONPHOTO,
    BOOKCONDITIONPHOTO1,
    BOOKCONDITIONPHOTO2,
    BOOKCONDITIONPHOTO3,
    BOOKCONDITIONPHOTO4,
    USEREMAILID,
    ISBN,
    TIME,
    STATUS,
    GET_NAME_FROM_EMAILID(USEREMAILID)                                                                                                                                                                                     NAME,
    CALCULATE_DISTANCE(GET_LATITUDE_FROM_EMAIL(USEREMAILID), GET_LONGITUDE_FROM_EMAIL(USEREMAILID), GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_BOOKFRIENDID(:ID)), GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_BOOKFRIENDID(:ID))) DISTANCE
FROM
    OFFER
WHERE
    USEREMAILID LIKE GET_EMAIL_FROM_BOOKFRIENDID(:ID)
    AND STATUS = 'offered'
ORDER BY
    DISTANCE ASC;

SELECT
    *
FROM
    NOTI
WHERE
    EMAILID = GET_EMAIL_FROM_BOOKFRIENDID(:ID)
ORDER BY
    TIME DESC;

SELECT
    N.NOTIFICATIONID,
    N.OFFERID,
    N.STATUS,
    N.EMAILWHOREQUESTED,
    O.BOOKCONDITIONPHOTO,
    B.ISBN,
    B.TITLE,
    U.FIRSTNAME
      ||' '
      ||U.LASTNAME       NAMEWHOREQUESTED
FROM
    NOTIFICATION1 N
    JOIN OFFER O
    ON N.OFFERID=O.OFFERID JOIN BOOK B
    ON O.ISBN=B.ISBN
    JOIN USERMAN U
    ON N.EMAILWHOREQUESTED=U.EMAILID
WHERE
    O.USEREMAILID = GET_EMAIL_FROM_BOOKFRIENDID(:ID)
    AND N.STATUS='show';

SELECT
    OFFERID,
    MESSAGE,
    GET_BOOK_NAME_FROM_OFFERID(OFFERID)                                                                                                                                                                                    BOOK,
    BOOKCONDITIONPHOTO,
    BOOKCONDITIONPHOTO1,
    BOOKCONDITIONPHOTO2,
    BOOKCONDITIONPHOTO3,
    BOOKCONDITIONPHOTO4,
    USEREMAILID,
    ISBN,
    TIME,
    STATUS,
    GET_NAME_FROM_EMAILID(USEREMAILID)                                                                                                                                                                                     NAME,
    CALCULATE_DISTANCE(GET_LATITUDE_FROM_EMAIL(USEREMAILID), GET_LONGITUDE_FROM_EMAIL(USEREMAILID), GET_LATITUDE_FROM_EMAIL(GET_EMAIL_FROM_BOOKFRIENDID(:ID)), GET_LONGITUDE_FROM_EMAIL(GET_EMAIL_FROM_BOOKFRIENDID(:ID))) DISTANCE
FROM
    OFFER
WHERE
    USEREMAILID NOT LIKE GET_EMAIL_FROM_BOOKFRIENDID(:ID)
    AND STATUS = 'offered'
ORDER BY
    DISTANCE ASC, TIME DESC;

SELECT
    N.NOTIFICATIONID,
    O.OFFERID,
    O.MESSAGE,
    GET_BOOK_NAME_FROM_OFFERID(O.OFFERID) BOOK,
    O.BOOKCONDITIONPHOTO,
    O.BOOKCONDITIONPHOTO1,
    O.BOOKCONDITIONPHOTO2,
    O.BOOKCONDITIONPHOTO3,
    O.BOOKCONDITIONPHOTO4,
    O.USEREMAILID,
    O.ISBN,
    O.TIME,
    O.STATUS,
    GET_NAME_FROM_EMAILID(O.USEREMAILID) NAME
FROM
    OFFER         O
    JOIN NOTIFICATION1 N
    ON N.EMAILWHOREQUESTED = O.USEREMAILID
WHERE
    O.STATUS = 'offered'
    AND N.NOTIFICATIONID = :ID
    AND N.STATUS='show';
    