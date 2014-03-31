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
        	var $node = $(this.node); // jQuery
				  
        	this.value.onChange(function(){
				  $node.val(this.value());	  
        	});
        	this.min.onChange(function(){
        		  $node.attr('min', this.min()); 
        	});
        	this.max.onChange(function(){
        		  $node.attr('max', this.max()); 
        	});
        	this.step.onChange(function(){
        		  $node.attr('step', this.step()); 
        	});
        },
        
        render: function(){
        	var $node = $(this.node);
        	this.node.type = 'range'; //this.node.setAttribute("type","range");
        	
        	$node.val(this.value());
			$node.attr("min",this.min());
			$node.attr("max",this.max());
			$node.attr("step",this.step());
        }
        
    });


    return SliderWidget;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */