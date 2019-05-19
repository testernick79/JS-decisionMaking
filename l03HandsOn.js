/*
Create a switch..case statement to check against highSchoolGrade within the switch statement. 
Then, within the case statements, set yourGrade to the appropriate string. 
Add your switch..case code to the provided updateGrade() function:
*/
let highSchoolGrade = 11;
let yourGrade;

function updateGrade(){
switch(yourGrade) {
    //in case 9, assign "Freshman" to the yourGrade variable
    case 9:
        yourGrade = "Freshman";
        break;
    //in case 10, assign "Sophomore" to the yourGrade variable
    case 10: 
        yourGrade = "Sophmore";
        break;
    //in case 11, assign "Junior" to the yourGrade variable
    case 11:
        yourGrade = "Junior";
        break;
    //in case 12, assign "Senior" to the yourGrade variable
    case 12:
        yourGrade = "Senior";
        break;
    //include a default case that assigns "Invalid" to yourGrade.
    default:
        yourGrade = "Invalid";
}
/*
Convert the following if..else into a ternary within the provided name() function. 
Don't forget to continue to use the document.getElementById() statements within the if..else blocks.
*/

/*
function name() {
  let firstName;
  if (firstName === "John") {
    document.getElementById("demo").innerHTML = "Hello John!";
  }
  else {
    document.getElementById("demo").innerHTML = "Hello Human!";
  }
}
*/
}

function name(){
  let firstName;

   document.getElementById("demo").innerHTML = firstName === "john" ? "Hello John" : "Hello Human";

}
