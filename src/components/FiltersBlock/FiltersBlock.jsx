import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CloseOutlined } from '@ant-design/icons'
import cs from './FiltersBlock.module.scss'
import CountrySelect from '../../UI/CountrySelect/CountrySelect'
import TypeSelect from '../../UI/TypeSelect/TypeSelect'
import StarsCheck from '../../UI/StarsCheck/StarsCheck'
import ReviewsInput from '../../UI/ReviewsInput/ReviewsInput'
import PriceCalculator from '../../UI/PriceCalculator/PriceCalculator'
import { Button } from 'antd'

const FiltersBlock = () => {
  return (
    <div className={cs.filtersBlock}>
      <CountrySelect />
      <TypeSelect />
      <StarsCheck />
      <ReviewsInput />
      <PriceCalculator />
      <Button
        type='primary'
        className={classNames(
          cs.filterButton,
          cs.acceptButton
        )}
      >
        Применить фильтр
      </Button>
      <Button className={classNames(cs.filterButton)}>
        <CloseOutlined />
        Очистить фильтр
      </Button>
    </div>
  )
}

export default FiltersBlock
