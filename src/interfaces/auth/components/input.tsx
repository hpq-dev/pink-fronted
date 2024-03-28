import { useEffect, useState } from "react"
import { RiErrorWarningLine } from "react-icons/ri";
import { isEmailValid } from "../../../util";
import { motion } from "framer-motion";

interface props {
    value?: string
    title: string
    placeholder: string
    onChange: (value: string) => void
    type: 'password' | 'email' | 'text'
}

const Input = ({ placeholder, onChange, type, title, value = '' }: props) => {
    const [val, setValue] = useState<string>(value)
    const [error, setError] = useState<string>('')
    useEffect(() => setValue(value), [value])

    const onBlur = () => {
        switch (type) {
            case 'email': {
                if (!isEmailValid(val)) {
                    setError('This email is not valid')
                    return
                }
                break;
            }
            case 'password': {
                if (val.length < 7) {
                    setError('This password is not valid')
                    return
                }
            }
        }
        setError('')
        onChange(val)
    }

    return <div className="w-full h-[7vh] rounded-[.5vh] bg-[#262626] pl-[1vh] pt-[.5vh] relative">
        <div className="text-[1.5vh] text-[#ffffff65]">
            {title}
        </div>
        <input
            className="w-full h-full absolute left-0 top-0 bg-transparent text-[1.8vh] text-white outline-none border-none placeholder:text-[#ffffff30] pl-[1vh] pt-[1vh] font-bold"
            value={val}
            type={type}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            onBlur={() => onBlur()}
        />
        <motion.div
            className="w-fit h-[7vh] bg-white rounded-[.5vh] absolute -left-[3vh] opacity-0 -translate-y-1/2 top-1/2 flex items-center"
            animate={error.length < 1 ? {
                opacity: 0,
                translateX: '-150%',
                translateY: '-50%'
            } : {
                opacity: 1,
                translateX: '-100%',
                translateY: '-50%'
            }}
        >
            <div className="w-[4vh] h-[4vh] bg-[#E93119] rounded-[.5vh] grid place-items-center text-[2.5vh] translate-x-1/2 top-1/2 -translate-y-1/2 right-0 absolute">
                <RiErrorWarningLine />
            </div>
            <div className="text-[#474361] font-bold text-[1.7vh] px-[2vh] pr-[3vh]">
                That password is not valid!
            </div>
        </motion.div>
    </div>
}

export default Input