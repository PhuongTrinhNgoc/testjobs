import React from 'react'
import './css.css'
function Btnshare({lablename}) {
  return (
    <button>{lablename ? lablename : 'nut'}</button>
  )
}

export default Btnshare