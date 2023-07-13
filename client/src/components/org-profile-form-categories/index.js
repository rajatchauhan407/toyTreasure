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
    {id:1,category_name:"Stuffed Animals",
    category_age:"0-4 years",
    category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-1.svg?alt=media&token=cdd79797-2f24-4818-9def-64dd4286756f",category_points:"20"},
    {id:2,category_name:"Shape Sorters",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-1.svg?alt=media&token=cdd79797-2f24-4818-9def-64dd4286756f",category_points:"20"},
    {id:3,category_name:"Musical Toys",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-1.svg?alt=media&token=cdd79797-2f24-4818-9def-64dd4286756f",category_points:"20"},
    {id:4,category_name:"Bath Toys",category_age:"0-4 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-1.svg?alt=media&token=cdd79797-2f24-4818-9def-64dd4286756f",category_points:"20"}
    ];
    
    const age5_categories = [
        {id:5,category_name:"Board Games",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-11.svg?alt=media&token=c53903ca-1ca7-4aed-aa64-f7e19545d715",category_points:"20"},
        {id:6,category_name:"Dollhouses",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-11.svg?alt=media&token=c53903ca-1ca7-4aed-aa64-f7e19545d715",category_points:"20"},
        {id:7,category_name:"Science Kits",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-11.svg?alt=media&token=c53903ca-1ca7-4aed-aa64-f7e19545d715",category_points:"20"},
        {id:8,category_name:"Art Supplies",category_age:"5-11 years",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-11.svg?alt=media&token=c53903ca-1ca7-4aed-aa64-f7e19545d715",category_points:"20"}
    ];

    const age12_categories = [
        {id:9,category_name:"Sport Gear",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-2.svg?alt=media&token=0d161630-ceda-43f6-9a1f-9f7f38dbb403",category_points:"20"},
        {id:10,category_name:"Outdoor Equipment",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-2.svg?alt=media&token=0d161630-ceda-43f6-9a1f-9f7f38dbb403",category_points:"20"},
        {id:11,category_name:"Robotics Kits",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-2.svg?alt=media&token=0d161630-ceda-43f6-9a1f-9f7f38dbb403",category_points:"20"},
        {id:12,category_name:"Books and Novels",category_age:"12-18",category_picture:"https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/category_images%2Fcategory-2.svg?alt=media&token=0d161630-ceda-43f6-9a1f-9f7f38dbb403",category_points:"20"}
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
                               value={option.category_name}
                               onChange={(e)=>{handleCheckboxChange_toys(e,option)}}
                               checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                               />
                                <label for="plushAnimals">{option.value}</label></div>
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
                                    value={option.category_name}
                                    onChange={(e)=>{handleCheckboxChange_kids(e,option)}}
                                    checked={selectedKids.some((selectedOption) => selectedOption.id === option.id)}
                                    />
                                <label for="softPlushToys">{option.value}</label>
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
                                    value={option.category_name}
                                    onChange={(e)=>{handleCheckboxChange_teens(e,option)}}
                                    checked={selectedTeens.some((selectedOption) => selectedOption.id === option.id)}
                                    />
                                <label for="softPlushToys">{option.value}</label>
                            </div>
                            })
                            }
                        </form>}
                    </div>
            </form>
        
    </div>
) 
}


            