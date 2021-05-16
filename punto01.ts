console.log("--------------Ejercicio 1 -----------------");

class Auto{
    constructor(public marca:string,public modelo:number,public potencia:number,public maxVelocidad:number){}
    toString(){
        return `marca: ${this.marca} - modelo: ${this.modelo} - pontecia :${this.potencia} - velocidad maxima ${this.maxVelocidad} km/h`;
      }

    calcularTiempo (distancia:number):number{
        return distancia/this.maxVelocidad;
      }
}

let auto1 = new Auto("BMW", 2021, 300, 220);
let auto2 = new Auto("Mercedez", 2020, 350, 230);
let auto3 = new Auto("Audi", 2019, 220, 240);
let auto4 = new Auto("Lexus", 2018, 250, 180);
let auto5 = new Auto("Opel", 2020, 200, 170);

const Autos = [auto1, auto2, auto3, auto4, auto5];

function verAutos(array:object[]):void{
    Autos.forEach((auto)=>{
    console.log(auto.toString())
  });
  }
  function tiempo(array:any[], distancia:number):void{
    let tiempo = 0;
    for (let i in array){
      tiempo = array[i].calcularTiempo(distancia)
      console.info(`El auto ${array[i].marca} a una velocidad de ${array[i].maxVelocidad} tarda ${tiempo} `);
    }
  }
  verAutos(Autos);
  tiempo(Autos,1000);
  
//ejercicio numero dos


class Alumno{
    constructor(public nombre:string, public apellido:string, public edad: number){}
}

class Carrera {
    public alumnos:Alumno[]
    constructor(public nombre:string ){
        this. alumnos= [];
    }
    inscribirAlumnos (alumnos: Alumno){
        return this.alumnos.push(alumnos);
      }
    mostrarAlumnos(){
        console.info(`Alumnos de  ${this.nombre} `)
        for( let alumno in this.alumnos){     
          console.info(`Nombre: ${this.alumnos[alumno] .nombre} Apellido :${this.alumnos[alumno].apellido} Edad: ${this.alumnos[alumno].edad}  `)
        }
      }

}

class Escuela{
    public carreras:Carrera[]
    constructor(public nombre:string, public direccion:string){
        this.carreras=[];
    }
    AgregarCarrera(carrera){
        return this.carreras.push(carrera);
    
        }
}


const escuela1 = new Escuela ("cuyo", "mendoza");

const programacion = new Carrera ("tec programacion");
const filosofia = new Carrera ("filosofia");

const Gualberto = new Alumno ("Gualberto","Forca", 22);
const Esteban = new Alumno ("Esteban","Gussqe",19);
const Roman = new Alumno ("Roman","Sadera",37);
const Guillerma = new Alumno ("Guillerma","Pegratre", 33);

escuela1.AgregarCarrera(programacion);
escuela1.AgregarCarrera(filosofia);
programacion.inscribirAlumnos(Gualberto)
programacion.inscribirAlumnos(Esteban)
filosofia.inscribirAlumnos(Roman)
 
filosofia.mostrarAlumnos();
programacion.mostrarAlumnos();

//ejercicio 3

class CuentaBancaria{
    constructor(public fondos:number){}
    asignarFondos(cantidad:number){   
        try{   
          if (cantidad>=500000) throw "demaciado dinero para ingresar"
          return this.fondos += cantidad
        }   
        catch(err)
        {
          console.error(err);
        } 
      }
    retirarFondos(cantidad:number){
        try{
          if (cantidad>=100000) throw "esta cantidad de dinero no tiene permiso para retirarlo";
          if (cantidad > this.fondos) throw `Fondos insuficientes, tu saldo es de ${this.fondos} `;
          return this.fondos -= cantidad 
        } 
        catch(err){
          console.error(err);
        } 
      }
}
const cuentaBancaria = new CuentaBancaria (0)

console.info(cuentaBancaria.fondos)

cuentaBancaria.asignarFondos(500000)

cuentaBancaria.retirarFondos(5000)
console.info(cuentaBancaria.fondos)

cuentaBancaria.asignarFondos(7000)
console.info(cuentaBancaria.fondos)

cuentaBancaria.retirarFondos(500)
console.info(cuentaBancaria.fondos)

cuentaBancaria.asignarFondos(5000)
console.info(cuentaBancaria.fondos)

cuentaBancaria.retirarFondos(150000)
