import LoginForm from "../features/auth/components/LoginForm";

export default function Modal({ title, onClose }) {
    return (
        <>
            <div className="fixed bg-[#2A2D3E] inset-0 opacity-70"></div>
            <div className="fixed inset-0">
                <div className="flex items-center justify-center min-h-full">
                    <div className="bg-[#272D51] rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)] w-[600px] h-[500px]">
                        <div className=" flex justify-between items-center p-4">
                            <button className="invisible">0</button>
                            <h5 className="text-2xl text-white font-bold text-center pt-7 pb-6">
                                <div>Welcome Back</div>
                                <div>Hooman</div>
                            </h5>
                            <button>&#10005;</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
