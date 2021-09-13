import { getPagesArray } from '../../utils/pages'
import cs from './Pagination.module.scss'
import classNames from 'classnames'

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages)
  return (
    <div className={cs.pageWrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={classNames(cs.page, {
            [cs.pageCurrent]: page === p,
          })}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
