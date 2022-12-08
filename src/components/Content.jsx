import React, { useContext, useState } from 'react'
import { VerseContext } from '../App'
import useGetData from '../hooks/useGetData'

const Content = () => {
	const context = useContext(VerseContext)
	const { data, setData } = context
	const [audioSource, setAudioSource] = useState('')
	useGetData(data, setData, setAudioSource)
	const { response } = data
	console.log(data)
	return (
		<div className='w-full md:w-[calc(100vw-310px)] pt-10 px-3 flex items-center justify-center '>
			{response ? (
				<div className='flex flex-1 items-center justify-center flex-col bg-amber-200 opacity-80 py-6 px-3 rounded-lg shadow-xl  h-auto md:h-[80%]'>
					<div className='text-3xl font-bold text-amber-600 mb-6 md:mb-14'>{response?.chapter_name}</div>
					<div className='flex flex-col md:flex-row items-center px-6 '>
						<div className='flex flex-col items-start'>
							<em className='md:mt-6 text-2xl font-semibold text-green-500'>
								[ Verse {data.chapter_no}: {data.verse_no} ]
							</em>
							<div className='text-2xl font-semibold text-amber-700 mt-3'>{response?.verse}</div>
							<div className='text-xl font-semibold text-green-600 mt-8'>{response?.translation}</div>
						</div>
						<div className='mt-6 '>
							{audioSource && (
								<audio controls preload='auto'>
									<source src={`${audioSource}`} type='audio/mpeg' />
									your browser dowsn't support audio
								</audio>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className='bg-[url("/src/assets/images/chant.webp")] bg-cover h-full w-full opacity-50'></div>
			)}
		</div>
	)
}

export default Content
