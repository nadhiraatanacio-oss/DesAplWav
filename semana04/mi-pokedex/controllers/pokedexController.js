// "Base de datos" en memoria
const pokemones = [];

const home = (req, res) => {
    res.render("home", { title: "Mi Pokédex", pokemones });
};

const addPokemon = (req, res) => {
    const { nombre, tipo, nivel, vida, habilidad } = req.body;

    pokemones.push({ nombre, tipo, nivel, vida, habilidad });

    res.redirect("/");
};

const pokedexController = {
    home,
    addPokemon
};

module.exports = pokedexController;