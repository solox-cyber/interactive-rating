const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton =   document.queryElementById(".submit");
document.queryElementById
const rateAgain = document.queryElementById(".rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.style.display = "block";
  })

  rates.forEach( rate => {
     rate.addEventListener("click",() =>{
        rating.innerHTML = rate.innerHTML;
     })
  }

  ) 