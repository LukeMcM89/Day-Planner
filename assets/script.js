//loads html and css docs
$(document).ready(function () {

    // uses moment to show time and day

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
        console.log(this);
        
        var text = $(this).siblings(".entry_data").val();
        var time = $(this).parent().attr("id");

        // saves items to local storage

        localStorage.setItem(time,text);
        
    })
// hour blocks to local storage

    $("#hour00 .entry_data").val(localStorage.getItem("hour00"));
    $("#hour01 .entry_data").val(localStorage.getItem("hour01"));
    $("#hour02 .entry_data").val(localStorage.getItem("hour02"));
    $("#hour03 .entry_data").val(localStorage.getItem("hour03"));
    $("#hour04 .entry_data").val(localStorage.getItem("hour04"));
    $("#hour05 .entry_data").val(localStorage.getItem("hour05"));
    $("#hour06 .entry_data").val(localStorage.getItem("hour06"));
    $("#hour07 .entry_data").val(localStorage.getItem("hour07"));
    $("#hour08 .entry_data").val(localStorage.getItem("hour08"));
    $("#hour9 .entry_data").val(localStorage.getItem("hour9"));
    $("#hour10 .entry_data").val(localStorage.getItem("hour10"));
    $("#hour11 .entry_data").val(localStorage.getItem("hour11"));
    $("#hour12 .entry_data").val(localStorage.getItem("hour12"));
    $("#hour13 .entry_data").val(localStorage.getItem("hour13"));
    $("#hour14 .entry_data").val(localStorage.getItem("hour14"));
    $("#hour15 .entry_data").val(localStorage.getItem("hour15"));
    $("#hour16 .entry_data").val(localStorage.getItem("hour16"));
    $("#hour17 .entry_data").val(localStorage.getItem("hour17"));
    $("#hour18 .entry_data").val(localStorage.getItem("hour18"));

    function hourTracker () {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
        
            // determines whether user has passed the time slot
            if(blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
    })

    }
    hourTracker ();

})
