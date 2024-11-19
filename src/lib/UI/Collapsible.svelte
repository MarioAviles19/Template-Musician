<script lang=ts>

    let {open = $bindable(false), children, minHeight, openText = "Read More"} = $props()

    let scrollHeight = $state(0);
    let content = $state<HTMLElement>()
    let clientHeight = $state(0);

    $effect(()=>{
        if(content){
            scrollHeight = content?.scrollHeight
        }
        clientHeight
    })
    function ToggleOpen(){
        if(content){
        scrollHeight = content?.scrollHeight
        open = !open;
        }

        
    }
</script>

<div class="p-2 rounded relative">
    <div bind:this={content} bind:clientHeight={clientHeight} class="overflow-hidden transition-all duration-700" style="min-height: {minHeight};{open? "height:" + scrollHeight + "px"  : "height: 0px"}">
        {@render children()}
    </div>
    <div class="overlay" style={open? "opacity: 0" : ""}></div>
    {#if !open}
        <button class="w-full absolute bottom-0 py-4 font-bold" onclick={ToggleOpen}>{openText}</button>
    {/if}
</div>
{#if open}
    <button class="w-full py-4 font-bold" onclick={ToggleOpen}>Collapse</button>
{/if}



<style>
    .overlay{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: linear-gradient(to bottom, #00000000 30%, var(--color-background))
    }

</style>

