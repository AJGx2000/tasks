import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="checkAnswer">
                    <Form.Label>Enter answer here:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={answer}
                        onChange={updateAnswer}
                        className="middleBox"
                    />
                </Form.Group>
            </div>
            <div>That answer is {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
