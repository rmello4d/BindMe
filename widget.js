WAF.define('BindMe', function() {
    var widget = WAF.require('waf-core/widget');
    
    //creating the widget
    var BindMe = widget.create('BindMe');


    BindMe.addProperty('MyName', {
        onChange: function(v) {
          				this.node.innerHTML = "Hello " + v + ", how are you?"; 
        		  }
    });



	return BindMe;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
: BindMe.prototype._setValue
    });


	//********
	// Direct way, without customisation 
	// BindMe.addDomHtmlProperty('value');


	//	 another way by event :
	//	BindMe.addProperty('value')
	//	BindMe.prototype.init=function ( ) {
	//	   this.subscribe(Event.Change, 'value', function( ) { this.node.innerHTML = this.value(); });
	//	}  

})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
