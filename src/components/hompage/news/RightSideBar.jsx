import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSideBar = () => {
    return (
        <div>
            <h2 className="font-bold text-lg ">Login With</h2>
            <div className="flex flex-col gap-2 mt-5">
                <button className="btn">
                    <FaGoogle></FaGoogle>
                    Login With Google</button>
                <button className="btn">
                    <FaGithub></FaGithub>
                    Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSideBar;