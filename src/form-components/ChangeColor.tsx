import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    function createOption(acolor: string): JSX.Element {
        return (
            <Form.Check
                key={acolor}
                inline={true}
                type="radio"
                name="colors"
                onChange={updateColor}
                id={"color-check-" + acolor}
                label={
                    <span style={{ backgroundColor: acolor }}> {acolor} </span>
                }
                value={acolor}
                checked={color === acolor}
            />
        );
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((acolor: string): JSX.Element => createOption(acolor))}
            <p>
                <span>You have chosen </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {" "}
                    {color}{" "}
                </span>
            </p>
        </div>
    );
}
