import React, {useLayoutEffect} from "react";

const FAQsPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="faq">
            <h1>FAQsPage Component</h1>
        </div>
    )
}

export default FAQsPage;