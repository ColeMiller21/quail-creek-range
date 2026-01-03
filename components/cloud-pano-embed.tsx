'use client'

import { useEffect } from 'react'

export function CloudPanoEmbed () {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tours.360tourspot.com/public/shareScript.js'
    script.async = true
    script.dataset.short = 'OpYrELqsL'
    script.dataset.path = 'tours'
    script.dataset.isSelfHosted = 'false'
    script.width = '100%'
    script.height = '500px'

    const container = document.getElementById('OpYrELqsL')
    if (container && !container.querySelector('script')) {
      container.appendChild(script)
    }

    return () => {
      if (container) container.innerHTML = ''
    }
  }, [])

  return (
    <div
      id="OpYrELqsL"
      style={{ width: '100%', height: '500px' }}
    />
  )
}

