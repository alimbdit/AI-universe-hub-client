const str = '12/1/2021';

const date = new Date(str);
console.log(date); // 👉️ 2022-09-24T00:00:00.000Z

console.log(date.toDateString()); // 👉️ Sat Sep 24 2022
