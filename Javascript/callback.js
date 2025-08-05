//Naive Approach

function step1(step2, step3, step4){
    console.log("Image Captured");
    step2(step3, step4) 
 }
 function step2(step3, step4){
     console.log("Apply Filters"); 
     step3(step4);
  }
  function step3(step4){
     console.log("Add captions"); 
     step4();
  } 
  function step4(){
     console.log("Image is ready to upload"); 
 } 
 step1(step2, step3, step4);