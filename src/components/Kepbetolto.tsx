import { useState } from "react"
import type { ImageProps } from "../types/img";

export function KepBetolto(props: ImageProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const click = () => {
    setIsActive(prev => !prev)
  }
  return (
    <>
    <img src= {isActive? props.trueUrl: props.falseUrl} onClick={click}></img>
    </>
  )
}