function oddNumbers(l, r) {
    var result = [];
    for (var i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

function findNumbers(arr, k) {
    if (arr.includes(k) === true) {
        return "YES";
    }
    return "NO";
}

function liftoff_countdown(start_num) {
    // Loops through all values between 0 and start_num
    for (int i = 0; i < start_num; i++) {
        // Prints the appropriate value by subtracting from start_num
        console.log(start_num - i);
    }
    // Upon exiting the loop, prints "Liftoff!"
    console.log("Liftoff!");
}


function clock_angles(hour, minute) {

        // note: there are 360 degrees around the clock interface

        // calculate the degree position of the hour hand
        hourDegree = 30 * hour;

        // calculate how far the hour hand is from zero
        if (hourDegree < 180) {
            hourDifference = hourDegree;
        } else {
            hourDifference = 360 - hourDegree;
        }

        // calculate the degree position of the minute hand
        // if the minute hand is on the 12 then the degree position should be 0
        if (minute == 60) {
            minute = 0;
        }

        // calculate the minutes based on the position
        minuteDegree = 6 * minute;

        // calculate how far the minute hand is from zero
        if (minuteDegree < 180) {
            minuteDifference = minuteDegree;
        } else {
            minuteDifference = 360 - minuteDegree;
        }

        // calculate the difference between the hour and minute hand
        handDifference = hourDifference + minuteDifference;

        // return the difference
        return handDifference;
    }

    console.log("hand angle: (3,0) = " + clock_angles(3, 0));
    console.log("hand angle: (10,10) = " + clock_angles(10, 10));
    console.log("hand angle: (7,10) = " + clock_angles(7, 10));
    console.log("hand angle: (12,59) = " + clock_angles(12, 59));