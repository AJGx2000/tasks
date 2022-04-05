import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, selectAnswer] = useState<string>(options[0]);
    function updateSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        selectAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Option">
                <Form.Label>Select an Answer:</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={updateSelection}
                    className="middleBox"
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
