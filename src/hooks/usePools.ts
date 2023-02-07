import { useEffect, useState } from "react";
import { getAllPools } from "../sdk/";

export const usePools = () => {
  const [pools, setPools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // @ts-ignore
  const connection = window.xnft.solana.connection

  useEffect(() => {
    const fetchPools = async () => {
      setLoading(true);
      setError(false);

      try {
        // const pools = await getAllPools(connection)
        // setPools(pools)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(true)
        setLoading(false)
      }
    }

    console.log("fetching pools");
    fetchPools()
  })

  return { pools, loading, error }
}