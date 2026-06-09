const crops = [
  {
    id: "soja",
    name: "Soja",
    icon: "🌱",
    image: "assets/crop-soja.png",
    description: "Principal cultura de exportação do Brasil, utilizada na produção de alimentos, óleo vegetal e ração animal.",
    highlight: ["Maior produto agrícola exportado pelo Brasil.", "Fundamental para a economia nacional."]
  },
  {
    id: "milho",
    name: "Milho",
    icon: "🌽",
    image: "assets/crop-milho.png",
    description: "Uma das culturas mais produzidas do país, essencial para alimentação humana, animal e biocombustíveis.",
    highlight: ["Base da cadeia pecuária.", "Alta importância para o mercado interno e externo."]
  },
  {
    id: "cafe",
    name: "Café",
    icon: "☕",
    image: "assets/crop-cafe.png",
    description: "O Brasil é um dos maiores produtores e exportadores de café do mundo, reconhecido pela qualidade dos grãos.",
    highlight: ["Produto tradicional da agricultura brasileira.", "Grande relevância econômica e cultural."]
  },
  {
    id: "cana",
    name: "Cana-de-açúcar",
    icon: "🎋",
    image: "assets/crop-cana.png",
    description: "Matéria-prima para açúcar, etanol e energia renovável, sendo uma das culturas mais estratégicas do país.",
    highlight: ["Importante para o setor energético.", "Forte participação nas exportações brasileiras."]
  }
];

const problems = {
  acidez: {
    label: "Solo ácido",
    investment: "Médio",
    returnTime: "6 a 12 meses",
    current: 68,
    corrected: 92,
    indicators: [
      ["Umidade", "42%", "Dentro da faixa de atenção"],
      ["pH", "4,8", "Abaixo do ideal"],
      ["Compactação", "Alta", "Limita raízes e água"],
      ["Matéria Orgânica", "Baixa", "Reduz atividade biológica"]
    ],
    problems: ["Solo ácido", "Compactação elevada", "Baixa matéria orgânica"],
    solutions: [
      ["Calagem", "Corrige a acidez do solo e melhora a disponibilidade de nutrientes."],
      ["Plantio direto", "Melhora a conservação do solo e reduz perdas por erosão."],
      ["Rotação de culturas", "Ajuda na recuperação da fertilidade e no equilíbrio biológico."]
    ],
    impacts: ["Redução da produtividade", "Menor absorção de nutrientes", "Aumento dos custos de produção"],
    expected: ["Maior produtividade", "Melhor absorção de nutrientes", "Redução de perdas"],
    environmental: ["Menor erosão", "Menor uso de fertilizantes", "Melhor retenção de água"]
  },
  compactacao: {
    label: "Compactação elevada",
    investment: "Médio a Alto",
    returnTime: "8 a 14 meses",
    current: 61,
    corrected: 88,
    indicators: [
      ["Umidade", "35%", "Infiltração irregular"],
      ["pH", "5,4", "Próximo do adequado"],
      ["Compactação", "Muito alta", "Raízes com baixa expansão"],
      ["Matéria Orgânica", "Média", "Precisa de cobertura"]
    ],
    problems: ["Compactação elevada", "Baixa infiltração de água", "Risco de erosão superficial"],
    solutions: [
      ["Escarificação controlada", "Rompe camadas adensadas sem revolver excessivamente o solo."],
      ["Plantas de cobertura", "Raízes auxiliam na descompactação biológica."],
      ["Tráfego controlado", "Reduz a pressão de máquinas sobre áreas produtivas."]
    ],
    impacts: ["Menor desenvolvimento radicular", "Aumento da irrigação necessária", "Redução do vigor da lavoura"],
    expected: ["Raízes mais profundas", "Melhor infiltração de água", "Menor falha de desenvolvimento"],
    environmental: ["Menor escoamento superficial", "Mais conservação de água", "Menor erosão"]
  },
  materia: {
    label: "Baixa matéria orgânica",
    investment: "Baixo a Médio",
    returnTime: "12 a 18 meses",
    current: 64,
    corrected: 90,
    indicators: [
      ["Umidade", "39%", "Baixa retenção"],
      ["pH", "5,2", "Requer monitoramento"],
      ["Compactação", "Média", "Moderada"],
      ["Matéria Orgânica", "Baixa", "Atividade biológica reduzida"]
    ],
    problems: ["Baixa matéria orgânica", "Menor retenção de água", "Baixa atividade microbiológica"],
    solutions: [
      ["Adubação verde", "Aumenta a biomassa e melhora a estrutura do solo."],
      ["Compostagem", "Eleva a matéria orgânica e favorece microrganismos benéficos."],
      ["Cobertura permanente", "Protege o solo e reduz perdas de nutrientes."]
    ],
    impacts: ["Menor estabilidade dos agregados", "Baixa eficiência nutricional", "Maior sensibilidade à seca"],
    expected: ["Solo mais estruturado", "Maior retenção de umidade", "Aumento gradual da produtividade"],
    environmental: ["Captura de carbono", "Uso consciente de insumos", "Mais biodiversidade no solo"]
  }
};

const knowledge = [
  {
    title: "Calagem",
    what: "Corrige a acidez do solo e melhora a disponibilidade de nutrientes para as plantas.",
    benefits: ["Reduz acidez", "Aumenta eficiência de adubação", "Favorece raízes"],
    investment: "Médio",
    return: "Médio prazo",
    impact: "Reduz degradação do solo e favorece a conservação da água."
  },
  {
    title: "Plantio Direto",
    what: "Sistema de cultivo onde o solo não é revolvido e resíduos da cultura anterior formam cobertura protetora.",
    benefits: ["Reduz erosão", "Conserva umidade", "Diminui perdas de nutrientes"],
    investment: "Médio",
    return: "Médio prazo",
    impact: "Reduz degradação e favorece conservação da água."
  },
  {
    title: "Rotação de Culturas",
    what: "Alterna diferentes espécies na mesma área para evitar cultivo contínuo de uma única cultura.",
    benefits: ["Melhora fertilidade", "Reduz pragas e doenças", "Aumenta biodiversidade"],
    investment: "Médio",
    return: "Médio prazo",
    impact: "Promove equilíbrio natural do ecossistema agrícola."
  },
  {
    title: "ILPF",
    what: "Integra lavoura, pecuária e floresta em um sistema planejado e sustentável.",
    benefits: ["Recupera o solo", "Diversifica produção", "Reduz erosão", "Captura carbono"],
    investment: "Médio a Alto",
    return: "Médio a Longo prazo",
    impact: "Contribui para redução de gases de efeito estufa."
  },
  {
    title: "Plantas de Cobertura",
    what: "Plantas cultivadas para proteger o solo entre safras e melhorar sua qualidade física, química e biológica.",
    benefits: ["Proteção contra erosão", "Aumento da matéria orgânica", "Melhor retenção de água", "Controle natural de plantas daninhas"],
    investment: "Baixo a Médio",
    return: "Médio prazo",
    impact: "Favorece conservação do solo e da água."
  }
];

const sustainability = [
  {
    title: "Agricultura Sustentável",
    subtitle: "O que é?",
    text: "Produz alimentos de forma eficiente, preservando solo, água e recursos naturais.",
    items: ["Conservação ambiental", "Maior produtividade a longo prazo", "Redução da degradação do solo"]
  },
  {
    title: "Plantio Direto",
    subtitle: "Benefícios",
    text: "Mantém cobertura no solo, reduz erosão e melhora a retenção de água.",
    items: ["Menor erosão", "Maior retenção de água", "Aumento da matéria orgânica"]
  },
  {
    title: "ILPF",
    subtitle: "Integração produtiva",
    text: "Combina agricultura, pecuária e árvores na mesma área para gerar benefícios econômicos e ambientais.",
    items: ["Recuperação do solo", "Integração entre atividades", "Captura de carbono"]
  },
  {
    title: "Agricultura de Baixo Carbono",
    subtitle: "O que é?",
    text: "Sistema que reduz emissões de gases de efeito estufa e promove práticas sustentáveis.",
    items: ["Menor impacto ambiental", "Produção mais eficiente", "Uso consciente de recursos naturais"]
  },
  {
    title: "Pesquisa e Inovação",
    subtitle: "Ciência e tecnologia",
    text: "Instituições de pesquisa desenvolvem soluções que ajudam agricultores a produzir mais preservando o meio ambiente.",
    items: ["Monitoramento inteligente", "Tecnologias sustentáveis", "Decisões baseadas em dados"],
    link: "https://www.embrapa.br/"
  }
];

const state = {
  selectedCrop: "",
  selectedProblem: "",
  simulationVisible: false
};

const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll("[data-page]");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 })
  : null;

function getCrop(id) {
  return crops.find((crop) => crop.id === id) || crops[0];
}

function randomBetween(min, max, decimals = 0) {
  const value = Math.random() * (max - min) + min;
  return Number(value.toFixed(decimals));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDecimal(value) {
  return String(value).replace(".", ",");
}

function generateSensorData(cropId, problemId) {
  const cropOffset = { soja: 0, milho: 3, cafe: -2, cana: 5 }[cropId] || 0;
  const profile = {
    acidez: {
      humidity: [34, 50],
      ph: [4.2, 5.4],
      compaction: [1.05, 1.75],
      organic: [1.2, 2.8],
      baseHealth: [55, 72]
    },
    compactacao: {
      humidity: [26, 43],
      ph: [5.0, 6.2],
      compaction: [1.65, 2.45],
      organic: [1.8, 3.4],
      baseHealth: [48, 68]
    },
    materia: {
      humidity: [30, 47],
      ph: [4.9, 6.0],
      compaction: [1.10, 1.90],
      organic: [0.7, 1.9],
      baseHealth: [52, 70]
    }
  }[problemId];

  const humidity = Math.max(18, randomInt(profile.humidity[0] + cropOffset, profile.humidity[1] + cropOffset));
  const ph = randomBetween(profile.ph[0], profile.ph[1], 1);
  const compaction = randomBetween(profile.compaction[0], profile.compaction[1], 2);
  const organic = randomBetween(profile.organic[0], profile.organic[1], 1);
  const health = Math.max(35, Math.min(88, randomInt(profile.baseHealth[0] + cropOffset, profile.baseHealth[1] + cropOffset)));
  const corrected = Math.min(98, health + randomInt(18, 31));

  return {
    health,
    corrected,
    indicators: [
      ["Umidade", `${humidity}%`, humidity < 32 ? "Abaixo do ideal para absorção" : humidity > 52 ? "Acima da faixa ideal" : "Dentro da faixa de atenção"],
      ["pH", formatDecimal(ph), ph < 5.2 ? "Abaixo do ideal" : "Requer monitoramento"],
      ["Compactação", `${formatDecimal(compaction)} MPa`, compaction > 1.7 ? "Limita raízes e água" : "Moderada"],
      ["Matéria Orgânica", `${formatDecimal(organic)}%`, organic < 2 ? "Atividade biológica reduzida" : "Nível intermediário"]
    ]
  };
}

function generateSimulationData(cropId, problemId, hectares) {
  const sensor = generateSensorData(cropId, problemId);
  const problem = problems[problemId];
  const baseCost = { acidez: [420, 760], compactacao: [580, 980], materia: [260, 620] }[problemId];
  const cropFactor = { soja: 1, milho: 1.08, cafe: 1.18, cana: 1.12 }[cropId] || 1;
  const costPerHectare = Math.round(randomBetween(baseCost[0], baseCost[1]) * cropFactor);
  const totalCost = costPerHectare * hectares;
  const gain = randomInt(12, 34);
  const nutrientGain = randomInt(10, 28);
  const lossReduction = randomInt(15, 38);
  const waterGain = randomInt(8, 24);
  const erosionReduction = randomInt(14, 35);
  const fertilizerReduction = randomInt(6, 18);

  return {
    current: sensor.health,
    corrected: sensor.corrected,
    investment: `${problem.investment} - R$ ${totalCost.toLocaleString("pt-BR")} estimados`,
    returnTime: `${randomInt(5, 10)} a ${randomInt(11, 18)} meses`,
    expected: [
      `Produtividade +${gain}%`,
      `Absorção de nutrientes +${nutrientGain}%`,
      `Redução de perdas ${lossReduction}%`
    ],
    environmental: [
      `Menor erosão ${erosionReduction}%`,
      `Menor uso de fertilizantes ${fertilizerReduction}%`,
      `Retenção de água +${waterGain}%`
    ]
  };
}

function setPage(pageId) {
  const safePage = document.querySelector(`[data-page="${pageId}"]`) ? pageId : "home";
  pages.forEach((page) => page.classList.toggle("active", page.dataset.page === safePage));
  pageLinks.forEach((link) => link.classList.toggle("active", link.dataset.pageLink === safePage));
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  window.location.hash = safePage;
  observeReveals();
}

function createMeter(container, score, mode = "warning") {
  container.innerHTML = "";
  const activeCount = Math.round((score / 100) * 12);
  for (let index = 1; index <= 12; index += 1) {
    const segment = document.createElement("span");
    segment.className = index <= activeCount ? `active ${mode}` : "";
    container.append(segment);
  }
}

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    if (revealObserver) {
      revealObserver.observe(element);
    } else {
      element.classList.add("is-visible");
    }
  });
}

function restartAnimation(element) {
  element.classList.remove("animate-now");
  void element.offsetWidth;
  element.classList.add("animate-now");
}

function hideSimulationResult() {
  state.simulationVisible = false;
  document.querySelector("#simulationResult").classList.add("is-hidden");
}

function setDiagnosticVisible(isVisible) {
  document.querySelector(".diagnostic-layout").classList.toggle("waiting", !isVisible);
  document.querySelector("#indicatorStack").classList.toggle("is-hidden", !isVisible);
  document.querySelector("#attentionBox").classList.toggle("is-hidden", !isVisible);
  document.querySelector("#diagnosticPanels").classList.toggle("is-hidden", !isVisible);
  document.querySelector("#recommendationPanel").classList.toggle("is-hidden", !isVisible);
}

function renderCrops() {
  const cropList = document.querySelector("#cropList");
  cropList.innerHTML = crops.map((crop) => `
    <article class="crop-card reveal fade-up">
      <img src="${crop.image}" alt="${crop.name}">
      <div>
        <div class="crop-title"><span>${crop.icon}</span><span>${crop.name}</span></div>
        <p>${crop.description}</p>
        <p><strong>Destaque:</strong> ${crop.highlight.join(" ")}</p>
      </div>
      <button class="pill-button" type="button" data-analyze="${crop.id}">Analisar Cultura</button>
    </article>
  `).join("");

  cropList.querySelectorAll("[data-analyze]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCrop = button.dataset.analyze;
      document.querySelector("#diagnosticCrop").value = state.selectedCrop;
      hideSimulationResult();
      renderDiagnostic();
      setPage("diagnostico");
    });
  });
  observeReveals();
}

function renderSelects() {
  const cropSelect = document.querySelector("#diagnosticCrop");
  const problemSelect = document.querySelector("#diagnosticProblem");
  cropSelect.innerHTML = `
    <option value="">Selecione uma cultura</option>
    ${crops.map((crop) => `<option value="${crop.id}">${crop.name}</option>`).join("")}
  `;
  problemSelect.innerHTML = `
    <option value="">Selecione o problema principal</option>
    ${Object.entries(problems).map(([id, problem]) => `<option value="${id}">${problem.label}</option>`).join("")}
  `;
  cropSelect.value = state.selectedCrop;
  problemSelect.value = state.selectedProblem;
}

function renderDiagnostic() {
  if (!state.selectedCrop || !state.selectedProblem) {
    setDiagnosticVisible(false);
    const crop = state.selectedCrop ? getCrop(state.selectedCrop).name : "";
    document.querySelector("#diagnosticTitle").textContent = crop ? `Diagnóstico - ${crop}` : "Diagnóstico";
    document.querySelector("#diagnosticCrop").value = state.selectedCrop;
    document.querySelector("#diagnosticProblem").value = state.selectedProblem;
    return;
  }

  const crop = getCrop(state.selectedCrop);
  const problem = problems[state.selectedProblem];
  const sensor = generateSensorData(state.selectedCrop, state.selectedProblem);
  const health = sensor.health;
  const loss = 100 - health;

  document.querySelector("#diagnosticCrop").value = state.selectedCrop;
  document.querySelector("#diagnosticProblem").value = state.selectedProblem;
  document.querySelector("#diagnosticTitle").textContent = `Diagnóstico - ${crop.name}`;
  document.querySelector("#healthLabel").textContent = `Saúde do Solo: ${health}%`;
  document.querySelector("#situationLabel").textContent = health < 65 ? "Situação: Crítica" : "Situação: Atenção";
  document.querySelector("#currentYield").textContent = `${health}%`;
  document.querySelector("#lossEstimate").textContent = `${loss}%`;

  document.querySelector("#indicatorStack").innerHTML = sensor.indicators.map(([name, value, note]) => `
    <article class="indicator">
      <strong><span>${name}</span><span>${value}</span></strong>
      <span>${note}</span>
    </article>
  `).join("");

  document.querySelector("#problemList").innerHTML = problem.problems.map((item, index) => `
    <li class="${index === 2 ? "low" : ""}">${item}</li>
  `).join("");

  document.querySelector("#impactList").innerHTML = problem.impacts.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#solutionList").innerHTML = problem.solutions.map(([title, text]) => `
    <article class="solution">
      <strong>${title}</strong>
      <p>${text}</p>
      <button type="button" data-page-link="conhecimento">O que é?</button>
    </article>
  `).join("");

  createMeter(document.querySelector("#soilMeter"), health, health > 80 ? "success" : "warning");
  setDiagnosticVisible(true);
  restartAnimation(document.querySelector("#indicatorStack"));
  restartAnimation(document.querySelector(".diagnostic-problems"));
  restartAnimation(document.querySelector("#recommendationPanel"));
}

function renderKnowledge() {
  const table = document.querySelector("#knowledgeTable");
  table.innerHTML = knowledge.map((item) => `
    <article class="knowledge-column">
      <h3>${item.title}</h3>
      <div><strong>O que é?</strong><p>${item.what}</p></div>
      <div><strong>Benefícios</strong><ul>${item.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}</ul></div>
      <div><strong>Investimento</strong><p>💰 ${item.investment}</p></div>
      <div><strong>Tempo de Retorno</strong><p>⏳ ${item.return}</p></div>
      <div><strong>Impacto Ambiental</strong><p>🌎 ${item.impact}</p></div>
    </article>
  `).join("");
}

function renderSimulatorOptions() {
  const cropOptions = document.querySelector("#simCropOptions");
  const problemOptions = document.querySelector("#simProblemOptions");

  cropOptions.innerHTML = crops.map((crop) => `
    <button class="option-btn ${crop.id === state.selectedCrop ? "active" : ""}" type="button" data-sim-crop="${crop.id}">${crop.name}</button>
  `).join("");

  problemOptions.innerHTML = Object.entries(problems).map(([id, problem]) => `
    <button class="option-btn ${id === state.selectedProblem ? "active" : ""}" type="button" data-sim-problem="${id}">${problem.label}</button>
  `).join("");

  cropOptions.querySelectorAll("[data-sim-crop]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCrop = button.dataset.simCrop;
      renderSimulatorOptions();
      renderDiagnostic();
      hideSimulationResult();
    });
  });

  problemOptions.querySelectorAll("[data-sim-problem]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedProblem = button.dataset.simProblem;
      document.querySelector("#diagnosticProblem").value = state.selectedProblem;
      renderSimulatorOptions();
      renderDiagnostic();
      hideSimulationResult();
    });
  });
}

function runSimulation() {
  if (!state.selectedCrop || !state.selectedProblem) {
    hideSimulationResult();
    return;
  }

  const hectares = Number(document.querySelector("#hectares").value);
  const simulation = generateSimulationData(state.selectedCrop, state.selectedProblem, hectares);
  const resultPanel = document.querySelector("#simulationResult");

  document.querySelector("#investmentLevel").textContent = simulation.investment;
  document.querySelector("#returnTime").textContent = simulation.returnTime;
  document.querySelector("#expectedBenefits").innerHTML = simulation.expected.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#environmentBenefits").innerHTML = simulation.environmental.map((item) => `<li>${item}</li>`).join("");
  createMeter(document.querySelector("#currentBar"), simulation.current, "warning");
  createMeter(document.querySelector("#correctedBar"), simulation.corrected, "success");
  state.simulationVisible = true;
  resultPanel.classList.remove("is-hidden");
  restartAnimation(resultPanel);
}

function renderSustainability() {
  const grid = document.querySelector("#sustainabilityGrid");
  grid.innerHTML = sustainability.map((item) => `
    <article class="sustainability-card">
      <h3>${item.title}</h3>
      <strong>${item.subtitle}</strong>
      <p>${item.text}</p>
      <ul>${item.items.map((benefit) => `<li>${benefit}</li>`).join("")}</ul>
      ${item.link ? `<a class="sustainability-link" href="${item.link}" target="_blank" rel="noopener noreferrer">Acessar Embrapa</a>` : ""}
    </article>
  `).join("");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-page-link]");
  if (!link) return;
  event.preventDefault();
  setPage(link.dataset.pageLink);
});

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("#diagnosticCrop").addEventListener("change", (event) => {
  state.selectedCrop = event.target.value;
  renderSimulatorOptions();
  renderDiagnostic();
  hideSimulationResult();
});

document.querySelector("#diagnosticProblem").addEventListener("change", (event) => {
  state.selectedProblem = event.target.value;
  renderSimulatorOptions();
  renderDiagnostic();
  hideSimulationResult();
});

document.querySelector("#hectares").addEventListener("input", (event) => {
  document.querySelector("#hectareValue").textContent = event.target.value;
  if (state.simulationVisible) {
    runSimulation();
  }
});

document.querySelector("#runSimulation").addEventListener("click", runSimulation);

renderCrops();
renderSelects();
renderDiagnostic();
renderKnowledge();
renderSimulatorOptions();
renderSustainability();
hideSimulationResult();
setPage((window.location.hash || "#home").replace("#", ""));
