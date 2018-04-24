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
class Clima {
}
Clima.KEY = "9ba4bb1e45e0e34e72d3722cfc87703e";
Clima.SERVICIO_CLIMA = "http://api.openweathermap.org/data/2.5/weather?";
Clima.obtenerClima = (latitud, longitud, unidadMedida = "metric") => __awaiter(this, void 0, void 0, function* () {
    let respuesta = yield axios_1.default.get(Clima.SERVICIO_CLIMA, {
        params: {
            lat: latitud,
            lon: longitud,
            units: unidadMedida,
            appid: Clima.KEY
        }
    });
    if (respuesta.data.cod !== 200) {
        throw new Error(`Error obteniendo la temperatura con la latitud ${latitud} longitud ${longitud}`);
    }
    return respuesta.data.main;
});
exports.Clima = Clima;
