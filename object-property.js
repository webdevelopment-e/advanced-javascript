const students = [
    {id:11, name:'Tanni'},
    {id:21, name:'tasu'},
    {id:31, name:'Susu'},
    {id:41, name:'Ausu'}
];

// const names = students.map(s => s.name);
// console.log(names);

// const ids = students.map(s => s.id);
// console.log(ids);

// const bigger = students.filter(s => s.id < 41);
// console.log(bigger);

const biggerOne = students.find(s => s.id < 41);
console.log(biggerOne);
