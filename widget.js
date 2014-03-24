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
            defaultValue: 20,
            //bindable: false
        }),

        init: function() {
        	this.render();
        	var $node = $(this.node);
        	$node.val(this.value());

        	
        	this.value.onChange(function(){
				  $node.val(this.value());
				  $node.val(this.min());
				  $node.val(this.max());
				  $node.val(this.step());
				  
				  this.render();
        	});

        },
        
        render: function(){
        	
        	this.node.setAttribute("type","range");
			this.node.setAttribute("min",this.min());
			this.node.setAttribute("max",this.max());
			this.node.setAttribute("step",this.step());
			this.node.setAttribute("value",this.value());
        }
        
    });


    return SliderWidget;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */