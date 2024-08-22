// Requête POST pour se connecter
export async function postLogin(data) {
  // console.log(data);

  // Fonction fetch avec un objet qui définit le type de requête, le type de contenu et convertit l'objet data en une chaîne JSON pour l'envoyer dans le corps de la requête
  const response = await fetch(import.meta.env.VITE_API_URL + "/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // On convertit la réponse avant de la retourner
  const result = await response.json();
  return result;
}

// Requête POST créer un nouveau profil
export async function postSignUp(data) {
  // console.log(data);
  const response = await fetch(import.meta.env.VITE_API_URL + "/api/v1/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
}

/**
 *  Requête POST pour récupérer les différentes infos du profil à l'aide du token généré à la connexion
 * @param {string} token 
 * @returns {Promise<{
    status: number;
    "message": string;
    "body": {
      "email": string;
      "firstName": string;
      "lastName": string;
      "createdAt": string;
      "updatedAt": string;
      "id": string;
    }}>}
 */
export async function postProfile(token) {
  // console.log(token);
  const response = await fetch(import.meta.env.VITE_API_URL + "/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const tokenResult = await response.json();
  return tokenResult;
}

// Requête PUT permettant d'éditer le nom et prénom de l'utilisateur, à l'aide du token généré à la connexion
export async function putProfile(data, token) {
  const response = await fetch(import.meta.env.VITE_API_URL + "/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  const tokenResult = await response.json();
  return tokenResult;
}
