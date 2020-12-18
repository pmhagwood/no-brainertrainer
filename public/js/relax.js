$(document).ready(() => {
    $(".btn-accout").click(function (event) {
        event.preventDefault();
        console.log("Mark complete");
        // const go_to_url = $("/signup").find(":selected").val();

        //this will redirect us in same window
        document.location.href = "/program";
    });

   let relaxnum 
   let userid

 function processClick(obj) {
    // function to increment click count via ajax
    // expects increment_count.php to be in same directory level
  
    if(lastClicked != obj.val()) { // don't count clicks on currently active radio button
       lastClicked = obj.val(); // set currently clicked radio button to this one
        
      
       $.ajax({
          type: "GET",
          url: "increment_count",
          data: qs,
          error: function(xhr, status, msg) {
             alert("Failed to process click count: " + msg);
          }
       })
       .done(function() {
          getTotals(); // update totals on successful processing
       });
    }
 }

    //does a GET request to figure out which user is logged in and updates the HTML on the page
    $.get("/api/Users/me").then(data => {
      
         relaxnum = data.relax
         userid = data.id
 
          console.log("This is the number ",  relaxnum); 
          return relaxnum
      });
    // }

    // });




 
    $("#completeBtn").click(function (event) {
        event.preventDefault();
         console.log("relaxnum is ", relaxnum) 
         relaxnum++ 
         console.log("relaxnum added ", relaxnum) 
        $.ajax({
            type: 'POST',
            url: '/api/completeWorkout/' +userid,
            data: {relax: relaxnum}
        }).then(res => {
            console.log('Response back from server ', res)
        })
        // const go_to_url = $("/signup").find(":selected").val();

        //this will redirect us in same window
        //document.location.href = "/program";
    });

});