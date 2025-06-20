  //menú
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  
  
  function evaluar() {
    const ansiedad = parseInt(document.querySelector('input[name="ansiedad"]:checked')?.value || 0);
    const estres = parseInt(document.querySelector('input[name="estres"]:checked')?.value || 0);
    const tristeza = parseInt(document.querySelector('input[name="tristeza"]:checked')?.value || 0);
    const enojo = parseInt(document.querySelector('input[name="enojo"]:checked')?.value || 0);

    
    const emociones = { ansiedad, estres, tristeza, enojo };

    
    let emocionPredominante = null;
    let maxValor = -1;

    for (let emocion in emociones) {
      if (emociones[emocion] > maxValor) {
        maxValor = emociones[emocion];
        emocionPredominante = emocion;
      }
    }

    mostrarCarta(emocionPredominante);
  }

  function mostrarCarta(emocion) {
    const resultado = document.getElementById("resultado");
    let contenido = "";


    //Carta
    switch (emocion) {
      case "ansiedad":
        contenido = `
         <div class="grid6">
        <div class="cartaFormulario ">
        <h2>Ansiedad 😟</h2>
            <h6>Sabemos que en este momento tu mente puede sentirse como un torbellino. 
            La ansiedad puede hacer que todo parezca más grande, más urgente, más difícil. 
            Respira, detente un momento, y recuerda: no tienes que solucionarlo todo hoy. 
            Estás aquí, has dado un paso importante buscando apoyo, y eso ya dice mucho de tu fuerza. 
            En este espacio encontrarás herramientas para calmar tu mente y reconectar contigo. 
            No estás solo(a), y no tienes que cargar con todo tú mismo(a).</h6>
             <div class="cartaimagen" >
            <img src="imagenes/ansiedad.png" alt="">
        </div>
        </div>
 
    </div>
    
          </div>`;
        break;
      case "estres":
        contenido = `
          <div class="cartaForm">
            <h2>Estres 😵‍💫</h2>
            <h6>Estás enfrentando muchas cosas a la vez, y es comprensible que sientas tensión. 
            El estrés puede volverse una carga invisible, pero muy pesada. Hoy queremos invitarte 
            a hacer una pausa, a reconocer todo lo que has hecho y todo lo que llevas dentro. 
            No eres débil por sentirte agotado(a); eres humano(a). Aquí te ofrecemos un refugio 
            para recargar tu energía, liberar presión y reconectar con lo que te da paz. Tu bienestar 
            es importante, y este momento también es para ti.</h6>
             <div class="cartaimagen" >
            <img src="imagenes/estres.png" alt="">
             </div>
          </div>`;
        break;
      case "tristeza":
        contenido = `
          <div class="cartaForm">
            <h2>Tristeza 😢</h2>
            <h6>La tristeza puede envolvernos en silencio, como una nube que nadie más ve. 
            Si hoy te sientes así, queremos decirte que está bien no estar bien. No tienes que 
            esconder lo que sientes ni poner una sonrisa si por dentro estás cansado(a). En este 
            lugar puedes respirar con libertad, llorar si lo necesitas, y encontrar palabras que 
            sanen poco a poco. A través de cada recurso, te recordamos que tu dolor importa, y que 
            hay caminos hacia la luz, incluso en los días más grises.</h6>
             <div class="cartaimagen" >
            <img src="imagenes/tristeza.png" alt="">
             </div>
          </div>`;
        break;
      case "enojo":
        contenido = `
          <div class="cartaForm">
            <h2>Enojo 😡</h2>
             <h6>El enojo es una emoción poderosa. A veces nace de la frustración, del cansancio, 
             de sentirnos incomprendidos o al límite. Pero no estás mal por sentirlo. Tu enojo también 
             habla de lo que valoras, de lo que te importa. Aquí te ofrecemos un espacio seguro para transformar 
             esa energía en algo que te libere, no que te pese. Puedes expresar sin herir, soltar sin romper, 
             y aprender a escuchar lo que ese enojo quiere decirte sobre ti. Estás aprendiendo, y eso ya es crecer.</h6>
             <div class="cartaimagen" >
            <img src="imagenes/enojo.png" alt="">
             </div>
          </div>`;;
        break;
      default:
        contenido = `<p>No pudimos determinar claramente tu estado emocional.</p>`;
    }

    // reiniciar el formulario
    contenido += `
      <button onclick="reiniciarFormulario()" style="margin-top: 15px;">🔁 Reiniciar</button>
    `;

    // Mostrar el contenido final dentro del div resultado
    resultado.innerHTML = contenido;
  }

  function reiniciarFormulario() {
    document.getElementById("emocionalForm").reset();

    document.getElementById("resultado").innerHTML = "";
  }



 //Mensaje aleatorio
 
 

  window.addEventListener('DOMContentLoaded', function () {
    const consejos = [
      {
        mensaje: "Respira profundo, todo va a estar bien.",
        imagen: "imagenes/respira.png"
      },
      {
        mensaje: "Estás haciendo lo mejor que puedes. Y eso es suficiente.",
        imagen: "imagenes/esfuerzo.png"
      },
      {
        mensaje: "No tengas miedo de pedir ayuda.",
        imagen: "imagenes/ayuda.png"
      },
      {
        mensaje: "Hoy es un buen día para empezar de nuevo.",
        imagen: "imagenes/nuevoDia.png"
      },
      {
        mensaje: "Cada pequeño paso cuenta.",
        imagen: "imagenes/paso.png"
      },
      {
        mensaje: "Tómate un momento para agradecer algo hoy.",
        imagen: "imagenes/agradecer.png"
      },
      {
        mensaje: "Recuerda: eres más fuerte de lo que crees.",
        imagen: "imagenes/fuerza.png"
      },
    ];

    const aleatorio = Math.floor(Math.random() * consejos.length);
    const seleccionado = consejos[aleatorio];

    document.getElementById("mensajeDia").textContent = seleccionado.mensaje;
    document.getElementById("imagenConsejo").src = seleccionado.imagen;
  });

