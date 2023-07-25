function createGame(player1, countryName1, hour, player2, countryName2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

    <ul>
      <li>
        <h3>${countryName1}</h3> 
        <h3>${countryName2}</h3>
      </li>
    </ul>

  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/07",
    "quinta",
    createGame("new-zealand", "Nova Zelândia", "04:00", "noruega", "Noruega") +
      createGame("austrália", "Austrália", "07:00", "irlanda", "Irlanda") +
      createGame("nigeria", "Nigéria", "23:30", "canadá", "Canadá")
  ) +
  createCard(
    "21/07",
    "sexta",
    createGame("filipinas", "Filipinas", "2:00", "suiça", "Suiça") +
      createGame("espanha", "Espanha", "4:30", "costa-rica", "Costa Rica") +
      createGame("estados-unidos", "EUA", "22:00", "vietna", "Vietnã")
  ) +
  createCard(
    "22/07",
    "sábado",
    createGame("zambia", "Zambia", "4:00", "japão", "Japão") +
      createGame("inglaterra", "Inglaterra", "6:30", "haiti", "Haiti") +
      createGame("dinamarca", "Dinamarca", "9:00", "china", "China")
  ) +
  createCard(
    "23/07",
    "domingo",
    createGame("suecia", "Suécia", "2:00", "africa-do-sul", "África Do Sul") +
      createGame(
        "paises-baixos",
        "Países Baixos",
        "4:30",
        "portugal",
        "Portugal"
      ) +
      createGame("frança", "França", "10:00", "jamaica", "Jamaica")
  ) +
  createCard(
    "24/07",
    "segunda",
    createGame("italia", "Itália", "3:00", "argentina", "Argentina") +
      createGame("alemanha", "Alemanha", "5:30", "marrocos", "Marrocos") +
      createGame("brasil", "Brasil", "8:00", "panamá", "Panamá") +
      createGame(
        "colômbia",
        "Colômbia",
        "23:00",
        "coréia-do-sul",
        "Coréia Do Sul"
      )
  ) +
  createCard(
    "25/07",
    "terça",
    createGame(
      "new-zealand",
      "Nova Zelândia",
      "2:30",
      "filipinas",
      "Filipinas"
    ) + createGame("suiça", "Suiça", "5:00", "noruega", "Noruega")
  ) +
  createCard(
    "26/07",
    "quarta",
    createGame("japão", "Japão", "2:00", "costa-rica", "Costa Rica") +
      createGame("espanha", "Espanha", "4:30", "zambia", "Zâmbia") +
      createGame("canadá", "Canadá", "9:00", "irlanda", "Irlanda") +
      createGame(
        "estados-unidos",
        "EUA",
        "22:00",
        "paises-baixos",
        "Países-Baixos"
      )
  ) +
  createCard(
    "27/07",
    "quinta",
    createGame("portugal", "Portugal", "4:30", "vietna", "Vietnã") +
      createGame("austrália", "Austrália", "7:00", "nigeria", "Nigéria") +
      createGame(
        "argentina",
        "Argentina",
        "12:00",
        "africa-do-sul",
        "África Do Sul"
      )
  ) +
  createCard(
    "28/07",
    "sexta",
    createGame("inglaterra", "Inglaterra", "5:30", "dinamarca", "Dinamarca") +
      createGame("china", "China", "8:00", "haiti", "Haiti")
  ) +
  createCard(
    "29/07",
    "sábado",
    createGame("suecia", "Suécia", "4:30", "italia", "Itália") +
      createGame("frança", "França", "7:00", "brasil", "Brasil") +
      createGame("panamá", "Panamá", "9:30", "jamaica", "Jamaica")
  ) +
  createCard(
    "30/07",
    "domingo",
    createGame(
      "coréia-do-sul",
      "Coréia-Do-sul",
      "1:30",
      "marrocos",
      "Marrocos"
    ) +
      createGame("noruega", "Noruega", "4:00", "filipinas", "Filipinas") +
      createGame("suiça", "Suiça", "4:00", "new-zealand", "Nova-Zelândia") +
      createGame("alemanha", "Alemanha", "6:30", "colômbia", "Colômbia")
  ) +
  createCard(
    "31/07",
    "segunda",
    createGame("japão", "Japão", "4:00", "espanha", "Espanha") +
      createGame("costa-rica", "Costa-Rica", "4:00", "zambia", "Zâmbia") +
      createGame("canadá", "Canadá", "7:00", "austrália", "Austrália") +
      createGame("irlanda", "Irlanda", "7:00", "nigeria", "Nigéria")
  ) +
  createCard(
    "01/08",
    "terça",
    createGame("portugal", "Portugal", "4:00", "estados-unidos", "EUA") +
      createGame("vietna", "Vietnâ", "4:00", "paises-baixos", "Países Baixos") +
      createGame("haiti", "Haiti", "8:00", "dinamarca", "Dinamarca") +
      createGame("china", "China", "8:00", "inglaterra", "Inglaterra")
  ) +
  createCard(
    "02/08",
    "quarta",
    createGame("africa-do-sul", "África-Do-Sul", "4:00", "italia", "Itália") +
      createGame("argentina", "Argentina", "4:00", "suecia", "Suécia") +
      createGame("panamá", "Panamá", "7:00", "frança", "França") +
      createGame("jamaica", "Jamaica", "7:00", "brasil", "Brasil")
  ) +
  createCard(
    "03/08",
    "quinta",
    createGame(
      "coréia-do-sul",
      "Coréia-Do-Sul",
      "7:00",
      "alemanha",
      "Alemanha"
    ) + createGame("marrocos", "Marrocos", "7:00", "colômbia", "Colômbia")
  )
