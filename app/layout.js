import '@styles/globals.css'
import Navbar from '@components/navbar'
import Provider from '@components/provider'

export const metadata={
    title:"prompt geneartor",
    description:'Discover & share prompts for all AI tools'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
                 <div className='gradient' />
            </div>
            <main className='app'>
                 <Navbar/>
                 {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default Rootlayout