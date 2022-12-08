import { useEffect } from 'react'
export default function useGetData(data, setData, setAudioSource) {
	const baseURL = process.env.REACT_APP_API
	const { chapter_no, verse_no } = data
	useEffect(() => {
		if (chapter_no && verse_no)
			fetch(`${baseURL}/${chapter_no}/${verse_no}`, {
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setData({ ...data, response: data })
					setAudioSource(data.audio_link)
					console.log(data)
				})
	}, [baseURL, chapter_no, setAudioSource, setData, verse_no])
}
