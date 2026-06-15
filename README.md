# 🛡️ CiberGuardianesEC

## 🌐 Enlace al proyecto

**Accede a la aplicación:** [https://ciberguardianesec.base44.app/](https://ciberguardianesec.base44.app/)

---

## 📖 Descripción

**CiberGuardianesEC** es una plataforma educativa gratuita diseñada para fortalecer la seguridad digital en Ecuador y toda la comunidad hispanohablante. La aplicación ofrece módulos interactivos, retos prácticos, insignias de progreso y un asistente de inteligencia artificial (**CiberBot**) que resuelve dudas en tiempo real, 24/7.

Desarrollada con **Base44** (una plataforma low‑code impulsada por IA) e integrando la API de **Groq** para el chatbot, esta herramienta demuestra cómo cualquier educadora o emprendedora social puede construir tecnología educativa de impacto sin necesidad de saber programar.

---

## ✨ Características principales

- **🎓 Módulos educativos interactivos** – Contenido estructurado sobre ciberseguridad: contraseñas seguras, phishing, privacidad, etc.
- **🏆 Retos prácticos** – Actividades gamificadas para aplicar los conocimientos.
- **🎖️ Insignias de progreso** – Sistema de reconocimiento que motiva el aprendizaje continuo.
- **🤖 CiberBot (IA 24/7)** – Asistente virtual que responde preguntas al instante, gracias a la API de Groq.
- **🇪🇨 Enfoque local** – Desarrollado específicamente para el contexto educativo ecuatoriano.
- **💰 100% gratuito** – Sin barreras económicas, accesible desde cualquier navegador.

---

## 🛠️ Tecnologías utilizadas

| Herramienta | Propósito |
|-------------|-----------|
| **Base44** | Plataforma low‑code impulsada por IA para construir la webapp sin escribir código manual[reference:0] |
| **Groq (API)** | Motor de inteligencia artificial que potencia a CiberBot, ofreciendo respuestas rápidas y gratuitas |
| **HTML/CSS/JS** | Generado automáticamente por Base44 para la interfaz de usuario[reference:1] |
| **Base44 Backend** | Gestión de autenticación, base de datos, hosting y lógica del lado servidor[reference:2] |

Base44 utiliza un enfoque conversacional: describes tu idea en lenguaje natural y la plataforma genera automáticamente la estructura de la aplicación, la interfaz de usuario, el backend y el esquema de la base de datos[reference:3]. Esto permite construir prototipos funcionales en minutos sin configurar servidores ni bases de datos manualmente. 

---

## 🧠 ¿Cómo funciona CiberBot (el asistente de IA)?

CiberBot es el asistente virtual de CiberGuardianesEC. Cuando un usuario escribe una pregunta, el flujo es:

1. La interfaz de la app captura el mensaje.
2. Se envía una petición POST a un Cloudflare Worker (configurado dentro de Base44).
3. El Worker reenvía la consulta a la API de Groq (modelo Llama 3).
4. Groq genera una respuesta educativa y clara.
5. La respuesta regresa al usuario en cuestión de segundos.

De esta forma, CiberBot puede resolver cualquier duda sobre ciberseguridad, sin depender de respuestas predefinidas.

---

## 🚀 ¿Cómo puedes contribuir?

CiberGuardianesEC es un proyecto abierto a la comunidad educativa. Puedes contribuir de las siguientes maneras:

1. **Comparte la app** con docentes, estudiantes y familias.
2. **Reporta errores** o sugiere mejoras a través de los canales de contacto.
3. **Difunde el proyecto** en redes sociales usando el hashtag `#CiberGuardianesEC`.
4. **Adapta el contenido** – Si eres educadora, puedes usar esta misma estructura para crear tu propia versión adaptada a tu materia.

---

## 🙏 Agradecimientos

- A **Base44**, por democratizar la creación de aplicaciones y hacer posible este proyecto.
- A **Groq**, por ofrecer IA rápida y gratuita para entornos educativos.
- A la comunidad educativa de Ecuador, por inspirar esta iniciativa.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Puedes usarlo, modificarlo y compartirlo libremente, siempre que se mantenga el crédito correspondiente.

---

## 📧 Contacto

¿Tienes preguntas o quieres colaborar? Escríbeme a través de los canales de contacto disponibles en la app o en mis redes profesionales. IG y X: @dianaimaldonado

---

**¡Fortalece tu seguridad digital con CiberGuardianesEC!**  
🔐 Accede ahora: [https://ciberguardianesec.base44.app/](https://ciberguardianesec.base44.app/)
