import './index.css';
import Card from "../card";
function Categories(){
    const wishList = [
        {headers:"Stuffed animal", ageLimit:"1-4 years"},
        {headers:"puzzle", ageLimit:"1-8 years"},
        {headers:"stuffed toys", ageLimit:"1-3 years"},
        {headers:"wooden toys", ageLimit:"1-7 years"},
        {headers:"painting", ageLimit:"4-10 years"},
        {headers:"Barbie", ageLimit:"1-14 years"},
    ];
    // for(let i=0; i<wishList.length;i++){
    //     console.log(wishList[i]);
    // }
    wishList.map((el)=>{
        console.log(el);
    })

    return (
        <div className="categories">
            {wishList.map((el)=>{
                return <Card heading={el.headers} age={el.ageLimit}/>
                })}
        </div>
    );
}

export default Categories;