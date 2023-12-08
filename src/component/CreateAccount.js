import React,{useState} from 'react';
// import loginPage from './component/loginPage'
import Nav from './Nav.js';
import './CreateAccount.css'
// import Select from 'react-select'
// import Select from 'react-select'



function CreateAccount (){
    const [formValue,setFormValue] = useState({userName : '',phoneNumber : '' ,password : ''})
    // const [name,setName] = useState('')
    // const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [company,setCompany] = useState('')
    const [pass,setPass] = useState('')
    const [password,setPassword] = useState(false)
    const [date,setdate] = useState('')
    const [male,setMale] = useState('')
    const [female,setFemale] = useState('')
    const [terms,setTerms] = useState('')
    const [policy,setPolicy] = useState('')
    const [laung,setLaung] = useState([])
    const [age,setAge] = useState('')
    const [img,setImg] = useState('')
    const [image,setImage] = useState([])

    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked)
    const handleAll = (event) => {
        const {name,value} = event.target;
        setFormValue ({...formValue,[name]:value,})
    }
    const handleAddress = (event) =>{ 
        setAddress(event.target.value)
    }
    const handleCompany = (event) => {
        setCompany(event.target.value)
        // console.log(event.target.value)
    }
    // const handlePass = (event) => {
    //     setPass(event.target.value)
    // }
    const handlePassword = () =>{
        setPassword(!password)
    } 
    const handleDate = (event) => {
        setdate(event.target.value)
    }
    const handleMale = (event) => {
        setMale(event.target.value)
    }
    const handleFemale = (event) => {
        setFemale(event.target.value)
    }
    const handleTerms = (event) =>{
        setTerms(event.target.value)
    }
    const handlePolicy = (event) => {
        setPolicy(event.target.value)
    }
    const handleLaung = (event) => {
        setLaung(event.target.value)
        // console.log('laung',skill)
    }
    const handleAge = (event) =>{
        setAge(event.target.value)
    } 
    const handleImg = (event) =>{
        // console.log(event.target.files)
        setImg(URL.createObjectURL(event.target.files[0]));
    }
    // let MulImage={
    //     files:[]
    // }
    const handleImage = (event) =>{
        setImage({files:[...this.MulImage.files,...event.target.files]});
    }

      
    const handleToggle = () => {
        setIsChecked((isChecked)=>!isChecked);
        console.log(isChecked)
    }




    const handleSubmit = (event) => {
        event.preventDefault();
        const emptyField = Object.values(formValue).some(value => value.trim()=== '')

        if (emptyField) {
            setFormValue((prevFormValue) =>{
                const updateFormValue = {};
                Object.keys(prevFormValue).forEach((key)=>{
                    updateFormValue[key]=prevFormValue[key].trim()===''? 'error' : '';
                })
                return updateFormValue
            });

        } 
        else{
            console.log('FORM SUBMITTED:',formValue)
        }
    }
    return (
        
        <>
        {/* <loginPage/> */}
        <Nav/>
        <h1>CREATE YOUT ACCOUNT NEW</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='textField'>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h3>Text Field</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <input 
                                    type='text' 
                                    name='userName' 
                                    placeholder='Name'  
                                    onChange={handleAll} 
                                    value={formValue.userName}
                                    className={formValue.userName}

                                    required
                                    />
                                </td>
                                <td>
                                    {/* {name} */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Phone Number</label>
                                </td>
                                <td>
                                    <input 
                                    type='tel' 
                                    name='phoneNumber' 
                                    // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
                                    placeholder='Phone Number' 
                                    onChange={handleAll}
                                    value={formValue.phoneNumber} 
                                    className={formValue.phoneNumber}
                                    required/>
                                </td>
                                {/* <td>{phone}</td> */}
                            </tr>
                            <tr>
                                <td>
                                <label>Address</label>

                                </td>
                                <td>
                                <input 
                                type="text" 
                                name='address' 
                                placeholder='Addressd' 
                                onChange={handleAddress}
                                />

                                </td>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <td>
                                <label>Comapny Name</label>

                                </td>
                                <td>
                                <input 
                                type='text' 
                                name='companyName' 
                                placeholder='Company Name' 
                                onChange={handleCompany}
                                />

                                </td>
                                <td>{company}</td>
                            </tr>
                            <tr>
                                <th>
                                <h3>Enter Your Password</h3>

                                </th>
                            </tr>

                            <tr>
                                <td>
                                    <label>Password</label>
                                </td>
                                <td>
                                    <input 
                                    type={password?'text':'password'} 
                                    name='password' 
                                    value={formValue.password} 
                                    className={formValue.password}
                                    placeholder='Enter Your Password' 
                                    onChange={handleAll}
                                    />
                                    <button type='button' onClick={handlePassword}>{password?'Hide':'👁️'}</button>
                                </td>
                                {/* <td>{pass}</td> */}
                            </tr>
                            <tr>
                                <th>
                                <h3>Date Picker</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                <label>Date</label>

                                </td>
                                <td>
                                <input 
                                type='date' 
                                name='date' 
                                onChange={handleDate}
                                />

                                </td>
                                <td>{date}</td>
                            </tr>
                            <tr>
                                <th>
                                <h3>Radio Button</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                    type='radio' 
                                    name='gender' 
                                    id='male' 
                                    value='Male' 
                                    onChange={handleMale}
                                    />
                                    <label htmlFor='male'>Male</label>
                                </td>

                                
                                <td>
                                    <input 
                                    type='radio' 
                                    name='gender' 
                                    value='Female' 
                                    onChange={handleFemale}
                                    />
                                    <label>Female</label>

                                </td>
                                <td>{male}{female}</td>
                            </tr>
                            <tr>
                                <th>
                                <h3>Check Box</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <input 
                                    type='checkbox' 
                                    name='terms' 
                                    value='terms and condition' 
                                    onChange={handleTerms}
                                    />
                                    <label>terms and condition</label>
                                </td>
                                <td></td>
                                <td>{terms}</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='checkbox' name='policy' value='Accoupt the Policy' onChange={handlePolicy}/>
                                    <label htmlFor='policy'>Accoupt the Policy</label>
                                </td>
                                <td></td>
                                <td>{policy}</td>
                            </tr>
                            <tr>
                                <th>
                                <h3>Multiple Select Drop Down</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <label>Select Your Launguage </label>
                                </td>
                                <td>
                                    <select  onChange={handleLaung} multiple>
                                        <option>Tamil</option>
                                        <option>English</option>
                                        <option>Karnada</option>
                                        <option>French</option>
                                        <option>German</option>
                                    </select>
                                    {/* <Select options={laungage} onChange={handleLaung} isMulti={true} value={laung}/> */}
                                </td>
                                <td>
                                    {/* <ul> */}
                                        {/* {laung.map((launguage) => <p></p>)} */}
                                    {/* </ul> */}
                                    {laung}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                <h3>Single Select</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <label>Select age</label>

                                </td>
                                <td>
                                    <select onChange={handleAge}>
                                        <option>15-20</option>
                                        <option>20-25</option>
                                        <option >25-30</option>
                                        <option>30-35</option>
                                        <option>35-40</option>
                                    </select>
                                </td>
                                <td>
                                    {age}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                <h3>Image Picker</h3>

                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <label>Upload your profile</label>
                                </td>
                                <td>
                                    <input type='file' accept='image/*' onChange={handleImg}/>
                                    {/* <img src={file}/> */}
                                </td>
                                <td><img src={img} alt='profile'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Upload Your Documents</label>
                                </td>
                                <td>
                                    <input type='file' accept='image/*' multiple onChange={handleImage}/>
                                </td>
                                {/* <td>{image}</td> */}
                            </tr>
                            <tr>
                                <th>
                                <h3>Drag And Drop Image</h3>

                                </th>
                            </tr>
                            <tr>
                                <th>
                                <h3>Toggle Switch</h3>
                                </th>
                            </tr>
                            
                            <tr>
                                <td>
                                    <p>You are a indian</p>
                                </td>
                                
                                <td>
                                    <div className='continer'>
                                        <label className={`toggle-switch ${isChecked ? 'checked' : ''}`}>
                                        <input
                                            type="checkbox"
                                            // checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <span className="slider"></span>
                                        </label>
                                    </div>
                                    
                                </td>
                                {/* <td>{isChecked}</td> */}
                                <td>
                                    {/* <div style={{color:'black'}}>{'asdsdas'}{isChecked}</div> */}
                                    <h1>{isChecked}</h1>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h3>Validation Button</h3>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <button type='submit' >SUBMIT</button>
                                </td>
                                <td>
                                    <button type='reset'>RESET</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>

            </form>
        </div>

        
        </>

    )
}

export default CreateAccount;