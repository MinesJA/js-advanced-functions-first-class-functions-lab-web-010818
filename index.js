// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  const newArray = array.slice(0,2);

  return newArray;
}

const returnLastTwoDrivers = function(array){
  const num = array.length;
  const newArray = array.slice(num - 2, num)

  return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
  return function(fare){return fare * integer;}
}

const multiplier = createFareMultiplier;

function fareDoubler(fare){
  return multiplier(fare)(2);
};

function fareTripler(fare){
  return multiplier(fare)(3);
}


// function returnFirstTwoDrivers(){
//   return array.slice(0,2)
// }
//
// function returnLastTwoDrivers(){
//   let num = array.length
//   return array.slice(num - 2, num)
// }

function selectDifferentDrivers(array, func){
  return func(array);
}
