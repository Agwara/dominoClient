import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { localGovernmentArea } from "../../data/localGovernmentArea";
import { activeStates } from "../../data/activeStates";
import { addressesInLGA } from "../../data/addressesInLGA";

let inputRef = React.createRef();

class CarryoutFormDetails extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            place : "Abia",
            governmentAreasList : [],
            governmentArea: localGovernmentArea["Abia"][0],
            deliveryAddress: "",
            deliveryInstruction: "",
            nearestStore: addressesInLGA["Abia"][0],
            carryoutTime: "",
            openingHours: 9,
            closingHours: 20,
            errorMessage: ""
        }
    }

    async componentDidMount () {
        await this.fetchLocalGovernmentArea();

        if (new Date().getHours() >= 8 && new Date().getHours() <= 19) {
            this.setState(() => ({openingHours: new Date().getHours() + 1}))
        } else if (new Date().getHours() >= 20) {
            await this.setState(() => ({
                errorMessage: "You can't make orders for this time today. Please select a future date.",
                openingHours: new Date().getHours()
            }))
        }
    }

    onStateChange = async (e) => {
		const state = e.target.value;
        await this.setState(() => ({ 
            place: state,
            governmentArea: localGovernmentArea[state][0]
        }));
        await this.fetchLocalGovernmentArea()
    };

    removeErrorMessage = () => {
        this.setState(() => ({errorMessage: ""}))
    }

    onLocalGovernmentChange = async (e) => {
        const area = e.target.value;
        await this.setState(() => ({ governmentArea: area }));
    }

    onNearestStoreChange = async (e) => {
        const nearestStore = e.target.value;
        await this.setState(() => ({ nearestStore }));
    }

    onTimeChange = async (e) => {
        const choosenTime = e.target.value;
        await this.setState(() => ({ carryoutTime: choosenTime }))
    }

    fetchLocalGovernmentArea = async () => {
        let governmentAreasList = localGovernmentArea[this.state.place]
        await this.setState(() =>({ governmentAreasList }))
    }

    onDateChange = async () => {
        let dateValue = inputRef.current.value;

        let datenow = new Date();
        let carryoutDate = new Date(dateValue)

        carryoutDate.setHours(datenow.getHours() + 1)

        let daysDiff = (carryoutDate.getTime() - datenow.getTime()) / (1000 * 60 * 60 * 24)

        if (daysDiff < 0) {
            this.setState(() => ({errorMessage: "You can't choose a day in the past."}))

        } else if (daysDiff > 7) {
            this.setState(() => ({errorMessage: "Please select a day from today to the next six days."}))

        } else if ((datenow.getMonth() === carryoutDate.getMonth()) && (datenow.getDate() === carryoutDate.getDate())) {
            if (datenow.getHours() >= this.state.openingHours && datenow.getHours() < this.state.closingHours) {
                await this.setState(() => ({ openingHours: carryoutDate.getHours()}))
                this.removeErrorMessage()

            } else if (datenow.getHours() >= this.state.closingHours) {
                this.setState(() => ({errorMessage: "You can't make orders for this time today. Please select a future date."}))
            }
        }
         else {
            await this.setState(() => ({ openingHours: 9}))
            this.removeErrorMessage()
        }
    }

    redirectToCheckout = () => {
        if (!(this.state.errorMessage)) {
            this.props.history.push("/checkout")
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (!(this.state.errorMessage)) {
            this.props.history.push("/checkout")
        }

    }

    render () {
        let openingHoursArray = [];

        for (let i = this.state.openingHours; i < this.state.closingHours; i++) {
            openingHoursArray.push(i)
        }

        // Set the default date to today for the date input.
        var curr = new Date();
        var date = curr.toISOString().substr(0,10);

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="delivery-form__message">
                    {
                        this.state.errorMessage ? 
                        <p>{this.state.errorMessage}</p> :
                        ""
                    }
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="state" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">State:</p>
                    </label>
                    <select 
                        className="delivery-form__select" 
                        onChange={this.onStateChange} 
                        value={this.state.place}
                    >

                        {
                            activeStates.map((item, i) => (
                                <option value={item} key={i}>{item}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="lga" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Local Government:</p>
                    </label>
                    <select 
                        id="lga"
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
                    <label htmlFor="nearest-store" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Choose Nearest Store:</p>
                    </label>
                    <select 
                        id="nearest-store"
                        className="delivery-form__select" 
                        onChange={this.onNearestStoreChange} 
                        value={this.state.nearestStore}
                    >
                        {
                            addressesInLGA[this.state.place][this.state.governmentArea].map((item, i) => (
                                <option value={item} key={i}>{item}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="carryout-date" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Carryout Date:</p>
                    </label>
            
                    <input 
                        className="carryout-form__style"
                        type="date" 
                        onChange={this.onDateChange} 
                        required
                        ref={inputRef}
                        defaultValue= {date}
                    />
                </div>

                <div className="delivery-form__group">
                    <label htmlFor="state" className="delivery-form__label">
                        <FontAwesomeIcon className="delivery-form__label-font" icon="star" />
                        <p className="delivery-form__label-text">Carryout Time:</p>
                    </label>
                    <select 
                        className="delivery-form__select" 
                        onChange={this.onTimeChange} 
                        value={this.state.carryoutTime}
                    >

                        {
                            openingHoursArray.map((item, i) => (
                                <option value={item} key={i}>{item}:00</option>
                            ))
                        }
                    </select>
                </div>

                <div className="customer-form__btn-container">
                    <button 
                        className={!(this.state.errorMessage) ? "customer-form__btn delivery-form__btn" :
                        "disabled__btn delivery-form__btn"}
                    >
                        Continue
                    </button>
                </div>
            </form>
        )
    }
}

export default CarryoutFormDetails;