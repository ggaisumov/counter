//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


//set initial count
let count = 0;


btns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    //determinam actiunea bazata pe clasa butonului
    if (this.classList.contains("decrease")) {
      count--;
    } else if (this.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Actualizam culoarea textului bazat pe valoarea lui ca count
    if (count > 0) {
      value.style.color = "green"
    } else if (count < 0) {
      value.style.color = "red"
    } else {
      value.style.color = "black"
    }

    //Actualizam textul afisat in elementul cu id-ul value
    value.textContent = count;
  });
});