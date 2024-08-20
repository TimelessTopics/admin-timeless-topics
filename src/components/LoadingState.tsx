import React from 'react'

const LoadingState = () => {
    return (
        <div
            className='fixed flex justify-center items-center top-0 left-0 bg-gray-800/55 z-40 h-full w-full'
        >
            <p className=''>
                <svg
                    className='animate-spin size-20 text-white'
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18s-3-3-3-3 3-3 3-3 3 3 3 3zm6-3s-3-3-3-3 3-3 3-3 3 3 3 3zm-6-3s-3-3-3-3 3-3 3-3 3 3 3 3z"
                    />
                </svg>
                <span className='ml-2 text-white'>Loading...</span
                >
            </p>
        </div>
    )
}

export default LoadingState