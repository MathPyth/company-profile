import React, { forwardRef } from 'react'
import clsx from 'clsx'

const fontSizing = [
    'small',
    'medium',
    'large',
    'extralarge',
    'smallest',
] as const
const fontWeight = ['light', 'normal', 'bold', 'semi-bold'] as const

type Props = {
    size?: typeof fontSizing[number]
    fontFamily: 'lexend' | 'inter'
    fontWeight?: typeof fontWeight[number]
    color: 'primary' | 'secondary' | 'tertiary' | 'light' | 'white'
    className?: string
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<'p'>

// eslint-disable-next-line react/display-name
const Typography = forwardRef<HTMLParagraphElement, Props>(
    (
        {
            size,
            fontFamily = 'inter',
            color = 'primary',
            fontWeight = 'normal',
            className,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <p
                className={clsx(
                    className,
                    [
                        color === 'primary' && ['text-black'],
                        color === 'secondary' && ['text-mathpyDark'],
                        color === 'tertiary' && ['text-mathpylue'],
                        color === 'light' && ['text-slate-700'],
                        color === 'white' && ['text-slate-200'],
                    ],
                    [
                        size === 'smallest' && ['text-smallest'],
                        size === 'small' && ['text-small'],
                        size === 'medium' && ['text-base'],
                        size === 'large' && ['text-large'],
                        size === 'extralarge' && ['text-extralarge'],
                    ],
                    [
                        fontFamily === 'lexend' && ['font-lexend'],
                        fontFamily === 'inter' && ['text-inter'],
                    ],
                    [
                        fontWeight === 'light' && ['font-light'],
                        fontWeight === 'normal' && ['font-normal'],
                        fontWeight === 'semi-bold' && ['font-medium'],
                        fontWeight === 'bold' && ['font-bold'],
                    ]
                )}
                ref={ref}
                {...rest}
            >
                {children}
            </p>
        )
    }
)

export default Typography
