import React, {useState} from "react";

function MainPage(props) {
    const [showWarning, setshowWarning] = useState(false);

    const handleToggleClick = () => {
        setshowWarning(prevshowWarning => !prevshowWarning);
    }

    return (
        <div>
            <WarningBanner warning = {showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? '감추기':'보이기'}
            </button>
        </div>
    );
}

export default MainPage;

function WarningBanner(props) {
    if(!props.warning){
        return null;
    }
    return (
        <div> 경고 </div>
    );
}