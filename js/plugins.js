// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a,b,c){"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=c:(a[b]=c,"function"==typeof define&&define.amd&&define(b,[],function(){return c}))}(this,"jRespond",function(a,b,c){"use strict";return function(a){var b=[],d=[],e=a,f="",g="",i=0,j=100,k=500,l=k,m=function(){var a=0;return a="number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},n=function(a){if(a.length===c)o(a);else for(var b=0;b<a.length;b++)o(a[b])},o=function(a){var e=a.breakpoint,h=a.enter||c;b.push(a),d.push(!1),r(e)&&(h!==c&&h.call(null,{entering:f,exiting:g}),d[b.length-1]=!0)},p=function(){for(var a=[],e=[],h=0;h<b.length;h++){var i=b[h].breakpoint,j=b[h].enter||c,k=b[h].exit||c;"*"===i?(j!==c&&a.push(j),k!==c&&e.push(k)):r(i)?(j===c||d[h]||a.push(j),d[h]=!0):(k!==c&&d[h]&&e.push(k),d[h]=!1)}for(var l={entering:f,exiting:g},m=0;m<e.length;m++)e[m].call(null,l);for(var n=0;n<a.length;n++)a[n].call(null,l)},q=function(a){for(var b=!1,c=0;c<e.length;c++)if(a>=e[c].enter&&a<=e[c].exit){b=!0;break}b&&f!==e[c].label?(g=f,f=e[c].label,p()):b||""===f||(f="",p())},r=function(a){if("object"==typeof a){if(a.join().indexOf(f)>=0)return!0}else{if("*"===a)return!0;if("string"==typeof a&&f===a)return!0}},s=function(){var a=m();a!==i?(l=j,q(a)):l=k,i=a,setTimeout(s,l)};return s(),{addFunc:function(a){n(a)},getBreakpoint:function(){return f}}}}(this,this.document));

/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function($){var inviewObjects={},viewportSize,viewportOffset,d=document,w=window,documentElement=d.documentElement,expando=$.expando;$.event.special.inview={add:function(data){inviewObjects[data.guid+"-"+this[expando]]={data:data,$element:$(this)}},remove:function(data){try{delete inviewObjects[data.guid+"-"+this[expando]]}catch(e){}}};function getViewportSize(){var mode,domObject,size={height:w.innerHeight,width:w.innerWidth};if(!size.height){mode=d.compatMode;if(mode||!$.support.boxModel){domObject=mode==='CSS1Compat'?documentElement:d.body;size={height:domObject.clientHeight,width:domObject.clientWidth}}}return size}function getViewportOffset(){return{top:w.pageYOffset||documentElement.scrollTop||d.body.scrollTop,left:w.pageXOffset||documentElement.scrollLeft||d.body.scrollLeft}}function checkInView(){var $elements=$(),elementsLength,i=0;$.each(inviewObjects,function(i,inviewObject){var selector=inviewObject.data.selector,$element=inviewObject.$element;$elements=$elements.add(selector?$element.find(selector):$element)});elementsLength=$elements.length;if(elementsLength){viewportSize=viewportSize||getViewportSize();viewportOffset=viewportOffset||getViewportOffset();for(;i<elementsLength;i++){if(!$.contains(documentElement,$elements[i])){continue}var $element=$($elements[i]),elementSize={height:$element.height(),width:$element.width()},elementOffset=$element.offset(),inView=$element.data('inview'),visiblePartX,visiblePartY,visiblePartsMerged;if(!viewportOffset||!viewportSize){return}if(elementOffset.top+elementSize.height>viewportOffset.top&&elementOffset.top<viewportOffset.top+viewportSize.height&&elementOffset.left+elementSize.width>viewportOffset.left&&elementOffset.left<viewportOffset.left+viewportSize.width){visiblePartX=((viewportOffset.left>elementOffset.left)&&((viewportOffset.left+viewportSize.width)<(elementOffset.left+elementSize.width))?'middle':viewportOffset.left>elementOffset.left?'right':(viewportOffset.left+viewportSize.width)<(elementOffset.left+elementSize.width)?'left':'both');visiblePartY=((viewportOffset.top>elementOffset.top&&((viewportOffset.top+viewportSize.height)<(elementOffset.top+elementSize.height)))?'middle':(viewportOffset.top>elementOffset.top)?'bottom':(viewportOffset.top+viewportSize.height)<(elementOffset.top+elementSize.height)?'top':'both');visiblePartsMerged=visiblePartX+"-"+visiblePartY;if(!inView||inView!==visiblePartsMerged){$element.data('inview',visiblePartsMerged).trigger('inview',[true,visiblePartX,visiblePartY])}}else if(inView){$element.data('inview',false).trigger('inview',[false])}}}}$(w).bind("scroll resize",function(){viewportSize=viewportOffset=null});setInterval(checkInView,250)})(jQuery);

/* jQuery tubular plugin
|* by Sean McCambridge
|* http://www.seanmccambridge.com/tubular
|* version: 1.0
|* updated: October 1, 2012
|* since 2010
|* licensed under the MIT License
|* Enjoy.
|* 
|* Thanks,
|* Sean */

/*(function(e,t){var n={ratio:16/9,videoId:"ZCAnLxRvNNc",mute:true,repeat:true,width:e(t).width(),wrapperZIndex:99,playButtonClass:"tubular-play",pauseButtonClass:"tubular-pause",muteButtonClass:"tubular-mute",volumeUpClass:"tubular-volume-up",volumeDownClass:"tubular-volume-down",increaseVolumeBy:10,start:0};var r=function(r,i){var i=e.extend({},n,i),s=e("body");$node=e(r);var o='<div id="tubular-container" style="overflow: hidden; position: fixed; z-index: -1; width: 100%; height: 100%"><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: -1; position: absolute; left: 0; top: 0;"></div>';e("html,body").css({width:"100%",height:"100%"});s.prepend(o);$node.css({position:"relative","z-index":i.wrapperZIndex});t.player;t.onYouTubeIframeAPIReady=function(){player=new YT.Player("tubular-player",{width:i.width,height:Math.ceil(i.width/i.ratio),videoId:i.videoId,playerVars:{controls:0,showinfo:0,modestbranding:1,wmode:"transparent"},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})};t.onPlayerReady=function(e){u();if(i.mute)e.target.mute();e.target.seekTo(i.start);e.target.playVideo()};t.onPlayerStateChange=function(e){if(e.data===0&&i.repeat){player.seekTo(i.start)}};var u=function(){var n=e(t).width(),r,s=e(t).height(),o,u=e("#tubular-player");if(n/i.ratio<s){r=Math.ceil(s*i.ratio);u.width(r).height(s).css({left:(n-r)/2,top:0})}else{o=Math.ceil(n/i.ratio);u.width(n).height(o).css({left:0,top:(s-o)/2})}};e(t).on("resize.tubular",function(){u()});e("body").on("click","."+i.playButtonClass,function(e){e.preventDefault();player.playVideo()}).on("click","."+i.pauseButtonClass,function(e){e.preventDefault();player.pauseVideo()}).on("click","."+i.muteButtonClass,function(e){e.preventDefault();player.isMuted()?player.unMute():player.mute()}).on("click","."+i.volumeDownClass,function(e){e.preventDefault();var t=player.getVolume();if(t<i.increaseVolumeBy)t=i.increaseVolumeBy;player.setVolume(t-i.increaseVolumeBy)}).on("click","."+i.volumeUpClass,function(e){e.preventDefault();if(player.isMuted())player.unMute();var t=player.getVolume();if(t>100-i.increaseVolumeBy)t=100-i.increaseVolumeBy;player.setVolume(t+i.increaseVolumeBy)})};var i=document.createElement("script");i.src="//www.youtube.com/iframe_api";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(i,s);e.fn.tubular=function(t){return this.each(function(){if(!e.data(this,"tubular_instantiated")){e.data(this,"tubular_instantiated",r(this,t))}})}})(jQuery,window)
*/