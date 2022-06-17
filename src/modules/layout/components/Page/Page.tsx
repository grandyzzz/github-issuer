import type { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

function Page({ children }: PageProps) {
  return <main className="w-full py-5">{children}</main>
}

export default Page
