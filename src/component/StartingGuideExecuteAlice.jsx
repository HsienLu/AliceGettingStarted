import ContentCard from "./ContentCard";
import ExecuteAlicePic1 from '../assets/execute-alice-pic-1.png';
import ExecuteAlicePic2 from '../assets/execute-alice-pic-2.png';
import ExecuteAlicePic3 from '../assets/execute-alice-pic-3.png';
import ExecuteAlicePic4 from '../assets/execute-alice-pic-4.png';
import ExecuteAlicePic5 from '../assets/execute-alice-pic-5.png';
import ExecuteAlicePic6 from '../assets/execute-alice-pic-6.png';
import ExecuteAlicePic7 from '../assets/execute-alice-pic-7.png';
import ExecuteAlicePic8 from '../assets/execute-alice-pic-8.png';
import ExecuteAlicePic9 from '../assets/execute-alice-pic-9.png';
import ExecuteAlicePic10 from '../assets/execute-alice-pic-10.png';

const steps = [
    { text: "1.使用您的新帳號登入 ALICE", imgSrc: ExecuteAlicePic1 },
    { text: "2.點選「瀏覽ALICE專題庫」", imgSrc: ExecuteAlicePic2 },
    { text: "3.您可對任何有興趣的專題選擇「預覽」或「實施課程」，在選擇「實施課程」之後，點選「下一步」", imgSrc: ExecuteAlicePic3 },
    { text: "4.確認選擇專題資訊是否正確，點選「下一步」", imgSrc: ExecuteAlicePic4 },
    { text: "5.將現有的班級課程歸檔(非必要)，點選「下一步」", imgSrc: ExecuteAlicePic5 },
    { text: "6.選擇將要進行課程的班級，點選「下一步」", imgSrc: ExecuteAlicePic6 },
    { text: "7.「設定班級課程」：一般班級在進行專題時，我們建議您讓學生兩人一組，設置完成後選擇下一步", imgSrc: ExecuteAlicePic7},
    { text: "8.我們強烈的建議您讓學生進行這個專題之前，預覽專題並且瀏覽教學重點，結束後點選「完成」", imgSrc: ExecuteAlicePic8 },
    { text: "9.您新的班級課程已經建立，並顯示在「評分與課程管理」中", imgSrc: ExecuteAlicePic9,notice:'請注意：這個專題的「課程授權碼」會在確認頁面顯示。請寫下這組代碼，當學生要開始操作這個專題時，您將需要提供這組代碼給他們。(您可隨時在「評分與課程管理」裡，檢視您所有的課程授權代碼) ' },
    { text: "10.即可在「我的班級課程」，瀏覽設置資訊", imgSrc: ExecuteAlicePic10}
   ];

function StartingGuideExecuteAlice(){
return(<>
    <div className='basis-2/3'>
        <h2 className="starting-guide-title">執行ALICE專題</h2>
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
export default StartingGuideExecuteAlice;