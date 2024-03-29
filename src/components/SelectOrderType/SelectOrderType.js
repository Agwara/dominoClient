import React, {useLayoutEffect} from "react";
import { connect } from "react-redux";
import { set_order_type } from "../../actions/orderType";

import CarryoutFormDetails from "../CarryoutFormDetails/CarryoutFormDetails";
import DeliveryFormDetails from "../DeliveryFormDetails/DeliveryFormDetails";

const SelectOrderType = (props) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    const onSetOptionToDelivery = () => {
        props.set_order_type("delivery")
    }

    const onSetOptionToCarryOut = () => {
        props.set_order_type("carryout")
    }

  
        return (
            <div className="select-order-type__container">
                <div className="select-order-type__main">
                    <div className="select-order-type__header">Select Your Order Type</div>
    
                    <div className="select-order-type__control-group">
                        <div 
                            onClick={onSetOptionToDelivery} 
                            className={props.orderType === "delivery" ? 
                                        "select-order-type__control-group--1 three-D__btn--hover" 
                                        : "select-order-type__control-group--1 three-D__btn"}>
                            <p className="select-order-type__control-group--text">Delivery</p>
                        </div>
                        <div className="select-order-type__control-group--or">
                            <p>- Or -</p>
                        </div>
    
                        <div
                            onClick={onSetOptionToCarryOut} 
                            className={props.orderType === "carryout" ? 
                                "select-order-type__control-group--1 three-D__btn--hover" 
                                : "select-order-type__control-group--1 three-D__btn"}>
                            <p className="select-order-type__control-group--text">Carryout</p>
                        </div>
                    </div>

                    { props.orderType === "delivery" ? 
                        <div>
                            <DeliveryFormDetails history={props.history} />
                        </div> :
                        <div>
                            <CarryoutFormDetails history={props.history} />
                        </div>
                    }
                </div>
            </div>
        )
    
}

const mapStateToProps = (state) => ({
	orderType: state.orderType,
})

const mapDispatchToProps = (dispatch) => ({
    set_order_type: (text) => dispatch(set_order_type(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectOrderType);