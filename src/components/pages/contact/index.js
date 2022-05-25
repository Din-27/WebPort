import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icon from "../../../assets/flat.png"

const Mailto = ({submit, pindah, handle}) => {
    return(
        <div className="flex flex-row" onClick={handle}>
            <a
            href={submit} 
            class="btn btn-primary mt-2 rounded-none">Send</a>
            <button class="btn btn-primary mt-2 rounded-none ml-2" onClick={pindah}>Cancel</button>
        </div>
    )
}

function Contact() {

    const navigate = useNavigate()

    const [kirim, setKirim] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        messages: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    
    let submit = `mailto:${'herdiyanafirmansyah27@gmail.com'}?subject=${data.name}&body=${data.name} ${data.email} ${data.phone} ${data.address} ${data.messages}`
    const handleSend = () => {
        if(data.name === ""){
            return(
                setKirim(false),
                alert('data kosong')
            )
        }if(data.email === ""){
            return(
                setKirim(false),
                alert('data kosong')
            )
        }if(data.address === ""){
            return(
                setKirim(false),
                alert('data kosong')
            )
        }if(data.phone === ""){
            return(
                setKirim(false),
                alert('data kosong')
            )
        }if(data.messages === ""){
            return(
                setKirim(false),
                alert('data kosong')
            )
        }else{
            return setKirim(true)
        }
    }

  return (
      <div class="min-h-screen mockup-window border bg-base-200">
        <div className='mx-10 sm:mx-0 flex flex-col-reverse sm:flex-row justify-center mb-10'>
            {/* <div className="flex flex-col-reverse sm:flex-row justify-center"> */}
                <form className="form-control flex flex-col sm:mt-20">
                    <div className="flex flex-row">
                        <div className="input-name mt-2 w-full">
                            <label className='ml-2 mb-1 font-semibold' htmlFor="name">Name</label>
                            <input required type="text" name='name' onChange={handleChange} id='name' placeholder="Type name here" class="input input-bordered rounded-none input-primary w-full max-w-xs" />
                        </div>
                        <div className="input-name mt-2 ml-2 w-full">
                            <label className='ml-2 mb-1 font-semibold' htmlFor="email">Email</label>
                            <input required type="email" name='email' onChange={handleChange} id='email' placeholder="Type email here" class="input input-bordered rounded-none input-primary w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="input-name mt-2 sm:w-full">
                            <label className='ml-2 mb-1 font-semibold' htmlFor="address">Address</label>
                            <input required type="text" name='address' onChange={handleChange} id='address' placeholder="Type address here" class="input input-bordered rounded-none input-primary w-full max-w-xs" />
                        </div>
                        <div className="input-name mt-2 ml-2 sm:w-full">
                            <label className='ml-2 mb-1 font-semibold' htmlFor="phone">Phone</label>
                            <input required type="number" name='phone' onChange={handleChange} id='phone' placeholder="Type phone here" class="input input-bordered rounded-none input-primary w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className='ml-2 mt-2 mb-0 font-semibold'  htmlFor="address">Messages</label>
                        <textarea name='messages' onChange={handleChange} class="textarea rounded-none w-full mt-2 h-40 textarea-primary" placeholder="Your messages for me"></textarea>
                    </div>
                    {kirim 
                    ? 
                    <Mailto submit={submit} handle={handleSend} pindah={()=>navigate('/')}/> 
                    : 
                    <Mailto submit={null} handle={handleSend} pindah={()=>navigate('/')}/> }
                </form>
                <div className="flex flex-col sm:mt-5">
                    <img src={icon} alt="" />
                </div>
            {/* </div> */}
        </div>
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href='https://github.com/Din-27' target="_blank"><i class="fa-brands fa-github mx-2"></i></a>
                    <a href="https://www.linkedin.com/in/herdiyana-firmansyah/" target="_blank"><i class="fa-brands fa-linkedin mx-2"></i></a>
                </div>
            </div> 
            <div>
                <p>Copyright © 2022 - All right reserved by Herdiyana.Dev Ltd</p>
            </div>
        </footer>
      </div>
  )
}

export default Contact