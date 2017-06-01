$('document').ready(function(){
	var kp = localStorage.getItem('kodeprog');
	var kk = localStorage.getItem('kodekeg');
	
	$.ajax({url:server+'keginfo.php?info=kgtn&kdg='+kk,
	success:function(info){
		$('#keg-umum').html(info);
	}});
	
	$.ajax({url:server+'keginfo.php?info=ktrx&kdg='+kk,
	success:function(info){
		$('#keg-kontrak').html(info);
	}});
	
	$.ajax({url:server+'keginfo.php?info=crew&kdg='+kk,
	success:function(info){
		$('#keg-crew').html(info);
	}});
	
	$.ajax({url:server+'keginfo.php?info=vndr&kdg='+kk,
	success:function(info){
		$('#keg-kontraktor').html(info);
	}});

});


