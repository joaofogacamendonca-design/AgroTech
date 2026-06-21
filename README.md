# 🌱 Terras Futuras: Tecnologia Sustentável

> **Projeto desenvolvido para o Concurso Agrinho 2026** > 🎓 **Categoria:** 1º Ano do Ensino Médio (Paraná)  
> 🌾 **Foco:** Conectando inovação digital, inteligência artificial e preservação ambiental no campo paranaense.

---

## 📋 Sobre o Projeto

O **Terras Futuras** é um site institucional e interativo focado em demonstrar como a tecnologia de ponta pode transformar a agricultura familiar e o agronegócio de forma ética e ecológica. O objetivo principal é destacar o protagonismo do jovem do Ensino Médio na transição digital do campo no estado do Paraná, utilizando práticas como o Manejo Integrado de Pragas, Plantio Direto e conectividade rural.

---

## 🛠️ Tecnologias Utilizadas

O desenvolvimento do ecossistema do site foi baseado na tríade padrão da Web, priorizando desempenho, acessibilidade e design responsivo moderno:

* **HTML5:** Estruturação semântica de todo o conteúdo (cabeçalhos, seções, artigos e rodapé), garantindo melhor indexação e acessibilidade.
* **CSS3 Moderno:** * **CSS Variables (Custom Properties):** Utilizado para padronizar a paleta de cores (Verde Sustentável, Azul Tecnológico e Grafite Legível).
    * **Flexbox e CSS Grid:** Implementados para a criação de layouts dinâmicos e alinhamentos complexos (como os cards de pilares e o grid de estatísticas).
    * **Responsividade (Media Queries):** Adaptação completa da interface para dispositivos móveis (smartphones e tablets).
    * **Efeitos Visuais:** Uso de `backdrop-filter: blur()` para o efeito de vidro fosco (*glassmorphism*) no menu superior.
* **JavaScript (Vanilla JS):** Lógica pura (sem frameworks externos) para garantir leveza e velocidade:
    * Manipulação do DOM para efeitos de sombreamento dinâmico no cabeçalho durante a rolagem (*scroll*).
    * Algoritmo de monitoramento de posição na tela para destacar automaticamente o menu de navegação de acordo com a seção visível.
    * Validação de formulário assíncrona com simulação de envio de dados (*feedback loop*) usando `setTimeout` e transições de opacidade por código.

---

## 📂 Estrutura de Arquivos

O projeto está organizado de forma simples e modular:

```text
├── index.html     # Estrutura de conteúdo e seções do site
├── style.css      # Estilização, variáveis de cores e regras de responsividade
└── script.js      # Lógicas de interatividade e simulação do formulário
