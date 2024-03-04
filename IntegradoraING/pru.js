	var A = 0;
	var B = 0;
	var C = 0;


function sumaa(){
	if(true) {

	A++;
	B--;
	C--;

}
else {

	A--;
	B++;
	C++;
}
}

function sumab(){
	if(true) {

	A--;
	B++;
	C--;

}
else {

	A++;
	B--;
	C++;
}
}

function sumac(){
	if(true) {

	A--;
	B--;
	C++;

}
else {

	A++;
	B++;
	C--;
}
}

function resultados(){
	if (A>B && A>C) {

		var agg = localStorage.getItem("usuario");
		var ca = "Humanidades";

	var url = encodeURI('http://127.0.0.1/integradora2/carrera.php?Car='+ ca +'&Nom=' + agg);
	fetch(url, {method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors" 
    });

	  window.location.href = 'http://localhost/IntegradoraING/res1.html';

	}

	else if (B>A && B>C) {

		var agg = localStorage.getItem("usuario");
		var ca = "Ciencias";

	var url = encodeURI('http://127.0.0.1/integradora2/carrera.php?Car='+ ca +'&Nom=' + agg);
	fetch(url, {method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors" 
    });

	  window.location.href = 'http://localhost/IntegradoraING/res2.html';

	}

	else if (C>A && C>B) {

		var agg = localStorage.getItem("usuario");
		var ca = "Ingenieria";

	var url = encodeURI('http://127.0.0.1/integradora2/carrera.php?Car='+ ca +'&Nom=' + agg);
	fetch(url, {method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors"
    });

		window.location.href = 'http://localhost/IntegradoraING/res3.html';

	}
}

/*
function veruser(){
	var usuaaaa = localStorage.getItem("usuario");
	console.log(usuaaaa);
} 
*/