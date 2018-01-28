$(function(){


	//List of plans which contains arrays of partials
	var plans = {
		minimal:['thresholds','door-part','rear-bumper','mirror','lights','door-knob'],
		basic:['hood-part','wing-part','front-bumper','mirror','lights','door-knob','fog-lights'],
		basicPlus:['hood','wing-part','front-bumper','mirror','lights','door-knob','fog-lights'],
		basicDplus:['hood','wings','front-bumper','mirror','lights','door-knob','fog-lights'],
		basicTrplus:['hood','wings','rear-bumper','mirror','lights','door-knob','fog-lights','rear-bumper'],
		whole:['thresholds','door-part','door-knob','front-bumper','rear-bumper','mirror','fog-lights','lights','wing-part','wing','hood','hood-part']
	}
	var carView = $('.car_view_img');
	var partView = $('.view_part');
	var carClass = 'mercedez/'; 
	var icons = $('.view_item');
	var dropDownList = $('.plan_part-list');

	//Changing a car class

	$('.cost-calc').on('click',function(e){
		e.preventDefault();
		$('.car-class_list').find('img').removeClass('active');
		console.log($(this).attr('data-car'));
		$(this).find('img').addClass('active');
		carClass = $(this).attr('data-car');
	});

	// Displaing default plan Standart++

	defaultPlan();

	//Changing plans and part which included

	$('.plan_item, .part-list_item').on({
		mouseenter:function(e){
			icons.css({display:'none'});

			var dataPlan = $(this).attr('data-img');
			carView.attr('src','img/' +carClass+ dataPlan+ '.jpg');
			$(this).toggleClass('is-active');

			if($(this).hasClass('plan_item')){	
				for(var i = 0;i<plans[dataPlan].length;i++){
					for(var j =0;j<icons.length;j++){
						if(plans[dataPlan][i]===icons.eq(j).data('part')){
							icons.eq(j).css({display:'block'});
						}
					}
				}
			}	
		},mouseleave:function(){
			$(this).toggleClass('is-active');	
		}
	});

	//FadeIn partials list

	$('.plan_list-item_drop-down').on('click',function(){
		dropDownList.fadeToggle(function(){
		});
	});

	$('.part-list_item').on();

	function defaultPlan(){
		for(var i = 0;i<plans.basicDplus.length;i++){
				for(var j =0;j<icons.length;j++){
					if(plans.basicDplus[i]===icons.eq(j).data('part')){
						icons.eq(j).css({display:'block'});
					}
				}
			}	
	}

});