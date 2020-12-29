import React from 'react'

function Header(props) {
    const { theme: themeProp } = props
    const [theme, setTheme] = themeProp
    const themeToggler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
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
    )
}

export default Header
