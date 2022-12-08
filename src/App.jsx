import React, { createContext, useState } from 'react'
import Home from './Home'
export const VerseContext = createContext()
const App = () => {
	const [data, setData] = useState({ chapter_no: null, verse_no: null, response: null })
	return (
		<VerseContext.Provider value={{ data, setData }}>
			<Home />
		</VerseContext.Provider>
	)
}

export default App
