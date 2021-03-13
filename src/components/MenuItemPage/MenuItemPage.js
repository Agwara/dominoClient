import React, {useLayoutEffect} from "react";

const MenuItemPage = (props) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <section className="menu-item-page">
            <h1>MenuItemPage for {props.match.params.id}</h1>
        </section>
    )
}

export default MenuItemPage;