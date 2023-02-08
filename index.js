
// Declaracion de un array con objetos de los productos y precio
const productos=[
    {nombre: "pantalon", precio:50},
    {nombre: "polo", precio:40},
    {nombre: "polera", precio:60},
    {nombre: "zapatilla", precio:100},
    {nombre: "camisa", precio:110},
    {nombre: "gorro", precio:20},
    {nombre: "pulsera", precio:10},
];

let carrito = []

let seleccion = prompt("Bienvenido a nuestra tienda, desea ver los productos?");

// BUCLE QUE COMPRUEBA QUE EL INGRESO SEA SI O NO

while (seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresar si o no");
    seleccion = prompt("Bienvenido a nuestra tienda, desea ver los productos?");
}

if (seleccion == "si"){
    let allProducts = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$")
    alert(allProducts.join("\n"));
}else if (seleccion == "no"){
    alert("Gracias por tu visita! :D")
}

// CON OTRO BUCLE TENEMOS AL CLIENTE REALIZANDO OPERACIONES HASTA QUE DECIDA PARAR
// CON UN "CASE" DEPENDIENDO DE LA SELECCION DA EL PRECIO

while (seleccion != "no"){
    let producto = prompt("Agrega un producto  tu carrito escribiendo su nombre");
    let precio= 0;

    if (producto == "pantalon" || producto == "polo" || producto == "polera" || producto == "zapatilla" ||
    producto == "camisa" || producto == "gorro" || producto == "pulsera"){
        switch(producto){
            case "pantalon":
            precio = 50
            break;
            case "polo":
            precio = 40
            break;
            case "polera":
            precio = 60
            break;
            case "zapatilla":
            precio = 100
            break;
            case "camisa":
            precio = 110
            break;
            case "gorro":
            precio = 20
            break;
            case "pulsera":
            precio = 10
            break;
            default:
                break;
            
        }
        let unidades = parseInt(prompt("Cuantos desea?"))

        carrito.push({producto, unidades, precio})//AQUI GUARDAMOS LOS DATOS DE LOS PRODUCTOS AL CARRITO EN FORMA DE OBJETOS
        carritoshowcase()
    }else{
        alert("No contamos con el producto")
    }
    seleccion = prompt("Desea seguir comprando?")
    while(seleccion == "no"){
        alert("gracias por preferirnos, vuelva pronto")
        carritoshowcase()
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert("El total a pagar por su compra es: "  + total)

// FUNCION QUE NOS DA EL ESTADO ACTUAL DEL CARRITO RECORRIENDO EL ARRAY DE CARRITO

function carritoshowcase(){
    carrito.forEach((showproducts) =>{
        alert("------Carrito de compra------\n" + "Producto: " + showproducts.producto + "\nUnidades: " + showproducts.unidades +
        "\nTotal: " + showproducts.unidades*showproducts.precio)
    })
}