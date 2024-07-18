export function Header({Image1, titreParagraph, titreText, Image2}) {
    return (
        <div className="md:px-[70px] md:py-9 ">
            <div class="md:flex md:w-[100%] flex-row-reverse md:mb-10 md:h-[507px] h-[350px] md:justify-around md:w:[100%] justify-center items-center flex px-5">
                <div class="md:w-[500px]"> <img src={Image1} alt="" srcset="" /> </div>
                <div>
                    <div class="md:w-[237px] w-[137px]"> <img src={Image2} alt="" srcset="" /> </div>
                    <div class="text-[48px] md:text-[68px] text-center">{titreText}</div>
                </div>
            </div>
            <div className="bg-[#fb9600] p-5 rounded-[20px]">
                <p class="text-[20px]">{titreParagraph}</p>
            </div>
        </div>
    );
}
