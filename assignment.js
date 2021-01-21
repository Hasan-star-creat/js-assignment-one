// https://github.com/Hasan-star-creat/js-assignment-one/blob/main/assignment.js
  
/************* first problem kilometer to meter *************/
     function kilometerToMeter(kilo){
      if(kilo < 0){
          return 0;
      }
      let meter = kilo * 1000;
      return meter;
  }
  let kilo = 1.5;
  let meterResult = kilometerToMeter(kilo);
  console.log(meterResult);

  /************ second problem budgetCalcultor  **************/ 
  function budgetCalculator(watch,mobile,leptop){
      if(watchQuantity <0){
          watchQuantity = 0;
      }
      if (mobileQuantity <0){
          mobileQuantity = 0;
    }
    if (leptopQuantity < 0){
        leptopQuantity = 0;
    }
     let watchPrice = watchQuantity * 50;
     let mobilePrice = mobileQuantity * 100;
     let leptopPrice = leptopQuantity * 500;
     let totalAmount = watchPrice + mobilePrice + leptopPrice;
     return totalAmount;  
  } 
    let watchQuantity = -2;
    let mobileQuantity = 3;
    let leptopQuantity = 1; 
    let result = budgetCalculator(watchQuantity, mobileQuantity,leptopQuantity);
    console.log(result);

    /***************** Problem Number Three  HotleCost Managment **************/
     function hotelCost(days){
         let totalRent = 0;
         while(days <0){ // this code need to negative days
             return 0;
         }
         if(days <= 10){                    // ofer no one this condition 
            let totalRent = days * 100; 
             return totalRent;
         }
         if(days <= 20){                           // ofer no two  this condition 
             let firstOfer = 10 * 100;
             let remaining = days - 10;
             let secondOfer = remaining * 80;
             let totalRent = firstOfer + secondOfer;
             return totalRent;
         }
         else{
             let firstOfer = 10 * 100;  // ofer no three  defoult condition 
             let secondOfer = 10 * 80;
             let remaining  = days - 20;
             let thirdOfer = remaining * 50;
             let totalRent = firstOfer + secondOfer + thirdOfer;
             return totalRent;
         }
     }
            let days = 22; // input days 
            let hotelResult = hotelCost(days); // function call 
            console.log(hotelResult); // hotel cost output 
  
     //******** Problem Number Four********************** 
         function megaFriend(str){ // create a function 
            let compare = [0];   
            let  word = str.split(' '); // string divided by word
               for(let i = 0; i < word.length; i++){
               let largest  =  word[i];
               if(largest.length > compare.length){ // compare largest string
                    compare = largest; 
               } 
           }
           return compare;
         }
         const str ='Turaa Najma Sohag  Nafis'; // array of string
         let megaResult = megaFriend(str); // function callin 
         console.log(megaResult);  // output megafriends 

         /************* Program Is End ***********/
        

         
         