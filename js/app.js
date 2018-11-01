

$(function(){$("body a").click(function(b){b.preventDefault();var a=$($(this).attr("href")).offset().top;$("html,body").stop().animate({scrollTop:a-30},800)})});
