function solution(number) {
  let result = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0) result += i;
    if (i % 5 === 0) result += i;
    if (i % 15 === 0) result -= i;
  }

  return result;
}

console.log(solution(5));
