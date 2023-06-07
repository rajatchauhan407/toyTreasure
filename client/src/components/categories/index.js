import './index.css';
import Card from "../card";
function Categories(props){
    const wishList = [
        {headers:"Stuffed animal", ageLimit:"1-4 years",age:5},
        {headers:"puzzle", ageLimit:"1-8 years",age:6},
        {headers:"stuffed toys", ageLimit:"1-3 years",age:7},
        {headers:"wooden toys", ageLimit:"1-7 years",age:8},
        {headers:"painting", ageLimit:"4-10 years",age:9},
        {headers:"Barbie", ageLimit:"1-14 years",age:10},
    ];
    let newArr = wishList.map((el)=>{
        return el.age+5;
    });
    console.log(newArr);
    let filtered = wishList.filter((el)=>{
        return el.age>6;
    });
    console.log(filtered);
    // for(let i=0; i<wishList.length;i++){
    //     console.log(wishList[i]);
    // }
    wishList.map((el)=>{
        console.log(el);
    })

    return (
        <div className="categories">
            {   
                wishList.map((el)=>{
                return <Card heading={el.headers} age={el.ageLimit}/>
                })
            }
            {/* {props.children} */}
        </div>
    );
}

export default Categories;