import { argv } from "./config/yargs";
import { DireccionMaps } from "./src/utilidades/DirecionMaps";
import { Clima } from "./src/utilidades/Clima";


let getInfoClima = async (direccion:string) => {
    let direccionMaps = await DireccionMaps.obtenerLugar(argv.direccion);
    let clima= await Clima.obtenerClima(direccionMaps.latitud, direccionMaps.longitud);
    console.log(`Para la ciudad ${ argv.direccion }`);
    console.log(`La temperatura es de ${ clima.temp }`);
}

getInfoClima(argv.direccion)
    .catch(error => {
        console.log(error);
    });
