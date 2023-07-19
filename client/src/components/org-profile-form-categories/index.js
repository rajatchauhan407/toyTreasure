import "./index.scss";
import {useState,useEffect} from "react";
import {BiDownArrowAlt} from "react-icons/bi";
export default function OrgProfileCategories({onGetCategories}){
    const [isOpen, setIsOpen] = useState(false);
    const [isBabyOpen, setIsBabyOpen] = useState(false);
    const [isTeenOpen, setIsTeenOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedKids, setSelectedKids] = useState([]);
    const [selectedTeens, setSelectedTeens] = useState([]);
    const age0_categories = 
    [
    {id:1,category_name:"Stuffed Animals",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-3.svg?alt=media&token=9189e72d-5f96-4067-b8ee-91339d7cbbab",category_points:"20"},
    {id:2,category_name:"Shape Sorters",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-5.svg?alt=media&token=7178a8d0-a5af-4071-b22f-71488a550d64",category_points:"20"},
    {id:3,category_name:"Musical Toys",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-4.svg?alt=media&token=1d2af5d2-2d14-41b6-a735-db15c1ad204f",category_points:"20"},
    {id:4,category_name:"Bath Toys",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-1.svg?alt=media&token=86e9c495-a5cd-44d1-8e23-f6e1248652eb",category_points:"20"}
    ];
    
    const age5_categories = [
        {id:5,category_name:"Board Games",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-9.svg?alt=media&token=7b9fa111-3c9c-4314-b752-e76f73187d55",category_points:"20"},
        {id:6,category_name:"Dollhouses",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-10.svg?alt=media&token=ca00660b-9d96-4e88-b855-dc4b47d63a6c",category_points:"20"},
        {id:7,category_name:"Science Kits",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-6.svg?alt=media&token=5a513a01-5228-4bcf-bd3e-e290beeb0eb1",category_points:"20"},
        {id:8,category_name:"Art Supplies",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-11.svg?alt=media&token=e8fb1fb3-86ee-49d9-94ef-c9c7359b2374",category_points:"20"}
    ];

    const age12_categories = [
        {id:9,category_name:"Sport Gear",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-8.svg?alt=media&token=bfc54313-a326-4234-9cb4-7421a89a64c3",category_points:"20"},
        {id:10,category_name:"Outdoor Equipment",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-12.svg?alt=media&token=2b404f48-f149-419f-b87e-85ac0c9ec6d2",category_points:"20"},
        {id:11,category_name:"Robotics Kits",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-2.svg?alt=media&token=5acce686-4c57-4098-9636-1e55c67f47f0",category_points:"20"},
        {id:12,category_name:"Books and Novels",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2FCategory-7.svg?alt=media&token=9370031d-9252-4af4-8902-f8e2c81b1347",category_points:"20"}
    ];

    const handleCheckboxChange_toys = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        // console.log(selectedOptions);
        
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
      );
    }
    
    }
    const handleCheckboxChange_kids = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        // console.log(selectedOptions);
        
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedKids((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedKids((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
      );
    }

    }

    const handleCheckboxChange_teens = (e,option)=>{
        console.log(e.target.value);
        const { checked } = e.target;
        // console.log(selectedOptions);
        
    // Update selectedOptions array based on checkbox state
    if (checked) {
      setSelectedTeens((prevOptions) => [...prevOptions, option]);
    } else {
      setSelectedTeens((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
      );
    }
    
    }
    useEffect(()=>{
        onGetCategories([
            ...selectedOptions,...selectedKids
        ]);
    },[selectedKids,selectedOptions]);
    function handleIsOpen(){
        setIsOpen(prev => !prev);
    }
    function handleBabyToy(){
        setIsBabyOpen(prev => !prev);
    }
    function handleTeenToy(){
        setIsTeenOpen(prev => !prev);
    }
    return(
    <div className="OrgProfileCategories">
        <form className="Categories">
                    <h2>Select the categories of toys you accept</h2>
                    <div className="0-4_age">
                    
                        <h3>Baby Toys <BiDownArrowAlt onClick={handleIsOpen}/></h3>
                        <p>Age 0 to 4 years</p>
                        {isOpen && <form action="">
                            {age0_categories.map((option)=>{
                               return  <div key={option.id}><input 
                               type="checkbox" 
                               id={option.id} 
                               name="age0_category" 
                               value={option}
                               onChange={(e)=>{handleCheckboxChange_toys(e,option)}}
                               checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                               />
                                <label for="plushAnimals">{option.category_name}</label></div>
                            })       
                            }
                            </form>}
                    </div>

                    <div className="5-11_age">
                        <h3>Kids Toys <BiDownArrowAlt onClick={handleBabyToy}/></h3>
                        <p>Age 5 to 11 years</p>
                        {isBabyOpen && <form action="">
                            {age5_categories.map((option)=>{
                                return <div key={option.id}>
                                <input 
                                    type="checkbox" 
                                    id={option.id}
                                    name="age5_category" 
                                    value={option}
                                    onChange={(e)=>{handleCheckboxChange_kids(e,option)}}
                                    checked={selectedKids.some((selectedOption) => selectedOption.id === option.id)}
                                    />
                                <label for="softPlushToys">{option.category_name}</label>
                            </div>
                            })
                            }
                        </form>}
                    </div>

                    <div className="12-18_age">
                        <h3>Teens Toys <BiDownArrowAlt onClick={handleTeenToy}/></h3>
                        <p>Age 12 to 18 years</p>
                        {isTeenOpen && <form action="">
                            {age12_categories.map((option)=>{
                                return <div key={option.id}>
                                <input 
                                    type="checkbox" 
                                    id={option.id}
                                    name="age5_category" 
                                    value={option}
                                    onChange={(e)=>{handleCheckboxChange_teens(e,option)}}
                                    checked={selectedTeens.some((selectedOption) => selectedOption.id === option.id)}
                                    />
                                <label for="softPlushToys">{option.category_name}</label>
                            </div>
                            })
                            }
                        </form>}
                    </div>
            </form>
        
    </div>
) 
}


            