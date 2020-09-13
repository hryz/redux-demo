export const leftIncreased = 'leftIncreased'

export interface LeftIncreased {
    type: typeof leftIncreased
    increment: number
}

export const leftDecreased = 'leftDecreased'

export interface LeftDecreased {
    type: typeof leftDecreased
    decrement: number
}

export type LeftActions =
    | LeftIncreased
    | LeftDecreased