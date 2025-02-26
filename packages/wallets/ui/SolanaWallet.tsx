'use client'

declare let window : Record<string, any>;
export default function SolanaWallet() {

    function getProvider(){
        if('phantom' in window) {
            const provider = window.phantom?.solana;
            if(provider?.isPhantom) {
                return provider;
            }
        }

        window.open('https://phantom.app/', '_blank');
    }

    async function handleConnectClick(){
        try{
            const provider = getProvider();
            if(provider) {
                // 链接
                const resp = await provider.connect();
                console.log('==handleConnectClick=', resp.publicKey.toString());
            }
        }catch (e) {
            console.log('=====', e);
        }

    }

    async function handleSignClick(){
        try{
            const provider = getProvider();
            if(provider) {
                // 签名
                const message = `To avoid digital dognappers, sign below to authenticate with CryptoCorgis`;
                const encodedMessage = new TextEncoder().encode(message);
                const signedMessage = await provider.request({
                    method: "signMessage",
                    params: {
                        message: encodedMessage,
                        display: "hex",
                    },
                });
                console.log('==handleConnectClick=', signedMessage);
            }
        }catch (e) {
            console.log('=====', e);
        }
    }

    return (
        <div>
            <div className="w-300 flex item-center justify-around pt-3">
                <span className="bg-purple-300 p-2 rounded-xl cursor-pointer" onClick={handleConnectClick}>wallet-connect</span>

                <span className="bg-gray-300 p-2 rounded-xl cursor-pointer" onClick={handleSignClick}>wallet-sign</span>
            </div>
        </div>
    )
}

