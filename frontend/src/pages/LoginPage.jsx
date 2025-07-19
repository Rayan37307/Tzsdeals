import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		login(email, password);
	};

	return (
		<div className='flex justify-center h-screen sm:px-6 lg:px-8'>
		<div className='w-1/2 bg-[#CBE4E8] flex items-center justify-center'>
			<img src="/authimg.jpg" alt="auth image" className="w-[600px] h-[500px] object-cover"/>
		</div>

		<div className='w-1/2 mt-8 flex items-center justify-center flex-col'>
		<h3 className="text-3xl font-bold">Login to TZS Deals</h3>
		<p className="text-sm">Enter your details below</p>
			<div className='w-full px-12 py-8 '>
				<form onSubmit={handleSubmit} className='space-y-6'>

					<div>
						<div className='mt-1 relative rounded-md shadow-sm'>
							<input
								id='email'
								type='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='border-b-2 border-gray-600 w-full py-2'
								placeholder='Email'
							/>
						</div>
					</div>

					<div>
						<div className='mt-1 relative rounded-md shadow-sm'>
							<input
								id='password'
								type='password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='border-b-2 border-gray-600 w-full py-2'
								placeholder='Password'
							/>
						</div>
					</div>

					<button
						type='submit'
						className='w-full flex justify-center py-4 px-4 border border-transparent 
						 shadow-sm text-sm font-medium text-white bg-blue-500
						 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2
						  focus:ring-blue-500 transition duration-150 ease-in-out disabled:opacity-50'
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
								Loading...
							</>
						) : (
							<>
								Login
							</>
						)}
					</button>
				</form>

				<p className='mt-8 text-center text-sm text-gray-700'>
					Don't have an account?{" "}
					<Link to='/signup' className='font-bold underline'>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	</div>
	);
};
export default LoginPage;
