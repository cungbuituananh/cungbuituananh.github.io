export default function (options) {
  const {method, url, body} = options;
  
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method,url);
    xhr.send(body ? body : null);
    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(xhr.response)
      } else {
        reject(xhr.status + ":" + xhr.statusText);
      }
    };
    xhr.onerror = () => reject("Ooops!");
  });
}

export function getUser(users,id) {
  for (let i = 0; i < users.length; i++) {
    if ( users[i].id == id ) {
      return users[i];
    }
  }
}

export function createPost(post, user) {
  let html = `
        <div class="post col-lg-6">
            <a class="post-link" href="post.html?id=${post.id}">
                <h3 class="post-title">${post.title}</h3>
            </a>

            <p class="post-short-desciption">${post.body}</p>
            <p class="post-author">Author
                <a class="author-link" href="postbyuser.html?userId=${user.id}">
                    <i>${user.name}</i>
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
