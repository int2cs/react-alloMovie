export const dateFormat = (date) => {
  const [y, m, d] = date.split("-");
  return [d, m, y].join("/");
};

export const isSameArray = (a1, a2) => {
  let i = a1.length;
  if (i !== a2.length) return false;

  while (i--) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

export const getGenres = (arr) => {
  let response = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 28:
        response.push(`Action`);
        break;
      case 12:
        response.push(`Aventure`);
        break;
      case 16:
        response.push(`Animation`);
        break;
      case 35:
        response.push(`Comédie`);
        break;
      case 80:
        response.push(`Policier`);
        break;
      case 99:
        response.push(`Documentaire`);
        break;
      case 18:
        response.push(`Drame`);
        break;
      case 10751:
        response.push(`Famille`);
        break;
      case 14:
        response.push(`Fantasy`);
        break;
      case 36:
        response.push(`Histoire`);
        break;
      case 27:
        response.push(`Horreur`);
        break;
      case 10402:
        response.push(`Musique`);
        break;
      case 9648:
        response.push(`Mystère`);
        break;
      case 10749:
        response.push(`Romance`);
        break;
      case 878:
        response.push(`Science-fiction`);
        break;
      case 10770:
        response.push(`Téléfilm`);
        break;
      case 53:
        response.push(`Thriller`);
        break;
      case 10752:
        response.push(`Guerre`);
        break;
      case 37:
        response.push(`Western`);
        break;
      default:
        break;
    }
  }

  return response;
};

export const isInFavoris = (id) => {
  return false;
};
