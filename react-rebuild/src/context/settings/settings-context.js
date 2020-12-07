import React, { useState, useContext } from 'react';

export const SettingsContext = React.createContext()
//line 3 exports SettingsContext down to list so we can access the variables, methods and 
//properties in our SettingsContext
function Settings(props) {


  const [page, setPage] = useState(5)
  console.log(page);
  return (
    <SettingsContext.Provider value={{page}}>
      {/* THIS HAS TO BE VALUE ^^^ CANNOT POTATO */}
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;
//line 18 exports the markup element to app, this is how we wrap everything