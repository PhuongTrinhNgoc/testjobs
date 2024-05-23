"use client"
import Listjobs from './component/listJobs.js/index.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3000/api/jobs')
        .then(response => {
            setData(response.data.jobs);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);
console.log(data);
  return (
    <main className="">
      {data&&data.map((job,index)=>{
        return  <Listjobs data={job}/>
      })}
     
    </main>
  );
}
