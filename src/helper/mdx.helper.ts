import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path, { join } from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'

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

    const options = {
        mdxOptions: {
            rehypePlugins: [rehypeSlug],
        },
    }
    const { data: frontMatter, content } = matter(source)
    const serializedContent = await serialize(content, options)

    return {
        serializedContent,
        frontmatter: {
            wordCount: source.split(/\s+/gu).length,
            readingTime: readingTime(source),
            slug: slug || null,
            rest: { ...frontMatter },
        },
    }
}

export async function getRecommendations(currSlug: string) {
    const frontmatters = await getContents()

    // Get current frontmatter
    const currentFm = frontmatters.find((fm) => fm.slug === currSlug)

    // Remove currentFm and Bahasa Posts, then randomize order
    const otherFms = frontmatters
        .filter((fm) => fm.slug !== currSlug)
        .sort(() => Math.random() - 0.5)

    //Find with similar tags
    const recommendations = otherFms.filter((op) =>
        op.frontMatter.tags.some((p: string) =>
            currentFm?.frontMatter.tags.includes(p)
        )
    )

    // Populate with random recommendations if not enough
    const threeRecommendations =
        recommendations.length >= 3
            ? recommendations
            : [
                  ...recommendations,
                  ...otherFms.filter(
                      (fm) => !recommendations.some((r) => r.slug === fm.slug)
                  ),
              ]

    // Only return first three
    return threeRecommendations.slice(0, 3)
}
