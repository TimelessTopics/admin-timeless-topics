"use server"
import { prisma } from '@/db'
import { slugify } from './utils'

export async function addPost(formdata: FormData) {
    const title = (formdata.get("title") as string).trim()
    const keywords = (formdata.get("keywords") as string).trim()
    const category = (formdata.get("category") as string).trim()
    const content = formdata.get("content") as string
    const slug = slugify(title)
    const categorySlug = slugify(category)

    try {
        const newPost = await prisma.testBlog.create({
            data: { content, title, slug, category, categorySlug, keywords }
        })
        console.log("Added");

    } catch (error) {
        console.log("error", error);
    }
}
