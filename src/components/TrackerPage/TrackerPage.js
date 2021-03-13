import React, {useLayoutEffect} from "react";

const TrackerPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <section className="tracker">
            <h1>TrackerPage</h1>
        </section>
    )
}

export default TrackerPage