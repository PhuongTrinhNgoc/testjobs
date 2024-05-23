import React from 'react'
import './css.css'
import Btnshare from '../midBtn'
// import { useEffect, useState } from 'react';
function Listjobs({data}) {
  
  return (
    <div className='main-list'>
        <div className='title-job'>
            <div>

        {data?.title ? data?.title : 'khong co ten'}
            </div>
            <div>

        {data?.description ? data?.description : 'khong co ten'}
            </div>
        </div>
    
        <div className='main-btn'>
        <Btnshare lablename='Edit'/>
        <Btnshare lablename='Delete'/>

        </div>
    </div>
  )
}

export default Listjobs