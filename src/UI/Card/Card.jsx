import { useState } from 'react'
import { Rate } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import CardButton from '../CardButton/CardButton'
import cs from './Card.module.scss'

const Card = ({
  name,
  stars,
  type,
  reviews_amount,
  country,
  min_price,
  currency,
  description,
}) => {
  const [status, setStatus] = useState(false)

  const handleReserved = () => {
    setStatus((prev) => !prev)
  }
  console.log(name)
  return (
    <div className={cs.card}>
      <div className={cs.leftSide}>
        <h3 className={cs.name}>{name}</h3>
        <div className={cs.feature}>
          <div className={cs.stars}>
            <Rate disabled defaultValue={stars} />
          </div>
          <div className={cs.type}>{type}</div>
          <div className={cs.reviews}>
            {reviews_amount} отзывов
          </div>
          <div>
            <EnvironmentOutlined /> {country}
          </div>
        </div>
        <div className={description}>{description}</div>
      </div>
      <div className={cs.rightSide}>
        <div className={cs.price}>
          {min_price} {currency}
          <p>Цена за 1 ночь</p>
        </div>

        <CardButton
          handleReserved={handleReserved}
          status={status}
        />
      </div>
    </div>
  )
}

export default Card
