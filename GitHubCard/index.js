/* eslint-disable no-unused-vars */
import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name> 
*/




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const URL = `https://api.github.com/users/rstott87`

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"]



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = (obj) => {

  const card = document.createElement('div');
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const userActualName = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const linkToUsersPage = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.classList.add('card');
  userImg.src = `${obj.data.avatar_url}`
  cardInfo.classList.add('card-info')
  userActualName.classList.add('name')
  userActualName.textContent = `${obj.data.name}`
  userName.classList.add('username')
  userName.textContent = `${obj.data.login}`
  location.textContent = `${obj.data.location}`
  profile.textContent = "Profile: ";
  linkToUsersPage.href = `${obj.data.html_url}`
  followers.textContent = `Followers: ${obj.data.followers} `
  following.textContent = `Follwing: ${obj.data.following} `
  bio.textContent = ` Bio: ${obj.data.bio}`

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userActualName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(linkToUsersPage)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio);

  return card; 
}



const cards = document.querySelector('.cards');

function createCards() {
  axios.get(URL)
    .then(objData => {
      cards.appendChild(cardMaker(objData));
    })
    .catch(err => {
      console.log('error');
    });
}
createCards()

followersArray.forEach((ghUsername)=>{
  const othersURL = `https://api.github.com/users/${ghUsername}`
  axios.get(othersURL)
  .then(objData => {
    cards.appendChild(cardMaker(objData));
  })
  .catch(err => {
    console.log('error');
  });
 })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
