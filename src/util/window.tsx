import { useEffect, useState } from "react"

type props = [number, number]

export const useWindow = () => {
    const [wind, setWind] = useState<props>([0, 0])
    
    useEffect(() => {
        const resize = () => setWind([window.innerWidth, window.innerHeight])
        resize()

        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    return wind
}

export const VH = (value: number, vh?: number | undefined) => (!vh ? window.innerHeight : vh) * (value / 100)
export const VW = (value: number, vw?: number | undefined) => (!vw ? window.innerWidth : vw) * (value / 100)