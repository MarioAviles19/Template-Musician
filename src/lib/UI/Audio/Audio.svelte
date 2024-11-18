<script lang=ts>
	import { onMount, setContext } from "svelte";
    import { FormatSecondsToMinutesAndSeconds } from ".";
    import { ctx } from ".";

    const {file, children} = $props()

    let audioElement : HTMLAudioElement;

    let time = $state({currentTime : 0, duration : 0})


    setContext(ctx, {
        GetAudio : GetAudioElement,
        time
    })

    function GetAudioElement(){
        return audioElement
    }


</script>

{@render children()}

<audio bind:this={audioElement} bind:currentTime={time.currentTime} bind:duration={time.duration} src={file}></audio>
<p>{FormatSecondsToMinutesAndSeconds(time.currentTime)}</p>