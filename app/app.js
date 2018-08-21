
let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navbar").css("background" , "white");
      $("a").css("color" , "black");
	  }

	  else{
		  $(".navbar").css("background" , "#e57e00");
      $("a").css("color" , "white");
	  }
  })
})
