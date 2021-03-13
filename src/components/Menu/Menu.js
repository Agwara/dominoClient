import React, {useLayoutEffect} from "react";

const Menu = (props) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const goToMenuItemPage = (menuItem) => {
        props.history.push(`/menu/${menuItem}`)
    }

    return (
        <section className="menu">
            <h1 className="menu__header">Agwara's National Menu</h1>

            <ul className="menu__list">
                <li onClick={() => goToMenuItemPage("pizza")} className="menu__item">
                    <img src="/dealsImg/pizza.png" alt="Pizzas" />
                    <p className="menu__item--text">Pizzas</p>
                </li>

                <li onClick={() => goToMenuItemPage("smallie")} className="menu__item">
                    <img src="/dealsImg/smallie.png" alt="Smallie" />
                    <p className="menu__item--text">Smallie</p>
                </li>

                <li onClick={() => goToMenuItemPage("sides")} className="menu__item">
                    <img src="/dealsImg/sides.png" alt="Sides" />
                    <p className="menu__item--text">Sides</p>
                </li>

                <li onClick={() => goToMenuItemPage("extras")} className="menu__item">
                    <img src="/dealsImg/extras.png" alt="Extras" />
                    <p className="menu__item--text">Extras</p>
                </li>

                <li onClick={() => goToMenuItemPage("chicken")} className="menu__item">
                    <img src="/dealsImg/chicken.png" alt="Chicken" />
                    <p className="menu__item--text">Chicken</p>
                </li>

                <li onClick={() => goToMenuItemPage("drinks")} className="menu__item">
                    <img src="/dealsImg/drinks.png" alt="Drinks" />
                    <p className="menu__item--text">Drinks</p>
                </li>

                <li onClick={() => goToMenuItemPage("desserts")} className="menu__item">
                    <img src="/dealsImg/dessert.png" alt="Desserts" />
                    <p className="menu__item--text">Desserts</p>
                </li>
            </ul>
        </section>
    )
}

export default Menu;
