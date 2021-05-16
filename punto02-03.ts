/*
2. Dado el array ["azul", "verde", "rojo"] insertar
 la cadena "amarillo" entre "azul" y "verde". 
 También insertar "naranja" entre "verde" y "rojo".
  No se puede usar bucles. Usar una función que 
  imprima por pantalla.
*/


function verArray (array: string[] ): void{

    console.info(array)
  }
  

  let array:string []= ["azul", "verde", "rojo"];
  

  //insertar amarillo entre azul y verde
  array.splice(1,0,"amarillo");
  
  verArray(array);
  
  //insertar naranja entre verde y rojo
  array.splice(3,0,"naranja");
  
  verArray(array);
  
  //3. Dado el ejercicio anterior sacar del arreglo el color "verde"
  array.splice(2,1);
  
  verArray(array);
  
