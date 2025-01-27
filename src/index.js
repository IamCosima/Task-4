//For getting user input
const ps = require("prompt-sync");
const prompt = ps({sigint: true})

//Variables
var M = 0; //M = Total monthly payment
var P = 0; //P = The total amount of your loan
var I = 0; //I = Your interest rate, as a monthly percentage
var N = 0; //N = The total amount of months in your timeline for paying off your mortgage
//Formula used 
//M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]. 
//What each variable means
//M = Total monthly payment
//P = The total amount of your loan
//I = Your interest rate, as a monthly percentage
//N = The total amount of months in your timeline for paying off your mortgage


//User input Enter all values needed for calculation
console.log("P = The total amount of your loan");
P = prompt("Enter total loan: ")
console.log("I = Your interest rate, as a monthly percentage");
I = prompt("Enter intrest rate: ")
console.log("N = The total amount of months in your timeline for paying off your mortgage");
N = prompt("Enter Number of Months: ");

//console.log("M = Total monthly payment");
//M = prompt("Enter Payment");

//If the user inputed monthly percentage as just the percentage value in decimals it will then be converted to a mothly rate E.g. 0,05 will then become 0.00416
if (I > 0) {
  I = I/12;
  Repayment(I,N,P);
  console.log(I);
}
//If the user inputed the values correctly then the previous step is not needed
else{
  Repayment(I,N,P);
}
//Function where the loan repayment will be calculated
function Repayment(intrest,Months,TotalLoan) { 
    M = TotalLoan * ([intrest * ((1 + intrest)**(Months))] / [ ((1 + intrest)**(Months)- 1)]) ;
    console.log(M + "€" );

    }

