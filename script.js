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
          <div class="cartaForm">
            <h2>Ansiedad 🫨</h2>
            <p>Te recomendamos </p>
          </div>`;
        break;
      case "estres":
        contenido = `
          <div class="cartaForm">
            <h2>Estrés 😵‍💫</h2>
            <p>Te recomendamos</p>
          </div>`;
        break;
      case "tristeza":
        contenido = `
          <div class="cartaForm">
            <h2>Tristeza 😢</h2>
            <p>Te recomendamos</p>
          </div>`;
        break;
      case "enojo":
        contenido = `
          <div class="cartaForm">
            <h2>Enojo 😡</h2>
            <p>Te recomendamos</p>
          </div>`;
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