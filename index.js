// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(street - 42)
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264
}

function calculatesFarePrices(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  case 
}