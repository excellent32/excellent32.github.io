import {
    DynamicContextProvider,
    DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

export default function SolanaWalletDynamic() {

    return (
        <DynamicContextProvider
            settings={{
                // Find your environment id at https://app.dynamic.xyz/dashboard/developer
                environmentId: "81f42da4-b0de-4f9e-bf55-33dc72de5399",
                walletConnectors: [EthereumWalletConnectors, SolanaWalletConnectors]

            }}
        >
            <DynamicWidget />
        </DynamicContextProvider>
    );
}
