import ContentCard from "./ContentCard";
import TeacherToolPic1 from "../assets/TeacherToolPics/teacher-tool-pic1.png";
import TeacherToolPic2 from "../assets/TeacherToolPics/teacher-tool-pic2.png";
import TeacherToolPic3 from "../assets/TeacherToolPics/teacher-tool-pic3.png";
function TeacherToolsClassShow() {
  const steps = [
    {text: "工具一", imgSrc: TeacherToolPic1},
    {text: "工具二", imgSrc: TeacherToolPic2},
    {text: "工具三", imgSrc: TeacherToolPic3},
  ];
  return (
    <>
      <div className="basis-2/3">
        <h2 className="starting-guide-title">ALICE課程呈現方式</h2>
        {steps.map((v, i) => {
          return <ContentCard key={i} stepText={v.text} imgSrc={v.imgSrc} />;
        })}
      </div>
    </>
  );
}

export default TeacherToolsClassShow;
