import React, {useLayoutEffect} from "react";

const ContactUSPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div className="contact-us">
            <h1>ContactUSPage Component</h1>
        </div>
    )
}

export default ContactUSPage;