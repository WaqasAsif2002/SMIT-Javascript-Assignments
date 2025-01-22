var CurrntDate = new Date();
alert(CurrntDate);

var month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

var monthInAlp = month[CurrntDate.getMonth()]; 
alert(monthInAlp);


var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
var daysget = days[CurrntDate.getDay()]
alert(daysget)







    if (daysget === 'Sat' || daysget === 'Sun') {
        alert("Its a Fun Day")
    }
else{
    alert("Today is Not a Saturday Or Sunday")
}



if (CurrntDate > 0 || CurrntDate <= 14) {
    
    alert("First Fifteen Days of the Month")
}

else if(CurrntDate > 14 || CurrntDate <= 29 ){
    alert("Last Fifteen days of the Month")
}




var sec = CurrntDate.getTime()
var min = CurrntDate.getMinutes()

var Mincal = CurrntDate.getTime() / (1000*60)

alert(`Current Day Date time is: ${CurrntDate}
    Miliseconds from January 1 1970  is ${sec}
      Minutes from January 1 1970 is ${Mincal}
    `)
var min = CurrntDate.getMinutes()
alert(min)



var hours = CurrntDate.getHours(); 

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM"); 
}


var laterDate = new Date();
laterDate.setFullYear(2020);
laterDate.setMonth(11);
laterDate.setDate(31);
alert(laterDate);

var ramdanlast = new Date();
ramdanlast.setFullYear(2015);
ramdanlast.setMonth(6);
ramdanlast.setDate(18);

var remainday = CurrntDate.getTime() - ramdanlast.getTime();
daypas = remainday / (1000 * 60 * 60 * 24)
alert(Math.floor(daypas))


var remainSec = new Date();
remainSec.setFullYear(2015);
remainSec.setMonth(12);
remainSec.setDate(5);
    var secR = CurrntDate.getTime() - remainSec.getTime();
    var secReturn = secR / (1000 * 60)  
    alert(Math.floor(secReturn))




    var OneHourAhead = new Date(CurrntDate); 
    OneHourAhead.setHours(OneHourAhead.getHours() - 1); 
    
    alert(`The time is now: ${CurrntDate}
          1 Hour Ago is: ${OneHourAhead}`);



      var backYear = new Date();
      backYear.setFullYear(backYear.getFullYear() -100)
      alert(backYear)


var UserAge = +prompt("Enter your Birth Year to Calculate How old Are You Like 1991")
var NowYear = new Date();
var ageGet = NowYear.getFullYear() - UserAge
alert(`Your Birth Year is ${UserAge}
    Your Age is ${ageGet}`)


var CSName = "Waqas Asif"
var nmUnit =140
var chrgPU = 16
var RtrnPrice = nmUnit*chrgPU
var Latefee =350
var rtnLate = RtrnPrice+Latefee
document.write(`Customer Name: ${CSName} <br/>
    Current Month: ${monthInAlp} <br/>
    Unit of This Month: ${nmUnit} <br/>
    Per Unit Price: ${chrgPU}<br/>
    Net Bill Before Due Date is: ${RtrnPrice}<br/>
    Late Fee is: ${Latefee}<br/>
    Net Bill After Due Date is: ${rtnLate}
    `
)