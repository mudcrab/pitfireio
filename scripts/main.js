(function($) {
	
	$(function() {

		var url = document.URL;

		$('ul#menu li a').click(function(e) {
			if($(window).width() <= 800)
			{
				e.preventDefault();

				url = document.URL;
				$('#home-articles').addClass('active');
				$('#articles-title #title').text($(this).text());
				$('ul#articles').empty();

				var catPosts = posts[$(this).text()];

				for(var post in catPosts)
				{
					$('ul#articles').append('<li class="article">' +
						'<div class="content">' +
							'<a href="' + catPosts[post] + '">' + post + '</a>' +
						'</div>' +
					'</li>');
				}

				history.pushState({
					page: $(this).text()
				}, $(this).text(), $(this).text() + '.html')
			}

		});

		$('#back').click(function() {
			$('#home-articles').removeClass('active');

			history.pushState({
				page: '',
			}, url, url)
		});

		if($('#splash').is(':visible'))
		{
			$('#splash').css('background-image', 'url(' + $('#splash').data('bgr') + ')');
			$('#splash').show();
		}

		if(nPosts == 0)
		{
			$('#home-articles').remove();
			$('#home-menu').addClass('full');
		}

	});

})(jQuery);