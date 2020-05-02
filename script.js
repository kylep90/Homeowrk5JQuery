
//Displays the time
var current = moment().format('dddd Do MMMM YYYY');
$("#currentDay").text(current)


//
$(document).ready(function(){

//Sets data from the previous page
    var taskSaveD = localStorage.getItem('9AM');
    $("#task9").val(taskSaveD);    
             
//Saves the task in local storage
    $("#saveBtn").click(function(){
        var task = $("#task9").val();
       var taskSave = localStorage.setItem('9AM', task);
        alert(task);
    });

//Prints the task on webpage



});

