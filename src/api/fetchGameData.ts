import {IPeople, IStarship, People, Starships} from "swapi-ts";
import twoRandomNumbers from "../lib/twoRandomNumbers";

interface playGameI {
    people: IPeople[] | null,
    starships: IStarship[] | null
}

const fetchGameData = async function (type: string | undefined):Promise<playGameI> {
    const gameItems:playGameI = { people: null, starships: null };
    try {
        if(type === 'starships'){
            const starshipsData = await Starships.find();
            if(starshipsData && starshipsData.resources && starshipsData.resources.length){
                const [ leftIndex, rightIndex ] = twoRandomNumbers(0, starshipsData.resources.length - 1);
                gameItems.starships = [ starshipsData.resources[leftIndex].value, starshipsData.resources[rightIndex].value ];
            }
        } else if (type === 'people'){
            const peopleData = await People.find();
            if(peopleData && peopleData.resources && peopleData.resources.length){
                const [ leftIndex, rightIndex ] = twoRandomNumbers(0, peopleData.resources.length - 1);
                gameItems.people = [ peopleData.resources[leftIndex].value, peopleData.resources[rightIndex].value ];
            }
        }
    } catch (error) {
        let message:string = '';
        if (error instanceof Error) {
            message = error.message;
        } else {
            message = String(error);
        }
        alert(message);
    }
    return gameItems;
}
export default fetchGameData;
