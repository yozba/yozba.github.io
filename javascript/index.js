$(function () {
    $('#content').load('html/works.html', function () {
        var $grid = $('#loaded-content').imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '.card'
            });
        });
    });
});

function button_works(){
    $('#content').load('html/works.html')
}

function button_output() {
    $('#content').load('html/output_on_twitter.html', function () {
        var $grid = $('#loaded-content').imagesLoaded(function () {
            $grid.masonry({
                itemSelector: '.card'
            });
        });
    });
}

function button_about() {
    $('#content').load('html/about.html');
}