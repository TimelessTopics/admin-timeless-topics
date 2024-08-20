import { ReactNode } from 'react'

const   Container = ({ children }: { children?: ReactNode }) => {
    return (
        <div className=' max-w-screen-md mx-auto pt-10 min-h-screen'>
            {children}
        </div>
    )
}

export default Container