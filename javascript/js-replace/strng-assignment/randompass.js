var lengthpass = 7; 
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`][abcdefghijklmnopqrstuvwxyz@!#$%^&*(+?}|\\:;,?><"; 
// check =characters.length;
var Password = "";

for (var i = 0; i < lengthpass; i++) {
    var get = Math.floor(Math.random() * characters.length); //eg 0.4 * 85 = 34
    Password += characters[get];
}

alert(Password); 
// alert(check)