import { useEffect, useRef } from 'react'


export function useUpdateEffect(effect: () => void, deps: readonly unknown[]) {
    const isFirst = useRef(true)

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false
        } else {
            effect()
        }
    }, deps)
}



