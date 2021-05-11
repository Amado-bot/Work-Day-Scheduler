let now = moment();
let hour_element = document.getElementsByClassName("hour");

// let hour_element = 9

// console.log(hour_element);

window.onload = function () {
    for (let i = 0; i < hour_element.length; i++) {
        let currentHour = hour_element[i].id   
        timeTensed(time, currentHour)
    }

};

let nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a')

$('#today').text(nowMoment);

// let time = new Date().getHours();

let time = 11

// console.log(time);

function timeTensed(time, currentHour) {
    console.log("is your refridegirator runnin",time,currentHour);
    if (time > currentHour) {
        console.log("past")
        $('#timeline-'+currentHour).addClass('past');
    } else if (time >= currentHour) {
        console.log("present")
        $('#timeline-'+currentHour).addClass('present');
    } else if (time < currentHour) {
        console.log("future")
        $('#timeline-'+currentHour).addClass('future');
    }
};
