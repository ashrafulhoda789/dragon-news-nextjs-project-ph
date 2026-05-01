'use client'
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSideBar = () => {

    const [session, setSession] = useState(null);

    useEffect(() => {
        authClient.getSession().then(res => {
            setSession(res.data);
        })
    }, []);

    const handleGoogleSignIn = async () => {
        if (session) return;

        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data);
    };

    const handleGithubSignIn = async () => {
        if (session) return;

        const data = await authClient.signIn.social({
            provider: "github"
        });
        // console.log(data);
    }

    return (
        <div>
            {
                session ? (
                    ""
                ) : (
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
                )
            }
        </div>
    );
};

export default RightSideBar;