function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

// const result = stopWatch(5);
// console.log(result);

// const clock1 = stopWatch();
// console.log(clock1());

// const clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

