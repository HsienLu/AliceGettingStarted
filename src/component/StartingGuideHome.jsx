import CompletePic from '../assets/complete-pic.png';
function StartingGuideHome() {
  return (
    <>

    <div className='basis-2/3'>
      <h2 className='starting-guide-title' >技術需求</h2>
        <ul>
            <li className='list-image-checkmark starting-guide-list-text'>請更新瀏覽器，建議使用 Chrome</li>
            <li className='list-image-checkmark starting-guide-list-text'>點選下列連結來執行您的電腦與ALICE的相容性測試: WISE 系統確認</li>
        </ul>
      <h2 className='starting-guide-title mt-8'>完成後您將會得到下列技能</h2>
        <ul>
            <li className='list-image-checkmark starting-guide-list-text'>註冊帳號、以及開啟學生帳號的權限</li>
            <li className='list-image-checkmark starting-guide-list-text'>挑選一個專題，並開啟一個課程</li>
            <li className='list-image-checkmark starting-guide-list-text'>完成後成果如下圖</li>
        </ul>
        <img className='' src={CompletePic} alt="" />
    </div>
    </>
  );
}
export default StartingGuideHome;