// api/dynamic-frame.js
export default function handler(req, res) {
  // Extract the dynamic token ID from query parameters
  const { tokenId } = req.query;
  const { contractAddress } = req.query;

  // Construct the dynamic target URL based on the token ID
  const targetUrl = `https://opensea.io/assets/base/${contractAddress}/${tokenId}`;

  // Generate the HTML content with the dynamic target URL
  const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Dynamic Frame</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://i.seadn.io/s/raw/files/0051dce5929fe4f195bf98bb20ea7aa0.jpg?auto=format&dpr=1&w=1000" />
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
  res.status(200).send(htmlContent);
}
