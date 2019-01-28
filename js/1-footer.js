$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		src: '#ment_legal',
		modal: true
	});
	/*$('.popup-modal').on('click', '.popup-modal', function (e) {
		e.preventDefault();
		$.magnificPopup.open();
	})*/
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});