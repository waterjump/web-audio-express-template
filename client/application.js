const Tone = require('tone');
//create a synth and connect it to the main output (your speakers)
console.log('sup');
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

document.querySelector('button')?.addEventListener('click', async () => {
  await Tone.start();
  console.log('audio is ready');
})
