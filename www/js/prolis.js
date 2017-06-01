
$('document').ready(function(){
	$.getJSON(server+"daprog.php", function(result){
        $.each(result, function(i, data){
            $("#prolist").append(
            "<li class='"+data.clas+"'>"+
            "<a href='#' onClick=keglist('"+data.kode+"')>"+
            data.nama+"</a></li>");
        });
    });
});

function keglist(kode){
	localStorage.setItem('kodeprog',kode);
	window.location='keglist.html';
}
