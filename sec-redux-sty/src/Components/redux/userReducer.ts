import {getApiObject} from '../utils/apiUtils'

export interface IUser {
    first_name:string;
    last_name :string;
    id:string;
    email:string;
    avatar:string;
}


export interface IUsetListState {
   users:getApiObject<IUser[]>
   
}

