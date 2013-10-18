(function() {
    var BindMe = Widget.BindMe.inherit(WAF.require('waf-behavior/studio'));

	//adding the attributes to the Studio
    BindMe.addAttributes([{
        name: 'data-value',
        description: 'BindMe value',
        typeValue: 'string',
        defaultValue: '' 
    },{
        name: 'data-binding-value',
        description: 'BindMe with Source',
        typeValue: 'datasource'
    }]);

    /*Default size*/
    BindMe.setWidth('200');
    BindMe.setHeight('20');

})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html