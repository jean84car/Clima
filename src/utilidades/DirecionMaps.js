"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class DireccionMaps {
}
DireccionMaps.KEY_GOOGLE = "AIzaSyBpq4YpVXYUHp42nFCtcA3eRt-aCNYwO2k";
DireccionMaps.SERVICIO_GOOGLE_MAPS = "https://maps.googleapis.com/maps/api/geocode/json?";
DireccionMaps.obtenerLugar = (direccion) => __awaiter(this, void 0, void 0, function* () {
    let direccionEncode = encodeURI(direccion);
    let respuesta = yield axios_1.default.get(DireccionMaps.SERVICIO_GOOGLE_MAPS, {
        params: {
            address: direccionEncode,
            key: DireccionMaps.KEY_GOOGLE
        }
    });
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la direccion ${direccion}`);
    }
    let resultado = respuesta.data.results[0];
    let coordenadas = resultado.geometry.location;
    return {
        direccion: resultado.formatted_address,
        latitud: coordenadas.lat,
        longitud: coordenadas.lng
    };
});
exports.DireccionMaps = DireccionMaps;
