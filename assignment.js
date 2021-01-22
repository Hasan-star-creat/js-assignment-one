// https://github.com/Hasan-star-creat/js-assignment-one
  
/************* first problem kilometer to meter *************/
     function kilometerToMeter(kilo){
      if(kilo < 0){ // this condition negative value return 0
          return 0;
      }
      let meter = kilo * 1000; 
      return meter;
  }
    let kilo = 1.5; // input parameter
    let meterResult = kilometerToMeter(kilo); //kilometerToMeter  function calling 
  console.log(meterResult); // output kilomter to meter

  /************ second problem budgetCalcultor  **************/ 
  function budgetCalculator(watch,mobile,leptop){
      if(watchQuantity <0){ // this condition negative pargameter return 0
          watchQuantity = 0;
      }
      let watchPrice = watchQuantity * 50;

      if (mobileQuantity <0){ // this condition negative pargameter return 0
          mobileQuantity = 0;
    }
    let mobilePrice = mobileQuantity * 100;

    if (leptopQuantity < 0){  // this condition negative pargameter return 0
        leptopQuantity = 0;
    }
     let leptopPrice = leptopQuantity * 500;

     let totalAmount = watchPrice + mobilePrice + leptopPrice; // add total cost
     return totalAmount;  // tunction output return 
  } 
    let watchQuantity = 2; //watch quentity input parameter 
    let mobileQuantity = 4; // mobile quentity input parameter
    let leptopQuantity = 1; // leptop quentity input dparameter
    let budgetCalresult = budgetCalculator(watchQuantity, mobileQuantity,leptopQuantity); //function calling 
    console.log(budgetCalresult);

    /***************** Problem Number Of Three  HotleCost Managment **************/
     function hotelCost(days){ // 
         let totalRent = 0;
         while(days <0){ // this condition negative pargameter return 0
         }
            // first offer this condition  
         if(days <= 10){                 
            let totalRent = days * 100; 
             return totalRent;
         }
          // second offer  this condition 
         if(days <= 20){    
             let firstoffer = 10 * 100;
             let remaining = days - 10; // find conditioning days
             let secondoffer = remaining * 80;
             let totalRent = firstoffer + secondoffer;// second condition total rent
             return totalRent;
         }
           //third  offer else condition 
         else{
             let firstoffer = 10 * 100;  
             let secondoffer = 10 * 80;
             let remaining  = days - 20; //find conditioning days
             let thirdoffer = remaining * 50;
             let totalRent = firstoffer + secondoffer + thirdoffer; // third condition total rent
             return totalRent; 
         }
     }
            let days = 22; // input days parameter
            let hotelResult = hotelCost(days); // function calling 
            console.log(hotelResult); // hotel cost output 
  
     //******** Problem Number Four********************** 
         function megaFriend(str){ // create a function 
            let compare = [0];   
            let  word = str.split(' '); // string divided by word by word
               for(let i = 0; i < word.length; i++){
               let largest  =  word[i];
               if(largest.length > compare.length){ // compare largest string
                    compare = largest;  // largest string stor
               } 
           }
           return compare;
         }
         const str ='Tura Naju Hasan Sohag  Nafi'; // array of string
         let megaResult = megaFriend(str); // function callin 
         console.log(megaResult);  // output megafriends 

         /************* Program Is End ***********/
