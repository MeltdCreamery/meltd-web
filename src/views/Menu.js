import React, { useState } from "react";
import Card from "../components/Card";

const iceCreamData = [
    { name: "vanilla", price: "3" },
    { name: "chocolate", price: "3" },
];

const Menu = props => {
    const [iceCreams, setIceCreams] = useState(iceCreamData);

    return (
        <div>
            <div>Menu</div>
            <div>
                {iceCreams.map(iceCream => {
                    return (
                        <div>
                            <Card title={iceCream.name} price={iceCream.price} img={iceCream.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
