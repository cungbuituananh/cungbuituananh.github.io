//1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng
let arr = [2,4,6,7,8,10];
let trungBinh = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
trungBinh()


//2. Cho một mảng số, viết hàm tìm index của một số trong mảng 
let arr = [2,4,6,7,8,10]; 
let find = (arr, value) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == value ) {
            return i; 
        }
    }
}


//3. Viết hàm sao chép một mảng số
let numbers = [1, 2, 3];
copy = () => {
    let numbersCopy = [];
    for (i = 0; i < numbers.length; i++) {
        numbersCopy[i] = numbers[i];
      }
      return numbersCopy;
}


//4. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng
let arr = [2,4,6,7,8,10,300,120,250,100]; 
findMax = () => {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if ( arr[i] > max ) {
        max = arr[i]; 
    }
}
}


//5. Viết hàm đổi chỗ vị trí 2 phần tử trong mảng
let arr = [2,4,6,7,8,10]; 
change = (i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}


//6. Cho một mảng số đã được sắp xếp tăng dần, viết hàm tìm số lớn thứ 2 trong mảng
let arr = [2,44,65,72,8,10,300,2,120,250,2,100];
secondMax = () => {
    arr.sort((a,b) => b-a); 
    numSecond = arr[1]; 
}
   

// 7. Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD “hello world” => “Hello World”
let changeUpper = (string) => {
    let newStr = string.split(" "); 
    for (var i = 0; i < newStr.length; i++ ) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1); 
    }
    return newStr.join(" ") 
}


//8. Viết hàm tìm số lần xuất hiện lớn nhất của một phần tử trong mảng
let findMax = (arr) => {
    let newArr = arr.sort((a,b) => a-b); 
    let count = 1; 
    for(let i=1; i < arr.length; i++){
        if (newArr[i] == newArr[0]) {
            count++;  
        }
    }
    return count; 
}
findMax([2,44,65,300,72,300,8,10,300,2,120,250,2,100])


//9. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định. VD “Hello”, 2 => [“He”, “ll”, “o”]
let cut = (string, len) => {
    let newArr = [];
    for( let i = 0, j = 0; i <= string.length; i += len, j++){
        newArr[j] = string.slice(i, i +len);
    }
    return newArr
}


//10. Viết hàm tách chuỗi thành một mảng các chuỗi con. VD “dog” => [“d”, “do”, “dog”, “og”, “g”]


//11. Cho một mảng số, viết hàm loại bỏ số trùng lặp trong mảng. VD [1,2,2,3] => [1,2,3]
let arr = [2,44,65,300,72,8,100,10,300,2,120,250,2,100]; 
let newArr = [...new Set(arr)] 

//12. Viết hàm trả về một mảng lưu dãy số Fibonacci từ 0 -> n. VD 8 => [0, 1, 1, 2, 3, 5, 8, 13]
let fib = (n) => {
    let arr = [0,1];  
    for (let i = 2; i <= n; i++) { 
        let a = arr[i-1]; 
        let b = arr[i-2]; 
        arr.push(a+b); 
    }
    return arr; 
  }
fib(7)


//13. Viết hàm trả về một mảng các số trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [2,3] 
let dulicate = (arr1, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1 && newArr.indexOf(arr1[i]) == -1)
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) != -1 && newArr.indexOf(arr2[i]) == -1)
        newArr.push(arr2[i]);
    }
      return newArr;
    };


//14. Viết hàm trả về một mảng các số không trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [1,4]
let nonDulicate = (arr1, arr2) => {
    let newArr = []; 
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1 )
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1)
        newArr.push(arr2[i]);
    }
        return newArr; 
}

//15.Viết hàm loại bỏ các giá trị “false” khỏi mảng. VD [null, 1, 0, NaN, “”] => [1] 


//16. Viết hàm sắp xếp một mảng số nguyên


//17 Viết hàm sắp xếp một mảng “string”


//18. Cho một mảng object user [{name: “Ba”, age: 28}, {name: “Bon”, age: 3}, ...] Viết hàm sắp xếp mảng user tăng dần theo age
//19. Tương tự, viết hàm sắp xếp mảng user theo name.length
//20. Viết hàm sắp xếp mảng user theo name

let user = [
    {name: "Teacher Ba", age: 28},
    {name: "Bon", age: 3},
    {name: "Nama", age: 5},
    {name: "Lucie", age: 10},
];
user.sort((a,b) => a.age - b.age );
user.sort((a,b) => a.name.length - b.name.length);
user.sort((a,b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
    return 0;
});


//21.Cho một mảng số, và một số n, tìm trong mảng vị trí 2 phần tử có tổng bằng n, kết quả trả về là một mảng lưu vị trí 2 phần tử, hoặc mảng rỗng nếu không tìm thấy


//22. Viết hàm lấy một phần tử ngẫu nhiên trong mảng
let random = (arr) => {
    let randomNumber = arr[Math.floor(Math.random()*arr.length)]
    return randomNumber;
}

//23. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)

//24. Viết hàm biến một một mảng 2 chiều thành mảng 1 chiều.

//25. Viết hàm biến một mảng nhiều chiều (3 hoặc nhiều hơn) thành mảng một chiều

//26. Viết hàm biến đổi các phần tử của mảng số nguyên thành bình phương của chính nó

//27. Viết hàm biến đổi các phần tử của mảng chuỗi thành dạng uppercase()

//28. Viết hàm lọc ra các phần tử có kiểu “number” trong một mảng hỗn hợp

//29. Tạo một mảng object với các thông tin name, age, ...
//30. Viết hàm lọc ra các object với age > 20

//31. Viết hàm chuyển đổi name của object thành dạng capitalize
//32. Viết hàm chuyển đổi name của object thành dạng viết tắt. VD “Ba Nguyen” => “Ba N.”
//33. Viết hàm để chuyển mảng object thành một mảng chỉ chứa name.