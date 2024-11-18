<script lang=ts>
    import { getContext, onMount } from "svelte";
    import { FormatSecondsToMinutesAndSeconds } from ".";
    import { ctx } from ".";

    interface Ictx {
        GetAudio : any,
        time : {currentTime : number, duration : number}
    }
    const { GetAudio, time} = getContext(ctx) as Ictx;
    let audioEl : HTMLAudioElement;


    onMount(()=>{
        audioEl = GetAudio();
    })

    function PauseAudio(){
        audioEl = GetAudio();
        if(audioEl){
            if(audioEl.paused){
                audioEl.play()
            }else{
                audioEl.pause();
            }
        } 
    }

</script>

<button onclick={PauseAudio}>Pause</button>
{FormatSecondsToMinutesAndSeconds(time.duration)}