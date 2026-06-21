/**
 * Projeto Agrinho 2026 - Paraná
 * Módulo: Calculadora Interativa de Impacto Ambiental AgroTech
 * Descrição: Processamento dinâmico com práticas sustentáveis configuráveis.
 */

document.addEventListener("DOMContentLoaded", () => {
    const inputHectares = document.getElementById("hectares");
    const checkboxPraticas = document.querySelectorAll('input[name="praticas"]');
    const botaoSimular = document.getElementById("btnSimular");
    const containerResultado = document.getElementById("resultadoSimulacao");

    // Configuração de impacto por prática sustentável (multiplicadores e valores base)
    const praticasSustentaveis = {
        sensores: {
            nome: "Sensores IoT",
            agua: 1.2,      // 20% mais economia
            co2: 1.15,      // 15% mais redução
            quimicos: 1.3   // 30% mais economia
        },
        drones: {
            nome: "Pulverização com Drones",
            agua: 1.0,
            co2: 1.1,       // 10% mais redução (menos combustível)
            quimicos: 1.5   // 50% mais economia (aplicação precisa)
        },
        bigdata: {
            nome: "Big Data",
            agua: 1.25,     // 25% mais economia
            co2: 1.2,       // 20% mais redução
            quimicos: 1.1   // 10% mais economia
        },
        rotacao: {
            nome: "Rotação de Culturas",
            agua: 1.1,
            co2: 1.25,      // 25% mais (sequestro natural)
            quimicos: 1.2   // 20% mais economia
        },
        ilpf: {
            nome: "Integração Lavoura-Pecuária-Floresta",
            agua: 1.15,
            co2: 1.4,       // 40% mais (sequestro florestal)
            quimicos: 1.0
        },
        compostagem: {
            nome: "Compostagem",
            agua: 1.0,
            co2: 1.3,       // 30% mais redução
            quimicos: 1.15  // 15% mais economia
        }
    };

    // Valores base por hectare/ano
    const valoresBase = {
        agua: 15000,       // 15.000 litros por hectare
        co2: 420,          // 420 kg por hectare
        quimicos: 25       // 25 litros por hectare
    };

    // Função para calcular impacto com base nas práticas selecionadas
    function calcularImpacto() {
        const hectares = parseFloat(inputHectares.value) || 100;
        const praticasSelecionadas = Array.from(checkboxPraticas)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Inicializar multiplicadores
        let multiplicadoresFinais = {
            agua: 1,
            co2: 1,
            quimicos: 1
        };

        // Aplicar multiplicadores de cada prática selecionada
        praticasSelecionadas.forEach(pratica => {
            if (praticasSustentaveis[pratica]) {
                const config = praticasSustentaveis[pratica];
                multiplicadoresFinais.agua *= config.agua;
                multiplicadoresFinais.co2 *= config.co2;
                multiplicadoresFinais.quimicos *= config.quimicos;
            }
        });

        // Calcular valores finais
        const impacto = {
            agua: Math.round(hectares * valoresBase.agua * multiplicadoresFinais.agua),
            co2: Math.round(hectares * valoresBase.co2 * multiplicadoresFinais.co2),
            quimicos: Math.round(hectares * valoresBase.quimicos * multiplicadoresFinais.quimicos)
        };

        return { hectares, impacto, praticasSelecionadas };
    }

    // Função para formatar números em padrão brasileiro
    const formatarNumero = (valor) => valor.toLocaleString('pt-BR');

    // Event listener para o botão simular
    botaoSimular.addEventListener("click", () => {
        // Estado de carregamento
        botaoSimular.disabled = true;
        botaoSimular.style.backgroundColor = "#64748b";
        botaoSimular.innerText = "Processando dados... ⏳";

        containerResultado.className = "resultado-exibido";
        containerResultado.innerHTML = `<p style="text-align: center; color: #64748b; font-size: 0.9rem; letter-spacing: 0.2px;">🔄 Analisando dados de satélite e sensores IoT...</p>`;

        // Simular delay de processamento (1.2 segundos)
        setTimeout(() => {
            const { hectares, impacto, praticasSelecionadas } = calcularImpacto();

            // Gerar descrições das práticas selecionadas
            const descPraticas = praticasSelecionadas
                .map(p => praticasSustentaveis[p].nome)
                .join(", ") || "Nenhuma prática selecionada";

            // Renderizar resultados
            containerResultado.innerHTML = `
                <div style="padding-bottom: 14px; margin-bottom: 14px; border-bottom: 2px solid #bbf7d0;">
                    <span style="background: #16a34a; color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 600; uppercase; letter-spacing: 0.5px;">✓ Cálculo Realizado</span>
                    <h4 style="margin-top: 10px; color: #14532d; font-size: 1.1rem;">📊 Impacto Ambiental Anual</h4>
                </div>

                <div class="resultado-metrica">
                    <h5>Recursos Hídricos Preservados</h5>
                    <div class="valor">💧 ${formatarNumero(impacto.agua)} L</div>
                    <div class="descricao">De água economizada no lençol freático por ano (${hectares} ha)</div>
                </div>

                <div class="resultado-metrica">
                    <h5>Carbono Atmosférico Evitado</h5>
                    <div class="valor">🌍 ${formatarNumero(impacto.co2)} kg</div>
                    <div class="descricao">De CO₂ reduzido por práticas otimizadas por ano</div>
                </div>

                <div class="resultado-metrica">
                    <h5>Defensivos Químicos Reduzidos</h5>
                    <div class="valor">🧪 ${formatarNumero(impacto.quimicos)} L</div>
                    <div class="descricao">De químicos poupados através de aplicação cirúrgica</div>
                </div>

                <div class="resultado-resumo">
                    <strong>🌱 Resumo das Práticas Selecionadas:</strong>
                    <p>${descPraticas}</p>
                    <p style="margin-top: 10px; font-size: 0.85rem; font-style: italic; color: #475569;">
                        Combinando essas técnicas em uma fazenda de ${hectares} hectare(s), sua propriedade alcançará máxima sustentabilidade com impacto positivo documentado.
                    </p>
                </div>
            `;

            // Atualizar botão
            botaoSimular.innerText = "Recalcular Impacto ✔";
            botaoSimular.style.backgroundColor = "#16a34a";
            botaoSimular.disabled = false;
        }, 1200);
    });

    // Atualizar cálculo em tempo real quando mudar hectares ou práticas
    inputHectares.addEventListener("change", () => {
        if (containerResultado.classList.contains("resultado-exibido")) {
            botaoSimular.click();
        }
    });

    checkboxPraticas.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (containerResultado.classList.contains("resultado-exibido")) {
                botaoSimular.click();
            }
        });
    });
});

