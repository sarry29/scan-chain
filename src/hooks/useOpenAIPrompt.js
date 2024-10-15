import { useEffect, useState } from "react";

function useOpenAIPrompt(
  promptArea,
  promptDesignation,
  isGeneratedTriggerButton,
  setIsGeneratedButton
) {
  const [promptResponse, setPromptResponse] = useState(null);
  const [errorPromptResponse, setErrorPromptResponse] = useState(null);

  const DUMMY_BASE = "https://mocki.io/v1/b81ccc58-3458-4e8b-90ed-dc2fe1c3cb5a";

  const OPENAI_BASE = "https://api.openai.com/v1/chat/completions";
  // using demo@uniqode.com
  const OPENAI_API_KEY =
    "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";

  useEffect(() => {
    if (!promptArea || !promptDesignation || !isGeneratedTriggerButton) return; // Skip if ID is invalid

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a color assistant. Based on the user's input and designation, you will generate and return 3 hex color codes.",
          },
          {
            role: "user",
            content: promptArea,
          },
          {
            role: "user",
            content: `Designation of user is ${promptDesignation}`,
          },
        ],
      }),
    };

    const fetchAIPromptResponse = async () => {
      try {
        // const response = await fetch(`${OPENAI_BASE}`, options);
        const response = await fetch(`${DUMMY_BASE}`);
        const data = await response.json();
        setPromptResponse(data);
      } catch (error) {
        setErrorPromptResponse(error);
      } finally {
        setIsGeneratedButton(false); // Reset the button state
      }
    };

    fetchAIPromptResponse();
  }, [promptArea,promptDesignation,isGeneratedTriggerButton]);
  console.log('HELLO - ',promptResponse);
  return { promptResponse, errorPromptResponse };
}

export default useOpenAIPrompt;
