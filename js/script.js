

// kontakformular kontakt // 
function mysend() {
	document.getElementById("btnknap").innerText="Sender...";
}

function mysend2() {
	document.getElementById("btnknap2").innerText="Sender...";
}

function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

$(document).ready(function () {
	$("#indkøbskurv").click(function () {
		alert("Siden er under udarbejdelse - køb af vores produkter kan ske via henvendelse ved opringning eller vores kontaktformular under menuen kontakt")
	});

});

	$(document).ready(function () {
	$(".lægikurv").click(function () {
		alert("Siden er under udarbejdelse - køb af vores produkter kan ske via henvendelse ved opringning eller vores kontaktformular under menuen kontakt")
	});
});