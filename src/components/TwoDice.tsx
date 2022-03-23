import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    /*
    const dl = d6();
    const dr = dl + (d6() % 5) + 1;
    */
    const [dl, dr] = [5, 6];

    const [[DL, setDL], [DR, setDR]] = [
        useState<number>(dl),
        useState<number>(dr)
    ];
    function rollLeft(): void {
        setDL(d6());
    }
    function rollRight(): void {
        setDR(d6());
    }
    function winCondition(d1: number, d2: number): string {
        if (d1 == d2) {
            if (d1 != 1) {
                return "You Win!";
            }
            return "You Lose!";
        }
        return "";
    }
    //<span>&emsp;&emsp;&emsp;&emsp;</span>;
    return (
        <div>
            <div>
                <span data-testid="left-die">{DL}</span>
                <span>&emsp;&emsp;</span>
                <span data-testid="right-die">{DR}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>{winCondition(DL, DR)}</div>
        </div>
    );
}
