$(function () {
	$('#header').load('/header.html',function () {
		$('#content').imagesLoaded(function () {
			$('#content').masonry({
				itemSelector: '.card',
				columnWidth: '.block1',
				percentPosition: true
			});
			$('#content').masonry();
		});
	});
});