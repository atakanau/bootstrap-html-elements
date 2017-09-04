
$(function () {
	$("[src^='/assets']").each(function(i,e){
		newsrc = $(e).attr('src').replace('/assets' ,'bootstrap/assets');
		$(e).attr('src' ,newsrc)
	});
	$('[data-toggle="popover"]').popover().popover('show');
	$('.popover-demo [data-toggle="popover"]').popover('hide');
	$('[data-toggle="tooltip"]').tooltip().tooltip('show');
	$(".bd-toggle-animated-progress").click(function(){
		$(this).parents('.bd-example:first').find('.progress-bar').toggleClass('progress-bar-animated');
	});
})
