'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const handleLoginFunc = async (data) => {
        // e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        // console.log(data);
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        // console.log(res, error);
    }

    // console.log(watch('email'));
    // console.log(errors);

    return (
        <div className="container mx-auto min-h-[80vh] bg-gray-200 flex items-center justify-center">
            <div className="rounded-xl p-15 bg-white">
                <h2 className="font-bold text-3xl text-center mb-4">Login Your Account</h2>

                <div className="divider"></div>

                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Type Your Email" {...register("email", { required: "Email Field is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Type here Password" {...register("password", { required: "Password Field is required", minLength: { value: 4, message: 'Password must be at least 4 characters' } })} />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}


                    </fieldset>
                    <button className="btn btn-neutral w-full">Login</button>
                </form>
                <p className="mt-5">Don&apos;t have an account? <Link href={'/register'} className="text-blue-500">Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;