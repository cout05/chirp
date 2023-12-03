const home = document.getElementById("home");
const userAccount = document.getElementById("user-account");

function navPage(param) {
  if (param === "home") {
    home.style.display = "block";
    userAccount.style.display = "none";
    document.title = "Chirp";
  } else {
    home.style.display = "none";
    userAccount.style.display = "block";
    userPostUpdate();
    document.title = userNameHolder + " | Profile";
  }
}

function toggleSettings() {
  console.log("hi");
  const settings = document.getElementById("settings");
  if (settings.style.display === "none") {
    settings.style.display = "block";
  } else {
    settings.style.display = "none";
  }
}

function logout() {
  document.location = "index.html";
}

const userNameHolder = localStorage.getItem("currentUsername");
const userName = document.getElementById("name");
userName.textContent = userNameHolder;

const inputVal = document.getElementById("postInput");

function createPost() {
  let posts = JSON.parse(localStorage.getItem("posts"));

  posts.push({
    username: userNameHolder,
    post: inputVal.value,
  });

  localStorage.setItem("posts", JSON.stringify(posts));
  console.log(posts);
  updatePost();
  inputVal.value = "";
  alert("Posted Succesfully!!");
}

const postContainer = document.getElementById("post-con");
const postsArray = [
  {
    username: "Lebron James",
    post: "This is the first post.",
  },
  {
    username: "Albert Einstein",
    post: "A great day to share thoughts.",
  },
  {
    username: "Elon musk",
    post: "Coding is so much fun!",
  },
];

function toggleDelete(index) {
  const del = document.getElementsByClassName("del");
  if (del[index].style.display === "none") {
    del[index].style.display = "block";
  } else {
    del[index].style.display = "none";
  }
}

let posts = JSON.parse(localStorage.getItem("posts"));

function updatePost() {
  posts = JSON.parse(localStorage.getItem("posts"));
  postContainer.innerHTML = "";

  for (let i = 0; i < postsArray.length; i++) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <div class="main-con">
        <div class="profile"></div>
        <div class="post-content">
          <a href="#">${postsArray[i].username}</a>
          <p>${postsArray[i].post}</p>
          <div class="post-icons">
            <div class="post-icon-con">
              <img src="images/heart.png" alt="heart" />
            </div>
            <div class="post-icon-con">
              <img src="images/chat-bubble.png" alt="chat-bubble" />
            </div>
            <div class="post-icon-con">
              <img src="images/repost.png" alt="repost" />
            </div>
            <div class="post-icon-con">
              <img src="images/share.png" alt="share" />
            </div>
          </div>
        </div>
        </div>
        <div class="dots">
        <div class="menu-dots" onclick="toggleDelete(${i})"><img src="images/menu-dots.png" alt="menu-dots" /></div>
        <div class="del" onclick="deletePost(${i})">delete</div>
        </div>
      `;

    postContainer.appendChild(postElement);
  }

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <div class="main-con">
        <div class="profile"></div>
        <div class="post-content">
     
          <a href="#">${post.username}</a>
          <p>${post.post}</p>
          <div class="post-icons">
            <div class="post-icon-con">
              <img src="images/heart.png" alt="heart" />
            </div>
            <div class="post-icon-con">
              <img src="images/chat-bubble.png" alt="chat-bubble" />
            </div>
            <div class="post-icon-con">
              <img src="images/repost.png" alt="repost" />
            </div>
            <div class="post-icon-con">
              <img src="images/share.png" alt="share" />
            </div>
          </div>
          </div>
        </div>
        <div class="dots">
        <div class="menu-dots" onclick="toggleDelete(${
          i + postsArray.length
        })"><img src="images/menu-dots.png" alt="menu-dots" /></div>
        <div class="del" onclick="deletePost(${i})">delete</div>
        </div>
        
      `;

    postContainer.appendChild(postElement);
  }
}

updatePost();

function deletePost(index) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.splice(index, 1);

  localStorage.setItem("posts", JSON.stringify(posts));

  updatePost();
  userPostUpdate();
}

const userPost = document.getElementById("user-post");

function userPostUpdate() {
  userPost.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post.username === userNameHolder) {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
    <div class="main-con">
        <div class="profile"></div>
        <div class="post-content">
     
          <a href="#">${post.username}</a>
          <p>${post.post}</p>
          <div class="post-icons">
            <div class="post-icon-con">
              <img src="images/heart.png" alt="heart" />
            </div>
            <div class="post-icon-con">
              <img src="images/chat-bubble.png" alt="chat-bubble" />
            </div>
            <div class="post-icon-con">
              <img src="images/repost.png" alt="repost" />
            </div>
            <div class="post-icon-con">
              <img src="images/share.png" alt="share" />
            </div>
          </div>
          </div>
        </div>
        <div class="dots">
        <div class="menu-dots" onclick="toggleDelete(${
          i + postsArray.length
        })"><img src="images/menu-dots.png" alt="menu-dots" /></div>
        <div class="del" onclick="deletePost(${i})">delete</div>
        </div>
      `;
      userPost.appendChild(postElement);
    }
  }
}

userPostUpdate();
