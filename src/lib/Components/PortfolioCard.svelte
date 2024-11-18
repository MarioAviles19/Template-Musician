<script lang=ts>
    import { Audio } from "$lib/UI/Audio";
	import type { Snippet } from "svelte";

    let {file, title, artist, children = undefined} : {file : string, title : string, artist : string, children? : Snippet} = $props()
    let playing = $state(false);
</script>

<div class="max-w-clamp-sm transition-shadow overflow-hidden rounded-lg relative shadow-2xl p-4 bg-white {playing? "active": ""}">
    <div class="bg-gradient-to-tr w-[6rem] h-[6rem] m-auto rounded-md from-purple-500 to-pink-500 "></div>
    <Audio.Root bind:isPlaying={playing} file={file}>
        <h4 class="text-center font-bold text-lg">{title}</h4>
        <p class="text-center font-semibold text-sm">{artist}</p>
        <div class="flex items-center justify-start gap-2">
            <Audio.Controls/>
            <Audio.ProgressBar/>
        </div>
        <p class="text-center text-sm"><Audio.Time/></p>
    </Audio.Root>
    {#if children}
        {@render children()}
    {/if}

</div>

<style>
    .active::after{
        width: 8rem;
        height: 8rem;
        background: linear-gradient(to top right, #00000000 50%, rgba(255, 136, 255, 0.751), rgba(255, 151, 60, 0.712));
        content: "";
        display: block;
        position: absolute;
        top:0;
        right:0;
        opacity: 0;
        animation: fadeIn 200ms ease forwards;
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

