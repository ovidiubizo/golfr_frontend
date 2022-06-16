import useSWR from 'swr'
import { getToken } from './userAuth'

export const FEED_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`

const useGolfer = (id) => {
  const fetcher = async url => {
    if (!id) {
        return undefined
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.scores)
  }

  const url_to_access = `${FEED_URL}/${id}`
  const { data, error } = useSWR(url_to_access, fetcher)

  return {
    scores: data,
    error: error && error.message,
  }
}

export default useGolfer
