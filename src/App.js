import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styled-components/GlobalStyles'
import { lightTheme, darkTheme } from './components/styled-components/Themes'
import './assets/scss/style.scss'

function App() {
    const [theme, setTheme] = useState('dark')
    const themeToggler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    <header>
                        <nav>
                            <a className="lang-toggler">
                                <span>{theme === 'dark' ? 'Español' : 'English'}</span>
                            </a>
                            <button onClick={themeToggler} className="theme-toggler">
                                {theme === 'dark' ? '💡' : '🌑'}
                            </button>
                        </nav>
                        <h1>Hi!👋 I'm Antonio Ortiz</h1>
                        <p>I'm a Software Developer 💻</p>
                    </header>
                    <section>
                        <h2>Projects</h2>
                        <article>
                            <h3>URL Shortener</h3>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor
                                at Hampden-Sydney College in Virginia, looked up one of the more
                                obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical literature,
                                discovered the undoubtable source. Lorem Ipsum comes from sections
                                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                                of Good and Evil) by Cicero, written in 45 BC. This book is a
                                treatise on the theory of ethics, very popular during the
                                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                amet..", comes from a line in section 1.10.32.
                            </p>
                        </article>
                        <article>
                            <h3>URL Shortener</h3>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor
                                at Hampden-Sydney College in Virginia, looked up one of the more
                                obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical literature,
                                discovered the undoubtable source. Lorem Ipsum comes from sections
                                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                                of Good and Evil) by Cicero, written in 45 BC. This book is a
                                treatise on the theory of ethics, very popular during the
                                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                amet..", comes from a line in section 1.10.32.
                            </p>
                        </article>
                    </section>
                    <footer>
                        <p>Made with ☕ by Antonio Ortiz.</p>
                        <nav></nav>
                    </footer>
                </div>
            </>
        </ThemeProvider>
    )
}

export default App
