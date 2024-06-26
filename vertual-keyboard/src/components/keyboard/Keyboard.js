import Raw1 from "./Raws/Raw1"
import Raw2 from "./Raws/Raw2"
import Raw3 from "./Raws/Raw3"
import Raw4 from "./Raws/Raw4"
import Raw5 from "./Raws/Raw5"
import EmojiRaw from "./Raws/EmojiRaw"

const Keyboard = ({ onkeypress }) => {
  return (
    <div className="keyboard">
      <EmojiRaw onkeypress={onkeypress} />
    <Raw1 onkeypress={onkeypress} />
    <Raw2 onkeypress={onkeypress} />
    <Raw3 onkeypress={onkeypress} />
    <Raw4 onkeypress={onkeypress} />
    <Raw5 onkeypress={onkeypress} />
 </ div>
  )
}

export default Keyboard