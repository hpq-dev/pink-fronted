import { useEffect, useState } from "react"
import { RandomEx } from "./functions"

export const range = (
    value: number,
    ofValue: number,
    range: number
): boolean => {
    const div = range / 2
    return !(value < ofValue - div || value > ofValue + div)
}

export const useDebounce = (
    debounce: () => void,
    interval: number = 500,
    dependecies: unknown[] = []
): void => {
    useEffect(() => {
        const timer = setTimeout(() => debounce(), interval)
        return () => clearTimeout(timer)
    }, dependecies)
}

export const useToggleDebounce = (interval: number = 500): boolean => {
    const [toggle, setToggle] = useState<boolean>(false)
    useDebounce(() => setToggle(true), interval)

    return toggle
}

interface degressProps {
    cos: (deg: number) => number;
    sin: (deg: number) => number;
    atan2: (x: number, y: number) => number;
}

export const degress: degressProps = {
    cos: deg => Math.cos((Math.PI / 180) * deg),
    sin: deg => Math.sin((Math.PI / 180) * deg),
    atan2: (x, y) => (Math.atan2(x, y) * 180) / Math.PI
}

const radiansToDegrees = (radians: number) => {
    return radians * (180 / Math.PI);
}

export const getAngle = (x1: number, y1: number, x2: number, y2: number) => {
    var x = x2 - x1;
    var y = y2 - y1;
    var radians = Math.atan2(y, x);
    var degrees = radiansToDegrees(radians);

    if (degrees < 0) {
        degrees = 360 + degrees;
    }

    return degrees;
}

export const RandomLetter = () => {
    return String.fromCharCode(65 + RandomEx(0, 26))
}

export const isEmailValid = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
};