WITH avg_scores AS (
    SELECT EMP_NO, AVG(SCORE) AS avg_score
    FROM HR_GRADE
    GROUP BY EMP_NO
)

SELECT E.EMP_NO, E.EMP_NAME,
    CASE WHEN A.avg_score >= 96 THEN 'S'
    WHEN A.avg_score >= 90 THEN 'A'
    WHEN A.avg_score >= 80 THEN 'B'
    ELSE 'C'
    END AS GRADE,
    CASE WHEN A.avg_score >= 96 THEN E.SAL * 0.2
    WHEN A.avg_score >= 90 THEN E.SAL * 0.15
    WHEN A.avg_score >= 80 THEN E.SAL * 0.1
    ELSE 0
    END AS BONUS
FROM HR_EMPLOYEES E
LEFT JOIN avg_scores A
ON E.EMP_NO = A.EMP_NO
ORDER BY E.EMP_NO