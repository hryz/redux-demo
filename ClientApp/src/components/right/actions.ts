export const rightIncreased = 'rightIncreased'

export interface RightIncreased {
    type: typeof rightIncreased
    increment: number
}

export const rightDecreased = 'rightDecreased'

export interface RightDecreased {
    type: typeof rightDecreased
    decrement: number
}

export type RightActions =
    | RightIncreased
    | RightDecreased