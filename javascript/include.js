$(function () {
	$('head').load('/include.html meta,title,link');

	if(location.pathname == '/'){
		$('#header').load('/include.html header',function () {
			$('#content').imagesLoaded(function () {
				$('#content').masonry({
					itemSelector: '.card',
					columnWidth: '.block1',
					percentPosition: true
				});
				$('#content').masonry();
			});
		});
	}else{
		$('#header').load('/include.html header');
	}
});