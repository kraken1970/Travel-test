import { useState } from 'react'
import SliderCalculator from './components/SliderCalculator/SliderCalculator'
import CalculatorCard from './components/CalculatorCard/CalculatorCard'
import styles from './PriceCalculator.module.scss'

const PriceCalculator = () => {
  const [value, setValue] = useState(0)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const min = 0
  const max = 100500

  function valuetext(value) {
    return `P ${value}`
  }

  return (
    <div className={styles.priceCalculator}>
      <h4>Цена</h4>
      <div className={styles.calculatorContainer}>
        <div className={styles.calculatorCards}>
          <div className={styles.cardWrap}>
            <CalculatorCard type='from' value={value} />
          </div>

          <div className={styles.cardWrap}>
            <CalculatorCard type='before' value={value} />
          </div>
        </div>
        <div className={styles.slider}>
          <SliderCalculator
            value={value}
            handleSliderChange={handleSliderChange}
            valuetext={valuetext}
            min={min}
            max={max}
          />
          <div className={styles.slederPoints}>
            <span className={styles.point}>{min}</span>
            <span className={styles.point}>{max}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCalculator
