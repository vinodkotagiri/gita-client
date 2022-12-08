import { useEffect } from 'react'

function useClickOutSide(ref, callback) {
	useEffect(() => {
		const listener = (e) => {
			if (!ref.current || ref.current.contains(e.target)) return
			callback()
		}
		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [ref])
}
export default useClickOutSide
