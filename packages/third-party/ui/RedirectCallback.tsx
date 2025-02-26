import {useEffect} from "react";

declare let window: any;

export default function RedirectCallback() {

    useEffect(() => {
        const hashParams = new URLSearchParams(location.hash.substr(1))
        const id_token = hashParams.get('id_token');
        console.log('======id_token=',id_token);
        window.opener.postMessage({id_token}, location.origin);
        setTimeout(()=>{
            // window.close();
        })
    }, []);
    // if(typeof document !== 'undefined'){
    //   window.document.addEventListener('AppleIDSignInOnSuccess', (event: any) => {
    //     // Handle successful response.
    //     console.log(event.detail.data);
    //   });
    //
    // // Listen for authorization failures.
    //   window.document.addEventListener('AppleIDSignInOnFailure', (event: any) => {
    //     // Handle error.
    //     console.log(event.detail.error);
    //   });
    // }

    function handleChromeClick(){
        const hashParams = new URLSearchParams(location.hash.substr(1))
        const id_token = hashParams.get('id_token');
        const xhr = new XMLHttpRequest();
        const url = 'https://accounts.google.com/o/oauth2/token?' +
            'id_token=' + id_token;
        xhr.open('GET',
            url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response);
            } else if (xhr.readyState === 4 && xhr.status === 401) {
                // Token invalid, so prompt for user permission.
                console.error('没有登陆');
            }
        };
        xhr.send(null);
    }
    return (
        <div>
            <div onClick={handleChromeClick}>Google has Login</div>
        </div>
    )
}
