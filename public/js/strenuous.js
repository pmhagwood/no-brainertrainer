$(document).ready(() => {

   let strenuousnum 
   let userid


    //does a GET request to figure out which user is logged in and updates the HTML on the page
    $.get("/api/Users/me").then(data => {
        
        strenuousnum = data.strenuous
         userid = data.id
         $("#strenousNum").text(strenuousnum);
         $("#username").text("Welcome " + data.user);
          console.log("This is the number ",  strenuousnum); 
          return strenuousnum
      });
 
 
    $("#completeBtn").click(function (event) {
        event.preventDefault();
        strenuousnum++; 
        //  console.log("relaxnum added ", relaxnum); 
        $.ajax({
            type: 'POST',
            url: '/api/completeWorkout/' + userid,
            data: { columnToUpdate: 'strenuous', valueToUpdateWith: strenuousnum}
        }).then(res => {
            // console.log('Response back from server ', res);
            document.location.href = "/program";

        }); 
    });

});