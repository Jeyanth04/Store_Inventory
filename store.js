console.log("\n\n10 % Discount on Order above Rs.500\n");
console.log("+-------+------MENU-------+--------+");
console.log("|S.no   |Name             |Prize   |");
console.log("+-------+-----------------+--------+");
console.log("|1.     |Strawberry       |Rs.110  |");
console.log("+-------+-----------------+--------+");
console.log("|2.     |Vanilla          |Rs.120  |");
console.log("+-------+-----------------+--------+");
console.log("|3.     |Chocolate        |Rs.120  |");
console.log("+-------+-----------------+--------+");
console.log("|4.     |Mango            |Rs.150  |");
console.log("+-------+-----------------+--------+\n\n");

n=prompt("Enter the S.no (5 to stop the Order) :")
n=Number(n)
let s=0
let  f=0
while (f==0){
    switch(n){
        case 1:
            s=s+100
            break;
        case 2:
            s=s+200
            break;
        case 3:
            s=s+300
            break;
        case 4:
            s=s+450
            break;
        case 5:
            f=1
            break;
        default :
        console.log("Enter the Correct choice!!!")
    }
    if (f==0){
        console.log("Current Total  : Rs.",s)
        n=prompt("Enter the S.no (5 to stop the Order) :")
        n=Number(n)
    }
}


    console.log("\n\n\mFinal  prize : Rs.",s);