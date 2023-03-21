let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let grade
// write Code For the Code challenge
    if (inputGrade <= 100 && inputGrade >= 80){
        grade = 'A';
    } else if (inputGrade <= 79 && inputGrade >= 60){
        grade = 'B';
    } else if (inputGrade <= 59 && inputGrade >= 50){
        grade = 'C';
    } else if (inputGrade <= 49 && inputGrade >= 40){
        grade = 'D';
    } else if (inpuGrade <= 39 && inputGrade >= 0){
        grade = 'E';      
}   else {
    grade = 'grade input NOT in range'
}
grade = grade 

document.getElementById('marks-id').append(grade)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)

// write Code For the Code challenge
let speed; 
let demeritPoints = 0;
let maxSpeed;
if (inputSpeed <70){
    maxSpeed = 'Ok';
} else {
    let demeritPoints = Math.floor((inputSpeed -70)/5)
    if(demeritPoints >= 12){
        maxSpeed = 'License Suspended'
    } else {
        maxSpeed = `points:${demeritPoints}`
    }
}


    document.getElementById('speed-id').append(maxSpeed)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
function netPayCalculator(gPay) {
    let grossPay = gPay - 2400;
    let paye = 0;
    let nssf = gPay * 0.06; //6% of pensionable pay is nssf
    let nhif = 0;
    // calculate PAYE with the taxable income provided
    if (grossPay <= 24000){
        paye = grossPay * 0.1
    } else if (grossPay >= 24001 && grossPay <= 32333){
        paye = grossPay * 0.25
    }else if (grossPay > 32333){
        paye = grossPay * 0.3
    }
// based on gross salary
if (gPay <= 5999){
    nhif = 150;
} else if (gPay <= 7999){
    nhif = 300;
} else if (gPay <= 11999){
    nhif = 400;
} else if (gPay <= 14999){
    nhif = 500;
} else if (gPay <= 19999){
    nhif = 600;
} else if (gPay <= 24999){
    nhif = 750;
} else if (gPay <= 29999){
    nhif = 850;
} else if (gPay <= 34999){
    nhif = 900;
} else if (gPay <= 39999){
    nhif = 950;
} else if (gPay <= 44999){
    nhif = 1000;
} else if (gPay <= 49999){
    nhif = 1100;
} else if (gPay <= 59999){
    nhif = 1200;
} else if (gPay <= 69999){
    nhif = 1300
} else if (gPay <= 79999){
    nhif = 1400;
} else if (gPay <= 89999){
    nhif = 1500;
} else if (gPay <= 99999){
    nhif = 1600;
} else if (gPay > 100000){
    nhif = 1700;
}
//compute netPay
let netPay = gPay - paye - nssf - nhif;
return netPay;
} 










finalOutput = netPayCalculator(inputSalary)
document.getElementById('salary-id').append(finalOutput)
        
})