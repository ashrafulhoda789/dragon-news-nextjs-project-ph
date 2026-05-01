'use client'
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSideBar = () => {

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data);
    };

    const handleGithubSignIn = async() => {
        const data = await authClient.signIn.social({
            provider: "github"
        });
        // console.log(data);
    }
    
    return (
        <div>
            <h2 className="font-bold text-lg ">Login With</h2>
            <div className="flex flex-col gap-2 mt-5">
                <button className="btn" onClick={handleGoogleSignIn}>
                    <FaGoogle></FaGoogle>
                    Login With Google</button>
                <button className="btn" onClick={handleGithubSignIn}>
                    <FaGithub></FaGithub>
                    Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSideBar;