"use strict";
const score = document.querySelectorAll(".score");
const submit = document.querySelector(".submit");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
let rating;

console.log();
// set rating to the score clicked
score.forEach((num) => {
  num.addEventListener("click", () => {
    rating = num.innerHTML;
  });
});

// when submit button is clicked, replace inner html with the rating in place
submit.addEventListener("click", () => {
  const html = `<main class="flip grid">

    <picture 
      ><img class="print" src="./images/illustration-thank-you.svg" alt=""
    /></picture>
    <div class="light-bg answer">
      <p>You selected ${rating} out of 5</p>
    </div>
    <h1 class="big thanks">Thank you!</h1>
    <p class="message">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
    </main>`;
  if (!rating) {
    modal.classList.remove("hidden");
    return;
  }
  document.querySelector(".container").innerHTML = html;
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
