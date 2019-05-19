let day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;

    case 2:
        dayName = 'Monday';
        break;

    case 3:
        dayName = 'Tuesday';
        break;

    case 4:
        dayName = 'Wednesday';
        break;

    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
        default:
    case 8:
        dayName = 'NOT A DAY';
        
}

let grade = 9;
let schoolGrade;
let e = 'Elementry School';
let m = 'Middle School';
let h = 'High School';

switch (grade) {
    case 1:
        schoolGrade = e;
        break;

    case 2:
        schoolGrade = e;
        break;

    case 3:
        schoolGrade = e;
        break;

    case 4:
        schoolGrade = e;
        break;

    case 5:
        schoolGrade = e;
        break;

    case 6:
        schoolGrade = m;
        break;

    case 7:
        schoolGrade = m;
        break;

    case 8:
        schoolGrade = m;
        break;

    case 9:
        schoolGrade = h;
        break;

    case 10:
        schoolGrade = h;
        break;

    case 11:
        schoolGrade = h;
        break;

    case 12:
        schoolGrade = h;
        break;
        default:
        schoolGrade = 'NOT A SCHOOL';


}

let text1 = 'Today is Saturday!';
let text2 = 'Today is Sunday, God bless you!';
let text3 = 'Today is a weekday, you should be at school/work!';

switch (new Date().getDay()) {
    case 6:
        text = text1;
        break;

    case 0:
        text = text2;
        break;

    default:
        text = text3;
}

console.log(dayName);
console.log(schoolGrade);
console.log(text);