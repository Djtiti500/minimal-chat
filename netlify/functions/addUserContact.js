// netlify/functions/addContact.js
exports.handler = async function(event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = JSON.parse(event.body);
    const { name, email, phone } = data;

    // Ici tu ajouterais la logique pour sauvegarder le contact dans une base de données
    console.log("Nouveau contact :", name, email, phone);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Contact ajouté avec succès !" }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
