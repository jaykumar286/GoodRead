import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        email: "",
        password: "",
        username:""
      });

      function handleFormChange(e){
        const {name,value} = e.target;
        setSignupInfo({
          ...signupInfo,
          [name]:value
        });
      }
    
    
      function onFormSubmit(e) {
        e.preventDefault();
        console.log(signupInfo);
      }
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-white text-5xl">Create a new account</h1>
            </div>
            <div className="mt-4">
                <p className="text-white">
                    Already have an account ? 
                    <Link to="/signin">
                        <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                            Sign In
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3">
                        <input
                            autoComplete="off"
                            type="text"
                            name="username"
                            placeholder="username..."
                            className="px-8 py-3 bg-white w-full text-black"
                            value={signupInfo.username}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input
                            autoComplete="off"
                            type="email"
                            name="email"
                            placeholder="email..."
                            className="px-8 py-3 bg-white w-full text-black"
                            value={signupInfo.email}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input
                            autoComplete="off"
                            type="password"
                            name="password"
                            placeholder="password..."
                            className="px-8 py-3 bg-white w-full text-black"
                            value={signupInfo.password}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <button className="btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-400" type="submit">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}