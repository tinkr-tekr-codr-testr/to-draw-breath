export interface Axis {
    position: number
    startThreshold: number
    endThreshold: number

    absStart:number,
    absEnd:number
}

export const DefaultAxis = (): Axis => ({position: 50, startThreshold: 10, endThreshold: 90, absStart: 0, absEnd: 100})