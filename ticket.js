let age = 60;
let isStudent = false;
let ticketFare = 800;
let payAmount;

if(age<10){
  payAmount = 0;
}
else if (isStudent===true){
  payAmount=ticketFare*0.5
}
else if(age>=60){
  payAmount=ticketFare*.85
}
else{
  payAmount=ticketFare;
}
console.log("Ticket:", payAmount, "tk")