import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path, { join } from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'

// import { ContentType, Frontmatter, PickFrontmatter } from '@/types/frontmatters'

export function getContents() {
    const files = readdirSync(path.join('src', 'posts'))
    const posts = files.map((filename) => {
        const markdownWithMeta = readFileSync(
            path.join('src', 'posts', filename),
            'utf-8'
        )
        const { data: frontMatter } = matter(markdownWithMeta)
        return {
            frontMatter,
            slug: filename.split('.')[0],
        }
    })

    return posts
}

export async function getFiles() {
    return readdirSync(join(process.cwd(), 'src', 'contents'))
}

export async function getFileBySlug(slug: string) {
    const source = readFileSync(
        join(process.cwd(), 'src', 'posts', `${slug}.mdx`),
        'utf8'
    )

    const { data: frontMatter, content } = matter(source)
    const serializedContent = await serialize(content)

    return {
        serializedContent,
        frontmatter: {
            wordCount: source.split(/\s+/gu).length,
            readingTime: readingTime(source),
            slug: slug || null,
        },
        ...frontMatter,
    }
}
