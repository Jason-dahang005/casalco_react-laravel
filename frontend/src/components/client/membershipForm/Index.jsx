import React from 'react'

import logo from '../../../assets/client/header/CasalcoLogo-7.png'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Index = () => {
  const [example, SetExample] = useState({
    fname:      '',
    mname:      '',
    lname:      '',
    suffix:     '',
    gender:     '',
    dob:        '',
    bplace:     '',
    address:    '',
    unit:       '',
    occupation: '',
    educ:       '',
    m_income:   '',
    civil:      '',
    religion:   '',
    contact:    '',
    email:      '',
    dependents: '',
    error_list: []
  })
  
  const handleExample = (e) => {
    e.persist();
    SetExample({...example, [e.target.name]: e.target.value})
  }

  const submitExample = (e) => {
    e.preventDefault();

    const data = {
      fname:          example.fname,
      mname:          example.mname,
      lname:          example.lname,
      suffix:         example.suffix,
      gender:         example.gender,
      dob:            example.dob,
      bplace:         example.bplace,
      address:        example.address,
      unit:           example.unit,
      occupation:     example.occupation,
      educ:           example.educ,
      m_income:       example.m_income,
      civil:          example.civil,
      religion:       example.religion,
      contact:        example.contact,
      email:          example.email,
      dependents:     example.dependents,
    }

    axios.post(`http://127.0.0.1:8000/api/membership`, data).then(res => {
      if(res.data.status === 200){
        alert('yehey! addded')
        document.getElementById('exampleform').reset();
      }else if(res.data.status === 400){
        SetExample({...example, error_list:res.data.errors})
      }
    })
  }

  return (
    // <div className='container w-[500px] mx-auto'>
    //   <form className='flex flex-col space-y-5' onSubmit={submitExample} id='exampleform'>
    //     <label htmlFor="">First Name</label>
    //     <input type="text" name='fname' onChange={handleExample} value={example.fname}  className="outline-none border rounded-lg py-5 px-5" />
    //     <label htmlFor="">Middle Name</label>
    //     <input type="text" name='mname' onChange={handleExample} value={example.mname} className="outline-none border rounded-lg py-5 px-5" />
    //     <label htmlFor="">Last Name</label>
    //     <input type="text" name='lname' onChange={handleExample} value={example.lname} className="outline-none border rounded-lg py-5 px-5" />
    //     <button type="submit"className="bg-green-500 py-5 my-10">Submit</button>
    //   </form>
    // </div>

    <div className="grid grid-cols-1 sm:grid-cols-5">
      <div className="border">
        asdasd
      </div>
      <div className="col-span-4 border">
        <form onSubmit={submitExample}>
          <div className="w-[1000px] mx-auto py-5">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">Casalco Membership Form</h1>
              <div className="bg-orange-600 h-1"></div>
            </div>
            <div className="py-3">
              <h2 className='text-xl font-semibold'>Personal Information</h2>
              <p>We require your personal information to ensure calidty of you memnbership application</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4">
              <div>
                <input type="text" className='membership-form' name='fname' onChange={handleExample} value={example.fname} placeholder='First Name'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='mname' onChange={handleExample} value={example.mname} placeholder='Middle Name'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='lname' onChange={handleExample} value={example.lname} placeholder='Last Name'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='suffix' onChange={handleExample} value={example.suffix} placeholder='Suffix'/>
              </div>
              <div>
                <select name="gender" id="" className='membership-form' onChange={handleExample} value={example.gender}>
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <input type="date" className='membership-form' name='dob' onChange={handleExample} value={example.dob}/>
              </div>
              <div>
                <input type="text" className='membership-form' name='bplace' onChange={handleExample} value={example.bplace} placeholder='Birth Place'/>
              </div>
              <div className='md:col-span-2'>
                <input type="text" className='membership-form' name='address' onChange={handleExample} value={example.address} placeholder='Address'/>
              </div>
              <div>
                <select name="unit" id="" className='membership-form' onChange={handleExample} value={example.unit}>
                  <option>Select Unit</option>
                  <option value="cu">Capitol university &#40;Main&#41;</option>
                  <option value="cumc">Capitol University Medical Center &#40;CUMC&#41;</option>
                  <option value="cumc">Capitol University Basic Education DEpartment &#40;CUBED&#41;</option>
                  <option value="cumc">Support Zebra</option>
                  <option value="cumc">Associate</option>
                </select>
              </div>
              <div>
                <input type="text" className='membership-form' name='occupation' onChange={handleExample} value={example.occupation} placeholder='Occupation'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='educ' onChange={handleExample} value={example.educ} placeholder='Educational Attainment'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='m_income' onChange={handleExample} value={example.m_income} placeholder='Monthly Income'/>
              </div>
              <div>
                <select name="civil" id="" className='membership-form' onChange={handleExample} value={example.civil}>
                  <option>Select Civil Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorce">Divorced</option>
                  <option value="separated">Separated</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
              <div>
                <input type="text" className='membership-form' name='religion' onChange={handleExample} value={example.religion} placeholder='Religion'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='contact' onChange={handleExample} value={example.contact} placeholder='Contact No.'/>
              </div>
              <div>
                <input type="email" className='membership-form' name='email' onChange={handleExample} value={example.email} placeholder='Email Address'/>
              </div>
              <div>
                <input type="text" className='membership-form' name='dependents' onChange={handleExample} value={example.dependents} placeholder='No. of Dependents'/>
              </div>
            </div>
          </div>
          <div className="membership-form-btn-box">
            <button type="submit" className='membership-form-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index