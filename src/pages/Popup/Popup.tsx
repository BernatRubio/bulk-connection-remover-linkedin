import Connections from "../Connections/Connections";
import Goto from "../Goto/Goto";
import { getTabUrl } from "../../content/chromeApi";
import { useEffect, useState } from "react";

function Popup() {
  const [isConnections, setIsConnections] = useState(false);

  useEffect(() => {
    async function checkConnectionsPage() {
      const url =
        "https://www.linkedin.com/mynetwork/invite-connect/connections/";
      const tabUrl = await getTabUrl();

      setIsConnections(tabUrl === url);
    }

    checkConnectionsPage();
  }, []);

  if (isConnections) {
    return (
      <>
        <div className="p-3 bg-linkedin-bg">
          <h1 className="text-lg text-nowrap text-white">
            Bulk Connection Remover for LinkedIn
          </h1>
          <Connections />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="p-3 bg-linkedin-bg">
          <h1 className="text-lg text-nowrap text-white">
            Bulk Connection Remover for LinkedIn
          </h1>
          <Goto />
        </div>
      </>
    );
  }
}

export default Popup;
