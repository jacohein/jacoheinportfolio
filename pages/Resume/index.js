import react from "react";
import Image from "next/image";
import res from "../../public/Resume.jpg";
import res2 from "../../public/Resume2.jpg"


export default function ResumePage() {
   

    return (
      <>
        <Image
        className="rounded-lg object-cover"
        layout="responsive"
        src={res}
        quality = {100}
      />
      <Image
        className="rounded-lg object-cover"
        layout="responsive"
        src={res2}
        quality = {100}
      />
      </>
    );
}