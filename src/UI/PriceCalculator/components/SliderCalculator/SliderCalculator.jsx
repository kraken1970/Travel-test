import React from 'react'
import Slider from '@material-ui/core/Slider'
import styles from './SliderCalculator.module.scss'

const SliderCalculator = ({
  value,
  handleSliderChange,
  valuetext,
  min,
  max,
}) => {
  return (
    <>
      <Slider
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby='range-slider'
        valueLabelFormat={valuetext}
        min={min}
        max={max}
        valueLabelDisplay='on'
        classes={{
          root: styles.newClass,
          rail: styles.newRail,
          track: styles.newTrack,
          thumb: styles.newThumb,
          valueLabel: styles.newLabel,
        }}
      />
    </>
  )
}

export default SliderCalculator
