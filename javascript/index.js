$(function () {
	$('#header').load('/header.html',function () {
		$('#content').imagesLoaded(function () {
			$('#content').masonry({
				itemSelector: '.card'
			});
		});
	});
});