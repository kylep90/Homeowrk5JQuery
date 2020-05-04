//Displays the time
var current = moment().format('dddd Do MMMM YYYY');
$("#currentDay").text(current)

// //Saves the hour in the local storage
// var currentHour = moment().startOf('day').fromNow();
// console.log(currentHour) 
// var currentTimeSaved = localStorage.setItem("Current Time", currentHour)

//Takes the hour in the 24 hour clock
var now = moment().format('H')

//Decides whether time is in the past, present or furture by creating and setting the variable to a certain hour and
//subtratcing it from the current hour.

//9AM
var HourAt9 = "9"
if (now - HourAt9 > 0) {
    console.log("past")
    $("#9").attr("class", "past")
}
else if(now - HourAt9 < 0) {
    console.log("future")
    $("#9").attr("class", "future")
}
else {
    console.log("present")
    $("#9").attr("class", "present")  
}

//10AM
var HourAt10 = "10"
if (now - HourAt10 > 0) {
    $("#10").attr("class", "past")
}
else if(now - HourAt10 < 0) {
    $("#10").attr("class", "future")
}
else {
    $("#10").attr("class", "present")  
}

//11AM
var HourAt11 = "11"
if (now - HourAt11 > 0) {
    $("#11").attr("class", "past")
}
else if(now - HourAt11 < 0) {
    $("#11").attr("class", "future")
}
else {
    $("#11").attr("class", "present")  
}

//12PM
var HourAt12 = "12"
if (now - HourAt12 > 0) {
    $("#12").attr("class", "past")
}
else if(now - HourAt12 < 0) {
    $("#12").attr("class", "future")
}
else {
    $("#12").attr("class", "present")  
}

//1PM
var HourAt13 = "13"
if (now - HourAt13 > 0) {
    $("#13").attr("class", "past")
}
else if(now - HourAt1 < 0) {
    $("#13").attr("class", "future")
}
else {
    $("#13").attr("class", "present")  
}

//2PM
var HourAt14 = "14"
if (now - HourAt14 > 0) {
    $("#14").attr("class", "past")
}
else if(now - HourAt14 < 0) {
    $("#14").attr("class", "future")
}
else {
    $("#14").attr("class", "present")  
}

//3PM
var HourAt15 = "15"
if (now - HourAt15 > 0) {
    $("#15").attr("class", "past")
}
else if(now - HourAt15 < 0) {
    $("#15").attr("class", "future")
}
else {
    $("#15").attr("class", "present")  
}

//4PM
var HourAt16 = "16"
if (now - HourAt16 > 0) {
    $("#16").attr("class", "past")
}
else if(now - HourAt16 < 0) {
    $("#16").attr("class", "future")
}
else {
    $("#16").attr("class", "present")  
}

//5PM
var HourAt17 = "17"
if (now - HourAt17 > 0) {
    console.log("past")
    $("#17").attr("class", "past")
}
else if(now - HourAt17 < 0) {
    console.log("future")
    $("#17").attr("class", "future")
}
else {
    console.log("present")
    $("#17").attr("class", "present")  
}

//6PM
var HourAt18 = "18"
if (now - HourAt18 > 0) {
    console.log("past")
    $("#18").attr("class", "past")
}
else if(now - HourAt18 < 0) {
    console.log("future")
    $("#18").attr("class", "future")
}
else {
    console.log("present")
    $("#18").attr("class", "present")  
}

//7PM
var HourAt19 = "19"
if (now - HourAt19 > 0) {
    console.log("past")
    $("#19").attr("class", "past")
}
else if(now - HourAt19 < 0) {
    console.log("future")
    $("#19").attr("class", "future")
}
else {
    console.log("present")
    $("#19").attr("class", "present")  
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

//5PM
var taskSaved5 = localStorage.getItem('5PM');
$("#task5").val(taskSaved5);    
        
$("#saveBtn5").click(function(){
    var task5 = $("#task5").val();
    var taskSave5 = localStorage.setItem('5PM', task5);
    alert(task5);
});

//6PM
var taskSaved6 = localStorage.getItem('6PM');
$("#task6").val(taskSaved6);    
        
$("#saveBtn6").click(function(){
    var task6 = $("#task6").val();
    var taskSave6 = localStorage.setItem('6PM', task6);
    alert(task6);
});

//7PM
var taskSaved7 = localStorage.getItem('7PM');
$("#task7").val(taskSaved7);    
        
$("#saveBtn7").click(function(){
    var task7 = $("#task7").val();
    var taskSave7 = localStorage.setItem('7PM', task7);
    alert(task7);
});
});




