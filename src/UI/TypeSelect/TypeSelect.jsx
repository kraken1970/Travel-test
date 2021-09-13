import { Select } from 'antd'
import cs from '../../components/FiltersBlock/FiltersBlock.module.scss'

const TypeSelect = () => {
  const { Option } = Select
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  return (
    <div className={cs.typeSelect}>
      <h4 className={cs.title}>Тип</h4>

      <Select
        defaultValue='appartments'
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        <Option value='appartments'>Апартаменты</Option>
        <Option value='hotel'>Отель</Option>
      </Select>
    </div>
  )
}

export default TypeSelect
