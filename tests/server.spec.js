const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    
    // Requerimiento 1: Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto
    test("GET /cafes - Debería devolver status 200 y un arreglo con al menos 1 objeto", async () => {
        const response = await request(server).get("/cafes");
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // Requerimiento 2: Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe
    test("DELETE /cafes/:id - Debería devolver status 404 cuando se intenta eliminar un café con id inexistente", async () => {
        const response = await request(server)
            .delete("/cafes/999")
            .set("Authorization", "Bearer token-valido");
        
        expect(response.status).toBe(404);
        expect(response.body.message).toBe("No se encontró ningún cafe con ese id");
    });

    // Requerimiento 3: Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201
    test("POST /cafes - Debería agregar un nuevo café y devolver status 201", async () => {
        const nuevoCafe = {
            id: 5,
            nombre: "Espresso"
        };
        
        const response = await request(server)
            .post("/cafes")
            .send(nuevoCafe);
        
        expect(response.status).toBe(201);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.some(cafe => cafe.id === 5 && cafe.nombre === "Espresso")).toBe(true);
    });

    // Requerimiento 4: Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload
    test("PUT /cafes/:id - Debería devolver status 400 cuando el id del parámetro no coincide con el id del payload", async () => {
        const cafeActualizado = {
            id: 2,
            nombre: "Americano Modificado"
        };
        
        const response = await request(server)
            .put("/cafes/1")
            .send(cafeActualizado);
        
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("El id del parámetro no coincide con el id del café recibido");
    });
});
