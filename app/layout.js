import '../styles/globals.css'
import { Navigation } from './components/Navigation.jsx'
import { font } from './font.js'

export default function RootLayout ({ children }) {
    // <body className={font.className}> in calssname mode
    // <body className={font.variable}> with variable, you must add the variable in the global.css

    return (
        <html>
            <head>
                <title>My first app next 13</title>
            </head>
            <body className={font.variable}>
                <Navigation />
                {children}
            </body>
        </html>
    )
}
