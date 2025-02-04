import ContentCard from "./ContentCard";
import SetStudentTestAccountPic1 from '../assets/set-student-test-account-pic-1.png';
import SetStudentTestAccountPic2 from '../assets/set-student-test-account-pic-2.png';
import SetStudentTestAccountPic3 from '../assets/set-student-test-account-pic-3.png';
import SetStudentTestAccountPic4 from '../assets/set-student-test-account-pic-4.png';
import SetStudentTestAccountPic5 from '../assets/set-student-test-account-pic-5.png';


const steps = [
    { text: "1.我們強烈建議您建立一個學生測試帳號，當學生開始進行班級課程時，以便熟悉您將要引導學生進行的過程。",imgSrc: ''},
    { text: "2.請點選左上角ALICE標誌，或點選「ALICE首頁」連結",imgSrc: '' },
    { text: "3.登出教師帳號後，請點選「註冊ALICE帳號」並選擇「學生帳號」", imgSrc: SetStudentTestAccountPic1 },
    { text: "4.請填寫帳號申請表格，輸入您剛建立的課程授權代碼，然後點選「建立帳號」", notice:"注意:學生的帳號名稱採用表格中的名字、其次是姓氏開頭字母、接著是生日月份和日期(例如：JohnB0210)。",imgSrc: SetStudentTestAccountPic2},
    { text: "5.看到下面即註冊完成",imgSrc: SetStudentTestAccountPic3 },
    { text: "6.使用學生身分登入後，您將看到的是ALICE學生首頁。",imgSrc: SetStudentTestAccountPic4 },
    { text: "7.點選「專題課程」，您可以開始從學生的角度探索專題。",imgSrc: SetStudentTestAccountPic5 },
   ];

function StartingGuideSetStudentTestAccount(){
return(<>
    <div className='basis-2/3'>
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black mb-8">
    <iframe
        className="absolute top-0 left-0 w-full h-full border-0 "
        src="https://www.youtube.com/embed/TjmVMUkcymU?si=0ZEWF9fowI29qp3f"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>

        <h2 className="starting-guide-title">設定一組學生測試帳號</h2>
        {
            steps.map((v,i)=>{
                
                return(
                    <ContentCard key={i} stepText={v.text} imgSrc={v.imgSrc} notice={v.notice} classStyle={v.imgSrc? "":{marginBottom: '-2rem'} } />
                )
            })
        }
    </div>

</>)
}
export default StartingGuideSetStudentTestAccount;