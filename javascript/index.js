$(function () {
    $('#content').load('html/article.html', function (response, status, xhr) {
        var $grid = $('#content').imagesLoaded(function(){
            $grid.masonry({
                itemSelector: '.card'
            });
        });
    });
});