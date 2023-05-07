import ItemContainer from "./ItemContainer";


export default function MainHome(){
    return(
        <div className="w-full h-full px-8 flex flex-row flex-wrap space-x-3 pt-12">
             <ItemContainer/>
             <ItemContainer/>
             <ItemContainer/>
             <ItemContainer/>
             <ItemContainer/>
             <ItemContainer/>
        </div>
    )
}