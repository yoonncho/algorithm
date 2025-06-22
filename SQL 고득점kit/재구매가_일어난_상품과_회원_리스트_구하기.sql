-- https://school.programmers.co.kr/learn/courses/30/lessons/131536

-- 💡 SALES_AMOUNT는 '재구매'의 의미가 아니라,
-- 한 번 구매 시 몇 개를 구매했는지의 '수량' 의미이다.

SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
-- 같은 조합이 2개 이상인지 (재구매)
HAVING COUNT(*) >= 2  
ORDER BY USER_ID, PRODUCT_ID DESC