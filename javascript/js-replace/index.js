var UserText = prompt("Enter Your Text Here").toLowerCase();
var UserNeed = +prompt("Enter 1 For Find or 2 For Replace");

if (UserNeed === 1) {
    var findWord = prompt("Enter Word to Find").toLowerCase();

    var index = UserText.indexOf(findWord);

    if (index !== -1) {
        alert(`Your word is at index ${index}`);
    } else {
        alert("Word not found!");
    }

} else if (UserNeed === 2) {
    var RepWord = prompt("Enter Word to Replace").toLowerCase();
    var RepWordOne = prompt("Enter New Word to Replace With").toLowerCase();

    var rep = UserText.replace(RepWord, RepWordOne);
    
    alert(`Your new text is: ${rep}`);
} else {
    alert("Enter Correct Number");
}
    