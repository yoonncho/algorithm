-- 재귀 
WITH RECURSIVE hours AS(
    SELECT 0 AS h
    UNION ALL
    SELECT h+1
    FROM hours
    WHERE h < 23
)

SELECT h.h AS HOUR, COALESCE(o.cnt, 0) AS COUNT
FROM hours h 
LEFT JOIN (
    SELECT HOUR(DATETIME) AS hr, COUNT(*) AS cnt
    FROM ANIMAL_OUTS
    GROUP BY HOUR(DATETIME)
) o
ON h.h = o.hr
ORDER BY h.h

