const home = document.getElementById("home");
const userAccount = document.getElementById("user-account");

function navPage(param) {
  if (param === "home") {
    home.style.display = "block";
    userAccount.style.display = "none";
  } else {
    home.style.display = "none";
    userAccount.style.display = "flex";
  }
}

const userNameHolder = localStorage.getItem("currentUsername");
const userName = document.getElementById("name");
userName.textContent = userNameHolder;

const inputVal = document.getElementById("postInput");

function createPost() {
  const newPost = {
    username: userNameHolder,
    post: inputVal.value,
  };

  postsArray.push(newPost);
  console.log(postsArray);
  loadPost();
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

function loadPost() {
  for (let i = 0; i <= postsArray.length; i++) {
    const postElement = document.createElement("div");
    postElement.className = "post";

    postElement.innerHTML = `
      <div class="profile"></div>
      <div class="post-content">
        <a href="#">${postsArray[i].username}</a>
        <p>
        ${postsArray[i].post}
        </p>
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
    `;

    postContainer.appendChild(postElement);
  }
}

loadPost();
