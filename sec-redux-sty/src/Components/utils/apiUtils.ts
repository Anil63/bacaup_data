import { IApiOnject } from "../models/apiUtils";

export function getApiObject(
    
    isFetching = false,
    isError  = false,
    errorMessage = '',
   
    
):IApiOnject
{
    return {isFetching,isError ,errorMessage , }
}