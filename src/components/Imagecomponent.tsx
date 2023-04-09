import React, { useEffect, useRef, useState } from "react";

type Props = {
    primaryPath : string,
    secondarPath : string,

}

const Imagecomponent = ( { primaryPath, secondarPath  } : Props) => {

    const imageRef = useRef(null);
    const [ inViews, setInViews] = useState(false);
    const [ loading, setIsLoading ] = useState(true);

    useEffect( ()=>{
        setIsLoading(false);
        setInViews(inView());
        window.addEventListener("scroll", scrollHandler);
            return () => window.removeEventListener("scroll", scrollHandler);
    }
        ,[]
    )

    function scrollHandler() {
        setInViews(inView());
    }

    const inView = () => {
        if (imageRef.current) {
            const post = (imageRef?.current as HTMLElement).getBoundingClientRect();
            console.log(post);
            return post.top >= 0 && post.bottom <= window.innerHeight;
        }
        return false;
    }
    return (
        <>
            {
                loading ? <p>Please wait its loading</p> : <div>
                    {
                        <img src={inViews ? primaryPath : secondarPath}
                            ref={imageRef} />
                    }
                </div>
            }
        </>
    );

}

export default Imagecomponent;