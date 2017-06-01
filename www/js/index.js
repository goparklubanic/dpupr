$('document').ready(function(){
	
	$("#login").click(function(){
		var userid=$("#simpeluid").val();
		var userks=$("#simpelpwd").val();
		$.post(server+'login.php',
		{
			uid:userid,
			pwd:userks
		},function(result){
			
			var cred = JSON.parse(result);
			var greet = "Login Berhasil.";
			$("#lg-result").html(greet);
			setSession(cred.userid , cred.person , cred.posisi);
		});
	});
	
	$('#log0ut').click(function(){
		localStorage.setItem('kodeprog','00000');
		localStorage.setItem('kodekeg','00000');
		localStorage.setItem('userid','00000');
		localStorage.setItem('posisi','00000');
		localStorage.setItem('person','00000');
		window.location='index.html';
	});
});

function setSession(id,nama,jabatan){
	localStorage.setItem('userid',id);
	localStorage.setItem('posisi',jabatan);
	localStorage.setItem('person',nama);
	window.location='default.html';
}

function welcome(){
	var userid = localStorage.getItem('userid');
	var person = localStorage.getItem('person');
	var posisi = localStorage.getItem('posisi');
	var welcome = "Selamat Datang "+person+"<br/>["+posisi+"]["+userid+"]";
	
	$('#usercred').html(welcome);
	
}
