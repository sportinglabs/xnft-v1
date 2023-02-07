import { useEffect, useState, useMemo } from "react";
import { usePublicKey } from "react-xnft"
import { getNFTsByOwner } from "../utils/nfts";

export const useNFTs = () => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const publicKey = usePublicKey();
  // @ts-ignore
  const connection = window.xnft.solana.connection
  const wallet = {
    publicKey,
    // @ts-ignore
    signAllTransactions: window.xnft.signAllTransactions,
    // @ts-ignore
    signTransaction: window.xnft.signTransaction,
    connected: true,
  }

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError(false);

      try {
        const nfts = await getNFTsByOwner(publicKey)
        setNfts(nfts)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(true)
        setLoading(false)
      }
    }

    console.log("fetching nfts");
    fetchNFTs()
  })

  return { nfts, loading, error }
}