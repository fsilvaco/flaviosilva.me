import { Header } from '../Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" dark:bg-dark bg-light min-h-screen">
      <Header />
      {children}
    </div>
  )
}
