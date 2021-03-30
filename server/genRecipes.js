const fetch = require('node-fetch');
const fs = require('fs');

async function genRecipes() {
  let urlEnd = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
  let a_code = 97;
  let arr = [];
  
  let file = fs.readFileSync('resources/recipes.json', (err,data) => {});
  if (file.length > 0) {
    fs.writeFileSync('resources/recipes.json', '', function() {console.log('done')});
  }

  for (let i = 0; i < 26; i++) {
    let json = await fetch(urlEnd + String.fromCharCode(i + a_code))
      .then(res => res.json());

    let meals = json.meals;
    
    if (meals == null)
      continue;

    for (let j = 0; j < Object.keys(meals).length; j++) {
      arr.push({
        idMeal: meals[j].idMeal,
        strMeal: meals[j].strMeal
      });
    }
  }

  fs.appendFile('resources/recipes.json', JSON.stringify(arr), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

exports.genRecipes = genRecipes;
