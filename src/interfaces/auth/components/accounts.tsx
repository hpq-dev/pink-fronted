import { motion } from "framer-motion";
import content, { Content, useScrollEffect } from "../../../util/scroll"
import { LuClock } from "react-icons/lu";

type AccountType = {
    image: string
    name: string
    level: number
    date: string
}

interface props {
    accounts: AccountType[]
    onClick: (index: number) => void
}

const AuthAccounts = ({ accounts, onClick }: props) => {
    const ref = useScrollEffect()

    return <div className="w-full h-[15vh] mt-[4vh] relative">
        <Content
            className="w-full h-full max-h-full"
            contentProps='grid grid-cols-1 gap-y-[1vh] max-h-full overflow-y-auto'
            ref={ref}
        >
            {accounts.map(({ name, level, date, image }, i) => <motion.div
                key={i}
                className="bg-[#262626] hover:bg-[#2e2e2e] transition-colors duration-300 rounded-[.5vh] relative w-full h-[7vh] overflow-hidden flex gap-x-[1vh] items-center"
                onClick={() => onClick(i)}
                whileTap={{
                    scale: .95,
                    opacity: .8
                }}
        >
                <div className="w-[18%] bg-[#1D1D1D] h-full relative">
                    <img
                        className="w-[80%] m-auto absolute top-[1.5vh] left-1/2 -translate-x-1/2"
                        src={image}
                        alt="profile"
                    />
                </div>
                <div>
                    <div className="text-white text-[1.8vh] font-bold">
                        {name}
                    </div>
                    <div className="text-[#ffffff65] text-[1.4vh]">
                        Lvl {level}
                    </div>
                </div>
                <div className="text-[#ffffff35] flex gap-x-[.5vh] items-center absolute right-[1vh] text-[1.2vh]">
                    <div>{date}</div>
                    <LuClock className="text-[1.4vh] -mt-[.5vh]" />
                </div>
            </motion.div>)}
        </Content>
    </div>
}

export default AuthAccounts