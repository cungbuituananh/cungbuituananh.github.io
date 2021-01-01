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
find([2,4,6,7,8,10],2)

//3. Viết hàm sao chép một mảng số
let numbers = [1, 2, 3];
let copy = () => {
    let numbersCopy = [];
    for (i = 0; i < numbers.length; i++) {
        numbersCopy[i] = numbers[i];
    }
return ("Mảng copy: " + numbersCopy);
}
copy([1, 2, 3])


//4. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng
let findMax = (arr) => {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if ( arr[i] > max ) {
        max = arr[i]; 
    }
}
return max;
}


//5. Viết hàm đổi chỗ vị trí 2 phần tử trong mảng
let arr = [2,4,6,7,8,10]; 
let change = (i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
return arr;
}


//6. Cho một mảng số đã được sắp xếp tăng dần, viết hàm tìm số lớn thứ 2 trong mảng
let arr = [2,44,65,72,8,10,300,2,120,250,2,100];
let secondMax = () => {
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
let filterArray = (arr) => arr.filter((i) => !!i);
filterArray([null, 1, 0, NaN, ""]);


//16. Viết hàm sắp xếp một mảng số nguyên
let sortNumber = (arr) => arr.sort((a, b) => a - b);
sortNumber([2,4,6,7,8,10,300,120,250,100])


//17 Viết hàm sắp xếp một mảng “string”
let sortString = (arr) => arr.sort();
sortString(["Cung", "Bui", "Tuan", "Anh"])


//18. Cho một mảng object user [{name: “Ba”, age: 28}, {name: “Bon”, age: 3}, ...] Viết hàm sắp xếp mảng user tăng dần theo age
let user = [
    {name: "Teacher Ba", age: 28},
    {name: "Bon", age: 3},
    {name: "Nama", age: 5},
    {name: "Lucie", age: 10},
];
user.sort((a,b) => a.age - b.age );
//19. Tương tự, viết hàm sắp xếp mảng user theo name.length
user.sort((a,b) => a.name.length - b.name.length);
//20. Viết hàm sắp xếp mảng user theo name
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
let shuffleArr = (arr) => {
    for( let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
shuffleArr([1,2,3,4,5,6,7])

//24. Viết hàm biến một một mảng 2 chiều thành mảng 1 chiều.
//25. Viết hàm biến một mảng nhiều chiều (3 hoặc nhiều hơn) thành mảng một chiều    
let numberArr = (arr) => {
    let newArr = arr.reduce((a,b) => {
        return a.concat(b)
    },[])
    return newArr;
}
numberArr([1,2,3,[4,5,6],[7,8,9]])

//26. Viết hàm biến đổi các phần tử của mảng số nguyên thành bình phương của chính nó
let squareArr = (arr) => arr.map((i) => i * i)
squareArr([3, 6, 8,12]);


//27. Viết hàm biến đổi các phần tử của mảng chuỗi thành dạng uppercase()
let uppercaseArray = (arr) => arr.map((i) => i.toUpperCase());
uppercaseArray(["tuan", "anh", "cung", "bui"]);


//28. Viết hàm lọc ra các phần tử có kiểu “number” trong một mảng hỗn hợp
let filterNumber = (arr) => arr.filter((i) => typeof i == "number");
filterNumber(["a", 1, 2, "b"]);


//29. Tạo một mảng object với các thông tin name, age, ...
let user = [
    {name: "teacher ba", age: 28},
    {name: "bon bon", age: 3},
    {name: "nana mama", age: 5},
    {name: "lucie monkey", age: 25},
];


//30. Viết hàm lọc ra các object với age > 20
let age20 = (arr) => arr.filter((i) => i.age > 20 );
age20(user) ;


//31. Viết hàm chuyển đổi name của object thành dạng capitalize
let capitalName = (arr) => arr.map((i) => {
    let newStr = i.name.split(" ");
    for (var i = 0; i < newStr.length; i++ ) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1); 
    }
    return newStr.join(" ") 
})
capitalName(user)


//32. Viết hàm chuyển đổi name của object thành dạng viết tắt. VD “Ba Nguyen” => “Ba N.”
let shortName = (arr) => arr.map((i) => {
    let space = i.name.indexOf(" ");
    // console.log(space);
    if (space != -1) {
        return i.name = i.name.slice(0, space + 2) + ".";
    } else return i.name;
})
shortName(user)


//33. Viết hàm để chuyển mảng object thành một mảng chỉ chứa name.
let nameOnly  = (arr) => arr.map((i) => i.name);
nameOnly(user)


// Bài tập Datetime
// 1. Viết hàm kiểm tra xem một giá trị có phải giá trị thời gian hợp lệ hay không
let checkDay = (someday) => {
    let check = new Date(someday);
    if ( check == "Invalid Date") {
        return "Ngày không tồn tại"; 
    } else return check;
}
checkDay("2020-4-31")


// 2. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại. VD “T2”, “T3”, “CN”
let date = new Date();
    switch(date.getDay()) {
        case 0: 
        console.log("Chủ Nhật");
        break;
        case 1: 
        console.log("Thứ 2");
        break;
        case 2: 
        console.log("Thứ 3");
        break;
        case 3: 
        console.log("Thứ 4");
        break;
        case 4: 
        console.log("Thứ 5");
        break;
        case 5: 
        console.log("Thứ 6");
        break;
        case 6: 
        console.log("Thứ 7");
        break;
        default: 
        console.log("Không Rõ");
    }


// 3. Viết hàm trả về ngày trước ngày hiện tại n ngày
let backTime = (n) => {
    let today = new Date();  
    today.setDate(today.getDate()  - n );
    return today;
} 
backTime(1)


// 4. Viết hàm trả về số ngày trong tháng bất kỳ, năm và tháng là tham số truyền vào
let countDay = (year,month) => new Date(year,month,0).getDate();
countDay(2018,2)


// 5. Viết hàm tính số giây hiện tại trong ngày
let secondLeft = () => {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    return ((24*60*60) - (hour*60*60) - (min*60) - sec);
};
secondLeft()

// 6. Viết hàm tính số ngày còn lại đến tết dương lịch năm sau
let newYear = () => {
    let today = new Date();
    let nextYear = new Date(today.getFullYear() + 1,0,1 );
    let daysLeft = nextYear - today; 
    day = Math.floor(daysLeft / (24*60*60*1000));
    return day; 
}
newYear()

// 7. Viết hàm kiểm tra một ngày có phải cuối tuần hay không, ngày là tham số truyền vào
let checkWeekend = (someday) => {
    let check = new Date(someday); 
    if (check.getDay() == 0 || check.getDay() == 6 ) 
        return "Là cuối tuần";
    else 
        return "Không phải cuối tuần" ;
}
checkWeekend("2021-1-2")


// 8. Viết hàm trả về số quý tương ứng với giá trị ngày tháng truyền vào (quý 1 -> 4)
let checkQuater = (someday) => {
    let check = new Date(someday),
    month = check.getMonth() + 1
    if ( month >= 1 && month <= 3 ) {
        return " Quý 1";   
    }
    else if ( month >= 4 && month <=6) {
        return " Quý 2";
    }
    else if ( monnth >= 7 && month <= 9) {
        return " Quý 3";
    }
    else {
        return " Quý 4";
    }   
}
checkQuater("2021-1-2")


// 9. Viết hàm tính tổng số ngày đã qua trong năm
let day = () => {
    let today = new Date(); 
    newYear = new Date(today.getFullYear(),0,1);
    let preDay = today - newYear;
    day = Math.floor(preDay / (24*60*60*1000));
    return day; 
}

// 10. Viết hàm tính tuổi theo ngày tháng truyền vào

// 11. Viết hàm trả về chuỗi ngày tháng hiện tại có dạng “10:01:30 CN 20/01/2020”

// 12. Viết hàm trả về thời gian chênh lệnh giữa 2 quốc gia 

// 13. Viết hàm trả về ngày sau ngày hiện tại n ngày
let nextTime = (n) => {
    let today = new Date();  
    today.setDate(today.getDate() + n);
    return today;
} 
nextTime(1)

// 14. Viết hàm trả về số giờ chênh lệnh giữa 2 ngày
let diffHour = (date1,date2) => {
    let day1 = new Date(date1), 
        day2 = new Date(date2); 
    return Math.abs((day1 - day2)) / (60*60*1000);
}
diffHour("2021-2-14", "2021-1-1");

// 15. Viết hàm trả về ngày tương ứng với ngày đầu tuần
