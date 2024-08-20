'use client'
import { addPost } from '@/lib/actions'
import { CATEGORIES } from '@/lib/constants'
import React, { useEffect, useRef, useState } from 'react'
import LoadingState from './LoadingState'

const AddForm = () => {
    const [loading, setLoading] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    useEffect(() => {

    }, [loading])
    return (
        <div>
            {
                loading && <LoadingState />
            }
            <h1 className='text-center font-extralight text-xl'>Add New Post</h1>
            <form
                ref={formRef}
                action={async (formdata) => {
                    setLoading(true)
                    try {
                        await addPost(formdata)
                        alert('Post added successfully!')
                        formRef?.current?.reset()
                    } catch (error) {
                        console.error(error)
                        alert('Failed to add post. Please try again.')
                    } finally {
                        setLoading(false)
                    }
                }} className='max-w-md mx-auto space-y-4'>
                <label className='flex flex-col max-w-md text-white bg-transparent'>
                    Title
                    <input required
                        className='bg-transparent outline-none border rounded-md  py-2 text-white/45 px-1'
                        type="text" name="title" />
                </label>
                <label className='flex flex-col max-w-md text-white bg-transparent'>
                    Category
                    <input required
                        className='bg-transparent outline-none border rounded-md  py-2 text-white/45 px-1'
                        type="text" name="category" />
                </label>
                <label className='flex flex-col max-w-md text-white bg-transparent'>
                    Keywords
                    <input required
                        className='bg-transparent outline-none border rounded-md  py-2 text-white/45 px-1'
                        type="text" name="keywords" />
                </label>

                <label className='flex flex-col max-w-md text-white bg-transparent'>
                    Content
                    <textarea required
                        className='bg-transparent outline-none border rounded-md  py-2 text-white/45 px-1'
                        name="content" />
                </label>
                <button type="submit"
                    className='border w-full py-3 rounded-md px-1 font-bold hover:bg-gray-950'
                >Post</button>
            </form>
        </div>
    )
}

export default AddForm