// Construct a user readable message for the SMS response. 
import { History } from '../models/RiverDataResponse';

const capitalize = (riverName: string): string => riverName.charAt(0).toUpperCase() + riverName.slice(1);

export const messageConstructor = (river: string, currentLevel: History, units: string): string => {
    return `Name: ${capitalize(river)}%0D%0ACurrent Level: ${currentLevel.value}${units}%0D%0ALast Reading: ${encodeURI(currentLevel.date)}`
}



