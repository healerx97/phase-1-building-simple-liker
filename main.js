// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function clickHeart(e) {
  let heart = e.target
  mimicServerCall("sampleURL")
  .then(function() {
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = ""
    }
  })
  .catch(function() {
    document.querySelector("#modal").className = ""
    setTimeout(function(){
      document.querySelector("#modal").className = "hidden"
    }, 3000)
  })
}
let hearts = document.getElementsByClassName('like-glyph')

document.addEventListener("DOMContentLoaded", function() {
  for (let elem of hearts) {
  elem.addEventListener("click", clickHeart)
}})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
