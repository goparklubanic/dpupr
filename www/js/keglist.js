$('document').ready(function(){
	var kg = localStorage.getItem('kodeprog');
		
	$.getJSON(server+"dakeg.php?kg="+kg, function(result){
       var program = result.program[0];
       $("#namaprogram").append(
       "<p><label>Program</label><br/><span>"+program.pro+"</p>"+
       "<p><label>Sub Program</label><br/><span>"+program.sub+"</p>"
       );
       var keg=result.kegiatan;
       $.each(keg,function(i,data){
		   $("#keglist").append(
            "<li class='act'>"+
            "<a href='#' onClick=keginfo('"+data.kode+"')>"+
            data.nama+"</a></li>"); 
	   });
    });
});

function keginfo(kode){
	localStorage.setItem('kodekeg',kode);
	window.location='keginfo.html';
}
