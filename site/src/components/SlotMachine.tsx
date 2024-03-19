import React, { useState, useCallback, useEffect } from 'react'
import { BeanHead } from 'beanheads'

export function SlotMachine({
  interval = 300,
  pause = false,
}: {
  interval?: number
  pause?: boolean
}) {
  const [rerender, set] = useState(0)

  const forceRerender = useCallback(() => {
    set(a => a + 1)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(
      forceRerender,
      rerender % 15 === 0 && pause ? 2000 : interval,
    )

    return () => clearTimeout(timeout)
  }, [rerender, interval])

  return <BeanHead />
}
