AOS.init();

const dataEvento = new Date("Feb 04, 2025 20:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval( function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaMs) / horaMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaMs) / minutoMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento Expirado!`
    }
}, 1000);