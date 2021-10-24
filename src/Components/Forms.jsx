import React,{useState} from 'react'

const initialState = {
    fullname: "",
    age:0,
    address:"",
    department:"",
    salary:0,
    maritalStatus:false,
    skillSet:[]
}

const Forms = () => {

    const skills = ["html","css","js","react","angular","typescript"]

    const [Data,setData] = useState(initialState)
    const [FormData,setFormData] = useState([])
    const [selectedStates,setSelectedStates] = useState(
        new Array(skills.length).fill(false)
    )
    const {fullname,age,address,department,salary,maritalStatus,skillSet} = Data
    const handleChange = (e) => {
        const {name,type,value,checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setData({...Data,[name]:newValue})
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData([...FormData,Data])
    }

    const handleSkillsChange = (i) => {
        const newSelectedState = selectedStates.map((item,index)=>
            index === i ? !item : item
        );
        setSelectedStates(newSelectedState);
        setData({...Data,skillSet:newSelectedState});
    }

    console.log(FormData);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:
                    <input type="text" name="fullname" value={fullname} onChange={handleChange}/>
                </label>
                <label>Age:
                    <input type="number" name="age" value={age}onChange={handleChange}/>
                </label>
                <label>Address:
                    <input type="text" name="address" value={address}onChange={handleChange}/>
                </label>
                <label>Salary:
                    <input type="number" name="salary" value={salary}onChange={handleChange}/>
                </label>
                <label>Marital Status:
                    <input name="maritalStatus" value={maritalStatus} onChange={handleChange} type="checkbox" checked={maritalStatus} />
                </label>
                </div>
                <div>
                <label>Department:</label>
                <select name="department" value={department} onChange={handleChange}>
                {["Computer Science","Mechanical","Chemical","Electrical","Electronics"].map((item,index)=>{
                    return (
                        <option key={index} value={item} >{item}</option>
                    );
                }
                )}
                </select>
                </div>
                <div>
                <label>skills</label>
                {
                    skills.map((item,index) => (
                        <div key={index} >
                            <input type="checkbox" checked={selectedStates[index]} onChange={()=>handleSkillsChange(index)}/>
                            <label>{item}</label>
                        </div>
                    ))
                }
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Forms

