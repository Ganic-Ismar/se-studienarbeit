import React from "react";
import { useState, setState } from "react";
import { Popup } from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const InputSide = () => {
    const [name, setName] = useState('');
    const [ort, setOrt] = useState('');
    const [plz, setPlz] = useState('');
    const [openConf, setOpenConf] = React.useState(false);
    const [openMail, setOpenMail] = React.useState(false);

    const [passwdSP, setPasswdSP] = useState(false);
    const [passwdN, setPasswdN] = useState(false);
    const [passwdLE, setPasswdLE] = useState(false);

    const contentStyle = { background: 'rgba(0,0,0,0.2)', border: '2px', padding: '4px', width: '35rem', height: '15rem' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#000' }; // style for an svg element

    const handleChangeName = event => {
    const result = event.target.value.replace(/[^a-zA-Z ]*$/, '');

    setName(result);
  };

    const handleChangePasswd = event => {
        const inp = event.target.value;
        setPasswdLE(false);
        setPasswdN(false);
        setPasswdSP(false);
        if (inp.length >= 10) {
            setPasswdLE(true);
        }
        if (inp.match("(?=.*[0-9])")) {
            setPasswdN(true);
        }
        if (inp.match("(?=.*[!@#\$%\^&\*])")) {
            setPasswdSP(true);
        }
    }

  const handleChangeOrt = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setOrt(result);
  };

  const handleChangePlz = event => {
    const result = event.target.value.replace(/[^0-9]/gi, '');

    setPlz(result);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    checkEmail(form.email.value, formData);
    form.reset();
    setPasswdLE(false);
    setPasswdN(false);
    setPasswdSP(false);
  }

  async function sendData (form) {
    await fetch('http://127.0.0.1:8080/demo/add', {
        method: 'POST',
        body: form
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((err) => {
        console.log(err.message);
    });
    }

    function findbyMail (data, mail) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === mail)
            {
                return true;
            }
        }
        return false;
    }

  function checkEmail(mail, formData) {
    fetch('http://127.0.0.1:8080/demo/all')
        .then((response) => response.json())
        .then((data) => {
            if (findbyMail(data, mail)) {
                setOpenMail(true);
                return
            }
            else {
                sendData(formData);
                setName("");
                setOrt("");
                setPlz("");
                setOpenConf(true);
            }
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <>
            <div className="flex justify-center pt-40 w-full">
                <form onSubmit={handleSubmit} className="bg-neutral-900 border-[#3d3d3d] border-2 shadow-lg rounded px-10 pt-6 pb-8 mb-4 w-full max-w-lg">
                    <div class="mb-4">
                        <label class="block text-white-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow placeholder-neutral-600 appearance-none rounded bg-[#121212] w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" value={name} onChange={handleChangeName} type="text" placeholder="Max Mustermann"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-white-700 text-sm font-bold mb-2" for="mail">
                            E-Mail
                        </label>
                        <input class="shadow placeholder-neutral-600 appearance-none rounded bg-[#121212] w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="mail" name="email" type="email" placeholder="DeineEmail@example.com" pattern=".+@.+\..+" required/>
                    </div>
                    <div class="mb-4 mt-10">
                        <label class="block text-white-700 text-sm font-bold mb-2" for="Strasse">
                            Straße
                        </label>
                        <input class="shadow placeholder-neutral-600 appearance-none rounded bg-[#121212] w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="Strasse" name="strasse" type="text" placeholder="" minLength={7}/>
                    </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block text-white-700 text-sm font-bold mb-2" for="plz">
                                    PLZ
                                </label>
                                <input class="shadow placeholder-neutral-600 appearance-none rounded bg-[#121212] w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="plz" name="plz" value={plz} onChange={handleChangePlz} type="text" placeholder="" maxLength={5} minLength={5}/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block text-white-700 text-sm font-bold mb-2" for="ort">
                                    Ort
                                </label>
                                <input class="shadow placeholder-neutral-600 appearance-none rounded bg-[#121212] w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="ort" type="text" name="ort" value={ort} onChange={handleChangeOrt} placeholder=""/>
                            </div>
                        </div>
                    <div class="mb-6 mt-12">
                        <label class="block text-white-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow placeholder-neutral-600 appearance-none rounded bg-[#121212] w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" onChange={handleChangePasswd} placeholder="**********" autocomplete="off" pattern="(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{10,}" required/>
                        <div class="flex justify-center text-neutral-600 mt-2">
                            <label class={`text-xs mb-1 ${ passwdLE ? 'text-green-600' : 'text-red-600' }`}>>= 10 Stellen</label> <label class="text-neutral-600 text-xs mb-1">&#x2800;|&#x2800;</label>
                            <label class={`text-xs mb-1 ${ passwdN ? 'text-green-600' : 'text-red-600' }`}>Zahl</label> <label class="text-neutral-600 text-xs mb-1">&#x2800;|&#x2800;</label>
                            <label class={`text-xs mb-1 ${ passwdSP ? 'text-green-600' : 'text-red-600' }`}>Sonderzeichen</label>
                        </div>
                    </div>
                    <div class="mb-6 mt-10">
                        <button type="submit" className="w-full shadow bg-purple-600 hover:bg-purple-800 text-white-200 font-bold py-2 px-4 rounded-lg inline-flex items-center justify-center">
                            <span>&#x1F4BE; Registrieren</span>
                        </button>
                    </div>
                </form>
                <Popup 
                    open={openConf} 
                    {...{ contentStyle, overlayStyle, arrowStyle }}
                >
                {
                    close => (
                        <div className=''>
                            <div className="flex justify-center mt-5">
                                <svg className="w-[15%] h-[15%]" viewBox="0 0 20 20">
							        <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
						        </svg>
                            </div>
                            <div className='flex justify-center mt-1'>
                                Benutzer erfolgreich registriert
                            </div>
                            <div className="flex justify-center mt-7 w-full">
                                    <button onClick=
                                        {() => setOpenConf(false)}>
                                            <div className="flex shadow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-12 rounded-lg justify-center">
                                                Okay 
                                            </div>
                                    </button>
                            </div>
                        </div>
                    )
                }
                        </Popup>
                        <Popup 
                    open={openMail} 
                    {...{ contentStyle, overlayStyle, arrowStyle }}
                >
                {
                    close => (
                        <div className='overflow-hidden'>
                            <div className="flex justify-center mt-5">
                                <svg className="w-[15%] h-[15%] stroke-red-600" viewBox="0 0 20 20">
							        <path d="M 10.219 1.688 c -4.471 0 -8.094 3.623 -8.094 8.094 s 3.623 8.094 8.094 8.094 s 8.094 -3.623 8.094 -8.094 S 14.689 1.688 10.219 1.688 M 10.219 17.022 c -3.994 0 -7.242 -3.247 -7.242 -7.241 c 0 -3.994 3.248 -7.242 7.242 -7.242 c 3.994 0 7.241 3.248 7.241 7.242 C 17.46 13.775 14.213 17.022 10.219 17.022 M 5 9 L 15 9 L 15 11 L 5 11 L 5 9"></path>
						        </svg>
                            </div>
                            <div className='flex justify-center mt-1'>
                                E-Mail bereits registriert
                            </div>
                            <div className="flex justify-center mt-7 w-full">
                                    <button onClick=
                                        {() => setOpenMail(false)}>
                                            <div className="flex shadow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-12 rounded-lg justify-center">
                                                Okay 
                                            </div>
                                    </button>
                            </div>
                        </div>
                    )
                }
                        </Popup>
            </div>
        </>
    )
}

export default InputSide