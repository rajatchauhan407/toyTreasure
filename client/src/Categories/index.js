import "./index.js"
import Card from "../Card/index.js"
import "./index.css"
export default function Categories(props)
{
    const wishList = [
        {headers:"Stuffed animal", ageLimit:"1-4 years"},
        {headers:"Puzzle", ageLimit:"1-8 years"},
        {headers:"Stuffed toys", ageLimit:"1-3 years"},
        {headers:"Wooden toys", ageLimit:"1-7 years"},
        {headers:"Painting", ageLimit:"4-10 years"},
        {headers:"Barbie", ageLimit:"1-14 years"},
    ]

    wishList.map((el,index)=>{
        console.log(`index : ${el.headers}`);
    })
    return(
        <div className="categoriesWrapper">
            {
            //    wishList.map((el,index)=>{
            //     console.log(`index : ${el.headers}`);
            //     return <Card heading={el.headers} agelimit={el.ageLimit}/>
            // })

            }
            {/* <Card heading="heading1" agelimit="1"/>
            <Card heading="heading2" agelimit="2"/>
            <Card heading="heading3" agelimit="3"/>
            <Card heading="heading4" agelimit="4"/>
            <Card heading="heading5" agelimit="5"/> */}
            {props.children}
        </div>
    )
}