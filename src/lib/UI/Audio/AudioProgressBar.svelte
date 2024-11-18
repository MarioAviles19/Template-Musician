<script lang=ts>
    import { getContext } from "svelte";
    import { ctx, type context } from ".";

    let {time, GetAudio} = getContext(ctx) as context

    let barWidth : number = $state(0)
    let previewTime : number = $state(0)

    function Seek(e : any){
        const progressBar = e.target;
        if(progressBar){
        const newTime = (e.offsetX / barWidth) * time.duration;
        time.currentTime = newTime

        }
    }
    function SeekPreview(e : any){
        const progressBar = e.target;
        if(progressBar){
        const newTime = (e.offsetX / barWidth) * time.duration;
            previewTime = newTime

        }
    }
</script>


<div aria-hidden="true" bind:offsetWidth={barWidth} onfocus={()=>{}} onmouseleave={()=>{previewTime = 0}} onmousemove={SeekPreview} onclick={Seek} class="cursor-pointer w-full py-2">
    <div  class="cursor-pointer w-full h-2 rounded-lg relative bg-gray-200">
        <div class="h-full rounded-lg  bg-gray-300 w-0 absolute top-0 left-0" style="width : {(previewTime / time.duration) * 100}%"></div>
        <div class="h-full rounded-lg z-10 bg-red-500 w-0 absolute top-0 left-0" style="width : {(time.currentTime / time.duration) * 100}%"></div>
    </div>
</div>