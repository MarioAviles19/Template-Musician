<script>
    import ContactForm from "$lib/Components/ContactForm.svelte";
    // @ts-ignore
    import PortfolioCard from "$lib/Components/PortfolioCard.svelte"
	import Carousel from "$lib/UI/Carousel.svelte";
	import Collapsible from "$lib/UI/Collapsible.svelte";
    import Section from "$lib/UI/Section.svelte";
	import Sticky from "$lib/UI/Sticky.svelte";
    import Bluesky from "$lib/UI/Logos/Bluesky.svelte";
	import SoundCloud from "$lib/UI/Logos/SoundCloud.svelte";
    import Instagram from "$lib/UI/Logos/Instagram.svelte";

    
</script>


<div class="min-h-[25rem] bg-gradient-to-br from-black via-indigo-950 to-black p-4">
    <h1 class="font-bold text-4xl text-transparent text-center bg-clip-text bg-gradient-to-r w-fit m-auto mt-16 from-glass-200 via-glass-300 to-glass-200">John Doe</h1>
    <div class="flex justify-center items-center gap-3 text-glass-200">
        <a class="hover:text-glass-300 transition-all" href="/">
            <Bluesky size={30}/>
        </a>
        <a class="hover:text-glass-300 transition-all" href="/">
            <Instagram size={30}/>
        </a>
        <a class="hover:text-glass-300 transition-all" href="/">
            <SoundCloud size={30}/>
        </a>
    </div>

</div>
<Sticky class="bg-white shadow-md">
    <Section>
            <nav class="font-bold sm:text-xl text-base">
                <li class="list-none m-auto flex justify-between items-center max-w-clamp-sm">
                    <ul>
                        <a class="py-2" href="#About">About</a>
                    </ul>
                    <ul>
                        <a class="py-2" href="#Portfolio">Portfolio</a>
                    </ul>
                    <ul>
                        <a class="py-2" href="#Contact">Contact</a>
                    </ul>
                </li>
            </nav>
    </Section>
</Sticky>

<Section id="About">
    <h2 class="text-2xl font-bold">About</h2>
    {#snippet Body()}
    <p class="font-semibold mb-10">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum varius euismod quisque ultrices eros. Et quisque est velit dapibus nulla facilisis parturient mus. Adipiscing magnis bibendum arcu aenean in sociosqu senectus. Vestibulum sed eros laoreet quam sollicitudin. Magnis hac himenaeos blandit mi aenean. Potenti finibus eu dapibus dapibus adipiscing varius semper malesuada.
        <br>
        <br>
        Eleifend class orci pellentesque commodo fames lorem curae. Viverra tortor sodales euismod curabitur faucibus. Lobortis faucibus non augue neque commodo. Id habitasse suscipit proin ac non sapien elementum. Nostra nulla quam lacinia sit sodales sociosqu. Etiam mauris per aliquam eros bibendum litora pellentesque laoreet. Fusce molestie fusce non morbi libero.
        <br>
        <br>
        Magnis placerat suspendisse imperdiet interdum tellus leo facilisi cubilia. Suspendisse donec sollicitudin placerat vivamus porta posuere. Congue montes primis integer magnis penatibus curae bibendum aenean. Arcu est etiam leo aliquam et nulla nunc. Aenean in efficitur convallis, amet inceptos nisi ad aliquam pellentesque. Nisi lobortis sociosqu phasellus nibh platea cras. Arcu arcu ligula tincidunt pretium egestas primis rutrum. Ipsum ad magnis faucibus platea taciti fusce enim. Non ante cras bibendum vestibulum; dolor arcu integer purus mus.
        <br>
        <br>
        Orci penatibus quisque mauris; risus at hac curabitur. Parturient aliquet tellus vitae lacus urna vivamus enim egestas. Natoque nibh primis euismod nulla; facilisi vehicula. Maecenas massa ultricies id ut mauris natoque turpis potenti netus? Dolor proin donec duis porta penatibus facilisi convallis himenaeos. Facilisi consequat ipsum, bibendum nibh elementum elementum maecenas duis. Litora platea non enim dictumst lacus dis.
        <br>
        <br>
        Elementum litora scelerisque; ligula libero vehicula phasellus. Cursus curae netus per pellentesque elit praesent libero at. Duis at nascetur malesuada torquent fames facilisi. Integer varius faucibus aliquam primis platea cras gravida natoque amet. Conubia mus malesuada senectus tempor purus consequat massa. Maximus sodales lectus elementum pretium consequat congue. Vel ultricies vulputate erat rutrum netus integer nulla? Vestibulum nascetur gravida imperdiet iaculis in inceptos ultrices pulvinar.</p>
        
    {/snippet}
    <div class="block sm:hidden">
        <Collapsible minHeight="15rem">
            {@render Body()}
        </Collapsible>
    </div>
    <div class="sm:block hidden">
            {@render Body()}
    </div>
</Section>

<Section id="Portfolio">
    <h2 class="text-2xl font-bold">Portfolio</h2>
    <p class="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur.
    </p>

    <PortfolioCard tags={["Artist"]} title="Lazy Day" artist="John Doe" file="Lazy Day.mp3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.">
    </PortfolioCard>

    <PortfolioCard tags={["Producer", "Writer"]} title="Love From The Milky Way" artist="Maria LaGuarta" file="Lazy Day.mp3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.">

            {#snippet thumbnail()}
                <div class="bg-gradient-to-bl w-[6rem] h-[6rem] m-auto rounded-md from-indigo-500 via-purple-500 to-pink-500 "></div>
            {/snippet}

    </PortfolioCard>
    <PortfolioCard tags={["Producer"]} title="There Will Never Be Another You" artist="Kim Kitsuragi" file="Lazy Day.mp3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.">

            {#snippet thumbnail()}
                <div class="bg-gradient-to-br w-[6rem] h-[6rem] m-auto rounded-md from-purple-500 via-pink-500 to-orange-500 "></div>
            {/snippet}

    </PortfolioCard>

</Section>

<Section id="Contact">
    <h2 class="text-2xl font-bold">Contact</h2>
    <p class="font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <ContactForm/>
</Section>

