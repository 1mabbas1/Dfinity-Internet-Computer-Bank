import {mazebank} from "../../declarations/mazebank";

window.addEventListener("load", async function() {
  const currentVal = await mazebank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentVal *100)/100;
} )

document.querySelector("form").addEventListener("submit", async function (event){
  event.preventDefault
  const button = event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute('disabled', true);

  if (document.getElementById('input-amount').value.length != 0){
    await mazebank.topUp(inputAmount);
  } else if (document.getElementById('withdrawal-amount').value.length != 0){
     await mazebank.withdrawal(outputAmount)
  };
  

  const currentVal = await mazebank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentVal *100)/100;

  document.getElementById("input-amount").value = ''
    document.getElementById("withdrawal-amount").value = ''

  button.removeAttribute('disabled');

})