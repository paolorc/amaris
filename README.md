# Números Primos challenge

Se ah creado una simple API para consultar la lista de números primos encontrados dado un número previo. 
<br>
Se esta incluyendo el 1 en aquella lista como dividor universal.
##### Tech Stack usado:
- Node 
- Javascript
- Jest
- Supertest
- Docker - Docker Compose

##### Pasos para correr el proyecto
1. Clone este repositorio en su local machine `git clone https://github.com/paolorc/amaris.git`
1. Tenga docker instalado y corriendo
1. Ubiquese en el `root` del proyecto de `amaris`
1. Ejecute `npm install`
1. Ejecute `npm run docker-up` para levantar el contenedor y ponerlo en modo detached, la aplicación correra en el puerto `5000` por defecto
1. Dirijase a su navegador y en la `URL` ejecute la llamada a:
```
METHOD: 'GET'
http://localhost:5000/calculate/primes-numbers/__aqui_va_el_numero_a_listas_los_primos__
```

Ejemplo de uso de la API:

```
#Ejecutando en el navegador:

http://localhost:5000/calculate/primes-numbers/15

Devolverá: 

{
    "totalNumbers": 7,
    "primesNumbersList": [13,11,7,5,3,2,1]
}
```

```
#Ejecutando en el navegador:

http://localhost:5000/calculate/primes-numbers/11

Devolverá: 

{
    "totalNumbers": 6,
    "primesNumbersList": [11,7,5,3,2,1]
}
```
