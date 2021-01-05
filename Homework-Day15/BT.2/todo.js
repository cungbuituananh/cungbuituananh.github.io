// Todolist
let todos = [
    { id: 1, title: "Coding", completed: false },
    { id: 2, title: "Xem bắn pháo hoa", completed: false },
    { id: 3, title: "Giao bài tập cho lớp FE12", completed: true },
    { id: 4, title: "Đòi nợ Thảo 10$", completed: false },
    { id: 5, title: "Dọn nhà", completed: true },
    // add more
  ];
  
  // Từ todolist trên render ra trang HTML theo mẫu trong ảnh
  
  let doing = document.querySelector("#doing"),
    complete = document.querySelector("#complete");
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) {
      complete.lastElementChild.innerHTML += `<div><input type="checkbox" name="${todos[i].id}" checked id="${todos[i].id}">${todos[i].title}</div>`;
      } else {
      doing.lastElementChild.innerHTML += `<div id='${todos[i].id}'><input type="checkbox" name="${todos[i].id}" id="${todos[i].id}">${todos[i].title}</div>`;
    }
  }
