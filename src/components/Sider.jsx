import React, { useContext } from 'react'
import { chapters } from '../data/chapters'
import SelectionButton from './SelectionButton'
import { VerseContext } from '../App'
const Sider = () => {
	const { data, setData } = useContext(VerseContext)
	const { chapter_no, verse_no } = data
	return (
		<div className='w-[310px] pt-10 px-3 border-r-2  hidden md:block h-full '>
			<div>
				<div className='text-xl font-bold '>Chapters</div>
				<hr className='my-2' />
				{chapter_no ? (
					<div className='text-xl font-semibold border-[1px] p-2 text-green-500 flex items-center justify-between '>
						<div>Selected Chapter: {chapter_no}</div>
						<button
							className='text-lg text-red-500 hover:text-xl cursor-pointer'
							onClick={() => setData({ ...data, chapter_no: null })}>
							X
						</button>
					</div>
				) : (
					<div className='flex flex-wrap gap-3  py-2 px-1'>
						{chapters.map((ch, index) => (
							<SelectionButton setItem={setData} index={index} text={ch.chapter} type='chapter_no' data={data} />
						))}
					</div>
				)}
				{chapter_no && (
					<>
						<div className='text-xl font-bold'>Verses</div>
						{verse_no ? (
							<div className='text-xl font-semibold border-[1px] p-2 text-green-500 flex items-center justify-between '>
								<div>Selected Verse: {verse_no}</div>
								<button
									className='text-lg text-red-500 hover:text-xl cursor-pointer'
									onClick={() => setData({ ...data, verse_no: null })}>
									X
								</button>
							</div>
						) : (
							<div className='flex  flex-wrap gap-2  py-2 px-1'>
								{chapters[chapter_no - 1].verses.map((v, index) => (
									<SelectionButton setItem={setData} index={index} text={v + 1} type='verse_no' data={data} />
								))}
							</div>
						)}
					</>
				)}
			</div>
			{verse_no && (
				<button
					className='bg-black hover:bg-red-400 w-full h-10 text-lg rounded-md mt-10 text-white'
					onClick={() => setData({ verse_no: null, chapter_no: null, response: null })}>
					Clear All
				</button>
			)}
		</div>
	)
}
export default Sider
