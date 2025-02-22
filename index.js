// alert("working ");
// $("h1").css("color","red");
// document.querySelectorAll("button").classList.add("btn");
// $("button").css("background", "blue");
$("button").addClass("btn");
// $("h1").text("bye");
// .text method represents the whole txt inside the brace
// $("button").text("click the button.");

// .html method translate the html
$("button").html("<em>click me!</em>");

// when you're working with JQuery every time you access a method by . notation 
$("a").attr("href","www.openai.com");

/* 
this two codes will do same thing
$("button").click(function(){
    $("h1").css("color","purple");
});

for(var i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color="purple";
    })
}
*/


// $("input").keypress(event, function(){
//     console.log(event.key)
// })

// $(document).keypress(event, function(){
//     $("h1").html((event.key));
// });

// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({opacity:0.5});
// });
$("h1").addClass("margin-50 big-title")
$("h1").append("<button class='btn margin-50'>hello world</button>");