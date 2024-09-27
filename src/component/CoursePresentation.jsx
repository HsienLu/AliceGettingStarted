import CoursePresentation1 from '../assets/CoursePresentation/CoursePresentation22.png';
import CoursePresentation2 from '../assets/CoursePresentation/CoursePresentation23.png';
import CoursePresentation3 from '../assets/CoursePresentation/CoursePresentation24.png';

import ContentCard from './ContentCard';

function CoursePresentation(){
    const images =[CoursePresentation1,CoursePresentation2,CoursePresentation3];
    return(
        <>
        <div className="basis-2/3">
        {
            images.map((v,i)=>{

             return(   <ContentCard key={i} imgSrc={v}></ContentCard>)
            })
        }
        </div>
        </>
    )
}
export default CoursePresentation;