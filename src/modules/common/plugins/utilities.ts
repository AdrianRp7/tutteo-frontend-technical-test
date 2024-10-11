import {type App} from "vue"

export default {
    install: (app: App, _:any) => {
        //This function transform seconds 106.031 to 1:44
        app.config.globalProperties.$transformSecondsToTimeFormat = (seconds:number) => {
            const secondsWithoutDecimals:number = Math.floor(seconds) + (seconds - Math.floor(seconds) > 0 ? 1 : 0);
            const hours:number = Math.floor(secondsWithoutDecimals/3600);
            const minutes:number = Math.floor(secondsWithoutDecimals/60);
            const secondsTimer:number = secondsWithoutDecimals % 60;

            console.dir({
                seconds,
                secondss: Math.floor(seconds)                
                ,secondsWithoutDecimals
                ,hours
                ,minutes
                ,secondsTimer
            })

            let stringResult:string = "";
            stringResult = hours !== 0 ? `${hours}` : "";
            stringResult += minutes < 10 && hours > 0 ? `0${minutes}:` : `${minutes}:`;
            stringResult += secondsTimer < 10 ? `0${secondsTimer}`: secondsTimer;

            return stringResult;
        }
    }
}