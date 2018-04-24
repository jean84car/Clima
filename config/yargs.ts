import * as yargs from "yargs";

export let argv = yargs.options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima.',
        demand: true
    }
})
.help()
.argv;
