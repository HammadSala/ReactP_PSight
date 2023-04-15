import { useReducer, useState, useEffect, useContext, ChangeEvent, useCallback } from "react";
import sepeakersReducer from "../customhooks/speakersReducer";
import speakerData from "../static/SpeakerData";
import { configContext }  from './Landing'
import SpeakerDetails from "./SpeakerDetails";

export type SpeakerType = {
    id: number;
    firstName: string;
    lastName: string;
    sat: boolean;
    sun: boolean;
    favorite: boolean;
    bio: string;
}



const Speakers = () => {
    const [ isLoading , setIsLoading] = useState(true);
    const [ speakingSaturday, setSpeakingSaturday] = useState(true);
    const [ sepakingSunday, setSpeakingSunday ] = useState(true);

    const [ speakerList, dispatch] = useReducer(sepeakersReducer, []);

    const configContectValue  = useContext(configContext);



    useEffect (
        (()=>{
            setIsLoading(true);
            new Promise<void>((resolve, reject) => {
                //console.log("Pulling the data");
                setTimeout( ()=>{ resolve()},2000)
            }).then(() =>{
                 
                const speakerListServerFilter = speakerData.filter(({sat, sun}) =>{
                        return ((sepakingSunday && sun) || (speakingSaturday && sat));
                })
                //console.log(" sepakerLsiitSErverData", speakerListServerFilter);
                setIsLoading(false);
                dispatch({ type: "setSpeakerList", data: speakerListServerFilter });
            });
            return () => {
                //console.log("component cleanup here")
            }
            
        })
        ,[]
    )


     const handleSaturday = (event : ChangeEvent) => {
            setSpeakingSaturday(!speakingSaturday);
     }
     const handleSunday = (event : ChangeEvent) => {
            setSpeakingSunday(!sepakingSunday);
     }
    // the dispatch action are async so next render cyle only we can see the data, so demonstrated below for usefeect dependecny reffersh to see the log
    // useEffect(() => {
    //     //console.log("From reducer", speakerList);
    //   }, [speakerList]);

    const sepakerLsiitSErverDataSorted = isLoading ? [] :
        speakerList.sort( function( a :SpeakerType , b : SpeakerType){
            if (a.firstName < b.firstName)
                return -1;
            if (a.firstName > b.firstName)
                return 1
            else 
                return 0
        });

    const onHeartFavoriteHandler = useCallback(( speker : SpeakerType) =>{
        dispatch ({type: "favourite", data: speker})
        
    },[])

    return (
        <>
        In Speaker Page now

        { isLoading ? <div>Page is still loading</div> :
            <div>
                <div className="container">
                    <div className="btn-toolbar margintopbottom5 checkbox-bigger">
                        { !configContectValue.showSpeakersSpeakingDay ? <div>No speakers speaking</div> : 
                            (
                                <div className="hide">
                                    <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" 
                                                className="form-check-input"
                                                checked={speakingSaturday}
                                                onChange={handleSaturday}
                                        />
                                    Saturday
                                    </label>
                                    </div>

                                    <div className="form-check-inline">
                                    <label className="form-check-label">
                                    <input type="checkbox" 
                                                className="form-check-input"
                                                checked={sepakingSunday}
                                                onChange={handleSunday}
                                        />
                                    Sunday
                                    </label>
                                    </div>


                                </div>
                            )
                            
                        }
                    </div>

                    <div className="row">
                        <div className="card-deck">
                            {sepakerLsiitSErverDataSorted.map((speakerData1 : SpeakerType) => {
                                console.log("speker individual", speakerData1);
                                return <SpeakerDetails
                                    key={speakerData1.id}
                                    speakerData1={speakerData1}
                                    onHeartFavoriteHandler={onHeartFavoriteHandler(speakerData1)}

                                />
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        }
        </>
    );

}

export  default Speakers;