import Student from './Student.jsx'

function App(){
  return(
    <>
    <Student name='Usama' age={24} isStudent={true}/>
    <Student name='Ahmad' age={34} isStudent={true}/>
    <Student name='Ali' age={3} isStudent={false}/>
    <Student />
    </>
  )
}
export default App