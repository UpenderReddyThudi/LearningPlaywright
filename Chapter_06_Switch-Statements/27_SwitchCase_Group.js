//Switch Case with Group

let Day = "Sunday";

switch (Day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
        console.log(Day, ' - Go to Office');
         break;
    case "Thursday":
    case "Friday":
        console.log(Day, ' - Do Work From Home');
        break;
    case "Saturday":
    case "Sunday":
         console.log(Day, ' - Holiday');
        break;
    default:
        console.log(Day, ' - Inavlid Entry');
}