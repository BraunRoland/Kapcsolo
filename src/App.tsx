import { Fejlec } from "./components/Fejlec";
import { KepBetolto } from "./components/Kepbetolto";
import { ReactKapcsolo } from "./components/ReactKapcsolo";

function App() {

  return (
    <>
      <Fejlec/>
      <ReactKapcsolo/>
      <KepBetolto
        trueUrl="/pic_bulbon.gif"
        falseUrl="/pic_bulboff.gif"
      />
    </>
  )
}






export default App
