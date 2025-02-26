import Link from "next/link";
import {routes} from './routes'

export function LeftMenu(){
    return <div className="bg-slate-100 h-screen">
        <div className="p-2 border-b border-indigo-500 font-fold flex justify-center">Routes</div>
        {routes.map((r)=> {
            return <MenuChildren route={r}/>
        })}
    </div>
}

function MenuChildren(props){
    const {route} = props;
    return <div className="">
        <div>
            <div className="p-2 border-b border-indigo-500 font-bold">{route.name}</div>
            <div className="p-2">
                {route.children?.map((child)=> (<Link href={child.path} className="bg-purple-300 p-2 ps-6 mt-1 pointer rounded-xl cursor-pointer block w-full">{child.name}</Link>))}
            </div>
        </div>
    </div>
}