"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("./config/yargs");
const DirecionMaps_1 = require("./src/utilidades/DirecionMaps");
const Clima_1 = require("./src/utilidades/Clima");
let getInfoClima = (direccion) => __awaiter(this, void 0, void 0, function* () {
    let direccionMaps = yield DirecionMaps_1.DireccionMaps.obtenerLugar(yargs_1.argv.direccion);
    let clima = yield Clima_1.Clima.obtenerClima(direccionMaps.latitud, direccionMaps.longitud);
    console.log(`Para la ciudad ${yargs_1.argv.direccion}`);
    console.log(`La temperatura es de ${clima.temp}`);
});
getInfoClima(yargs_1.argv.direccion)
    .catch(error => {
    console.log(error);
});
