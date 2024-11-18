<script lang=ts>
	import { onMount, setContext } from "svelte";
    import { AudioElement } from ".";
    import { FormatSecondsToMinutesAndSeconds } from ".";
    import { ctx } from ".";

    let {file, children, isPlaying = $bindable(false)} = $props()

    let audioElement : HTMLAudioElement;

    let time = $state({currentTime : 0, duration : 0, paused : true})


    setContext(ctx, {
        GetAudio : GetAudioElement,
        time
    })

    function GetAudioElement(){
        return audioElement
    }
    function OnPause(){
        isPlaying = false;
    }
    //Don't allow mulitple audio files to be playing at once
    function SetCurrentAudio(){
        AudioElement.set(audioElement);
        isPlaying = true;
    }
    AudioElement.subscribe(el=>{

        if(!el){
            return
        }
        if(el !== audioElement){
            audioElement?.pause()
            //TODO: Consider not resetting time
            audioElement.currentTime = 0;
        }
    })
    function ResetAudio(){
        audioElement.currentTime = 0;
    }

</script>

{@render children()}

<audio bind:this={audioElement} onended={ResetAudio} onpause={OnPause} onplay={SetCurrentAudio} bind:paused={time.paused} bind:currentTime={time.currentTime} bind:duration={time.duration} src={file}></audio>
