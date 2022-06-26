import { Coach } from "./Coach";

export class Cricket implements Coach{
    getWorkout(): string {
        return `Practise spin bowling`;
    }
}