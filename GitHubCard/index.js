/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function getUserData(username) {

  const cards = document.querySelector('.cards');

  axios.get(`https://api.github.com/users/${username}`)
    .then(function(response) {
      console.log(response);
      cards.appendChild(createUserCard(response.data));
    })
    .catch(function(error) {
      console.error(error);
    })
}

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['Pergamene', 'rhyeen', 'Afialydia', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
for (follower of followersArray) {
  getUserData(follower);
}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function createUserCard(userData) {
  const card = document.createElement('div');
  card.classList.add('card');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', userData.avatar_url);
  card.appendChild(profilePic);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = userData.name;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = userData.login;
  cardInfo.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${userData.location}`;
  cardInfo.appendChild(location);
 
  const profile = document.createElement('p');
  profile.textContent = `Profile: `;
  cardInfo.appendChild(profile);
  
  const userLink = document.createElement('a');
  userLink.setAttribute('href', userData.url);
  userLink.textContent = userData.url;
  profile.appendChild(userLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${userData.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${userData.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${userData.bio}`;
  cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

  return card;
}
