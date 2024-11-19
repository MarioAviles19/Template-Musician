<script lang=ts>
    import { Audio } from "$lib/UI/Audio";
	import type { Snippet } from "svelte";

    let {file, title, artist, description, thumbnail} : {file : string, title : string, artist : string, description? : string, thumbnail? : Snippet} = $props()
    let playing = $state(false);
    //TODO: Add collapseable reading section
</script>

<div class="card sm:max-w-none max-w-clamp-sm transition-shadow my-2 hover:shadow-3xl overflow-hidden rounded-lg relative shadow-2xl  p-4 bg-white {playing? "active": ""}">
    <div class="flex items-center justify-start gap-4">
        <div>
            {#if thumbnail}
                    {@render thumbnail()}
                {:else}
                <div class="bg-gradient-to-tr w-[6rem] h-[6rem] m-auto rounded-md from-purple-500 to-pink-500 "></div>
            {/if}
        </div>
        <Audio.Root bind:isPlaying={playing} file={file}>

        <div class="w-full">
            <h4 class="text-center font-bold text-lg sm:text-left">{title}</h4>
            <p class="text-center font-semibold text-sm sm:text-left">{artist}</p>
                <div class="flex items-center justify-start sm:w-full gap-2">
                    <Audio.Controls/>
                    <Audio.ProgressBar/>
                    <p class="text-center text-sm whitespace-nowrap font-bold"><Audio.Time/></p>

                </div>
            
        </div>

    </Audio.Root>

    </div>



</div>

<style>
    .card::after{
        width: 8rem;
        height: 8rem;
        background: linear-gradient(to top right, #00000000 50%, rgba(255, 136, 255, 0.751), rgba(255, 151, 60, 0.712));
        content: "";
        display: block;
        position: absolute;
        top:-8rem;
        right:-8rem;
        opacity: 0;
        animation: fadeIn 200ms ease forwards;
        transition: all 500ms ease;
    }
    .card.active::after{
        top:0rem;
        right:0rem
    }
    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }

    }
</style>

