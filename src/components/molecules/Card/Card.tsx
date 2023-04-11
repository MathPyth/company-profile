import clsx from 'clsx'
import React from 'react'

const cardColor = ['dark', 'light', 'blue'] as const

type Props = {
    color: typeof cardColor[number]
    children: React.ReactNode
    className?: string
} & React.ComponentPropsWithoutRef<'div'>

const Card = (props: Props) => {
    const { children, color, className, ...rest } = props
    return (
        <div
            className={clsx(
                [color === 'dark' && 'bg-mathpyDark'],
                [color === 'light' && 'bg-mathpyWhite border border-slate-300'],
                [color === 'blue' && 'bg-mathpylue'],
                ['rounded-xl p-10'],
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Card
