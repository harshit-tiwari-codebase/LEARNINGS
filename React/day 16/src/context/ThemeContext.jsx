import React, { createContext, useState } from 'react'
export const ThemeDataContext = createContext()
const ThemeContext = (props) => {
    const [theme, settheme] = useState("#111")
  return (
    <div>
      <ThemeDataContext.Provider value={[theme,settheme]} >
          {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
