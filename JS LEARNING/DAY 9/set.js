let arr  = [1,2,3,4,5,6,6,5,5,6,8,9,8];
let s1 = new Set(arr);
console.log(s1);
for (let num of s1){
    console.log(num)
}