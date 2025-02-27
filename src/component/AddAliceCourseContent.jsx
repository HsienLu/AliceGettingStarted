import AddAliceCourseContent1 from '../assets/AddAliceCourseContent/AddAliceCourseContent39.png'
import AddAliceCourseContent2 from '../assets/AddAliceCourseContent/AddAliceCourseContent40.png'
import AddAliceCourseContent3 from '../assets/AddAliceCourseContent/AddAliceCourseContent41.png'
import AddAliceCourseContent4 from '../assets/AddAliceCourseContent/AddAliceCourseContent42.png'
import AddAliceCourseContent5 from '../assets/AddAliceCourseContent/AddAliceCourseContent43.png'
import AddAliceCourseContent6 from '../assets/AddAliceCourseContent/AddAliceCourseContent44.png'
import AddAliceCourseContent7 from '../assets/AddAliceCourseContent/AddAliceCourseContent45.png'
import AddAliceCourseContent8 from '../assets/AddAliceCourseContent/AddAliceCourseContent46.png'
import AddAliceCourseContent9 from '../assets/AddAliceCourseContent/AddAliceCourseContent47.png'
import AddAliceCourseContent10 from '../assets/AddAliceCourseContent/AddAliceCourseContent48.png'
import AddAliceCourseContent11 from '../assets/AddAliceCourseContent/AddAliceCourseContent49.png'
import AddAliceCourseContent12 from '../assets/AddAliceCourseContent/AddAliceCourseContent50.png'
import AddAliceCourseContent13 from '../assets/AddAliceCourseContent/AddAliceCourseContent51.png'
import AddAliceCourseContent14 from '../assets/AddAliceCourseContent/AddAliceCourseContent52.png'
import AddAliceCourseContent15 from '../assets/AddAliceCourseContent/AddAliceCourseContent53.png'
import AddAliceCourseContent16 from '../assets/AddAliceCourseContent/AddAliceCourseContent54.png'

import ContentCard from './ContentCard';

function AddAliceCourseContent() {
    const images = [AddAliceCourseContent1, AddAliceCourseContent2, AddAliceCourseContent3, AddAliceCourseContent4, AddAliceCourseContent5, AddAliceCourseContent6, AddAliceCourseContent7, AddAliceCourseContent8, AddAliceCourseContent9, AddAliceCourseContent10, AddAliceCourseContent11, AddAliceCourseContent12, AddAliceCourseContent13, AddAliceCourseContent14, AddAliceCourseContent15, AddAliceCourseContent16];
    return (
        <>
            <div className="basis-2/3">
                {/* https://www.youtube.com/embed/5V8qui4LsbQ?si=IqNTisO2twJo5VMG */}
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
                    images.map((v, i) => {

                        return (<ContentCard key={i} imgSrc={v}></ContentCard>)
                    })
                }
            </div>
        </>
    )
}
export default AddAliceCourseContent;