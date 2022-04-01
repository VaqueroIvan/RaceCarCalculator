//Written by: Ivan Vaquero;
//Title: Clase2Carla;
//Declarations of variables;
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let dato4 = <HTMLInputElement>document.getElementById("dato4");
let valor1: number = 0;
let valor2: number = 0;
let valor3: number = 0;
let valor4: number = 0;
let valorPorcentaje: number = 0;
let valorTotal: number = 0;
//Main***********************************************************************
btnEnviar.addEventListener("click", () => {
  //It runs when you press submit button.
  valor1 = Number(dato1.value);
  valor2 = Number(dato2.value);
  valor3 = Number(dato3.value);
  valor4 = Number(dato4.value);
  valorTotal = valor1 + valor2 + valor3 + valor4;
  valorPorcentaje = valorTotal / 4;
  console.log("Average time: " + valorPorcentaje);
  console.log("Total time: " + valorTotal);
  alert("Average time: " + valorPorcentaje);
  alert("Total Time: " + valorTotal);
});
//End***************************************************************
