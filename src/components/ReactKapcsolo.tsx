import { useState } from "react"
export function ReactKapcsolo() {
    const  [btn, setBtn] = useState<boolean>(false);
    const click = () => {
      setBtn(prev => !prev)
    } 
    return (
      <>
      <button onClick={click}>{btn?"be":"ki"}</button>
      </>
    )
}