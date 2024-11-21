<script lang=ts>
    import { getContext } from "svelte";
    import { ctx, type context } from ".";

    let {time, GetAudio} = getContext(ctx) as context
    const {barBackground = true, ...restProps} = $props()
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



<div aria-hidden="true" bind:offsetWidth={barWidth} onfocus={()=>{}} onmouseleave={()=>{previewTime = 0}} onmousemove={SeekPreview} onclick={Seek} {...restProps} class="cursor-pointer w-full rounded-lg overflow-hidden {restProps.class}" >
    <div  class="cursor-pointer w-full h-2  relative bg-gray-200" style="{barBackground? "": "background: none"}">
        <div class="h-full  bg-gray-300 w-0 absolute top-0 left-0" style="width : {(previewTime / time.duration) * 100}%"></div>
        <div class="h-full  z-10 bg-red-500 w-0 absolute top-0 left-0" style="width : {(time.currentTime / time.duration) * 100}%"></div>
    </div>
</div>
