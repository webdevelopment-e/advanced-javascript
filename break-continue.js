// const nums= [2, 4, 8, 6, 12, 4, 9, 10];
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// //     if(nums[i] > 8){
// //         break;
// //     }
        // console.log(nums[i])
// }

// const nums = [2, -4, -8, -6, -12, 4, 9, 10];
// for(let i = 0; i < nums.length; i++){
//     // console.log(nums[i]);
//     if(num[i] < 0){
//         continue;
//     }
//     console.log(num[i]);
// }

// const nums = [1, 21, 3, 42, 5, 65, 17, 8];
// for(let i = 0; i < nums.length; i++){
//     // console.log(nums[i]);
//     if(nums[i] > 21){
//         break;
//     }
//     console.log(nums[i]);
// }

const nums = [-1, -21, -3, 42, -5, 65, 17, 8];
for(let i = 0; i < nums.length; i++){
    if(nums[i] < 0){
        continue;
    }
    console.log(nums[i]);
}