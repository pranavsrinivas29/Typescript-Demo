import { Coach } from "./Coach";

export class Golf implements Coach{
    getWorkout(): string {
        return `Practise golf for 3 hours`;
    }
}