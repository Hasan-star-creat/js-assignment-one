 // github code link: https://github.com/Hasan-star-creat/js-assignment-one
 
/******  kilometerTometer Function start from Here: *****/
function kilometerToMeter(kilo){
       // If value of kilometer is positive then convert kilometer to meter 
     if(kilo > 0){
        return  kilo * 1000  
     }
        // If value of kilometer is positive then
     else{
        return "warning!! Enter value is negative!"
     }
}


 /***** budgetCalculator function start from Here:*******/
  function budgetCalculator(watchNumbers,mobileNumbers,leptopNumbers){
       watchNumbers = watchNumbers * 50;
       mobileNumbers = mobileNumbers * 100;
       leptopNumbers = leptopNumbers * 500;
        
       const allProducts = [watchNumbers , mobileNumbers , leptopNumbers];

       for (let i = 0; i < allProducts.length; i++) {
           const element = allProducts[i];
           var negetiveProduct = 0;
           if(element < 1){
             negetiveProduct++;
             break;
           } 
       }
                 // if any product number is negative following then return warnign message ;
              if(negetiveProduct > 0){
                  return "Warning!! your any product quantity  of negative!"
              } 
              // if product number doesn't negative following then return total budget;
              else{
                  let totalCalCultaor = watchNumbers + mobileNumbers + leptopNumbers ;
                  return totalCalCultaor;
         }
  }


         /****  hotelCost function start here    *****/
         function hotelCost(days){
           days =  Math.round(days);
            //If the day with a negative number then the following warning will be returned:
           if(days < 1){
               return "Warning!! it is not possible have negative days";
               // if the days doesn't negative days then calcultation total days costing ;
           }else{
                var totalCost = 0;
            if(days <= 10){
                 totalCost = days * 100;
            }
             else if(days <= 20){
                var first_10_days = 10 * 100;
                var after_10_days = (days - 10) * 80 ;
                totalCost = first_10_days + after_10_days;
            }else{
                var first_10_days = 10 * 100;
                var second_10_days = 10 * 80;
                var after_20_days = (days - 20) * 50;
                totalCost = first_10_days + second_10_days + after_20_days;
            }
           }
     return totalCost;
         }
         

         /**** megaFriend function start from here ****/
           function megaFriend(name){
            var perNameLetters = [];
               var largeName = [];
               for (let i = 0; i < name.length; i++) {
                   var chack = name[i];
                    var spaceCount = 0;
                     
                   for (let j = 0; j < chack.length; j++) {
                       var chackSpace = chack[j].split("");

                       if(chackSpace === " "){
                           spaceCount = spaceCount + 1;
                       }
                   }

                   var letters = name[i].length - spaceCount;
                   if(letters > perNameLetters){
                       perNameLetters = letters;
                       largeName = name[i];
                   }
             
               }
                // This warning Show if there isn't element in this array 
                 if(perNameLetters === 0){
                     return "warning!! please insert your friends name in array! ";
                 }
                 // the big name will show the comparison:
                 else{
                    return largeName;
                 } 
           }

      /************* Program Is End ***********/
   