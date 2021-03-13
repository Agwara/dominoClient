import React, {useLayoutEffect} from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { set_order_type } from "../../actions/orderType";

const HomePage = (props) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const [width, setWidth] = React.useState(window.innerWidth);

	const breakpoint = 656;
  
	React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
	}, [width]);

    const onSetOptionToDelivery = () => {
        props.set_order_type("delivery")
    }

    const onSetOptionToCarryOut = () => {
        props.set_order_type("carryout")
    }

    return(
        <div className="homepage">
            <div className="start-order">
                <div className="start-order__container">
                    <div className="start-order__heading">
                        <h1>Start Your Order</h1>
                    </div>
                    <div className="start-order__link-section">
                        <Link onClick={onSetOptionToDelivery} className="start-order__links" to="/select-order-type">
                            Delivery
                        </Link>
                        <p className="start-order__or-text">or</p>
                        <Link onClick={onSetOptionToCarryOut} className="start-order__links" to="/select-order-type">
                            Carryout
                        </Link>
                    </div>
                </div>

            </div>

            <div className="gallery">
                <figure className="gallery--item-1">
                    <img 
                        src="/img/domino-1.jpg" 
                        alt="FoodImage-1"
                        className="gallery--img"
                    />
                </figure>

                <figure className="gallery--item-2">
                    <img 
                        src={width > breakpoint ? "/img/test-4.jpg" : "/img/test-6.jpg"}  
                        alt="FoodImage-2"
                        className="gallery--img"
                    />
                </figure>

                <figure className="gallery--item-3">
                    <img 
                        src={width > breakpoint ? "/img/test-5.jpg" : "/img/test-7.jpg"}  
                        alt="FoodImage-3"
                        className="gallery--img"
                    />
                </figure>
        
            </div>

            <div className="zero-contact">
                <figure className="zero-contact--item">
                    <img 
                        src="/img/zero-contact.jpg" 
                        alt="Zero-Contact"
                        className="gallery--img"
                    />
                </figure>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    set_order_type: (text) => dispatch(set_order_type(text))
})

export default connect(undefined, mapDispatchToProps)(HomePage);