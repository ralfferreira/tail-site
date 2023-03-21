import './globals.css'
import Header from './components/header/header'

export const metadata = {
  title: 'TAIL',
  description: 'TAIL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
