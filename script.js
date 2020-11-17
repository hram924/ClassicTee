$(document).ready(function() {
///Function to display the selected size
  var btnValue = "";
  $('#aBtnGroup button').on('click', function() {
    var thisBtn = $(this);
    
    thisBtn.addClass('active').siblings().removeClass('active');
    var btnText = thisBtn.text();
    btnValue = thisBtn.val();
    console.log(btnText + ' - ' + btnValue);
    
    $('#selectedVal').text(btnValue);
	
	
  });
 ///function to send a request adding to the cart. this is incompleted as i exceeded the time limit
  $('#cart').on('click', function() {
	if(btnValue.length == 1){
		var pos = btnValue;
        	$.get( "data.json", {"Size": btnValue} )
             .done(function( data ) {
					var total = data.count;
					total = total + 1;
					$.ajax({
						url: 'data.json',
						type: 'PUT',
						data: {
							"Size": btnValue,
							"Count": total
						}
					});
				 });
	}
  });
///function to display the error message when size is not selected
  $("#cart").click(function(){
         if(btnValue==""){
			 $('#err').show();
		 }
    });
});
