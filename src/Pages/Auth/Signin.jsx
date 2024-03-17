import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [siginInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });

  function handleFormChange(e){
    const {name,value} = e.target;
    setSigninInfo({
      ...siginInfo,
      [name]:value
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(siginInfo);
  }
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-white text-5xl">Login to your account</h1>
      </div>

      <div className="mt-4">
        <p className="text-white">
          Donot have an account ?
          <Link to="/signup">
            <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
              Sign Up
            </button>
          </Link>
        </p>
      </div>

      <div className="w-full">
        <form
          className="flex flex-col justify-center items-center w-3/4 mx-auto"
          autoComplete="off"
          onSubmit={onFormSubmit}
        >
          <div className="my-5 w-1/3">
            <input
              autoComplete="off"
              type="email"
              placeholder="email..."
              name="email"
              className="px-8 py-3 bg-white w-full text-black"
              value={siginInfo.email}
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
              value={siginInfo.password}
              onChange={handleFormChange}
            />
          </div>

          <div className="my-5 w-1/3">
            <button
              className="btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-400"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
