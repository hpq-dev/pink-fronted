import { motion } from "framer-motion"
import { ReactNode } from "react"

interface props {
    children?: ReactNode
    onClick?: () => void
}

const Button = ({ children, onClick = () => { } }: props) => {
    return <motion.div
        className="w-full h-[6vh] relative bg-[#FE80CC] text-[#474361] uppercase font-bold grid place-items-center rounded-[.5vh] group active:bg-[#cb4897] transition-colors duration-300"
        onClick={() => onClick()}
    >
        {children}
        <div
            className="w-full h-full absolute bg-[#474361] rounded-[.5vh] z-[-1] translate-x-[.5vh] translate-y-[.5vh] group-active:translate-x-0 group-active:translate-y-0 transition-transform duration-300"
        />
    </motion.div>
}

export default Button