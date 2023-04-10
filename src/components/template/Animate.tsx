import React from 'react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const transitionList = ['left', 'right', 'top', 'bottom', 'fade'] as const
type Props = {
    children: React.ReactNode
    transition: typeof transitionList[number]
    duration?: number
}

const transitionHandler = (
    transition: typeof transitionList[number]
): string => {
    switch (transition) {
        case 'left':
            return 'translateX(-200px)'
        case 'right':
            return 'translateX(200px)'
        case 'top':
            return 'translateY(-100px)'
        case 'top':
            return 'translateY(100px)'
        default:
            return 'none'
    }
}

/**
 * A custom framer motion animation.
 * @param {transition} top - make animations from top to bottom and so on.
 * @param {transition} left - make animations from left to right and so on.
 * @param {duration} duration - custom the duration of animations the default is 0.5s
 */

const Animate = (props: Props) => {
    const { children, transition, duration = 0.3 } = props
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    return (
        <section ref={ref}>
            <div
                style={{
                    transform: isInView
                        ? 'none'
                        : transitionHandler(transition),
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${duration}s`,
                }}
            >
                {children}
            </div>
        </section>
    )
}

export default Animate
