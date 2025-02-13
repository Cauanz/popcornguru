import { useEffect, useState } from "react"

export default function ConcludedTag({ state }) {

  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  //TODO - TERMINAR ISSO AQUI, PARA EXIBIR SE SERIE AINDA ESTÁ SENDO FEITA


  useEffect(() => {
    if(state) {
      setColor("#01FF08")
      setText("não sei")
    } else {
      setColor("#FF0701")
      setText("Não sei")
    }
  }, []);

  return (
    <>
      <div className={`bg-[${color}] `}>
        <p>{text}</p>
      </div>
    </>
  )
}
