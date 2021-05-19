import {getRickNM, getAvatar} from './ApiCalls';

export const chooseApi = async (choice, char) => {
    switch(choice) {
        case 'avatar': {
            if(char){
                return await getAvatar(char);
            }
            return await getAvatar();
            break;
        }
        case 'ricknm': {
            if(char){
                return await getRickNM(char);
            }
            return await getRickNM();
            break;
        }
        default: {
            return await getAvatar();
        }
    }
}
