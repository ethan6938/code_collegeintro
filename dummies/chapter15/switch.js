//Listing 15.1

var myNumber = prompt("Enter your favorite day of the week!").toLowerCase();
var theResponse;

switch (myNumber) {
    case "monday":
        theResponse = "Ack!";
        break;
    case "tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Halfway there!";
        break;
    case "thursday":
        theResponse = "It's the new Friday!";
        break;
    case "friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "saturday":
        theResponse = "What a day!";
        break;
    case "sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven't heard of that one!";
        break;
}

alert(theResponse);





// var myName = prompt("what is the favorite car!"). toLowerCase();
// var theResponse;

// switch (myName) {
//     case "honda":
//         theResponse = "oh nice!";
//         break;
//     case "audi":
//         theResponse = "that is a nice car";
//         break;
//     case "ford":
//         theResponse = "nice";
//         break;    
// }

// alert(theResponse);