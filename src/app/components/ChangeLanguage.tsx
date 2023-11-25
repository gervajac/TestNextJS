"use client"
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { changeLanguage } from "@/redux/features/productSlice";

export function ChangeLanguage(){
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.product);
    console.log(state, "stttt")
    return(
        <section className="flex flex-row space-x-2">
            <button onClick={() => dispatch(changeLanguage("ESP"))}>🇪🇸</button>
            <button onClick={() => dispatch(changeLanguage("ENG"))}>🇪n</button>
        </section>
    )
}