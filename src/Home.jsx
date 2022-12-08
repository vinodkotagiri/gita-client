import React from 'react'
import Sider from './components/Sider'
import Content from './components/Content'
const Home = () => {
	return (
		<>
			<div className='w-screen h-screen bg-[url("/src/assets/images/bhagavadgita-2.jpg")] flex bg-cover relative'>
				<Sider />
				<Content />
				<div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 z-[-99]' />
			</div>
		</>
	)
}

export default Home
