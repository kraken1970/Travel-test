import cs from './CalculatorCard.module.scss'

const CalculatorCard = ({ type, value }) => {
  let title, total

  if (type === 'from') {
    title = 'От'
    total = 0
  } else {
    title = 'До'
    total = +value
  }

  return (
    <div className={cs.calculatorCard}>
      <p>
        {title} {total} Р
      </p>
    </div>
  )
}

export default CalculatorCard
