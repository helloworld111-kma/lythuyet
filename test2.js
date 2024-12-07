// 1 số hàm built-in
// alert("in ra 1 thong bao");
//confirm(message);
//hiiển thị thông báo popup có thêm 2 lựa chọn là YES và NO
// var ketqua = confirm("bạn đã trên 18 tuổi??/" );
// console.log(ketqua);
//promt(title,defaultValue);
//dùng để lấy thông tin người dùng 
//  trong đó title là tiêu đề 
            // defaultValue là giá trị mặc định cho ô nhập(không bắt buộc)
//hàm settimeout là hàm sau xxx giây hàm bên trong sẽ chạy1 lần duy nhất
//hàm setinterval là hàm sau xxx giây sắp chạy hàm bên trong và lặm đi lặp lại
//clearInterval là hàm dừng lại;
// var b = setInterval(function() {
//     console.log("đã qua 1 giây");
// }, 1000);
// setTimeout(function() {
//     clearInterval(b);
// }, 5000);
//typeof x:trả về kiểu của biến x
// var a =1.124124;
// var b = "ádâdâđa";
// var c ;
// console.log(typeof a);number
// console.log(typeof b);string
// console.log(typeof c);undefined
//a.lenght: trả về số lượng kỹ tự trong chuỗi đó (kể cả khoảng trắng)
// var a ="dinh trung dong";
// console.log(a.length);
//indexOf("Ký tự muốn tìm",vị trí bắt đầu tìm trong chuỗi);tìm vị trí đầu tiên của 1 chỗi năm trong 1 chuỗi(nếu k thấy trả về -1)

// var a = "Xin chào mọi người,mình là Đông,mình 20 tuổi";
// console.log(a.indexOf("Đông",28));
//lastIndexOf("Ký tự muốn tìm",vị trí muốn tìm'từ trái qua phải',tìm thì chạy từ phải qua trái'ngược lại')

// var a = "hello tôi là tôi";
// console.log(a.length);//16
// console.log(a.indexOf("tôi",0))//6
// console.log(a.lastIndexOf("tôi",12));//6
// console.log(a.lastIndexOf("tôi",));//13

//slice(strat,end);để cắt chuỗi thành 1 chuỗi mới(không làm thay đổi chuỗi cũ );
// var a = "xin chào mọi người mình tên là đông là năm nay mình 20 tuổi mình đong học ở kma";
// console.log(a.slice(39,42));//năm
// console.log(a.slice(0));cắt cả chuỗi
// console.log(a.slice(-1));//cắt phần tử cuỗi cùng;
//replace("ký tự muốn thay thế","ký tự cần thay thế")
//lưu ý nó chỉ thay thế tý tự nó tìm thấy đầu tiên
//replace(/ký tự muốn thay thế/g,"ký tự cần thay thế")
//khi dùng (/string/,g) thì sẽ thay thế được tất cả các ký tự muốn thay thế(regex)
// var a = "xin chào tôi là Đông,Đông năm nay 19 tuổi ";
// var kq = a.replace(/Đông/g,"Chó")
// console.log(a);
// var kq1 = a.replace("Đông","Chó")
// console.log(kq1);
// console.log(kq);
//a.toUpperCase(): tất cả các chữ viết hoa
//a.toLowerCase(): tất cả các chữ viết thường
//a.trim(): xóa khoảng trắng ở 2 đầu của chuỗi (ở giữa k bị xóa)
// var a = "    xin chào mọi người    ";
// var b = a.trim();
// console.log(a);   xin chào mọi người   
// console.log(b);xin chào mọi người
//a.charAt(index): lấy ký tự thông qua index
// var a = "012345";
// console.log(a.charAt(2));
// console.log(a.charAt(a.length-1));//lấy ký tự cuối cùng
// console.log(a.charAt());//lấy ký tự đầu tiên
//hàm split(): tách các phần từ trong chuỗi thành các 1 mảng
///  Nhưng cần tìm điểm trung để tách được ra 1 mạng theo ý muốn
// var a = "Đinh Trung Đông 1 2 3 4 5";
// console.log(a.split());//chuyển chuỗi thành 1 mảng
// console.log(a.split(""));//chuyển chuỗi thành mảng (mỗi ký tự là 1 phần tử)
// console.log(a.split(" "));//các mỗi khoảng trắng là 1 phần tử của mảng;
// console.log(a.split(" ",3));//các mỗi khoảng trắng là 1 phần tử của mảng nhưng chỉ lấy 3 ký tự cho vào mảng;
//------------
//làm việc với number
//toString():chuyển kiểu number sang kiểu string.
// var a = 10;
// var c = (10).toString();
// console.log(a);
// console.log(typeof a);
// var b = a.toString();
// console.log(b);
// console.log(typeof b);
// console.log(c);
// console.log(typeof c);
//toFixed(digits):làm tròn số với (digits)là số chữ số sau chữ số thập phân
// var a = 5.51251241;
// console.log(a);
// var b = a.toFixed(2);
// console.log(b);
// console.log(typeof b);
//------------------
//làm việc với Array
//chuyển array thành string;
//**array.toString();
// var a = ["Đinh    "," ","trung","Đông"];
// console.log(a);
// console.log(typeof a);
// var b = a.toString();
// console.log(b);
// console.log(typeof b);
//**join(): dùng để chuyển từ array sang string
//trong đó (separator) :dải phân cách đặt trong dấu " ";
//array.join(separator) là dấu ngăn cách để thêm vào string(mặc định là dấu ,)
// var a = ["hello", "world", " kma"];
// console.log(a);
// var b = a.join("-");
// var c = a.join(" ** ");
// console.log(b);//hello-world- kma
// console.log(c);//hello ** world **  kma
//**pop(): xóa phần tử cuối mảng và trả về phần tử vừa xóa đi 
// var a = ["hello", "world", " kma"];
// var b = a.pop();
// console.log(a);//phần tử của mảng còn lại: ['hello', 'world']
// console.log(b);//kma
//**shift():ngược lại với pop()
//DÙng để xóa phần tử ở đầu mảng và trả về phần tử ở đầu mảng;
//array.shift();
// var a = ["hello", "world", " kma"];
// var b = a.shift();
// console.log(a);//phần tử của mảng còn lại: ['world', ' kma']
// console.log(b);//hello
//**push("item1","...."):đẩy 1 hoặc nhiều phần tử vào cuối mảng
// var a = ["hello", "world", " kma"];
// var b = a.push("Đinh","Trung","Đông");
// console.log(b);//trả về số lượng phần tử sau khi push
// console.log(a);//trả về 1 mảng mới bao gồm các phần tử đã push vào ['hello', 'world', ' kma', 'Đinh', 'Trung', 'Đông']
//unshift():Đẩy các phần tử vào đầu mảng(đẩy nhưng ngược lại với push)
// var a = ["hello", "world", " kma"];
// var b = a.unshift("Đinh","Trung","Đông");
// console.log(b);//trả về số lượng phần tử sau khi push(6)
// console.log(a);//trả về 1 mảng mới bao gồm các phần tử đã push vào ['Đinh', 'Trung', 'Đông', 'hello', 'world', ' kma'] 
//**splice(): xóa hoặc thêm các phần tử vào mảng
// splice trả về mảng bị xóa;
//cú pháp array.splice(index,howmanydelete,item1,itemw2);
//ví dụ 1 chỉ thêm;
// var a = ["hello", "world", " kma"];
// var b = a.splice(1,0,"Đông",);
// console.log(a);//mảng mới:['hello', 'Đông', 'world', ' kma']
// console.log(b);//phần tử vừa xóa [];
// //ví dụ 2 chỉ xóa;
// var c = ["hello","my name "," is"];
// console.log(c);
// var e = c.splice(0,1);
// console.log(c);//mảng mới:['my name ', ' is']
// console.log(e);//phần tử vừa xóa ['hello']
//**concat(tên mảng);
var a = ["hello", "world", " kma"];
var c = ["hello","my name "," is"];
var b = c.concat(a);
console.log(b);
// DONE buổi 5



