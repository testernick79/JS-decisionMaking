let phoneNumberPresent = true;
let needsNumber;
switch(phoneNumberPresent) {
    case true:
    needsNumber = false;
        break;
    case false:
      needsNumber = true;
        break;
    default:
      needsNumber = 'Try Again';  

}

let selectedNumber = 23;
let output;
switch(selectedNumber) {
  
  case 23:
    selectedNumber = 23;
    output = "That's exactly what I was thinking, spoooky!";
    break;
  
  case 9:
    selectedNumber = 9;
    output = "How did you know?";
    break;
  
  default:
    output = "Better luck next time.";
}