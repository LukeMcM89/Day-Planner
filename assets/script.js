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

