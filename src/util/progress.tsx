import { MutableRefObject, useEffect, useRef, useState } from "react"
import { procentage } from "./functions"

type Vector2 = { x: number, y: number }

const useProgress = (defaultNumber: Vector2 = { x: 0, y: 0 }): [MutableRefObject<HTMLDivElement | null>, Vector2] => {
    const [pos, setPos] = useState<Vector2>(defaultNumber)
    const ref = useRef<HTMLDivElement | null>(null)
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        const parent = ref.current

        if (!parent)
            return

        const handlerStart = (e: MouseEvent) => {
            setActive(true)
            update(e)
        }

        const handlerStop = () => {
            setActive(false)
        }

        const update = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { left, top, width, height } = parent.getBoundingClientRect()

            let x: number = procentage(clientX - left, width)
            if (x < 0) x = 0
            else if (x >= 100) x = 100

            let y: number = procentage(clientY - top, height)
            if (y < 0) y = 0
            else if (y >= 100) y = 100

            setPos({
                x, y
            })
        }

        const handlerMove = (e: MouseEvent) => {
            if (!active)
                return

            update(e)
        }

        parent.addEventListener('mousedown', handlerStart)
        document.addEventListener('mouseup', handlerStop)
        document.addEventListener('mousemove', handlerMove)

        return () => {
            parent.removeEventListener('mousedown', handlerStart)
            document.removeEventListener('mouseup', handlerStop)
            document.removeEventListener('mousemove', handlerMove)
        }
    }, [ref, active])

    return [ref, pos]
}

export default useProgress