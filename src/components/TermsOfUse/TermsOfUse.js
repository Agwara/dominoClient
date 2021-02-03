import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TermsOfUse = () => {

    const onShowTermsClick = () => {
        let component = document.getElementById("terms-of-use");
        component.style.display = "none";
    }

    return (
        <div className="terms-of-use">
            <FontAwesomeIcon 
				onClick={onShowTermsClick}
				className="terms-of-use__times-font" 
			    icon="times" 
            />
        </div>
    )
}

export default TermsOfUse;