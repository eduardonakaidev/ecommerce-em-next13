import Image from "next/image";
import Link from "next/link";

import ItemExemplo from "../../public/seila.jpg"


export default function ItemContainer() {
    return (
            
            <div className=" flex flex-col border-gray-100 rounded-lg border-2 px-4 pt-2 h-96 w-52">
                <Link href="">
                <Image alt="ImageItem" className="w-full h-44 border-2 border-gray-200 py-4 px-4 rounded" src={ItemExemplo} />
                <div className="my-8  ">
                    <p className="text-lg">Tenis exemplo dasdaaaaaaaaaaa</p>
                    <p>descricao Breve...</p>
                </div>
                </Link>
                <div className="bottom-0 mt-2">
                    <button className="w-full h-10 bg-green-400 rounded-lg  hover: text-lg ">149,90</button>
                </div>
                
                
            </div>
       
    )
}