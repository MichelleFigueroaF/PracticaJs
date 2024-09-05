var productos = [
    { nombre: "Jugo de naranja", precio: 0.50 },
    { nombre: "Pepsi lata", precio: 0.75 },
    { nombre: "Coca-cola lata", precio: 0.80 },
    { nombre: "Frijol libra", precio: 1.20 },
    { nombre: "Jabon Protex", precio: 0.25 },
    { nombre: "Cafe Listo caja", precio: 3.25 },
    { nombre: "Quesito DIANA", precio: 0.15 },
    { nombre: "Arroz blanco libra", precio: 0.30 },
    { nombre: "Galleta Picnic", precio: 0.10 },
    { nombre: "Aceite Capullo", precio: 1.90 },
];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
}