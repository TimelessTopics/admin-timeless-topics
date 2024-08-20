'use client'

import { ReactNode, useState } from "react"

type TProps = {
    id?: string,
    data?: ReactNode,
}

const ActionDropdown = ({ data, id }: TProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative">
            <button
                className="border-2 border-gray-950 px-4 py-2 text-white w-fit flex justify-center items-center text-sm"
                id={id || 'action-dropdown'}
                aria-haspopup="true"
                // aria-expanded={Links ? 'true' : 'false'}
                aria-labelledby={id || 'action-dropdown'}
                onClick={() => setIsOpen(prev => !prev)}
            ><span>More</span></button>
            <div className={`${isOpen ? "absolute" : "hidden"} bg-black text-white border w-full z-10`}>
                {data}
            </div>
        </div>
    )
}

export default ActionDropdown