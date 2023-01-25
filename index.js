let saldo = 300,
  total,
  producto,
  continuar=true,
  cantidad,
  conformidad = 2;

function seleccion(){
    while (conformidad == 2) {
        producto = parseInt(prompt("Que productos desea añadir a su carito?\nEscriba el numero del producto para añadirlo\n1)Pantalon\n2)Polo\n3)Polera"));
        if(producto>3){
            alert("Por favor infgrese un elemento valido")
            seleccion();
        }
        cantidad = parseInt(prompt("Cuantas unidades desea?"));  
        conformidad = prompt("Esta conforme con su compra o desea cambiar de producto?\n1)continuar\n2)Cambiar de producto");
        if(conformidad>2){
            alert("Por favor infgrese una opcion valida")
            seleccion();
        }
      }
      calculo();
}

function calculo(){

    const precioPantalon= 40;
    const precioPolo = 20;
    const precioPolera = 50;

    if (producto == 1) {
        total=precioPantalon * cantidad;
    }
    else if (producto == 2){
        total=precioPolo * cantidad;
    }
    else if (producto == 3){
        total=precioPolera * cantidad;
    }   
    else{
        alert("Por favor ingrese un producto valido")
    }
}

do {
    seleccion();

    alert("El total a pagar es de "+ total+"$");
    conformidad = confirm("Desea pagar?,\nSu saldo actual es de "+saldo+"$");
    if (conformidad==true) {
        saldo-=total;
        alert("Compra exitosa, Su saldo actual es de "+saldo+"$")
    }else if(conformidad==false){
        alert("Eliminando Objeto del carrito")
    }
    continuar=confirm("Desea Continuar comprando")
    conformidad=2;
} while (continuar==true);

alert("Gracias por Visitarnos");