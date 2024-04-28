// List Rendering
import CourseCard from "./CourseCard.jsx";
function CourseList () {

    // const courses = ["React" , "JavaScript" , "CSS" , "Html"]

    // return(
    //     <div>
    //         <h3>Courses</h3>
    //         <ul>
    //         {courses.map(courses => <li>{courses}</li>)}
    //         </ul>
    //     </div>
    // )


    const courses = [
        { id: 1, name : "React", description : "This is React course"},
        { id: 2, name : "Js" , description : "This is Js course"},
        { id: 3, name : "Next" , description : "This is Next course"},
        { id: 4, name : "Node" ,description : "This is Node course"},
    ];

    return(
        <div>
            <h3>Course List</h3>
            <ul>
              {courses.map((course) =>(
               <CourseCard key={course.id}  data ={course}/>
              ))}
            </ul>
        </div>
    )
}

export default CourseList;