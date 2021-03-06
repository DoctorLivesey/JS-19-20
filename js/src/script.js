/*SLIDER*/
$(function(){
	
	$('.single-item').slick({
	  infinite: true,
      dots: true,
      slidesToShow: 1
	});	
});
/*ACCORDEON*/
$(function(){
  $('.banners-submenu').hide();
  $('.plus-wrap').click(function(){
	if($(this).hasClass('color')){
	  $(this).next().slideUp();
	  $(this).removeClass('color');
	  $(this).find('.plus').html('+').css('border-right', '2px solid grey');;
	}else{
	  $('.banners-submenu').slideUp();
	  $('.plus-wrap').removeClass('color');
	  $('.plus').html('+').css('border-right', '2px solid grey');
	  $(this).find('.plus').html('-').css('border-right', '1px solid #FFD700');
	  $(this).addClass('color');
	  $(this).next().slideDown();
	  return false;
	}
  });
});
/*TASK 2*/
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function(data){
  var newData = _.union(_.flatten(_.map(data, 'skills'))).sort();
  var dataName =_.map(_.sortBy(data, function (item){return item.friends.length;}), 'name');
  var dataFriends = _.union(_.map(_.flatten(_.map(data,'friends')), 'name'));
  console.log('Name:',dataName);
  console.log('Skills:', newData);
  console.log('Friends:',dataFriends);
});
