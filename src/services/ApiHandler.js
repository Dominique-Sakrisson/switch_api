import {getRickNM, getAvatar} from './ApiCalls';

export const chooseApi = async (choice) => {
    switch(choice) {
        case 'avatar': {
            return await getAvatar();
            break;
        }
        case 'ricknm': {
            return await getRickNM();
            break;
        }
        default: {
            return await getAvatar();
        }
    }
}
