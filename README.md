# Tests - Cafetería Nanacao API

## Descripción de la Prueba

Este proyecto contiene una suite completa de tests para validar el correcto funcionamiento de la API REST de la Cafetería Nanacao. Los tests cubren todas las operaciones CRUD y casos edge implementados en la API.

## Requerimientos de la Prueba

### 1. Test GET /cafes (3 Puntos) ✅
- Verifica que la ruta GET /cafes devuelve un status code 200
- Valida que el tipo de dato recibido es un arreglo con por lo menos 1 objeto

### 2. Test DELETE /cafes/:id (2 Puntos) ✅
- Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe

### 3. Test POST /cafes (2 Puntos) ✅
- Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201

### 4. Test PUT /cafes/:id (3 Puntos) ✅
- Prueba que la ruta PUT /cafes devuelve un status code 400 si se intenta actualizar un café enviando un id en los parámetros diferente al id dentro del payload

## Ejecución de los Tests

### Instalación
```bash
npm install
```

### Ejecutar tests
```bash
npm test
```

## Tests Implementados

1. **GET /cafes - Status 200 y Array con datos**
   - Verifica que devuelve status code 200
   - Valida que la respuesta es un arreglo
   - Confirma que tiene al menos 1 objeto

2. **DELETE /cafes/:id - Error 404 con ID inexistente**
   - Prueba eliminar café con ID que no existe
   - Verifica que devuelve status code 404
   - Incluye token de autorización válido

3. **POST /cafes - Agregar nuevo café**
   - Crea un nuevo café con ID único
   - Verifica que devuelve status code 201
   - Confirma que el café se agregó al arreglo

4. **PUT /cafes/:id - Error 400 con IDs diferentes**
   - Envía ID en parámetros diferente al ID en payload
   - Verifica que devuelve status code 400
   - Valida el mensaje de error específico

## Resultados de los Tests

```
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.563 s, estimated 1 s
```

## Tecnologías de Testing

- **Jest** - Framework de testing principal
- **Supertest** - Librería para testing de APIs HTTP
- **Node.js** - Entorno de ejecución

## Estructura de Archivos de Test

```
tests/
└── server.spec.js    # Suite completa de tests con 4 casos
```
---
Creado por Alberto Cid para DesafioLatam