$(document).ready(() => {

    let nightmareNum 
    let userid
 
 
     //does a GET request to figure out which user is logged in and updates the HTML on the page
     $.get("/api/Users/me").then(data => {
         
         nightmareNum = data.nightmare
          userid = data.id
          $("#nightmareNum").text(nightmareNum);
          $("#username").text("Welcome " + data.user);
           console.log("This is the number ",  nightmareNum); 
           return nightmareNum
       });
  
  
     $("#completeBtn").click(function (event) {
         event.preventDefault();
         nightmareNum++; 
         //  console.log("relaxnum added ", relaxnum); 
         $.ajax({
             type: 'POST',
             url: '/api/completeWorkout/' + userid,
             data: { columnToUpdate: 'nightmare', valueToUpdateWith: nightmareNum}
         }).then(res => {
             // console.log('Response back from server ', res);
             document.location.href = "/program";
 
         }); 
     });
 
 });