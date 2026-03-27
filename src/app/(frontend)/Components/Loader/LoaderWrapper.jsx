import React, { Suspense } from 'react'
import Loader from './Loader'

const LoaderWrapper = () => {
  return (
    <Suspense fallback={null}>
      <Loader />
    </Suspense>
  )
}

export default LoaderWrapper