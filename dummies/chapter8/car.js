var dreamCar = {
    make: "subaru",
    model: "wrx",
    color: "blue",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 5000
};

document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("pricetag"). innerHTML= dreamCar.price;
document.getElementById("body").innerHTML =dreamCar.make + dreamCar.model ;