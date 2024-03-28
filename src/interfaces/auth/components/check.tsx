import { ReactNode } from "react"
import { FaCheck } from "react-icons/fa6";
import { motion } from 'framer-motion'

interface props {
    value?: boolean
    onChange?: (value: boolean) => void
    children?: ReactNode
}

const Check = ({ value = false, onChange = () => { }, children }: props) => {
    console.log(value)
    return <div className="flex gap-x-[1vh] items-center">
        <motion.div
            className="w-[2vh] h-[2vh] rounded-[.5vh] bg-white text-black grid place-items-center text-[1.5vh]"
            onClick={() => onChange(!value)}
            whileTap={{
                scale: .95,
                opacity: .8
            }}
        >
            {value && <FaCheck />}
        </motion.div>
        <div>
            {children}
        </div>
    </div>
}

export default Check