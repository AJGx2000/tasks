import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export function ChooseTeam(): JSX.Element {
    const [team, setTeam] = useState<string[]>([]);
    const PEOPLE = [
        "Alan Turing",
        "Grace Hopper",
        "Ada Lovelace",
        "Charles Babbage",
        "Barbara Liskov",
        "Margaret Hamilton"
    ];
    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() =>
                                    setTeam(
                                        !team.includes(option)
                                            ? [...team, option]
                                            : team
                                    )
                                }
                                size="sm"
                                disabled={team.includes(option)}
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={() => setTeam([])}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}