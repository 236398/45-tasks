
let number = [1,2,3,4,5,6,7,8,9,];

for(let num of number){
    let Ordinal;
    if(num == 1){
        Ordinal = "st"
    }
    else if(num == 2){
        Ordinal = "nd"
    }
   else if(num == 3){
        Ordinal = "rd"
    }
    else{
        Ordinal = "th"
    }
    console.log(num+Ordinal);
}