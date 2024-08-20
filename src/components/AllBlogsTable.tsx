import { TestBlog } from '@prisma/client';
import React from 'react'
import ActionDropdown from './ActionDropdown';
import Link from 'next/link';

const AllBlogsTable = ({ blogs }: { blogs: TestBlog[] }) => {

    if (!blogs?.length) return <p>No blogs found.</p>
    return (
        <div className=' w-full py-10'>
            <table className='table w-full '>
                <thead className='underline '>
                    <tr>
                        <th className='p-5 '>#</th>
                        <th className='p-5 '>Title</th>
                        <th className='p-5 '>Category</th>
                        <th className='p-5 '>Keywords</th>
                        <th className='py-5 pl-5 pr-0 text-right '>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                    {
                        blogs.map((blog, indx) => (
                            <tr key={blog.id} className=' table-row '>
                                <td className='p-5 ' >{indx + 1}</td>
                                <td className='p-5 '>{blog.title.slice(0, 20)}</td>
                                <td className='p-5 '>{blog.category}</td>
                                <td className='p-5 '>{blog?.keywords}</td>
                                <td className='py-5 pl-5 pr-0  '><ActionDropdown data={<div>
                                    <Link className='py-2 px-3 text-sm' href={`/update?id=${blog.id}`}>Update</Link>
                                </div>}
                                /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllBlogsTable