const axios = require('axios');

// View our quick start guide to get your API key and version ID:
// https://www.voiceflow.com/api/dialog-manager#section/Quick-Start
const apiKey = 'VF.6136449a10a213001bc1747a.etwJBxQAVi878Dx3suzvEmVjAdfgjw8Cb32n3m0IsA';
const versionID = '60a4e6a2fff4d000079c3f67';

const userID = 'user_123'; // Unique ID used to track conversation state
const userInput = 'Hello world!'; // User's message to your Voiceflow project

const body = {
  request: {
    type: 'text',
    payload: userInput,
  },
};

async function startInteract() {
  // Start a conversation
  const response = await axios({
    method: 'POST',
    baseURL: 'https://general-runtime.voiceflow.com',
    url: `/state/${versionID}/user/${userID}/interact`,
    headers: {
      Authorization: apiKey,
    },
    data: body,
  });

  // Log the response
  console.log(response.data);
}

startInteract().catch((error) => console.error(error));
