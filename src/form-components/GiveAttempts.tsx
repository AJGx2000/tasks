import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [input, setInput] = useState<string>("");
    const usable = numAttempts > 0;
    return (
        <div>
            {"Current number of attempts is: " + numAttempts}
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Requested number of attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={input}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setInput(event.target.value)
                    }
                    className="middleBox"
                />
            </Form.Group>
            <Button
                onClick={() => setNumAttempts(numAttempts - 1)}
                disabled={!usable}
            >
                {" "}
                Use{" "}
            </Button>
            <Button
                onClick={() =>
                    input === "" || parseInt(input) < 0
                        ? 1
                        : setNumAttempts(numAttempts + parseInt(input))
                }
            >
                {" "}
                Gain{" "}
            </Button>
        </div>
    );
}
