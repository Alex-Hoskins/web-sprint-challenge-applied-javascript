
const Header = (title, date, temp) => {
  const header1 =document.createElement('div');
  const date1 =document.createElement('span');
  const title1 =document.createElement('h1');
  const temperature1 =document.createElement('span');

  header1.appendChild(date1);
  header1.appendChild(title1);
  header1.appendChild(temperature1);

  header1.classList.add('header');
  date1.classList.add('date');
  temperature1.classList.add('temp');

  date1.textContent=`${date}`;
  title1.textContent=`${title}`;
  temperature1.textContent=`${temp}`;

  return header1

}


// console.log(Header)

// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selector1 = document.querySelector(`${selector}`)
  selector1.appendChild(Header('title', 'date','temp'));
}

export { Header, headerAppender }
