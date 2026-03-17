exports.handler = async function () {
  const SHEET_ID   = process.env.SHEET_ID   || "1zp_K5X3Xcl4C7X-hg0UdznYofdoW1A8Q7GP7wE6bx88";
  const GID        = process.env.SHEET_GID   || "0";
  const url        = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

  try {
    const response = await fetch(url, { redirect: "follow" });
    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "No se pudo acceder a la hoja. Verificá que esté publicada públicamente." }),
      };
    }
    const csv = await response.text();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
      },
      body: csv,
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Error interno: " + e.message }),
    };
  }
};
