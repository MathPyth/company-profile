import { HeadingScrollSpy } from '@/components/molecules/TableOfContents'
import { frontMatterContentType } from '@/pages/blog/[slug]'
import { useEffect, useState } from 'react'

export function useHandleTableOfContents(frontmatter: frontMatterContentType) {
    const [toc, setToc] = useState<HeadingScrollSpy>()

    const minLevel =
        toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ??
        0

    useEffect(() => {
        const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3')

        const headingArr: HeadingScrollSpy = []
        headings.forEach((heading) => {
            const id = heading.id
            const level = +heading.tagName.replace('H', '')
            const text = heading.textContent + ''

            headingArr.push({ id, level, text })
        })

        setToc(headingArr)
    }, [frontmatter.slug])

    return {
        toc,
        minLevel,
    }
}
