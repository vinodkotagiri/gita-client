import React, { useRef, useState } from 'react'
import useClickOutSide from '../hooks/useClickOutside'
const SelectionButton = ({ setItem, index, text, type, data }) => {
	const [active, setActive] = useState(false)
	const ref = useRef(null)
	useClickOutSide(ref, () => setActive(false))
	return (
		<button
			ref={ref}
			className={`text-md w-6 h-6 bg-red-200 justify-center items-center flex hover:bg-green-200 ${
				active ? 'bg-green-400' : ''
			}`}
			onClick={() => {
				setItem({ ...data, [type]: index + 1 })
				setActive(true)
			}}>
			{text}
		</button>
	)
}

export default SelectionButton
