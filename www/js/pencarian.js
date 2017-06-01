$('document').ready(function(){
  $("#src-bttn").click(function(){
	  var filter = $('#src-ctgr').val();
	  var keywrd = $('#src-data').val();
	  
	  $.post(server+'lookup.php',{
		  
		  cat: filter,
		  key: keywrd
		  
	  },function(response){
		  $("#responses").html(response);
	  });
  });
});

function detilKeg(data){
	localStorage.setItem('kodekeg',data);
	window.location='keginfo.html';
}
