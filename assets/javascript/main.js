$('.collapseToggle').on('click', function() {
	$(".sidebar").toggleClass('sidebar--Collapse');
	$('.main').toggleClass('main--slide');	$('#toggleIcon').toggleClass('rotate');
});

$(function () {
  $('[data-toggle="popover"]').popover();
});

