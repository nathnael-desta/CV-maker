import EditorCss from "../styles/Editor.module.css";
import { Images } from "../utils";
import NavButton from "./NavButton";
import Input from "./Input";


const Editor = () => {
  return (
    <div className={EditorCss.editor}>
      <div className={EditorCss.navbar}>
        <NavButton text="Design"/>
        <NavButton text="Info"/>
      </div>
      <div className={EditorCss.inputs}>
        <Input icon={Images.person} iconAlt={'person'} title={'Profile'}/>
        <Input icon={Images.education} iconAlt={'education'} title={'Education'}/>
        <Input icon={Images.contact} iconAlt={'contact'} title={'Contact'}/>
        <Input icon={Images.work} iconAlt={'work'} title={'Work History'}/>
        <Input icon={Images.skill} iconAlt={'skill'} title={'Skills'}/>
        <Input icon={Images.project} iconAlt={'project'} title={'Projects'}/>
        <Input icon={Images.course} iconAlt={'course'} title={'Courses'}/>
        <Input icon={Images.hobby} iconAlt={'hobby'} title={'Interests'}/>
        <Input icon={Images.language} iconAlt={'language'} title={'Languages'}/>
      </div>
    </div>
  );
};

export default Editor;
