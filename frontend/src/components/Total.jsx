import React from "react";
import { useGlobalContext } from "../context";

export default function Total({ }) {
    const { state } = useGlobalContext();
    const {transactions} = state
   const sum = transactions?.reduce((acc, curr) => acc + curr.amount, 0)
    return(
        <>
{sum.toFixed(2)}
        </>
    )

}

