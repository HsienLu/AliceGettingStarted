import GradingToolIntroduction1 from '../assets/GradingToolIntroduction/GradingToolIntroduction26.png'
import GradingToolIntroduction2 from '../assets/GradingToolIntroduction/GradingToolIntroduction27.png'
import GradingToolIntroduction3 from '../assets/GradingToolIntroduction/GradingToolIntroduction28.png'
import GradingToolIntroduction4 from '../assets/GradingToolIntroduction/GradingToolIntroduction29.png'
import GradingToolIntroduction5 from '../assets/GradingToolIntroduction/GradingToolIntroduction30.png'
import GradingToolIntroduction6 from '../assets/GradingToolIntroduction/GradingToolIntroduction31.png'
import GradingToolIntroduction7 from '../assets/GradingToolIntroduction/GradingToolIntroduction32.png'
import GradingToolIntroduction8 from '../assets/GradingToolIntroduction/GradingToolIntroduction33.png'
import GradingToolIntroduction9 from '../assets/GradingToolIntroduction/GradingToolIntroduction34.png'
import GradingToolIntroduction10 from '../assets/GradingToolIntroduction/GradingToolIntroduction35.png'
import GradingToolIntroduction11 from '../assets/GradingToolIntroduction/GradingToolIntroduction36.png'
import GradingToolIntroduction12 from '../assets/GradingToolIntroduction/GradingToolIntroduction37.png'
import GradingToolIntroduction13 from '../assets/GradingToolIntroduction/GradingToolIntroduction38.png'

import ContentCard from './ContentCard';


function GradingToolIntroduction(){
    const images = [GradingToolIntroduction1,GradingToolIntroduction2,GradingToolIntroduction3,GradingToolIntroduction4,GradingToolIntroduction5,GradingToolIntroduction6,GradingToolIntroduction7,GradingToolIntroduction8,GradingToolIntroduction9,GradingToolIntroduction10,GradingToolIntroduction11,GradingToolIntroduction12,GradingToolIntroduction13];
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
export default GradingToolIntroduction;