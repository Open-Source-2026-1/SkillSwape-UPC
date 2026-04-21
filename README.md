# Innovify - Plataforma de Tutorías Universitarias

## Link del repositorio: https://github.com/Open-Source-2026-1/SkillSwape-UPC.git 
## Link del canvas: https://canva.link/4f80xsclhhvhxs1 

## Descripción del Proyecto
**Innovify** es una plataforma educativa diseñada para reducir el aislamiento académico y fomentar el aprendizaje colaborativo entre pares. Conecta a estudiantes que buscan apoyo académico (**Learners**) con estudiantes destacados dispuestos a enseñar (**Tutors**). Además, incorpora un entorno B2B institucional que permite a los docentes (**Professors**) monitorear el rendimiento académico de sus facultades mediante un "Termómetro Académico" y Quizzes Oficiales.

##  Funcionalidades Principales (Bounded Contexts)

La plataforma está diseñada bajo una arquitectura escalable, dividiendo la lógica de negocio en los siguientes dominios:

* ** Identity & Access:** Registro exclusivo con validación de dominios institucionales (`.edu.pe`), autenticación segura mediante JWT y gestión estricta de roles.
* ** Tutoring & Operations:** Búsqueda ágil de tutores, reserva de sesiones de estudio, y un entorno de aprendizaje en vivo que incluye videollamadas (WebRTC) y chat en tiempo real con intercambio de archivos.
* ** Academic & Assessment:** Banco de preguntas para Quizzes Oficiales, gestión de disputas académicas y un dashboard de métricas B2B para asegurar la calidad educativa.
* ** Monetization:** Sistema seguro de donaciones voluntarias mediante tarjeta, cálculo automatizado de comisiones y billetera virtual (Wallet) para los tutores.

##  Stack Tecnológico

El proyecto utiliza un stack moderno y orientado al alto rendimiento, separado en microservicios lógicos y una Single-Page Application:

### Frontend
* **Framework/Librería:** React / Angular (Vite)
* **Estilos:** HTML, CSS, TailwindCSS
* **UX/UI:** Diseñado en Figma con soporte para internacionalización (i18n - ES/EN)

### Backend & Arquitectura
* **Framework:** .Java
* **Arquitectura:** Domain-Driven Design (DDD), CQRS y Arquitectura Hexagonal.
* **API Gateway:** Varias (Enrutamiento y balanceo de carga)
* **ORM:** Entity Framework Core

### Base de Datos & Nube
* **Database:** Duda
* **Almacenamiento:** AWS S3 (Cloud Storage para archivos adjuntos)
* **Videollamadas:** WebRTC API (Agora / Twilio)
* **Pagos:** Stripe API
* **Comunicaciones:** SendGrid (Emails transaccionales)

## Arquitectura del Sistema
El diseño del sistema ha sido documentado utilizando el **C4 Model**, abarcando:
1. **Context Level:** Interacción entre los usuarios (Learner, Tutor, Professor) y sistemas externos (Stripe, AWS S3, SendGrid).
2. **Container Level:** Separación entre la Web App, el API Gateway y los Bounded Contexts.
3. **Component Level:** Implementación del patrón Controlador -> Servicio -> Repositorio para cada módulo de negocio.


##  Autores y Equipo de Desarrollo

* **Víctor Manuel Alberca Saavedra** 
* **David Komatsu**
* **Luis Ángel Becerra**
* **Vargas Alarcon, Santiago Enrique**
* **Pacheco Lavado, Rafael Agustin**

---

*Proyecto desarrollado bajo metodologías ágiles (Scrum) y GitFlow.*
