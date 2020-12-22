// 1.Viết hàm random(a,b) trả về số ngẫu nhiên trong khoảng a - b

// function random(a,b) {
//     if (a<b) {
//     return Math.floor(Math.random() * (b-a))+a; // Lấy số ngẫu nhiên từ min - max không bao gồm số max
// }   else {
//     return Math.floor(Math.random() * (a-b))+b;
// }
// }

// Arrow //
// let random = (a,b) => a<b ? Math.floor(Math.random() * (b-a))+a : Math.floor(Math.random() * (a-b))+b;
// random(-3,2) // Check xuôi
// random(40,20) // Check ngược


// 2. Viết hàm isTriangle(a,b,c) nhận vào 3 tham số là cạnh của tam giác, kiểm tra 3 cạnh có phải tam giác hợp lệ hay không ?

// function isTriangle(a,b,c) {
//     // điều kiện kiểm tra 1 tam giác
//     if ( a+b>c && b+c>a && a+c>b ) {
//         return "là tam giác"; //
//     } else {
//         return "không phải là tam giác";
//     }
// }

// Arrow //
// let isTriangle = (a,b,c) => a+b>c && b+c>a && a+c>b ? "là tam giác" : "không phải là tam giác";
// isTriangle(20,10,15) // Check True
// isTriangle(10,20,30) // Check Fail


// 3. Viết hàm guessNumber(), khởi tạo một số ngẫu nhiên trong khoảng 0-10, sau đó hiển thị bảng cho phép người dùng doán giá trị. Nếu đoán đúng hiển thị " A Mây Zing - Gút Chóp" & dừng hàm. Nếu sai hiển thị "Không Khớp" & cho phép nhập lại số. Số lần nhập tối đa là 3 lần hoặc người dùng có thể bấm cancel để dừng hàm.

// function guessNumber() {
// let count = 0;
// let random = Math.floor(Math.random() * 11);
// let n = +prompt("Hãy đoán một số từ 0 đến 10");
//     while (count < 2 && n != false && !isNaN(n)) {
//         if (n == random) {
//             alert("A Mây Zing - Gút Chóp");
//         } else {
//             count++;
//             n = +prompt("Nhập lại số")
//         }
//     }
//     console.log("Số random là "+random);
// }

// Arrow //
// let guessNumber = () => {
//     let count = 0;
//     let random = Math.floor(Math.random() * 11);
//     let n = +prompt("LUCKY NUMBER - Nhập 1 số bất kì");
//         while (count < 2 && n != false && !isNaN(n)) {
//             n == random ? alert("Â mây zing, gút chóp") : count++ , n = +prompt("Không khớp, xin mời nhập lại") ;
//         }
//         console.log("Số Random:" + random);
// }
//guessNumber(3)

// 4. Viết hàm nearest(a,b) kiểm tra và trả về số gần với 100 nhất.

// nearestTo100(89, 180) // 89
// Normal
// function nearest(a, b){
//     if ((100-a)<(100-b)) {
//         return a;
//     } else {
//         return b;
//     }
// }

// Arrow
// let nearest = (a,b) => ((100-a)<(100-b))?a:b;
// nearest(30,50) // Check xuôi
// nearest(90,-10) // Check ngược

// 5.. Viết hàm sequense(a,b,c) kiểm tra xem a,b,c có phải tăng dần ( hoặc giảm dần ) hay không.

// function sequense(a,b,c){
//     if (a<b && b<c) {
//         return "Các số tăng dần";
//     } else if ( a>b && b>c ) {
//         return "Các số giảm dần";
//     } else {
//         return "Các số không theo thứ tự"
//     }
// }

// Arrow
// let sequense = (a,b,c) => (a<b && b<c && a<c) ? "Các số tăng dần" : ( a>b && b>c && a>c) ? "Các số giảm dần" : "Các số không theo thứ tự";
// sequense(1,3,9)  // Check True

// 6.. Viết hàm isAscending(number) trả về số chữ số trong thập phân của number.

// function isAscending(number) {
//     let decimal = (number + "").split(".")[1]; // cắt lấy phần số thập phân ra khỏi number
//     return decimal;
// }

// Arrow
// let isAscending = (number) => decimal = ((number + "").split(".")[1]);
// isAscending(321321.12312312) // check

// 7. Viết hàm isAscending(number) kiểm tra dãy số của number có phải dãy tăng dần hay không?

// function isAscending(number) {
//     let str = number + "";
//     for (let i = 0; i < str.length - 1; i++) {
//         if (+str[i] > +str[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// let isAscending = (number) => {
//     let str = number + "";
//     for (let i = 0; i < str.length - 1; i++) {
//         if (+str[i] > +str[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// isAscending(1235671) // check


// 8. Viết hàm countEven(number) trả về số chữ số chẵn của number.

// function countEven(number) {
//     let str = number + "",
//         count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (+str[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let countEven = (number) => {
//     let str = number + "",
//         count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (+str[i] % 2 == 0) {
//             count++;
//         }
//     }
// }
// countEven(35680) // check


// 9.. Viết hàm find(number) trả về số n sao cho 1+ 2+...n <=number.
// function find(number) {
//     let sum = 0,
//         n = 0;
//     for (let i = 0; i <= number; i++) {
//         if (sum <= number) {
//             sum += i;
//             n = i;
//         } else {
//             return n - 1;
//         }
//     }
//     return n;
// }

// Arrow
// let find = (number) => {
//     let sum = 0,
//         n = 0;
//         for (let i = 0; i <= number; i++) {
//             sum <= number ? (sum += i, n = i) : n-1;
//   }
//         return n;
// };

// find(12) // check


// 10. Viết hàm sum(value1,unit1,value2,unit2) quy đổi về cùng đơn vị & trả về tổng giá trị value1 + value2 theo unit1, unit bao gồm km, cm, m, dm,mm.

// function sum(value1, unit1, value2, unit2) {
//     if (unit1 == "km") { // Khi value1 là km 
//         if (unit2 == "km") {
//             return value1 + value2;
//         } else if (unit2 == "m") { 
//             return value1 + value2*(10 ** -3);
//         } else if (unit2 == "cm") { 
//             return value1 + value2*(10 ** -5);
//         } else if (unit2 == "dm") { 
//             return value1 + value2*(10 ** -4);
//         } else if (unit2 == "mm") {
//             return value1 + value2*(10 ** -6);
//         }
//     } else if (unit1 == "m") { // khi value1 là m
//         if (unit2 == "km") {
//             return value1 + value2*1000;
//         } else if (unit2 == "m") {
//             return value1 + value2;
//         } else if (unit2 == "cm") {
//             return value1 + value2/100;
//         } else if (unit2 == "dm") {
//             return value1 + value2/10;
//         } else if (unit2 == "mm") {
//             return value1 + value2*(10 ** -3);
//         }
//     } else if (unit1 == "cm") { // khi value1 là cm
//         if (unit2 == "km") {
//             return value1 + value2*(10 ** 5);
//         } else if (unit2 == "m") {
//             return value1 + value2*100;
//         } else if (unit2 == "cm") {
//             return value1 + value2;
//         } else if (unit2 == "dm") {
//             return value1 + value2*10;
//         } else if (unit2 == "mm") {
//             return value1 + value2/10;
//         }
//     } else if (unit1 == "dm") { // khi value1 là dm
//         if (unit2 == "km") {
//             return value1 + value2*(10 ** 4);
//         } else if (unit2 == "m") {
//             return value1 + value2*10;
//         } else if (unit2 == "cm") {
//             return value1 + value2/10;
//         } else if (unit2 == "dm") {
//             return value1 + value2;
//         } else if (unit2 == "mm") {
//             return value1 + value2/100;
//         }
//     } else if (unit1 == "mm") { // khi value1 là mm
//         if (unit2 == "km") {
//             return value1 + value2*(10 ** 6);
//         } else if (unit2 == "m") {
//             return value1 + value2*(10 ** 3);
//         } else if (unit2 == "cm") {
//             return value1 + value2*10;
//         } else if (unit2 == "dm") {
//             return value1 + value2*100;
//         } else if (unit2 == "mm") {
//             return value1 + value2;
//         }
//     }
//     return false;
// }
// sum(10,'m',20,'mm') // check 
