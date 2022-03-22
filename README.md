# Prueba técnica

## Objetivo

Implementar las funciones básicas del API de autenticación de Clusterby en un proyecto ReactJS.

## Explicación a detalle

En el siguiente apartado, hay una documentación express de los 4 endpoints básicos de nuestro API de autenticación.

Hay uno para iniciar sesión, uno para registro, uno para cerrar sesión, y otro para autenticarse con un token.

Lo que hay que hacer, principalmente, es crear un proyecto ReactJS que contenga:

- Una página de signup, dónde existan 3 inputs (email, username, password).
- Una página de signin, dónde existan 2 inputs (username, password).
- Una página vacía con un texto que diga "Home". A esta página serían redireccionados los usuarios que hayan iniciado sesión correctamente. También allí debe haber un botón para cerrar sesión. Se debe llamar al endpoint /signout, borrar el TOKEN del local storage, y redirigir al usuario a la página de signin.

Los username, emails y password, como se verá en el siguiente apartado, debe codificarse en BASE64 antes de ser enviada al API.

Luego de que un usuario se registre correctamente, debe ser redirigido a la página de signin.

Posterior a que un usuario inicie sesión correctamente, en el response, llegará un TOKEN. Este mismo, debe guardarse en el local storage, para ser utilizado en llamadas como /auth o /signout.

Cada vez que el usuario cargue la página desde 0, se debe comprobar si existe un TOKEN guardado en el local storage. En caso afirmativo, se debe usar el /auth. Si retorna que el TOKEN es válido, se lo redirige a /home. En el caso contrario, se borra ese TOKEN del local storage y se lo redirige a /signin.

ACLARACIÓN: No se busca un trabajo estético. Solo se quiere evaluar como el profesional implementa el API, y que idea tiene de como es un flujo de autenticación. Solamente con los campos de texto y botones necesarios, ya es suficiente.

Al finalizar se debe hacer un push y avisar vía email a kevinladelfa@clusterby.com especificando el nombre del profesional.

# Autenticación

## Clusterby Accounts

### Iniciar sesión
https://accounts.clusterby.com/signin - POST

Debe enviarse el nombre de usuario y contraseña en formato JSON.

Esto retornará en formato JSON un TOKEN. Este mismo debe guardarse en en local storage.
``` json
body:
{
    "username": "username", //en BASE64
    "password": "password" //en BASE64
}
```

### Registro
https://accounts.clusterby.com/signup - POST

Debe enviarse el nombre de usuario, email y contraseña en formato JSON.
``` json
body:
{
    "username": "username", //en BASE64
    "password": "password", //en BASE64
    "email": "email" //en BASE64
}
```

### Cerrar sesión
https://accounts.clusterby.com/signout - POST

Luego de llamar a este endpoint, se debe redireccionar al usuario a la página de inicio de sesión y borrar el token utilizado del local storage.
```
Auth Header: BEARER {token}
```

### Auth
https://accounts.clusterby.com/auth - POST

Este endpoint simplemente es para comprobar si un token es válido.

Si un token es inválido, debe borrarse del local storage.
```
Auth Header: BEARER {token}
```
