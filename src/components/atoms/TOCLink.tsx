import { trunkString } from '@/utils'
import clsx from 'clsx'
import * as React from 'react'

type TOCLinkProps = {
    id: string
    level: number
    minLevel: number
    text: string
    activeSection: string | null
}

export default function TOCLink({
    id,
    level,
    minLevel,
    text,
    activeSection,
}: TOCLinkProps) {
    return (
        <a
            href={`#${id}`}
            id={`link-${id}`}
            className={clsx(
                'font-medium hover:text-gray-700 focus:outline-none ',
                'focus-visible:text-gray-700 0',
                'no-underline',
                activeSection === id ? 'text-gray-900 ' : 'text-slate-400 '
            )}
            style={{ marginLeft: (level - minLevel) * 16 }}
        >
            {trunkString(text, 20)}
        </a>
    )
}
