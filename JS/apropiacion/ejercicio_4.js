/*4. Mezcla de configuraciones con spread y destructuración
Simula un sistema donde existen opciones por defecto y opciones personalizadas:
const defaults = { tema: "claro", idioma: "es" };
Crea una función configurarUsuario(defaults, personalizadas) que:
• Use spread para combinar ambas configuraciones sin mutarlas.
• Use destructuración para obtener el idioma configurado.
Retorna el idioma resultante.*/

const defaults = { tema: "claro", idioma: "es" };

function configurarUsuario(defaults, personalizadas) {
    const config = { ...defaults, ...personalizadas };
    const { idioma } = config;
    console.log("Idioma configurado:", idioma);
}

configurarUsuario(defaults, { idioma: "en" });

export { defaults, configurarUsuario };