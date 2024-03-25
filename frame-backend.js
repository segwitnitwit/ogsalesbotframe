// server.mjs
import express from 'express';

const app = express();

// Endpoint to generate dynamic HTML content
app.get('/dynamic-frame', (req, res) => {
  // Extract the dynamic token ID from query parameters
  const { tokenId } = req.query;

  // Construct the dynamic target URL based on the token ID
  const targetUrl = `https://opensea.io/assets/base/0xa449b4f43d9a33fcdcf397b9cc7aa909012709fd/${tokenId}`;

  // Generate the HTML content with the dynamic target URL
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Dynamic Frame</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.seadn.io/s/raw/files/d4750a957e99ba0a3e586397cbd29ef4.gif?auto=format&dpr=1&w=3840" />
        <meta property="fc:frame:button:1" content="View on OpenSea" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="${targetUrl}" />
    </head>
    <body>
        <!-- No content needed in the body -->
    </body>
    </html>
  `;

  // Send the HTML content as the response
  res.send(htmlContent);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
