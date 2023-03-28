import './output.css'
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-darkGray font-asap">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
