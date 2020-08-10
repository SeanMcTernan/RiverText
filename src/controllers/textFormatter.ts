//Extract the river name from potential surrounding text.
import { rivers } from './riversArray';

export const textFormatter = (text: string): string | null => {
    for (let i = 0; i != rivers.length; i++) {
        const river = rivers[i];
        if (text.indexOf(river) != - 1) {
            return river;
        }
    }
    return null;
}



