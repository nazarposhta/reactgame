/**
 * Function takes two integers - "range" and returns two random numbers from that range
 * @param min
 * @param max
 */
const twoRandomNumbers = function (min:number, max:number):number[]{
    let aRandom = Math.floor(Math.random() * (max - min + 1) + min);
    let bRandom = Math.floor(Math.random() * (max - min + 1) + min);
    if(aRandom === bRandom){
        return twoRandomNumbers(min, max);
    }
    return [aRandom, bRandom];
}
export default twoRandomNumbers;
