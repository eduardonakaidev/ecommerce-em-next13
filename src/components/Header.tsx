import Image from "next/image";

import {Frame,Search ,ShoppingCart,Heart as Favorites ,User} from "lucide-react";
import Link from "next/link";

export default function Header(){
    return(
        <div className=" w-full h-28 pb-2 bg-slate-100 flex flex-row px-6">
             <div className="w-1/3 h-full flex flex-row items-center">

                <Frame className="text-black h-20 w-20 " />
                 <h1 className="text-2xl mx-4">EStore</h1>
             </div>

             <div className="w-1/3 h-full flex flex-row items-center">
                    <input className="w-96 h-12 text-base px-3 rounded shadow shadow-black " type="search" name="searchBar" id="searchBar" placeholder="pesquisar ........"   />
                    <Search className="-mx-9 "/>
             </div>
             
             <div className="w-1/3 h-full flex flex-row items-center pb-8  ps-28 space-x-24">
                <div className="flex flex-row items-center space-x-16">
                <Link href="" >
                    <Favorites className="w-8 h-8 text-black"/>
                </Link>
                <Link href="">
                     <ShoppingCart className="w-8 h-8 text-black"/>
                </Link>
                </div>
                <Link className="flex items-center flex-col  " href="">
                    <User className="w-10 h-10 text-black"/>
                    <p className="max-w-full text-sm ">Olá Eduardo</p>
                </Link>
                
             </div>
        </div>
    )
}