$("#homeButton").click(function(){$("html, body").animate({scrollTop:0},"slow");return!1});$("#portButton").click(function(){$('html, body').animate({scrollTop:$(".portfolio").offset().top},1000)});$("#teamButton").click(function(){$('html, body').animate({scrollTop:$(".meetTheTeam").offset().top},1000)});$("#contactButton").click(function(){$('html, body').animate({scrollTop:$("#footer").offset().top},1000)})
