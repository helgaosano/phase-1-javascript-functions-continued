// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun("roller-skate");

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork("go to the office");

function wrapAdjective( comment = '*'){
   
return function(name2 = "special"){
    return `You are ${comment}${name2}${comment}!`
    }  
       
}