import Image from "next/image";

export function CoursCard() {
    return (
        <div class="flex flex-col justify-center items-center" >
            <div class=" rounded-[10px] w-[274px] my-5 h-[100%]" >
                <div class="bg-white rounded-t-lg flex justify-center items-center">
                    <Image src="/assets/talk.gif"
                        width={185}
                        height={153}
                        className="relative"
                    /> 
                </div>
                <div class="bg-[#f69f1d] p-4 rounded-b-lg w-[274px] h-[155px] ">
                    <div>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h3>
                    </div>
                    <div class=" h-[70px] flex flex-col justify-end items-baseline">
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
