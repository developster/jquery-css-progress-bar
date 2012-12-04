(function ($) {
	
	var methods = {
		init : function (options) {
		    var applied = this.data("cssProgressBar");
		    if (applied) {
		        return this;
		    }
		    this.data("cssProgressBar", true);
		    
			this.addClass("ui-progress-bar");
			this.addClass("ui-container");
			this.addClass("transition");
			
			var progressDiv = document.createElement('div');
			progressDiv.setAttribute("class", "ui-progress");
			progressDiv.setAttribute("style", "width: 0%;");
			this.append(progressDiv);
			
			return this;
		},
		update : function (perc) {
			this.children().css("width", perc + "%");
			return this;
		}
	};
	
	$.fn.cssProgressBar = function (method) {
	    if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.cssProgressBar');
		}    
    };
	
})(jQuery);
