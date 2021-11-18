import { useEffect, useState } from 'react'

export interface DataType {
  open: number
  headline: string
  datetime: number
  source: string
  url: string
}

const useFetchArray = (url: string) => {
  const [data, setData] = useState<DataType[]>()
  const [error, setError] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setLoading(true)
        const response = await fetch(url)

        if (!response.ok) {
          setLoading(false)
          setError(true)
          console.error(response)
        }

        const data = await response.json()
        setError(false)
        setLoading(false)
        setData(data)
      }
      fetchData()
    }, 700)
  }, [url])

  return [data, error, loading] as const
}

export default useFetchArray
