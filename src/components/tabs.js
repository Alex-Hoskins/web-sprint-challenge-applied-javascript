import axios from 'axios';

const Tabs = (topics) => {
  const topics1=document.createElement('div');
  topics1.classList.add('topics');
  for (let i = 0; i < topics.length; i++) {
    const allTabs=document.createElement('div');
    allTabs.classList.add('tab')
    allTabs.textContent=`${topics[i]}`
    topics1.appendChild(allTabs);
  }
  
  return topics1

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const selector2 = document.querySelector(`${selector}`)
  axios.get('http://localhost:5000/api/topics')
  .then(resp=>{
    console.log(resp)
    // take response and pass into function
    const newTab= Tabs(resp.data.topics);
    // create variable equal to return
    selector2.appendChild(newTab)
    // Add to dom
  })
}

export { Tabs, tabsAppender }
