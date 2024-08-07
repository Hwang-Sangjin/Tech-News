import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params:{catName: string}}){
    
    try {
        const catName = params.catName

        const post = await prisma.category.findUnique({where: {catName},include: {posts: {include: {author: true}, orderBy: {createdAt: "desc"}}}})

        return NextResponse.json(post)
    } catch (error) {
        return NextResponse.json(
            {error: "Could not fetch post"}
        )
    }
}

