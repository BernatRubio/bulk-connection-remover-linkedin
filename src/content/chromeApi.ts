import addCheckboxes from "./addCheckboxes.ts";
import removeConnections from "./removeConnections.ts";

async function getTabId(): Promise<number | undefined> {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs[0].id;
}

export async function getTabUrl(): Promise<string | undefined> {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs[0].url;
}

export async function openConnectionsTab() {
  const url = "https://www.linkedin.com/mynetwork/invite-connect/connections/";
  chrome.tabs.create({ url: url });
}

export async function injectCheckboxes() {
  const tabId = await getTabId();
  if (!tabId) return;

  chrome.scripting.executeScript({
    target: { tabId },
    func: addCheckboxes,
  });
}

export async function injectRemove(waitTime: number) {
  const tabId = await getTabId();
  if (!tabId) return;

  chrome.scripting.executeScript({
    target: { tabId },
    func: removeConnections,
    args: [waitTime],
  });
}
