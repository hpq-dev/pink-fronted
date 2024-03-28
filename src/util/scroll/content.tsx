import { MutableRefObject, ReactNode, Ref, forwardRef, useEffect, useRef } from "react"
import useScroll from "./props"

interface props {
    children?: ReactNode | undefined
    className?: string
    contentProps?: string
    scrollColor?: [string, string]
    scrollProps?: string
}

const Content = ({
    children, className, contentProps, scrollColor = ['#393939', '#FE80CC'],
    scrollProps = "absolute -right-[1vh] top-0 rounded-full h-full w-[.4vh]"
}: props, mutRef: any) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const refScroll = useRef<HTMLDivElement | null>(null)

    const [procent, pos] = useScroll(ref, refScroll)
    const [color1, color2] = scrollColor

    return <div className={className}>
        <div
            ref={(mov) => {
                ref.current = mov
                try {
                    mutRef.current = mov
                } catch { }
            }}
            className={contentProps}
        >
            {children}
        </div>
        <div
            className={scrollProps}
            style={{
                background: color1
            }}
            ref={refScroll}
        >
            <div
                className="absolute left-0 top-0 w-full rounded-full"
                style={{
                    top: pos + '%',
                    height: procent + '%',
                    background: color2
                }}
            />
        </div>
    </div>
}

export default forwardRef(Content)