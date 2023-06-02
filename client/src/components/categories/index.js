import "./index.css"
import Card from "../card";
// export default function Category(){
//     return(

//         <div className="categoryWrapper">

//         </div>
//     );
// }

function Categories(props){
    const wishList = [
        {heading:"stuffed toys", age:"1-4 years"},
        {heading:"puzzle", age:"5-10 years"},
        {heading:"toys", age:"8year"},
        {heading:"painting", age:"5+"},
        {heading:"toys", age:"8year"},
        {heading:"small puzzle", age:"10+ year"},
    ]
    return(
        <div className="categoriesWrapper">
            {/* {wishList.map((el)=>{
                return <Card heading={el.heading} age={el.age}/>
            })} */}
            {props.children}
        </div>
    )
}
export default Categories;