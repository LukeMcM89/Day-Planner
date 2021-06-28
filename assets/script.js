$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
        console.log(this);
        
        var text = $(this).siblings(".entry_data").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,text);
        
    })

    $("#hour9 .entry_data").val(localStorage.getItem("hour9"));
    $("#hour10 .entry_data").val(localStorage.getItem("hour10"));
    $("#hour11 .entry_data").val(localStorage.getItem("hour11"));
    $("#hour12 .entry_data").val(localStorage.getItem("hour12"));
    $("#hour13 .entry_data").val(localStorage.getItem("hour13"));
    $("#hour14 .entry_data").val(localStorage.getItem("hour14"));
    $("#hour15 .entry_data").val(localStorage.getItem("hour15"));
    $("#hour16 .entry_data").val(localStorage.getItem("hour16"));
    $("#hour17 .entry_data").val(localStorage.getItem("hour17"));




}
