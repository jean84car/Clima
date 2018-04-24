import axios from 'axios';

export class Clima {
    public static KEY= "9ba4bb1e45e0e34e72d3722cfc87703e";
    public static SERVICIO_CLIMA = "http://api.openweathermap.org/data/2.5/weather?";

    public static obtenerClima = async (latitud:string, longitud:string, unidadMedida:string= "metric") => {
        
        let respuesta = await axios.get(Clima.SERVICIO_CLIMA, {
            params: {
                lat: latitud,
                lon: longitud,
                units: unidadMedida,
                appid: Clima.KEY
            }
        });

        if(respuesta.data.cod !== 200){
            throw new Error(`Error obteniendo la temperatura con la latitud ${ latitud } longitud ${ longitud }`);
        }

        return respuesta.data.main;            

    }

}