## Custom Widget for [Wakanda](http://wakanda.org)
The __BindMe__ widget is an example of how to bind a datasource property to the widget 

### Properties
This widget has the following properties: 

* __value__: The data binding value of the widget

### Goals
The __BindMe__ is an example of how to bind a datasource attribute to the widget using both the widget.js and designer.js

1. Add the binding property and the onChange method in the widget.js



### widget.js

```
	// the method addProperty automatically creates a bindable attribute 
	// it also adds that attribute to the Studio
	
        BindMe.addProperty('MyName', {
                onChange: function(v) {
                          this.node.innerHTML = "Hello " + v + ", how are you?"; 
                }
        });

```

### designer.js
	
```
     ////// IMPORTANT, NOTHING IS NEEDED IF YOU USED THE addAttribute method, but you can also manually do it by :

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
```

### Wakanda Studio

1. Drag the widget to your Wakanda page. 
2. Select a datasource
3. Drop a datasource string attribute to the widget
4. Run the page, the string should be in the widget
5. When the datasource changes its value in the page, the widget should respond accordingly



### CSS
The __BindMe__ CSS will define the background color of the widget.  
You can adjust its color by changing directly in the Studio OR by changing the /css/widget.css file.  


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.

