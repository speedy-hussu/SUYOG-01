import { useState } from "react";
import type { ChangeEvent } from "react";
import Input from "../components/common/Input"; // Fixed import path
import LoginIllustration from "../assets/illus.png";
import Logo from "../assets/logo.svg";

// Define types for credentials and useAuth hook
interface Credentials {
  email: string;
  password: string;
}

function Login() {
  // State type defined for credentials
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  // Typing for change event
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Left Section (Illustration) */}
      <div className="flex justify-center items-center w-3/4  bg-primary">
        <img src={LoginIllustration} alt="illustration" width={500} />
      </div>

      {/* Right Section (Form) */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-[350px] flex flex-col gap-6">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="logo" width={150} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-primary">
            Welcome back!
          </h2>
          <p className="text-secondary text-md text-center">
            Please enter your details
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <Input
              label={"Email"}
              type={"email"}
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
            <Input
              label={"Password"}
              type={"password"}
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />

            <div className="flex items-center justify-between text-sm text-primary">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                Remember me
              </label>
              <a href="#" className="text-secondary hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="text-white py-2 rounded-lg hover:bg-gray-800 bg-primary transition"
            >
              Log in
            </button>
          </form>

          {/* Google Login */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-primary py-2 rounded-lg"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
