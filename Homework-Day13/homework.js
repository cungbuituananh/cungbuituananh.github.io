//1. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.
// let changeUpper = (string) => {
//     let newStr = string.split(" "); // tách chuỗi thành từng mảng sau mỗi khoảng trắng 
//     for (var i = 0; i < newStr.length; i++ ) {
//         newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1); // xử lý từng mảng với chữ cái đầu tiên viết hoa ( charAt(0) )
//     }
//     return newStr.join(" ") 
// }
// changeUpper("hello teacher bar")


//2. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize
// let changeStr = (string) => {
//     let newStr1 = string.split(" ");
//     for (var i = 0; i < newStr1.length; i++ ) {
//         newStr1[i] = newStr1[i].charAt(0).toLowerCase() + newStr1[i].substring(1); 
//     }
//     return newStr1.join("-")
// }

// changeStr("Hello Teacher Bar")


//3. Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. 

// let removeSpace = (string) => {
//     let newStr2 = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i - 1] == " ") {
//             if (string[i] != " ") {
//                 newStr2 += string[i];
//             }
//         } else {
//             newStr2 += string[i];
//         }
//     }
//     return newStr2.trim();
// }
// removeSpace("    Hello    Teacher   Bar    !  ")


//4. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại. VD “aBcD” => “AbCd”
// let change = (string) => { 
//     let newStr3 = ""; // doi ham ra chuoi
//     for (i=0; i < string.length; i++) {
//         if (string[i] == string[i].toUpperCase()) {
//             newStr3 += string[i].toLowerCase();
//         } else {
//             newStr3 += string[i].toUpperCase();
//         }
//     }
//     return newStr3;
// }
// change("hEhEhEhIhIhI")


//5. Viết hàm lặp chuỗi n lần. VD “Hehe”, 3 => “HeheHeheHehe
// let repeat = (string, n) => {
//     let newStr4 = "";
//     for (let i = 0; i < n; i++) {
//         newStr4 += string;
//     }
//     return newStr4;
// }
// repeat("Macbook - M1 ", 5)


//6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định. VD “ac”, “b”, 1 => “abc”
// let insert = (string1, string2, index) => {
//     let newStr5 = "";
//     for (let i = 0; i < string1.length; i++) {
//         console.log(str1.length)
//         if (i == index) {
//             newStr5 += string2;
//         }
//             newStr5 += string1[i];
//     }
//     return newStr5;
// }
// insert("abcefgh", "D", 3)


//7. Viết hàm rút gọn chuỗi nếu chuỗi dài hơn giá trị chỉ định. VD “abcdef”, 2 => “ab...”;
// let short = (string, index) => {
//     let  newStr6 = "";
//         for( let i = 0; i < index; i++) {
//             return ( string.slice(0, index) + "..." );
//         }
// }
// short("abcd12345", 4)


//8.Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi. VD “abca”, “a” => 2
// let count = (string1, string2) => 
//     string1.split(string2).length - 1;
// count("abcdeabd", "b" )


//9. Viết hàm cắt chuỗi theo số từ chỉ định. VD “My name is Ba”, 2 => “My name” 
// let cut = (string,index) => {
//     let newStr8 = string.split(" "); 
//     for( let i = 0; i < index; i++) {
//         return ( newStr8.slice(0, index).join(" ") );
//         }
// }
// cut("My name is Ba", 2)


//10.


//11. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode. VD: “ad” => “be”
let replace = (string) => {
    let newStr10 = "";
    for ( let i = 0; i < string.length; i++ ) {
        newStr10 += String.fromCodePoint(string.charCodeAt(i) + 1);
    }
    return newStr10; 
}
