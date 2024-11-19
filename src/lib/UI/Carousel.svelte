<script lang=ts>
	import { onMount, type Component as Comp} from "svelte";
    import { tweened } from "svelte/motion";
    import { crossfade, fade } from "svelte/transition";

    const [send, recieve] = crossfade({duration: 10000});
    const {Component, props} : {Component : Comp<any>, props : any[]} = $props();

    
    let offset = $state(tweened(0));
    let currentItemIndex = $state(0);

    let visable = $state<any[]>([])

    visable = [props[0], props[1], props[2]]

    let stopped = false;
    let speed = .000001;

    let animate = $state({})


    onMount(()=>{
        //Animate()
    })
    function Advance(){
        visable = [props[1], props[2], props[3]]
        animate = {}
    }



    
</script>
<div class="grid grid-cols-3 overflow-hidden gap-1 relative w-max">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->

        {#key animate}
                <div in:recieve={{key : 1}} out:send={{key : 0}} class="col-first row-first shrink-0 m-auto" >
                    <Component {...visable[0]}/>
                </div>
    
                <div in:recieve={{key:3}} out:send={{key:1}} class="col-[2/3] shrink-0 row-first m-auto" >
                    <Component {...visable[1]}/>
                </div>
                <div in:recieve={{key:""}} out:send={{key: 3}} class="col-[3/4] shrink-0 row-first  m-auto" >
                    <Component {...visable[2]}/>
                </div>


        {/key}

    <div class="overlay"></div>
    
</div>
<button onclick={Advance} class="my-10 p-2">forward</button>

<style>
    .overlay{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        pointer-events: none;
        background: linear-gradient(to right, rgb(255, 255, 255), #00000000 15%, #00000000 85%, rgb(255, 255, 255))
    }
</style>