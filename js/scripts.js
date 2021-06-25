var pizzaPrices = {
  large: 1000,
  medium: 800,
  small: 500,
};

var extraToppins = {
  extramushroom: 300,
  extrabbqchicken: 300,
  extrachickentikka: 200,
};
var pizza ={
  cheeseburger:"Cheese Burger",
  chickenandbeefpepperoni:"Chicken and Beef Pepperoni",
  chickenhawaiian:"Chicken Hawaiian",
  chickenmaconbbq:"Chicken Macon BBQ",
  meatdelux:"Meat Delux",
  periPerichicken:"Periperi Chicken",
  regina:"Regina",
  vegTikka:"Veg Tikka",
  bbqsteak:"BBQ Steak"
}

function clientsOrder(menu, sizes,toppins) {
  this.pizza = menu;
  this.sizes = sizes;
  this.toppins = toppins;
  this.hash = 1
  this.quantity = 1
  this.total = 1
}
var clientsOrderArray=[]

$(document).ready(function(){
  $(btn).click(function(){
    var menu = $("#menu1").val();
    var sizes = $("#menu2").val();

    var toppings = [];
      $.each($("input[class='form-check-input']:checked"), function(){
        toppings.push($(this).val());
      });
      toppings.pop();
      var order = new clientsOrder(menu,sizes,toppings);
      console.log(order)
      clientsOrderArray.push(order);
      console.log(clientsOrderArray);



  });
});

var populateTable = function(){
  $('#table').bootstrapTable({});
    function load(){

    }
}
