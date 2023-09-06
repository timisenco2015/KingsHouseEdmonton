


var buttonFunc = function() {

    const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.remove("joinUsSubmitDefaultBtn");
    btn.classList.add("joinUsSubmitActiveBtn");
};
  }
  
  buttonFunc();
  
  
  $(document).ready(buttonFunc);