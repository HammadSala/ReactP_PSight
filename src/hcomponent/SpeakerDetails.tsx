import { SpeakerType } from "./Speakers";
import Imagecomponent from "../components/Imagecomponent";


type Props = {
    speakerData1 : SpeakerType,
    onHeartFavoriteHandler: Function,


}


const SpeakerDetails=   ( {speakerData1, onHeartFavoriteHandler  } : Props) =>{

    //console.log("Speaker DEtails", speakerData);
    return (
        <div className="card col-4 cardmin">
            <Imagecomponent
                
                primaryPath={require(`../static/speakers/bw/Speaker-${speakerData1.id}.jpg`)}
                secondarPath={require(`../static/speakers/Speaker-${speakerData1.id}.jpg`)}  
                />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        
                        className={ speakerData1.favorite ? "heartredbutton" : "heartdarkbutton"}
                        onClick={onHeartFavoriteHandler(speakerData1)}
                        >
                    </button>
                    <span>{speakerData1.firstName}  {speakerData1.lastName}</span>
                </h4>
                <span>{speakerData1.bio}</span>

            </div>

        </div>
    )
}

export default SpeakerDetails;