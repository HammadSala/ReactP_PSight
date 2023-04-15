import { SpeakerType } from "../hcomponent/Speakers";

const sepeakersReducer = (state : any, action : any) =>{

    function handleFavourite ( favouriteValue :SpeakerType) {
        return state.map(( item :SpeakerType, index : any) =>{
            if(item.id === favouriteValue.id)
            {
                item.favorite = !favouriteValue.favorite;
                return item;
            }
            return item;
            

        }

        );
    }

    switch (action.type) {

        case "setSpeakerList" : {
            console.log("In speaker", action.data)
            return action.data;
        }
        case "favourite" :
            return handleFavourite(action.data);
        case "unfavourite" :
            return handleFavourite(action.data);
        default :
            return state
    }
};

export default sepeakersReducer;