export const appTotalChanged = 'appTotalChanged'

export interface AppTotalChanged {
    type: typeof appTotalChanged
    value: number
}

export const appTotalReset = 'appTotalReset'

export interface AppTotalReset {
    type: typeof appTotalReset
}

export type AppActions =
    | AppTotalChanged
    | AppTotalReset