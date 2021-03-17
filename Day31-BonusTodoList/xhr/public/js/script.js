let xhr = new XMLHttpRequest();


xhr.responseType = "json";
xhr.open("GET", "/todos");
xhr.send();
xhr.onerror = () => console.log("Error");
xhr.onload = () => {
    if (xhr.status == 200) {
      let data = xhr.response
        console.log(data);
      data.forEach((data) => {
        console.log(data);
      })
        // xhr.response.forEach((x) => {
        //     console.log(x);
        //     let html = createTodo(x);
        //     todosList.insertAdjacentHTML("", html);
            
        // })
    }
}

// const createTodo = (todo) => {
//     let html = `
   
//     `;
//     return html 
// }