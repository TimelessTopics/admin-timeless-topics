import { prisma } from "@/db"
import { NextRequest, NextResponse } from "next/server"
export async function GET(req: NextRequest) {
    try {
        const allPosts = await prisma.testBlog.findMany({})
        return NextResponse.json({ allPosts }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}