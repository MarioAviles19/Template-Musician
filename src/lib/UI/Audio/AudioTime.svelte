<script lang=ts>
    import { FormatSecondsToMinutesAndSeconds } from ".";
    import { getContext } from "svelte";
    import { ctx, type context } from ".";

    let {time} = getContext(ctx) as context

</script>
{FormatSecondsToMinutesAndSeconds(time.currentTime)} | {FormatSecondsToMinutesAndSeconds(time.duration)}

