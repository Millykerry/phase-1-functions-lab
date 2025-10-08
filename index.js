// Code your solution in this file!
// distence from HQ in blocks

function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    return Math.abs(pickupLocation - hq);
}

// distance from hq in feet
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

// distance tralleved in feet
function distanceTravelledInFeet(start,destination) {
    return Math.abs(destination - start) * 264;
}

// calculate fare place
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500) {
        return 25;
    }else {
        return "cannot travel that far";
    }
} 

// export functions so tests can see them
module.export = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
};
