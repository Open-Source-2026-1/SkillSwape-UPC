### Especificación de User Story: US01

| Campo | Detalle |
| :--- | :--- |
| **ID** | **US01** |
| **Título** | Registro validado con correo institucional |
| **Épica** | Gestión de Cuentas y Perfiles |
| **Descripción** | Como usuario, quiero registrarme en la plataforma usando exclusivamente mi correo institucional (.edu.pe), para garantizar la seguridad del ecosistema y automatizar mi validación. |
| **Prioridad** | **Alta** |
| **Criterios de Aceptación** | • El formulario debe requerir correo y contraseña.<br>• El sistema debe rechazar dominios comerciales (ej. @gmail.com).<br>• Al registrarse con éxito, el sistema debe enviar un enlace de confirmación al correo institucional. |
| **Escenarios** | **Escenario 1 - Registro exitoso:**<br>• **Dado** que estoy en la página de registro<br>• **Cuando** ingreso mi correo .edu.pe y contraseña<br>• **Entonces** el sistema crea mi cuenta y envía un correo de validación.<br><br>**Escenario 2 - Correo inválido:**<br>• **Dado** que intento registrarme<br>• **Cuando** ingreso "juan@gmail.com"<br>• **Entonces** el sistema muestra el error "Solo se admiten correos institucionales peruanos". |
