
import { useEffect, useRef } from "react"

const useScrollEffect = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const child = ref.current
        if (!child)
            return

        const render = () => {
            const { scrollTop, clientHeight, scrollHeight, style } = child

            const max = scrollHeight - clientHeight

            if (scrollTop <= 0) {
                style.mask = `linear-gradient(0deg, transparent, white 20%, white 100%, transparent)`
                style.webkitMask = `linear-gradient(0deg, transparent, white 20%, white 100%, transparent)`
            }
            else if (scrollTop < max) {
                style.mask = `linear-gradient(0deg, transparent, white 20%, white 80%, transparent)`
                style.webkitMask = `linear-gradient(0deg, transparent, white 20%, white 80%, transparent)`
            }
            else {
                style.mask = `linear-gradient(0deg, transparent, white 0%, white 80%, transparent)`
                style.webkitMask = `linear-gradient(0deg, transparent, white 0%, white 80%, transparent)`
            }
        }

        render()

        const handler = (e: any) => render()

        child.addEventListener('scroll', handler)
        return () => child.removeEventListener('scroll', handler)
    }, [ref])

    return ref
}

export default useScrollEffect