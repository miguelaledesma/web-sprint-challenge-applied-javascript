// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import axios from "axios";







const Card = (article) => {
  
const cardDiv = document.createElement('div'); 
const headlineDiv = document.createElement('div'); 
const author = document.createElement('div'); 
const divImageContainer = document.createElement('div'); 
const image = document.createElement('img');
const authorSpan = document.createElement('span'); 


cardDiv.classList.add('card'); 
headlineDiv.classList.add('headline'); 
author.classList.add('author'); 
divImageContainer.classList.add('img-container'); 

headlineDiv.textContent = article.headline; 
image.src = article.authorPhoto; 
authorSpan.textContent = `Written by: ${article.authorName}`; 



cardDiv.appendChild(headlineDiv); 
cardDiv.appendChild(author); 
author.appendChild(divImageContainer); 
divImageContainer.appendChild(image); 
author.appendChild(authorSpan); 


cardDiv.addEventListener('click', () =>{
  console.log(article.headline); 
})



return cardDiv; 


}



// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  

const cardAppender = (selector) => {
  const selectedCard = document.querySelector(selector); 
  axios.get('http://localhost:5000/api/articles').then(resp =>{
    const javascript = resp.data.articles.javascript
    javascript.forEach(element =>{
      selectedCard.appendChild(Card(element))
    })
    const bootstrap = resp.data.articles.bootstrap
    bootstrap.forEach(element => {
      selectedCard.appendChild(Card(element))
    })
    const technology = resp.data.articles.technology
    technology.forEach(element => {
      selectedCard.appendChild(Card(element))
    })
    const jquery = resp.data.articles.jquery
    jquery.forEach(element => {
      selectedCard.appendChild(Card(element))
    })
    const node = resp.data.articles.node
    node.forEach(element => {
      selectedCard.appendChild(Card(element))
    })
  })
  
  .catch(err =>{
    console.error(err)
  })

}
  


export { Card, cardAppender }
