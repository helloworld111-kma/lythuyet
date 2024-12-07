// var a = 20;
// var b = (a++ - a-- + --a) * 3;
// //  20 - 21 + 19 
// console.log(b)
// var a = 20;
// var b = --a - ++a  + --a  - a++ + a-- * 2;
// // 19 - 20 + 19 - 19 + 20*2
// console.log(b);
// var a = 20;
// var b = "20";
// console.log(a);
// console.log(b);
// console.log(a === b);//40
// var a = 50;
// var b = 1230;
// var c = 40;
// var max = a;
// if(b > max){
//     max = b;
// }
// if(c > max){
//     max = c;
// }
// console.log('gia tri maxx la: ' + max);
// function sum(a,b) {
//     var c = a +b;
//     return c;
// }
// var x = 5;
// var y = 6;
// console.log(sum(x,y));
// KIỂU object
// cú pháp
 var inforClient = {
    fullName: "Dinh Trung Dong",age: 19,phone: "012312313"
};
console.log(inforClient)
var mangChuaSapXep = [5,3,2,5,1,5,12,51,2,4];
console.log(mangChuaSapXep);
console.log(" mang da sap xep ");
mangChuaSapXep.sort((a,b) => b - a);
console.log(mangChuaSapXep);

