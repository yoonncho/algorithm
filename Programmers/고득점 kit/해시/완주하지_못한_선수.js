function solution(participant, completion) {
  const dict = completion.reduce(
    (acc, c) => ((acc[c] = acc[c] ? acc[c] + 1 : 1), acc),
    {}
  );

  return participant.find((p) => {
    if (dict[p]) dict[p] -= 1;
    else return true;
  });
}
