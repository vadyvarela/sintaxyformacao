import '../../styles/globals.css'
import '../../styles/style.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="font-Roboto dark:bg-slate-800 bg-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
