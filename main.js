let arrayOfPosts;
let arrayOfUsers = [];

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  //getPosts()
  //getUser();
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
//get single user post
const getPosts = () =>{
  let newPost;
  fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(posts => arrayOfUsers.push(posts))
    
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfUsers)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfUsers.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Name: ${name}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })

}
  //get 5 user post
const getUser = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(posts => arrayOfPost = posts)
}
  //display 5 user post
const displayUsers = () =>{
  console.log(arrayOfPost);
}