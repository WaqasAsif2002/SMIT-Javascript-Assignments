// var fName = prompt("Enter Your First Name Here")
// var LName = prompt("Enter Your Last Name Here")
// var fullname = (`Your FUll Name is : ${fName} ${LName}`)
// alert(fullname)

// var inputMob = prompt("Enter Your favorite Mobile Name Here")
// var lenofMob = inputMob.length;
// alert(`Your Mobile Name String Length is : ${lenofMob}`)


// var Country = "Pakistani"
// var lenPak = Country.indexOf('n')
// alert(`Index of "n": ${lenPak}`)

// var Greet = "Hello World"
// var ReturnGreet = Greet.lastIndexOf('l')
// alert(`last Index of "l": ${ReturnGreet}`)


// var Country = "Pakistani"
// var findi = Country[3]
// alert(`At country 3rd Index is: ${findi}`)

// // concat method 
// var fNamecon = prompt("Enter Your First Name Here")
// var LNamecon = prompt("Enter Your Last Name Here")
// var fullnamecon = fNamecon.concat(LNamecon)
// alert(fullnamecon)

// var city = "hyderabad"
// var repCity = city.replace("hyder" ,"Islam")

// alert(`Replace Before : ${city}
//     Replace after ${repCity}`)

// var message = 'Ali and Sami are best friends. They play cricket and football together'
// RepMsg = message.replaceAll("and", "&")
// alert(RepMsg)

// var Wordstring = "472"
// typeofstring = typeof(Wordstring)
// numstring = parseInt(Wordstring)
// typeofnum = typeof(numstring)
// document.write(`The type of "472" is ${typeofstring} <br>
//      and the type ${numstring} after parseint convert is ${typeofnum}`)

// var putInp = prompt("Enter Anything that convert whole to upper case");
// var ContoUpper = putInp.toUpperCase();
// alert(`Your Input in Uppercase is: ${ContoUpper}`);

// var msCon =prompt( 'Enter anything that is lowercase' )
// Repcon = msCon.replace(msCon[0], msCon[0].toUpperCase())
// alert(Repcon)

// var num = 3536 ;

// var conNum = num.toString()

// typeconNum = typeof(conNum)
// alert(`convert to string ${conNum} type of : ${typeconNum} `)


//     var userinputName = prompt("Enter Your Name ");
//     var arrInp = [33,44,46,64]
//   var valid = true

//   for(var i=0; i< userinputName.length; i++) {
//     var charcode = userinputName.charCodeAt(i);
  
//     if (arrInp.includes(charcode)) {
//         valid = false;
//         break;
//     }
//   }
//   if (!valid) {
//     alert("Your Name is Invalid Because Your Name have @ ! , . in Name")
//   }
//   else{
// alert("Your Name is Correct")
//   }

// var InputItem = prompt("Enter bakery item You Want to Order Sir/mam").toLowerCase()
//  var Arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
//  var CheckIndex = Arr.indexOf(InputItem)  
// if( CheckIndex !== -1 )
// {
//     alert(`Your Item ${InputItem} is Available in Bakery At Index ${CheckIndex} `)

// }
// else{
//     alert(`Sorry We Dont Have ${InputItem}`)
// }

// var UserPass = prompt("Enter Password Here ").toLowerCase()
    
// for(var i =0;i<UserPass.length;i++)
//     var check=UserPass.charCodeAt(0)

// if(check >=48 || check<= 57  && check >= 65 ||  check <= 90  && check >= 97 || check <= 122 )
// {
   
    
//     if (!(check >= 48 && check <= 57)) { // Check if the first character is a number
//         alert(`Your Password is Correct ${UserPass}`)
//     }


//     else{
//         alert('Your Password is not Correct Avoid Number in Start')
//     }


// }
// else{
//     alert('Your Password is Not Correct Your add Special Character which is not Acceptable')
// }
// var university = 'University of Karachi';
// var splituni = university.split(""); 

// for (var i = 0; i < splituni.length; i++) {
//     document.write(`${splituni[i]}<br>`); 
// }





// var LastElphInp =prompt("Enter a Name or Any String")
// var abcEle = LastElphInp.lastIndexOf()
// var ele = LastElphInp.slice(abcEle)
// alert(ele)



// const text = "The quick brown fox jumps over the lazy dog".toLowerCase()


// const words = text.split(" ");

// let count = 0;

// for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// alert(`The word 'the' appears ${count} times.`);







// var PostInt = +prompt("Enter a Positive Integer")
// var round = Math.round(PostInt)
// var floor = Math.floor(PostInt)
// var ceil = Math.ceil(PostInt)

// if(PostInt >= 0)
// {

// alert(`You Input a : ${PostInt} 
//     Round Of Value is ${round} 
//      Floor Of Value is ${floor}
//       Ceil Of Value is ${ceil}
//     `)

// }
// else{
//     alert("Enter a Valid or Positive Number")
// }




// var PostInt2 = +prompt("Enter a Negative Integer")
// var round = Math.round(PostInt2)
// var floor = Math.floor(PostInt2)
// var ceil = Math.ceil(PostInt2)

// if(PostInt2 < 0)
// {

// alert(`You Input a : ${PostInt2} 
//     Round Of Value is ${round} 
//      Floor Of Value is ${floor}
//       Ceil Of Value is ${ceil}
//     `)

// }
// else{
//     alert("Enter a Valid or Negative Number")
// }


// var PostInt3 = +prompt("Enter a Number Integer to Check Absolute?")
// var absolute = Math.abs(PostInt3)
// alert(absolute)


// var dice= Math.random(1)*6
// var diceround= Math.ceil(dice)
// alert(  `Random dice Value: ${diceround}`)


// var toss= Math.random(0)*2

// var tossround= Math.ceil(toss)
// if (tossround === 1) {
//     alert(`Random Coin Value: ${tossround} Tail`)
//     }
// else {
//     alert(`Random Coin Value: ${tossround} Head`);
// }



// var randomNum = Math.random(0)*100
// var ran = Math.ceil(randomNum)
// alert(`Random Number Between 1 to 100 is : ${ran}`)



// var askNum = +prompt("Enter a Secret Number Between 1 to 10");
// var secNum = 3;

// if (askNum === secNum) {
//     if (askNum >= 1 && askNum <= 10) {
//         alert(`Congratulations! Your Secret Number is Correct`);
//     } 
// } else {
//     alert("Better Luck Next Time! Try Again");
// }


// var userInput = prompt("Apna weight darj karein (jaise 50, 50kgs, 50.2kgs, ya 50.2kilograms):");


// var weight = "";


// for (var i = 0; i < userInput.length; i++) {
//     var char = userInput[i];
 
//     if (char >= '0' && char <= '9' || char === '.') {
//         weight += char; 
//     }
// }


// if (weight) {
//     alert("Aapka weight hai: " + weight + " kgs");
// } else {
//     alert("Koi valid weight darj nahi kiya gaya. Please sahi format mein darj karein.");
// }
