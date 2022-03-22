# AdPolygon Web

## Reglas

- Siempre que se quiera almacenar un token del lado del cliente, hacerlo en el local storage, nunca en una cookie.
- Para este repositorio (Front End), utilizar ReactJS.
- No utilizar TypeScript. Utilizar siempre JavaScript.
- Utilizar nomenclatura camelCase para variables y funciones.
- Cada desarrollador deberá tener su propia rama en el repositorio.
- Utilizar la rama "pre-test" para hacer merge de sus cambios. En esta rama, podrán probar entre ustedes el funcionamiento con los aportes de cada desarrollador.
- La rama "test" será utilizada para hacer una prueba global a final de cada semana.
- La rama "main" (producción), será utilizada para subir las actualizaciones desde la rama "test" al final de cada semana (en el caso que todo esté bien).

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
