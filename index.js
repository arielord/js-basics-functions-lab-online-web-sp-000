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
  let price = 0;
  
  if (distance < 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return distance * 0.02
  }
  else if (distance <= 2500 && distance > 2000)
}