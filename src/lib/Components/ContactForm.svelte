<script lang=ts>
	import { CircleCheck } from "lucide-svelte";
    import { fly } from "svelte/transition";

    let success = $state(false);
    const {...restProps} = $props();
    function preventDefault(e : Event){
        e.preventDefault()
        success = true
    }
</script>
<div class="grid my-10 min-h-[25rem]">
    {#if success}
        <div in:fly={{delay: 400, duration: 500, x: "100%"}} out:fly={{duration: 500, x: "-100%"}} class="col-first row-first p-4 m-auto w-full sm:max-w-clamp-sm shadow-2xl rounded-md bg-white">
            <h4 class="successText w-min m-auto text-xl font-bold text-center">Success!</h4>
                <CircleCheck class="m-auto block my-4" size={75} strokeWidth={1}/>
            <p class="text-center font-semibold">Your message has been submitted</p>
            <button onclick={()=>{success=false}} class="block text-center w-full border-none text-purple-400 font-semibold">Go Back</button>
        </div>
    {:else}
    <form out:fly={{duration: 500, x: "-100%"}} in:fly={{delay: 400, duration: 500, x: "100%"}} onsubmit={preventDefault} class="col-first row-first m-auto w-full sm:max-w-clamp-sm shadow-2xl p-4 rounded-md bg-white" {...restProps}>
        <h4 class="font-bold text-xl">Leave Me A Message</h4>
        <div class="flex gap-2 my-2 w-full justify-between flex-col sm:flex-row">
            <input class="rounded px-2 py-1 shrink block w-auto sm:w-1/2" type="text" placeholder="First Name">
            <input class="rounded px-2 py-1 shrink block w-auto sm:w-1/2" type="text" placeholder="Last Name">
        </div>
        <input class="block w-full rounded px-2 py-1" type="email" placeholder="Email">
        <textarea class=" p-2 w-full resize-none my-2 rounded" rows="5" placeholder="Message"></textarea>
        <div class="text-right"><button class="px-2 py-1 bg-gradient-to-br bg-purple-500 text-white rounded shadow-2xl text-lg">Submit</button></div>
    </form>
    {/if}
</div>

<style>
    .successText{
        background: linear-gradient(to right, #f97316, #ec4899, #a855f7, #f97316, #ec4899);
        background-size: 300% 100%;
        background-position: 0% 0%;
        color: transparent;
        background-clip: text;
        animation: barberShop 5s linear infinite;

    }
    @keyframes barberShop{
        0%{
            background-position: 0% 0%;
        }
        100%{
            background-position: 100% 0%;
        }
    }
</style>