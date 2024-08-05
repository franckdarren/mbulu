import Image from "next/image";

export function CoursCard({theme, lesson, ImageCours}) {
    return (
        <div className="flex flex-col justify-center  delay-75 duration-300  hover:scale-105 items-center" >
            <div className=" rounded-[10px] w-[274px]  my-5 h-[100%]" >
                <div className="bg-white   rounded-t-lg flex justify-center items-center">
                    {/* "/assets/talk.gif" */}
                    <Image src={ImageCours}
                        width={185}
                        height={153}
                        className="w-full h-[220px] rounded-t-lg relative"
                        alt="image"
                    /> 
                </div>
                <div className="bg-[#f69f1d] p-4 rounded-b-lg w-[274px] h-[155px] ">
                    <div>
                        <h3>{theme}</h3>
                    </div>
                    <div className=" h-[70px] flex flex-col justify-end items-baseline">
                        <p>{lesson}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
