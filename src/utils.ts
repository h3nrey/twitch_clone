export function handleTime(timeInSeconds: number) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const timesText = [hours, minutes, seconds]
        .map(time => (time < 10 ? `0${time}` : time.toString()));

    return timesText.join(":");
}

export function truncateNumber(num: number){
    if(num >= 1000000) {
        const cuttedNum = (num / 1000000).toFixed(1)
        const formatedNum = cuttedNum.endsWith("0") ? cuttedNum.slice(0,-2) : cuttedNum
        return formatedNum + "M"
    }
    else if(num >= 1000) {
        const cuttedNum = (num / 1000).toFixed(1)
        const formatedNum = cuttedNum.endsWith("0") ? cuttedNum.slice(0,-2) : cuttedNum
        return formatedNum + "K"
    }
    else{
        return num.toString()
    }
}