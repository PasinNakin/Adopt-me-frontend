export default function Modal({ onClose, children, headText, overFlow }) {
    return (
        <>
            <div className="fixed bg-[#2A2D3E] inset-0 opacity-70 z-10 ease-out duration-200 "></div>
            <div className="fixed inset-0 z-20">
                <div className="flex items-center justify-center min-h-full">
                    <div
                        className={`bg-[#272D51] rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)] w-[600px]  h-[500px] ${overFlow}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className=" flex justify-between items-center py-6 px-14">
                            <button className="invisible">0</button>
                            <div className="text-2xl text-white font-bold text-center pt-7 pb-6 max-w-[200px]">
                                {headText}
                            </div>
                            <button onClick={onClose}>&#10005;</button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
