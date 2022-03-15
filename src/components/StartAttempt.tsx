import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [[attempts, setAttempts], [inProgress, setInProgress]] = [
        useState<number>(4),
        useState<boolean>(false)
    ];

    function start(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function stop(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button onClick={start} disabled={inProgress || attempts == 0}>
                Start Quiz
            </Button>{" "}
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>{" "}
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>{" "}
            {attempts}
        </div>
    );
}
