import React, {useLayoutEffect} from "react";

const CheckoutPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className="checkoutpage">
            <h1>CheckoutPage Component</h1>
        </div>
    )
}

export default CheckoutPage;