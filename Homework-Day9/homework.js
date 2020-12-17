// Homework - Part 1 

// 1.Viết chương trình cho phép nhập vào chiều dài, chiều rộng của hình chữ nhật, tính và in ra chu vi, diện tích của hình chữ nhật:
// let r = +prompt("Nhập chiều rộng:");
// let d = +prompt("Nhập nốt chiều dài:");
// console.log("Chu vi bằng:", (r+d)*2, "m");
// console.log("Diện tích bằng:", r * d, "m2");

// Viết chương trình cho phép nhập vào bán kính hình tròn, tính và in ra chu vi, diện tích của hình tròn:
// let r = +prompt("Nhập bán kính R nhé:");
// console.log("Diện tích S bằng:", (r**2)*3.14, "m2");
// console.log("Chu vi C bằng:", 2*r*3.14, "m" );

// Viết chương trình cho phép nhập vào hệ số a, b của phương trình bậc nhất ax + b = 0, tính và in ra nghiệm của phương trình
// let a = +prompt("Tìm 'X' với aX+b=0. Nhập a nào" );
// let b = +prompt("Tìm 'X' với aX+b=0. Nhập nốt b" );
// console.log("X= -b/a ",-b/a);

// Viết chương trình cho phép nhập vào một số là đơn vị cm, tính và in ra giá trị tương ứng ở các đơn vị mm, m, km
// let cm = +prompt("Nhập số đổi đơn vị- centimet:");
//  console.log("kilomet", cm/1000000,"km"); 
// console.log("met nhé", cm/1000,"m"); 
//  console.log("milimet", cm*10,"mm"); 

// Viết chương trình cho phép nhập vào một số là nhiệt độ có đơn vị Celsius, in ra nhiệt độ ở đơn vị Fahrenheit và Kevin tương ứng
// let c = +prompt("Độ C");
// console.log("Độ Fahrenheit:", (c*1.8)+32,"F"); 
// console.log("Độ Kevin:", c+273.15,"K");

// Viết chương trình cho phép nhập một số phút tính từ 0h, tính và in ra giờ/phút tương ứng
// let minute = +prompt("Nhập số phút");
// let h = Math.floor(minute/60);
// console.log("số giờ:", h,"giờ");
// console.log("số phút:",minute%60,"phút");

// Bài tập Part 2 
// 1. Viết chương trình cho phép nhập ba số, kiểm tra và in ra số lớn nhất
// let a = +prompt("Nhập một số a");
// let b = +prompt("Nhập một số b"); 
// let c = +prompt("Nhập một số c");

// if (a>b, a>c) {
//     console.log("Số lớn nhất là:",a)
// } else if (b>a, b>c) { 
//     console.log("Số lớn nhất là:",b)
// } else {
//      console.log("Số lớn nhất là:",c) };
//  if (c>a, c>b)

// 2. VCT cho phép nhập một số, kiểm tra và in ra số đó có chia hết cho 5 và 11 hay không
// let a = +prompt("Nhập một số bất kì");
// let b = a % 5;
// let c = a % 11;

// if ( b == 0 && c == 0) {
//     console.log("chia hết cho cả 2")
// } else  if ( b == 0 && !(c == 0)) {
//     console.log("chia hết cho 5")
// } else {
//     console.log("chia hết cho 11")
// };
// if (c>a, c>b)

// 3. VCT cho phép nhập một năm, kiểm tra và in ra năm đó có phải năm nhuận hay không.
// let y = +prompt("Nhập một năm bất kì")
// let n = y % 4;

// if (n == 0) {
//     console.log(y,"Chắc chắn nhuận")
// } else {
//     console.log(y,"Không phải nhuận rồi")
// };

// 4. VCT cho phép nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng ký tự alphabe (a zA Z) hay không
// let a = prompt("Nhập một ký tự bất kì"); 
// if (a >="a" && a <="z" || a >="A" && a  <= "Z") {
//     console.log("Chữ cái");
// } else {
//     console.log("Không phải chữ cái");
// };

// 5. VCT cho phép nhập một ký tự, kiểm tra và in ra ký tự đó là nguyên hay phụ âm (tiếng Anh)
// let a = prompt("Kiểm tra NGUYÊN ÂM & PHỤ ÂM"); 

// if (a == "a" || a == "e" || a == "o" || a == "i" || a == "u" ||a == "A" || a == "E" || a == "O" || a == "I" || a == "U" ) {
//     console.log(a, "Là Nguyên Âm nhé");
// } else {
//     console.log(a, "Là Phụ Âm rồi");
// };

// 6. VCT cho phép nhập một ký tự, kiểm tra và in ra ký tự đó là chữ thường hay chữ in hoa
// let a = prompt("Nhập một ký tự bất kì"); 
// if (a >="a" && a <="z") {
//     console.log("Chữ Thường");
// } else if (a >="A" && a <="Z") {
//     console.log("Chữ Hoa");
// } else {
//     console.log("Ngoài phạm vị chữ")
// };

// 7. VCT cho phép nhập ba hệ số a, b, c, của phương trình bậc 2 ax2 + bx + c = 0, tính và in ra nghiệm phương trình
// let a = +prompt("Nhập a của phương trình ax2 + bx + c = 0");
// let b = +prompt("Nhập b của phương trình ax2 + bx + c = 0");
// let c = +prompt("Nhập c của phương trình ax2 + bx + c = 0");
//     delta = b*b-4*a*c
// 	x = -b / (2 * c)
// 	x1 = (-b + Math.sqrt(delta)) / (2*a)
// 	x2 = (-b - Math.sqrt(delta)) / (2*a)
// if(delta < 0) {
// 		console.log('Phương trình vô nghiệm')
// } else if(delta == 0){
// 		console.log('Phương trình có nghiệm kép x1 = x2 =',x)	
// } else {
// 		console.log('Phương trình có 2 nghiệm')
// 		console.log('x1 = ', x1 ) 
// 		console.log('x2 = ', x2 )
// };

// 8. VCT quy đổi điểm hệ số 10, sang điểm hệ chữ cho sinh viên, với điểm =< 10 là A, < 8.5 là B, < 7.0 là C, < 5.5 là D, < 4.0 là F

// let isPoint = +prompt("Quy đổi điểm hệ số - chữ. Nhập số điểm:");
// if (isPoint < 4) {
//     console.log("Tương ứng với F");
// } else if (isPoint < 5.5) {
//     console.log("Tương ứng với E");
// } else if (isPoint < 7) {
//     console.log("Tương ứng với C");
// } else if (isPoint < 8.5) {
//     console.log("Tương ứng với B");
// } else if (isPoint <= 10) {
//     console.log("Tương ứng với A");
// } else {
//     console.log("Điểm số không thể quy đổi");
// }