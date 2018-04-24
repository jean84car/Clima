import axios from "axios";

export class DireccionMaps{

    public static KEY_GOOGLE= "AIzaSyBpq4YpVXYUHp42nFCtcA3eRt-aCNYwO2k";
    public static SERVICIO_GOOGLE_MAPS = "https://maps.googleapis.com/maps/api/geocode/json?";

    public static obtenerLugar = async (direccion:string) => {

        let direccionEncode:string = encodeURI(direccion);    

        let respuesta= await axios.get(DireccionMaps.SERVICIO_GOOGLE_MAPS, {
            params: {
                address: direccionEncode,
                key: DireccionMaps.KEY_GOOGLE
            }
        });

        if(respuesta.data.status === 'ZERO_RESULTS'){
            throw new Error(`No hay resultados para la direccion ${ direccion }`);
        }  
        
        let resultado= respuesta.data.results[0];
        let coordenadas= resultado.geometry.location; 

        return {
            direccion:resultado.formatted_address,
            latitud:coordenadas.lat,
            longitud:coordenadas.lng
        }

    }

}