(function(b){var a={init:function(d){this.addClass("ui-progress-bar");this.addClass("ui-container");this.addClass("transition");var c=document.createElement("div");c.setAttribute("class","ui-progress");c.setAttribute("style","width: 0%;");this.append(c);return this},update:function(c){this.children().css("width",c+"%");return this}};b.fn.cssProgressBar=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)
}else{b.error("Method "+c+" does not exist on jQuery.tooltip")}}}})(jQuery);