import { useFetchWrapper } from "../util";

function useNestyChatActions() {
  const baseUrlP = "/api"; // protected
  const fetchWrapper = useFetchWrapper();

  return {
    sendMessage,
  };

  // protected routes
  async function sendMessage(message) {
    try {
      const overallRoute = `${baseUrlP}/answer-questions`;
      const serializedQuestion = { question: message };
      const { data: response } = await fetchWrapper.post(overallRoute, serializedQuestion);
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export { useNestyChatActions };
