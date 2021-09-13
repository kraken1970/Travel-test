import { useState, useEffect } from 'react'
import HotelService from '../../API/HotelServce'
import { useFetching } from '../../hooks/useFetching'
import { getPageCount } from '../../utils/pages'
import FiltersBlock from '../../components/FiltersBlock/FiltersBlock'
import ResultBlock from '../../components/ResultBlock/ResultBlock'
import cs from './HotelsPage.module.scss'

const HotelsPage = () => {
  const [hotels, setHotels] = useState([])

  const [limit, setLimit] = useState(3)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)

  const [fetchHotels, isHotelLoading, hotelError] =
    useFetching(async (limit, page) => {
      const response = await HotelService.getAll(
        limit,
        page
      )
      setHotels(response.data)

      const totalCount = response.data.length

      setTotalPages(getPageCount(totalCount, limit))
    })

  useEffect(() => {
    fetchHotels(limit, page)
  }, [])

  const changePage = (page) => {
    setPage(page)
    fetchHotels(limit, page)
  }

  return (
    <div className={cs.hotelsPage}>
      <FiltersBlock />
      <ResultBlock
        hotels={hotels}
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default HotelsPage
