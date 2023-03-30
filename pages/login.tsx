import {
    useAddress,
    useMetamask,
    useClaimNFT,
    useUser,
    useLogin,
    useContract,
} from "@thirdweb-dev/react";

import styles from "../styles/Main.module.css";

export default function Login() {
    // Wallet and Network Info
    const address = useAddress();
    const connectWithMetamask = useMetamask();

    //For user to claim an NFT to then view the restricted content 
    const { contract: editionDropContract } = useContract("0x564E946893313aFE0694e06A09Cb8693191e4949");

    //Hook to claim NFTs from the NFt drop 
    const { mutate: claimNft, isLoading: isClaiming } = useClaimNFT(editionDropContract);

    //Hooks to sign in with Ethereum (auth sdk)
    const { isLoading, login } = useLogin();
    const { user } = useUser();

    return(
        <div className={styles.container}>
            {address ? (
                <>
                <p>Welcome, {address.slice(0,6)}...</p>
                
                <button
                className={styles.mainButton}
                style={{ width: 256}}
                onClick={() => login()}
                >
                    {isLoading ? "Loading..." : "Sign in"}
                </button>
                 
                <p>
                    you can claim an nft from the collection below as well:
                </p>

                <button
                    className={styles.secondaryButton}
                    onClick={() => {
                        claimNft({
                            quantity: 1,
                            tokenId: 0,
                            to: address,
                        });
                    }}
                >
                    {!isClaiming ? " Claim an NFT" : "Claiming..."}
                </button>
                </>
            ) : (
                <>
                  <button
                  className={styles.mainButton}
                  style={{ width: "fit-content", paddingRight: 16, paddingLeft: 16 }}
                  onClick={() => connectWithMetamask()}
                  >
                    Connect Wallet
                  </button>
                </>
            )}
        </div>
    );
}