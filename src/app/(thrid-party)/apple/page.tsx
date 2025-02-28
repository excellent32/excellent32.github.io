'use client'
import {useEffect} from "react";

const configFile = {
  link: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
}

declare let AppleID : Record<string, any>;

export default function Page() {

  useEffect(() => {
    setTimeout(()=>{
      startAuth();
    },1000)
  }, []);


  const handleAuthClick = async ()=>{
    // 添加appleid.auth.js
    // 调用AppleID.auth.init
    try {
      const data = await AppleID.auth.signIn();
      console.log('===apple-data=', data);
    } catch (error) {
      console.error('===apple-data=', error);
    }
  }

  async function startAuth(){
    await loadAppleAuthScript();

    AppleID.auth.init({
      //response_type: 'code id_token',
      clientId: 'com.phemex.weblogin',
      scope: 'email name',
      redirectURI: `${location.origin}/callback`,
      state: 'initial',
      nonce: '21208298071267998750675144691611999301006655472014769051443385150345422400305',
      usePopup : true
    });
  }

  function handleLoginClick(){
  }

  return (
    <div className="mt-10 ml-10 flex item-center justify-around">
      <button className="bg-purple-300 p-2 rounded-xl cursor-pointer" onClick={handleAuthClick}>Apple-Auth</button>
      <button className="bg-gray-300 p-2 rounded-xl cursor-pointer" onClick={handleLoginClick}>Has Login</button>
    </div>
  )
}

function loadAppleAuthScript(){
  return new Promise((resovle, reject)=>{
    const script = document.createElement('script');
    script.setAttribute('src', configFile.link);
    script.onload = function(){
      resovle('');
    }
    script.onerror = function(){
      reject('');
    }

    document.head?.append(script);
  })
}
