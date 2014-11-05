// CONTENTS
// 1. JRespond
// 2. ScrollTo Custom
// 3. Prototypes
// 3.1 Desktop Function
				
// 1. JRespond - Build Responsive framework
var respond = {
   init: function(){
      // call jRespond and add breakpoints
      jRes = jRespond([
         {
             label: 'mobile',
             enter: 0,
             exit: 639
         },{
             label: 'tablet',
             enter: 640,
             exit: 979
         },{
             label: 'desktop',
             enter: 980,
             exit: 1274
         },{
             label: 'desktopXL',
             enter: 1275,
             exit: 10000
         }
      ]);

      // register enter and exit functions for multiple breakpoints and functions
      // Future proof with empty
      jRes.addFunc([
         {
             breakpoint: 'mobile',
             enter: function() {
                 respond.initMobile();
             },
             exit: function() {
                 respond.unInitMobile();
             }
         },{
             breakpoint: 'tablet',
             enter: function() {
                 respond.initTablet();
             },
             exit: function() {
                 respond.unInitTablet();
             }
         },{
             breakpoint: 'desktop',
             enter: function() {
                 respond.initTablet();
             },
             exit: function() {
                 respond.unInitTablet();
             }
         },{
             breakpoint: 'desktopXL',
             enter: function() {
                 respond.initTablet();
             },
             exit: function() {
                 respond.unInitTablet();
             }
         }
      ]);
   },
   initMobile: function(){
      site.mobile();
   },
   unInitmobile: function(){
      location.reload(true);
   },
   initTablet: function(){
      // Launch Desktop Functions
      siteDesktop.init();
   },
   unInitTablet: function(){
     //location.reload(true);
   },
   emptyFunc: function(){
   }
}
// 2. ScrollTo Custom 
/* Scrolls to an Element
 */
function scrollToElement(ELE,offset){
   $('html, body').animate({
        scrollTop: $(ELE).offset().top-offset
   }, 700);
}
//set height of home bg on doc load and onScroll
function setHeight_init_and_resize(){
	var w = $('.video-bg').innerWidth();
	var h = $(window).height();
	var minHeight = 805;
	if( h < minHeight ){ 
		h = minHeight; 
	}
		homebgStyle(w,h);
	$(window).resize(function(e) {
		homebgStyle(w,h);
	});
	return h;
}
function homebgStyle(w,h){
	$('.video-bg').css({
			height: h +'px',
			backgroundSize: 'cover'//'100% '+(h+20)+'px'
		});
	$('.section--1').css({
		height: (h-20)+'px'
		});
	}
setHeight_init_and_resize();
// 3 PROTOTYPES BEGIN
// 3.1 - Desktop 
/* Setup bindings to site wide functions
 */
var siteDesktop = {

   // Initialise Desktop Site   
   init: function() {
      this.videoBG();
      this.bindViews();	
	  this.navPos();  
   },

   // Build video
   videoBG: function() {

      /*if ( $('html').hasClass('no-touch') ) {
         $('.video-bg').tubular({videoId: 'l21VvchDrWY'}); // where idOfYourVideo is the YouTube ID.
      }*/		
		this.set_height_sec_1();
   },
   set_height_sec_1: function(){
		h = setHeight_init_and_resize()
			
		$('.section--1').css({ minHeight: h+'px'});
		$('.section--2').css({ minHeight: h+'px'});
		$('.section--3').css({ minHeight: h+'px'});
		$('.section--4').css({ minHeight: (h+300)+'px'});
		$('.section--5').css({ minHeight: h+'px'});
   },
 
   navPos: function(){
	   	var sec_2 = $('.section--2').position().top;
		$('#hd').css({
					position: 'absolute',
					top: sec_2+'px'
				});
				
		$(window).scroll(function(){
			
			wintop = $(window).scrollTop();
			
			hdHeight = $('#hd').height();
			
			if(wintop >= sec_2){
				$('#hd').css({
					position: 'fixed',
					top: '0'
					});
				$('.global-nav').css({
					position: 'fixed',
					top: '40px'
					});
			}else{
				$('#hd').css({
					position: 'absolute',
					top: sec_2+'px'
				});
				$('.global-nav').css({
					position: 'relative',
					top: '0'
				});
			}
			
		});
   
			
	},
   
   bindViews: function() {
      var seenBot = false, seenTop = false;
      // Stage 1 activation binding
      $('.section--1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
         if (isInView) {
			$('.page--direction').hide();
            if(visiblePartY == 'top'){
               $('.nav--wrap li a').removeClass('active');
               $('.section--2').removeClass('section--active');
               $('.page--direction').attr('href','#section--2');
               $('.page--direction').attr('data-direction','down');
            }
            if(visiblePartY == 'bottom'){
               $('.section--1').addClass('section--active');
            }

            // Sets which way page direction controller should go
            // Go down
            seenTop = true;
            seenBot = false;
         } 
         else{
         }
      });
      //Stage 2 activation binding
      $('.section--2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
         if(isInView){

            $('.section--1').removeClass('section--active');
            $('.section--2').addClass('section--active');
            $('.section--3').removeClass('section--active');
            $('.section--4').removeClass('section--active');
            $('.section--5').removeClass('section--active');
            $('.page--direction').show();

            $('.nav--wrap li a').removeClass('active');
            $('.nav--wrap li:first-child a').addClass('active');

            if(visiblePartY == 'top'){
               // Direction Down
               $('.page--direction').attr('data-direction','down');
               $('.page--direction').attr('href','#section--3');
            }
         }
         else{
         }
      });


      $('.section--3').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
         if (isInView) {
            //if(visiblePartY != 'top'){
               $('.section--1').removeClass('section--active');
               //$('.section--2').removeClass('section--active');
               $('.section--4').removeClass('section--active');
               $('.section--5').removeClass('section--active');

               $('.section--3').addClass('section--active');

               // Direction Down
               $('.page--direction').attr('data-direction','down');
               $('.page--direction').attr('href','#section--4');

               $('.nav--wrap li a').removeClass('active');
               $('.nav--wrap li:first-child + li a').addClass('active');
            //}

         }
         else{
            $('.section--3').removeClass('section--active');
         }
      });
      $('.section--4').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
         if (isInView) {
            //if(visiblePartY != 'top'){
               $('.section--1').removeClass('section--active');
               $('.section--2').removeClass('section--active');
               //$('.section--3').removeClass('section--active');
			   $('.section--5').removeClass('section--active');

               $('.section--4').addClass('section--active');

               // Direction Down
               $('.page--direction').attr('data-direction','down');
               $('.page--direction').attr('href','#section--5');

               $('.nav--wrap li a').removeClass('active');
               $('.nav--wrap li:first-child + li + li a').addClass('active');
            //}

         }
         else{
            $('.section--4').removeClass('section--active');
			$('.section--5').removeClass('section--active');
         }
      });
      $('.section--5').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
         if (isInView) {
            //if(visiblePartY != 'top'){
				$('.section--1').removeClass('section--active');
				$('.section--2').removeClass('section--active');
				$('.section--3').removeClass('section--active');
				//$('.section--4').removeClass('section--active');
				
				$('.section--5').addClass('section--active');
            

				//$('.page--direction').click(function(){ scrollToElement('.section--1',0); });
				$('.page--direction').attr('href', '#section--1');
				$('.page--direction').attr('data-direction','up');
				
				$('.nav--wrap li a').removeClass('active');
				$('.nav--wrap li:first-child + li + li + li a').addClass('active');
            //}

            // Sets which way page direction controller should go
            // Go back up
            seenBot = true;
            seenTop = false;

         }
         else{
			// $('.section--4').removeClass('section--active');
            $('.section--5').removeClass('section--active');
         }
      });
   }
}

var site = {
   init: function() {
      this.bindAll();
   },
   bindAll: function() {
      var scrolled, $elementToScroll = {};
      $(window).bind('scroll',function(e){
         scrolled = ($(window).scrollTop());
		 winHeight = $(window).height();
         if(scrolled >= winHeight){
            $('body').addClass('nav--fixed');
            //$('.logo img').attr('src', 'images/Qube_logo_final.png');
         }
         else{
            $('body').removeClass('nav--fixed');
            //$('.logo img').attr('src', 'images/Qube_logo_final.png');
         }
      });
      siteDesktop.bindViews();
      // Logo clicked
      $('.logo a').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('html, body').animate({
              scrollTop: $('.section--1').offset().top
         }, 700);
      });
      // Talk to us today
      $('.section--1 .button--generic').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         scrollToElement('.section--2',-25);
      });

      // Direction click event
      $('.page--direction').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('.global-nav a').removeClass('active');
         $(this).addClass('active');

         $elementToScroll = $(this).attr('href');
         if($elementToScroll == "#section--1"){
            scrollToElement('.section--1',-20);
         }
         if($elementToScroll == "#section--2"){
            scrollToElement('.section--2',-20);
         }
         if($elementToScroll == "#section--3"){
            scrollToElement('.section--3',-20);
         }
         if($elementToScroll == "#section--4"){
            scrollToElement('.section--4',-20);
         }
         if($elementToScroll == "#section--5"){
            scrollToElement('.section--5',-20); 
         }
      });

      // Navigation Menu
      $('.nav--wrap a').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('body').removeClass('menu--active');
         $('.global-nav a').removeClass('active');
         $(this).addClass('active');
         $elementToScroll = $(this).attr('href');
         
		 if($elementToScroll == "#section--1"){
            scrollToElement('.section--1',-20);
         }
         if($elementToScroll == "#section--2"){
            scrollToElement('.section--2',-20);
         }
         if($elementToScroll == "#section--3"){
            scrollToElement('.section--3',-20);
         }
         if($elementToScroll == "#section--4"){
            scrollToElement('.section--4',-20);
         }
         if($elementToScroll == "#section--5"){
            scrollToElement('.section--5',-20);   
         }
      });
   },
   mobile: function(){
      $('.menu--trigger').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('body').addClass('menu--active');
      });
      $('.menu--close').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('body').removeClass('menu--active');
      });
      $('.mobile--logo a').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('body').removeClass('menu--active');
         scrollToElement('.section--1',0);
      });
      $('#bd > div').click(function(e){
         // Oh Starpp
         (e.preventDefault) ? e.preventDefault() : e.returnValue = false; 
         $('body').removeClass('menu--active');
      });
      // $('.section--2').addClass('section--active');
      // $('.section--3').addClass('section--active');
      // $('.section--4').addClass('section--active');
      // $('.section--5').addClass('section--active');
   }

}
// Enter Main onReady Function
$(function(){

   // Initialise Website
   site.init();

   // Responsify JS stuff
   respond.init();
});