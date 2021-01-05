// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let paragraph = document.getElementsByTagName("p");
let countString = (str) => (str.length > 8) ? true : false;
for (let i = 0; i < paragraph.length; i++) {
    let content = paragraph[i].innerText.split(" "),count = 0;
    console.log(content);
    for (let j = 0; j < content.length;j++) {
        if (countString(content[j])) {
            count++;
        } 
    }
    console.log("P" + (i+1) + " có " + count + " từ có độ dài lớn hơn 8" );
}

// 2. Style cho các từ có độ dài lớn hơn 8 trong p1
let paragraph2 = document.querySelector('.p1'); 
let countString2 = (str) => (str.length > 8) ? true : false;
let newContent2 = paragraph2.innerText.split(" ");

for (let i = 0; i < newContent2.length; i++ ) {
    if (countString2(newContent2[i])) {
        newContent2[i] = `<span style="color: red"> ${newContent2[i]}</span>`
    }
}
paragraph2.innerHTML = newContent2.join(" ");


// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!
let paragraph3 = document.querySelector('#p2'); 
let countString3 = (str) => (str.length < 8) ? true : false;
let newContent3 = paragraph3.innerText.split(" ");

for (let i = 0; i < newContent3.length; i++ ) {
    if (countString3(newContent3[i])) {
        newContent3[i] = `<span style="color: blue"> Anh Ba đẹp trai 🤣 </span>`
    }
}
paragraph3.innerHTML = newContent3.join(" ");

// 4. Thêm src, alt, href cho ảnh, link

let img = document.createElement("img");
img.src = "https://image.winudf.com/v2/image/eHB4Lnh4di54cHhfc2NyZWVuXzBfMTUyMzcyMDkxNF8wOTk/screen-0.jpg?fakeurl=1&type=.jpg";
img.alt = "Girl Xinh 2021";
document.body.insertAdjacentElement("beforeend", img)

let link = document.createElement("a");
link.href = "http://google.com";
link.textContent = "Google";
document.body.insertAdjacentElement("beforeend", link)


// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"
let tr = document.querySelectorAll("tr");
for (let i = 0; i < tr.length; i++) {
    let tdRandom = tr[i].children[Math.floor(Math.random() * 4)];
    tdRandom.style.backgroundColor = "red";
    tdRandom.innerHTML = "😍 Mr. Ba đẹp trai";
}