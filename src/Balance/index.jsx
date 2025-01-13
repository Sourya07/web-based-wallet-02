import React, { useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = (balance / LAMPORTS_PER_SOL).toFixed(2); // Display up to 2 decimal places
        } else {
            document.getElementById("balance").innerHTML = "No wallet connected";
        }
    }

    useEffect(() => {
        getBalance();
    }, [wallet.publicKey]); // Trigger balance fetch whenever the wallet publicKey changes

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <p style={styles.text}>SOL Balance:</p>
                <div id="balance" style={styles.balance}></div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
    },
    box: {
        textAlign: "center",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    text: {
        fontSize: "24px",
        marginBottom: "10px",
        color: "#333",
    },
    balance: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#0072CE",
    },
};
