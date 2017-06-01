$('document').ready(function(){
	var userid = localStorage.getItem('userid');
	var posisi = localStorage.getItem('posisi');
	
	if(posisi=='PPTK' || posisi=='PPKOM'){
		$.post(server+'validasi.php',
			   {
				uid:userid,
				pos:posisi   
				},function(projects){
					//$("#keglist").html(projects);
					var datapro = JSON.parse(projects);
					console.log('Retrived Data: ',datapro);
					$.each(datapro,function(i,data){
						
						if(data.pptk =='verify.png')
						{
							data.pptk  = "<img src='"+imgsrc+"/verify.png' "+
										 " height='25' onClick=validate('validating.php','"+data.vid+"')>";
							data.ppkom = "<img src='"+imgsrc+"/verify.png' height='20'>";
						}
						
						if(data.ppkom =='verify.png')
						{
							data.ppkom = "<img src='"+imgsrc+"/verify.png' "+
										  " onClick=validate('validating.php','"+data.vid+"') height='25'>";
						}
						
						$("#keglist").append(
						"<div class='act-group'>"+
						"<div class='act-title title-small'>"+
						data.namakeg+" ("+data.kodekeg+")"+
						"</div>"+
						"<p><label class='info'>Bulan</label>"+
						"<span>"+data.bulan+"</span></p>"+
						"<p><label class='info'>PPTK</label>"+
						"<span>"+data.pptk+"</span></p>"+
						"<p><label class='info'>PPKOM</label>"+
						"<span>"+data.ppkom+"</span></p>"+
						"<div>"
						);
					});
					
				});
	}else{
		$.post(server+'validasi.php',{
			pos: posisi
			},
			function(projects){
				var datapro = JSON.parse(projects);
				//console.log("Rerieved Data: ",datapro);
				$.each(datapro,function(i,data){
					$('#keglist').append(
					"<div class='act-group'>"+
					"<div class='act-title title-small'>"+data.nama+
					" ( "+data.kode+" )</div>"+
					"<p><label class='info'>PPTK</label>"+
					"<span>"+data.pptk+"</span></p>"+
					"<p><label class='info'>PPKOM</label>"+
					"<span>"+data.ppkom+"</span></p>"+
					"<p><a href=# class='form-control btn btn-gelap' "+
					" onClick=checkReport('"+data.kode+"')>"+
					"Periksa Laporan</a></p>"+
					"</div>");
				});
				$("#keglist").append(
					"<a href=# class='btn btn-success form-control' "+
					" onClick=validate('validaboss.php','0')>Validasi</a>");
		});
	}
});


function validate(url,vid)
{
	var userid = localStorage.getItem('userid');
	var posisi = localStorage.getItem('posisi');
	$.post(server+url,
	{
		vid:vid,
		uid:userid,
		pos:posisi
	},function(){
		location.reload();
	});
}

function checkReport(kdg){
	localStorage.setItem('kodekeg',kdg);
	window.location='reportList.html';
}
