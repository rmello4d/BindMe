(function() {
    var widget = WAF.require('waf-core/widget');
    
    //creating the widget
    var BindMe = widget.create('BindMe');

	// customizing the actions when the value is binded
    BindMe.prototype._setValue = function (value) {
 			this.node.innerHTML = value + " + Hello World"; 
    };
 
 	// adding a property automatically makes the property bindable
    BindMe.addProperty('value', {
    	default_value: 'Default',
    	setter: BindMe.prototype._setValue
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
