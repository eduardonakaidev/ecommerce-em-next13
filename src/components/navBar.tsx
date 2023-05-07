import Link from "next/link";
import {AlignJustify} from "lucide-react";

export function NavBar(){
    return(
        <div className=" w-full flex flex-row space-x-1  h-16 px-4 bg-white border-b-2 border-black rounded-b-lg">

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="/categoria">
                <AlignJustify className="text-black h-full w-10 "/>
                <p className="text-black text-lg">Todos</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 1</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 2</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 3</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 4</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 5</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 6</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 7</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 8</p>
            </Link>

            <Link className="flex flex-row items-center px-4 py-2 border-white rounded hover:border-black border-2"
             href="">
                <p className="text-black text-lg">categoria 9</p>
            </Link>
            
          
        </div>
    )
}