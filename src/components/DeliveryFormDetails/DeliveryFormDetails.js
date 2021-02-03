import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { localGovernmentArea } from "../../data/localGovernmentArea";

class DeliveryFormDetails extends React.Component {
    constructor (props) {
        super()

        this.state = {
            place : "Lagos",
            governmentAreasList : [],
            governmentArea: "",
            deliveryAddress: "",
            deliveryInstruction: ""
        }
    }

    async componentDidMount () {
        await this.fetchLocalGovernmentArea();
    }

    onStateChange = async (e) => {
		const state = e.target.value;
        await this.setState(() => ({ place: state }));
        await this.fetchLocalGovernmentArea()
    };

    onLocalGovernmentChange = async (e) => {
        const area = e.target.value;
        await this.setState(() => ({ governmentArea: area }));
    }

    fetchLocalGovernmentArea = async (e) => {
        let governmentAreasList = localGovernmentArea[this.state.place]
        await this.setState(() =>({ governmentAreasList }))
    }

    onDeliveryAddressChange = (e) => {
		const address = e.target.value;
        this.setState(() => ({ deliveryAddress: address }));
    }

    onDeliveryInstructionChange = (e) => {
		const instruction = e.target.value;
        this.setState(() => ({ deliveryInstruction: instruction }));
    }
    

    render () {
        return (
            <form>
                <div className="delivery-form__group">
                    <label htmlFor="state" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">State:</p>
                    </label>
                    <select className="delivery-form__select" onChange={this.onStateChange} value={this.state.place}>
                        <option value="Ogun">Ogun</option>
                        <option value="Abia">Abia</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Lagos">Lagos</option>
                    </select>
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="state" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Local Government:</p>
                    </label>
                    <select 
                        className="delivery-form__select" 
                        onChange={this.onLocalGovernmentChange} 
                        value={this.state.governmentArea}
                    >
                        {
                            this.state.governmentAreasList.map((item, i) => (
                                <option value={item} key={i}>{item}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="address" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Delivery Address:</p>
                    </label>
                    <textarea 
                        id="address"
                        type="textarea"
                        placeholder="Delivery Address"
                        className="delivery-form__input"
                        value={this.state.deliveryAddress}
                        onChange={this.onDeliveryAddressChange}
                        required
                    ></textarea>
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="delivery-instruct" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Delivery Instruction:</p>
                    </label>
                    <textarea 
                        id="delivery-instruct"
                        type="textarea"
                        placeholder="Delivery Instruction"
                        className="delivery-form__input delivery-form__instruction--textarea"
                        value={this.state.deliveryInstruction}
                        onChange={this.onDeliveryInstructionChange}
                        required
                    ></textarea>
                </div>

                <div className="delivery-form__instruction-container">
                    <div className="delivery-form__instruction-main">
                        <p className="delivery-form__instruction-exp--text">
                            Example: 
                        </p>
                        <span className="delivery-form__instruction-exp--span">
                            Gate code, ring the door bell, etc.
                        </span>
                    </div>

                </div>

                <div className="customer-form__indicator">
                    <FontAwesomeIcon className="customer-form__indicator--star" icon="star" />
                    <p className="customer-form__indicator--text">Indicates field required.</p>
                </div>

                <div className="customer-form__btn-container">
                    <button className="customer-form__btn delivery-form__btn">Continue</button>
                </div>
            </form>
        )
    }
}

export default DeliveryFormDetails;