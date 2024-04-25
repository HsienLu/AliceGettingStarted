import './App.css'
import DropDownManual from './component/DropDownManual'
import StartingGuideHome from './component/StartingGuideHome'
import StartingGuideRegister from './component/StartingGuideRegister'
import StartingGuideExecuteAlice from './component/StartingGuideExecuteAlice'
import StartingGuideSetStudentTestAccount from './component/StartingGuideSetStudentTestAccount'
import TeacherToolsClassShow from './component/TeacherToolsClassShow'
import TeacherToolsAssessment from './component/TeacherToolsAssessment'
import Header from './component/Header'
import ToTheTop from './component/ToTheTop'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      
      <Header></Header>
      <div className="container mx-auto flex justify-center mt-8">
        <DropDownManual className='mr-16'></DropDownManual>
        <Routes>
          <Route path='/' element={<StartingGuideHome ></StartingGuideHome>} />
          <Route path='Home' element={<StartingGuideHome ></StartingGuideHome>} />
          <Route path='StartingGuideRegister' element={<StartingGuideRegister ></StartingGuideRegister>} />
          <Route path='execute-alice' element={<StartingGuideExecuteAlice ></StartingGuideExecuteAlice>} />
          <Route path='set-student-test-account' element={<StartingGuideSetStudentTestAccount ></StartingGuideSetStudentTestAccount>} />
          <Route path='TeacherToolsClassShow' element={<TeacherToolsClassShow></TeacherToolsClassShow>} />
          <Route path='TeacherToolsAssessment' element={<TeacherToolsAssessment></TeacherToolsAssessment>} />
        </Routes>
      </div>
        <ToTheTop></ToTheTop>
      
    </>
  )
}

export default App
