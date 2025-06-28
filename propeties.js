function check(){
    
    var salary=prompt("enter your monthly income"); 

  if (salary <1000){

    alert("You are not eligible for a loan");
  

    }
  else if (salary>= 1000 && salary < 5000){ 

       alert("you are eliginle for a loan of R5000");
    
  }
  else if (salary >= 5000 && salary < 10000){ 
    
         alert("you are eliginle for a loan of R10000");




  }
else if (salary >= 10000 && salary < 20000){ 
    
         alert("you are eliginle for a loan of R20000");
    }
else if (salary >= 20000 && salary < 50000){ 
    
         alert("you are eliginle for a loan of R50000");
    }
else if (salary >= 50000){ 
    
         alert("you are eliginle for a loan of R100000");
    }
else {
    
         alert("Invalid input, please enter a valid salary");
    }


}













