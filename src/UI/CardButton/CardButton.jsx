import { Button } from 'antd'
import {
  CheckOutlined,
  CreditCardOutlined,
} from '@ant-design/icons'
import classNames from 'classnames'
import cs from './CardButton.module.scss'

const CardButton = ({ status, handleReserved }) => {
  let Icons

  status
    ? (Icons = CheckOutlined)
    : (Icons = CreditCardOutlined)

  return (
    <Button
      icon={<Icons />}
      onClick={handleReserved}
      className={classNames(cs.cardButton, {
        [cs.unreserved]: status,
        [cs.reserved]: !status,
      })}
    >
      {status ? 'Забронировано' : 'Забронировать'}
    </Button>
  )
}

export default CardButton
