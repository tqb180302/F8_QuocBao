import {useState} from 'react'

const App= () => {
    // let num = 10000000
    const [num, setNum] = useState(1000);



    const students =[
        {id: 1, name: "Nguyen Van A"},
        {id: 2, name: "Nguyen Van B"},
        {id: 3, name: "Nguyen Van C"},
        {id: 4, name: "Nguyen Van D"},
        {id: 5, name: "Nguyen Van E"},
    ]


    const name = "f888888888"


    const onClickBtn = () => {
        setNum(num + 1)
        console.log(num)
    }


  return (
    <>
        <ul>
            {
                students.map((student) => {
                    return<li key={student.id}>{student.name}</li>
                })
            }
        </ul>

      <h1>hiufddd</h1>
      <h3>num: {num}</h3>
      <h3>{name}</h3>
      <button onClick={onClickBtn}>click me</button>
    </>
  )
}

export default App
