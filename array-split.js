// const num = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = num.slice(2, 5);
// console.log(part);

// const removed = num.splice(2, 5);
// console.log(removed);
// console.log(num);

// const num = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = num.splice(2, 5, 18, 78);
// const together = num.join(",");
// console.log(together);

const num = [12, 5, 48, 23, 48, 10, 41, 33, 22, 35];
// const part = num.slice(2, 4);
// console.log(part);

const removed = num.splice(1, 6, 50, 88, 100);
const together = num.join(" ");
console.log(removed);
console.log(together);