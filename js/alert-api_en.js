/* DaTouWang URL: www.datouwang.com */
$(function(){	
	$('.alert-api-list').css('height',$(window).height());
   	$(window).scroll(function(){

   		if($(window).scrollTop() >= 224){
   			$('.alert-api-list').css({
   				'top' : $(window).scrollTop() - 224
   			})
   		}else{
   			$('.alert-api-list').css({
   				'top' : 0
   			})
   		}
   	})

   	$(document).delegate('.alert_list a','click',function(){
   		$('.alert_list a').removeClass('alert-api-hover');
   		$(this).addClass('alert-api-hover');
   	})

	SyntaxHighlighter.all();

	var M = {

	}

	products_his ={}

	// 按钮八
	$(document).delegate(".alert-btn8",'click',function(){
		var index =$(this).index();
		$("#products_show").load("en/product/product.html",function(){
		
		if(M.dialog8){
			var _this =$(".alert-content>#products_show .prod_left_box").get(index);
			$(_this).click();
			$(_this).parent().find('a').css({'background-color':''});
			$(_this).find('a').css({'background-color':'green'});

			M.dialog8.show();
			return
		}
		M.dialog8 = jqueryAlert({
			'style'   : 'pc',
			'title'   : ' ',
			'content' :  $("#products_show"),
			'modal'   : true,
			'contentTextAlign' : 'left',
			'width'   : '72%',
			'height'  : '88%',
			'animateType': 'scale',
		})
		$("#products_show .prod_left_box").get(index).click();
	 })
	})

	$(document).delegate(".alert-modal",'click',function(){
		 
		if(M.dialog8){
			M.dialog8.close();
		}
	 })

	$(document).delegate(".prod_left_box",'click',function(){
		var index =$(this).index()+1;
		$(this).parent().find('a').css({'background-color':''});
		$(this).find('a').css({'background-color':'green'});

		$(".prod_right").load("en/product/types/type" + index + ".html",function() {
			$(document).on('click',".prod_box",function(){
					var href =$(this).attr("src");
					if(href !="")
					{
						products_his = $(".prod_right>table").clone(true);
						products_his=products_his[0];
						$(".alert-content .prod_right").load(href);
					}
			})
		})
	 })		
})