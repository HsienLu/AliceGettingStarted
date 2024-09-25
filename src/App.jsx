import './App.css'
import DropDownManual from './component/DropDownManual'
import StartingGuideHome from './component/StartingGuideHome'
import StartingGuideRegister from './component/StartingGuideRegister'
import StartingGuideExecuteAlice from './component/StartingGuideExecuteAlice'
import StartingGuideSetStudentTestAccount from './component/StartingGuideSetStudentTestAccount'
import TeacherToolsClassShow from './component/TeacherToolsClassShow'
import TeacherToolsAssessment from './component/TeacherToolsAssessment'
import ToTheTop from './component/ToTheTop'
import { Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import CourseImplementation from './component/CourseImplementation'
import CoursePresentation from './component/CoursePresentation'
import GradingToolIntroduction from './component/GradingToolIntroduction'
import AddAliceCourseContent from './component/AddAliceCourseContent'
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
          <Route path='course-implementation' element={<CourseImplementation />} />
          <Route path='course-presentation' element={<CoursePresentation />} />
          <Route path='grading-tool-introduction' element={<GradingToolIntroduction />} />
          <Route path='add-alice-course-content' element={<AddAliceCourseContent />} />
        </Routes>
      </div>
        <ToTheTop></ToTheTop>
      
    </>
  )
}

export default App
