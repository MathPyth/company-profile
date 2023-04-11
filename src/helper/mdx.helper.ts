import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
// import { bundleMDX } from 'mdx-bundler'
import path, { join } from 'path'
// import readingTime from 'reading-time'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypePrism from 'rehype-prism-plus'
// import rehypeSlug from 'rehype-slug'
// import remarkGfm from 'remark-gfm'

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

// export async function getFileBySlug(type: ContentType, slug: string) {
//     const source = slug
//         ? readFileSync(
//               join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
//               'utf8'
//           )
//         : readFileSync(
//               join(process.cwd(), 'src', 'contents', `${type}.mdx`),
//               'utf8'
//           )

//     const { code, frontmatter } = await bundleMDX(source, {
//         xdmOptions(options) {
//             options.remarkPlugins = [
//                 ...(options?.remarkPlugins ?? []),
//                 remarkGfm,
//             ]
//             options.rehypePlugins = [
//                 ...(options?.rehypePlugins ?? []),
//                 rehypeSlug,
//                 rehypePrism,
//                 [
//                     rehypeAutolinkHeadings,
//                     {
//                         properties: {
//                             className: ['hash-anchor'],
//                         },
//                     },
//                 ],
//             ]
//             return options
//         },
//     })

//     return {
//         code,
//         frontmatter: {
//             wordCount: source.split(/\s+/gu).length,
//             readingTime: readingTime(source),
//             slug: slug || null,
//             ...frontmatter,
//         },
//     }
// }
