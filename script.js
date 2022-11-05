let compraValor = 0
let ventaValor = 0
// function que se llama con el onClick
function ingresar() {
    const descripcion = document.getElementById("descripcion");
    const compra = document.getElementById("success-outlined");
    const venta = document.getElementById("danger-outlined");
    const basico = document.getElementById("success-outlined1");
    const minimo = document.getElementById("success-outlined2");
    const excento = document.getElementById("success-outlined3");
    const subtotal = document.getElementById("subtotal");
    const table = document.getElementById("tableBody");
    const TotalVentas = document.getElementById("TotalVentas");
    const TotalCompras = document.getElementById("TotalCompras");

    // se agrega una n una nueva fila cada vez que se presiona el botón  
    let row = table.insertRow();
    row.innerHTML = `<td>${descripcion.value}</td>`
    let resultado = subtotal.value;
    const calTransaccion = compra.checked
        ? row.innerHTML += `<td>compra</td>`
        : venta.checked
            ? row.innerHTML += `<td>venta</td>` : row.innerHTML += `<td>no definido</td>`;

    row.innerHTML += `<td>${resultado}</td>`

    // dependiendo que radiobutton esté seleccionado se va a calcular el iva y mostrarlo en la 4to celda 
    const calIva = basico.checked
        ? row.innerHTML += `<td>22%</td>` + `<td>${resultado * 0.22 + parseFloat(resultado)}  </td>`
        : minimo.checked
            ? row.innerHTML += `<td>10%</td>` + `<td>${resultado * 0.10 + parseFloat(resultado)}</td>`
            : excento.checked
                ? row.innerHTML += `<td>0%</td>` + `<td>${resultado}</td>` : row.innerHTML += `<td>no definido</td>`;
// acá dependiendo de que oción de compra o venta esté seleccionada se me va a ir sumando en la correspondiente linea el total
    if (compra.checked) {
        compraValor += parseFloat(resultado);
        TotalCompras.innerHTML = compraValor;
    } if (venta.checked) {
        ventaValor += parseFloat(resultado);
        TotalVentas.innerHTML = ventaValor;
    };
}

