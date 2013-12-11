WAF.define('BindMe', function() {
	
	var widget = WAF.require('waf-core/widget');
    
    //creating the widget
	var BindMe = widget.create('BindMe');


	BindMe.addProperty('myname', {
		onChange: function(v) {
          		this.node.innerHTML = "Hello " + v + ", how are you?"; 
		}
	});



	return BindMe;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
