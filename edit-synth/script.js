let ctx;


function audio(){

    if(!ctx){

        ctx = new AudioContext();

    }

}



function createVoice(freq, type, panValue){


    audio();


    let osc = ctx.createOscillator();

    let gain = ctx.createGain();

    let pan = ctx.createStereoPanner();


    osc.type = type;

    osc.frequency.value = freq;


    gain.gain.value = 0.3;


    pan.pan.value = panValue;


    osc.connect(gain);
    gain.connect(pan);
    pan.connect(ctx.destination);



    osc.start();


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + 1
    );


    osc.stop(ctx.currentTime+1);


}




function playLead(freq){


    audio();


    let osc = ctx.createOscillator();

    let gain = ctx.createGain();

    let delay = ctx.createDelay();

    let pan = ctx.createStereoPanner();


    osc.type="sawtooth";

    osc.frequency.value=freq;


    gain.gain.value=0.25;


    delay.delayTime =
    document.getElementById("delay").value;


    pan.pan.value=-0.5;


    osc.connect(gain);

    gain.connect(delay);

    delay.connect(pan);

    pan.connect(ctx.destination);



    osc.start();

    osc.stop(ctx.currentTime+1);



}



function playBass(freq){


    audio();


    let osc=ctx.createOscillator();

    let gain=ctx.createGain();

    let filter=ctx.createBiquadFilter();

    let pan=ctx.createStereoPanner();



    osc.type="square";

    osc.frequency.value=freq;


    filter.type="lowpass";


    filter.frequency.value =
    document.getElementById("filter").value;



    gain.gain.value=0.3;


    pan.pan.value=0.5;



    osc.connect(filter);

    filter.connect(gain);

    gain.connect(pan);

    pan.connect(ctx.destination);



    osc.start();

    osc.stop(ctx.currentTime+1);


}
