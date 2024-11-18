<script>
    import PortfolioCard from "$lib/Components/PortfolioCard.svelte";
    import Section from "$lib/UI/Section.svelte";

</script>


<div class="min-h-[25rem] bg-gradient-to-br from-black via-gray-800 to-black p-4">
    <h1 class="font-bold text-6xl text-transparent text-center bg-clip-text bg-gradient-to-r w-fit m-auto from-white via-white to-white">John Doe - Producer</h1>
</div>
<Section>
    <nav class="my-4 font-bold text-xl">
        <li class="list-none m-auto flex justify-between items-center max-w-clamp-sm">
            <ul>
                <a  href="/">About</a>
            </ul>
            <ul>
                <a  href="/">Portfolio</a>
            </ul>
            <ul>
                <a  href="/">Contact</a>
            </ul>
        </li>
    </nav>
</Section>
<Section>
    <h2 class="text-2xl font-bold">About</h2>
    <p class="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.</p>
</Section>

<Section>
    <PortfolioCard title="Lazy Day" artist="Jimmie John" file="Lazy Day.mp3">
        <p class="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </PortfolioCard>
</Section>
