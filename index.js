// function tipoDeSuscripcion (suscripcion) {
//     if (suscripcion == 'Free') {
//         console.log("Solo tienes acceso a cursos gratis");
//         return;
//         }
//     if (suscripcion == 'Basic') {
//         console.log("Plan basic");
//         return;
//         }
//     if (suscripcion == 'Premium') {
//         console.log("Plan premium");
//         return;
//         }
//     if (suscripcion == 'Expert') {
//         console.log("Plan Expert! ");
//         return;
//     }
// }

// tipoDeSuscripcion("Expert");


console.log("Hello,  world");

// Challenge con arrays y objetos y un solo condicional

var tipoDeSuscripcion = [
    {nombre: "Free", descripcion: "Tienes acceso a cursos gratis"},
    {nombre: "Basic", descripcion: "Plan Basic"},
    {nombre: "Premium", descripcion: "Plan premium"},
    {nombre: "Expert", descripcion: "Plan Expert!!! "},
];

const suscriptionIdentifier = (nombreSuscripcion) => {
    for (var i = 0; i < tipoDeSuscripcion.length; i++) {
        if (tipoDeSuscripcion[i].nombre == nombreSuscripcion) {
            console.log(tipoDeSuscripcion[i].descripcion);
            return;
        }
    }
    console.warn("Tipo de suscripcion incalido, intenta mas tarde ...");
}

suscriptionIdentifier("Premium");
