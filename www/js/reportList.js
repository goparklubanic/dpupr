$('document').ready(function(){
	var kodekeg = localStorage.getItem('kodekeg');
	//$('#replist').html(kodekeg);
	$.getJSON(server+'labulList.php?kdg='+kodekeg,function(rep){
		//console.log("Data Laporan: ",rep);
		var nmk = rep.nmk;
		var lbl = rep.labul;
		$("#namakeg").html(nmk.namakeg);
		$.each(lbl,function(i,data){
			$("#replist").append(
			"<div class='act-group'>"+
			"<div class='act-title title-medium'>Periode Laporan: "+data.bulan+"</div>"+
			"<p><label class='info'>Target Fisik</label>"+
			"<span>"+data.tf+"%</span></p>"+
			"<p><label class='info'>Realisai Fisik</label>"+
			"<span>"+data.rf+"%</span></p>"+
			"<p><label class='info'>Target Anggaran</label>"+
			"<span class='menan'>"+data.ta+" ("+data.pcta+"%)</span></p>"+
			"<p><label class='info'>Realisasi Anggaran</label>"+
			"<span class='menan'>"+data.ra+" ("+data.pcra+"%)</span></p>"+
			"<p><label class='info'>Dana Swakelola</label>"+
			"<span class='menan'>"+data.swa+"</span></p>"+
			"<p><label class='info'>Dana Kontrak</label>"+
			"<span class='menan'>"+data.kon+"</span></p>"+
			"</div>");
		});
	});
});
