import AllBlogsTable from '@/components/AllBlogsTable';
import Container from '@/components/Container';
import { TestBlog } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

const page = async () => {
    const baseUrl = "https://admin-timeless-topics.vercel.app"
    console.log(baseUrl);

    const res = await fetch(`${baseUrl}/api/blog`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    const allPosts = data.allPosts as unknown as TestBlog[]

    return (
        <Container>
            <div className=" flex justify-end">
                <Link href={"/"} className="bg-white py-2 px-3 rounded-md text-black capitalize font-semibold">
                    Add
                </Link>
            </div>
            <AllBlogsTable blogs={allPosts} />
        </Container>
    )
}

export default page