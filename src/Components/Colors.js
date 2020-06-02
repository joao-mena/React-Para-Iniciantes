import React, { useState, useEffect } from "react";

const Colors = () => {
    const [color, setColor] = useState("red");
    const colors = ["blue", "red", "tomato", "green"];
    const style = {
        backgroundColor: color,
        width: "200px",
        height: "200px"
    };

    useEffect(() => {
        console.log('teste');
    }, []);

    return (
        <div>
            {colors.map(color => (
                <button key={color} onClick={() => setColor(color)}>
                    {color}
                </button>
            ))}
            <div style={style}></div>
        </div>
    );
};

export default Colors
