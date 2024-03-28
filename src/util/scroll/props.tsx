import { useEffect, useState } from "react"
import { procentage } from "../functions"

type useScrollProps = {
    current: HTMLDivElement | null
}

const useScroll = (
    ref: useScrollProps,
    refScroll?: useScrollProps,
    key?: unknown
): [number, number] => {
    const [procent, setProcent] = useState<number>(0)
    const [pos, setPos] = useState<number>(0)

    useEffect(() => {
        if (!ref.current)
            return

        const handler = () => {
            if (!ref.current)
                return

            const { scrollTop, scrollHeight } = ref.current
            setPos(procentage(scrollTop, scrollHeight))
        }

        const { scrollHeight, clientHeight, scrollTop } = ref.current

        setProcent(procentage(clientHeight, scrollHeight))
        setPos(procentage(scrollTop, scrollHeight))


        ref.current.addEventListener('scroll', handler)
        return () => ref.current?.removeEventListener('scroll', handler)
    }, [ref, key])

    useEffect(() => {
        let active: boolean = false

        if (!refScroll)
            return

        const scroll: HTMLDivElement | null = refScroll.current
        if (!scroll || !ref.current)
            return

        const set = (pos: number) => {
            if (!ref.current)
                return

            const { height } = scroll.getBoundingClientRect()
            const { scrollHeight, clientHeight } = ref.current

            ref.current?.scrollTo({
                top: (procentage(pos, height) - (procentage(clientHeight, scrollHeight) / 2)) * (scrollHeight / 100)
            })
        }

        const handlerActive = ({ offsetY }: MouseEvent) => {
            active = true
            set(offsetY)
        }
        scroll.addEventListener('mousedown', handlerActive)

        const handlerDisable = () => active = false
        document.addEventListener('mouseup', handlerDisable)

        const handlerMove = (e: MouseEvent) => {
            if (!active)
                return

            const { y } = scroll.getBoundingClientRect()
            set(e.clientY - y)
        }
        document.addEventListener('mousemove', handlerMove)

        return () => {
            scroll.removeEventListener('mousedown', handlerActive)
            document.removeEventListener('mousedown', handlerMove)
            document.removeEventListener('mouseup', handlerDisable)
        }
    }, [refScroll, ref])

    return [procent, pos]
}

export default useScroll