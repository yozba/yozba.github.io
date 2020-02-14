$(function () {
    $('#header').load('/header.html',function () {
        var $grid = $('#content').imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '.card'
            });
        });
    });
});