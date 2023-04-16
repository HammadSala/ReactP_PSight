import { SpeakerType } from "./Speakers";
import Imagecomponent from "../components/Imagecomponent";
import { useMemo } from "react";
import "./imgcss.css"


type Props = {
    speakerData : SpeakerType,
    // onHeartFavoriteHandler: Function,


}


const SpeakerDetails=   ( {speakerData  } : Props) =>{

    //console.log("Speaker DEtails", speakerData);
    return (
        <div className="card col-4 cardmin">
            <Imagecomponent
                
                primaryPath={require(`../static/speakers/bw/Speaker-${speakerData.id}.jpg`)}
                secondarPath={require(`../static/speakers/Speaker-${speakerData.id}.jpg`)}  
                />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        
                        className={ speakerData.favorite ? "heartredbutton" : "heartdarkbutton"}
                        // onClick={useMemo(()=>onHeartFavoriteHandler(speakerData1),[])}
                        >
                    </button>
                    <span>{speakerData.firstName}  {speakerData.lastName}</span>
                </h4>
                <span>{speakerData.bio}</span>

            </div>

        </div>
    )
}

export default SpeakerDetails;