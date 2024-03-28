import { MutableRefObject, useEffect, useRef } from "react"

const useHorizontalScroll = (): MutableRefObject<HTMLDivElement | null> => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const scroll = ref.current
        if (!scroll)
            return

        const handler = ({ deltaY }: WheelEvent) => {
            scroll.scrollTo({
                left: scroll.scrollLeft + deltaY
            })
        }

        scroll.addEventListener('wheel', handler)
        return () => scroll.removeEventListener('wheel', handler)
    }, [ref])

    return ref
}

export default useHorizontalScroll