/* ========================================
   CiberGuardianesEC - Sistema de Preguntas Aleatorias
   Funciona en todos los módulos
   ======================================== */

// Función para seleccionar preguntas aleatorias
function seleccionarPreguntasAleatorias(banco, cantidad) {
    // Mezclar el banco de preguntas (algoritmo Fisher-Yates)
    const bancoMezclado = [...banco];
    for (let i = bancoMezclado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bancoMezclado[i], bancoMezclado[j]] = [bancoMezclado[j], bancoMezclado[i]];
    }
    
    // Retornar las primeras 'cantidad' de preguntas
    return bancoMezclado.slice(0, cantidad);
}

// Función para renderizar preguntas en el contenedor
function renderizarPreguntas(preguntas, contenedorId, funcionVerificar) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';
    
    preguntas.forEach((pregunta, index) => {
        const preguntaHTML = `
            <div class="correo-ejemplo" style="margin-bottom: 25px;">
                <h4>${pregunta.icono || '📋'} ${pregunta.plataforma || 'Situación'} ${index + 1}</h4>
                <p><strong>Situación:</strong> ${pregunta.situacion}</p>
                <p><strong>Riesgo:</strong> ${pregunta.riesgo}</p>
                
                <div style="margin-top: 15px;">
                    <p><strong>¿Qué deberías hacer?</strong></p>
                    ${pregunta.opciones.map(opcion => `
                        <button onclick="${funcionVerificar}(${pregunta.id}, '${opcion.valor}', this)" 
                                style="background-color: ${opcion.correcta ? '#2ecc71' : '#ff6b6b'}; 
                                       margin: 5px; display: block; width: 100%; margin-bottom: 8px;">
                            ${opcion.texto}
                        </button>
                    `).join('')}
                </div>
                
                <div id="resultado-${pregunta.id}" style="margin-top: 10px; padding: 10px; display: none; border-radius: 8px;"></div>
            </div>
        `;
        
        contenedor.innerHTML += preguntaHTML;
    });
}

// Función para verificar respuesta
function verificarRespuesta(preguntaId, valor, boton, bancoPreguntas) {
    const pregunta = bancoPreguntas.find(p => p.id === preguntaId);
    const resultado = document.getElementById(`resultado-${preguntaId}`);
    const opciones = boton.parentElement.querySelectorAll('button');
    
    // Deshabilitar todos los botones de esta pregunta
    opciones.forEach(btn => btn.disabled = true);
    
    // Verificar si es correcta
    const opcionCorrecta = pregunta.opciones.find(op => op.valor === valor);
    
    if (opcionCorrecta && opcionCorrecta.correcta) {
        resultado.className = 'fuerte';
        resultado.innerHTML = `✅ ¡CORRECTO! ${pregunta.explicacion || 'Bien identificado.'}`;
    } else {
        resultado.className = 'debil';
        resultado.innerHTML = `❌ Incorrecto. ${pregunta.explicacion || 'Revisa los consejos de seguridad.'}`;
    }
    
    resultado.style.display = 'block';
}

// Función para cargar nuevas preguntas aleatorias
function cargarNuevasPreguntas(bancoPreguntas, cantidad, contenedorId, funcionVerificar) {
    const preguntasSeleccionadas = seleccionarPreguntasAleatorias(bancoPreguntas, cantidad);
    renderizarPreguntas(preguntasSeleccionadas, contenedorId, funcionVerificar);
}
