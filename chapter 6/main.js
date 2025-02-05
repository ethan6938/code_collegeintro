var myName = "Ethan";
var sheepCounted = 0;
var family = ["rayma", "marc", "diven"]

while (sheepCounted < 10) {
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
};
console.log("Zzzzzzzzzzz");


if (myName.length > 5) {
    //console.log("Hello" + myName)
} else if (myName.length === 2) {
    console.log(myName + "cant be that short.")
} else {
    console.log("Eish")
};

for (var goatsCounted = 0; goatsCounted < 10; goatsCounted++) {
    console.log("I have counted " + goatsCounted + " goatsCounted!");
}
for (var i = 0; i < family.length; i++) {
    console.log("This is my family member"+ family[i])
}