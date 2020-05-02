


//Displays the time
var current = moment().format('dddd Do MMMM YYYY');
$("#currentDay").text(current)

//Saves the hour in the local storage
var currentHour = moment().startOf('day').fromNow();
console.log(currentHour) 
var currentTimeSaved = localStorage.setItem("Current Time", currentHour)

var HoursFrom9 = moment("9", "h").fromNow(); console.log(HoursFrom9)
var HoursFrom10 = moment("10", "h").fromNow(); console.log(HoursFrom10)
var HoursFrom11 = moment("11", "h").fromNow(); console.log(HoursFrom11)
var HoursFrom12 = moment("12", "h").fromNow(); console.log(HoursFrom12)
var HoursFrom13 = moment("13", "h").fromNow(); console.log(HoursFrom13)
var HoursFrom14 = moment("14", "h").fromNow(); console.log(HoursFrom14)
var HoursFrom15 = moment("15", "h").fromNow(); console.log(HoursFrom15)
var HoursFrom16 = moment("16", "h").fromNow(); console.log(HoursFrom16)
var HoursFrom17 = moment("17", "h").fromNow(); console.log(HoursFrom17)
var HoursFrom18 = moment("18", "h").fromNow(); console.log(HoursFrom18)
var HoursFrom19 = moment("19", "h").fromNow(); console.log(HoursFrom19)
var HoursFrom20 = moment("20", "h").fromNow(); console.log(HoursFrom20)

console.log(current - HoursFrom9);
//Check for 9AM
if (HoursFrom9.indexOf("ago") >= 0) { 
    console.log("Past");
   $("#9").attr("class", "past") 
}

else if(HoursFrom9.indexOf("in") >= 0) {
    console.log("Future");
    $("#9").attr("class", "future")
}
if(HoursFrom9.indexOf("minute") >= 0) {
    console.log("Present")
    $("#9").attr("class", "present")

}


//For 10AM
if (HoursFrom18.indexOf("ago") >= 0) { 
    console.log("Past");
   $("#10").attr("class", "past") 
}

else if(HoursFrom18.indexOf("in") >= 0) {
    console.log("Future");
    $("#10").attr("class", "future")
}
if(HoursFrom18.indexOf("minute") >= 0) {
    console.log("Present")
    $("#10").attr("class", "present")

}

//For 11AM
if (HoursFrom20.indexOf("ago") >= 0) { 
    console.log("Past");
   $("#11").attr("class", "past") 
}

else if(HoursFrom20.indexOf("in") >= 0) {
    console.log("Future");
    $("#11").attr("class", "future")
}
if(HoursFrom20.indexOf("minute") >= 0) {
    console.log("Present")
    $("#11").attr("class", "present")

}




//Code to save the tasks with corresponding Save Button
$(document).ready(function(){
//9AM
    //Sets data from the previous page
        var taskSaved9 = localStorage.getItem('9AM');
        $("#task9").val(taskSaved9);    
                
    //Saves the task in local storage
        $("#saveBtn9").click(function(){
            var task9 = $("#task9").val();
            var taskSave9 = localStorage.setItem('9AM', task9);
            alert(task9);
        });

  

//10AM
    var taskSaved10 = localStorage.getItem('10AM');
    $("#task10").val(taskSaved10);    
            
    $("#saveBtn10").click(function(){
        var task10 = $("#task10").val();
        var taskSave10 = localStorage.setItem('10AM', task10);
        alert(task10);
    });

//11AM
    var taskSaved11 = localStorage.getItem('11AM');
    $("#task11").val(taskSaved11);    
            
    $("#saveBtn11").click(function(){
        var task11 = $("#task11").val();
        var taskSave11 = localStorage.setItem('11AM', task11);
        alert(task11);
    });

//12PM
    var taskSaved12 = localStorage.getItem('12PM');
    $("#task12").val(taskSaved12);    
            
    $("#saveBtn12").click(function(){
        var task12 = $("#task12").val();
        var taskSave12 = localStorage.setItem('12PM', task12);
        alert(task12);
});

//1PM
var taskSaved1 = localStorage.getItem('1PM');
$("#task1").val(taskSaved1);    
        
$("#saveBtn1").click(function(){
    var task1 = $("#task1").val();
    var taskSave1 = localStorage.setItem('1PM', task1);
    alert(task1);
});

//2PM
var taskSaved2 = localStorage.getItem('2PM');
$("#task2").val(taskSaved2);    
        
$("#saveBtn2").click(function(){
    var task2 = $("#task2").val();
    var taskSave2 = localStorage.setItem('2PM', task2);
    alert(task2);
});

//3PM
var taskSaved3 = localStorage.getItem('3PM');
$("#task3").val(taskSaved3);    
        
$("#saveBtn3").click(function(){
    var task3 = $("#task3").val();
    var taskSave3 = localStorage.setItem('3PM', task3);
    alert(task3);
});

//4PM
var taskSaved4 = localStorage.getItem('4PM');
$("#task4").val(taskSaved4);    
        
$("#saveBtn4").click(function(){
    var task4 = $("#task4").val();
    var taskSave4 = localStorage.setItem('4PM', task4);
    alert(task4);
});

//4PM
var taskSaved5 = localStorage.getItem('5PM');
$("#task5").val(taskSaved5);    
        
$("#saveBtn5").click(function(){
    var task5 = $("#task5").val();
    var taskSave5 = localStorage.setItem('5PM', task5);
    alert(task5);
});
});

//Create a new row for each hour of the day


