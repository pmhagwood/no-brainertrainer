$(document).ready(() => {
    // $(".btn-accout").click(function (event) {
    //     event.preventDefault();
    //     console.log("Mark complete");
    //     // const go_to_url = $("/signup").find(":selected").val();

    //     //this will redirect us in same window
    //     document.location.href = "/program";
    // });

   let insanenum 
   let userid

//  function processClick(obj) {
//     // function to increment click count via ajax
//     // expects increment_count.php to be in same directory level
  
//     if(lastClicked != obj.val()) { // don't count clicks on currently active radio button
//        lastClicked = obj.val(); // set currently clicked radio button to this one
        
      
//        $.ajax({
//           type: "GET",
//           url: "increment_count",
//           data: qs,
//           error: function(xhr, status, msg) {
//              alert("Failed to process click count: " + msg);
//           }
//        })
//        .done(function() {
//           getTotals(); // update totals on successful processing
//        });
//     }
//  }

    //does a GET request to figure out which user is logged in and updates the HTML on the page
    $.get("/api/Users/me").then(data => {
        
         insanenum = data.insane
         userid = data.id
         $("#insaneNum").text(insanenum);
         $("#username").text("Welcome " + data.user);
          console.log("This is the number ",  insanenum); 
          return insanenum
      });
    // }

    // });



    // function updateDiv()
    // { 
    //     $("#relaxBox").load;
    // }
 
    $("#completeBtn").click(function (event) {
        event.preventDefault();
        //  console.log("relaxnuxxxm is ", relaxnum); 
         insanenum++; 
        //  console.log("relaxnum added ", relaxnum); 
        $.ajax({
            type: 'POST',
            url: '/api/completeWorkout/' +userid,
            data: {insane: insanenum}
        }).then(res => {
            console.log('Response back from server ', res);
            document.location.href = "/program";

        }); 
        // const go_to_url = $("/signup").find(":selected").val();

        //this will redirect us in same window
        //document.location.href = "/program";
    });

});