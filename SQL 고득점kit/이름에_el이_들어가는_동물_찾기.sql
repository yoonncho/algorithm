-- https://school.programmers.co.kr/learn/courses/30/lessons/59047

-- 대소문자 상관없이! LOWER, HIGHER

SELECT ANIMAL_ID, NAME 
FROM ANIMAL_INS
WHERE ANIMAL_TYPE = 'Dog' AND LOWER(NAME) LIKE '%el%'
ORDER BY NAME