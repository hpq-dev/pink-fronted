
export const GetTimezoneFromTimestamp = (timestamp: number): number[] => {
    const seconds: number = timestamp % 60
    const minutes: number = Math.floor(timestamp / 60) % 60
    const hours: number = Math.floor(timestamp / 3600) % 24
    const days: number = Math.floor(timestamp / 86400) % 7
    const weeks: number = Math.floor(timestamp / (86400 * 7)) % 4
    const months: number = Math.floor(timestamp / (86400 * 7 * 4)) % 12

    return [seconds, minutes, hours, days, weeks, months]
}

export const GetColdownFormat = (timestmap: number): string => {
    console.log(timestmap)
    if (timestmap < 60)
        return `${timestmap} Seconds`

    if(timestmap < 3600)
        return `${Math.floor(timestmap / 60)} Minutes`

    if(timestmap < 86400)
        return `${Math.floor(timestmap / 3600)} Hours`

    if(timestmap < (86400) * 7)
        return `${Math.floor(timestmap / 86400)} Days`

    if(timestmap < (86400) * 7 * 4)
        return `${Math.floor(timestmap / (86400 * 7))} Weeks`

    else return `${Math.floor(timestmap / (86400 * 7 * 4))}`
}