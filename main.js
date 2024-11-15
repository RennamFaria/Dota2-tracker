// const heroApi = 'https://api.opendota.com/api/heroes';
const heroApi = 'json/heroes.json';
const icon = document.getElementById('icon');

// https://github.com/mdiller/dotabase?tab=readme-ov-file
//it seans that i need to extract the VPK files to use as image
const baseUrl = '';

//try to use json from the archive instead of api

fetch(heroApi)
  .then(response => {
    if (!response.ok) {
      throw new Error("Problem to get response");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(hero => {
        icon.insertAdjacentHTML('beforeend',
            `
            <tr>
            <td>${hero.id}</td>
            <td>${hero.name}</td>
            <td>${hero.roles}</td>
            <td><img src="${baseUrl + hero.icon}" alt="${hero.name} icon"> </td>
            </tr>
            `
        );
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });