

import Image from "next/image";

export function Header({ photo_gif, titreParagraph, titreText, photo_langue }) {
  return (
    <div className="md:px-[70px] bg-[#FCFCFD] md:py-9 ">
      <div className="md:flex md:w-[100%] flex-row-reverse md:mb-10 md:h-[337px] h-[350px] md:justify-evenly md:w:[100%] justify-center items-center flex px-5">
        <div className="md:w-[350px] flex justify-center items-center">
          {" "}
          <Image src={photo_gif} alt="image" width={400} height={400} />{" "}
        </div>
        <div>
          <div className="md:w-[237px] w-[137px]">
            {" "}
            <Image
              src={photo_langue}
              alt="image"
              width={150}
              height={150}
            />{" "}
          </div>
          <div className="text-[48px] md:text-[68px]">{titreText}</div>
        </div>
      </div>
      <div className="bg-[#fb9600] p-5 rounded-[20px] mx-5">
        <p className="text-[20px]">{titreParagraph}</p>
      </div>
    </div>
  );
}
