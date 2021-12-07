/* Write code for the following problem, push your code to github and send us your github link as soon as you can. Use whatever framework you want to.
Say that you have 5 stores and 5 recipes. Assume that all stores are at the same distance from you(travel cost and time are the same to go to multiple stores too). Each recipe has different ingredients. Each store has coupons for different ingredients with their own discount amount. Write code that will display the set of stores that would cost minimum for a recipe.
*/

const hook = document.getElementsByClassName('whole')[0];

const coupons = [
  { item: "daal", discount: 20 },
  { item: "rice", discount: 12 },
  { item: "sauce", discount: 10 },
  { item: "pepper", discount: 66 },
  { item: "maggie", discount: 10 },
];

const storeAItems = [
  { item: "wheat", price: "650 Rs/-", value: 650 },
  { item: "daal", price: "80 Rs/-", value: 80 },
  { item: "meat", price: "80 Rs/-", value: 80 },
  { item: "spinach", price: "80 Rs/-", value: 80 },
];
const storeBItems = [
  { item: "rice", price: "30 Rs/-", value: 30 },
  { item: "wheat", price: "750 Rs/-", value: 750 },
  { item: "meat", price: "80 Rs/-", value: 80 },
  { item: "orange", price: "60 Rs/-", value: 60 },
];
const storeCItems = [
  { item: "pumpkin", price: "50 Rs/-", value: 50 },
  { item: "salt", price: "80 Rs/-", value: 80 },
  { item: "sauce", price: "30 Rs/-", value: 30 },
  
  { item: "corn", price: "80 Rs/-", value: 80 },
];
const storeDItems = [
  { item: "pepper", price: "20 Rs/-", value: 20 },
  { item: "sugar", price: "10 Rs/-", value: 10 },
  { item: "eggs", price: "80 Rs/-", value: 80 },
  { item: "beans", price: "80 Rs/-", value: 80 },
];

const storeEItems = [
  { item: "masala", price: "20 Rs/-", value: 20 },
  { item: "tomato", price: "30 Rs/-", value: 30 },
  { item: "macroni", price: "50 Rs/-", value: 50 },
  { item: "maggie", price: "80 Rs/-", value: 80 },
];

let storeACost = 0;
let storeBCost = 0;
let storeCCost = 0;
let storeDCost = 0;
let storeECost = 0;

function coup(event) {
  var discount = 0;
  let d = coupons.find((obj) => event.target.innerText.toLowerCase().includes(obj.item));
  if (d) discount = d.discount;
  document.getElementById("coupon").innerText = `you have ${discount}% off on ${event.target.innerText}`;
}

function showStoreAItems(){
  for (const ingredient of storeAItems) {
    hook.innerHTML += `<div class="container pos">
      <button type="butt  on" class="btn btn-secondary btn-lg btn-block" onclick="coup(event)">${ingredient.item} - ${ingredient.price}</button>
    </div>`;
  }
}
 
  function showStoreBItems(){
    for (const ingredient of storeBItems) {
      hook.innerHTML += `<div class="container pos">
        <button type="butt  on" class="btn btn-secondary btn-lg btn-block" onclick="coup(event)">${ingredient.item} - ${ingredient.price}</button>
      </div>`;
    }  
  }

    function showStoreCItems(){
      for (const ingredient of storeCItems) {
        hook.innerHTML += `<div class="container pos">
          <button type="butt  on" class="btn btn-secondary btn-lg btn-block" onclick="coup(event)">${ingredient.item} - ${ingredient.price}</button>
        </div>`;
      }
    }
      function showStoreDItems(){
        for (const ingredient of storeDItems) {
          hook.innerHTML += `<div class="container pos">
            <button type="butt  on" class="btn btn-secondary btn-lg btn-block" onclick="coup(event)">${ingredient.item} - ${ingredient.price}</button>
          </div>`;
        }
      }
        function showStoreEItems(){
          for (const ingredient of storeEItems) {
            hook.innerHTML += `<div class="container pos">
              <button type="butt  on" class="btn btn-secondary btn-lg btn-block" onclick="coup(event)">${ingredient.item} - ${ingredient.price}</button>
            </div>`;
          }
        }
      
    
  

