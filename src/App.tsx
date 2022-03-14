import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Andrew Gkonos</p>
            <img
                src="https://lh3.googleusercontent.com/a-/AOh14GjpNuVoTiMF-85ubc_2XNcB-S06X6rgyYyXYyHj=s192-c-rg-br100"
                alt="It'sa me"
            ></img>
            <p>Hello World!</p>
            <Container>
                <p>Some things:</p>
                <Row>
                    <Col>
                        <div className="redRect">
                            <ol>
                                <li>One thing</li>
                                <li>Two thing</li>
                                <li>Red thing</li>
                                <li>Blue thing</li>
                            </ol>
                        </div>
                    </Col>
                    <Col>
                        <div className="redRect"></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
