$(function () {
	if(location.pathname == '/'){
		$('#header').load('/include.html header', function(){
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
		$('head').append($('<div>').load('/include.html meta,title,link'));
		$('#header').load('/include.html header');
		$(function(){
			$('.popup').magnificPopup({
				type: 'image',
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
		});
	}
});
