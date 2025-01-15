export const objectKeys = <T extends Record<keyof T, unknown>>(object: T): (keyof T)[] => {
    return Object?.keys(object) as (keyof T)[]
}
