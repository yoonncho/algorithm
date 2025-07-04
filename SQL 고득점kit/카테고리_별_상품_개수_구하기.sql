-- https://school.programmers.co.kr/learn/courses/30/lessons/131529


-- 💡 [문자열 다루기]
-- 문자열의 왼쪽/오른쪽에서 n자리 자르기
-- LEFT(STR, n) / RIGHT(STR, n)

-- 문자열 자르기
-- SUBSTRING(STR, start, length) start번째 문자부터 length개의 글자

-- 문자열 길이
-- LENGTH(STR)

-- 문자열 합치기
-- CONCAT(STR, '', STR2)

-- 대소문자 변환
-- UPPER(STR), LOWER(STR)

-- 문자열에서 특정 부분 문자열의 위치 찾기
-- INSTR('banana', 'na') => 3 (첫 번째로 등장하는 위치)

-- 문자열에서 특정 부분 치환하기
-- REPLACE('a-b-c', '-', '/'); => 'a/b/c'

SELECT LEFT(PRODUCT_CODE, 2) AS CATEGORY, COUNT(PRODUCT_ID) AS PRODUCTS
FROM PRODUCT
GROUP BY LEFT(PRODUCT_CODE, 2) 
ORDER BY CATEGORY