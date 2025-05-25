
  function evaluar() {
    // Obtener los valores seleccionados de cada emoción (0 a 3).
    const ansiedad = parseInt(document.querySelector('input[name="ansiedad"]:checked')?.value || 0);
    const estres = parseInt(document.querySelector('input[name="estres"]:checked')?.value || 0);
    const tristeza = parseInt(document.querySelector('input[name="tristeza"]:checked')?.value || 0);
    const enojo = parseInt(document.querySelector('input[name="enojo"]:checked')?.value || 0);

    // Guardar las emociones y sus puntajes en un objeto
    const emociones = { ansiedad, estres, tristeza, enojo };

    // Determinar cuál emoción tiene el mayor valor
    let emocionPredominante = null;
    let maxValor = -1;

    for (let emocion in emociones) {
      if (emociones[emocion] > maxValor) {
        maxValor = emociones[emocion];
        emocionPredominante = emocion;
      }
    }

    // Mostrar la carta correspondiente a la emoción detectada
    mostrarCarta(emocionPredominante);
  }

  function mostrarCarta(emocion) {
    const resultado = document.getElementById("resultado");
    let contenido = "";

    // Dependiendo de la emoción detectada, mostramos una carta personalizada
    switch (emocion) {
      case "ansiedad":
        contenido = `
          <div class="carta">
            <h2>Ansiedad 🫨</h2>
            <p>Te recomendamos hacer ejercicios de respiración, pausas activas y actividades que disfrutes. Si lo necesitas, habla con alguien de confianza.</p>
          </div>`;
        break;
      case "estres":
        contenido = `
          <div class="carta">
            <h2>Estrés 😵‍💫</h2>
            <p>Organiza tus tareas, tómate descansos y busca momentos para relajarte. Recuerda que tu bienestar es una prioridad.</p>
          </div>`;
        break;
      case "tristeza":
        contenido = `
          <div class="carta">
            <h2>Tristeza 😢</h2>
            <p>Rodéate de personas que te hagan bien, haz cosas que te alegren y no dudes en buscar apoyo emocional. No estás solo/a.</p>
          </div>`;
        break;
      case "enojo":
        contenido = `
          <div class="carta">
            <h2>Enojo 😡</h2>
            <p>Intenta respirar profundamente, hacer ejercicio o escribir lo que sientes. Expresar tus emociones de forma sana es clave.</p>
          </div>`;
        break;
      default:
        contenido = `<p>No pudimos determinar claramente tu estado emocional.</p>`;
    }

    // Agregamos un botón para reiniciar el formulario
    contenido += `
      <button onclick="reiniciarFormulario()" style="margin-top: 15px;">🔁 Reiniciar</button>
    `;

    // Mostrar el contenido final dentro del div resultado
    resultado.innerHTML = contenido;
  }

  function reiniciarFormulario() {
    // Resetea el formulario (borra todas las respuestas)
    document.getElementById("emocionalForm").reset();

    // Limpia el resultado mostrado (la carta)
    document.getElementById("resultado").innerHTML = "";
  }
