import TeacherToolsAssessmentPic1 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic1.png'
import TeacherToolsAssessmentPic2 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic2.png'
import TeacherToolsAssessmentPic3 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic3.png'
import TeacherToolsAssessmentPic4 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic4.png'
import TeacherToolsAssessmentPic5 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic5.png'
import TeacherToolsAssessmentPic6 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic6.png'
import TeacherToolsAssessmentPic7 from '../assets/TeacherToolsAssessment/teacher-tools-assessment-pic7.png'
import ContentCard from './ContentCard'
function TeacherToolsAssessment(){
    const steps = [
        {text: "工具一", imgSrc: TeacherToolsAssessmentPic1},
        {text: "工具二", imgSrc: TeacherToolsAssessmentPic2},
        {text: "工具三", imgSrc: TeacherToolsAssessmentPic3},
        {text: "工具四", imgSrc: TeacherToolsAssessmentPic4},
        {text: "工具五", imgSrc: TeacherToolsAssessmentPic5},
        {text: "工具六", imgSrc: TeacherToolsAssessmentPic6},
        {text: "工具七", imgSrc: TeacherToolsAssessmentPic7},
    ];
    return(<>
        <div className="basis-2/3">

                <h2 className="starting-guide-title">ALICE課程評量工具</h2>
        {
            steps.map((v,i)=>{
                return(
                    <ContentCard key={i} stepText={v.text} imgSrc={v.imgSrc} notice={v.notice}/>
                )
            })
        }
        </div>


    </>)
}

export default TeacherToolsAssessment;