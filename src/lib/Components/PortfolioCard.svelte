<script lang=ts>
    import { Audio } from "$lib/UI/Audio";
	import type { Snippet } from "svelte";

    let {file, title, artist, description, thumbnail, tags = []} : {file : string, title : string, artist : string, description? : string, thumbnail? : Snippet, tags? : string[]} = $props()
    let playing = $state(false);
    //TODO: Add collapseable reading section
</script>
<Audio.Root bind:isPlaying={playing} file={file}>


<div class="card sm:max-w-none max-w-clamp-sm transition-shadow my-2 hover:shadow-3xl overflow-hidden rounded-lg relative shadow-2xl   bg-white {playing? "active": ""}">
    <div class="items-center justify-start gap-4 hidden sm:flex p-4">
        <div>
            {#if thumbnail}
                    {@render thumbnail()}
                {:else}
                <div class="bg-gradient-to-tr w-[6rem] h-[6rem] m-auto rounded-md from-purple-500 to-pink-500 "></div>
            {/if}
        </div>

        <div class="w-full">
            <div class="flex justify-start items-baseline gap-2">
                <div class="mr-2">
                    <h4 class="text-center font-bold text-lg sm:text-left">{title}</h4>
                    <p class="text-center font-semibold text-sm sm:text-left">{artist}</p>
                </div>
                {#each tags as tag}
                    <p class="rounded-xl bg-soft-black text-white font-semibold text-sm px-2">{tag}</p>
                {/each}
            </div>
                <div class="flex items-center justify-start sm:w-full gap-2">
                    <Audio.Controls/>
                    <Audio.ProgressBar/>
                    <p class="text-center text-sm whitespace-nowrap font-bold"><Audio.Time/></p>

                </div>
        </div>

    </div>
    <div class="items-center relative justify-start gap-4 sm:hidden flex p-4">
        <div class="relative">
            {#if thumbnail}
                    {@render thumbnail()}
                {:else}
                <div class="bg-gradient-to-tr w-[6rem] h-[6rem] m-auto rounded-md from-purple-500 to-pink-500"></div>
            {/if}
            <div class="flex items-center justify-center absolute top-0 left-0 w-full h-full">
                <Audio.Controls icon={{size : 34, fill : "var(--color-glass-medium)", color : "transparent"}}/>
            </div>
        </div>

        <div class="w-full">
            <div class="flex justify-start items-baseline gap-2">
                <div class="mr-2">
                    <h4 class="text-left font-bold text-lg">{title}</h4>
                    <p class="text-left font-semibold text-sm">{artist}</p>

                </div>
            </div>
                <div class="flex items-center justify-start sm:w-full gap-2">

                    <p class="text-center text-sm whitespace-nowrap font-bold"><Audio.Time/></p>

                </div>
        </div>

        <Audio.ProgressBar class="absolute bottom-0 left-0 w-full rounded-none z-0" barBackground={false}/> 

</div>
</Audio.Root>

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

