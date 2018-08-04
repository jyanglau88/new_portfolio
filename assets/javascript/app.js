// Initialize Firebase
var config = {
  apiKey: "AIzaSyArLZ90uRCAEL3g7nuIha2W_y3sX0tuotQ",
  authDomain: "myportfolio-70358.firebaseapp.com",
  databaseURL: "https://myportfolio-70358.firebaseio.com",
  projectId: "myportfolio-70358",
  storageBucket: "myportfolio-70358.appspot.com",
  messagingSenderId: "1068096707768"
};
firebase.initializeApp(config);


var database = firebase.database();

$("#form-submit").on("click", function() {
    event.preventDefault();
    database.ref().push({
        name: $("#exampleFormControlInput1").val(),
        email: $("#exampleFormControlInput2").val().trim(),
        message: $("#exampleFormControlTextarea1").val()
    });
});

//Navbar Google Search not working...
$("#google-search").on("click", ".btn", function() {
    var searchString = $(this).attr("data");
    window.open("http://www.google.com/search?q=" + searchString);
});


// function googleSearch() {
// searchString = document.getElementById("search-box");
// input.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("googleButton").click();
//     }
//     window.open('http://www.google.com/search?q=' + searchString);
    
// });
