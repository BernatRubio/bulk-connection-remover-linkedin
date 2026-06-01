import { useState } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { injectCheckboxes, injectRemove } from "../../content/chromeApi";

function Connections() {
  const [val, setVal] = useState(5);

  return (
    <>
      <div className="flex gap-3 mt-2">
        <Button
          id="add-checkboxes"
          className="flex-1 bg-zinc-500 hover:bg-zinc-600 transition hover:scale-105 rounded-lg text-xs text-white font-bold p-1.5"
          onClick={injectCheckboxes}
        >
          Show Checkboxes
        </Button>

        <Button
          id="remove-connections"
          className="flex-1 bg-red-500 hover:bg-red-600 transition hover:scale-105 rounded-lg text-xs text-white font-bold p-1.5"
          onClick={() => injectRemove(val)}
        >
          Remove Selected Connections
        </Button>
      </div>

      <div className="p-2 bg-linkedin-blue rounded-lg mt-3">
        <span className="text-xs block text-center text-white">
          Wait Time Between Removals
        </span>
        <div className="flex gap-2 items-center">
          <Slider
            id="wait-time"
            className="flex-1 appearance-none rounded-full h-2 bg-slate-300 accent-linkedin-message"
            min="5"
            max="20"
            value={val}
            onChange={setVal}
          />
          <label
            id="wait-time-label"
            className="flex-none text-white tabular-nums"
          >
            {val}s
          </label>
        </div>
      </div>
    </>
  );
}

export default Connections;
