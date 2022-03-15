import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [vis, setVis] = useState<boolean>(false);

    return (
        <span>
            <Button onClick={() => setVis(!vis)}> Reveal Answer </Button>{" "}
            <br></br> {vis ? "42" : ""}
        </span>
    );
}
