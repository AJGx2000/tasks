import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }
    return (
        <div>
            <div className="switch">
                <Form.Check
                    type="switch"
                    id="edit-mode"
                    label="Edit mode"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
            </div>
            {editMode ? (
                <div className="switch">
                    <Form.Group controlId="formName">
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="switch"
                        id="student switch"
                        label="Are you a student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                </div>
            ) : (
                <div>
                    {name + " is" + (isStudent ? "" : " not") + " a Student"}
                </div>
            )}
        </div>
    );
}
