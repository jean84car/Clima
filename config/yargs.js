"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
exports.argv = yargs.options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima.',
        demand: true
    }
})
    .help()
    .argv;
