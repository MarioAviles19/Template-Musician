
export const ctx = Symbol()

export function FormatSecondsToMinutesAndSeconds(secs : number){

    const minutes = Math.floor(secs/60)
    const seconds = Math.floor(secs - minutes * 60)

    return minutes + ":" + seconds.toLocaleString("en-US", {minimumIntegerDigits: 2})

}