<script lang=ts>
    import { getContext, onMount } from "svelte";
    import { scale } from "svelte/transition";
    import {Pause, Play} from "lucide-svelte"
    import { FormatSecondsToMinutesAndSeconds, type context } from ".";
    import { ctx } from ".";


    const { GetAudio, time} = getContext(ctx) as context;
    let audioEl : HTMLAudioElement;


    onMount(()=>{
        audioEl = GetAudio();
    })

    function TogglePause(){
        console.log("ow")
        //TODO: Fix this
        //can probably make audioEl $state 
        if(!audioEl){
        audioEl = GetAudio();
        }
        if(audioEl){
            if(audioEl.paused){
                audioEl.play()
            }else{
                audioEl.pause();
            }
        } 
    }

</script>

<button class="grid w-fit" onclick={TogglePause}>

    {#if time.paused}
            <span class="col-first row-first" transition:scale><Play/></span>
    {:else}
            <span class="col-first row-first" transition:scale><Pause/></span>
    {/if}
</button>

