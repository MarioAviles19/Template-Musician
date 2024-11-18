import AudioControls from "./AudioControls.svelte"
import AudioProgressBar from "./AudioProgressBar.svelte"
import AudioTime from "./AudioTime.svelte"
import { writable, type Writable } from "svelte/store"
import AudioRoot from "./AudioRoot.svelte"
export const ctx = Symbol()

//Using a store prevents multiple audio files sounding at once
export const AudioElement : Writable<HTMLAudioElement> = writable()

export const Audio = {
    Root : AudioRoot,
    ProgressBar : AudioProgressBar,
    Controls : AudioControls,
    Time : AudioTime
}

export interface context {
    GetAudio : any,
    time : {currentTime : number, duration : number, paused : boolean}
}

export function FormatSecondsToMinutesAndSeconds(secs : number){

    const minutes = Math.floor(secs/60)
    const seconds = Math.floor(secs - minutes * 60)

    return minutes + ":" + seconds.toLocaleString("en-US", {minimumIntegerDigits: 2})

}