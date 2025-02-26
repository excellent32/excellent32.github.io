import {LeftMenu} from "./left-menu/LeftMenu";

export function Layout(props){
    return <div>
        {/*header*/}
        <div></div>
        <div className="flex">
            {/*left menu*/}
            <div className="w-[300px]">
                <LeftMenu/>
            </div>
            {/*content*/}
            <div className="flex-1">
                {props.children}
            </div>
        </div>
    </div>
}