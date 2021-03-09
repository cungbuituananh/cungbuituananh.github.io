// Export chức năng get / post

export default function (options) {
  // Sử dụng Destructuring
  const { method, url, condition } = options;

  // Return lại 1 promise
  return new Promise((resolve, reject) => {
    // Tạo một đối tượng xhr mới
    let xhr = new XMLHttpRequest();

    // xác định định dạng trả về là json
    xhr.responseType = "json";

    // xác định yêu cầu phương thức
    xhr.open(method, url);

    // gửi yêu cầu đến server khi điều kiện là true / false
    xhr.send(condition ? condition : null);

    // tình trạng của request khi đc tải thành công hoặc thất bại
    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.status + ":" + xhr.statusText);
      }
    };

    xhr.onerror = () => reject("Có lỗi xảy ra");
  });
}


export function getUser(users,id) {
    for(let i = 0; i < users.length; i++ ) {
        if(users[i].id == id) {
            return users[i];
        }
    }
}

export function createPost(post, user) {
  let html = `
        <div class="post">
            <a class="post-link" href="post.html?id=${post.id}">
                <h3 class="post-title">${post.title}</h3>
            </a>

            <p class="post-short-desciption">${post.body}</p>
            <p class="post-author">By
                <a class="author-link" href="postbyuser.html?userId=${user.id}">
                    ${user.name}
                </a>
            </p>
        </div>
    `;

  return html;
}

export function createPostDetail(post) {
    let html = `
          <div class="post">
              <h2 class="post-title">${post.title}</h2>
              <p class="post-desciption">${post.body}</p>
          </div>
      `;
  
    return html;
  }


export function createComment(comment) {
    let html = `
          <div class="comment">
              <h4 class="comment-name">${comment.name}</h4>
              <p class="comment-email">${comment.email}</p>
              <p class="comment-body">${comment.body}</p>
          </div>
      `;
    return html;
  }