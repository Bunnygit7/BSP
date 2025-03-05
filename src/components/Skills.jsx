import SkillDisplay from "./SkillDisplay"
function Skills() {
    const skills=[
        {
            imgUrl:"https://prsoftwares.com/wp-content/uploads/2023/02/java-1-1.png",
        },
        {
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png",
        },
        {
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgu8cRVSRm96BF4FEJ4DA9IROZYI1wYR0RRA&s",
        },
        {
            imgUrl:"https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
        },
        {
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
        },
        {
            imgUrl:"https://ellipsiseducation.com/wp-content/uploads/2023/02/javascript-736400_1280.png",
        },
        {
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        },
        {
            imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
        },
        {
            imgUrl:"https://pipedream.com/s.v0/app_1YMhwo/logo/orig",
        },
        {
            imgUrl:"https://oracle.gallerycdn.vsassets.io/extensions/oracle/oracledevtools/23.4.1/1724949901572/Microsoft.VisualStudio.Services.Icons.Default",
        },
       
        
       
            
        
    ]
  return (
    <div className="container text-center">
      <h1>Skills</h1>
      <div className="container row">
      {skills.map((skill)=>(
        <SkillDisplay url={skill.imgUrl}/>
      ))}

      </div>
     
    </div>
  )
}

export default Skills
