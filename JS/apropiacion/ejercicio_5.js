/*5. Actualización de perfiles con inmutabilidad + rest
Crea una función actualizarPerfil(perfil, ...nuevosDatos).
Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad:
"Medellín"}.
• Combina todos los datos usando inmutabilidad y spread.
Retorna el nuevo perfil completo.*/

const perfil = { nombre: "Sara", edad: 18, ciudad: "Bucaramanga" };

function actualizarPerfil(perfil, ...nuevosDatos) {
    const actualizado = { ...perfil, ...nuevosDatos[0], ...nuevosDatos[1] };
    console.log(actualizado);
}

actualizarPerfil(perfil, { edad: 22 }, { ciudad: "Medellín" });

export { perfil, actualizarPerfil };