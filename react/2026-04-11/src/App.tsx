import {useEffect, useState} from 'react'
import api from './plugins/axios.ts'
import { ToastContainer, toast } from 'react-toastify'
// import MyItem from './components/Item'
// import MyItem2 from './components/Item2'
import {Item, Item2} from './components'



function App() {
    const [jobs, setJobs] = useState([])
    const [count, setCount] = useState(0)
    const notify = () => toast.error("Wow so easy!")

  const getJobs = async () => {
    try {
      const {data} = await api.get('/todos')
      setJobs(data)
        console.log(jobs)
    } catch (e) {
        toast.error("Failed")

    }
  }

  useEffect(
      () => {
        getJobs()
       },
      []
     )

    // useEffect(
    //     () => {
    //         console.log(jobs)
    //     },
    //     [jobs, count]
    // )



  return (
    <>
        <ToastContainer />
        <button onClick={notify}>Notify!</button>
        {/*{Item("Quoc Bao", "Gray")}*/}
        {/*{Item("Quoc Nam", "Blue")}*/}
        <Item color={"blue"} text={"Hahaha"}isShow={true}/>
        <Item color={"red"} text={"Hahaha"} isShow={true}/>

      {/*{*/}
      {/*  jobs.map((job, index) => <p key={index}>{job.title}</p>)*/}
      {/*}*/}

      <button onClick={() => setCount((count+1))}>click</button>
    </>
  )
}

export default App
