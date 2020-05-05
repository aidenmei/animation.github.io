// JavaScript Document
$(function(){
	$('.leftBg').show().addClass('animated fadeInLeft');
	$('.rightBg').show().addClass('animated fadeInRight');
	setTimeout(function(){
		$('.leftBg').removeClass('fadeInLeft');
		$('.rightBg').removeClass('fadeInRight');
		$('.logo a img').show().addClass('animated bounceInDown');
		setTimeout(function(){
			$('.logo a img').removeClass('bounceInDown');
			$('.big_word img').show().addClass('animated flip');
			setTimeout(function(){
				$('.big_word img').removeClass('flip');
				$('.btnbg').show().addClass('animated rotateIn');
				$('.peo').show().addClass('animated bounceIn');
				$('.btnbg_rf').show().addClass('animated lightSpeedIn');
						
				setInterval(function(){
					$('.btn_arow,.btnWord,.btn_arow_rf,.btnWord_rf').show().addClass('animated tada');
					setTimeout(function(){
						$('.btn_arow,.btnWord,.btn_arow_rf,.btnWord_rf').removeClass('tada');
						},3000);
				}, 1000*2);
				///////////////	
				setTimeout(function(){
					$('.btnbg').removeClass('rotateIn');
					$('.btnbg_rf').removeClass('lightSpeedIn');
					$('.btnWord').show().addClass('animated rotateInDownLeft');
					$('.btnWord_rf').show().addClass('animated flipInY');
					$('.work').show().addClass('animated lightSpeedIn');
					setTimeout(function(){
						$('.btnWord').removeClass('rotateInDownLeft');
						$('.btnWord_rf').removeClass('flipInY');
						$('.work').removeClass('lightSpeedIn');
						setTimeout(function(){
							$('.house').show().addClass('animated swing');
							$('.big_word_rf img').show().addClass('animated rotateInUpRight');
							setTimeout(function(){
								$('.house').removeClass('swing');
								$('.big_word_rf img').removeClass('rotateInUpRight');
								},1000);
							},1000);
						},1000);
					},1000);
				},1000);
			},1000);
	},1000);
})

