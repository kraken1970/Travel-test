import { Input } from 'antd'
import cs from '../../components/FiltersBlock/FiltersBlock.module.scss'

const ReviewsInput = () => {
  return (
    <div className={cs.reviewsInput}>
      <Input
        placeholder='Например, от 10'
        className={cs.revInput}
      />
    </div>
  )
}

export default ReviewsInput
