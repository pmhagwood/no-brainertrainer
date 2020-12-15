$(document).ready(() => {
    $(".btn-accout").click(function (event) {
        event.preventDefault();
        console.log("clicked");
        // const go_to_url = $("/signup").find(":selected").val();

        //this will redirect us in same window
        document.location.href = "/signup";
    });

    $('.carousel').carousel({
        interval: 5000
    });
});