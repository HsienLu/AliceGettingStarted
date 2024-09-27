import CourseImplementationImg1 from '../assets/CourseImplementation/CourseImplementation-4.png';
import CourseImplementationImg2 from '../assets/CourseImplementation/CourseImplementation-5.png';
import CourseImplementationImg3 from '../assets/CourseImplementation/CourseImplementation-6.png';
import CourseImplementationImg4 from '../assets/CourseImplementation/CourseImplementation-7.png';
import CourseImplementationImg5 from '../assets/CourseImplementation/CourseImplementation-8.png';
import CourseImplementationImg6 from '../assets/CourseImplementation/CourseImplementation-9.png';
import CourseImplementationImg7 from '../assets/CourseImplementation/CourseImplementation-10.png';
import CourseImplementationImg8 from '../assets/CourseImplementation/CourseImplementation-11.png';
import CourseImplementationImg9 from '../assets/CourseImplementation/CourseImplementation-12.png';
import CourseImplementationImg10 from '../assets/CourseImplementation/CourseImplementation-13.png';
import CourseImplementationImg11 from '../assets/CourseImplementation/CourseImplementation-14.png';
import CourseImplementationImg12 from '../assets/CourseImplementation/CourseImplementation-15.png';
import CourseImplementationImg13 from '../assets/CourseImplementation/CourseImplementation-16.png';
import CourseImplementationImg14 from '../assets/CourseImplementation/CourseImplementation-17.png';
import CourseImplementationImg15 from '../assets/CourseImplementation/CourseImplementation-18.png';
import CourseImplementationImg16 from '../assets/CourseImplementation/CourseImplementation-19.png';
import CourseImplementationImg17 from '../assets/CourseImplementation/CourseImplementation-20.png';
import CourseImplementationImg18 from '../assets/CourseImplementation/CourseImplementation-21.png';



import ContentCard from './ContentCard';

function CourseImplementation(){
    const images =[CourseImplementationImg1,CourseImplementationImg2,CourseImplementationImg3,CourseImplementationImg4,CourseImplementationImg5,CourseImplementationImg6,CourseImplementationImg7,CourseImplementationImg8,CourseImplementationImg9,CourseImplementationImg10,CourseImplementationImg11,CourseImplementationImg12,CourseImplementationImg13,CourseImplementationImg14,CourseImplementationImg15,CourseImplementationImg16,CourseImplementationImg17,CourseImplementationImg18];
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

export default CourseImplementation;