const axios = require('axios');

// Set up the API endpoint URL
const apiUrl = 'https://api.openai.com/v1/models'//chat/completions';

// Set up your API key
const apiKey = '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';

// Set up the request payload
const payload = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'user', content: 'Who won the world series in 2020?' }
  ]
};

// Set up the request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

fetch('https://api.openai.com/v1/models',{
  headers:{
    'Content-Type': 'application/json',
    'Authorization': "Bearer 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"
  },
  body:JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Who won the world series in 2020?' }
    ]
  })
}).then(res=>console.log(res))


// Send the API request
// axios.post(apiUrl, payload, { headers })
//   .then(response => {
    // Extract the generated response from the API response
    // const generatedResponse = response.data.choices[0].message.content;
    // console.log(response)
    // Process the generated response as needed
    // console.log('Generated Response:', generatedResponse);
  // })
  // .catch(error => {
    // Handle any errors
  //   console.error('Error:', error.message);
  // });
