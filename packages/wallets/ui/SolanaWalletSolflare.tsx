'use client'
import {useEffect, useState} from "react";
import type {default as Solflare} from '@solflare-wallet/sdk';
import {PublicKey} from '@solana/web3.js';


export default function Apple() {
    const [wallet, setWalletClient] = useState(null);
    const [publicKey, setPublicKey] = useState(null);
    useEffect(() => {
        init();
    }, []);

    async function init(){
        let SolflareClass: typeof Solflare;
        try {
            SolflareClass = (await import('@solflare-wallet/sdk')).default;
        } catch (error: any) {
            throw new Error(error?.message, error);
        }

        let wallet: Solflare;
        try {
            wallet = new SolflareClass({ network: 'mainnet-beta' });
            setWalletClient(wallet);
        } catch (error: any) {
            throw new Error(error?.message, error);
        }
    }


    async function handleConnectClick(){
        try {

            let SolflareClass: typeof Solflare;
            try {
                SolflareClass = (await import('@solflare-wallet/sdk')).default;
            } catch (error: any) {
                throw new Error(error?.message, error);
            }

            let wallet: Solflare;
            try {
                wallet = new SolflareClass({ network: 'mainnet-beta' });
            } catch (error: any) {
                throw new Error(error?.message, error);
            }

            // this._connecting = true;

            if (!wallet.connected) {
                try {
                    await wallet.connect();
                } catch (error: any) {
                    throw new Error(error?.message, error);
                }
            }

            if (!wallet.publicKey) throw new Error();

            let publicKey;
            try {
                publicKey = new PublicKey(wallet.publicKey.toBytes());
            } catch (error: any) {
                throw new Error(error?.message, error);
            }

            // wallet.on('disconnect', this._disconnected);
            // wallet.on('accountChanged', this._accountChanged);

            setWalletClient(wallet);
            setPublicKey(publicKey);

            // this.emit('connect', publicKey);
        } catch (error: any) {
            console.error('====', error);
            // this.emit('error', error);
            throw error;
        } finally {
            // this._connecting = false;
        }

    }

    async function handleSignClick(){
        try {

            if (!wallet) throw new Error('');

            try {
                return await wallet.signMessage('https://pulse.social.com', 'utf8');
            } catch (error: any) {
                throw new Error(error?.message, error);
            }
        } catch (error: any) {
            this.emit('error', error);
            throw error;
        }
    }

    return (
        <div>
            <div className="w-300 flex item-center justify-around pt-3">
                <span className="bg-purple-300 p-2 rounded-xl cursor-pointer" onClick={handleConnectClick}>wallet-connect</span>

                <span className="bg-gray-300 p-2 rounded-xl cursor-pointer" onClick={handleSignClick}>wallet-sign</span>
            </div>
            <span id="google111" className="flex"></span>
        </div>
    )
}

