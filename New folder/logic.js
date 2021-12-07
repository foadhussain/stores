/* Write code for the following problem, push your code to github and send us your github link as soon as you can. Use whatever framework you want to.
Say that you have 5 stores and 5 recipes. Assume that all stores are at the same distance from you(travel cost and time are the same to go to multiple stores too). Each recipe has different ingredients. Each store has coupons for different ingredients with their own discount amount. Write code that will display the set of stores that would cost minimum for a recipe.
*/


function coup(){
    var item = document.getElementsByTagName("BUTTON")
    for(var i=0;i<item;i++){
        console.log(item.innerText);
    }
    
    var dis_a = 15;
    var dis_b = 20;
    var discount;
    if(item=="daal")
    discount=dis_a;
    else
    discount=dis_b;
    
    document.getElementById("coupon").innerText = `you have ${discount}% off on ${item}`;
}
