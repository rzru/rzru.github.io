export const randomIntegerInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomFloatInRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
}
