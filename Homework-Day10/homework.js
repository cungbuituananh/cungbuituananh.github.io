// 1.VCT tính và in bảng cửu chương, sử dụng vòng lặp for lồng nhau
// function isTable() {
//     for (let i=1; i<=10; i++){  
//         for (let j=1; j<=10; j++) {
//           console.log(`${i} x ${j} = ${i*j}`); 
//         }
//     }
// }
// isTable()


// 2. VCT in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, chia hết cho 5 thì in “Buzz”, chia hết cho cả 3 và 5 thì in “FizzBuzz”, không chia hết cho cả 3 và 5 thì in “BizzFuzz”. Số trong khoảng 0 -> 100
// function fizzBuzz(n) {
//     if (!isNaN(n) && n != null && n <=100 & n >= 0) { 
//     if (n % 15 == 0) {  // chia hết cho cả 3 % 5
//         console.log( n + " - " + "FizzBuzz");
//     }else if(n % 3 == 0) {
//         console.log( i + " - " + "Fizz");
//     }else if(n % 5 == 0) {
//         console.log( n + " - " + "Buzz");
//     }else {
//         console.log( n + " - " + "BizzFuzz" );
// }
// }
// }
// fizzBuzz(200)


// 3. VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 1000
// function BC() {
//     let sum = 0;
//     for ( let i = 0; i <= 1000; i++) {
//         if ( i % 15 == 0 ) {
//             sum += i;
//             console.log(i);
//         }
//     }
// }
// BC ()


// 4. VCT kiểm tra và in ra một số có phải số nguyên tố hay không
// function isPrime(n) {
//     let isPrimeFlag = true; 
//     for (let i = 2; i <= Math.sqrt(n); i++) {  // lấy căn bậc 2 rút gọn điều kiện.
//       if (n % i == 0) {
//         isPrimeFlag = false;
//         break;
//       }
//     }
//       if (isPrimeFlag == true) {
//         console.log(n + " la so nguyen to");
//     } else {
//         console.log(n + " khong phai so nguyen to")
//     }
//   }
// isPrime(12)


// 5. VCT kiểm tra và in ra các số nguyên tố trong khoảng 0 -> 1000
// function primeLoop() {
//     for (let n = 2; n <= 1000; n++) {
//       isPrime(n);  // Lấy hàm trên câu 4.
//     }
//   }
//   primeLoop();


// 6.VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b.
// function isPrime(a,b) {
    
//      for (let i = a; i <= b; i++) {
//         let isPrimeFlag = true; 
//         for ( j = 2; j <= Math.sqrt(i); j++ )
//             if ( i % j == 0 ){
//                 isPrimeFlag = false;
//             break;
//         }
//             if ( isPrimeFlag == true) {
//                 console.log(i + " - la so nguyen to");
//         }   else {
//                 console.log(i + " - khong phai so nguyen to")
//         }
//          }
//         }       
// isPrime(2, 50)

 
// daysongto(10, 50)

// 7. VCT in ra bảng cửu chương ngược (từ 10 -> 1)
// function isTable() {
//     for (let i=10; i>=1 && i <= 10 ; i--){
//         for (let j=1; j<=10; j++) {
//           console.log(`${i} x ${j} = ${i*j}`); // in  kết quả
//         }
//     }
// }
// isTable()


// 8. VCT in ra chữ số đầu và cuối của một số. VD 12345->15 
// function findNumber(n) {
//     let lastNum = n % 10;  // Chia lấy số dư để được số cuối
//     let firstNum = n;  
//     while (firstNum >= 10) {  // Vòng lặp rút gọn số đầu về hàng đơn vị
//         firstNum = (firstNum - (firstNum%10))/10;
//     }
//     console.log(firstNum);
//     console.log(lastNum);
// }
// findNumber  (12579)

// 9.Viết chương trình in dãy số Fibonacci
// function fibonacci(n) {
//     let a = 1, b = 0, c; 
//     while (n>=0) {
//         c = a; 
//         a = a + b;
//         b = c;
//         n--;
//         console.log(a + " ");
//     }
//     return b;
// }
// fibonacci(2)


