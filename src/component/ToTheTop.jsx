import chevronUpSolid from "../assets/chevron-up-solid.svg"

function ToTheTop(){
    return(<>
        <div className="to-the-top w-[48px] h-[48px] p-2 border-2 rounded-full border-[#BBE2EC] bg-[#BBE2EC]  fixed bottom-4 right-4 cursor-pointer" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
            <img src={chevronUpSolid} alt="" />
        </div>
    </>)
}
export default ToTheTop