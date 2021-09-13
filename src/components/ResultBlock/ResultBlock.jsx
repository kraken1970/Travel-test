import { useState } from 'react'
import Card from '../../UI/Card/Card'
import Pagination from '../../UI/Pagination/Pagination'
import cs from './ResultBlock.module.scss'

const ResultBlock = ({
  hotels,
  page,
  changePage,
  totalPages,
}) => {
  console.log('totalp', totalPages)
  return (
    <div className={cs.resultBlock}>
      {hotels.map((hotel) => (
        <Card key={hotel.id} {...hotel} />
      ))}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default ResultBlock
