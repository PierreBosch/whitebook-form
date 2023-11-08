import '@/globals.css'
import { SignUp } from './pages/sign-up'
import { ThemeProvider } from './contexts/theme-provider'
import { Header } from './components/header'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen w-full'>
        <Header />

        <div className="mt-5 w-full max-w-7xl mx-auto">
          <SignUp />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
