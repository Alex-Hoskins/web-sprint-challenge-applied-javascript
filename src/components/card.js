import axios from 'axios';

const Card = (article) => {

  const card1 = document.createElement('div')
  const headline1= document.createElement('div')
  const author1= document.createElement('div')
  const imgContainer1= document.createElement('div')
  const img1= document.createElement('img')
  const authorName1= document.createElement('span')
  
  card1.appendChild(headline1);
  card1.appendChild(author1);
  author1.appendChild(imgContainer1);
  author1.appendChild(authorName1);
  imgContainer1.appendChild(img1);
  
  card1.classList.add('card')
  headline1.classList.add('headline')
  author1.classList.add('author')
  imgContainer1.classList.add('img-container')

  headline1.textContent=`${article.headline}`
  img1.src=`${article.authorPhoto}`
  authorName1.textContent=`By ${article.authorName}`

  card1.addEventListener('click', () => {
    console.log(`${article.headline}`)
  })

  return card1;


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
  //
}




const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  // take response and pass into function
  // create variable equal to return
  // Add to dom
  
  axios.get('http://localhost:5000/api/articles')
  .then(resp=>{
    console.log(resp);
    for(let i = 0; i <resp.data.articles.bootstrap.length;i++){
      const newCard = Card(resp.data.articles.bootstrap[i])
      document.querySelector(selector).appendChild(newCard);
    }
    for(let i = 0; i <resp.data.articles.javascript.length;i++){
      const newCard = Card(resp.data.articles.javascript[i])
      document.querySelector(selector).appendChild(newCard);
    }
    for(let i = 0; i <resp.data.articles.jquery.length;i++){
      const newCard = Card(resp.data.articles.jquery[i])
      document.querySelector(selector).appendChild(newCard);
    }
    for(let i = 0; i <resp.data.articles.node.length;i++){
      const newCard = Card(resp.data.articles.node[i])
      document.querySelector(selector).appendChild(newCard);
    }
    for(let i = 0; i <resp.data.articles.technology.length;i++){
      const newCard = Card(resp.data.articles.technology[i])
      document.querySelector(selector).appendChild(newCard);
    }
  })
}

export { Card, cardAppender }
