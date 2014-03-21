WAF.define('WaSlider', ['waf-core/widget'], function(widget) {

    var SliderWidget = widget.create('WaSlider', {
    	tagName: 'input',

  		/* Properties */
        value: widget.property({
            type: 'number',
            defaultValue: 20
        }),
        min: widget.property({
            type: 'number',
            defaultValue: 0
            //bindable: false
        }),
        max: widget.property({
            type: 'number',
            defaultValue: 100
            //bindable: false
        }),
        step: widget.property({
            type: 'number',
            defaultValue: 10,
            //bindable: false
        }),

        init: function() {
			this.node.setAttribute("type","range");  
        }
    });


    return SliderWidget;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */