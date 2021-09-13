import { Checkbox } from 'antd'
import cs from '../../components/FiltersBlock/FiltersBlock.module.scss'

const StarsCheck = () => {
  const plainOptions = [
    '1 звезда',
    '2 звезды',
    '3 звезды',
    '4 звезды',
    '5 звезд',
  ]

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues)
  }
  return (
    <div className={cs.starsCheck}>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={['1 звезда']}
        onChange={onChange}
        className={cs.checkGroup}
      />
    </div>
  )
}

export default StarsCheck
