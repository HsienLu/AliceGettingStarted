import ContentCard from "./ContentCard";
import RegisterPic1 from '../assets/register-pic-1.png';
import RegisterPic2 from '../assets/register-pic-2.png';
import RegisterPic3 from '../assets/register-pic-3.png';
import RegisterPic4 from '../assets/register-pic-4.png';
const steps = [
    { text: "1.註冊新的ALICE帳號", imgSrc: RegisterPic1 },
    { text: "2.選擇「教師帳號」", imgSrc: RegisterPic2 },
    { text: "3.填寫帳號申請表格(務必寫下/記住您的密碼)", imgSrc: RegisterPic3 },
    { text: `4.看到下列畫面代表註冊成功。`, imgSrc: RegisterPic4,notice:'請注意:在ALICE中，ALICE教師帳號名稱的姓氏與名字間沒有空格(例如：KathySmith)' },
  ];

function StartingGuideRegister(){


return(<>
    <div className='basis-2/3'>
        <h2 className="starting-guide-title">註冊<a className="text-xl text-blue-600" href="https://www.youtube.com/embed/yHA4J1RuJsQ"> (註冊影片教學)</a></h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
    <iframe
        className="absolute top-0 left-0 w-full h-full border-0 "
        src="https://www.youtube.com/embed/yHA4J1RuJsQ"
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
export default StartingGuideRegister;