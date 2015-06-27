function ajax(){
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var options = {
		tags: "cars,jdm,edm,usdm",
		format: "json"
	};
	function showPhotos(data) {
		var photoList = '<ul>';
		$.each(data.items, function(i, photo) {
			photoList += '<img src="' + photo.media.m + '">';
			if(i==0)return false;
		});
		photoList += '</ul>';
		$('.container').html(photoList);
	}
	$.getJSON(flickrAPI, options, showPhotos);
}
