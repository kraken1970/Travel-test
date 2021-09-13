import { Select } from 'antd'
import cs from '../../components/FiltersBlock/FiltersBlock.module.scss'

const CountrySelect = () => {
  const { Option } = Select
  return (
    <div className={cs.countrySelect}>
      <h4 className={cs.title}>Страна</h4>
      <div className={cs.wrapSelect}>
        <Select
          style={{ width: '100%' }}
          showArrow={false}
          showSearch
          placeholder='Поиск стран'
          optionFilterProp='children'
          filterOption={(input, option) =>
            option
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA
              .toLowerCase()
              .localeCompare(optionB.toLowerCase())
          }
        >
          <Option value='1'>Австрия</Option>
          <Option value='2'>Азербайджан</Option>
          <Option value='3'>Албания</Option>
          <Option value='4'>Алжир</Option>
          <Option value='5'>Ангола</Option>
          <Option value='6'>Андорра</Option>
          <Option value='6'>Греция</Option>
        </Select>
      </div>
    </div>
  )
}

export default CountrySelect
