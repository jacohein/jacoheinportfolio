import react from "react";
import Image from "next/image";
import res from "../../public/JacobResume.jpg";


export default function ResumePage() {
   

    return (
        <Image
        className="rounded-lg object-cover"
        layout="responsive"
        src={res}
        quality = {100}
      />
    );
}