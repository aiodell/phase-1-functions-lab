// Code your solution in this file!

// return the distance to 42nd street in blocks
function distanceFromHqInBlocks(distance){
    return Math.abs(42 - distance);
}

// return the distance to 42nd street in feet
function distanceFromHqInFeet(distance){
    return Math.abs(42 - distance) * 264;
}

// returns the distance between destination and start travelled in feet
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

// calculates the fare depending on distance
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance < 400){
        return 0;
    }
    else if(distance > 400 && distance < 2000){
        return (distance - 400) * 0.02;
    }
    else if(distance > 2000 && distance <= 2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}
