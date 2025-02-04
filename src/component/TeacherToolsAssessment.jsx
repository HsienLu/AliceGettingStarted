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
                <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full border-0 "
                        src="https://www.youtube.com/embed/5V8qui4LsbQ?si=IqNTisO2twJo5VMG"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                
                <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full border-0 "
                        src="https://www.youtube.com/embed/UrICAIAYa_0?si=8rK9aJEx-MRA-IAy"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* https://www.youtube.com/embed/HJdMT2kPy_s?si=xryWRGmmTA_0s0uN */}
                <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full border-0 "
                        src="https://www.youtube.com/embed/HJdMT2kPy_s?si=xryWRGmmTA_0s0uN"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* https://www.youtube.com/embed/iKJzA_itFCs?si=XXtNe5ZomZEvCLri */}
                <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full border-0 "
                        src="https://www.youtube.com/embed/iKJzA_itFCs?si=XXtNe5ZomZEvCLri"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
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