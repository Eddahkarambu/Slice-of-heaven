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
var delivery = false;
function clientsOrder(menu, sizes,toppins) {
  this.pizza = menu;
  this.size = sizes;
  this.toppins = toppins;
  this.hash = 1;
  this.quantity = 1;
  this.total = this.calculateTotal();
}
clientsOrder.prototype.calculateTotal = function(){
  var pizzaPrice = pizzaPrices[this.size];
  var price = 0
  this.toppins.forEach(toppin => {
    price += extraToppins[toppin]

  });
  return pizzaPrice + price
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
      clientsOrderArray.push(order);
      populateTable(clientsOrderArray)

  });
  $("#btnn").click(function(){
    $(".all").show();
    $(".header3").show();
    $(".col").show();
    $(".Total").show();
    $(".details").hide();
    $(".delivery").show();
    $(".cash").show();
    $(".CHECKOUT").show();

  })
  var rad = document.getElementById("flexRadioDefault1");
  rad.addEventListener('change', function(){
    $(".header3").show();
    $(".col").show();
    $(".Total").show();
    $(".delivery").show();
    $(".cash").show();
    $(".CHECKOUT").show();
    $(".details").show();
    delivery = true;


  });
  var rade = document.getElementById("flexRadioDefault2");
  rade.addEventListener('change', function(){
    $(".header3").show();
    $(".col").show();
    $(".Total").show();
    $(".details").hide();
    $(".delivery").show();
    $(".cash").show();
    $(".CHECKOUT").show();
    delivery = false;


  });

  $("#btnnn").click(function(){
    var tota = calculateTotal();
    var div = document.getElementById('Total');
    div.innerHTML += 'TOTAL COST '
    div.innerHTML += tota;
    $('.toast').toast('show')
  });
});






  var calculateTotal = function(){
    var total=0
    clientsOrderArray.forEach((totals) => {
      total  += totals.total
    });
    if(delivery) {
      total += 200;
    }
    return total;

}



var populateTable = function(data){
  $('#table').bootstrapTable({});
    function load(){
      $('#table').bootstrapTable("load", {data});

    }
    function reload(){
      $('#table').bootstrapTable("load", data);

    }
    load();
}
