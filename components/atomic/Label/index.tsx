import { ReactNode } from 'react'
import Typograph from '../Typograph'

export default function Label({children}: {children: ReactNode}) {
  return (
    <Typograph variant='subtitle' style={{textAlign: 'left'}}>{children}</Typograph>
  )
}