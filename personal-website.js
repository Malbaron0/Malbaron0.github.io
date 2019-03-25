

/* Stop the video from playing modal is closed. */
$("#myModal").on("hidden.bs.modal", function() {
    myvid = document.getElementById('myVideo');
    myvid.pause();
});

/*Set android mp4 as the sourse of the video when Launch demo within Android Application is clicked */
$("#android-app-ref").click(function(){
  document.getElementById('myVideo').setAttribute("src", "https://player.vimeo.com/video/203526410");
});

// $("#bookscanner-app-ref").click(function(){
//   document.getElementById('myVideo').setAttribute("src", "https://player.vimeo.com/video/203526011");
// });

// $("#punchclock-app-ref").click(function(){
//   document.getElementById('myVideo').setAttribute("src", "https://player.vimeo.com/video/203523141");
// });
