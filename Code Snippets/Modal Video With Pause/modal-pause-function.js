// Import this in an html file if you have modal with video to apply auto-pause functionality
// <script type="text/javascript" src="https://evarooms.merckgroup.com/Organization/GVAP/en-us/Code%20Snippets/Global%20Code%20Snippets/JS/modal-video-with-pause.js"></script>

function pauseVideo() {
    $('iframe#vid-modal').each(function () {
        var idString = String(this.id);
        var idStr = "#".concat(idString);
        var url = $(idStr).attr('src');
        $(idStr).attr('src', '');
        $(idStr).attr('src', url);
    }); 
}
$(document).click(function(e) {
    if (!$(e.target).closest('.modal-header').length) {
        pauseVideo();
    }
});