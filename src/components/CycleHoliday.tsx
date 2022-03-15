import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Birthday");
    function cycleAlph() {
        const holidaysA = [
            "Birthday",
            "Christmas",
            "Easter",
            "Halloween",
            "Thanksgiving"
        ];
        setHoliday(holidaysA[(holidaysA.indexOf(holiday) + 1) % 5]);
    }
    function cycleDate() {
        const holidaysD = [
            "Easter",
            "Halloween",
            "Thanksgiving",
            "Birthday",
            "Christmas"
        ];
        setHoliday(holidaysD[(holidaysD.indexOf(holiday) + 1) % 5]);
    }
    const holidays = [
        "Birthday",
        "Christmas",
        "Easter",
        "Halloween",
        "Thanksgiving"
    ];
    const emojis = ["🎂", "🎄", "🐰", "🎃", "🦃"];
    return (
        <div>
            <div>Holiday: {emojis[holidays.indexOf(holiday)]}</div>
            <div>
                <Button onClick={cycleAlph}>Cycle Alphabetically</Button>
                <Button onClick={cycleDate}>Cycle by time of Year</Button>
            </div>
        </div>
    );
}
