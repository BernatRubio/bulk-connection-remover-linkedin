import Button from "../../components/Button";
import { openConnectionsTab } from "../../content/chromeApi";

function Goto() {
  return (
    <>
      <div className="flex justify-center mt-2">
        <Button
          id="goto-connections"
          className="bg-linkedin-blue hover:bg-linkedin-message transition hover:scale-105 rounded-lg text-xs text-white font-bold p-1.5"
          onClick={openConnectionsTab}
        >
          Go to Connections Page
        </Button>
      </div>
    </>
  );
}

export default Goto;
