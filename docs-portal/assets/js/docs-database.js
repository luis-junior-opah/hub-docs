/* ==========================================================================
   ILC INTEGRATOR - BASE DE DADOS COMPLETA E ENRIQUECIDA
   Manual Detalhado do Usuário, Roteiros de Testes Manuais, QA e Devs
   ========================================================================== */

const DOCS_DATABASE = {
  home: {
    id: "home",
    title: "Home",
    subtitle: "Hub Central de Conhecimento: Institucional, Sistema Logístico Integrado, Docs Hub e Governança",
    category: "Governança",
    icon: "🏢",
    summary: "Conheça a ILC Integrator Logistics Company, a arquitetura do Sistema Integrator (do legado JSF aos microserviços e ITs), o propósito deste Docs Hub, os ambientes de acesso e a conformidade com a LGPD.",
    content: `
      <!-- BLOCO 1: INSTITUCIONAL ILC INTEGRATOR LOGISTICS COMPANY -->
      <div class="ilc-hero-banner">
        <div class="ilc-hero-tag">🏢 ILC Integrator Logistics Company • Desde 2016</div>
        <h2 class="ilc-hero-title">Melhore a eficiência da sua cadeia de suprimentos: Gestão integrada, tecnologia e inovação</h2>
        <p class="ilc-hero-desc">
          A <strong>ILC</strong> nasceu em 2016 com a missão de revolucionar a gestão da sua cadeia logística. Somos parceiros estratégicos no planejamento, execução e controle de toda a operação de Supply Chain. Com uma plataforma de web services inovadora, integramos em tempo real cada dado do fluxo logístico, habilitando fornecedores, transportadores e assegurando a excelência no atendimento com acompanhamento personalizado e medição rigorosa de SLA.
        </p>
        <div style="margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="https://ilclog.com.br/" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 600; text-decoration: none; padding: 10px 20px; border-radius: var(--radius-md);">
            <span>🌐 Conhecer Portal Institucional (ilclog.com.br)</span>
            <span style="font-size: 0.8rem;">↗</span>
          </a>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">🎯 Como Atuamos no Mercado</h3>
      <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.95rem;">Os 4 pilares fundamentais que sustentam a atuação da ILC em clientes de alta complexidade:</p>

      <div class="pillars-grid">
        <div class="pillar-card">
          <div class="pillar-icon" style="color: #0052cc;">🔍</div>
          <div class="pillar-title">Imersão & Negócio do Cliente</div>
          <div class="pillar-desc">Conhecer em profundidade o modelo operacional, volumetria, gargalos e necessidades específicas de cada parceiro.</div>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon" style="color: #00a86b;">⚙️</div>
          <div class="pillar-title">Integração Tecnológica 4.0</div>
          <div class="pillar-desc">Integrar tecnologias e barramentos de mensageria para desenvolver soluções logísticas diferenciadas e em tempo real.</div>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon" style="color: #f59e0b;">🏆</div>
          <div class="pillar-title">Melhores Práticas End-to-End</div>
          <div class="pillar-desc">Aplicar metodologias consagradas de mercado para toda a esteira logística: inbound, outbound, pátio e reversa.</div>
        </div>

        <div class="pillar-card">
          <div class="pillar-icon" style="color: #8b5cf6;">📈</div>
          <div class="pillar-title">Eficiência, SLA & Redução de Custos</div>
          <div class="pillar-desc">Processos otimizados visando aumento do nível de serviço (SLA), produtividade da frota e redução contínua de frete.</div>
        </div>
      </div>

      <!-- BLOCO 2: A PLATAFORMA INTEGRATOR (LEGADO, TRANSIÇÃO E GOVERNANÇA POR ITS) -->
      <h2>🚀 A Plataforma Integrator: Legado, Evolução & Normatização</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
        O <strong>ILC Integrator</strong> é o núcleo operacional e a Torre de Controle que conecta clientes, transportadores e centros de distribuição. A plataforma foi construída sobre uma base corporativa estável em <strong>Java JSF / Primefaces</strong> com banco de dados PostgreSQL/Oracle, orquestrando fluxos críticos como Promessas de Entrega, Viagens, Fretes Expressos, Tracking em Tempo Real, Gestão de Pátio e Auditoria de Faturamento.
      </p>

      <div class="card-grid" style="margin-bottom: 28px;">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(0, 82, 204, 0.1); color: var(--ilc-primary);">🏛️</div>
          <h3>1. Arquitetura Estável & Modernização</h3>
          <p>O legado em JSF opera com Beans de sessão, transações ACID e barramentos EDI (NOTFIS, CONEMB, OCOREN), evoluindo em direção a microsserviços Spring Boot e interfaces desacopladas em Angular.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">JSF / Primefaces</span>
            <span class="tag-badge">Angular</span>
            <span class="tag-badge">Spring Boot REST</span>
            <span class="tag-badge">EDI / Webhooks</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(0, 168, 107, 0.1); color: var(--ilc-green);">📋</div>
          <h3>2. Governança por Instruções de Trabalho (ITs)</h3>
          <p>Cada funcionalidade do sistema é estritamente regulamentada por mais de <strong>35 Instruções de Trabalho (ITs)</strong> e Procedimentos Padrão (POPs), divididos em frentes Administrativas (ADM), Operacionais (OPE) e Financeiras (FIN).</p>
          <div class="card-footer-tags">
            <span class="tag-badge">35+ ITs Normatizadas</span>
            <span class="tag-badge">POPs Oficiais</span>
            <span class="tag-badge">Alçadas & Regras</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(245, 158, 11, 0.1); color: var(--ilc-amber);">🛰️</div>
          <h3>3. Torre de Controle & Visibilidade em Tempo Real</h3>
          <p>Rastreamento integrado com principais gerenciadoras de risco (Buonny, AngelLira, GE), telemetria veicular, aplicativo embarcado e emissão automática de alertas de atraso e não-conformidade.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Tracking Satelital</span>
            <span class="tag-badge">Cockpit Logístico</span>
            <span class="tag-badge">Alertas de Risco</span>
          </div>
        </div>
      </div>

      <!-- BLOCO 3: ESTE PORTAL (DOCS HUB - COMO FUNCIONA) -->
      <h2>📖 Sobre este Portal de Documentação (Docs Hub)</h2>
      <div class="callout callout-info">
        <div class="callout-icon">💡</div>
        <div class="callout-content">
          <div class="callout-title">Fonte Única da Verdade (Single Source of Truth)</div>
          Este portal foi concebido para unificar o conhecimento corporativo do ILC Integrator, servindo simultaneamente como <strong>Manual Interativo de Treinamento</strong> para novos usuários, <strong>Roteiro Oficial de Homologação e Testes</strong> para Analistas de QA e <strong>Especificação Técnica e Arquitetural</strong> para Engenheiros de Software.
        </div>
      </div>

      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 20px 0 12px 0;">🏛️ A Tríade de Perspectivas para Cada Módulo</h3>
      <div class="card-grid" style="margin-bottom: 28px;">
        <div class="doc-card" onclick="window.navigateTo('cad_usuarios'); window.setPerspective('user');">
          <div class="card-icon-wrapper" style="background-color: var(--color-user-bg); color: var(--color-user);">👥</div>
          <h3>1. Guia do Usuário</h3>
          <p>Passo a passo operacional ilustrado com funil cognitivo (visão geral ➔ telas ➔ passo a passo ➔ casos de uso reais), focado no dia a dia dos operadores, clientes e gestores.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Tour Visual</span>
            <span class="tag-badge">Casos de Uso</span>
            <span class="tag-badge">Passo a Passo</span>
          </div>
        </div>

        <div class="doc-card" onclick="window.navigateTo('cad_usuarios'); window.setPerspective('qa');">
          <div class="card-icon-wrapper" style="background-color: var(--color-qa-bg); color: var(--color-qa);">🧪</div>
          <h3>2. Qualidade (QA & Testes)</h3>
          <p>Roteiros completos de testes manuais, matriz de validações com mensagens de erro reais do sistema, critérios de aceite (Definition of Done) e cenários em formato BDD / Gherkin.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Roteiro de Teste</span>
            <span class="tag-badge">Mensagens de Erro</span>
            <span class="tag-badge">Gherkin BDD</span>
          </div>
        </div>

        <div class="doc-card" onclick="window.navigateTo('cad_usuarios'); window.setPerspective('dev');">
          <div class="card-icon-wrapper" style="background-color: var(--color-dev-bg); color: var(--color-dev);">💻</div>
          <h3>3. Desenvolvedores</h3>
          <p>Engenharia de software com diagramas de sequência interativos (Pan & Zoom), mapeamento de Managed Beans JSF, schemas de tabelas SQL, catálogo de APIs REST e integrações EDI.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Diagramas Interativos</span>
            <span class="tag-badge">APIs REST</span>
            <span class="tag-badge">Modelo de Dados</span>
          </div>
        </div>
      </div>

      <!-- BLOCO 4: AMBIENTES OPERACIONAIS -->
      <h2>🌐 Ambientes e Acesso Rápido ao Sistema</h2>
      <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.95rem;">Acesse diretamente os ambientes oficiais da plataforma ILC Integrator:</p>

      <div class="env-cards-grid">
        <div class="env-card">
          <div class="env-card-header">
            <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span>🚀</span>
              <span>Ambiente de Produção (PROD)</span>
            </div>
            <span class="env-badge-prod">🟢 Operação Ativa</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">
            Ambiente oficial de operação diária, torre de controle 24/7, emissão de viagens e tracking em tempo real.
          </p>
          <div class="env-url-box">
            <span>https://ilclogportal.com.br/</span>
          </div>
          <a href="https://ilclogportal.com.br/" target="_blank" rel="noopener noreferrer" class="env-link-btn" style="background-color: #00875a;">
            <span>Acessar Produção</span>
            <span style="font-size: 0.8rem;">↗</span>
          </a>
        </div>

        <div class="env-card">
          <div class="env-card-header">
            <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span>🧪</span>
              <span>Ambiente de Homologação (STAGE / QA)</span>
            </div>
            <span class="env-badge-homolog">🟡 Testes & Validações</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">
            Ambiente dedicado a testes de QA, validação de novas releases, homologação de clientes e treinamento operacional.
          </p>
          <div class="env-url-box">
            <span>https://homolog.ilclogportal.com.br/</span>
          </div>
          <a href="https://homolog.ilclogportal.com.br/" target="_blank" rel="noopener noreferrer" class="env-link-btn" style="background-color: var(--ilc-primary);">
            <span>Acessar Homologação</span>
            <span style="font-size: 0.8rem;">↗</span>
          </a>
        </div>
      </div>

      <!-- BLOCO 5: POLÍTICA DE PRIVACIDADE E CONFORMIDADE LGPD -->
      <h2>🔒 Política de Privacidade & Proteção de Dados (LGPD)</h2>
      <div class="privacy-banner-card">
        <div class="privacy-banner-header">
          <div style="font-size: 1.8rem;">🛡️</div>
          <div>
            <div class="privacy-banner-title">Conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018 - LGPD)</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">Compromisso da ILC com a segurança, privacidade e transparência no tratamento de dados.</div>
          </div>
        </div>

        <div style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
          <p style="margin-bottom: 12px;">
            A ILC Integrator Logistics Company adota rigorosas práticas de governança e segurança da informação no tratamento de dados pessoais de colaboradores, clientes, fornecedores e motoristas parceiros:
          </p>
          <ul style="margin-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
            <li><strong>Finalidade e Necessidade:</strong> Coleta e tratamento estritamente vinculados à execução de serviços logísticos, rastreamento de cargas, emissão de documentos fiscais e segurança patrimonial.</li>
            <li><strong>Segurança e Controle de Acesso (RBAC):</strong> Mecanismos de autenticação segura, perfis granulares de acesso e criptografia em trânsito e em repouso.</li>
            <li><strong>Trilhas de Auditoria:</strong> Rastreabilidade e logs imutáveis para operações de criação, alteração ou cancelamento de registros sensíveis.</li>
            <li><strong>Direitos dos Titulares:</strong> Canal aberto para atendimento a solicitações de confirmação, acesso, correção ou revogação de consentimento.</li>
          </ul>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
          <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
            <span>✉️</span>
            <span>Canal do Encarregado de Dados (DPO): <strong>privacidade@ilclog.com.br</strong></span>
          </div>
          <a href="https://ilclog.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; text-decoration: none; padding: 8px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <span>Ler Política de Privacidade Completa</span>
            <span style="font-size: 0.8rem;">↗</span>
          </a>
        </div>
      </div>

      <!-- BLOCO 6: ATALHOS RÁPIDOS PARA FERRAMENTAS CENTRAIS -->
      <h2>🗺️ Ferramentas Centrais de Navegação</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">Explore a esteira logística completa ou consulte os documentos normativos do sistema:</p>

      <div class="quick-links-banner">
        <div class="quick-nav-card" onclick="window.navigateTo('mapa_mental')">
          <div class="quick-nav-icon" style="background: rgba(0, 82, 204, 0.1); color: var(--ilc-primary);">🗺️</div>
          <div>
            <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary);">Mapa de Relações entre Módulos</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">Diagrama visual interativo da esteira logística com Pan & Zoom.</div>
          </div>
          <span style="margin-left: auto; font-size: 1.2rem; color: var(--text-muted);">➔</span>
        </div>

        <div class="quick-nav-card" onclick="window.navigateTo('instrucoes_trabalho')">
          <div class="quick-nav-icon" style="background: rgba(0, 168, 107, 0.1); color: var(--ilc-green);">📚</div>
          <div>
            <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-primary);">Catálogo de ITs (PDFs)</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">35+ Instruções de Trabalho com visualizador integrado e download.</div>
          </div>
          <span style="margin-left: auto; font-size: 1.2rem; color: var(--text-muted);">➔</span>
        </div>
      </div>
    `
  },

  mapa_mental: {
    id: "mapa_mental",
    title: "Mapa de Relações",
    subtitle: "Visão Holística da Esteira Logística, Ordem de Dependência de Dados & Ciclo de Vida da Operação",
    category: "Governança",
    icon: "🗺️",
    summary: "Entenda a arquitetura de dados e a interdependência funcional de ponta a ponta: desde os dados mestres e segurança RBAC na base, até o planejamento de demanda, roteirização, rastreamento 24/7 na Torre de Controle, fechamento financeiro, APIs REST e Helpdesk.",
    content: `
      <!-- INTRODUÇÃO & GUIA DE LEITURA -->
      <div class="ilc-hero-banner" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
        <div class="ilc-hero-tag" style="background: rgba(59, 130, 246, 0.2); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.4);">
          🌐 Orquestração do Supply Chain • 44 Módulos Integrados
        </div>
        <h2 class="ilc-hero-title" style="color: #ffffff;">Da Fundação Cadastral ao Cockpit & Governança no Topo</h2>
        <p class="ilc-hero-desc" style="color: #cbd5e1;">
          Nenhum módulo no <strong>ILC Integrator</strong> opera de forma isolada. A informação nasce nos <strong>Dados Mestres (Onda 1)</strong>, alimenta a <strong>Demanda & Pedidos (Onda 2)</strong>, é cubada e sequenciada na <strong>Engenharia de Carga (Onda 3)</strong>, executada fisicamente no <strong>Pátio e Trânsito (Onda 4)</strong>, rastreada 24/7 pela <strong>Torre de Controle (Onda 5)</strong> e finalizada com <strong>Auditoria de Faturamento, BI e APIs (Onda 6)</strong>.
        </p>
      </div>

      <!-- DIAGRAMA MERMAID DAS 6 ONDAS -->
      <h2>🔄 Fluxo de Dependência de Dados & Ciclo de Vida Operacional</h2>
      <p style="color: var(--text-secondary); margin-bottom: 16px;">
        O diagrama abaixo representa a cadeia de valor completa do Integrator. Utilize os controles de <strong>Pan & Zoom</strong> para explorar os detalhes de cada onda:
      </p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
flowchart BT
    %% =========================================================================
    %% ONDA 1: FUNDAÇÃO, SEGURANÇA & DADOS MESTRES (16 Módulos)
    %% =========================================================================
    subgraph O1 ["🏛️ ONDA 1: Fundação, Segurança & Cadastros Mestres (16 Módulos)"]
        direction TB
        M1["👤 1. Usuários (/pages/listaUsuarios)"]
        M2["🛡️ 2. Perfis RBAC (/pages/listaPerfis)"]
        M3["🏢 3. Empresas (/pages/listaEmpresas)"]
        M4["🌐 4. Grupos Econômicos (/pages/listaGruposEmpresas)"]
        M5["🔗 5. Cliente x Fornecedor (/pages/listaClienteFornecedor)"]
        M6["📥 6. Upload Contatos (/pages/cadastroClienteFornecedorContato)"]
        M7["⏱️ 7. Prazos Lead Time (/pages/listaPrazosEntrega)"]
        M8["🛣️ 8. Rotas (/pages/listaRota)"]
        M9["📅 9. Frequências (/pages/listaFrequencias)"]
        M10["🔩 10. Peças Part Numbers (/pages/listaClientePeca)"]
        M11["⚠️ 11. Itens Especiais (/pages/listaItensEspeciais)"]
        M12["📦 12. Embalagens (/pages/listaClienteEmbalagem)"]
        M13["❄️ 13. Motivos Congelamento (/pages/listaMotivosCongelamentoNf)"]
        M14["📸 14. Config. Comprovantes POD (/pages/configcomprovante/lista)"]
        M15["🔀 15. Workflows (/pages/cadastroWorkflow)"]
        M16["🪙 16. Praças Pedágio (/pages/listaPedagios)"]
    end

    %% =========================================================================
    %% ONDA 2: DEMANDA, PEDIDOS & PROMESSA DE FORNECIMENTO (8 Módulos)
    %% =========================================================================
    subgraph O2 ["📋 ONDA 2: Demanda, Pedidos & Promessa de Entrega (8 Módulos)"]
        direction TB
        M17["📡 17. Barramento EDI Entrada (/pages/consultaEdi)"]
        M18["📝 18. Solicitação Ordem Compra (/pages/clienteOrdemCompraSolicitacao)"]
        M19["🔍 19. Consulta Ordens (/pages/consultaOrdem)"]
        M20["🛒 20. Gestão de Pedidos (/pages/listaPedidos)"]
        M21["🚚 21. Pedidos Transportador (/pages/pedidosTransportador)"]
        M22["🤝 22. Resposta de PE (/pages/respostasPromessaEntrega)"]
        M23["🚦 23. Monitor de PE (/pages/monitorPE)"]
        M24["📊 24. Gestão Demanda (/pages/gestaoDemanda)"]
    end

    %% =========================================================================
    %% ONDA 3: ENGENHARIA DE CARGA, ROTEIRIZAÇÃO & EXCEÇÕES (7 Módulos)
    %% =========================================================================
    subgraph O3 ["📐 ONDA 3: Engenharia de Carga, Roteirização & Exceções (7 Módulos)"]
        direction TB
        M25["📐 25. Consulta Volumetria (/pages/consultaVolumetria)"]
        M26["📦 26. Previsão de Carga (/pages/previsaoCarga)"]
        M27["🗺️ 27. Roteirizador (/pages/roteirizador)"]
        M28["📈 28. Ocupação de Carga ROC (/pages/relatorioOcupacaoCarga)"]
        M29["⚡ 29. Frete Expresso (/pages/listaSolicitacoes)"]
        M30["❄️ 30. Congelamento NFs (/pages/congelamentoNf)"]
        M31["🚨 31. Itens Críticos Linha (/pages/itensCriticos)"]
    end

    %% =========================================================================
    %% ONDA 4: EXECUÇÃO LOGÍSTICA, PÁTIO & MOBILE (5 Módulos)
    %% =========================================================================
    subgraph O4 ["🚚 ONDA 4: Execução Logística, Pátio & Mobile (5 Módulos)"]
        direction TB
        M32["🚛 32. Follow-up de Viagens (/pages/followupViagens)"]
        M33["📱 33. App Gestão Embarcada (/pages/gestaoEmbarcada)"]
        M34["🚪 34. Gate de Entrada Portaria (/pages/gateEntrada)"]
        M35["🔄 35. Gestão Embalagens (/pages/listaOperacaoEntregaEmbalagem)"]
        M36["🛣️ 36. Gestão Pedágios (/pages/gestaoPedagios)"]
    end

    %% =========================================================================
    %% ONDA 5: TORRE DE CONTROLE & RASTREAMENTO (3 Módulos)
    %% =========================================================================
    subgraph O5 ["🛰️ ONDA 5: Torre de Controle & Rastreamento em Tempo Real (3 Módulos)"]
        direction TB
        M37["🎯 37. Cockpit 24/7 (/pages/cockpit)"]
        M38["🛰️ 38. Smart Tracking GPS (/pages/smartTracking)"]
        M39["🔍 39. Tracking de Peças (/pages/trackingPecas)"]
    end

    %% =========================================================================
    %% ONDA 6: ENCERRAMENTO, INTELIGÊNCIA & GOVERNANÇA (5 Módulos)
    %% =========================================================================
    subgraph O6 ["📊 ONDA 6: Encerramento, Inteligência & Governança Técnica (5 Módulos)"]
        direction TB
        M40["📊 40. Central Relatórios & BI (/pages/relatorios)"]
        M41["💰 41. Auditoria Faturamento (/pages/faturamento)"]
        M42["⚡ 42. API Gateway Swagger (qaapi.ilclogportal.com.br)"]
        M43["📋 43. Formulários XForms (qaxforms.ilclogportal.com.br)"]
        M44["🎧 44. Central Helpdesk (helpdesk.ilclogportal.com.br)"]
    end

    %% =========================================================================
    %% RELAÇÕES E DEPENDÊNCIAS DE DADOS (BASE -> TOPO)
    %% =========================================================================
    
    %% Da Onda 1 para Onda 2
    M3 -->|CNPJs Cadastrados| M17
    M5 -->|Tolerâncias & Prazos| M22
    M10 -->|Part Numbers Válidos| M18
    M15 -->|Alçadas Parametrizadas| M29

    %% Da Onda 2 para Onda 3
    M17 -->|Arquivos NOTFIS/EDI| M20
    M20 -->|Consolidação de Demandas| M24
    M22 -->|Promessas Confirmadas| M26
    M23 -->|Atrasos Críticos| M31
    M24 -->|Matriz de Coletas| M27

    %% Da Onda 3 para Onda 4
    M12 -->|Dimensões de Caixas| M25
    M25 -->|Cálculo de M³| M28
    M27 -->|Rotas Sequenciadas| M32
    M29 -->|Frete Urgente Aprovado| M32
    M30 -->|Bloqueio Fiscal de Carga| M34

    %% Da Onda 4 para Onda 5
    M32 -->|Viagem Iniciada| M38
    M33 -->|Telemetria & POD Canhoto| M37
    M34 -->|Check-in no Pátio| M37
    M35 -->|Devolução de Racks Vazios| M34
    M36 -->|Extrato de Passagens Sem Parar| M41

    %% Da Onda 5 para Onda 6
    M37 -->|Eventos & Ocorrências| M39
    M37 -->|Métricas de SLA Operacional| M40
    M38 -->|Tracking Concluído| M41
    M41 -->|Fechamento de Frete Auditado| M40
    M42 -.->|APIs de Integração ERP| M20
    M43 -.->|Inspeções de Qualidade| M34
    M44 -.->|Chamados & Suporte 24/7| M37
        </div>
      </div>

      ---

      <!-- TABELA DESCRITIVA DAS 6 ONDAS E DEPENDÊNCIAS -->
      <h2>📑 Matriz de Dependência de Dados por Camada</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Onda / Camada</th>
              <th>Total de Módulos</th>
              <th>Entrada de Dados (O que consome)</th>
              <th>Saída de Dados (O que produz)</th>
              <th>Impacto Operacional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>🌊 Onda 1: Fundação & Cadastros</strong></td>
              <td>16 Módulos (1 ao 16)</td>
              <td>Cadastros manuais, arquivos fiscais e integrações corporativas (Azure AD, ERPs).</td>
              <td>Tabelas mestras: Usuários, Perfis, CNPJs, Rotas, SLAs, Peças, Embalagens e Pedágios.</td>
              <td><span class="badge-p1">Crítico: Sem estes dados, nenhum pedido ou viagem pode ser criado.</span></td>
            </tr>
            <tr>
              <td><strong>🌊 Onda 2: Demanda & Pedidos</strong></td>
              <td>8 Módulos (17 ao 24)</td>
              <td>Arquivos EDI (NOTFIS), Ordens de Compra de clientes e regras contratuais da Onda 1.</td>
              <td>Pedidos de coleta, promessas de entrega (PE) e semáforos de atendimento.</td>
              <td><span class="badge-p1">Alto: Garante o alinhamento entre o pedido do cliente e a fábrica fornecedora.</span></td>
            </tr>
            <tr>
              <td><strong>🌊 Onda 3: Engenharia & Carga</strong></td>
              <td>7 Módulos (25 ao 31)</td>
              <td>Promessas de entrega, volumetria das embalagens e alertas de itens críticos.</td>
              <td>Cálculo de ROC (ocupação volumétrica), rotas otimizadas e aprovações de frete expresso.</td>
              <td><span class="badge-p2">Alto: Evita transporte de ar e elimina paradas de linha de montagem.</span></td>
            </tr>
            <tr>
              <td><strong>🌊 Onda 4: Execução & Pátio</strong></td>
              <td>5 Módulos (32 ao 36)</td>
              <td>Cargas roteirizadas, dados do motorista/veículo e regras de comprovante POD.</td>
              <td>Viagens em trânsito, canhotos digitais, check-in no gate e extrato de pedágios.</td>
              <td><span class="badge-p1">Crítico: Acompanhamento físico da mercadoria em tempo real.</span></td>
            </tr>
            <tr>
              <td><strong>🌊 Onda 5: Torre de Controle</strong></td>
              <td>3 Módulos (37 ao 39)</td>
              <td>Sinais de GPS (Buonny, Sascar, Omnilink), telemetria do app e status de viagens.</td>
              <td>Cockpit 24/7 com alertas de atraso, desvio de rota e tracking granular por Part Number.</td>
              <td><span class="badge-p1">Crítico: Gestão de exceções e previsibilidade de chegada (ETA).</span></td>
            </tr>
            <tr>
              <td><strong>🌊 Onda 6: Inteligência & Topo</strong></td>
              <td>5 Módulos (40 ao 44)</td>
              <td>Viagens finalizadas, canhotos conferidos, extratos de pedágio e logs de auditoria.</td>
              <td>Faturamento auditado, dashboards BI, documentação OpenAPI Swagger e tickets de Helpdesk.</td>
              <td><span class="badge-p2">Estratégico: Governança corporativa, conformidade e encerramento financeiro.</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  mapa_cadastros: {
    id: "mapa_cadastros",
    title: "Flowchart Geral: Módulos de Cadastros",
    subtitle: "Mapa mental e taxonomia das 11 rotinas estruturais de cadastros do ILC Integrator",
    category: "Governança",
    icon: "🗺️",
    summary: "Visualização completa dos pilares de Governança, Fornecimento, Pátio, Embalagens e Operação Mobile que formam os dados mestres do sistema.",
    content: `
      <h2>🏛️ Estrutura e Pilares dos Cadastros no Integrator</h2>
      <div class="mermaid-wrapper">
        <div class="mermaid">
flowchart TD
    ROOT["🏛️ ILC Integrator: Menu Cadastros (11 Rotinas)"]

    subgraph G1 ["🔐 1. Governança, Acessos & TI"]
        direction TB
        C1["👤 Usuários (/pages/listaUsuarios)<br/>• Login, Senha, E-mail, Telefones<br/>• Papéis: Planejador / Analista ILC<br/>• Permissões Granulares (RBAC)"]
        C2["🌐 Grupo Empresas (/pages/listaGruposEmpresas)<br/>• Nome e Tipo de Grupo<br/>• Associação em lote de Empresas"]
        C3["🛡️ Perfis (/pages/listaPerfis)<br/>• Nome do Perfil & Status Ativo<br/>• Matriz de Permissões de Telas/Ações"]
        C4["🏢 Empresas (/pages/listaEmpresas)<br/>• CNPJ, Razão Social, Endereço<br/>• SSO Azure AD (Tenant/Client ID)"]
    end

    subgraph G2 ["🤝 2. Fornecimento & Regras de Negócio"]
        direction TB
        C7["🔗 Cliente x Fornecedor (/pages/listaClienteFornecedor)<br/>• Vínculo Planta Cliente x Fornecedor<br/>• Tolerâncias antes/depois da data<br/>• Produtivo vs. Indireto | CIF vs. FOB<br/>• Analista ILC e Planejador Responsáveis"]
        C5["⏱️ Prazos de Entrega (/pages/listaPrazosEntrega)<br/>• Lead Times e SLAs em Dias por Região<br/>• Base de Cálculo da Promessa de Entrega"]
        C6["🔀 Workflow (/pages/cadastroWorkflow)<br/>• Alçadas de Aprovação por Tipo de Frete<br/>• Matriz Solicitante vs Aprovadores"]
        C9["📥 Upload Contatos (/pages/cadastroClienteFornecedorContato)<br/>• Carga em Massa via Excel (.xls/.xlsx)"]
    end

    subgraph G3 ["📦 3. Pátio, Embalagens & Travas Fiscais"]
        direction TB
        C8["📦 Cadastro Embalagem (/pages/listaClienteEmbalagem)<br/>• Part Number, Descrição, Dimensões<br/>• Base para Cubagem e Ocupação (ROC)"]
        C10["❄️ Motivo Congel. NF (/pages/listaMotivosCongelamentoNf)<br/>• Tabela de Motivos de Bloqueio Fiscal<br/>• Avaria, Divergência de Preço, etc."]
    end

    subgraph G4 ["📱 4. Operação Mobile / Motoristas"]
        direction TB
        C11["📸 Config. Comprovantes (/pages/configcomprovante/listaConfigComprovante)<br/>• Parâmetros de Canhoto por Cliente<br/>• Modo Único vs Modo Múltiplo de Foto"]
    end

    ROOT --> G1
    ROOT --> G2
    ROOT --> G3
    ROOT --> G4
        </div>
      </div>
    `
  },

  /* ==========================================================================
     MÓDULO: USUÁRIOS (ORDEM LÓGICA E NATURAL DE APRENDIZAGEM)
     ========================================================================== */

  cad_usuarios: {
    id: "cad_usuarios",
    title: "Usuário",
    subtitle: "Gestão de Credenciais, Atribuição de Perfis RBAC, Vínculo de Empresas e Roteiros de Homologação",
    category: "Fundação",
    icon: "👤",
    summary: "Permite a criação, ativação, alteração de senhas e atribuição de perfis de acesso a usuários internos (ILC), clientes, fornecedores e transportadores.",
    relacao: "Define quem pode acessar cada módulo e orquestra a autenticação e autorização em <b>todo o portal</b>.",
    user_content: `
      <!-- ETAPA 1: Boas-vindas & Ficha Rápida -->
      <h2>👋 1. Boas-vindas & Visão Geral do Módulo</h2>
      <p>Olá! Eu sou o seu guia pelo sistema. Seja bem-vindo ao <strong>Módulo de Cadastro e Gestão de Usuários</strong> do ILC Integrator. Aqui é onde a equipe gestora tem total controle sobre quem entra no sistema, quais dados cada colaborador ou parceiro pode visualizar e quais ações pode executar.</p>

      <div class="quick-info-box">
        <div class="quick-info-title">
          <span>📌</span>
          <span>Ficha Rápida da Operação (O que saber antes de começar)</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">👤</div>
            <div>
              <div class="quick-info-label">Quem Utiliza</div>
              <div class="quick-info-value">Admin & Gestores de Acesso</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">Tempo Médio</div>
              <div class="quick-info-value">2 a 3 minutos por conta</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔑</div>
            <div>
              <div class="quick-info-label">Permissão Necessária</div>
              <div class="quick-info-value"><code>PAGINA_LISTA_USUARIOS</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📋</div>
            <div>
              <div class="quick-info-label">Pré-Requisito</div>
              <div class="quick-info-value">Empresa e Perfil cadastrados</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 2: Como Acessar a Tela no Portal -->
      <h2>📍 2. Como Acessar a Tela de Usuários no Portal</h2>
      <p>Para abrir este módulo no sistema, siga o caminho pelo menu principal:</p>
      
      <div class="steps-container" style="margin:16px 0 24px 0;">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Localizar o Menu Cadastros</div>
            <p>No menu lateral esquerdo ou na barra superior do ILC Integrator, clique na opção <strong>Cadastros</strong>.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Selecionar a Opção Usuários</div>
            <p>No submenu que se abrir, clique em <strong>Usuários</strong>. Você será direcionado para a tela principal de listagem: <code>/pages/listaUsuarios.xhtml</code>.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 3: Reconhecendo o Terreno (Mapa Visual das Telas) -->
      <h2>🖥️ 3. Reconhecendo o Terreno (Mapa Visual das Telas)</h2>
      <p>Antes de começar a cadastrar ou editar usuários, conheça visualmente as duas interfaces do módulo e onde fica cada botão e controle:</p>

      <!-- MOCKUP 1: LISTAGEM DE USUÁRIOS -->
      <h3 style="margin-top:20px;">A. Tela de Listagem & Consulta (<code>/pages/listaUsuarios.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/listaUsuarios.xhtml</div>
          <span class="tag-badge">Visão da Grade</span>
        </div>
        <div class="ui-mockup-body">
          <!-- Barra de Busca e Filtros -->
          <div style="background:var(--bg-surface); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:280px;">
              <span class="hotspot-badge">1</span>
              <span style="font-weight:600; font-size:0.85rem;">Busca:</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 12px; border-radius:4px; font-size:0.82rem; color:var(--text-muted); flex:1;">Digite o nome, login, e-mail...</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">2</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:4px; font-size:0.82rem; color:var(--text-primary);">Status: Apenas Ativos ▾</span>
            </div>
          </div>

          <!-- Tabela de Usuários -->
          <div style="background:var(--bg-surface); border-radius:var(--radius-md); border:1px solid var(--border-subtle); overflow:hidden;">
            <div style="padding:8px 12px; background:var(--bg-surface-subtle); border-bottom:1px solid var(--border-subtle); display:flex; align-items:center; gap:6px;">
              <span class="hotspot-badge">3</span>
              <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">GRADE DE USUÁRIOS CADASTRADOS</span>
            </div>
            <table class="doc-table" style="margin:0;">
              <thead>
                <tr>
                  <th>Nome Completo</th>
                  <th>Login</th>
                  <th>Empresa</th>
                  <th>E-mail</th>
                  <th>Ativo</th>
                  <th style="text-align:center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Carlos Eduardo Silva</strong></td>
                  <td><code>carlos.silva</code></td>
                  <td>MIRASSOL MATRIZ SP</td>
                  <td>carlos.silva@ilc.com.br</td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Sim</span></td>
                  <td style="text-align:center;">
                    <span class="hotspot-badge" style="margin:0;">4</span>
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;">✏️</button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Ana Clara Rodrigues</strong></td>
                  <td><code>ana.rodrigues</code></td>
                  <td>JOHN DEERE BRASIL</td>
                  <td>ana.rodrigues@deere.com</td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Sim</span></td>
                  <td style="text-align:center;">
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;">✏️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Botão Novo Usuário -->
          <div style="display:flex; justify-content:flex-end;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">5</span>
              <button class="btn-portal-link" style="padding:6px 14px; font-size:0.82rem;">➕ Cadastrar Usuário</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DA LISTAGEM -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">1</span>
          <div><strong>Campo de Busca em Tempo Real:</strong> Filtra a tabela instantaneamente à medida que você digita o nome, login ou e-mail.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">2</span>
          <div><strong>Filtro de Status:</strong> Permite alternar entre usuários Ativos, Inativos ou exibir a base completa.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">3</span>
          <div><strong>Grade de Usuários:</strong> Exibe as principais informações cadastrais, status de ativação e empresa vinculada.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">4</span>
          <div><strong>Botão de Edição (Lápis):</strong> Abre o formulário preenchido para alterar dados, redefinir senhas ou atualizar perfis.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">5</span>
          <div><strong>Botão Cadastrar Usuário:</strong> Abre a tela de formulário em branco para incluir um novo colaborador ou parceiro.</div>
        </div>
      </div>

      <!-- MOCKUP 2: FORMULÁRIO DE CADASTRO -->
      <h3 style="margin-top:32px;">B. Tela de Formulário de Cadastro & Edição (<code>/pages/cadastroUsuario.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/cadastroUsuario.xhtml</div>
          <span class="tag-badge" style="background:#e3fcef; color:#00875a;">Formulário Completo</span>
        </div>
        <div class="ui-mockup-body" style="gap:16px;">
          <!-- Bloco Identificação -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">6</span> Identificação do Usuário
              </span>
              <span style="font-size:0.75rem; color:var(--text-muted);">* Campos Obrigatórios</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Nome Completo *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">Carlos Eduardo Silva</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Nome Reduzido *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">Carlos Silva</div>
              </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Login *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;"><code>carlos.silva</code></div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">E-mail Corporativo *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">carlos.silva@ilc.com.br</div>
              </div>
            </div>
          </div>

          <!-- Bloco Credenciais -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">7</span> Credenciais & Senha Segura
              </span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Senha *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">••••••••••••</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Confirmação da Senha *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">••••••••••••</div>
              </div>
            </div>
          </div>

          <!-- Bloco Vínculos & Papéis -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">8</span> Empresa Vinculada & Perfil de Acesso
              </span>
            </div>
            <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Empresa *</label>
                <div style="display:flex; gap:6px; margin-top:3px;">
                  <div style="flex:1; background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary);">MIRASSOL MATRIZ SP (ID: 104)</div>
                  <button class="btn-icon" style="width:32px; height:32px;">🔍</button>
                </div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Perfil RBAC *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">OPERADOR_ILC ▾</div>
              </div>
            </div>
          </div>

          <!-- Bloco Flags Operacionais & PickLists -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">9</span> Flags Operacionais & Vínculo de Grupos (PickList)
              </span>
            </div>
            <div style="display:flex; gap:24px; align-items:center; padding:8px 12px; background:var(--bg-surface-subtle); border-radius:4px;">
              <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:600;"><input type="checkbox" checked disabled> Ativo</label>
              <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:600;"><input type="checkbox" disabled> Planejador</label>
              <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:600;"><input type="checkbox" checked disabled> Planejador ILC</label>
            </div>
          </div>

          <!-- Barra de Rodapé com Botões de Ação -->
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:4px;">
            <button style="background:transparent; border:1px solid var(--border-subtle); padding:6px 14px; border-radius:4px; font-size:0.82rem; color:var(--text-muted);">← Voltar para a Lista</button>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">10</span>
              <button class="btn-portal-link" style="padding:6px 18px; font-size:0.82rem;">💾 Salvar Usuário</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DO FORMULÁRIO -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">6</span>
          <div><strong>Identificação do Usuário:</strong> Nome completo, nome abreviado, login único e e-mail corporativo para envio de notificações.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">7</span>
          <div><strong>Credenciais & Segurança:</strong> Digitação de senha e confirmação com criptografia SHA-256/BCrypt no salvamento.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">8</span>
          <div><strong>Empresa & Perfil de Acesso:</strong> Modal de busca de CNPJ e associação ao perfil de permissões RBAC correspondente.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">9</span>
          <div><strong>Flags & Grupos:</strong> Marcações de ativação de login, privilégios de Torre de Controle e caixas duplas (PickLists) de filiais.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">10</span>
          <div><strong>Botão Salvar Usuário:</strong> Executa a validação transacional e persiste a conta na base corporativa.</div>
        </div>
      </div>

      ---

      <!-- ETAPA 4: Passo a Passo Operacional Ilustrado -->
      <h2>📝 4. Passo a Passo Operacional Ilustrado</h2>

      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Iniciar o Cadastro do Usuário</div>
            <p>Na tela de listagem (<code>/pages/listaUsuarios.xhtml</code>), clique no botão <strong>➕ Cadastrar Usuário</strong> no topo superior direito.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Preencher Identificação e Credenciais</div>
            <p>Informe o Nome Completo, Nome Reduzido, Login único (ex: <code>carlos.silva</code>), E-mail e defina uma senha inicial segura com confirmação.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">Vincular Empresa e Perfil RBAC</div>
            <p>Clique no ícone de lupa para selecionar a Empresa contratante/filial e defina o Perfil de Acesso (ex: <code>OPERADOR_ILC</code> ou <code>FORNECEDOR</code>).</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-title">Salvar e Validar a Aplicação Imediata</div>
            <p>Clique em <strong>Salvar</strong>. O sistema valida se o login não é duplicado, criptografa a senha e disponibiliza o acesso para login imediato.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 5: Casos de Uso Reais do Dia a Dia -->
      <h2>🎯 5. Casos de Uso Reais do Dia a Dia (6 Cenários Práticos)</h2>

      <div class="card-grid">
        <!-- Card 1 -->
        <div class="use-case-card">
          <h4><span>🏢</span> Caso 1: Cadastrar Operador Interno ILC</h4>
          <p>Para colaboradores da equipe logística e Torre de Controle Mirassol.</p>
          <ol class="use-case-steps">
            <li>Informe o e-mail corporativo <code>@ilc.com.br</code>.</li>
            <li>Selecione a empresa matriz <code>MIRASSOL MATRIZ SP</code>.</li>
            <li>Atribua o perfil <code>OPERADOR_ILC</code> e marque <strong>[x] Planejador ILC</strong>.</li>
          </ol>
        </div>

        <!-- Card 2 -->
        <div class="use-case-card">
          <h4><span>🏭</span> Caso 2: Cadastrar Usuário Cliente (John Deere)</h4>
          <p>Para analistas de logística do cliente com acesso a Pedidos e Promessas.</p>
          <ol class="use-case-steps">
            <li>Informe o e-mail oficial da montadora.</li>
            <li>Selecione a empresa cliente <code>JOHN DEERE BRASIL</code>.</li>
            <li>Atribua o perfil <code>CLIENTE_PLANEJADOR</code> e marque <strong>[x] Planejador</strong>.</li>
          </ol>
        </div>

        <!-- Card 3 -->
        <div class="use-case-card">
          <h4><span>🔧</span> Caso 3: Cadastrar Usuário Fornecedor Parceiro</h4>
          <p>Para indústrias fornecedoras responderem promessas de entrega (PFR).</p>
          <ol class="use-case-steps">
            <li>Selecione o CNPJ da empresa fornecedora vinculada.</li>
            <li>Atribua o perfil <code>FORNECEDOR</code>.</li>
            <li>O sistema aplicará o filtro multi-tenant automático para isolar dados de outros fornecedores.</li>
          </ol>
        </div>

        <!-- Card 4 -->
        <div class="use-case-card">
          <h4><span>🚛</span> Caso 4: Cadastrar Transportadora / Frotista</h4>
          <p>Para transportadores externos que inserem cotações e enviam canhotos POD.</p>
          <ol class="use-case-steps">
            <li>Vincule ao CNPJ da transportadora parceira.</li>
            <li>Atribua o perfil <code>TRANSPORTADOR</code>.</li>
            <li>O usuário terá acesso restrito a viagens atribuídas e cotações de Frete Expresso.</li>
          </ol>
        </div>

        <!-- Card 5 -->
        <div class="use-case-card">
          <h4><span>🔑</span> Caso 5: Alteração de Senha & Redefinição</h4>
          <p>Para atualizar a senha de um colaborador mediante solicitação segura.</p>
          <ol class="use-case-steps">
            <li>Localize o usuário na listagem e clique em <strong>Editar (Lápis)</strong>.</li>
            <li>Preencha a nova senha e confirmação.</li>
            <li>Clique em <strong>Salvar</strong> para aplicar o novo hash criptográfico.</li>
          </ol>
        </div>

        <!-- Card 6 -->
        <div class="use-case-card" style="border-top-color: var(--ilc-accent);">
          <h4><span>🔒</span> Caso 6: Desligamento / Bloqueio Imediato</h4>
          <p>Para revogar o acesso imediatamente com segurança sem apagar histórico.</p>
          <ol class="use-case-steps">
            <li>Localize o usuário na busca e clique em <strong>Editar</strong>.</li>
            <li>Desmarque a caixa <strong>[ ] Ativo</strong>.</li>
            <li>Clique em <strong>Salvar</strong> (o login será bloqueado instantaneamente).</li>
          </ol>
        </div>
      </div>

      ---

      <!-- ETAPA 6: Erros Mais Comuns & Como Resolver -->
      <h2>🛠️ 6. Erros Mais Comuns & Como Resolver (Troubleshooting)</h2>

      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Mensagem: "O login do usuário já está em uso por outro usuário"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> Já existe outra pessoa cadastrada com esse mesmo login no banco de dados.<br>
              <strong>Como Resolver:</strong> Crie uma variação única para o login, como incluir o sobrenome ou ponto (exemplo: em vez de <code>carlos</code>, utilize <code>carlos.silva</code> ou <code>carlos.mirassol</code>).
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Mensagem: "A confirmação da senha e a senha não coincidem"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> Houve algum erro de digitação entre os dois campos de senha.<br>
              <strong>Como Resolver:</strong> Apague o conteúdo dos dois campos ("Senha" e "Confirmação de Senha") e digite novamente com atenção a letras maiúsculas e caracteres especiais.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ O usuário fez login mas não consegue ver a tela que precisa</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> O Perfil atribuído não possui a permissão de acesso àquela tela específica.<br>
              <strong>Como Resolver:</strong> Acesse o menu <strong>Cadastros &gt; Perfis</strong>, localize o perfil do usuário e certifique-se de que a caixinha da tela desejada está marcada na matriz RBAC.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ A empresa do usuário não aparece no campo de busca</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> A empresa ainda não foi cadastrada na base mestra.<br>
              <strong>Como Resolver:</strong> Acesse primeiro o menu <strong>Cadastros &gt; Empresas</strong> e faça o registro do CNPJ e Razão Social antes de vincular o usuário.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- ETAPA 7: Glossário em Linguagem Simples -->
      <h2>📖 7. Glossário em Linguagem Simples</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Termo</th>
              <th>O que significa na prática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PickList (Caixa Dupla)</strong></td>
              <td>Componente visual com duas colunas onde você move itens disponíveis da esquerda para a coluna de autorizados na direita usando setas.</td>
            </tr>
            <tr>
              <td><strong>RBAC (Controle por Papéis)</strong></td>
              <td>Regra de segurança que define quais botões e telas cada perfil (Operador, Fornecedor, Admin) pode enxergar no menu.</td>
            </tr>
            <tr>
              <td><strong>Planejador ILC</strong></td>
              <td>Usuário interno da equipe Mirassol com visão executiva e privilégios na Torre de Controle.</td>
            </tr>
            <tr>
              <td><strong>Multi-tenant</strong></td>
              <td>Mecanismo que garante que um usuário de fornecedor ou transportador só visualize dados pertinentes à sua própria empresa.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Card de Destaque Especial: Dica de Ouro da Governança ILC -->
      <div class="governance-gold-card">
        <div class="governance-gold-header">
          <div class="governance-gold-icon">👑</div>
          <div>
            <div class="governance-gold-badge">✨ Dica de Ouro da Governança ILC</div>
            <div class="governance-gold-title">Padronização de Logins & Contas Nominais</div>
          </div>
        </div>
        <div class="governance-gold-body">
          <p style="margin: 0 0 10px 0;">
            Evite contas genéricas ou compartilhadas (ex: <code>logistica</code>, <code>operacao</code>). Crie sempre logins individuais no formato <strong><code>nome.sobrenome</code></strong> vinculados ao e-mail institucional corporativo.
          </p>
          <div style="background: rgba(217, 119, 6, 0.08); border-left: 3px solid #d97706; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem;">
            <strong>🎯 Impacto Direto na Operação:</strong> Garante rastreabilidade total em auditorias fiscais e trilha de auditoria (<code>TB_AUDITORIA</code>) para aprovações de frete e alterações de pedidos.
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 8: Próximos Passos Recomendados -->
      <div class="next-steps-container">
        <div>
          <div class="next-steps-title">🚀 8. Próximos Passos Recomendados</div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Após cadastrar seus usuários, configure os perfis e vínculos da cadeia logística:</div>
        </div>
        <div class="next-steps-actions">
          <a href="#cad_perfis/user" class="next-step-btn" onclick="window.navigateTo('cad_perfis')">
            <span>🛡️</span>
            <span>Configurar Perfis & Permissões</span>
          </a>
          <a href="#cad_empresas_grupos/user" class="next-step-btn" onclick="window.navigateTo('cad_empresas_grupos')">
            <span>🏢</span>
            <span>Configurar Empresas & Grupos</span>
          </a>
        </div>
      </div>
    `,
    qa_content: `
      <!-- 1. Ficha Técnica de QA & Escopo -->
      <h2>📋 1. Ficha Técnica de QA & Escopo de Homologação</h2>
      <p>Esta seção é o guia oficial de garantia de qualidade para validação da rotina de Cadastro e Gestão de Usuários no ambiente de homologação (<code>https://homolog.ilclogportal.com.br/</code>).</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-qa);">
        <div class="quick-info-title">
          <span>🎯</span>
          <span>Parâmetros de Teste & Critérios de Qualidade</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🔥</div>
            <div>
              <div class="quick-info-label">Criticidade / Risco</div>
              <div class="quick-info-value"><span class="badge-p1">P1 - Crítico (Segurança & Autenticação)</span></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🧪</div>
            <div>
              <div class="quick-info-label">Tipos de Testes</div>
              <div class="quick-info-value">Funcional, RBAC, Criptografia, E2E</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📄</div>
            <div>
              <div class="quick-info-label">ITs Normativas</div>
              <div class="quick-info-value">IT.OPE.01 / IT.OPE.02</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">SLA de Homologação</div>
              <div class="quick-info-value">4 horas para regressão total</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- 2. Roteiro Passo a Passo de Testes Manuais -->
      <h2>🎯 2. Roteiro Passo a Passo de Testes Manuais</h2>
      <p>Execute os cenários de teste abaixo registrando evidências e resultados no <strong>Azure DevOps Test Plans</strong>:</p>

      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 12%;">ID Caso</th>
              <th style="width: 25%;">Objetivo do Teste</th>
              <th style="width: 35%;">Passos de Execução</th>
              <th style="width: 28%;">Resultado Esperado Formal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>TC_USER_001</code></td>
              <td><strong>Cadastrar Usuário Operador Válido</strong></td>
              <td>
                1. Acessar <code>/pages/listaUsuarios.xhtml</code>.<br>
                2. Clicar em <strong>➕ Cadastrar Usuário</strong>.<br>
                3. Preencher Nome, Login único, Senha "<code>SenhaForte@2026</code>".<br>
                4. Selecionar Empresa Matriz e Perfil "OPERADOR_ILC".<br>
                5. Clicar em Salvar.
              </td>
              <td>Usuário persistido na tabela <code>TB_USUARIO</code> com hash de senha, status Ativo = 'S' e toast verde de sucesso.</td>
            </tr>
            <tr>
              <td><code>TC_USER_002</code></td>
              <td><strong>Bloqueio de Login Duplicado</strong></td>
              <td>
                1. Iniciar novo cadastro.<br>
                2. Informar um login já existente (ex: <code>admin</code>).<br>
                3. Clicar em Salvar.
              </td>
              <td>O sistema impede a gravação e exibe a mensagem de validação: <em>"O login do usuário já está em uso por outro usuário"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_USER_003</code></td>
              <td><strong>Validação de Senhas Divergentes</strong></td>
              <td>
                1. Preencher formulário de cadastro com dados válidos.<br>
                2. Digitar Senha "<code>Senha1@</code>" e Confirmação "<code>Senha2@</code>".<br>
                3. Clicar em Salvar.
              </td>
              <td>O sistema rejeita a operação com o alerta: <em>"A confirmação da senha e a senha não coincidem"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_USER_004</code></td>
              <td><strong>Inativação de Usuário e Bloqueio de Login</strong></td>
              <td>
                1. Localizar um usuário ativo na listagem.<br>
                2. Clicar em Editar e desmarcar a flag <strong>Ativo</strong>.<br>
                3. Salvar e tentar realizar login com a credencial inativada.
              </td>
              <td>O login é rejeitado na tela de autenticação com a mensagem de usuário bloqueado/inativo.</td>
            </tr>
            <tr>
              <td><code>TC_USER_005</code></td>
              <td><strong>Validação de Permissão RBAC (Multi-tenant)</strong></td>
              <td>
                1. Criar usuário com perfil <strong>FORNECEDOR</strong>.<br>
                2. Realizar login e tentar acessar <code>/pages/listaUsuarios.xhtml</code>.
              </td>
              <td>Menu 'Usuários' não é visível. Acesso direto via URL resulta em Redirecionamento 403 (Acesso Negado).</td>
            </tr>
            <tr>
              <td><code>TC_USER_006</code></td>
              <td><strong>Edição Cadastral sem Alteração de Senha</strong></td>
              <td>
                1. Editar um usuário existente alterando apenas o E-mail.<br>
                2. Deixar os campos de senha em branco.<br>
                3. Salvar e testar login com a senha antiga.
              </td>
              <td>O e-mail é atualizado e o hash de senha original é preservado intacto.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 3. Matriz de Validação do Sistema & Mensagens Reais de Erro -->
      <h2>🚨 3. Matriz de Validação do Sistema & Mensagens Reais de Erro</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Campo / Ação</th>
              <th>Regra de Negócio</th>
              <th>Mensagem Real Exibida pelo Sistema</th>
              <th>Ação Esperada de QA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nome Completo</strong></td>
              <td>Campo obrigatório não preenchido</td>
              <td><code>O nome do usuário deve ser preenchido.</code></td>
              <td>Validar que a borda do input fica vermelha e foco é direcionado ao campo.</td>
            </tr>
            <tr>
              <td><strong>Nome Reduzido</strong></td>
              <td>Campo obrigatório não preenchido</td>
              <td><code>O nome reduzido do usuário deve ser preenchido.</code></td>
              <td>Validar obrigatoriedade do apelido para crachás e relatórios.</td>
            </tr>
            <tr>
              <td><strong>Login</strong></td>
              <td>Login já cadastrado na base (Unique)</td>
              <td><code>O login do usuário já está em uso por outro usuário.</code></td>
              <td>Garantir que a constraint de unicidade não causa erro 500 no banco.</td>
            </tr>
            <tr>
              <td><strong>Senha & Confirmação</strong></td>
              <td>Valores digitados são diferentes</td>
              <td><code>A confirmação da senha e a senha não coincidem.</code></td>
              <td>Garantir que os campos de senha sejam limpos para nova digitação.</td>
            </tr>
            <tr>
              <td><strong>Empresa Vinculada</strong></td>
              <td>Nenhuma empresa associada</td>
              <td><code>A empresa do usuário deve ser preenchido.</code></td>
              <td>Validar que o modal de seleção é obrigatório antes do commit.</td>
            </tr>
            <tr>
              <td><strong>Perfil de Acesso</strong></td>
              <td>Nenhum perfil RBAC selecionado</td>
              <td><code>O perfil do usuário deve ser preenchido.</code></td>
              <td>Garantir que contas sem perfil não sejam criadas sem privilégios.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 4. Critérios de Aceite & Definition of Done (DoD) -->
      <h2>✅ 4. Critérios de Aceite & Definition of Done (DoD)</h2>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="dod_user_1" checked disabled>
          <label for="dod_user_1"><strong>100% dos Casos de Teste P1</strong> executados com status PASS no Azure DevOps Test Plans.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_user_2" checked disabled>
          <label for="dod_user_2"><strong>Isolamento Multi-tenant:</strong> Usuários com perfil Fornecedor ou Cliente não visualizam registros de terceiros.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_user_3" checked disabled>
          <label for="dod_user_3"><strong>Criptografia Segura:</strong> Nenhuma senha é salva em texto plano na base de dados <code>TB_USUARIO</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_user_4" checked disabled>
          <label for="dod_user_4"><strong>Auditoria Transacional:</strong> Todas as alterações cadastrais geram registros em <code>TB_AUDITORIA</code>.</label>
        </div>
      </div>

      ---

      <!-- 5. Especificação BDD em Gherkin -->
      <h2>🥒 5. Especificação BDD em Gherkin (Cenários Automatizáveis)</h2>
      <div class="bdd-feature-card">
        <div class="bdd-header">
          <div class="bdd-title">
            <span>🥒</span>
            <span>Funcionalidade: Gestão de Usuários & Credenciais de Acesso</span>
          </div>
          <span class="tag-badge">Gherkin BDD</span>
        </div>
        <div class="bdd-body">
          <span class="bdd-keyword">Funcionalidade:</span> Autenticação e Gestão de Usuários<br>
          &nbsp;&nbsp;Como Administrador do ILC Integrator<br>
          &nbsp;&nbsp;Quero cadastrar e gerenciar contas de usuários<br>
          &nbsp;&nbsp;Para garantir o controle de acesso seguro e auditável ao sistema<br><br>

          <span class="bdd-keyword">@smoke @positivo</span><br>
          <span class="bdd-keyword">Cenário:</span> Criação de novo usuário operador com sucesso<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o Administrador está autenticado na tela "/pages/listaUsuarios.xhtml"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> clica no botão "Cadastrar Usuário"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> preenche o Nome "Ana Clara Teste", Login "ana.teste", E-mail "ana.teste@ilc.com"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> preenche a Senha "SenhaSegura@2026" e Confirmação "SenhaSegura@2026"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> seleciona a Empresa "MIRASSOL MATRIZ" e o Perfil "OPERADOR_ILC"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> clica em "Salvar"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o sistema deve persistir o usuário na base de dados<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> deve exibir a mensagem de sucesso "Usuário cadastrado com sucesso!"<br><br>

          <span class="bdd-keyword">@negativo @validacao</span><br>
          <span class="bdd-keyword">Cenário:</span> Bloqueio ao tentar salvar formulário com senhas divergentes<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> inicia um novo cadastro com dados válidos<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Mas</span> informa Senha "SenhaA@123" e Confirmação "SenhaB@456"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> clica em "Salvar"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> a gravação é rejeitada com "A confirmação da senha e a senha não coincidem"<br><br>

          <span class="bdd-keyword">@seguranca @rbac</span><br>
          <span class="bdd-keyword">Cenário:</span> Bloqueio de acesso à tela de usuários para perfil Fornecedor<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o usuário está autenticado com o perfil "FORNECEDOR"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> tenta acessar a URL "/pages/listaUsuarios.xhtml" diretamente<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o sistema deve interceptar a requisição e redirecionar para a página de Acesso Negado (403).
        </div>
      </div>

      ---

      <!-- 6. Matriz de Rastreabilidade & Riscos -->
      <h2>🔗 6. Matriz de Rastreabilidade & Riscos</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Requisito Funcional</th>
              <th>IT Normativa</th>
              <th>User Story Azure DevOps</th>
              <th>Casos de Teste Vinculados</th>
              <th>Risco de Falha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Criação e Gestão de Usuários</td>
              <td><code>IT.OPE.01</code></td>
              <td><code>US-101: Cadastro de Usuários</code></td>
              <td><code>TC_USER_001</code>, <code>TC_USER_002</code></td>
              <td><span class="badge-p1">Alto (Acesso Indevido)</span></td>
            </tr>
            <tr>
              <td>Autenticação & Hash Criptográfico</td>
              <td><code>IT.OPE.02</code></td>
              <td><code>US-102: Segurança & Criptografia</code></td>
              <td><code>TC_USER_003</code>, <code>TC_USER_006</code></td>
              <td><span class="badge-p1">Crítico (Vazamento de Senhas)</span></td>
            </tr>
            <tr>
              <td>Controle Multi-tenant por Empresa</td>
              <td><code>IT.OPE.22</code></td>
              <td><code>US-103: Isolamento Multi-tenant</code></td>
              <td><code>TC_USER_005</code></td>
              <td><span class="badge-p1">Crítico (Vazamento entre Clientes)</span></td>
            </tr>
            <tr>
              <td>Bloqueio Imediato de Acesso</td>
              <td><code>IT.OPE.01</code></td>
              <td><code>US-104: Inativação de Contas</code></td>
              <td><code>TC_USER_004</code></td>
              <td><span class="badge-p1">Alto (Acesso Pós-Desligamento)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 7. Checklist de Regressão & Homologação -->
      <h2>🛡️ 7. Checklist de Regressão & Homologação</h2>
      <p>Procedimento padrão de verificação antes de autorizar o deploy em produção:</p>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="reg_user_1" checked disabled>
          <label for="reg_user_1">Validar login de ponta a ponta com usuário de cada tipo (ILC, Cliente, Fornecedor, Transportador).</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_user_2" checked disabled>
          <label for="reg_user_2">Garantir que a edição de cadastro não sobreponha a senha criptografada sem intenção explícita.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_user_3" checked disabled>
          <label for="reg_user_3">Inspecionar logs do WildFly (<code>server.log</code>) certificando ausência de NullPointerException ou SQL exceptions.</label>
        </div>
      </div>
    `,
    dev_content: `
      <!-- 1. Ficha Técnica de Engenharia & Stack -->
      <h2>🏛️ 1. Ficha Técnica de Engenharia & Stack Tecnológica</h2>
      <p>Especificações de arquitetura, frameworks e infraestrutura do módulo de Usuários:</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-dev);">
        <div class="quick-info-title">
          <span>⚙️</span>
          <span>Stack Tecnológica & Parâmetros de Execução</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">☕</div>
            <div>
              <div class="quick-info-label">Managed Bean JSF</div>
              <div class="quick-info-value"><code>CadastroUsuarioController.java</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🛡️</div>
            <div>
              <div class="quick-info-label">Security Context</div>
              <div class="quick-info-value"><code>SessionContextBean.java</code> (<code>@SessionScoped</code>)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📦</div>
            <div>
              <div class="quick-info-label">EJB de Negócio</div>
              <div class="quick-info-value"><code>UsuarioBean.java</code> (<code>@Stateless</code>)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">💾</div>
            <div>
              <div class="quick-info-label">Tabela SQL Principal</div>
              <div class="quick-info-value"><code>TB_USUARIO</code> / <code>TB_USUARIO_GRUPO_EMPRESA</code></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabela de Componentes da Arquitetura -->
      <div class="table-container" style="margin-top: 16px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Camada Arquitetural</th>
              <th>Classe / Arquivo</th>
              <th>Pacote Java</th>
              <th>Responsabilidade Técnica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>listaUsuarios.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Interface de listagem com busca dinâmica em memória e paginação PrimeFaces.</td>
            </tr>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>cadastroUsuario.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Formulário com PickLists duplos, máscaras de input e validações client-side.</td>
            </tr>
            <tr>
              <td><strong>ManagedBean</strong></td>
              <td><code>CadastroUsuarioController.java</code></td>
              <td><code>br.com.ilc.integrator.controller</code></td>
              <td><code>@ManagedBean @ViewScoped</code>: Controla validações, hashing de senha e disparo de integrações.</td>
            </tr>
            <tr>
              <td><strong>EJB Remote</strong></td>
              <td><code>UsuarioRemote.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.usuario</code></td>
              <td><code>@Remote</code>: Interface de negócio remota com transações ACID <code>@TransactionAttribute(REQUIRED)</code>.</td>
            </tr>
            <tr>
              <td><strong>EJB Bean</strong></td>
              <td><code>UsuarioBean.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.usuario</code></td>
              <td><code>@Stateless</code>: Implementação de persistência JPA, queries JPQL e auditoria.</td>
            </tr>
            <tr>
              <td><strong>Entity JPA</strong></td>
              <td><code>Usuario.java</code></td>
              <td><code>br.com.ilc.integrator.entity</code></td>
              <td><code>@Entity @Table(name="TB_USUARIO")</code>: Mapeamento ORM dos atributos e relacionamentos.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 2. Diagrama de Sequência Interativo -->
      <h2>🔄 2. Diagrama de Sequência de Cadastro & Hashing Transacional</h2>
      <p>Fluxo de validação de login único, criptografia de credenciais e persistência segura:</p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
sequenceDiagram
    autonumber
    actor Admin as 👤 Administrador
    participant View as 🖥️ cadastroUsuario.xhtml
    participant Ctrl as ⚙️ CadastroUsuarioController (ViewScoped)
    participant EJB as 📦 UsuarioBean (Stateless)
    participant DB as 💾 PostgreSQL (TB_USUARIO)
    participant Audit as 📝 TB_AUDITORIA

    Admin->>View: Preenche formulário e clica em Salvar
    View->>Ctrl: salvarUsuario(usuarioDTO)
    Note over Ctrl: Valida se senhas coincidem e campos obrigatórios preenchidos
    Ctrl->>EJB: salvarComValidacao(usuario, gruposIds)
    
    critical Transação ACID (REQUIRED)
        EJB->>DB: SELECT COUNT(*) FROM TB_USUARIO WHERE DS_LOGIN = ?
        alt Login duplicado
            EJB-->>Ctrl: Lança BusinessException("Login já está em uso")
            Ctrl-->>View: FacesContext.addMessage(ERROR)
        else Login válido
            Note over EJB: Aplica BCrypt/SHA-256 no campo DS_SENHA
            EJB->>DB: INSERT / UPDATE TB_USUARIO
            EJB->>DB: DELETE FROM TB_USUARIO_GRUPO_EMPRESA WHERE ID_USUARIO = ?
            EJB->>DB: INSERT INTO TB_USUARIO_GRUPO_EMPRESA (ID_USUARIO, ID_GRUPO) VALUES (...)
            EJB->>Audit: INSERT INTO TB_AUDITORIA (ID_USUARIO, DS_OPERACAO, DT_LOG)
        end
    end

    EJB-->>Ctrl: Usuário salvo com sucesso
    Ctrl-->>View: Redireciona para /pages/listaUsuarios.xhtml com Toast Sucesso
        </div>
      </div>

      ---

      <!-- 3. Modelagem de Dados & Schema SQL -->
      <h2>🗄️ 3. Modelagem de Dados & Schema SQL</h2>
      <p>Estrutura relacional das tabelas de usuários, perfis e vínculos no banco de dados corporativo:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>PostgreSQL DDL — TB_USUARIO & Tabelas de Associação</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar DDL</button>
        </div>
        <pre><code>-- Tabela Principal de Usuários
CREATE TABLE TB_USUARIO (
    ID_USUARIO          BIGSERIAL PRIMARY KEY,
    NM_USUARIO          VARCHAR(100) NOT NULL,
    NM_REDUZIDO         VARCHAR(30) NOT NULL,
    DS_LOGIN            VARCHAR(50) NOT NULL UNIQUE,
    DS_SENHA            VARCHAR(255) NOT NULL,
    DS_EMAIL            VARCHAR(150) NOT NULL,
    NR_TELEFONE         VARCHAR(20),
    NR_CELULAR          VARCHAR(20),
    FL_ATIVO            CHAR(1) DEFAULT 'S' NOT NULL CHECK (FL_ATIVO IN ('S', 'N')),
    FL_PLANEJADOR       CHAR(1) DEFAULT 'N' NOT NULL CHECK (FL_PLANEJADOR IN ('S', 'N')),
    FL_PLANEJADOR_ILC   CHAR(1) DEFAULT 'N' NOT NULL CHECK (FL_PLANEJADOR_ILC IN ('S', 'N')),
    ID_EMPRESA          BIGINT NOT NULL REFERENCES TB_EMPRESA(ID_EMPRESA),
    ID_PERFIL           BIGINT NOT NULL REFERENCES TB_PERFIL(ID_PERFIL),
    CD_ERP              VARCHAR(30),
    DT_CADASTRO         TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    DT_ALTERACAO        TIMESTAMP
);

-- Tabela de Vínculo N:N entre Usuário e Grupos de Empresas
CREATE TABLE TB_USUARIO_GRUPO_EMPRESA (
    ID_USUARIO          BIGINT NOT NULL REFERENCES TB_USUARIO(ID_USUARIO) ON DELETE CASCADE,
    ID_GRUPO_EMPRESA    BIGINT NOT NULL REFERENCES TB_GRUPO_EMPRESAS(ID_GRUPO_EMPRESAS),
    PRIMARY KEY (ID_USUARIO, ID_GRUPO_EMPRESA)
);

-- Índices de Performance para Autenticação e Busca
CREATE INDEX IX_USUARIO_LOGIN ON TB_USUARIO(DS_LOGIN);
CREATE INDEX IX_USUARIO_EMPRESA ON TB_USUARIO(ID_EMPRESA);
CREATE INDEX IX_USUARIO_PERFIL ON TB_USUARIO(ID_PERFIL);</code></pre>
      </div>

      ---

      <!-- 4. Catálogo de APIs REST (Migração Angular) -->
      <h2>🔌 4. Catálogo de APIs REST & Contratos de Integração</h2>
      <p>Endpoints RESTful para a interface Angular 17+ consumir o gerenciamento de contas:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>POST /api/v1/usuarios (Criação de Usuário)</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar cURL</button>
        </div>
        <pre><code>curl -X POST "https://homolog.ilclogportal.com.br/api/v1/usuarios" \\
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn..." \\
     -H "Content-Type: application/json" \\
     -d '{
       "nome": "Carlos Eduardo Silva",
       "nomeReduzido": "Carlos Silva",
       "login": "carlos.silva",
       "senha": "SenhaSegura@2026",
       "email": "carlos.silva@ilc.com.br",
       "empresaId": 104,
       "perfilId": 3,
       "ativo": true,
       "planejador": false,
       "planejadorIlc": true,
       "gruposEmpresasIds": [1, 4]
     }'</code></pre>
      </div>

      ---

      <!-- 5. Regras de Negócio & Validações de Backend -->
      <h2>⚙️ 5. Regras de Negócio & Validações de Backend</h2>
      <p>Regras implementadas no EJB <code>UsuarioBean.java</code> para assegurar integridade:</p>
      <ul>
        <li><strong>Validação de Unicidade:</strong> O login é verificado via JPQL antes da persistência. Logins existentes disparam <code>BusinessException</code> amigável.</li>
        <li><strong>Preservação de Senha:</strong> Em rotinas de edição cadastral, caso os campos de senha sejam enviados nulos ou vazios, o hash existente na base permanece inalterado.</li>
        <li><strong>Isolamento Multi-tenant:</strong> Usuários vinculados a empresas do tipo 'FORNECEDOR' ou 'CLIENTE' têm escopo de visualização filtrado pelo <code>ID_EMPRESA</code> em todas as queries JPQL.</li>
      </ul>

      ---

      <!-- 6. Guia de Troubleshooting & Diagnóstico -->
      <h2>🛠️ 6. Guia de Troubleshooting & Diagnóstico Técnico</h2>
      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ org.hibernate.exception.ConstraintViolationException (SQLSTATE 23505)</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Violação da constraint de unicidade <code>UK_USUARIO_LOGIN</code>.<br>
              <strong>Solução Técnica:</strong> O ManagedBean deve executar <code>usuarioRemote.consultaUsuarioPorLogin()</code> antes do <code>persist()</code> para lançar a <code>BusinessException</code> amigável antes de atingir o driver JDBC.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ javax.ejb.EJBTransactionRolledbackException</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Alguma RuntimeException não tratada ocorreu dentro de um método <code>@Stateless</code>.<br>
              <strong>Solução Técnica:</strong> Inspecione o <code>server.log</code> do WildFly procurando pela causa raiz (Caused By). Geralmente está associada a NullPointerException em listas lazy não inicializadas pelo Hibernate.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- 7. Comandos de Build, Deploy & Configurações -->
      <h2>⚙️ 7. Comandos de Build, Deploy & Configurações</h2>
      <p>Instruções para compilação local e deploy no servidor de desenvolvimento:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>Comandos Maven & WildFly CLI</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar Comandos</button>
        </div>
        <pre><code># 1. Compilar e empacotar o projeto ignorando testes unitários
mvn clean install -DskipTests

# 2. Realizar o deploy do EAR no WildFly via CLI
$JBOSS_HOME/bin/jboss-cli.sh --connect --command="deploy integrator-ear/target/integrator.ear --force"

# 3. Acompanhar os logs do servidor em tempo real
tail -f $JBOSS_HOME/standalone/log/server.log | grep -E "CadastroUsuarioController|UsuarioBean"</code></pre>
      </div>
    `
  },

  /* ==========================================================================
     MÓDULO: PERFIS & RBAC
     ========================================================================== */

  cad_perfis: {
    id: "cad_perfis",
    title: "Perfil",
    subtitle: "Governança de Segurança, Matriz de Direitos de Acesso, Níveis de Alçada e Roteiros de Homologação",
    category: "Fundação",
    icon: "🛡️",
    summary: "Configura os grupos de permissões baseados em papéis (RBAC) que determinam quais menus, telas, botões de ação e alçadas de aprovação cada categoria de usuário pode visualizar e executar no ILC Integrator.",
    relacao: "Alimenta o mecanismo central de autorização <code>sessionContextBean.temPermissao()</code> e o filtro de segurança em <b>todas as telas e endpoints do portal</b>.",
    user_content: `
      <!-- ETAPA 1: Boas-vindas & Ficha Rápida -->
      <h2>👋 1. Boas-vindas & Visão Geral do Módulo</h2>
      <p>Seja bem-vindo ao <strong>Módulo de Cadastro de Perfis e Permissões (RBAC)</strong> do ILC Integrator. Esta rotina é o coração da segurança do sistema: é aqui que a administração define quais telas, relatórios e botões de ação (como Aprovar, Cancelar, Editar ou Exportar) estarão visíveis e acessíveis para cada perfil de usuário (Operador ILC, Planejador Cliente, Fornecedor ou Transportador).</p>

      <div class="quick-info-box">
        <div class="quick-info-title">
          <span>📌</span>
          <span>Ficha Rápida da Operação (O que saber antes de começar)</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🛡️</div>
            <div>
              <div class="quick-info-label">Quem Utiliza</div>
              <div class="quick-info-value">Admin & Gestores de Segurança</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">Tempo Médio</div>
              <div class="quick-info-value">3 a 5 minutos por perfil</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔑</div>
            <div>
              <div class="quick-info-label">Permissão Necessária</div>
              <div class="quick-info-value"><code>PAGINA_LISTA_PERFIS</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📋</div>
            <div>
              <div class="quick-info-label">Impacto no Sistema</div>
              <div class="quick-info-value">Afeta o menu e acessos de todos os usuários vinculados</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 2: Como Acessar a Tela no Portal -->
      <h2>📍 2. Como Acessar a Tela de Perfis no Portal</h2>
      <p>Para abrir este módulo no sistema, siga o caminho pelo menu principal:</p>
      
      <div class="steps-container" style="margin:16px 0 24px 0;">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Localizar o Menu Cadastros</div>
            <p>No menu lateral esquerdo ou superior do portal, clique na categoria <strong>Cadastros</strong>.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Selecionar a Opção Perfis</div>
            <p>No submenu que se expandir, clique em <strong>Perfis</strong>. Você será direcionado para a tela principal de listagem: <code>/pages/listaPerfis.xhtml</code>.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 3: Reconhecendo o Terreno (Mapa Visual das Telas) -->
      <h2>🖥️ 3. Reconhecendo o Terreno (Mapa Visual das Telas)</h2>
      <p>Antes de começar a cadastrar ou editar perfis, conheça visualmente as duas interfaces do módulo e onde fica cada botão e controle:</p>

      <!-- MOCKUP 1: LISTAGEM DE PERFIS -->
      <h3 style="margin-top:20px;">A. Tela de Listagem & Consulta (<code>/pages/listaPerfis.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/listaPerfis.xhtml</div>
          <span class="tag-badge">Visão da Grade</span>
        </div>
        <div class="ui-mockup-body">
          <!-- Barra de Busca e Filtros -->
          <div style="background:var(--bg-surface); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:280px;">
              <span class="hotspot-badge">1</span>
              <span style="font-weight:600; font-size:0.85rem;">Busca:</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 12px; border-radius:4px; font-size:0.82rem; color:var(--text-muted); flex:1;">Filtrar por nome do perfil (ex: OPERADOR)...</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">2</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:4px; font-size:0.82rem; color:var(--text-primary);">Status: Apenas Ativos ▾</span>
            </div>
          </div>

          <!-- Tabela de Perfis -->
          <div style="background:var(--bg-surface); border-radius:var(--radius-md); border:1px solid var(--border-subtle); overflow:hidden;">
            <div style="padding:8px 12px; background:var(--bg-surface-subtle); border-bottom:1px solid var(--border-subtle); display:flex; align-items:center; gap:6px;">
              <span class="hotspot-badge">3</span>
              <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">GRADE DE PERFIS CADASTRADOS</span>
            </div>
            <table class="doc-table" style="margin:0;">
              <thead>
                <tr>
                  <th>Nome do Perfil</th>
                  <th>Tipo / Alçada</th>
                  <th>Qtd. Permissões</th>
                  <th>Usuários Ativos</th>
                  <th>Status</th>
                  <th style="text-align:center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ADMINISTRADOR_ILC</strong></td>
                  <td><span class="tag-badge" style="background: rgba(0, 82, 204, 0.1); color: var(--ilc-primary);">Interno ILC</span></td>
                  <td><code>142 permissões</code></td>
                  <td><code>18 usuários</code></td>
                  <td><span class="tag-badge" style="color:#00875a; background:#e3fcef;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <div style="display:inline-flex; align-items:center; gap:4px;">
                      <span class="hotspot-badge" style="margin:0;">4</span>
                      <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;">✏️</button>
                      <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;">📑</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>PLANEJADOR_CLIENTE_JOHN_DEERE</strong></td>
                  <td><span class="tag-badge" style="background: rgba(0, 168, 107, 0.1); color: var(--ilc-green);">Cliente</span></td>
                  <td><code>45 permissões</code></td>
                  <td><code>64 usuários</code></td>
                  <td><span class="tag-badge" style="color:#00875a; background:#e3fcef;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;">✏️</button>
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;">📑</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Botão Novo Perfil -->
          <div style="display:flex; justify-content:flex-end;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">5</span>
              <button class="btn-portal-link" style="padding:6px 14px; font-size:0.82rem;">➕ Novo Perfil</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DA LISTAGEM -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">1</span>
          <div><strong>Campo de Busca em Tempo Real:</strong> Filtra a tabela instantaneamente à medida que você digita o nome do perfil.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">2</span>
          <div><strong>Filtro de Status & Tipo:</strong> Permite alternar entre perfis Ativos, Inativos ou filtrar por tipo de organização (Interno, Cliente, Fornecedor).</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">3</span>
          <div><strong>Grade de Resultados:</strong> Exibe a volumetria de permissões concedidas e a quantidade de usuários vinculados a cada papel.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">4</span>
          <div><strong>Botões de Ação por Linha:</strong> O ícone de <strong>Lápis (Editar)</strong> abre o formulário completo e o ícone de <strong>Documento (Clonar)</strong> duplica as permissões para criar um novo perfil derivado.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">5</span>
          <div><strong>Botão Novo Perfil:</strong> Abre a tela de cadastro em branco para criar uma nova função de segurança.</div>
        </div>
      </div>

      <!-- MOCKUP 2: FORMULÁRIO DE CADASTRO / MATRIZ RBAC -->
      <h3 style="margin-top:32px;">B. Tela de Formulário de Cadastro & Matriz de Permissões (<code>/pages/cadastroPerfil.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/cadastroPerfil.xhtml</div>
          <span class="tag-badge" style="background:#e3fcef; color:#00875a;">Matriz RBAC</span>
        </div>
        <div class="ui-mockup-body" style="gap:16px;">
          <!-- Bloco Identificação do Perfil -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">6</span> Identificação do Papel & Alçada
              </span>
              <span style="font-size:0.75rem; color:var(--text-muted);">* Campos Obrigatórios</span>
            </div>
            <div style="display:grid; grid-template-columns:2fr 1fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Nome do Perfil *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;"><code>OPERADOR_TORRE_CONTROLE</code></div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Tipo / Segmento *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">INTERNO_ILC ▾</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Status</label>
                <div style="display:flex; align-items:center; gap:6px; margin-top:8px;">
                  <input type="checkbox" checked disabled>
                  <span style="font-size:0.82rem; font-weight:600; color:var(--ilc-green);">Ativo</span>
                </div>
              </div>
            </div>
            <div>
              <div style="display:flex; align-items:center; gap:6px; margin-bottom:3px;">
                <span class="hotspot-badge">7</span>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Descrição da Finalidade do Perfil</label>
              </div>
              <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-secondary);">Operadores dedicados à Torre de Controle com visão integral de tracking e despacho de viagens.</div>
            </div>
          </div>

          <!-- Bloco Árvore de Permissões -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">8</span> Árvore de Módulos & Telas Autorizadas
              </span>
              <span style="font-size:0.75rem; color:var(--ilc-primary); font-weight:600;">Marcar Todas / Desmarcar</span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
              <div style="background:var(--bg-surface-subtle); padding:10px 12px; border-radius:6px; border:1px solid var(--border-subtle);">
                <div style="font-weight:700; font-size:0.82rem; color:var(--ilc-primary); margin-bottom:6px;">📦 Cadastros</div>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Usuários (Listagem/Edição)</label>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Empresas & Grupos</label>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" disabled> Perfis & RBAC (Admin)</label>
              </div>

              <div style="background:var(--bg-surface-subtle); padding:10px 12px; border-radius:6px; border:1px solid var(--border-subtle);">
                <div style="font-weight:700; font-size:0.82rem; color:var(--ilc-green); margin-bottom:6px;">⚡ Operacional</div>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Promessa de Entrega (PE)</label>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Gestão de Pedidos</label>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Frete Expresso (Cotação)</label>
              </div>

              <div style="background:var(--bg-surface-subtle); padding:10px 12px; border-radius:6px; border:1px solid var(--border-subtle);">
                <div style="font-weight:700; font-size:0.82rem; color:var(--ilc-amber); margin-bottom:6px;">🛰️ Torre & Pátio</div>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Cockpit de Rastreamento</label>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Follow-up de Viagens</label>
                <label style="display:block; font-size:0.8rem; margin:3px 0;"><input type="checkbox" checked disabled> Gestão de Pátio / ROC</label>
              </div>
            </div>
          </div>

          <!-- Bloco Ações Granulares de Botões -->
          <div style="background:var(--bg-surface); padding:14px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">9</span>
              <div>
                <div style="font-size:0.85rem; font-weight:700; color:var(--text-primary);">Ações Granulares (Botões Críticos)</div>
                <div style="font-size:0.75rem; color:var(--text-muted);">Alçadas para aprovação, cancelamento e exportação de relatórios</div>
              </div>
            </div>
            <div style="display:flex; gap:12px;">
              <label style="font-size:0.8rem;"><input type="checkbox" checked disabled> Aprovar Cotação</label>
              <label style="font-size:0.8rem;"><input type="checkbox" checked disabled> Cancelar Viagem</label>
              <label style="font-size:0.8rem;"><input type="checkbox" disabled> Exportar Relatórios BI</label>
            </div>
          </div>

          <!-- Barra de Rodapé com Botões de Ação -->
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:4px;">
            <button style="background:transparent; border:1px solid var(--border-subtle); padding:6px 14px; border-radius:4px; font-size:0.82rem; color:var(--text-muted);">← Voltar para a Lista</button>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">10</span>
              <button class="btn-portal-link" style="padding:6px 18px; font-size:0.82rem;">💾 Salvar Perfil</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DO FORMULÁRIO -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">6</span>
          <div><strong>Identificação & Alçada:</strong> Define o identificador único do perfil (letras maiúsculas e sem espaços) e seu segmento de atuação.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">7</span>
          <div><strong>Descrição da Função:</strong> Texto explicativo que ajuda outros administradores a entender o propósito e escopo do perfil.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">8</span>
          <div><strong>Árvore de Módulos & Telas:</strong> Matriz agrupada onde cada checkbox concede visibilidade no menu lateral e autorização na URL correspondente.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">9</span>
          <div><strong>Permissões de Ação Granulares:</strong> Controla botões específicos de alto impacto (ex: Aprovar fretes acima de R$ 5.000,00, cancelar viagens, forçar despacho).</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">10</span>
          <div><strong>Botão Salvar Perfil:</strong> Valida a unicidade do nome e persiste as permissões transacionalmente na base de dados com aplicação imediata.</div>
        </div>
      </div>

      ---

      <!-- ETAPA 4: Passo a Passo Operacional Ilustrado -->
      <h2>📝 4. Passo a Passo Operacional Ilustrado</h2>

      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Iniciar o Cadastro do Perfil</div>
            <p>Na tela de listagem (<code>/pages/listaPerfis.xhtml</code>), clique no botão <strong>➕ Novo Perfil</strong> no topo superior direito.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Informar o Nome e Descrição da Função</div>
            <p>No campo <strong>Nome do Perfil</strong>, utilize um padrão claro em letras maiúsculas separadas por underline (ex: <code>PLANEJADOR_LOGISTICO_EXTERNO</code>) e preencha uma descrição resumida da finalidade.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">Marcar as Permissões na Matriz RBAC</div>
            <p>Navegue pelos grupos de permissões (Cadastros, Operações, Torre de Controle, Relatórios) e marque os checkboxes correspondentes às telas e ações permitidas para esta função.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-title">Salvar e Validar a Aplicação Imediata</div>
            <p>Clique em <strong>Salvar</strong>. O sistema valida se não há duplicidade de nome e aplica a nova regra imediatamente. Usuários logados passarão a ter as novas permissões no próximo login ou atualização de página.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 5: Casos de Uso Reais do Dia a Dia -->
      <h2>🎯 5. Casos de Uso Reais do Dia a Dia (6 Cenários Práticos)</h2>

      <div class="card-grid">
        <!-- Card 1 -->
        <div class="use-case-card">
          <h4><span>🏢</span> Caso 1: Criar Perfil de Planejador Cliente</h4>
          <p>Para analistas de logística das montadoras e indústrias clientes (ex: John Deere, Caterpillar).</p>
          <ol class="use-case-steps">
            <li>Defina o nome <code>PLANEJADOR_CLIENTE</code>.</li>
            <li>Marque permissão para <strong>Promessa de Entrega</strong>, <strong>Gestão de Pedidos</strong> e <strong>Abertura de Frete Expresso</strong>.</li>
            <li>Desmarque acesso a telas administrativas internas ILC (ex: Gestão de Pedágios e Cadastros Mestres).</li>
          </ol>
        </div>

        <!-- Card 2 -->
        <div class="use-case-card">
          <h4><span>🏭</span> Caso 2: Criar Perfil de Fornecedor Parceiro</h4>
          <p>Para empresas fornecedoras que precisam responder promessas de entrega (PFR) de peças.</p>
          <ol class="use-case-steps">
            <li>Defina o nome <code>FORNECEDOR_RESPOSTA_PFR</code>.</li>
            <li>Marque permissão estrita para <code>PAGINA_RESPOSTA_PROMESSA</code> e consulta de pedidos vinculados ao seu CNPJ.</li>
            <li>O sistema aplica automaticamente o filtro multi-tenant por empresa.</li>
          </ol>
        </div>

        <!-- Card 3 -->
        <div class="use-case-card">
          <h4><span>🚛</span> Caso 3: Criar Perfil de Transportadora / Frotista</h4>
          <p>Para transportadores que enviam status de coleta, dados do motorista e canhotos de entrega (POD).</p>
          <ol class="use-case-steps">
            <li>Defina o nome <code>TRANSPORTADOR_DESPACHO</code>.</li>
            <li>Marque acesso a <strong>Follow-up de Viagens</strong>, inserção de cotações em Frete Expresso e upload de canhotos.</li>
          </ol>
        </div>

        <!-- Card 4 -->
        <div class="use-case-card">
          <h4><span>🛰️</span> Caso 4: Criar Perfil de Operador Torre de Controle</h4>
          <p>Para analistas internos ILC com atuação em tempo real no monitoramento de frotas e SLA.</p>
          <ol class="use-case-steps">
            <li>Defina o nome <code>OPERADOR_TORRE_CONTROLE</code>.</li>
            <li>Marque acesso ao <strong>Cockpit Satelital</strong>, <strong>Follow-up de Viagens</strong>, <strong>Sinalização de Itens Críticos</strong> e <strong>Congelamento de NFs</strong>.</li>
          </ol>
        </div>

        <!-- Card 5 -->
        <div class="use-case-card">
          <h4><span>📑</span> Caso 5: Clonar Perfil com Herança de Direitos</h4>
          <p>Para criar variações de alçadas sem ter que marcar dezenas de permissões manualmente do zero.</p>
          <ol class="use-case-steps">
            <li>Localize o perfil base na listagem e clique no botão <strong>Clonar</strong>.</li>
            <li>Informe o novo nome (ex: <code>OPERADOR_ILC_JUNIOR</code>).</li>
            <li>Ajuste apenas as permissões extras ou restritas e clique em <strong>Salvar</strong>.</li>
          </ol>
        </div>

        <!-- Card 6 -->
        <div class="use-case-card" style="border-top-color: var(--ilc-accent);">
          <h4><span>🔒</span> Caso 6: Inativação & Desativação Segura de Perfil</h4>
          <p>Para desativar uma função obsoleta sem quebrar o acesso de colaboradores ativos.</p>
          <ol class="use-case-steps">
            <li>Acesse a tela de <strong>Usuários</strong> e reatribua os usuários do perfil antigo para o novo perfil ativo.</li>
            <li>Retorne a <strong>Perfis</strong>, localize o perfil antigo e clique em <strong>Editar</strong>.</li>
            <li>Desmarque a opção <strong>[ ] Ativo</strong> e clique em <strong>Salvar</strong>.</li>
          </ol>
        </div>
      </div>

      ---

      <!-- ETAPA 6: Erros Mais Comuns & Como Resolver -->
      <h2>🛠️ 6. Erros Mais Comuns & Como Resolver (Troubleshooting)</h2>

      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Mensagem: "Já existe um perfil cadastrado com este nome"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> O nome do perfil deve ser exclusivo no banco de dados para evitar ambiguidades nas regras de segurança.<br>
              <strong>Como Resolver:</strong> Informe um nome diferenciado, adicionando o departamento ou nível (ex: <code>OPERADOR_FATURAMENTO_SP</code>).
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Mensagem: "Não é possível inativar o perfil pois existem X usuários vinculados"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> Regra de integridade de segurança: inativar um perfil em uso deixaria os usuários sem permissões válidas de login.<br>
              <strong>Como Resolver:</strong> Acesse a tela de <strong>Usuários</strong>, reatribua os usuários para outro perfil ativo e tente inativar novamente.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Usuário relata que não vê o botão de "Aprovar Frete"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> O perfil do usuário possui a permissão de visualização da tela, mas não a permissão granular de ação de aprovação.<br>
              <strong>Como Resolver:</strong> Edite o perfil do usuário e marque a caixa específica <code>ACAO_APROVAR_FRETE_EXPRESSO</code>.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- ETAPA 7: Glossário em Linguagem Simples -->
      <h2>📖 7. Glossário em Linguagem Simples</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Termo</th>
              <th>O que significa na prática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>RBAC (Role-Based Access Control)</strong></td>
              <td>Modelo de segurança onde permissões são atribuídas a perfis (funções), e os perfis são atribuídos aos usuários.</td>
            </tr>
            <tr>
              <td><strong>Permissão Granular</strong></td>
              <td>Controle fino que define não apenas se o usuário vê a página, mas se pode clicar em botões específicos (ex: Excluir, Aprovar).</td>
            </tr>
            <tr>
              <td><strong>Alçada de Aprovação</strong></td>
              <td>Limite de valor financeiro ou autonomia operacional que um determinado perfil possui para autorizar gastos de frete.</td>
            </tr>
            <tr>
              <td><strong>Multi-tenant</strong></td>
              <td>Mecanismo que garante que um usuário com perfil Fornecedor só visualize dados pertencentes ao seu próprio CNPJ.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Card de Destaque Especial: Dica de Ouro da Governança ILC -->
      <div class="governance-gold-card">
        <div class="governance-gold-header">
          <div class="governance-gold-icon">👑</div>
          <div>
            <div class="governance-gold-badge">✨ Dica de Ouro da Governança ILC</div>
            <div class="governance-gold-title">Princípio do Menor Privilégio & Herança por Clonagem</div>
          </div>
        </div>
        <div class="governance-gold-body">
          <p style="margin: 0 0 10px 0;">
            Aplique sempre o <strong>Princípio do Menor Privilégio (PoLP)</strong>: conceda apenas os botões e telas essenciais para a rotina diária. Quando precisar criar papéis com alçadas intermediárias, utilize o botão <strong>📑 Clonar Perfil</strong> para herdar a matriz de permissões testada sem riscos de brechas de segurança.
          </p>
          <div style="background: rgba(217, 119, 6, 0.08); border-left: 3px solid #d97706; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem;">
            <strong>🎯 Impacto Direto na Operação:</strong> Previne aprovações indevidas de fretes expressos fora da alçada financeira e protege relatórios estratégicos de faturamento.
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 8: Próximos Passos Recomendados -->
      <div class="next-steps-container">
        <div>
          <div class="next-steps-title">🚀 8. Próximos Passos Recomendados</div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Após configurar seus perfis de acesso, vincule-os aos usuários e defina as empresas:</div>
        </div>
        <div class="next-steps-actions">
          <a href="#cad_usuarios/user" class="next-step-btn" onclick="window.navigateTo('cad_usuarios')">
            <span>👤</span>
            <span>Vincular Perfis a Usuários</span>
          </a>
          <a href="#cad_empresas_grupos/user" class="next-step-btn" onclick="window.navigateTo('cad_empresas_grupos')">
            <span>🏢</span>
            <span>Configurar Empresas & Grupos</span>
          </a>
        </div>
      </div>
    `,
    qa_content: `
      <!-- 1. Ficha Técnica de QA & Escopo -->
      <h2>📋 1. Ficha Técnica de QA & Escopo de Homologação</h2>
      <p>Esta seção é o guia oficial de garantia de qualidade para validação da rotina de Cadastro e Gestão de Perfis & RBAC no ambiente de homologação (<code>https://homolog.ilclogportal.com.br/</code>).</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-qa);">
        <div class="quick-info-title">
          <span>🎯</span>
          <span>Parâmetros de Teste & Critérios de Qualidade</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🔥</div>
            <div>
              <div class="quick-info-label">Criticidade / Risco</div>
              <div class="quick-info-value"><span class="badge-p1">P1 - Crítico (Segurança & RBAC)</span></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🧪</div>
            <div>
              <div class="quick-info-label">Tipos de Testes</div>
              <div class="quick-info-value">Funcional, RBAC, Integridade N:N, Segurança IDOR</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📄</div>
            <div>
              <div class="quick-info-label">ITs Normativas</div>
              <div class="quick-info-value">IT.OPE.22 / IT.OPE.56 / IT.OPE.57</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">SLA de Homologação</div>
              <div class="quick-info-value">4 horas para regressão total</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- 2. Roteiro Passo a Passo de Testes Manuais -->
      <h2>🎯 2. Roteiro Passo a Passo de Testes Manuais</h2>
      <p>Execute os cenários de teste abaixo registrando evidências e resultados no <strong>Azure DevOps Test Plans</strong>:</p>

      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 12%;">ID Caso</th>
              <th style="width: 25%;">Objetivo do Teste</th>
              <th style="width: 35%;">Passos de Execução</th>
              <th style="width: 28%;">Resultado Esperado Formal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>TC_PERF_001</code></td>
              <td><strong>Criar Perfil Válido com Permissões Selecionadas</strong></td>
              <td>
                1. Acessar <code>/pages/listaPerfis.xhtml</code>.<br>
                2. Clicar em <strong>➕ Novo Perfil</strong>.<br>
                3. Preencher Nome <code>TESTE_QA_OPERADOR</code>.<br>
                4. Marcar permissões de Frete Expresso e Viagens.<br>
                5. Clicar em Salvar.
              </td>
              <td>Perfil persistido com sucesso na tabela <code>TB_PERFIL</code> e permissões gravadas na <code>TB_PERFIL_PERMISSAO</code> com toast verde de confirmação.</td>
            </tr>
            <tr>
              <td><code>TC_PERF_002</code></td>
              <td><strong>Bloqueio de Duplicidade de Nome de Perfil</strong></td>
              <td>
                1. Iniciar novo cadastro de perfil.<br>
                2. Informar um nome já existente (ex: <code>ADMINISTRADOR_ILC</code>).<br>
                3. Clicar em Salvar.
              </td>
              <td>O sistema impede a gravação e exibe mensagem de validação: <em>"Já existe um perfil cadastrado com este nome"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_PERF_003</code></td>
              <td><strong>Validação de Aplicação de Permissão em Tempo Real</strong></td>
              <td>
                1. Criar perfil sem acesso ao menu <strong>Frete Expresso</strong>.<br>
                2. Vincular este perfil ao usuário de teste <code>qa.user.teste</code>.<br>
                3. Realizar login com o usuário.<br>
                4. Tentar acessar a URL <code>/pages/listaFreteExpresso.xhtml</code>.
              </td>
              <td>O menu Frete Expresso não é renderizado. O acesso direto via URL é interceptado com página de <strong>Erro 403 (Acesso Negado)</strong>.</td>
            </tr>
            <tr>
              <td><code>TC_PERF_004</code></td>
              <td><strong>Bloqueio de Inativação de Perfil com Usuários Ativos</strong></td>
              <td>
                1. Localizar um perfil com usuários ativos vinculados.<br>
                2. Clicar em Editar e desmarcar a flag <strong>Ativo</strong>.<br>
                3. Clicar em Salvar.
              </td>
              <td>O sistema bloqueia a inativação com alerta informativo indicando a quantidade de usuários ativos que dependem do perfil.</td>
            </tr>
            <tr>
              <td><code>TC_PERF_005</code></td>
              <td><strong>Clonagem de Perfil com Herança de Permissões</strong></td>
              <td>
                1. Clicar no botão <strong>Clonar</strong> em um perfil existente.<br>
                2. Informar novo nome <code>CLONE_TESTE_QA</code>.<br>
                3. Salvar o perfil.
              </td>
              <td>Novo perfil criado com exatamente a mesma lista de permissões do perfil original sem afetar os usuários do perfil base.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 3. Matriz de Validação do Sistema & Mensagens Reais de Erro -->
      <h2>🚨 3. Matriz de Validação do Sistema & Mensagens Reais de Erro</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Campo / Ação</th>
              <th>Regra de Negócio</th>
              <th>Mensagem Real Exibida pelo Sistema</th>
              <th>Ação Esperada de QA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nome do Perfil</strong></td>
              <td>Campo obrigatório não preenchido</td>
              <td><code>O campo Nome do Perfil é obrigatório.</code></td>
              <td>Validar que a borda do input fica vermelha e foco é direcionado ao campo.</td>
            </tr>
            <tr>
              <td><strong>Nome do Perfil</strong></td>
              <td>Nome já existente na base (Case-insensitive)</td>
              <td><code>Já existe um perfil cadastrado com este nome.</code></td>
              <td>Validar que a constraint de unicidade não gera stacktrace no console.</td>
            </tr>
            <tr>
              <td><strong>Matriz de Permissões</strong></td>
              <td>Nenhuma permissão selecionada ao salvar</td>
              <td><code>Selecione ao menos uma permissão para o perfil.</code></td>
              <td>Garantir que perfis sem permissões não sejam gravados em branco.</td>
            </tr>
            <tr>
              <td><strong>Inativação</strong></td>
              <td>Perfil possui usuários associados ativos</td>
              <td><code>Não é possível inativar este perfil pois existem usuários vinculados.</code></td>
              <td>Validar contagem precisa de usuários no modal de bloqueio.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 4. Critérios de Aceite & Definition of Done (DoD) -->
      <h2>✅ 4. Critérios de Aceite & Definition of Done (DoD)</h2>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="dod_perf_1" checked disabled>
          <label for="dod_perf_1"><strong>100% dos Casos de Teste P1</strong> executados com status PASS no Azure DevOps Test Plans.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_perf_2" checked disabled>
          <label for="dod_perf_2"><strong>Intercepção de URLs (Filtro de Segurança):</strong> Acesso direto a telas não autorizadas retorna 403 sem vazar dados.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_perf_3" checked disabled>
          <label for="dod_perf_3"><strong>Integridade de Cascata N:N:</strong> Exclusão ou alteração de permissões não corrompe a tabela <code>TB_PERFIL_PERMISSAO</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_perf_4" checked disabled>
          <label for="dod_perf_4"><strong>Auditoria de Logs:</strong> Toda alteração de permissão em perfil gera registro imutável em <code>TB_AUDITORIA</code> com usuário e timestamp.</label>
        </div>
      </div>

      ---

      <!-- 5. Especificação BDD em Gherkin -->
      <h2>🥒 5. Especificação BDD em Gherkin (Cenários Automatizáveis)</h2>
      <div class="bdd-feature-card">
        <div class="bdd-header">
          <div class="bdd-title">
            <span>🥒</span>
            <span>Funcionalidade: Gestão de Perfis & Autorização RBAC</span>
          </div>
          <span class="tag-badge">Gherkin BDD</span>
        </div>
        <div class="bdd-body">
          <span class="bdd-keyword">Funcionalidade:</span> Controle de Acesso e Matriz de Permissões RBAC<br>
          &nbsp;&nbsp;Como Administrador do ILC Integrator<br>
          &nbsp;&nbsp;Quero configurar perfis com permissões específicas<br>
          &nbsp;&nbsp;Para garantir que cada usuário acesse apenas as telas e ações autorizadas<br><br>

          <span class="bdd-keyword">@smoke @positivo</span><br>
          <span class="bdd-keyword">Cenário:</span> Criação de novo perfil operacional com sucesso<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o Administrador está autenticado na tela "/pages/listaPerfis.xhtml"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> clica em "Novo Perfil"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> preenche o Nome "OPERADOR_COCKPIT_NOVO"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> marca as permissões "PAGINA_TRACKING_COCKPIT" e "PAGINA_FOLLOWUP_VIAGENS"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> clica em "Salvar"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o perfil deve ser gravado com sucesso no banco de dados<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> deve exibir a notificação "Perfil cadastrado com sucesso!"<br><br>

          <span class="bdd-keyword">@seguranca @rbac</span><br>
          <span class="bdd-keyword">Cenário:</span> Bloqueio de ação restrita para perfil sem alçada de aprovação<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o usuário "operador.junior" possui perfil sem a permissão "ACAO_APROVAR_FRETE"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> acessa a tela de detalhes de uma solicitação de Frete Expresso<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o botão "Aprovar Cotação" deve estar desabilitado ou oculto na interface<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> qualquer tentativa de chamada direta via API REST deve retornar HTTP 403 Forbidden.
        </div>
      </div>

      ---

      <!-- 6. Matriz de Rastreabilidade & Riscos -->
      <h2>🔗 6. Matriz de Rastreabilidade & Riscos</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Requisito Funcional</th>
              <th>IT Normativa</th>
              <th>User Story Azure DevOps</th>
              <th>Casos de Teste Vinculados</th>
              <th>Risco de Falha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Criação e Governança de Perfis RBAC</td>
              <td><code>IT.OPE.22</code></td>
              <td><code>US-105: Matriz de Permissões</code></td>
              <td><code>TC_PERF_001</code>, <code>TC_PERF_002</code></td>
              <td><span class="badge-p1">Alto (Acesso Indevido)</span></td>
            </tr>
            <tr>
              <td>Intercepção de Telas & Segurança 403</td>
              <td><code>IT.OPE.56</code></td>
              <td><code>US-106: Filtro de Segurança</code></td>
              <td><code>TC_PERF_003</code></td>
              <td><span class="badge-p1">Crítico (Escalonamento de Privilégios)</span></td>
            </tr>
            <tr>
              <td>Clonagem Segura com Herança</td>
              <td><code>IT.OPE.57</code></td>
              <td><code>US-107: Clonagem de Funções</code></td>
              <td><code>TC_PERF_005</code></td>
              <td><span class="badge-p2">Médio (Inconsistência de Permissões)</span></td>
            </tr>
            <tr>
              <td>Trava de Inativação com Usuários Ativos</td>
              <td><code>IT.OPE.22</code></td>
              <td><code>US-108: Integridade de Vínculos</code></td>
              <td><code>TC_PERF_004</code></td>
              <td><span class="badge-p1">Alto (Parada Operacional de Usuários)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 7. Checklist de Regressão & Homologação -->
      <h2>🛡️ 7. Checklist de Regressão & Homologação</h2>
      <p>Procedimento padrão de verificação de segurança antes de autorizar o deploy em produção:</p>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="reg_perf_1" checked disabled>
          <label for="reg_perf_1">Validar que alterações em perfis não expiram sessões ativas indevidamente sem mensagem clara.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_perf_2" checked disabled>
          <label for="reg_perf_2">Testar que a exclusão de permissão em lote não deixa registros órfãos na tabela <code>TB_PERFIL_PERMISSAO</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_perf_3" checked disabled>
          <label for="reg_perf_3">Garantir que perfis do tipo 'CLIENTE' ou 'FORNECEDOR' jamais recebam permissões administrativas de sistema.</label>
        </div>
      </div>
    `,
    dev_content: `
      <!-- 1. Ficha Técnica de Engenharia & Stack -->
      <h2>🏛️ 1. Ficha Técnica de Engenharia & Stack Tecnológica</h2>
      <p>Especificação dos componentes Java, Beans JSF e controllers REST que orquestram a segurança RBAC:</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-dev);">
        <div class="quick-info-title">
          <span>⚙️</span>
          <span>Arquitetura de Segurança & Parâmetros de Execução</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">☕</div>
            <div>
              <div class="quick-info-label">Managed Bean JSF</div>
              <div class="quick-info-value"><code>CadastroPerfilController.java</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🛡️</div>
            <div>
              <div class="quick-info-label">Security Context</div>
              <div class="quick-info-value"><code>SessionContextBean.java</code> (<code>@SessionScoped</code>)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📦</div>
            <div>
              <div class="quick-info-label">EJB de Negócio</div>
              <div class="quick-info-value"><code>PerfilBean.java</code> (<code>@Stateless</code>)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">💾</div>
            <div>
              <div class="quick-info-label">Tabela SQL Principal</div>
              <div class="quick-info-value"><code>TB_PERFIL</code> / <code>TB_PERMISSAO</code></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabela de Componentes da Arquitetura -->
      <div class="table-container" style="margin-top: 16px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Camada Arquitetural</th>
              <th>Classe / Arquivo</th>
              <th>Pacote Java</th>
              <th>Responsabilidade Técnica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>listaPerfis.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Listagem paginada de perfis com busca rápida e contadores de usuários.</td>
            </tr>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>cadastroPerfil.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Formulário com matriz hierárquica (Treeview/Checkboxes) de permissões.</td>
            </tr>
            <tr>
              <td><strong>ManagedBean</strong></td>
              <td><code>CadastroPerfilController.java</code></td>
              <td><code>br.com.ilc.integrator.controller</code></td>
              <td><code>@ManagedBean @ViewScoped</code>: Controla seleção de permissões e clonagem de papéis.</td>
            </tr>
            <tr>
              <td><strong>EJB Remote</strong></td>
              <td><code>PerfilRemote.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.perfil</code></td>
              <td><code>@Remote</code>: Interface com métodos transacionais para persistência atômica da matriz N:N.</td>
            </tr>
            <tr>
              <td><strong>EJB Bean</strong></td>
              <td><code>PerfilBean.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.perfil</code></td>
              <td><code>@Stateless</code>: Implementação de regras de unicidade e carga eager de permissões.</td>
            </tr>
            <tr>
              <td><strong>Entity JPA</strong></td>
              <td><code>Perfil.java</code></td>
              <td><code>br.com.ilc.integrator.entity</code></td>
              <td><code>@Entity @Table(name="TB_PERFIL")</code>: Entidade JPA com relacionamento <code>@ManyToMany</code> para permissões.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 2. Diagrama de Sequência Interativo -->
      <h2>🔄 2. Diagrama de Sequência de Verificação RBAC & Persistência</h2>
      <p>Fluxo de validação de direitos de acesso e gravação transacional das permissões:</p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
sequenceDiagram
    autonumber
    actor Admin as 👤 Administrador
    participant View as 🖥️ cadastroPerfil.xhtml
    participant Ctrl as ⚙️ CadastroPerfilController (ViewScoped)
    participant EJB as 📦 PerfilBean (Stateless)
    participant DB as 💾 PostgreSQL (TB_PERFIL_PERMISSAO)
    participant Audit as 📝 TB_AUDITORIA

    Admin->>View: Seleciona permissões e clica em Salvar
    View->>Ctrl: salvarPerfil(perfilDTO, permissoesIds)
    Note over Ctrl: Valida se Nome não é nulo e lista de permissões > 0
    Ctrl->>EJB: salvarComPermissoes(perfil, listaPermissoes)
    
    critical Transação ACID (REQUIRED)
        EJB->>DB: SELECT COUNT(*) FROM TB_PERFIL WHERE NM_PERFIL = ?
        alt Nome duplicado
            EJB-->>Ctrl: Lança BusinessException("Nome já existe")
            Ctrl-->>View: FacesContext.addMessage(ERROR)
        else Nome válido
            EJB->>DB: INSERT / UPDATE TB_PERFIL
            EJB->>DB: DELETE FROM TB_PERFIL_PERMISSAO WHERE ID_PERFIL = ?
            EJB->>DB: INSERT INTO TB_PERFIL_PERMISSAO (ID_PERFIL, ID_PERMISSAO) VALUES (...)
            EJB->>Audit: INSERT INTO TB_AUDITORIA (ID_USUARIO, DS_OPERACAO, DT_LOG)
        end
    end

    EJB-->>Ctrl: Perfil salvo com sucesso
    Ctrl-->>View: Redireciona para /pages/listaPerfis.xhtml com Toast Sucesso
        </div>
      </div>

      ---

      <!-- 3. Modelagem de Dados & Schema SQL -->
      <h2>🗄️ 3. Modelagem de Dados & Schema SQL</h2>
      <p>Script DDL das tabelas relacionais que suportam o modelo de autorização RBAC:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>PostgreSQL DDL — TB_PERFIL, TB_PERMISSAO & Tabela de Associação</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar DDL</button>
        </div>
        <pre><code>-- Tabela Principal de Perfis
CREATE TABLE TB_PERFIL (
    ID_PERFIL           BIGSERIAL PRIMARY KEY,
    NM_PERFIL           VARCHAR(100) NOT NULL UNIQUE,
    DS_PERFIL           VARCHAR(255),
    TP_PERFIL           VARCHAR(30) NOT NULL, -- 'INTERNO_ILC', 'CLIENTE', 'FORNECEDOR', 'TRANSPORTADOR'
    FL_ATIVO            CHAR(1) DEFAULT 'S' NOT NULL CHECK (FL_ATIVO IN ('S', 'N')),
    DT_CADASTRO         TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    DT_ALTERACAO        TIMESTAMP
);

-- Tabela de Catálogo de Permissões do Sistema
CREATE TABLE TB_PERMISSAO (
    ID_PERMISSAO        BIGSERIAL PRIMARY KEY,
    CD_PERMISSAO        VARCHAR(80) NOT NULL UNIQUE, -- Ex: 'PAGINA_FRETE_EXPRESSO', 'ACAO_APROVAR'
    NM_PERMISSAO        VARCHAR(150) NOT NULL,
    DS_MODULO           VARCHAR(50) NOT NULL,       -- Ex: 'OPERACIONAL', 'CADASTROS', 'FINANCEIRO'
    TP_PERMISSAO        VARCHAR(20) DEFAULT 'PAGINA' -- 'PAGINA', 'ACAO_BOTAO', 'RELATORIO'
);

-- Tabela de Associação N:N entre Perfil e Permissões
CREATE TABLE TB_PERFIL_PERMISSAO (
    ID_PERFIL           BIGINT NOT NULL REFERENCES TB_PERFIL(ID_PERFIL) ON DELETE CASCADE,
    ID_PERMISSAO        BIGINT NOT NULL REFERENCES TB_PERMISSAO(ID_PERMISSAO) ON DELETE CASCADE,
    PRIMARY KEY (ID_PERFIL, ID_PERMISSAO)
);

-- Índices de Performance para Autorização em Sessão
CREATE INDEX IX_PERFIL_NOME ON TB_PERFIL(NM_PERFIL);
CREATE INDEX IX_PERFIL_PERM_FK ON TB_PERFIL_PERMISSAO(ID_PERFIL, ID_PERMISSAO);
CREATE INDEX IX_PERMISSAO_COD ON TB_PERMISSAO(CD_PERMISSAO);</code></pre>
      </div>

      ---

      <!-- 4. Catálogo de APIs REST (Migração Angular) -->
      <h2>🔌 4. Catálogo de APIs REST & Contratos de Integração</h2>
      <p>Endpoints modernos para a interface Angular 17+ consumir a matriz de permissões:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>POST /api/v1/perfis (Criação de Perfil com Permissões)</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar cURL</button>
        </div>
        <pre><code>curl -X POST "https://homolog.ilclogportal.com.br/api/v1/perfis" \\
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn..." \\
     -H "Content-Type: application/json" \\
     -d '{
       "nome": "OPERADOR_TORRE_CONTROLE",
       "descricao": "Operadores do Cockpit com visao total de viagens",
       "tipo": "INTERNO_ILC",
       "ativo": true,
       "permissoesIds": [12, 15, 28, 33, 47, 88]
     }'</code></pre>
      </div>

      ---

      <!-- 5. Regras de Negócio & Validações de Backend -->
      <h2>⚙️ 5. Regras de Negócio & Validações de Backend</h2>
      <p>Regras implementadas no EJB <code>PerfilBean.java</code> para assegurar integridade:</p>
      <ul>
        <li><strong>Validação de Unicidade:</strong> O nome do perfil é verificado via JPQL em formato case-insensitive antes de persistir.</li>
        <li><strong>Integridade de Inativação:</strong> Não é permitido inativar perfis que possuam usuários associados com flag <code>FL_ATIVO = 'S'</code>.</li>
        <li><strong>Herança na Clonagem:</strong> O método de clonagem duplica os IDs da tabela <code>TB_PERFIL_PERMISSAO</code> em uma única transação atômica.</li>
      </ul>

      ---

      <!-- 6. Guia de Troubleshooting & Diagnóstico Técnico -->
      <h2>🛠️ 6. Guia de Troubleshooting & Diagnóstico Técnico</h2>
      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ Usuário continua vendo tela antiga após alteração de permissão no perfil</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> As permissões do usuário ficam armazenadas em cache dentro do <code>SessionContextBean</code> (escopo de sessão) para evitar centenas de consultas SQL por página.<br>
              <strong>Solução Técnica:</strong> O usuário precisa deslogar e logar novamente, ou o controller deve disparar o evento de invalidação de sessão <code>sessionRegistry.refreshUserPermissions(userId)</code>.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ org.hibernate.LazyInitializationException em getPermissoes()</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> A lista <code>perfil.getPermissoes()</code> possui <code>fetch = FetchType.LAZY</code> e foi acessada fora da transação do EJB no Controller JSF.<br>
              <strong>Solução Técnica:</strong> Utilize uma query JPQL com <code>LEFT JOIN FETCH p.permissoes</code> no método <code>consultaPerfilPorIdCompleto()</code>.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- 7. Comandos de Build, Deploy & Configurações -->
      <h2>⚙️ 7. Comandos de Build, Deploy & Configurações</h2>
      <p>Instruções para compilação local e deploy no servidor de desenvolvimento:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>Comandos Maven & WildFly CLI</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar Comandos</button>
        </div>
        <pre><code># 1. Compilar e empacotar o projeto ignorando testes unitários
mvn clean install -DskipTests

# 2. Realizar o deploy do EAR no WildFly via CLI
$JBOSS_HOME/bin/jboss-cli.sh --connect --command="deploy integrator-ear/target/integrator.ear --force"

# 3. Acompanhar os logs do servidor em tempo real
tail -f $JBOSS_HOME/standalone/log/server.log | grep -E "CadastroPerfilController|PerfilBean"</code></pre>
      </div>
    `
  },

  cad_empresas: {
    id: "cad_empresas",
    title: "Empresa",
    subtitle: "Estrutura Corporativa Multi-tenant, Gestão de CNPJs, Matrizes, Filiais, Transportadores e Integração SSO Azure AD",
    category: "Fundação",
    icon: "🏢",
    summary: "Cadastra os clientes (montadoras/plantas), fornecedores de peças e transportadoras parceiras, permitindo o agrupamento em Grupos Econômicos e a configuração de Single Sign-On (SSO) via Microsoft Entra ID / Azure AD.",
    relacao: "Entidade mestra de todo o ecossistema. Define os remetentes, destinatários e transportadores em <b>Ordens de Compra</b>, <b>Promessas de Entrega</b>, <b>Frete Expresso</b> e <b>Follow Up de Viagens</b>.",
    user_content: `
      <!-- ETAPA 1: Boas-vindas & Ficha Rápida -->
      <h2>👋 1. Boas-vindas & Visão Geral do Módulo</h2>
      <p>Olá! Seja bem-vindo ao <strong>Módulo de Cadastro de Empresas e Grupos Econômicos</strong> do ILC Integrator. Esta é a espinha dorsal de todo o ecossistema logístico: cada montadora cliente, centro de distribuição, fábrica fornecedora de autopeças e transportadora parceira precisa estar devidamente registrada e parametrizada aqui para habilitar a emissão de ordens de compra, agendamento de coletas, rastreamento via Torre de Controle e auditoria de faturamento.</p>

      <div class="quick-info-box">
        <div class="quick-info-title">
          <span>📌</span>
          <span>Ficha Rápida da Operação (O que saber antes de começar)</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🏢</div>
            <div>
              <div class="quick-info-label">Quem Utiliza</div>
              <div class="quick-info-value">Administradores ILC & Gestores de Contrato</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">Tempo Médio</div>
              <div class="quick-info-value">3 a 5 minutos por empresa</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔑</div>
            <div>
              <div class="quick-info-label">Permissão Necessária</div>
              <div class="quick-info-value"><code>PAGINA_LISTA_EMPRESAS</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🎯</div>
            <div>
              <div class="quick-info-label">Impacto no Negócio</div>
              <div class="quick-info-value">Multi-tenant, NF-e, CTe, EDI, Roteirização e SSO</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 2: Como Acessar a Tela no Portal -->
      <h2>📍 2. Como Acessar a Tela de Empresas no Portal</h2>
      <p>Para gerenciar o cadastro de empresas e grupos societários, siga o fluxo de navegação no menu principal:</p>
      
      <div class="steps-container" style="margin:16px 0 24px 0;">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Acessar o Agrupamento Fundação</div>
            <p>No menu lateral esquerdo do ILC Integrator, clique no grupo <strong>Fundação</strong> para expandir os módulos de cadastros estruturais.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Selecionar a Opção Empresa ou Grupo Empresas</div>
            <p>Clique em <strong>Empresa</strong> para abrir a listagem geral (<code>/pages/listaEmpresas.xhtml</code>) ou em <strong>Grupo Empresas</strong> para gerenciar holdings e conglomerações societárias (<code>/pages/listaGruposEmpresas.xhtml</code>).</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 3: Reconhecendo o Terreno (Mapa Visual das Telas) -->
      <h2>🖥️ 3. Reconhecendo o Terreno (Mapa Visual das Telas)</h2>
      <p>Conheça as três principais interfaces visuais do módulo e onde fica cada controle operacional:</p>

      <!-- MOCKUP 1: LISTAGEM DE EMPRESAS -->
      <h3 style="margin-top:20px;">A. Tela de Listagem & Consulta (<code>/pages/listaEmpresas.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/listaEmpresas.xhtml</div>
          <span class="tag-badge">Visão da Grade</span>
        </div>
        <div class="ui-mockup-body">
          <!-- Barra de Busca e Filtros -->
          <div style="background:var(--bg-surface); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:280px;">
              <span class="hotspot-badge">1</span>
              <span style="font-weight:600; font-size:0.85rem;">Busca:</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 12px; border-radius:4px; font-size:0.82rem; color:var(--text-muted); flex:1;">CNPJ, Razão Social ou Nome Fantasia...</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">2</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:4px; font-size:0.82rem; color:var(--text-primary);">Tipo: Todos ▼</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:4px; font-size:0.82rem; color:var(--text-primary);">Grupo: Todos ▼</span>
            </div>
          </div>

          <!-- Tabela de Empresas -->
          <div style="background:var(--bg-surface); border-radius:var(--radius-md); border:1px solid var(--border-subtle); overflow:hidden;">
            <div style="padding:8px 12px; background:var(--bg-surface-subtle); border-bottom:1px solid var(--border-subtle); display:flex; align-items:center; gap:6px;">
              <span class="hotspot-badge">3</span>
              <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">GRADE DE EMPRESAS & FILIAIS CADASTRADAS</span>
            </div>
            <table class="doc-table" style="margin:0;">
              <thead>
                <tr>
                  <th>CNPJ</th>
                  <th>Razão Social / Nome Fantasia</th>
                  <th>Tipo Entidade</th>
                  <th>Grupo Econômico</th>
                  <th>SSO Microsoft</th>
                  <th>Status</th>
                  <th style="text-align:center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>60.701.190/0001-04</strong></td>
                  <td>VOLKSWAGEN DO BRASIL IND. VEÍCULOS (PLANTA ANCHIETA)</td>
                  <td><span class="tag-badge" style="background: rgba(0, 82, 204, 0.1); color: var(--ilc-primary);">CLIENTE</span></td>
                  <td>GRUPO VW DO BRASIL</td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <div style="display:inline-flex; align-items:center; gap:4px;">
                      <span class="hotspot-badge" style="margin:0;">4</span>
                      <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Editar">✏️</button>
                      <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Usuários da Empresa">👥</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>47.508.411/0001-56</strong></td>
                  <td>ROBERT BOSCH LTDA (PLANTA CAMPINAS)</td>
                  <td><span class="tag-badge" style="background: rgba(0, 168, 107, 0.1); color: var(--ilc-green);">FORNECEDOR</span></td>
                  <td>GRUPO BOSCH LATAM</td>
                  <td><span class="tag-badge" style="background:var(--bg-surface-subtle); color:var(--text-muted);">⚪ Local</span></td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Editar">✏️</button>
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Usuários da Empresa">👥</button>
                  </td>
                </tr>
                <tr>
                  <td><strong>02.451.987/0002-88</strong></td>
                  <td>TRANSLOG EXPRESS TRANSPORTES RODOVIÁRIOS LTDA</td>
                  <td><span class="tag-badge" style="background: rgba(245, 158, 11, 0.1); color: #d97706;">TRANSPORTADOR</span></td>
                  <td><em style="color:var(--text-muted);">Independente</em></td>
                  <td><span class="tag-badge" style="background:var(--bg-surface-subtle); color:var(--text-muted);">⚪ Local</span></td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Editar">✏️</button>
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Usuários da Empresa">👥</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Botão Nova Empresa -->
          <div style="display:flex; justify-content:flex-end;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">5</span>
              <button class="btn-portal-link" style="padding:6px 14px; font-size:0.82rem;">➕ Cadastrar Empresa</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DA LISTAGEM -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">1</span>
          <div><strong>Campo de Busca Multicritério:</strong> Pesquisa em tempo real por CNPJ formatado ou apenas números, Razão Social ou Nome Fantasia.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">2</span>
          <div><strong>Filtros por Tipo de Entidade & Grupo:</strong> Permite isolar instantaneamente Clientes (Montadoras), Fornecedores (Sistemistas Tier 1/2) ou Transportadores.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">3</span>
          <div><strong>Grade de Empresas:</strong> Apresenta os dados cadastrais consolidados, indicando a holding vinculada e se o login federado SSO Microsoft está ativo.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">4</span>
          <div><strong>Ações Rápidas:</strong> Permite editar dados cadastrais/fiscais e abrir diretamente a listagem de usuários vinculados a esta empresa específica.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">5</span>
          <div><strong>Botão Cadastrar Empresa:</strong> Abre o formulário completo para inclusão de uma nova unidade com validação fiscal em tempo real.</div>
        </div>
      </div>

      <!-- MOCKUP 2: FORMULÁRIO DE CADASTRO -->
      <h3 style="margin-top:32px;">B. Tela de Formulário & Configuração SSO (<code>/pages/cadastroEmpresa.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/cadastroEmpresa.xhtml</div>
          <span class="tag-badge" style="background:#e3fcef; color:#00875a;">Formulário Completo</span>
        </div>
        <div class="ui-mockup-body" style="gap:16px;">
          <!-- Bloco Dados Fiscais -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">6</span> Dados Fiscais & Identificação Corporativa
              </span>
              <span style="font-size:0.75rem; color:var(--text-muted);">* Campos Obrigatórios</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 2fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">CNPJ * (com validação Módulo 11)</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; font-family:monospace; color:var(--text-primary); margin-top:3px;">60.701.190/0001-04</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Razão Social *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">VOLKSWAGEN DO BRASIL INDUSTRIA DE VEICULOS AUTOMOTORES LTDA</div>
              </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Tipo de Entidade *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;"><span class="hotspot-badge">7</span> CLIENTE (MONTADORA) ▾</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Inscrição Estadual (IE)</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">112.334.556.789</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Nome Fantasia</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">VW PLANTA ANCHIETA</div>
              </div>
            </div>
          </div>

          <!-- Bloco Endereço -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">8</span> Localização & Endereço Operacional (Busca via CEP)
              </span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 2fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">CEP *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">09823-901</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Logradouro / Avenida</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">Via Anchieta, Km 23,5</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Município / UF</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;">São Bernardo do Campo / SP</div>
              </div>
            </div>
          </div>

          <!-- Bloco SSO Microsoft Azure AD -->
          <div style="background:rgba(0, 82, 204, 0.04); padding:16px 20px; border-radius:var(--radius-md); border:1px solid rgba(0, 82, 204, 0.2); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid rgba(0, 82, 204, 0.15); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--ilc-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">9</span> Integração Single Sign-On (Microsoft Entra ID / Azure AD)
              </span>
              <span class="tag-badge" style="background:#e3fcef; color:#00875a;">Habilitado</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Tenant ID (Directory ID)</label>
                <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.82rem; font-family:monospace; color:var(--text-primary); margin-top:3px;">8f92b1a0-4c3e-4b82-990a-112233445566</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Client ID (Application ID)</label>
                <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.82rem; font-family:monospace; color:var(--text-primary); margin-top:3px;">e3d4c5b6-7a8b-9c0d-1e2f-998877665544</div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Domínio Corporativo Permitido</label>
                <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.82rem; color:var(--text-primary); margin-top:3px;">@volkswagen.com.br</div>
              </div>
            </div>
          </div>

          <!-- Rodapé do Formulário -->
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:8px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">10</span>
              <label style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Grupo Econômico:</label>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:4px; font-size:0.82rem; font-weight:600; color:var(--text-primary);">GRUPO VW DO BRASIL ▾</span>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn-portal-secondary" style="padding:6px 14px; font-size:0.82rem;">Cancelar</button>
              <button class="btn-portal-link" style="padding:6px 16px; font-size:0.82rem;">💾 Salvar Empresa</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DO FORMULÁRIO -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">6</span>
          <div><strong>Validação Automática de CNPJ:</strong> O portal aplica máscara automática e valida a consistência fiscal pelo cálculo Módulo 11 da Receita Federal.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">7</span>
          <div><strong>Classificação da Entidade (Tipo):</strong> Define o comportamento operacional (Montadora compradora, Sistemista vendedor ou Transportador de carga).</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">8</span>
          <div><strong>Preenchimento Inteligente por CEP:</strong> Consulta o webservice de endereçamento e preenche Logradouro, Bairro e Município automaticamente.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">9</span>
          <div><strong>Painel de Integração SSO Azure AD:</strong> Vincula a empresa ao diretório Microsoft Entra ID para login federado sem necessidade de senhas locais.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">10</span>
          <div><strong>Associação a Holding / Grupo Econômico:</strong> Agrupa filiais para consolidar faturamento e relatórios gerenciais unificados.</div>
        </div>
      </div>

      ---

      <!-- ETAPA 4: Passo a Passo Operacional Ilustrado -->
      <h2>📝 4. Passo a Passo Operacional Ilustrado</h2>

      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">1. Acessar a Tela e Iniciar o Cadastro</div>
            <p>Na tela de listagem (<code>/pages/listaEmpresas.xhtml</code>), clique no botão <strong>➕ Cadastrar Empresa</strong> localizado no canto superior direito.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">2. Preencher CNPJ e Dados Fiscais</div>
            <p>Informe o <strong>CNPJ</strong> de 14 dígitos (o sistema confere os dígitos verificadores pelo cálculo Módulo 11 em tempo real), a <strong>Razão Social</strong> completa, o <strong>Nome Fantasia</strong> e a <strong>Inscrição Estadual (IE)</strong>.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">3. Selecionar o Tipo de Entidade e Endereço via CEP</div>
            <p>Selecione a classificação operacional (<code>CLIENTE</code>, <code>FORNECEDOR</code> ou <code>TRANSPORTADOR</code>) e digite o <strong>CEP</strong> para que o sistema preencha automaticamente o Logradouro, Bairro e Município.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-title">4. Vincular Grupo Econômico ou Parametrizar SSO Azure AD</div>
            <p>Se a unidade fizer parte de uma montadora ou holding (ex: VW, Stellantis), selecione o <strong>Grupo Econômico</strong>. Caso utilize login corporativo federado, preencha o <strong>Tenant ID</strong>, <strong>Client ID</strong> e o <strong>Domínio de e-mail</strong>.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-body">
            <div class="step-title">5. Salvar e Liberar na Esteira Operacional</div>
            <p>Clique em <strong>💾 Salvar Empresa</strong>. O registro é persistido com garantia transacional ACID e a empresa fica imediatamente disponível para vínculo na matriz de <strong>Cliente x Fornecedor</strong> e emissão de ordens de compra.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 5: Casos de Uso Reais do Dia a Dia (6 Cenários Práticos) -->
      <h2>🎯 5. Casos de Uso Reais do Dia a Dia (6 Cenários Práticos)</h2>

      <div class="use-case-grid">
        <!-- Card 1 -->
        <div class="use-case-card">
          <h4><span>🏭</span> Caso 1: Cadastrar Planta / Filial de Montadora</h4>
          <p>Para registrar uma nova fábrica ou centro produtivo cliente (ex: Volkswagen Planta Anchieta, Stellantis Betim).</p>
          <ol class="use-case-steps">
            <li>Informe o CNPJ da filial (o sistema valida os dígitos verificadores).</li>
            <li>Selecione o tipo <strong>CLIENTE (MONTADORA)</strong> e vincule ao Grupo Econômico da montadora.</li>
            <li>Configure o SSO Azure AD com o domínio <code>@volkswagen.com.br</code> para login corporativo direto.</li>
          </ol>
        </div>

        <!-- Card 2 -->
        <div class="use-case-card">
          <h4><span>🔩</span> Caso 2: Homologar Fornecedor Sistemista Tier 1</h4>
          <p>Para indústrias sistemistas que fornecem autopeças e precisam responder promessas de entrega.</p>
          <ol class="use-case-steps">
            <li>Preencha o CNPJ, Razão Social e Inscrição Estadual do fornecedor parceiro.</li>
            <li>Selecione o tipo <strong>FORNECEDOR</strong> e informe o CEP da expedição para cálculo de rotas.</li>
            <li>O sistema habilitará a empresa para parametrização na matriz de <strong>Cliente x Fornecedor</strong>.</li>
          </ol>
        </div>

        <!-- Card 3 -->
        <div class="use-case-card">
          <h4><span>🚛</span> Caso 3: Credenciar Transportadora Frotista</h4>
          <p>Para transportadores que operam rotas de Milk Run, entregas fracionadas e cotações de Frete Expresso.</p>
          <ol class="use-case-steps">
            <li>Cadastre o CNPJ com a tipificação <strong>TRANSPORTADOR</strong>.</li>
            <li>Informe o endereço operacional e contatos comerciais do despachante.</li>
            <li>A transportadora poderá receber ofertas de fretes, vincular placas de veículos e enviar canhotos digitais.</li>
          </ol>
        </div>

        <!-- Card 4 -->
        <div class="use-case-card">
          <h4><span>🌐</span> Caso 4: Estruturar Holding / Grupo Econômico</h4>
          <p>Para consolidar faturamento, relatórios de volumetria e SLAs de múltiplas fábricas do mesmo grupo.</p>
          <ol class="use-case-steps">
            <li>Acesse <code>/pages/listaGruposEmpresas.xhtml</code> e crie a holding (ex: <code>GRUPO STELLANTIS</code>).</li>
            <li>Edite cada uma das filiais e selecione o grupo econômico correspondente.</li>
            <li>A Central de BI e a Torre de Controle passarão a exibir visões consolidadas e individuais.</li>
          </ol>
        </div>

        <!-- Card 5 -->
        <div class="use-case-card">
          <h4><span>🔐</span> Caso 5: Ativar Login Federado SSO Microsoft Azure AD</h4>
          <p>Para clientes corporativos que exigem autenticação centralizada com Microsoft Entra ID e MFA.</p>
          <ol class="use-case-steps">
            <li>No formulário da empresa, expanda o painel <strong>Integração Single Sign-On</strong>.</li>
            <li>Informe o <strong>Tenant ID</strong>, <strong>Client ID</strong> e o sufixo de e-mail corporativo permitido.</li>
            <li>Os colaboradores da montadora passam a autenticar com um clique via "Entrar com Microsoft".</li>
          </ol>
        </div>

        <!-- Card 6 -->
        <div class="use-case-card" style="border-top-color: var(--ilc-accent);">
          <h4><span>🔒</span> Caso 6: Inativação Segura com Trava de Integridade</h4>
          <p>Para desativar uma unidade encerrada sem quebrar viagens em trânsito ou histórico contábil/fiscal.</p>
          <ol class="use-case-steps">
            <li>Localize a empresa na listagem e clique no botão de <strong>Inativação</strong>.</li>
            <li>O sistema verifica automaticamente ausência de viagens ativas e pedidos em aberto.</li>
            <li>O status é atualizado para <code>INATIVO</code> (<code>FL_ATIVO = 'N'</code>) preservando histórico fiscal.</li>
          </ol>
        </div>
      </div>

      ---

      <!-- ETAPA 6: Erros Mais Comuns & Como Resolver (Troubleshooting) -->
      <h2>🛠️ 6. Erros Mais Comuns & Como Resolver (Troubleshooting)</h2>
      <p>Respostas diretas para as dúvidas mais comuns na rotina de cadastro de empresas:</p>

      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Erro: "CNPJ inválido: dígito verificador incorreto" — O que fazer?</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Os 2 últimos dígitos do CNPJ não conferem com o cálculo matemático oficial do Módulo 11 da Receita Federal.<br>
              <strong>Como Resolver:</strong> Consulte o Cartão CNPJ no portal da Receita Federal e certifique-se de que não houve inversão de números ou omissão de zeros à esquerda.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Mensagem: "Já existe uma empresa cadastrada com este CNPJ no sistema"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> A chave única de CNPJ é estrita em todo o banco de dados para garantir integridade fiscal.<br>
              <strong>Como Resolver:</strong> Na grade de empresas, filtre pelo CNPJ selecionando o status "Todos" (incluindo Inativos). Caso a empresa já exista inativa, clique em editar e reative o registro.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Por que não consigo excluir definitivamente uma empresa do portal?</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Para garantir conformidade fiscal (LGPD / SPED / SEFAZ), o sistema adota exclusão lógica (<code>FL_ATIVO = 'N'</code>).<br>
              <strong>Como Resolver:</strong> Empresas inativadas não aparecem em novas ordens de compra ou seleções operacionais, mas todo o histórico de notas fiscais e viagens passadas é preservado para auditoria.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Como testar se a integração SSO Microsoft Azure AD está funcionando?</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Procedimento:</strong> Após cadastrar Tenant ID, Client ID e Domínio, acerte o e-mail corporativo de um usuário de testes e tente logar na tela inicial clicando em "Entrar com Microsoft". O portal validará o token JWT e iniciará a sessão automaticamente.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- ETAPA 7: Glossário & Dica de Ouro da Governança ILC -->
      <h2>📖 7. Glossário em Linguagem Simples & Dicas de Ouro</h2>
      <div class="table-container" style="margin-bottom:20px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Termo</th>
              <th>Significado Prático no Ecossistema ILC Integrator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CNPJ / Matriz / Filial</strong></td>
              <td>Identificador fiscal único perante a Receita Federal. O ILC Integrator trata cada filial como um ponto físico independente de coleta ou entrega.</td>
            </tr>
            <tr>
              <td><strong>Grupo Econômico</strong></td>
              <td>Estrutura societária que reúne várias filiais sob a mesma holding (ex: Grupo Stellantis reunindo plantas de Betim, Goiana e Porto Real).</td>
            </tr>
            <tr>
              <td><strong>Single Sign-On (SSO)</strong></td>
              <td>Mecanismo de login único que permite aos colaboradores usarem credenciais Microsoft 365 / Azure AD sem necessidade de senhas locais.</td>
            </tr>
            <tr>
              <td><strong>Tenant ID</strong></td>
              <td>Identificador exclusivo da organização cliente dentro da nuvem corporativa da Microsoft (formato GUID).</td>
            </tr>
            <tr>
              <td><strong>Incoterm (CIF / FOB)</strong></td>
              <td>Modalidade de responsabilidade do frete: CIF (pago pelo fornecedor) ou FOB (pago pelo cliente comprador).</td>
            </tr>
            <tr>
              <td><strong>Multi-tenant</strong></td>
              <td>Mecanismo que garante que um usuário de fornecedor ou transportador só visualize dados pertinentes à sua própria empresa.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Card de Destaque Especial: Dica de Ouro da Governança ILC -->
      <div class="governance-gold-card">
        <div class="governance-gold-header">
          <div class="governance-gold-icon">👑</div>
          <div>
            <div class="governance-gold-badge">✨ Dica de Ouro da Governança ILC</div>
            <div class="governance-gold-title">Padronização Mandatória de Nome Fantasia</div>
          </div>
        </div>
        <div class="governance-gold-body">
          <p style="margin: 0 0 10px 0;">
            Ao cadastrar filiais de montadoras ou sistemistas, <strong>padronize sempre o Nome Fantasia incluindo a cidade ou planta operacional</strong> (exemplo: <code>VW - PLANTA ANCHIETA</code>, <code>VW - SÃO JOSÉ DOS PINHAIS</code>, <code>BOSCH - CAMPINAS</code>).
          </p>
          <div style="background: rgba(217, 119, 6, 0.08); border-left: 3px solid #d97706; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem;">
            <strong>🎯 Impacto Direto na Operação:</strong> Evita divergências e erros humanos no <strong>Roteirizador</strong>, no <strong>Follow Up de Viagens</strong> e nos painéis executivos do <strong>Cockpit da Torre de Controle</strong>.
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 8: Próximos Passos Recomendados -->
      <div class="next-steps-container">
        <div>
          <div class="next-steps-title">🚀 8. Próximos Passos Recomendados</div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Após cadastrar as empresas e configurar seus grupos, continue a esteira de parametrização:</div>
        </div>
        <div class="next-steps-actions">
          <a href="#cad_cliente_fornecedor/user" class="next-step-btn" onclick="window.navigateTo('cad_cliente_fornecedor')">
            <span>🔗</span>
            <span>Parametrizar Cliente x Fornecedor</span>
          </a>
          <a href="#cad_usuarios/user" class="next-step-btn" onclick="window.navigateTo('cad_usuarios')">
            <span>👤</span>
            <span>Cadastrar Usuários</span>
          </a>
          <a href="#cad_perfis/user" class="next-step-btn" onclick="window.navigateTo('cad_perfis')">
            <span>🛡️</span>
            <span>Atribuir Perfis & Alçadas</span>
          </a>
        </div>
      </div>
    `,

    qa_content: `
      <!-- 1. Ficha Técnica de QA & Escopo de Homologação -->
      <h2>📋 1. Ficha Técnica de QA & Escopo de Homologação</h2>
      <p>Diretrizes mandatórias e parâmetros de qualidade para homologação do módulo de Empresas e Grupos Econômicos:</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-qa);">
        <div class="quick-info-title">
          <span>🧪</span>
          <span>Parâmetros de Teste & Qualidade (QA)</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🎯</div>
            <div>
              <div class="quick-info-label">Criticidade</div>
              <div class="quick-info-value"><span class="badge-p1">P1 — Crítico (Fundação Cadastral & Segurança SSO)</span></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔬</div>
            <div>
              <div class="quick-info-label">Tipos de Teste</div>
              <div class="quick-info-value">Funcional, Fiscal (Módulo 11), Segurança SSO OAuth2, Multi-tenant, Integridade ACID</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📜</div>
            <div>
              <div class="quick-info-label">ITs Normativas</div>
              <div class="quick-info-value"><code>IT.OPE.03</code> (Empresas) & <code>IT.OPE.04</code> (Grupos Econômicos)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">SLA de Correção</div>
              <div class="quick-info-value">4 horas para Bloqueante (Sev 1) / 12h para Alta (Sev 2)</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- 2. Roteiro Passo a Passo de Testes Manuais -->
      <h2>🧪 2. Roteiro Passo a Passo de Testes Manuais (Azure Test Plans)</h2>
      <p>Casos de teste estruturados prontos para execução manual e rastreamento no Azure DevOps:</p>

      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>ID do Teste</th>
              <th>Objetivo do Teste</th>
              <th>Pré-condições</th>
              <th>Passos de Execução</th>
              <th>Resultado Esperado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>TC_EMP_001</code></td>
              <td>Cadastro de Empresa Cliente com CNPJ válido e CEP</td>
              <td>Usuário logado com perfil <code>ADMINISTRADOR_ILC</code></td>
              <td>1. Acessar <code>/pages/cadastroEmpresa.xhtml</code><br>2. Preencher CNPJ válido <code>60.701.190/0001-04</code><br>3. Preencher Razão Social e Tipo <code>CLIENTE</code><br>4. Informar CEP <code>09823-901</code> e salvar</td>
              <td>Empresa persistida na tabela <code>TB_EMPRESA</code>, endereço preenchido via CEP e toast de sucesso exibido.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_002</code></td>
              <td>Rejeição de CNPJ com Dígito Verificador Inválido</td>
              <td>Formulário de cadastro aberto</td>
              <td>1. Informar CNPJ com dígito incorreto <code>60.701.190/0001-99</code><br>2. Clicar em Salvar</td>
              <td>Sistema impede a gravação e exibe mensagem de validação: <em>"CNPJ inválido: dígito verificador incorreto"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_003</code></td>
              <td>Bloqueio de Duplicidade de CNPJ</td>
              <td>CNPJ <code>60.701.190/0001-04</code> já cadastrado</td>
              <td>1. Tentar cadastrar nova empresa com o mesmo CNPJ<br>2. Clicar em Salvar</td>
              <td>Bloqueio transacional com mensagem: <em>"Já existe uma empresa cadastrada com este CNPJ"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_004</code></td>
              <td>Criação de Grupo Econômico e Associação de Filiais</td>
              <td>Múltiplas filiais cadastradas</td>
              <td>1. Acessar <code>/pages/listaGruposEmpresas.xhtml</code><br>2. Criar grupo <code>GRUPO STELLANTIS</code><br>3. Associar 3 filiais ao grupo</td>
              <td>Grupo registrado em <code>TB_GRUPO_EMPRESAS</code> e vínculos gravados em <code>TB_EMPRESA_GRUPO</code>.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_005</code></td>
              <td>Autenticação SSO via Microsoft Entra ID (Azure AD)</td>
              <td>Empresa com Tenant ID e Client ID configurados</td>
              <td>1. Clicar em "Entrar com Microsoft"<br>2. Autenticar com e-mail corporativo do domínio cadastrado</td>
              <td>Token JWT validado com sucesso, usuário autenticado sem digitação de senha local.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_006</code></td>
              <td>Trava de Inativação com Viagens em Andamento</td>
              <td>Empresa vinculada a viagem em status <code>EM_TRANSITO</code></td>
              <td>1. Na listagem de empresas, tentar inativar a empresa<br>2. Confirmar diálogo de inativação</td>
              <td>Operação bloqueada com alerta: <em>"Não é possível inativar a empresa: existem viagens ativas vinculadas"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_007</code></td>
              <td>Reativação de Empresa Inativa</td>
              <td>Empresa em status <code>INATIVO</code></td>
              <td>1. Filtrar listagem por status "Todos"<br>2. Clicar em Editar na empresa inativa<br>3. Marcar Ativo e salvar</td>
              <td>Status atualizado para <code>FL_ATIVO = 'S'</code> e empresa liberada para novas ordens de compra.</td>
            </tr>
            <tr>
              <td><code>TC_EMP_008</code></td>
              <td>Isolamento Multi-tenant por Empresa</td>
              <td>Dois usuários logados de transportadoras distintas</td>
              <td>1. Usuário A acessa a lista de coletas<br>2. Usuário B acessa a lista de coletas</td>
              <td>Cada usuário visualiza estritamente os manifestos e ordens vinculados ao seu próprio CNPJ.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 3. Matriz de Validação do Sistema & Mensagens Reais de Erro -->
      <h2>⚠️ 3. Matriz de Validação do Sistema & Mensagens Reais de Erro</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Campo / Operação</th>
              <th>Regra de Negócio</th>
              <th>Mensagem Real no Portal</th>
              <th>Severidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CNPJ (Formato/Dígito)</strong></td>
              <td>Obrigatório, 14 dígitos e algoritmo Módulo 11</td>
              <td><code>CNPJ inválido: dígito verificador incorreto</code></td>
              <td><span class="badge-p1">Sev 1 (Bloqueante)</span></td>
            </tr>
            <tr>
              <td><strong>CNPJ (Unicidade)</strong></td>
              <td>Não permitir duplicidade no banco de dados</td>
              <td><code>Já existe uma empresa cadastrada com este CNPJ</code></td>
              <td><span class="badge-p1">Sev 1 (Bloqueante)</span></td>
            </tr>
            <tr>
              <td><strong>Razão Social</strong></td>
              <td>Preenchimento obrigatório (3 a 200 caracteres)</td>
              <td><code>O campo Razão Social é de preenchimento obrigatório</code></td>
              <td><span class="badge-p2">Sev 2 (Formulário)</span></td>
            </tr>
            <tr>
              <td><strong>Tipo de Entidade</strong></td>
              <td>Obrigatório (<code>CLIENTE</code>, <code>FORNECEDOR</code>, <code>TRANSPORTADOR</code>)</td>
              <td><code>Selecione o Tipo de Entidade da empresa</code></td>
              <td><span class="badge-p2">Sev 2 (Formulário)</span></td>
            </tr>
            <tr>
              <td><strong>SSO Tenant ID</strong></td>
              <td>Formato GUID válido quando SSO estiver ativo</td>
              <td><code>Tenant ID inválido: informe um identificador GUID válido</code></td>
              <td><span class="badge-p2">Sev 2 (Segurança)</span></td>
            </tr>
            <tr>
              <td><strong>Inativação</strong></td>
              <td>Não possuir viagens ou pedidos em andamento</td>
              <td><code>Não é possível inativar: existem operações ativas vinculadas a esta empresa</code></td>
              <td><span class="badge-p1">Sev 1 (Integridade)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 4. Critérios de Aceite & Definition of Done (DoD) -->
      <h2>✅ 4. Critérios de Aceite & Definition of Done (DoD)</h2>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="dod_emp_1" checked disabled>
          <label for="dod_emp_1"><strong>Validação de CNPJ Ponta a Ponta:</strong> Algoritmo Módulo 11 executado no frontend (JS/Angular) e no backend (EJB/Spring Boot).</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_emp_2" checked disabled>
          <label for="dod_emp_2"><strong>Auditoria Imutável:</strong> Criação, edição e inativação de empresas geram logs com IP, usuário e payload em <code>TB_AUDITORIA</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_emp_3" checked disabled>
          <label for="dod_emp_3"><strong>Segurança SSO:</strong> Chaves públicas da Microsoft validadas via OpenID Connect sem bypass de autenticação.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_emp_4" checked disabled>
          <label for="dod_emp_4"><strong>Integridade de Grupos Econômicos:</strong> A exclusão de um grupo não remove as empresas filhas, apenas desvincula o relacionamento.</label>
        </div>
      </div>

      ---

      <!-- 5. Especificação BDD em Gherkin -->
      <h2>🥒 5. Especificação BDD em Gherkin (Cenários Automatizáveis)</h2>
      <div class="bdd-feature-card">
        <div class="bdd-header">
          <div class="bdd-title">
            <span>🥒</span>
            <span>Funcionalidade: Gestão de Empresas, Grupos Econômicos & SSO</span>
          </div>
          <span class="tag-badge">Gherkin BDD</span>
        </div>
        <div class="bdd-body">
          <span class="bdd-keyword">Funcionalidade:</span> Cadastro de Empresas, Grupos Societários e Autenticação SSO<br>
          &nbsp;&nbsp;Como Administrador do ILC Integrator<br>
          &nbsp;&nbsp;Quero cadastrar as unidades de clientes, fornecedores e transportadoras<br>
          &nbsp;&nbsp;Para viabilizar a emissão de ordens de compra, agendamento de viagens e login federado Azure AD<br><br>

          <span class="bdd-keyword">@smoke @positivo</span><br>
          <span class="bdd-keyword">Cenário:</span> Cadastro de nova filial de montadora cliente com sucesso<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o Administrador está na tela "/pages/cadastroEmpresa.xhtml"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> preenche o CNPJ "60.701.190/0001-04"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> seleciona o Tipo "CLIENTE (MONTADORA)"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> seleciona o Grupo Econômico "GRUPO VW DO BRASIL"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> clica em "Salvar"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> a empresa deve ser persistida na tabela "TB_EMPRESA"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> deve exibir a mensagem "Empresa cadastrada com sucesso!"<br><br>

          <span class="bdd-keyword">@validacao @negativo</span><br>
          <span class="bdd-keyword">Cenário:</span> Bloqueio de CNPJ com dígito verificador incorreto<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o Administrador informa o CNPJ "60.701.190/0001-99"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> tenta salvar o formulário<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o sistema não deve persistir o registro no banco de dados<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> deve destacar o campo com a mensagem "CNPJ inválido: dígito verificador incorreto"<br><br>

          <span class="bdd-keyword">@sso_azure_ad</span><br>
          <span class="bdd-keyword">Cenário:</span> Autenticação de usuário corporativo via Microsoft Entra ID<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que a empresa possui Tenant ID "8f92b1a0-4c3e-4b82-990a-112233445566" configurado<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> o usuário "gestor@volkswagen.com.br" realiza o login federado<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o sistema valida o token JWT recebido<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> autentica o usuário na sessão do portal com as permissões da sua empresa.<br><br>

          <span class="bdd-keyword">@integridade @trava</span><br>
          <span class="bdd-keyword">Cenário:</span> Impedir inativação de empresa com viagens em trânsito<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que a empresa "Robert Bosch Ltda" possui viagens com status "EM_TRANSITO"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> o Administrador tenta inativar a empresa<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> a inativação deve ser bloqueada<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> o sistema exibe a mensagem "Não é possível inativar: existem operações ativas vinculadas a esta empresa".
        </div>
      </div>

      ---

      <!-- 6. Matriz de Rastreabilidade & Riscos -->
      <h2>🔗 6. Matriz de Rastreabilidade & Riscos</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Requisito Funcional</th>
              <th>IT Normativa</th>
              <th>User Story Azure DevOps</th>
              <th>Casos de Teste Vinculados</th>
              <th>Risco de Falha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Validação e Cadastro de CNPJ</td>
              <td><code>IT.OPE.03</code></td>
              <td><code>US-110: Cadastro de Empresas</code></td>
              <td><code>TC_EMP_001</code>, <code>TC_EMP_002</code>, <code>TC_EMP_003</code></td>
              <td><span class="badge-p1">Crítico (Inconsistência Fiscal / NF-e)</span></td>
            </tr>
            <tr>
              <td>Gestão de Grupos Econômicos</td>
              <td><code>IT.OPE.04</code></td>
              <td><code>US-111: Holdings e Grupos</code></td>
              <td><code>TC_EMP_004</code></td>
              <td><span class="badge-p2">Médio (Falha em Relatórios Consolidados)</span></td>
            </tr>
            <tr>
              <td>Integração SSO Azure AD</td>
              <td><code>IT.OPE.03</code></td>
              <td><code>US-112: Login Federado Entra ID</code></td>
              <td><code>TC_EMP_005</code></td>
              <td><span class="badge-p1">Alto (Bloqueio de Acesso de Clientes)</span></td>
            </tr>
            <tr>
              <td>Trava de Inativação Segura</td>
              <td><code>IT.OPE.03</code></td>
              <td><code>US-113: Integridade Operacional</code></td>
              <td><code>TC_EMP_006</code></td>
              <td><span class="badge-p1">Alto (Parada de Rastreamento de Viagens)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 7. Checklist de Regressão & Homologação -->
      <h2>🛡️ 7. Checklist de Regressão & Homologação</h2>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="reg_emp_1" checked disabled>
          <label for="reg_emp_1">Garantir que a alteração de Razão Social não quebre a exibição de NFs e CTe históricos.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_emp_2" checked disabled>
          <label for="reg_emp_2">Testar que a desvinculação de uma filial de um Grupo Econômico não corrompe a tabela <code>TB_EMPRESA</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_emp_3" checked disabled>
          <label for="reg_emp_3">Validar que tokens JWT de outros tenants do Azure AD sejam terminantemente rejeitados com HTTP 401 Unauthorized.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_emp_4" checked disabled>
          <label for="reg_emp_4">Verificar a integridade do isolamento multi-tenant entre transportadoras parceiras na grade operacional.</label>
        </div>
      </div>
    `,

    dev_content: `
      <!-- 1. Ficha Técnica de Engenharia & Stack -->
      <h2>🏛️ 1. Ficha Técnica de Engenharia & Stack Tecnológica</h2>
      <p>Especificação dos componentes Java, Beans JSF, EJBs, conectores de autenticação federada e componentes Angular 17+:</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-dev);">
        <div class="quick-info-title">
          <span>⚙️</span>
          <span>Arquitetura de Backend & Componentes Enterprise</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">☕</div>
            <div>
              <div class="quick-info-label">Managed Bean JSF</div>
              <div class="quick-info-value"><code>CadastroEmpresaController.java</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📦</div>
            <div>
              <div class="quick-info-label">EJB de Negócio</div>
              <div class="quick-info-value"><code>EmpresaBean.java</code> (<code>@Stateless</code>)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔐</div>
            <div>
              <div class="quick-info-label">Provedor de SSO</div>
              <div class="quick-info-value"><code>AzureAdAuthProvider.java</code> (OAuth2/OIDC)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">💾</div>
            <div>
              <div class="quick-info-label">Tabelas SQL</div>
              <div class="quick-info-value"><code>TB_EMPRESA</code> / <code>TB_GRUPO_EMPRESAS</code></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabela de Componentes da Arquitetura -->
      <div class="table-container" style="margin-top: 16px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Camada Arquitetural</th>
              <th>Classe / Arquivo</th>
              <th>Pacote Java / Módulo</th>
              <th>Responsabilidade Técnica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>listaEmpresas.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Listagem com paginação LazyDataModel e filtros combinados de CNPJ/Tipo/Grupo.</td>
            </tr>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>cadastroEmpresa.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Formulário com máscara de CNPJ, auto-complete de CEP e parâmetros SSO.</td>
            </tr>
            <tr>
              <td><strong>ManagedBean</strong></td>
              <td><code>CadastroEmpresaController.java</code></td>
              <td><code>br.com.ilc.integrator.controller</code></td>
              <td><code>@ManagedBean @ViewScoped</code>: Controla o ciclo de vida da tela e chamada aos EJBs.</td>
            </tr>
            <tr>
              <td><strong>EJB Remote</strong></td>
              <td><code>EmpresaRemote.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.empresa</code></td>
              <td><code>@Remote</code>: Interface com métodos de negócio e validação fiscal de CNPJ.</td>
            </tr>
            <tr>
              <td><strong>EJB Bean</strong></td>
              <td><code>EmpresaBean.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.empresa</code></td>
              <td><code>@Stateless</code>: Implementação de regras transacionais e validação do algoritmo Módulo 11.</td>
            </tr>
            <tr>
              <td><strong>Entity JPA</strong></td>
              <td><code>Empresa.java</code></td>
              <td><code>br.com.ilc.integrator.entity</code></td>
              <td><code>@Entity @Table(name="TB_EMPRESA")</code>: Mapeamento ORM com relacionamentos ManyToOne e ManyToMany.</td>
            </tr>
            <tr>
              <td><strong>Frontend Angular</strong></td>
              <td><code>empresa-form.component.ts</code></td>
              <td><code>/src/app/pages/cadastros/empresa/</code></td>
              <td>Componente Standalone Angular 17+ com Signals reativos e validação de formulário.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 2. Diagrama de Sequência Interativo -->
      <h2>🔄 2. Diagrama de Sequência de Cadastro & Validação Fiscal</h2>
      <p>Fluxo de validação de CNPJ, persistência transacional ACID e auditoria:</p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
sequenceDiagram
    autonumber
    actor Admin as 👤 Administrador
    participant View as 🖥️ cadastroEmpresa.xhtml
    participant Ctrl as ⚙️ CadastroEmpresaController
    participant EJB as 📦 EmpresaBean (Stateless)
    participant Val as 🔍 CNPJValidator (Mod 11)
    participant DB as 💾 PostgreSQL (TB_EMPRESA)
    participant Audit as 📝 TB_AUDITORIA

    Admin->>View: Informa CNPJ, Razão Social e clica em Salvar
    View->>Ctrl: salvarEmpresa(empresaDTO)
    Ctrl->>Val: validarDigitoCNPJ(cnpj)
    alt CNPJ com dígito inválido
        Val-->>Ctrl: Retorna false
        Ctrl-->>View: FacesContext.addMessage("CNPJ inválido: dígito verificador incorreto")
    else CNPJ válido
        Val-->>Ctrl: Retorna true
        Ctrl->>EJB: salvarComGrupo(empresa, idGrupo)
        
        critical Transação ACID (REQUIRED)
            EJB->>DB: SELECT COUNT(*) FROM TB_EMPRESA WHERE NR_CNPJ = ?
            alt CNPJ já cadastrado
                EJB-->>Ctrl: Lança BusinessException("CNPJ já cadastrado")
                Ctrl-->>View: FacesContext.addMessage(ERROR)
            else CNPJ novo
                EJB->>DB: INSERT INTO TB_EMPRESA (NR_CNPJ, NM_RAZAO_SOCIAL, TP_EMPRESA, ...)
                alt Possui Grupo Econômico
                    EJB->>DB: INSERT INTO TB_EMPRESA_GRUPO (ID_EMPRESA, ID_GRUPO)
                end
                EJB->>Audit: INSERT INTO TB_AUDITORIA (ID_USUARIO, DS_OPERACAO, DT_LOG)
            end
        end

        EJB-->>Ctrl: Empresa salva com sucesso
        Ctrl-->>View: Redireciona para /pages/listaEmpresas.xhtml com Toast Sucesso
    end
        </div>
      </div>

      ---

      <!-- 3. Modelagem de Dados & Schema SQL -->
      <h2>🗄️ 3. Modelagem de Dados & Schema SQL</h2>
      <p>Script DDL das tabelas de empresas, grupos econômicos e integridade referencial:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>PostgreSQL DDL — TB_GRUPO_EMPRESAS, TB_EMPRESA & TB_EMPRESA_GRUPO</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar DDL</button>
        </div>
        <pre><code>-- 1. Tabela de Grupos Econômicos (Holdings)
CREATE TABLE TB_GRUPO_EMPRESAS (
    ID_GRUPO            BIGSERIAL PRIMARY KEY,
    NM_GRUPO            VARCHAR(150) NOT NULL UNIQUE,
    DS_GRUPO            VARCHAR(255),
    FL_ATIVO            CHAR(1) DEFAULT 'S' NOT NULL CHECK (FL_ATIVO IN ('S', 'N')),
    DT_CADASTRO         TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    DT_ALTERACAO        TIMESTAMP
);

-- 2. Tabela Principal de Empresas (Multi-tenant)
CREATE TABLE TB_EMPRESA (
    ID_EMPRESA          BIGSERIAL PRIMARY KEY,
    NR_CNPJ             VARCHAR(14) NOT NULL UNIQUE, -- CNPJ sem máscara (somente 14 dígitos numéricos)
    NM_RAZAO_SOCIAL     VARCHAR(200) NOT NULL,
    NM_FANTASIA         VARCHAR(150),
    NR_INSCRICAO_ESTADUAL VARCHAR(30),
    TP_EMPRESA          VARCHAR(30) NOT NULL CHECK (TP_EMPRESA IN ('CLIENTE', 'FORNECEDOR', 'TRANSPORTADOR', 'ILC')),
    DS_CEP              VARCHAR(8),
    DS_ENDERECO         VARCHAR(200),
    NR_ENDERECO         VARCHAR(20),
    DS_COMPLEMENTO      VARCHAR(100),
    NM_BAIRRO           VARCHAR(100),
    NM_MUNICIPIO        VARCHAR(100),
    SG_UF               CHAR(2),
    -- Parâmetros de Integração SSO Microsoft Entra ID (Azure AD)
    CD_SSO_TENANT_ID    VARCHAR(64),
    CD_SSO_CLIENT_ID    VARCHAR(64),
    DS_SSO_DOMAIN       VARCHAR(100),
    FL_SSO_ATIVO        CHAR(1) DEFAULT 'N' CHECK (FL_SSO_ATIVO IN ('S', 'N')),
    FL_ATIVO            CHAR(1) DEFAULT 'S' NOT NULL CHECK (FL_ATIVO IN ('S', 'N')),
    DT_CADASTRO         TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    DT_ALTERACAO        TIMESTAMP
);

-- 3. Tabela Associativa N:N entre Empresa e Grupos Econômicos
CREATE TABLE TB_EMPRESA_GRUPO (
    ID_EMPRESA          BIGINT NOT NULL REFERENCES TB_EMPRESA(ID_EMPRESA) ON DELETE CASCADE,
    ID_GRUPO            BIGINT NOT NULL REFERENCES TB_GRUPO_EMPRESAS(ID_GRUPO) ON DELETE RESTRICT,
    PRIMARY KEY (ID_EMPRESA, ID_GRUPO)
);

-- Índices de Alta Performance para Buscas em Tempo Real
CREATE UNIQUE INDEX IX_EMPRESA_CNPJ ON TB_EMPRESA(NR_CNPJ);
CREATE INDEX IX_EMPRESA_RAZAO ON TB_EMPRESA(NM_RAZAO_SOCIAL);
CREATE INDEX IX_EMPRESA_TIPO ON TB_EMPRESA(TP_EMPRESA);
CREATE INDEX IX_EMPRESA_SSO_DOMAIN ON TB_EMPRESA(DS_SSO_DOMAIN) WHERE FL_SSO_ATIVO = 'S';</code></pre>
      </div>

      ---

      <!-- 4. Catálogo de APIs REST & Contratos de Integração -->
      <h2>🔌 4. Catálogo de APIs REST & Contratos de Integração</h2>
      <p>Endpoints no padrão OpenAPI 3.0 para consumo por microsserviços e pela interface Angular 17+:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>POST /api/v1/empresas (Criação de Empresa com SSO)</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar cURL</button>
        </div>
        <pre><code>curl -X POST "https://homolog.ilclogportal.com.br/api/v1/empresas" \\
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn..." \\
     -H "Content-Type: application/json" \\
     -d '{
       "cnpj": "60701190000104",
       "razaoSocial": "VOLKSWAGEN DO BRASIL INDUSTRIA DE VEICULOS AUTOMOTORES LTDA",
       "nomeFantasia": "VW PLANTA ANCHIETA",
       "inscricaoEstadual": "112334556789",
       "tipo": "CLIENTE",
       "cep": "09823901",
       "logradouro": "Via Anchieta, Km 23,5",
       "municipio": "São Bernardo do Campo",
       "uf": "SP",
       "grupoId": 1,
       "ssoConfig": {
         "ativo": true,
         "tenantId": "8f92b1a0-4c3e-4b82-990a-112233445566",
         "clientId": "e3d4c5b6-7a8b-9c0d-1e2f-998877665544",
         "dominio": "@volkswagen.com.br"
       }
     }'</code></pre>
      </div>

      ---

      <!-- 5. Regras de Negócio & Algoritmos de Backend -->
      <h2>⚙️ 5. Regras de Negócio & Algoritmos de Backend</h2>
      <p>Implementação algorítmica do validador fiscal Módulo 11 em Java no EJB <code>CNPJValidator.java</code>:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>Java — Algoritmo Módulo 11 de Validação de CNPJ</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar Java</button>
        </div>
        <pre><code>package br.com.ilc.integrator.util;

public final class CNPJValidator {
    private static final int[] PESOS_DIGITO_1 = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    private static final int[] PESOS_DIGITO_2 = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    public static boolean isValidCNPJ(String cnpj) {
        if (cnpj == null) return false;
        String digits = cnpj.replaceAll("\\D", "");
        if (digits.length() != 14 || digits.matches("(\\d)\\1{13}")) return false;

        try {
            int soma1 = 0, soma2 = 0;
            for (int i = 0; i < 12; i++) {
                int dig = Character.getNumericValue(digits.charAt(i));
                soma1 += dig * PESOS_DIGITO_1[i];
                soma2 += dig * PESOS_DIGITO_2[i];
            }

            int resto1 = soma1 % 11;
            int digito1 = resto1 < 2 ? 0 : 11 - resto1;
            if (Character.getNumericValue(digits.charAt(12)) != digito1) return false;

            soma2 += digito1 * PESOS_DIGITO_2[12];
            int resto2 = soma2 % 11;
            int digito2 = resto2 < 2 ? 0 : 11 - resto2;

            return Character.getNumericValue(digits.charAt(13)) == digito2;
        } catch (Exception e) {
            return false;
        }
    }
}</code></pre>
      </div>

      ---

      <!-- 6. Guia de Troubleshooting & Diagnóstico Técnico -->
      <h2>🛠️ 6. Guia de Troubleshooting & Diagnóstico Técnico</h2>
      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ org.hibernate.exception.ConstraintViolationException em IX_EMPRESA_CNPJ</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Tentativa de inserção de empresa com CNPJ duplicado na tabela <code>TB_EMPRESA</code>.<br>
              <strong>Solução Técnica:</strong> O EJB captura a exceção de banco e converte para <code>BusinessException("Já existe uma empresa cadastrada com este CNPJ")</code> com HTTP 409 Conflict.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ Falha na validação de assinatura JWT no fluxo SSO Microsoft Azure AD</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> O endpoint JWKS da Microsoft (<code>https://login.microsoftonline.com/{tenantId}/discovery/v2.0/keys</code>) não pôde ser alcançado pelo servidor de aplicação ou o certificado rotacionou.<br>
              <strong>Solução Técnica:</strong> Verifique as regras de saída do firewall (porta 443 HTTPS) e confirme o cache de chaves públicas no <code>AzureAdAuthProvider</code>.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- 7. Comandos de Build, Deploy & Configurações -->
      <h2>⚙️ 7. Comandos de Build, Deploy & Configurações</h2>
      <p>Instruções para compilação local e deploy no servidor de desenvolvimento:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>Comandos Maven & WildFly CLI</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar Comandos</button>
        </div>
        <pre><code># 1. Compilar e empacotar o módulo de cadastros corporativos
mvn clean install -pl integrator-ejb,integrator-web -DskipTests

# 2. Realizar o deploy do EAR no WildFly via CLI
$JBOSS_HOME/bin/jboss-cli.sh --connect --command="deploy integrator-ear/target/integrator.ear --force"

# 3. Acompanhar os logs de autenticação SSO e cadastros em tempo real
tail -f $JBOSS_HOME/standalone/log/server.log | grep -E "CadastroEmpresaController|EmpresaBean|AzureAdAuth"</code></pre>
      </div>
    `
  },

  cad_cliente_fornecedor: {
    id: "cad_cliente_fornecedor",
    title: "Cadastro: Cliente x Fornecedor",
    subtitle: "Manual de Parametrização Comercial, Tolerâncias de Entrega e Roteiros de Teste",
    category: "Cadastros",
    icon: "🔗",
    summary: "Configura as regras de negócio específicas para cada par Cliente x Fornecedor: tolerâncias de entrega, tipo de material (Produtivo/Indireto), modalidade de frete (CIF/FOB), exigência de frequência e analista responsável.",
    relacao: "Controla a validação de <b>Promessas de Entrega</b>, <b>Ordens de Compra</b> e trava de <b>Congelamento de NFs</b>.",
    user_content: `
      <h2>📖 1. Visão Geral & Importância do Vínculo</h2>
      <p>A parametrização de <strong>Cliente x Fornecedor</strong> (<code>/pages/listaClienteFornecedor.xhtml</code>) é a tabela mestra que dita o comportamento de todo o portal. Nela definimos se um fornecedor tem permissão para adiantar entregas, se o frete é pago pelo cliente (FOB) ou fornecedor (CIF) e quem é o analista ILC encarregado.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cenários de validação de tolerância.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_CLIENTE_FORNECEDOR</code>.</p>
    `
  },

  cad_prazos_entrega: {
    id: "cad_prazos_entrega",
    title: "Cadastro: Prazos de Entrega (Lead Times)",
    subtitle: "Tabela de SLAs e tempos acordados de trânsito em dias por cliente, fornecedor e rota",
    category: "Cadastros",
    icon: "⏱️",
    summary: "Define os tempos padrão de transporte (Lead Time em dias) entre as origens e destinos, utilizados pelo sistema para calcular a data prevista de entrega.",
    relacao: "Base de cálculo para o <b>Monitor de Promessa de Entrega (PE)</b> e previsão de chegada na <b>Torre de Controle</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/listaPrazosEntrega.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cálculo de data prevista com lead time em dias úteis.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_PRAZO_ENTREGA</code>.</p>
    `
  },

  cad_workflow: {
    id: "cad_workflow",
    title: "Cadastro: Workflows & Alçadas de Aprovação",
    subtitle: "Regras de alçadas por tipo de transporte, matriz de solicitantes e níveis hierárquicos",
    category: "Cadastros",
    icon: "🔀",
    summary: "Configura as esteiras de aprovação de fretes especiais e ordens de compra, determinando quem aprova cada faixa de valor e tipo de operação.",
    relacao: "Governa o fluxo de aprovação do <b>Frete Expresso</b> e <b>Solicitação de Ordem de Compra</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Tela: <code>/pages/cadastroWorkflow.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Disparo de alçada dupla para valores > R$ 5.000,00.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_WORKFLOW</code>.</p>
    `
  },

  cad_embalagens: {
    id: "cad_embalagens",
    title: "Cadastro: Embalagens & Dimensões",
    subtitle: "Cadastro de part numbers de embalagens, dimensões físicas (C x L x A) e peso tara",
    category: "Cadastros",
    icon: "📦",
    summary: "Cadastra caixas, pallets, racks e contentores com suas medidas volumétricas exatas para cálculo de cubagem da carreta e gestão de embalagens vazias.",
    relacao: "Alimenta o cálculo de cubagem do <b>ROC (Ocupação de Carga)</b> e a <b>Gestão de Embalagens</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/listaClienteEmbalagem.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cálculo volumétrico em m³.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_CLIENTE_EMBALAGEM</code>.</p>
    `
  },

  cad_motivos_congelamento: {
    id: "cad_motivos_congelamento",
    title: "Cadastro: Motivos de Congelamento de NF",
    subtitle: "Tabela padronizada de motivos para trava de recebimento e faturamento de notas fiscais",
    category: "Cadastros",
    icon: "❄️",
    summary: "Mantém a tabela de motivos homologados para bloqueio de Notas Fiscais (ex: divergência de preço, part number não cadastrado, avaria de transporte, falta de pedido de compras).",
    relacao: "Alimenta as opções de seleção no módulo de <b>Congelamento de Notas Fiscais</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Tela: <code>/pages/listaMotivosCongelamentoNf.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Inativação de motivos legados.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_MOTIVO_CONGELAMENTO_NF</code>.</p>
    `
  },

  cad_config_comprovante: {
    id: "cad_config_comprovante",
    title: "Configuração de Comprovantes",
    subtitle: "Parametrização de regras de captura de canhotos digitais e fotos de entrega por cliente",
    category: "Fundação",
    icon: "📸",
    summary: "Permite definir por cliente se o motorista deve fotografar um único canhoto consolidado para toda a viagem ou obrigatoriamente um canhoto individual por Nota Fiscal entregue.",
    relacao: "Governa as validações no <b>App de Gestão Embarcada</b> e na auditoria do <b>ROC</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Tela: <code>/pages/configcomprovante/listaConfigComprovante.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Validação de fotos por NF no app móvel.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_CONFIG_COMPROVANTE</code>.</p>
    `
  },

  /* ==========================================================================
     MÓDULOS OPERACIONAIS (NOMENCLATURA OFICIAL DO PORTAL INTEGRATOR)
     ========================================================================== */

  frete_expresso: {
    id: "frete_expresso",
    title: "Frete Expresso",
    subtitle: "Gestão de fretes de urgência, cotações, alçadas de aprovação e combate ao risco de parada de linha",
    category: "Carga",
    icon: "⚡",
    summary: "O módulo de Frete Expresso gerencia demandas extraordinárias de transporte para evitar parada de linha de montagem ou desabastecimento crítico, com fluxo de dupla alçada de aprovação.",
    relacao: "Origina-se de uma necessidade crítica em <b>Gestão de Pedidos</b> ou <b>Itens Críticos</b>, passa pelo fluxo de aprovação e após aprovado gera uma viagem no <b>Follow-up de Viagens</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/freteexpresso/listagem.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cenários BDD de Frete Expresso.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_FRETE_EXPRESSO</code>.</p>
    `
  },

  promessa_entrega: {
    id: "promessa_entrega",
    title: "Promessa de Entrega",
    subtitle: "Manual de Resposta de Fornecedores, Semáforos do Monitor de PE e Roteiros de Teste",
    category: "Demandas",
    icon: "📅",
    summary: "O módulo de Promessa de Entrega orquestra o compromisso formal do fornecedor perante as ordens de compra emitidas pelos clientes (Materiais Produtivos e Indiretos).",
    relacao: "Alimentado pelos arquivos <b>EDI / Ordens de Compra</b> e impacta diretamente a <b>Gestão de Pedidos</b> e os alertas na <b>Torre de Controle</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/promessaEntrega.xhtml</code> e <code>/pages/monitorPE.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cenários BDD de promessa parcial e total.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_PROMESSA_ENTREGA</code>.</p>
    `
  },

  pedidos_demandas: {
    id: "pedidos_demandas",
    title: "Pedidos",
    subtitle: "Acompanhamento de ordens de compra, lista de pedidos, demandas e programação de transporte",
    category: "Demandas",
    icon: "🛒",
    summary: "Centraliza todas as ordens de compra dos clientes integradas via EDI ou inseridas manualmente, permitindo a consolidação e programação das coletas.",
    relacao: "Recebe o fechamento das <b>Promessas de Entrega</b> e gera as viagens para o <b>Follow-up</b> ou solicitações de <b>Frete Expresso</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/listaPedidos.xhtml</code> e <code>/pages/pedidosTransportador.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Testes de consulta e filtros por transportador.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabelas: <code>TB_PEDIDO</code>, <code>TB_ORDEM_COMPRA</code>.</p>
    `
  },

  followup_viagens: {
    id: "followup_viagens",
    title: "Follow Up de Viagens",
    subtitle: "Manual de Monitoramento de Rotas, Apontamento de Marcos e Roteiro de Testes",
    category: "Execução",
    icon: "🚛",
    summary: "O módulo de Follow-up de Viagens monitora o deslocamento físico de carretas e caminhões, registrando cada etapa da rota (Check-in, Coleta, Em Trânsito, Chegada no Pátio e Descarregamento).",
    relacao: "Recebe demandas de <b>Gestão de Pedidos</b> e <b>Frete Expresso</b>, e alimenta em tempo real o <b>Tracking Cockpit</b>, a <b>Gestão de Pedágios</b> e o <b>Gate de Entrada</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Tela: <code>/pages/followupViagens.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cenários de atualização de status.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_VIAGEM</code>.</p>
    `
  },

  tracking_cockpit: {
    id: "tracking_cockpit",
    title: "Tracking Cockpit",
    subtitle: "Monitoramento em tempo real, gestão à vista, semáforos de criticidade e smart tracking",
    category: "Torre de Controle",
    icon: "🎯",
    summary: "O Cockpit é a central visual de monitoramento logístico da Torre de Controle, permitindo a identificação imediata de gargalos, riscos de desabastecimento e desvios de rota.",
    relacao: "Consolida dados de <b>Follow-up de Viagens</b>, <b>Promessas de Entrega</b>, <b>Itens Críticos</b> e <b>Congelamento de NFs</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/cockpit.xhtml</code> e <code>/pages/smartTracking.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cenários de atraso crítico.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Polling via PrimeFaces a cada 60s.</p>
    `
  },

  patio_gestao_embarcada: {
    id: "patio_gestao_embarcada",
    title: "Gestão Embarcada",
    subtitle: "Check-in na portaria, auditoria de ROC, digitalização de canhotos e assinatura eletrônica",
    category: "Execução",
    icon: "📱",
    summary: "Gerencia a recepção de veículos no pátio da fábrica, auditoria de Relatório de Ocupação de Carga (ROC) e coleta de comprovantes digitais de entrega via aplicativo móvel.",
    relacao: "Conecta a chegada do <b>Follow-up de Viagens</b> à conferência física e libera as faturas no <b>Faturamento ILC</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/gateEntrada.xhtml</code> e aplicativo mobile.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Upload de fotos de canhotos e assinaturas.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>API REST JWT Multipart.</p>
    `
  },

  congelamento_nf: {
    id: "congelamento_nf",
    title: "Congel. de Notas",
    subtitle: "Bloqueio e desbloqueio preventivo de faturamento e recebimento de NFs com inconsistências fiscais",
    category: "Carga",
    icon: "❄️",
    summary: "Permite travar preventivamente o fluxo logístico ou financeiro de uma Nota Fiscal emitida com erro de tributação, divergência de valor ou falta de pedido de compras.",
    relacao: "Acionado a partir do <b>Tracking / Cockpit</b> ou <b>Gate de Entrada</b> e impacta diretamente o <b>Faturamento</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Tela: <code>/pages/congelamentonf/listaSolicitacoes.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Bloqueio de NF congelada na portaria.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Tabela: <code>TB_CONGELAMENTO_NF</code>.</p>
    `
  },

  gestao_pedagios: {
    id: "gestao_pedagios",
    title: "Gestão Pedágio",
    subtitle: "Roteirização de praças de pedágio, compra de créditos automáticos e conferência de passagens",
    category: "Execução",
    icon: "🛣️",
    summary: "Orquestra o cálculo exato do custo de pedágio por eixo/veículo, integração com operadoras de TAG (Sem Parar/ConectCar) e auditoria de extratos.",
    relacao: "Recebe rotas e eixos do <b>Follow-up de Viagens</b> e envia os débitos para o <b>Faturamento de Pedágios</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>IT.OPE.06 e IT.OPE.47.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cálculo por eixo suspenso.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>APIs de Vale-Pedágio ANTT.</p>
    `
  },

  itens_criticos: {
    id: "itens_criticos",
    title: "Itens Críticos",
    subtitle: "Matriz de criticidade de estoque, peças com risco de ruptura e escalonamento para a Torre",
    category: "Carga",
    icon: "🚨",
    summary: "Monitora os part numbers com cobertura de estoque abaixo do ponto de reposição na fábrica, emitindo alertas imediatos para a Torre de Controle e Compras.",
    relacao: "Alimenta os alertas visuais no <b>Tracking Cockpit</b> e pode disparar a criação de <b>Frete Expresso</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Tela: <code>/pages/itensCriticos.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Cálculo de cobertura de horas de estoque.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Procedure <code>SP_CALCULO_COBERTURA_ESTOQUE</code>.</p>
    `
  },

  consulta_edi_volumetria: {
    id: "consulta_edi_volumetria",
    title: "Consulta EDI & Volumetria",
    subtitle: "Rastreabilidade de arquivos eletrônicos transmitidos, logs de processamento e auditoria volumétrica",
    category: "Demandas",
    icon: "📡",
    summary: "Permite aos analistas de suporte e operadores auditar a recepção e o processamento de arquivos EDI (NOTFIS, CONEMB) e calcular a cubagem/volumetria das cargas.",
    relacao: "Ponto de entrada que alimenta as <b>Promessas de Entrega</b>, <b>Ordens de Compra</b> e dados de peso/cubagem de <b>Viagens</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/consultaEdi.xhtml</code> e <code>/pages/consultaVolumetria.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Rejeição de arquivos com layout corrompido.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>Filas JMS e parsers Proceda.</p>
    `
  },

  relatorios_bi: {
    id: "relatorios_bi",
    title: "Lista Relatórios",
    subtitle: "Central de relatórios gerenciais, dashboards executivos, KPIs operacionais e faturamento ILC",
    category: "Inteligência",
    icon: "📊",
    summary: "Painéis de inteligência de negócios (BI), dashboards em tempo real de pontualidade (OTIF), tempo de ciclo de viagens, volumetria e auditoria de faturamento de fretes.",
    relacao: "Consolida os dados de encerramento de <b>todas as viagens</b>, <b>pedágios</b> e <b>fretes expressos</b>.",
    user_content: `
      <h2>📖 Guia Operacional Passo a Passo</h2>
      <p>Telas: <code>/pages/index.xhtml</code> e <code>/pages/relatorios.xhtml</code>.</p>
    `,
    qa_content: `
      <h2>🧪 Estratégia de QA & BDD</h2>
      <p>Exportação em Excel e PDF com filtro de datas.</p>
    `,
    dev_content: `
      <h2>💻 Hub de Tecnologia</h2>
      <p>JasperReports e Apache POI.</p>
    `
  },

  hub_tecnologia: {
    id: "hub_tecnologia",
    title: "Hub Central de Tecnologia, Devs & Integrações",
    subtitle: "Especificações técnicas de arquitetura, mensageria EDI, catálogo de APIs e modelagem de banco de dados",
    category: "Tecnologia",
    icon: "💻",
    summary: "Guia completo para equipes de engenharia de software, desenvolvedores e parceiros de integração que precisam consumir serviços ou integrar sistemas ao ecossistema ILC Integrator.",
    content: `
      <h2>🏛️ Arquitetura em Camadas do Ecossistema Integrator</h2>
      <div class="mermaid-wrapper">
        <div class="mermaid">
graph TD
    subgraph CLIENT_LAYER["Camada de Apresentação (Frontend)"]
        JSF["Web Portal Legado<br>(JSF 2.2 + PrimeFaces 6)"]
        APP_MOB["App Gestão Embarcada<br>(Android / iOS)"]
        PORTAL_EXT["Portais Externos<br>(SMART X / Sem Parar)"]
    end

    subgraph APP_SERVER["Camada de Aplicação & Negócio (WildFly / EJB)"]
        REST_API["REST / SOAP API Gateway"]
        EJB_SERVICES["EJB Stateless Services<br>(Regras de Negócio & Alçadas)"]
        EDI_PROCESSOR["Processador de Arquivos EDI<br>(NOTFIS, CONEMB, OCOREN)"]
        SECURITY_MOD["Módulo de Segurança & RBAC<br>(SessionBean / JAAS)"]
    end

    subgraph DATA_LAYER["Camada de Dados & Armazenamento"]
        SQL_DB[("Banco de Dados Relacional<br>(PostgreSQL / Oracle)")]
        BLOB_STORAGE[("Repositório de Canhotos & PDFs<br>(S3 / File Server)")]
    end

    JSF --> EJB_SERVICES
    APP_MOB --> REST_API
    PORTAL_EXT --> REST_API
    REST_API --> EJB_SERVICES
    EDI_PROCESSOR --> EJB_SERVICES
    EJB_SERVICES --> SECURITY_MOD
    EJB_SERVICES --> SQL_DB
    EJB_SERVICES --> BLOB_STORAGE
        </div>
      </div>

      <h2>📡 Guia de Padrões de Integração EDI (Proceda / EDIFACT)</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Layout EDI</th>
              <th>Nome / Função</th>
              <th>Sentido</th>
              <th>Periodicidade / Trigger</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>NOTFIS</code></td>
              <td>Dados de Notas Fiscais e Mercadorias</td>
              <td>Entrada (Inbound)</td>
              <td>Após emissão fiscal pelo cliente/fornecedor</td>
            </tr>
            <tr>
              <td><code>CONEMB</code></td>
              <td>Conhecimento de Transporte (CT-e)</td>
              <td>Entrada (Inbound)</td>
              <td>Após emissão do DACTE pela transportadora</td>
            </tr>
            <tr>
              <td><code>OCOREN</code></td>
              <td>Ocorrências de Transporte e Entregas</td>
              <td>Saída / Entrada</td>
              <td>A cada apontamento de marco ou intercorrência</td>
            </tr>
            <tr>
              <td><code>DOCCOB</code></td>
              <td>Documento de Cobrança / Fatura</td>
              <td>Saída (Outbound)</td>
              <td>Fechamento quinzenal/mensal de fretes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🔑 Catálogo de APIs REST Principais</h2>
      <div class="code-block-wrapper">
        <div class="code-header">
          <span>GET /api/v1/tracking/viagens?status=EM_TRANSITO</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar</button>
        </div>
        <pre><code>curl -X GET "https://homolog.ilclogportal.com.br/api/v1/tracking/viagens?status=EM_TRANSITO" \\
     -H "Authorization: Bearer seu_token_jwt" \\
     -H "Accept: application/json"</code></pre>
      </div>
    `
  },

  /* ==========================================================================
     ENTRADAS INDIVIDUAIS DOS 44 MÓDULOS (ESTRUTURA DAS 6 ONDAS)
     ========================================================================== */

  cad_grupos_empresas: {
    id: "cad_grupos_empresas",
    title: "Grupo Empresas",
    subtitle: "Gestão de Holdings, Agrupamento Societário Multi-CNPJ, Consolidação de Faturamento e Visão Integrada da Torre de Controle",
    category: "Fundação",
    icon: "🌐",
    summary: "Permite estruturar conglomerados e holdings corporativas (ex: Grupo Stellantis, Grupo VW, Grupo Bosch), associando múltiplas plantas fabris e filiais em lote para consolidação de relatórios executivos, faturamento unificado e controle integrado de alçadas.",
    relacao: "Agrupa entidades cadastradas em <b>Empresa</b> e viabiliza a visão consolidada de pedidos em <b>Gestão de Demandas</b>, faturamento em lote no <b>Faturamento</b> e monitoramento unificado na <b>Torre de Controle</b>.",
    user_content: `
      <!-- ETAPA 1: Boas-vindas & Ficha Rápida -->
      <h2>👋 1. Boas-vindas & Visão Geral do Módulo</h2>
      <p>Olá! Seja bem-vindo ao <strong>Módulo de Cadastro de Grupo Empresas (Holdings & Conglomerados Societários)</strong> do ILC Integrator. Esta funcionalidade permite organizar a estrutura corporativa de grandes clientes montadoras, sistemistas Tier 1 e operadores logísticos frotistas que possuem múltiplos CNPJs (matrizes e filiais espalhadas pelo país), consolidando o faturamento, indicadores de performance (KPIs) e alçadas de decisão em uma única entidade de governança.</p>

      <div class="quick-info-box">
        <div class="quick-info-title">
          <span>📌</span>
          <span>Ficha Rápida da Operação (O que saber antes de começar)</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🌐</div>
            <div>
              <div class="quick-info-label">Quem Utiliza</div>
              <div class="quick-info-value">Administradores ILC, Controladoria & Gestores de Contrato</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">Tempo Médio</div>
              <div class="quick-info-value">2 a 4 minutos por holding</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔑</div>
            <div>
              <div class="quick-info-label">Permissão Necessária</div>
              <div class="quick-info-value"><code>PAGINA_LISTA_GRUPOS_EMPRESAS</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🎯</div>
            <div>
              <div class="quick-info-label">Impacto no Negócio</div>
              <div class="quick-info-value">Faturamento Consolidado, Relatórios BI Unificados e Alçadas em Lote</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 2: Como Acessar a Tela no Portal -->
      <h2>📍 2. Como Acessar a Tela de Grupos de Empresas</h2>
      <p>Para gerenciar as holdings corporativas e suas filiais associadas, siga o fluxo de navegação no menu principal:</p>
      
      <div class="steps-container" style="margin:16px 0 24px 0;">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Acessar o Agrupamento Fundação</div>
            <p>No menu lateral esquerdo do portal, clique no agrupador <strong>Fundação</strong> para visualizar os módulos cadastrais estruturais.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Selecionar Grupo Empresas</div>
            <p>Clique em <strong>Grupo Empresas</strong> para carregar a tela de listagem de holdings: <code>/pages/listaGruposEmpresas.xhtml</code>.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 3: Reconhecendo o Terreno (Mapa Visual das Telas) -->
      <h2>🖥️ 3. Reconhecendo o Terreno (Mapa Visual das Telas)</h2>
      <p>Conheça as duas principais interfaces visuais do módulo e onde fica cada controle operacional:</p>

      <!-- MOCKUP 1: LISTAGEM DE GRUPOS ECONÔMICOS -->
      <h3 style="margin-top:20px;">A. Tela de Listagem & Consulta (<code>/pages/listaGruposEmpresas.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/listaGruposEmpresas.xhtml</div>
          <span class="tag-badge">Visão de Holdings</span>
        </div>
        <div class="ui-mockup-body">
          <!-- Barra de Busca e Filtros -->
          <div style="background:var(--bg-surface); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:280px;">
              <span class="hotspot-badge">1</span>
              <span style="font-weight:600; font-size:0.85rem;">Busca:</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 12px; border-radius:4px; font-size:0.82rem; color:var(--text-muted); flex:1;">Digite o nome do grupo societário...</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">2</span>
              <span style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:4px; font-size:0.82rem; color:var(--text-primary);">Status: Apenas Ativos ▾</span>
            </div>
          </div>

          <!-- Tabela de Grupos -->
          <div style="background:var(--bg-surface); border-radius:var(--radius-md); border:1px solid var(--border-subtle); overflow:hidden;">
            <div style="padding:8px 12px; background:var(--bg-surface-subtle); border-bottom:1px solid var(--border-subtle); display:flex; align-items:center; gap:6px;">
              <span class="hotspot-badge">3</span>
              <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">GRADE DE GRUPOS ECONÔMICOS CADASTRADOS</span>
            </div>
            <table class="doc-table" style="margin:0;">
              <thead>
                <tr>
                  <th>Nome do Grupo Societário</th>
                  <th>Descrição / Finalidade</th>
                  <th>Qtd. Filiais Vinculadas</th>
                  <th>Status</th>
                  <th style="text-align:center;">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GRUPO VW DO BRASIL</strong></td>
                  <td>Holding automotiva consolidando fábricas de veículos leves e motores</td>
                  <td><span class="tag-badge" style="background: rgba(0, 82, 204, 0.1); color: var(--ilc-primary); font-weight:700;">4 Filiais (Anchieta, Taubaté, SJP, São Carlos)</span></td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <div style="display:inline-flex; align-items:center; gap:4px;">
                      <span class="hotspot-badge" style="margin:0;">4</span>
                      <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Editar">✏️</button>
                      <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Visualizar Filiais">🏢</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><strong>GRUPO STELLANTIS LATAM</strong></td>
                  <td>Conglomerado fabril das marcas Fiat, Jeep, Peugeot e Citroën</td>
                  <td><span class="tag-badge" style="background: rgba(0, 168, 107, 0.1); color: var(--ilc-green); font-weight:700;">3 Plantas (Betim, Goiana, Porto Real)</span></td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Editar">✏️</button>
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Visualizar Filiais">🏢</button>
                  </td>
                </tr>
                <tr>
                  <td><strong>GRUPO BOSCH LATAM</strong></td>
                  <td>Holding sistemista de autopeças e tecnologia de injeção</td>
                  <td><span class="tag-badge" style="background: rgba(245, 158, 11, 0.1); color: #d97706; font-weight:700;">3 Unidades (Campinas, Curitiba, Aratu)</span></td>
                  <td><span class="tag-badge" style="background:#e3fcef; color:#00875a;">🟢 Ativo</span></td>
                  <td style="text-align:center;">
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Editar">✏️</button>
                    <button class="btn-icon" style="width:28px; height:28px; font-size:0.75rem;" title="Visualizar Filiais">🏢</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Botão Novo Grupo -->
          <div style="display:flex; justify-content:flex-end;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">5</span>
              <button class="btn-portal-link" style="padding:6px 14px; font-size:0.82rem;">➕ Novo Grupo</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DA LISTAGEM -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">1</span>
          <div><strong>Campo de Busca Rápida:</strong> Filtra a listagem instantaneamente conforme o nome da holding ou conglomerado digitado.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">2</span>
          <div><strong>Filtro de Status:</strong> Permite alternar entre grupos Ativos, Inativos ou exibir o catálogo societário completo.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">3</span>
          <div><strong>Grade de Grupos:</strong> Exibe o nome corporativo, resumo descritivo e o quantitativo de plantas/filiais associadas a cada grupo.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">4</span>
          <div><strong>Ações por Grupo:</strong> Atalhos para edição de dados cadastrais, alteração de status e abertura da lista de empresas vinculadas.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">5</span>
          <div><strong>Botão Novo Grupo:</strong> Abre a tela de formulário com componente de caixa dupla (PickList) para criar uma nova holding.</div>
        </div>
      </div>

      <!-- MOCKUP 2: FORMULÁRIO DE CADASTRO & ASSOCIAÇÃO EM LOTE -->
      <h3 style="margin-top:32px;">B. Tela de Formulário & Associação de Filiais (<code>/pages/cadastroGrupoEmpresas.xhtml</code>)</h3>
      <div class="ui-mockup-card">
        <div class="ui-mockup-header">
          <div class="ui-mockup-dots">
            <div class="ui-mockup-dot" style="background:#ff5f56;"></div>
            <div class="ui-mockup-dot" style="background:#ffbd2e;"></div>
            <div class="ui-mockup-dot" style="background:#27c93f;"></div>
          </div>
          <div class="ui-mockup-title">ILC Integrator &gt; /pages/cadastroGrupoEmpresas.xhtml</div>
          <span class="tag-badge" style="background:#e3fcef; color:#00875a;">Formulário & PickList</span>
        </div>
        <div class="ui-mockup-body" style="gap:16px;">
          <!-- Bloco Identificação do Grupo -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">6</span> Dados da Holding / Grupo Econômico
              </span>
              <span style="font-size:0.75rem; color:var(--text-muted);">* Campos Obrigatórios</span>
            </div>
            <div style="display:grid; grid-template-columns:2fr 1fr; gap:12px;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Nome do Grupo Societário *</label>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-primary); margin-top:3px;"><code>GRUPO VW DO BRASIL</code></div>
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Status</label>
                <div style="display:flex; align-items:center; gap:6px; margin-top:8px;">
                  <span class="hotspot-badge">7</span>
                  <input type="checkbox" checked disabled>
                  <span style="font-size:0.82rem; font-weight:600; color:var(--ilc-green);">Ativo</span>
                </div>
              </div>
            </div>
            <div>
              <label style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Descrição da Finalidade Societária</label>
              <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:4px; font-size:0.85rem; color:var(--text-secondary); margin-top:3px;">Holding corporativa para consolidação de fretes de plantas automotivas e fábricas de motores no Brasil.</div>
            </div>
          </div>

          <!-- Bloco PickList de Associação de Empresas -->
          <div style="background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
              <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                <span class="hotspot-badge">8</span> Associação de Filiais & Plantas (PickList / Caixa Dupla)
              </span>
              <span style="font-size:0.75rem; color:var(--ilc-primary); font-weight:600;">Selecione e mova com as setas centrais</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 50px 1fr; gap:12px; align-items:center;">
              <!-- Coluna 1: Disponíveis -->
              <div>
                <div style="font-size:0.78rem; font-weight:700; color:var(--text-muted); margin-bottom:4px;">EMPRESAS DISPONÍVEIS (SEM GRUPO)</div>
                <div style="background:var(--bg-surface-subtle); border:1px solid var(--border-subtle); border-radius:6px; padding:8px; height:120px; overflow-y:auto; font-size:0.8rem; display:flex; flex-direction:column; gap:4px;">
                  <div style="padding:4px 6px; background:var(--bg-surface); border-radius:4px; border:1px solid var(--border-subtle);">🏢 AUDI DO BRASIL IND. (PR)</div>
                  <div style="padding:4px 6px; background:var(--bg-surface); border-radius:4px; border:1px solid var(--border-subtle);">🏢 MAN LATIN AMERICA (RJ)</div>
                </div>
              </div>

              <!-- Coluna Central: Controles -->
              <div style="display:flex; flex-direction:column; gap:6px; align-items:center;">
                <span class="hotspot-badge">9</span>
                <button class="btn-icon" style="width:32px; height:28px; font-weight:bold;">▶</button>
                <button class="btn-icon" style="width:32px; height:28px; font-weight:bold;">◀</button>
              </div>

              <!-- Coluna 2: Vinculadas -->
              <div>
                <div style="font-size:0.78rem; font-weight:700; color:var(--ilc-primary); margin-bottom:4px;">FILIAIS VINCULADAS AO GRUPO</div>
                <div style="background:rgba(0, 82, 204, 0.04); border:1px solid rgba(0, 82, 204, 0.2); border-radius:6px; padding:8px; height:120px; overflow-y:auto; font-size:0.8rem; display:flex; flex-direction:column; gap:4px;">
                  <div style="padding:4px 6px; background:var(--bg-surface); border-radius:4px; border:1px solid var(--border-subtle); color:var(--ilc-primary); font-weight:600;">✓ VW - PLANTA ANCHIETA (SP)</div>
                  <div style="padding:4px 6px; background:var(--bg-surface); border-radius:4px; border:1px solid var(--border-subtle); color:var(--ilc-primary); font-weight:600;">✓ VW - PLANTA TAUBATÉ (SP)</div>
                  <div style="padding:4px 6px; background:var(--bg-surface); border-radius:4px; border:1px solid var(--border-subtle); color:var(--ilc-primary); font-weight:600;">✓ VW - SÃO JOSÉ DOS PINHAIS (PR)</div>
                  <div style="padding:4px 6px; background:var(--bg-surface); border-radius:4px; border:1px solid var(--border-subtle); color:var(--ilc-primary); font-weight:600;">✓ VW - FÁBRICA DE MOTORES (SC)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Rodapé do Formulário -->
          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:4px;">
            <button class="btn-portal-secondary" style="padding:6px 14px; font-size:0.82rem;">← Voltar para a Lista</button>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="hotspot-badge">10</span>
              <button class="btn-portal-link" style="padding:6px 18px; font-size:0.82rem;">💾 Salvar Grupo</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LISTA DE HOTSPOTS DO FORMULÁRIO -->
      <div class="hotspot-list">
        <div class="hotspot-item">
          <span class="hotspot-badge">6</span>
          <div><strong>Nome da Holding / Conglomerado:</strong> Identificador corporativo formal em letras maiúsculas (ex: <code>GRUPO STELLANTIS LATAM</code>).</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">7</span>
          <div><strong>Flag de Status Ativo:</strong> Controla se o grupo está ativo para novas parametrizações financeiras e filtros executivos na Torre de Controle.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">8</span>
          <div><strong>Componente PickList (Caixa Dupla):</strong> Lista todas as empresas cadastradas no sistema que estão disponíveis para associação societária.</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">9</span>
          <div><strong>Controles de Movimentação:</strong> Botões direcionais para mover itens selecionados ou transferir em lote entre "Disponíveis" e "Vinculadas".</div>
        </div>
        <div class="hotspot-item">
          <span class="hotspot-badge">10</span>
          <div><strong>Botão Salvar Grupo:</strong> Valida a integridade referencial, grava o grupo em <code>TB_GRUPO_EMPRESAS</code> e atualiza a tabela <code>TB_EMPRESA_GRUPO</code> com persistência ACID.</div>
        </div>
      </div>

      ---

      <!-- ETAPA 4: Passo a Passo Operacional Ilustrado -->
      <h2>📝 4. Passo a Passo Operacional Ilustrado</h2>

      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">1. Acessar a Tela de Grupos e Clicar em "+ Novo Grupo"</div>
            <p>Na tela de listagem (<code>/pages/listaGruposEmpresas.xhtml</code>), clique no botão <strong>➕ Novo Grupo</strong> no topo superior direito para abrir o formulário.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">2. Definir a Nomenclatura e Finalidade Societária</div>
            <p>Informe o <strong>Nome do Grupo</strong> em caixa alta (ex: <code>GRUPO STELLANTIS</code>) e insira uma descrição resumida detalhando a abrangência e marcas consolidadas.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">3. Selecionar e Mover as Filiais no PickList</div>
            <p>Na coluna esquerda (Empresas Disponíveis), selecione as plantas e filiais desejadas e clique na seta <strong>▶</strong> para transferi-las para a coluna direita (Filiais Vinculadas).</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-title">4. Salvar e Validar a Aplicação Imediata</div>
            <p>Clique no botão <strong>💾 Salvar Grupo</strong>. O sistema valida se o nome não é duplicado e persiste os relacionamentos N:N na base corporativa instantaneamente.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-body">
            <div class="step-title">5. Acompanhar os Relatórios Consolidados na Torre de Controle</div>
            <p>Com o grupo ativo, os filtros executivos no <strong>Faturamento</strong> e na <strong>Central de Relatórios BI</strong> passam a permitir a consolidação de dados por holding.</p>
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 5: Casos de Uso Reais do Dia a Dia (6 Cenários Práticos) -->
      <h2>🎯 5. Casos de Uso Reais do Dia a Dia (6 Cenários Práticos)</h2>

      <div class="use-case-grid">
        <!-- Card 1 -->
        <div class="use-case-card">
          <h4><span>🏭</span> Caso 1: Holding de Montadora Multinacional</h4>
          <p>Para reunir múltiplas fábricas de veículos sob o mesmo contrato corporativo (ex: Fiat Betim, Jeep Goiana e Peugeot Porto Real).</p>
          <ol class="use-case-steps">
            <li>Crie o grupo <code>GRUPO STELLANTIS LATAM</code>.</li>
            <li>Selecione as 3 plantas industriais no PickList e mova para vinculadas.</li>
            <li>O financeiro passa a emitir faturas unificadas consolidadas por holding.</li>
          </ol>
        </div>

        <!-- Card 2 -->
        <div class="use-case-card">
          <h4><span>🔩</span> Caso 2: Conglomerado Sistemista Tier 1 Multi-planta</h4>
          <p>Para indústrias fornecedoras globais com unidades em diferentes estados (ex: Bosch Campinas, Curitiba e Aratu).</p>
          <ol class="use-case-steps">
            <li>Cadastre o grupo <code>GRUPO BOSCH LATAM</code>.</li>
            <li>Vincule os 3 CNPJs de fornecedor na esteira societária.</li>
            <li>A Torre de Controle ganha visão agregada de cumprimento de promessas (OTIF) de todo o grupo.</li>
          </ol>
        </div>

        <!-- Card 3 -->
        <div class="use-case-card">
          <h4><span>🚛</span> Caso 3: Pool de Transportadoras Frotistas Parceiras</h4>
          <p>Para consórcios logísticos e grupos de transporte rodoviário com filiais regionais.</p>
          <ol class="use-case-steps">
            <li>Crie o grupo com a razão da holding de transporte.</li>
            <li>Associe as transportadoras filiais autorizadas para rotas interestaduais.</li>
            <li>Permite auditoria unificada de pagamentos de frete e controle de pedágios.</li>
          </ol>
        </div>

        <!-- Card 4 -->
        <div class="use-case-card">
          <h4><span>➕</span> Caso 4: Associação em Lote de Novas Filiais</h4>
          <p>Quando uma montadora adquire uma nova fábrica e necessita integrá-la à holding existente.</p>
          <ol class="use-case-steps">
            <li>Cadastre primeiramente o novo CNPJ na tela de <strong>Empresa</strong>.</li>
            <li>Edite o grupo econômico correspondente e mova a nova filial no PickList.</li>
            <li>A nova planta herda imediatamente as visões e alçadas do grupo.</li>
          </ol>
        </div>

        <!-- Card 5 -->
        <div class="use-case-card">
          <h4><span>🔄</span> Caso 5: Desvinculação de Unidade Descontinuada</h4>
          <p>Para remover uma filial vendida ou encerrada do grupo societário sem corromper registros.</p>
          <ol class="use-case-steps">
            <li>Edite o grupo econômico e selecione a filial na coluna direita do PickList.</li>
            <li>Clique na seta <strong>◀</strong> para retornar a empresa para "Disponíveis".</li>
            <li>Clique em <strong>Salvar</strong> (o histórico de viagens passadas é preservado integralmente).</li>
          </ol>
        </div>

        <!-- Card 6 -->
        <div class="use-case-card" style="border-top-color: var(--ilc-accent);">
          <h4><span>🔒</span> Caso 6: Inativação Segura de Grupo Econômico</h4>
          <p>Para desativar uma holding extinta garantindo que as empresas filhas continuem ativas individualmente.</p>
          <ol class="use-case-steps">
            <li>Localize o grupo na listagem e clique em <strong>Editar</strong>.</li>
            <li>Desmarque a opção <strong>[ ] Ativo</strong> e clique em <strong>Salvar</strong>.</li>
            <li>O grupo é inativado, mas nenhum dado fiscal ou cadastral das empresas filhas é excluído.</li>
          </ol>
        </div>
      </div>

      ---

      <!-- ETAPA 6: Erros Mais Comuns & Como Resolver (Troubleshooting) -->
      <h2>🛠️ 6. Erros Mais Comuns & Como Resolver (Troubleshooting)</h2>
      <p>Respostas diretas para as dúvidas operacionais mais frequentes na gestão de grupos:</p>

      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Mensagem: "Já existe um grupo cadastrado com este nome"</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> O nome do grupo societário possui restrição de unicidade global no banco de dados para evitar ambiguidades fiscais.<br>
              <strong>Como Resolver:</strong> Informe um nome mais específico ou adicione a divisão geográfica (ex: <code>GRUPO STELLANTIS BRASIL</code>).
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ Uma empresa não aparece na lista de "Empresas Disponíveis" do PickList</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> A empresa ainda não foi cadastrada na tela de Empresas ou já se encontra vinculada a outro grupo societário.<br>
              <strong>Como Resolver:</strong> Verifique no módulo de <strong>Empresa</strong> se o CNPJ está cadastrado e ativo. Se já estiver em outro grupo, desvincule-a primeiro do grupo anterior.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>❓ A exclusão ou inativação de um grupo apaga as empresas cadastradas?</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Motivo:</strong> O relacionamento entre Grupo e Empresa é puramente associativo (N:N na tabela <code>TB_EMPRESA_GRUPO</code>).<br>
              <strong>Como Resolver:</strong> Fique tranquilo: inativar ou excluir um grupo remove apenas o agrupamento corporativo. Os registros de CNPJs, usuários, notas fiscais e viagens das empresas permanecem 100% intactos.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- ETAPA 7: Glossário & Dica de Ouro da Governança ILC -->
      <h2>📖 7. Glossário em Linguagem Simples & Dicas de Ouro</h2>
      <div class="table-container" style="margin-bottom:20px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Termo</th>
              <th>Significado Prático no Ecossistema ILC Integrator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Grupo Econômico / Holding</strong></td>
              <td>Entidade mestra que reúne múltiplos CNPJs societariamente ligados para consolidação gerencial, financeira e operacional.</td>
            </tr>
            <tr>
              <td><strong>PickList (Caixa Dupla)</strong></td>
              <td>Componente visual composto por duas caixas (Disponíveis e Vinculadas) com botões de transferência lateral em lote.</td>
            </tr>
            <tr>
              <td><strong>Consolidação de Faturamento</strong></td>
              <td>Emissão de relatórios e fechamentos quinzenais/mensais de frete agrupando todas as notas fiscais das filiais sob a mesma holding.</td>
            </tr>
            <tr>
              <td><strong>Relacionamento N:N (Muitos para Muitos)</strong></td>
              <td>Estrutura relacional do banco de dados que permite alta flexibilidade na gestão societária de empresas e consórcios.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Card de Destaque Especial: Dica de Ouro da Governança ILC -->
      <div class="governance-gold-card">
        <div class="governance-gold-header">
          <div class="governance-gold-icon">👑</div>
          <div>
            <div class="governance-gold-badge">✨ Dica de Ouro da Governança ILC</div>
            <div class="governance-gold-title">Criação Prévia de Holdings na Esteira de Implantação</div>
          </div>
        </div>
        <div class="governance-gold-body">
          <p style="margin: 0 0 10px 0;">
            Ao implantar um novo cliente montadora ou sistemista com múltiplas filiais, <strong>crie primeiramente o Grupo Econômico antes de cadastrar os CNPJs das filiais</strong>.
          </p>
          <div style="background: rgba(217, 119, 6, 0.08); border-left: 3px solid #d97706; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem;">
            <strong>🎯 Impacto Direto na Operação:</strong> Permite associar cada filial ao seu respectivo grupo já no momento do preenchimento do formulário de empresa, eliminando retrabalho de parametrização posterior e garantindo relatórios consolidados desde o primeiro dia de go-live.
          </div>
        </div>
      </div>

      ---

      <!-- ETAPA 8: Próximos Passos Recomendados -->
      <div class="next-steps-container">
        <div>
          <div class="next-steps-title">🚀 8. Próximos Passos Recomendados</div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Após estruturar os grupos econômicos, prossiga com as parametrizações comerciais e de acesso:</div>
        </div>
        <div class="next-steps-actions">
          <a href="#cad_empresas/user" class="next-step-btn" onclick="window.navigateTo('cad_empresas')">
            <span>🏢</span>
            <span>Cadastrar / Revisar Empresas</span>
          </a>
          <a href="#cad_cliente_fornecedor/user" class="next-step-btn" onclick="window.navigateTo('cad_cliente_fornecedor')">
            <span>🔗</span>
            <span>Parametrizar Cliente x Fornecedor</span>
          </a>
          <a href="#relatorios_bi/user" class="next-step-btn" onclick="window.navigateTo('relatorios_bi')">
            <span>📊</span>
            <span>Consultar Relatórios BI Consolidados</span>
          </a>
        </div>
      </div>
    `,

    qa_content: `
      <!-- 1. Ficha Técnica de QA & Escopo de Homologação -->
      <h2>📋 1. Ficha Técnica de QA & Escopo de Homologação</h2>
      <p>Diretrizes mandatórias e parâmetros de qualidade para homologação da rotina de Grupos Econômicos:</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-qa);">
        <div class="quick-info-title">
          <span>🧪</span>
          <span>Parâmetros de Teste & Qualidade (QA)</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">🎯</div>
            <div>
              <div class="quick-info-label">Criticidade</div>
              <div class="quick-info-value"><span class="badge-p1">P1 — Crítico (Fundação & Consolidação BI)</span></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🔬</div>
            <div>
              <div class="quick-info-label">Tipos de Teste</div>
              <div class="quick-info-value">Funcional, PickList UI, Integridade N:N, Transacional ACID, Performance</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📜</div>
            <div>
              <div class="quick-info-label">IT Normativa</div>
              <div class="quick-info-value"><code>IT.OPE.04</code> (Grupos Econômicos & Holdings)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">⏱️</div>
            <div>
              <div class="quick-info-label">SLA de Correção</div>
              <div class="quick-info-value">4 horas para Bloqueante (Sev 1) / 12h para Alta (Sev 2)</div>
            </div>
          </div>
        </div>
      </div>

      ---

      <!-- 2. Roteiro Passo a Passo de Testes Manuais -->
      <h2>🧪 2. Roteiro Passo a Passo de Testes Manuais (Azure Test Plans)</h2>
      <p>Casos de teste estruturados prontos para execução manual e homologação:</p>

      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>ID do Teste</th>
              <th>Objetivo do Teste</th>
              <th>Pré-condições</th>
              <th>Passos de Execução</th>
              <th>Resultado Esperado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>TC_GRP_001</code></td>
              <td>Cadastro de Grupo Econômico com Associação em Lote</td>
              <td>Usuário com permissão de Administrador</td>
              <td>1. Acessar <code>/pages/cadastroGrupoEmpresas.xhtml</code><br>2. Preencher Nome "GRUPO STELLANTIS"<br>3. Mover 3 filiais para a coluna da direita no PickList<br>4. Clicar em Salvar</td>
              <td>Grupo persistido na tabela <code>TB_GRUPO_EMPRESAS</code> e vínculos gravados em <code>TB_EMPRESA_GRUPO</code> com toast de sucesso.</td>
            </tr>
            <tr>
              <td><code>TC_GRP_002</code></td>
              <td>Bloqueio de Duplicidade de Nome de Grupo</td>
              <td>Grupo "GRUPO VW DO BRASIL" já cadastrado</td>
              <td>1. Tentar criar novo grupo com o mesmo nome exato<br>2. Clicar em Salvar</td>
              <td>Sistema bloqueia a gravação e exibe mensagem de validação: <em>"Já existe um grupo cadastrado com este nome"</em>.</td>
            </tr>
            <tr>
              <td><code>TC_GRP_003</code></td>
              <td>Desvinculação de Filial no PickList</td>
              <td>Grupo com 4 filiais vinculadas</td>
              <td>1. Abrir o grupo em modo edição<br>2. Selecionar uma filial e clicar na seta ◀<br>3. Clicar em Salvar</td>
              <td>Registro da filial removido da tabela associativa sem afetar a integridade da tabela <code>TB_EMPRESA</code>.</td>
            </tr>
            <tr>
              <td><code>TC_GRP_004</code></td>
              <td>Inativação de Grupo Econômico</td>
              <td>Grupo em status Ativo</td>
              <td>1. Abrir edição do grupo<br>2. Desmarcar caixa [ ] Ativo<br>3. Clicar em Salvar</td>
              <td>Status atualizado para <code>FL_ATIVO = 'N'</code> e grupo não aparece mais nos filtros de novas operações.</td>
            </tr>
            <tr>
              <td><code>TC_GRP_005</code></td>
              <td>Consolidação de Relatório BI por Grupo</td>
              <td>Grupo com filiais que possuem viagens finalizadas</td>
              <td>1. Acessar tela de Relatórios BI<br>2. Filtrar pelo Grupo Econômico<br>3. Gerar relatório de volumetria</td>
              <td>Relatório agrega corretamente a soma de pesos, valores de frete e OTIF de todas as filiais do grupo.</td>
            </tr>
            <tr>
              <td><code>TC_GRP_006</code></td>
              <td>Performance de Carga do PickList com Mais de 200 Empresas</td>
              <td>Base com volume elevado de empresas cadastradas</td>
              <td>1. Abrir tela de cadastro de grupo<br>2. Avaliar tempo de renderização do componente PickList</td>
              <td>Tempo de resposta inferior a 1,5s com paginação e busca interna no componente.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 3. Matriz de Validação do Sistema & Mensagens Reais de Erro -->
      <h2>⚠️ 3. Matriz de Validação do Sistema & Mensagens Reais de Erro</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Campo / Operação</th>
              <th>Regra de Negócio</th>
              <th>Mensagem Real no Portal</th>
              <th>Severidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nome do Grupo</strong></td>
              <td>Obrigatório, entre 3 e 150 caracteres</td>
              <td><code>O campo Nome do Grupo é de preenchimento obrigatório</code></td>
              <td><span class="badge-p2">Sev 2 (Formulário)</span></td>
            </tr>
            <tr>
              <td><strong>Nome do Grupo (Unicidade)</strong></td>
              <td>Restrição de unicidade global no banco de dados</td>
              <td><code>Já existe um grupo cadastrado com este nome</code></td>
              <td><span class="badge-p1">Sev 1 (Bloqueante)</span></td>
            </tr>
            <tr>
              <td><strong>PickList de Empresas</strong></td>
              <td>Não permitir duplicidade de vínculos na mesma holding</td>
              <td><code>A empresa selecionada já se encontra associada a este grupo</code></td>
              <td><span class="badge-p2">Sev 2 (Consistência)</span></td>
            </tr>
            <tr>
              <td><strong>Exclusão de Grupo</strong></td>
              <td>Exclusão lógica preservando as empresas associadas</td>
              <td><code>Grupo inativado com sucesso (empresas vinculadas preservadas)</code></td>
              <td><span class="badge-p3">Sev 3 (Informativa)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 4. Critérios de Aceite & Definition of Done (DoD) -->
      <h2>✅ 4. Critérios de Aceite & Definition of Done (DoD)</h2>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="dod_grp_1" checked disabled>
          <label for="dod_grp_1"><strong>Integridade N:N Garantida:</strong> Associação e desassociação de filiais executada em bloco sob transação <code>@TransactionAttribute(REQUIRED)</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_grp_2" checked disabled>
          <label for="dod_grp_2"><strong>Isolamento de Exclusão:</strong> A inativação de um grupo econômico não altera o status cadastral nem corrompe as empresas filhas.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_grp_3" checked disabled>
          <label for="dod_grp_3"><strong>Auditoria de Vínculos:</strong> Todas as alterações de membros do grupo registradas com autor e data em <code>TB_AUDITORIA</code>.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="dod_grp_4" checked disabled>
          <label for="dod_grp_4"><strong>Agregação em Tempo Real:</strong> Consultas de BI e Torre de Controle refletem os novos vínculos imediatamente sem necessidade de restart de serviço.</label>
        </div>
      </div>

      ---

      <!-- 5. Especificação BDD em Gherkin -->
      <h2>🥒 5. Especificação BDD em Gherkin (Cenários Automatizáveis)</h2>
      <div class="bdd-feature-card">
        <div class="bdd-header">
          <div class="bdd-title">
            <span>🥒</span>
            <span>Funcionalidade: Estruturação e Gestão de Grupos Econômicos (Holdings)</span>
          </div>
          <span class="tag-badge">Gherkin BDD</span>
        </div>
        <div class="bdd-body">
          <span class="bdd-keyword">Funcionalidade:</span> Gestão de Grupos Societários e Associação de Filiais<br>
          &nbsp;&nbsp;Como Administrador ou Gestor de Contratos do ILC Integrator<br>
          &nbsp;&nbsp;Quero cadastrar holdings e associar múltiplas filiais em lote<br>
          &nbsp;&nbsp;Para consolidar relatórios de performance, faturamento e governança corporativa<br><br>

          <span class="bdd-keyword">@smoke @positivo</span><br>
          <span class="bdd-keyword">Cenário:</span> Criação de nova holding corporativa com associação em lote com sucesso<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que o Administrador está na tela "/pages/cadastroGrupoEmpresas.xhtml"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> preenche o Nome "GRUPO STELLANTIS LATAM"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> move as empresas "Fiat Betim" e "Jeep Goiana" para as vinculadas no PickList<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> clica em "Salvar"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o grupo deve ser registrado na tabela "TB_GRUPO_EMPRESAS"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> os 2 relacionamentos devem ser persistidos na tabela "TB_EMPRESA_GRUPO"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> o sistema deve exibir a mensagem "Grupo cadastrado com sucesso!"<br><br>

          <span class="bdd-keyword">@validacao @negativo</span><br>
          <span class="bdd-keyword">Cenário:</span> Bloqueio de duplicidade de nome de holding<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que já existe um grupo cadastrado com o nome "GRUPO VW DO BRASIL"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> o usuário tenta cadastrar outro grupo com o mesmo nome<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o sistema não permite a gravação no banco de dados<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> exibe a mensagem de validação "Já existe um grupo cadastrado com este nome"<br><br>

          <span class="bdd-keyword">@integridade @desvinculacao</span><br>
          <span class="bdd-keyword">Cenário:</span> Desassociação de filial preservando a integridade cadastral da empresa<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Dado</span> que a empresa "Robert Bosch Curitiba" está vinculada ao grupo "GRUPO BOSCH"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Quando</span> o Administrador desvincula a filial no PickList e salva<br>
          &nbsp;&nbsp;<span class="bdd-keyword">Então</span> o registro é removido apenas da tabela "TB_EMPRESA_GRUPO"<br>
          &nbsp;&nbsp;<span class="bdd-keyword">E</span> a empresa permanece ativa e inalterada na tabela "TB_EMPRESA".
        </div>
      </div>

      ---

      <!-- 6. Matriz de Rastreabilidade & Riscos -->
      <h2>🔗 6. Matriz de Rastreabilidade & Riscos</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Requisito Funcional</th>
              <th>IT Normativa</th>
              <th>User Story Azure DevOps</th>
              <th>Casos de Teste Vinculados</th>
              <th>Risco de Falha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cadastro e Unicidade de Holdings</td>
              <td><code>IT.OPE.04</code></td>
              <td><code>US-111: Gestão de Grupos</code></td>
              <td><code>TC_GRP_001</code>, <code>TC_GRP_002</code></td>
              <td><span class="badge-p1">Alto (Inconsistência de Governança)</span></td>
            </tr>
            <tr>
              <td>Associação em Lote via PickList</td>
              <td><code>IT.OPE.04</code></td>
              <td><code>US-111: Gestão de Grupos</code></td>
              <td><code>TC_GRP_003</code>, <code>TC_GRP_006</code></td>
              <td><span class="badge-p2">Médio (Falha de Usabilidade em Lote)</span></td>
            </tr>
            <tr>
              <td>Consolidação de Relatórios BI</td>
              <td><code>IT.OPE.04</code></td>
              <td><code>US-114: Faturamento & BI</code></td>
              <td><code>TC_GRP_005</code></td>
              <td><span class="badge-p1">Crítico (Divergência em Faturas Fiscais)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 7. Checklist de Regressão & Homologação -->
      <h2>🛡️ 7. Checklist de Regressão & Homologação</h2>
      <div class="dod-checklist">
        <div class="dod-item">
          <input type="checkbox" id="reg_grp_1" checked disabled>
          <label for="reg_grp_1">Validar que a inativação de uma holding não afeta a emissão de CTe das transportadoras filiais.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_grp_2" checked disabled>
          <label for="reg_grp_2">Garantir que a remoção de uma filial de um grupo não corrompa ordens de compra em andamento.</label>
        </div>
        <div class="dod-item">
          <input type="checkbox" id="reg_grp_3" checked disabled>
          <label for="reg_grp_3">Testar o comportamento do PickList quando uma empresa recém-cadastrada é imediatamente associada.</label>
        </div>
      </div>
    `,

    dev_content: `
      <!-- 1. Ficha Técnica de Engenharia & Stack -->
      <h2>🏛️ 1. Ficha Técnica de Engenharia & Stack Tecnológica</h2>
      <p>Especificação dos componentes Java, Beans JSF, EJBs de agregação e componentes Angular 17+:</p>

      <div class="quick-info-box" style="border-left: 4px solid var(--color-dev);">
        <div class="quick-info-title">
          <span>⚙️</span>
          <span>Arquitetura de Backend & Componentes Enterprise</span>
        </div>
        <div class="quick-info-grid">
          <div class="quick-info-item">
            <div class="quick-info-icon">☕</div>
            <div>
              <div class="quick-info-label">Managed Bean JSF</div>
              <div class="quick-info-value"><code>GrupoEmpresasController.java</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">📦</div>
            <div>
              <div class="quick-info-label">EJB de Negócio</div>
              <div class="quick-info-value"><code>GrupoEmpresasBean.java</code> (<code>@Stateless</code>)</div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">🗄️</div>
            <div>
              <div class="quick-info-label">Entidade JPA</div>
              <div class="quick-info-value"><code>GrupoEmpresas.java</code> / <code>EmpresaGrupo.java</code></div>
            </div>
          </div>
          <div class="quick-info-item">
            <div class="quick-info-icon">💾</div>
            <div>
              <div class="quick-info-label">Tabelas SQL</div>
              <div class="quick-info-value"><code>TB_GRUPO_EMPRESAS</code> / <code>TB_EMPRESA_GRUPO</code></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabela de Componentes da Arquitetura -->
      <div class="table-container" style="margin-top: 16px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Camada Arquitetural</th>
              <th>Classe / Arquivo</th>
              <th>Pacote Java / Módulo</th>
              <th>Responsabilidade Técnica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>listaGruposEmpresas.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Grade de listagem de holdings com contagem dinâmica de filiais associadas.</td>
            </tr>
            <tr>
              <td><strong>View JSF</strong></td>
              <td><code>cadastroGrupoEmpresas.xhtml</code></td>
              <td><code>/webapp/pages/</code></td>
              <td>Formulário com componente PrimeFaces <code>p:pickList</code> para movimentação em lote.</td>
            </tr>
            <tr>
              <td><strong>ManagedBean</strong></td>
              <td><code>GrupoEmpresasController.java</code></td>
              <td><code>br.com.ilc.integrator.controller</code></td>
              <td><code>@ManagedBean @ViewScoped</code>: Controla o estado do DualListModel e disparos de persistência.</td>
            </tr>
            <tr>
              <td><strong>EJB Remote</strong></td>
              <td><code>GrupoEmpresasRemote.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.empresa</code></td>
              <td><code>@Remote</code>: Interface remota com métodos de vinculação em lote e consultas agregadas.</td>
            </tr>
            <tr>
              <td><strong>EJB Bean</strong></td>
              <td><code>GrupoEmpresasBean.java</code></td>
              <td><code>br.com.ilc.integrator.ejb.bean.empresa</code></td>
              <td><code>@Stateless</code>: Sincronização atômica da coleção de filiais e controle transacional.</td>
            </tr>
            <tr>
              <td><strong>Entity JPA</strong></td>
              <td><code>GrupoEmpresas.java</code></td>
              <td><code>br.com.ilc.integrator.entity</code></td>
              <td><code>@Entity @Table(name="TB_GRUPO_EMPRESAS")</code>: Mapeamento ORM com relacionamento <code>@ManyToMany</code>.</td>
            </tr>
            <tr>
              <td><strong>Frontend Angular</strong></td>
              <td><code>grupo-empresas-form.component.ts</code></td>
              <td><code>/src/app/pages/cadastros/grupo-empresas/</code></td>
              <td>Componente Standalone Angular 17+ com Signals e componente CDK Drag & Drop / PickList.</td>
            </tr>
          </tbody>
        </table>
      </div>

      ---

      <!-- 2. Diagrama de Sequência Interativo -->
      <h2>🔄 2. Diagrama de Sequência de Associação em Lote</h2>
      <p>Fluxo de sincronização atômica do PickList e persistência no banco de dados:</p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
sequenceDiagram
    autonumber
    actor Admin as 👤 Administrador
    participant View as 🖥️ cadastroGrupoEmpresas.xhtml
    participant Ctrl as ⚙️ GrupoEmpresasController
    participant EJB as 📦 GrupoEmpresasBean (Stateless)
    participant DB as 💾 PostgreSQL (TB_GRUPO_EMPRESAS)
    participant Assoc as 🔗 TB_EMPRESA_GRUPO
    participant Audit as 📝 TB_AUDITORIA

    Admin->>View: Move filiais no PickList e clica em Salvar
    View->>Ctrl: salvarGrupo(grupoDTO, dualListModel.getTarget())
    Ctrl->>EJB: sincronizarGrupoComFiliais(grupo, idsEmpresasTarget)
    
    critical Transação ACID (@TransactionAttribute(REQUIRED))
        EJB->>DB: SELECT COUNT(*) FROM TB_GRUPO_EMPRESAS WHERE NM_GRUPO = ? AND ID_GRUPO != ?
        alt Nome duplicado
            EJB-->>Ctrl: Lança BusinessException("Nome de grupo já cadastrado")
            Ctrl-->>View: FacesContext.addMessage(ERROR)
        else Nome válido
            EJB->>DB: UPDATE ou INSERT INTO TB_GRUPO_EMPRESAS (NM_GRUPO, DS_GRUPO, ...)
            EJB->>Assoc: DELETE FROM TB_EMPRESA_GRUPO WHERE ID_GRUPO = ?
            loop Para cada empresa selecionada
                EJB->>Assoc: INSERT INTO TB_EMPRESA_GRUPO (ID_EMPRESA, ID_GRUPO) VALUES (?, ?)
            end
            EJB->>Audit: INSERT INTO TB_AUDITORIA (ID_USUARIO, DS_OPERACAO, DT_LOG)
        end
    end

    EJB-->>Ctrl: Grupo e filiais sincronizados com sucesso
    Ctrl-->>View: Redireciona para /pages/listaGruposEmpresas.xhtml com Toast Sucesso
        </div>
      </div>

      ---

      <!-- 3. Modelagem de Dados & Schema SQL -->
      <h2>🗄️ 3. Modelagem de Dados & Schema SQL</h2>
      <p>Script DDL das tabelas de grupos societários e relacionamentos associativos N:N:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>PostgreSQL DDL — TB_GRUPO_EMPRESAS & TB_EMPRESA_GRUPO</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar DDL</button>
        </div>
        <pre><code>-- 1. Tabela Principal de Grupos Econômicos / Holdings
CREATE TABLE TB_GRUPO_EMPRESAS (
    ID_GRUPO            BIGSERIAL PRIMARY KEY,
    NM_GRUPO            VARCHAR(150) NOT NULL UNIQUE,
    DS_GRUPO            VARCHAR(255),
    FL_ATIVO            CHAR(1) DEFAULT 'S' NOT NULL CHECK (FL_ATIVO IN ('S', 'N')),
    DT_CADASTRO         TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    DT_ALTERACAO        TIMESTAMP
);

-- 2. Tabela Associativa N:N (Empresas x Grupos)
CREATE TABLE TB_EMPRESA_GRUPO (
    ID_EMPRESA          BIGINT NOT NULL REFERENCES TB_EMPRESA(ID_EMPRESA) ON DELETE CASCADE,
    ID_GRUPO            BIGINT NOT NULL REFERENCES TB_GRUPO_EMPRESAS(ID_GRUPO) ON DELETE RESTRICT,
    DT_VINCULO          TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (ID_EMPRESA, ID_GRUPO)
);

-- Índices para Agilidade em Consultas de BI e Relatórios Consolidados
CREATE UNIQUE INDEX IX_GRUPO_NOME ON TB_GRUPO_EMPRESAS(NM_GRUPO);
CREATE INDEX IX_EMPRESA_GRUPO_EMP ON TB_EMPRESA_GRUPO(ID_EMPRESA);
CREATE INDEX IX_EMPRESA_GRUPO_GRP ON TB_EMPRESA_GRUPO(ID_GRUPO);</code></pre>
      </div>

      ---

      <!-- 4. Catálogo de APIs REST & Contratos de Integração -->
      <h2>🔌 4. Catálogo de APIs REST & Contratos de Integração</h2>
      <p>Endpoints no padrão OpenAPI 3.0 para consumo por microsserviços e pela interface Angular 17+:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>POST /api/v1/grupos-empresas (Criar Holding com Filiais)</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar cURL</button>
        </div>
        <pre><code>curl -X POST "https://homolog.ilclogportal.com.br/api/v1/grupos-empresas" \\
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn..." \\
     -H "Content-Type: application/json" \\
     -d '{
       "nome": "GRUPO STELLANTIS LATAM",
       "descricao": "Holding corporativa consolidando as plantas Betim, Goiana e Porto Real",
       "ativo": true,
       "empresasIds": [104, 108, 112]
     }'</code></pre>
      </div>

      ---

      <!-- 5. Regras de Negócio & Algoritmos de Backend -->
      <h2>⚙️ 5. Regras de Negócio & Algoritmos de Backend</h2>
      <p>Implementação do método de sincronização atômica de filiais no EJB <code>GrupoEmpresasBean.java</code>:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>Java — Sincronização Transacional de Filiais (JPA)</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar Java</button>
        </div>
        <pre><code>package br.com.ilc.integrator.ejb.bean.empresa;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class GrupoEmpresasBean implements GrupoEmpresasRemote {

    @PersistenceContext(unitName = "IntegratorPU")
    private EntityManager em;

    @TransactionAttribute(TransactionAttributeType.REQUIRED)
    public void sincronizarFiliais(Long idGrupo, List<Long> idsEmpresasNovas) {
        GrupoEmpresas grupo = em.find(GrupoEmpresas.class, idGrupo);
        if (grupo == null) {
            throw new BusinessException("Grupo econômico não localizado para o ID: " + idGrupo);
        }

        // Limpa vínculos anteriores e recarrega coleção gerenciada
        em.createQuery("DELETE FROM EmpresaGrupo eg WHERE eg.grupo.id = :idGrupo")
          .setParameter("idGrupo", idGrupo)
          .executeUpdate();

        for (Long idEmpresa : idsEmpresasNovas) {
            Empresa emp = em.find(Empresa.class, idEmpresa);
            if (emp != null) {
                EmpresaGrupo vinculo = new EmpresaGrupo(emp, grupo);
                em.persist(vinculo);
            }
        }
        em.flush();
    }
}</code></pre>
      </div>

      ---

      <!-- 6. Guia de Troubleshooting & Diagnóstico Técnico -->
      <h2>🛠️ 6. Guia de Troubleshooting & Diagnóstico Técnico</h2>
      <div class="faq-container">
        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ org.hibernate.LazyInitializationException no carregamento de filiais</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Acesso à coleção <code>grupo.getEmpresas()</code> fora do contexto transacional da sessão JPA.<br>
              <strong>Solução Técnica:</strong> Utilize consulta HQL com <code>JOIN FETCH g.empresas</code> no DAO ou execute o carregamento explicitamente dentro do EJB antes de fechar a transação.
            </div>
          </details>
        </div>

        <div class="faq-item">
          <details>
            <summary class="faq-question">
              <span>⚠️ Erro de chave estrangeira ao tentar excluir um grupo econômico</span>
              <span>🔽</span>
            </summary>
            <div class="faq-answer">
              <strong>Causa:</strong> Tentativa de exclusão física de registro que possui vínculos ativos na tabela <code>TB_EMPRESA_GRUPO</code>.<br>
              <strong>Solução Técnica:</strong> O sistema deve priorizar exclusão lógica (<code>FL_ATIVO = 'N'</code>) ou remover previamente as associações filhas antes do <code>DELETE</code>.
            </div>
          </details>
        </div>
      </div>

      ---

      <!-- 7. Comandos de Build, Deploy & Configurações -->
      <h2>⚙️ 7. Comandos de Build, Deploy & Configurações</h2>
      <p>Instruções para compilação e monitoramento de logs do módulo de holdings:</p>

      <div class="code-block-wrapper">
        <div class="code-header">
          <span>Comandos Maven & WildFly CLI</span>
          <button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText)">Copiar Comandos</button>
        </div>
        <pre><code># 1. Compilar o módulo de cadastros societários
mvn clean install -pl integrator-ejb,integrator-web -DskipTests

# 2. Deploy no servidor WildFly
$JBOSS_HOME/bin/jboss-cli.sh --connect --command="deploy integrator-ear/target/integrator.ear --force"

# 3. Monitoramento de logs em tempo real
tail -f $JBOSS_HOME/standalone/log/server.log | grep -E "GrupoEmpresasController|GrupoEmpresasBean"</code></pre>
      </div>
    `
  },

  cad_prazos_entrega: {
    id: "cad_prazos_entrega",
    title: "Prazos de Entrega",
    subtitle: "Matriz de Lead Times por Rota, Tolerâncias em Dias e Regras de Cálculo da Promessa",
    category: "Fundação",
    icon: "⏱️",
    summary: "Parametriza os prazos padrões de transporte entre fornecedores e plantas para cálculo automático de SLA e tolerâncias de entrega.",
    relacao: "Alimenta diretamente os cálculos de data prevista na <b>Promessa de Entrega</b> e no <b>Monitor PE</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaPrazosEntrega.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de lead times por região e dias úteis.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_PRAZO_ENTREGA</code>.</p>`
  },

  cad_workflow: {
    id: "cad_workflow",
    title: "Workflow",
    subtitle: "Configuração de Alçadas de Aprovação, Matriz de Solicitantes e Hierarquia de Decisão",
    category: "Fundação",
    icon: "🔀",
    summary: "Define os fluxos de aprovação multinível de custos extras e fretes extraordinários por faixa de valor e tipo de operação.",
    relacao: "Governa as alçadas de liberação no <b>Frete Expresso</b> e autorizações de faturamento especial.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/cadastroWorkflow.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de aprovações sequenciais e alçadas por perfil.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_WORKFLOW</code>.</p>`
  },

  cad_cliente_fornecedor: {
    id: "cad_cliente_fornecedor",
    title: "Cliente x Fornecedor",
    subtitle: "Vínculo Comercial e Operacional entre Plantas Clientes, Fornecedores e Analistas Responsáveis",
    category: "Fundação",
    icon: "🤝",
    summary: "Configura a relação operacional entre cada planta compradora e seus fornecedores habilitados, definindo Incoterm (CIF/FOB), modalidade produtiva/indireta e tolerâncias.",
    relacao: "Base mandatória para emissão de <b>Ordens de Compra</b> e agendamento de coletas no <b>Follow-up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaClienteFornecedor.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de duplicidade de vínculo e tolerâncias de entrega.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_CLIENTE_FORNECEDOR</code>.</p>`
  },

  cad_embalagens: {
    id: "cad_embalagens",
    title: "Cadastro Embalagem",
    subtitle: "Especificações Técnicas de Racks, Pallets, Caixas KLT e Fatores de Cubagem",
    category: "Fundação",
    icon: "📦",
    summary: "Cadastra os tipos de embalagens padronizadas com suas dimensões físicas (C x L x A), peso tara e capacidade volumétrica.",
    relacao: "Alimenta os cálculos de <b>Consulta Volumetria</b>, cubagem no <b>Roteirizador</b> e conferência no <b>ROC</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaClienteEmbalagem.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de cubagem e empilhamento máximo permitido.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_CLIENTE_EMBALAGEM</code>.</p>`
  },

  cad_contatos_upload: {
    id: "cad_contatos_upload",
    title: "Upload Contatos",
    subtitle: "Carga em Massa de Contatos Comerciais, E-mails de Notificação e Telefones via Planilha Excel",
    category: "Fundação",
    icon: "📥",
    summary: "Permite a importação em lote e manutenção dos contatos responsáveis (comerciais, logística e qualidade) de cada fornecedor e cliente.",
    relacao: "Alimenta os destinatários de e-mails de alerta em <b>Promessas de Entrega</b> e <b>Frete Expresso</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/cadastroClienteFornecedorContato.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de upload de arquivos .xls/.xlsx e formato de e-mails.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_CLIENTE_FORNECEDOR_CONTATO</code>.</p>`
  },

  cad_motivos_congelamento: {
    id: "cad_motivos_congelamento",
    title: "Motivo Congel. NF",
    subtitle: "Tabela de Motivos Padronizados para Retenção Preventiva de Notas Fiscais e Documentos",
    category: "Fundação",
    icon: "❄️",
    summary: "Cadastra as justificativas normatizadas para retenção preventiva de notas fiscais (avarias, divergência fiscal, falta de OC).",
    relacao: "Utilizado pelos analistas na rotina de <b>Congel. de Notas</b> e verificado na portaria pelo <b>Gate De Entrada</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaMotivosCongelamentoNf.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de preenchimento obrigatório e justificativa formal.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_MOTIVO_CONGELAMENTO_NF</code>.</p>`
  },

  cad_rotas: {
    id: "cad_rotas",
    title: "Cadastro de Rotas",
    subtitle: "Definição de Trajetos Padrão, Pontos de Parada, Praças de Pedágio e Distâncias em KM",
    category: "Fundação",
    icon: "🛣️",
    summary: "Cadastra os trajetos homologados entre plantas de clientes e fábricas de fornecedores, com quilometragem e postos fiscais.",
    relacao: "Base para o <b>Roteirizador</b>, cálculo de <b>Pedágios</b> e estimativa de tempo (ETA) no <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaRota.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de quilometragem e sequenciamento de paradas.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_ROTA</code>.</p>`
  },

  cad_frequencias: {
    id: "cad_frequencias",
    title: "Frequências",
    subtitle: "Parametrização de Dias da Semana, Horários de Carregamento e Janelas Fixas de Coleta",
    category: "Fundação",
    icon: "📅",
    summary: "Define os dias da semana e horários específicos em que cada fornecedor está apto a expedir cargas (Milk Run / Cargas Diretas).",
    relacao: "Governa o agendamento de coletas na <b>Gestão de Demandas</b> e na <b>Previsão de Carga</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaFrequencias.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de janelas de coleta em dias úteis e feriados.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_FREQUENCIA_COLETA</code>.</p>`
  },

  cad_pecas: {
    id: "cad_pecas",
    title: "Cliente Peça",
    subtitle: "Catálogo de Peças Automotivas, Códigos Internos, Descrições Técnicas e Unidades de Medida",
    category: "Fundação",
    icon: "🔩",
    summary: "Cadastra a relação de códigos de peças (Part Numbers) associados a cada cliente e fornecedor, definindo peso e embalagem padrão.",
    relacao: "Obrigatório para emissão de <b>Ordens de Compra</b> e rastreamento granular no <b>Tracking</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaClientePeca.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de unicidade de Part Number por cliente.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_CLIENTE_PECA</code>.</p>`
  },

  cad_itens_especiais: {
    id: "cad_itens_especiais",
    title: "Itens Especiais",
    subtitle: "Parametrização de Peças Estratégicas com Alertas Prioritários e Risco de Parada de Montagem",
    category: "Fundação",
    icon: "⚠️",
    summary: "Sinaliza componentes de altíssimo risco de abastecimento que necessitam de acompanhamento em tempo real e semáforos especiais.",
    relacao: "Alimenta os alertas de prioridade máxima no <b>Tracking Cockpit</b> e no módulo de <b>Itens Críticos</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaItensEspeciais.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Disparo de notificações automáticas ao detectar atraso em item especial.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_ITEM_ESPECIAL</code>.</p>`
  },

  cad_pedagios: {
    id: "cad_pedagios",
    title: "Gestão Pedágio",
    subtitle: "Tabela Tarifária de Praças, Concessionárias, Eixos de Veículos e Integração Sem Parar / Veloe",
    category: "Execução",
    icon: "🪙",
    summary: "Registra as praças de pedágio em rodovias federais e estaduais com tarifas por categoria de veículo para cálculo de vale-pedágio.",
    relacao: "Base de cálculo para a <b>Gestão Pedágio</b> e conciliação financeira no <b>Faturamento</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaPedagios.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Cálculo de tarifas por quantidade de eixos do caminhão.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_PRACA_PEDAGIO</code>.</p>`
  },

  consulta_edi: {
    id: "consulta_edi",
    title: "Consulta EDI",
    subtitle: "Monitoramento de Arquivos NOTFIS, Processamento de Mensageria e Validação de Layouts PROCEDA",
    category: "Demandas",
    icon: "📡",
    summary: "Centraliza o recebimento de arquivos EDI de notas fiscais e pedidos enviados pelos clientes e fornecedores via SFTP/AS2.",
    relacao: "Gera automaticamente as <b>Ordens de Compra</b> e alimenta o <b>Monitor PE</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/consultaEdi.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Testes de parser de arquivos NOTFIS com campos obrigatórios.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_EDI_PROCESSAMENTO</code>.</p>`
  },

  solicitacao_ordem_compra: {
    id: "solicitacao_ordem_compra",
    title: "Solic Ordem Compra",
    subtitle: "Emissão Manual de Ordens de Compra Extraordinárias e Demandas Avulsas de Fornecimento",
    category: "Demandas",
    icon: "📝",
    summary: "Permite ao cliente emitir solicitações manuais de pedidos quando não integrados automaticamente via EDI.",
    relacao: "Gera registros para a <b>Pedidos</b> e exige resposta do fornecedor na <b>Promessa de Entrega</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/clienteOrdemCompraSolicitacao.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de alçadas e datas de entrega solicitadas.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_SOLICITACAO_ORDEM_COMPRA</code>.</p>`
  },

  consulta_ordem_compra: {
    id: "consulta_ordem_compra",
    title: "Consulta de Ordem",
    subtitle: "Painel de Rastreabilidade de Pedidos de Compra por Número, Linha, Status e Fornecedor",
    category: "Demandas",
    icon: "🔍",
    summary: "Permite consultar o histórico e status detalhado de cada linha de ordem de compra emitida.",
    relacao: "Conecta a necessidade do cliente ao atendimento do fornecedor no <b>Monitor PE</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/consultaOrdem.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Filtros por período, fornecedor e status de atendimento.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_ORDEM_COMPRA</code>.</p>`
  },

  gestao_pedidos: {
    id: "gestao_pedidos",
    title: "Pedidos",
    subtitle: "Central Unificada de Gestão de Pedidos de Compra, Alocação de Transportadores e Liberação",
    category: "Demandas",
    icon: "🛒",
    summary: "Centraliza todas as ordens de compra dos clientes integradas via EDI ou inseridas manualmente, permitindo a consolidação e programação das coletas.",
    relacao: "Recebe o fechamento das <b>Promessas de Entrega</b> e gera as viagens para o <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaPedidos.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de status de liberação de pedidos e alocação de frota.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_PEDIDO</code>.</p>`
  },

  pedidos_transportador: {
    id: "pedidos_transportador",
    title: "Pedidos Transportador",
    subtitle: "Visão Restrita para Transportadoras com Ordens de Coleta Liberadas para Embarque",
    category: "Demandas",
    icon: "🚚",
    summary: "Permite às transportadoras contratadas visualizar os pedidos sob sua responsabilidade e alocar veículos.",
    relacao: "Alimenta a formação de manifestos no <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/pedidosTransportador.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Isolamento multi-tenant: transportadora visualiza apenas suas coletas.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_PEDIDO_TRANSPORTADOR</code>.</p>`
  },

  respostas_promessa: {
    id: "respostas_promessa",
    title: "Respostas Promessa",
    subtitle: "Painel de Resposta Formal dos Fornecedores, Agendamentos de Coleta e Aceites de Prazos",
    category: "Demandas",
    icon: "💬",
    summary: "Interface onde os fornecedores registram suas respostas formais de capacidade de atendimento, datas de faturamento e volumes disponíveis para coleta.",
    relacao: "Alimenta o <b>Monitor PE</b> e os alertas na <b>Torre de Controle</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/respostaPromessa.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de aceites parciais, justificativas de divergência e disparo de notificações.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_RESPOSTA_PROMESSA</code>.</p>`
  },

  monitor_pe: {
    id: "monitor_pe",
    title: "Monitor PE",
    subtitle: "Cockpit Semafórico de Cumprimento de Prazos de Fornecedores, Atrasos e Lead Times",
    category: "Demandas",
    icon: "🚦",
    summary: "Painel gerencial com semáforos (Verde, Amarelo, Vermelho) indicando o status de cumprimento dos acordos de entrega.",
    relacao: "Dispara alertas de itens em risco para o <b>Tracking Cockpit</b> e <b>Itens Críticos</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/monitorPE.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Cálculo de semáforos com base no Lead Time e tolerâncias.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_MONITOR_PE</code>.</p>`
  },

  gestao_demanda: {
    id: "gestao_demanda",
    title: "Gestão de Demandas",
    subtitle: "Previsão de Volume por Região, Nivelamento de Frota e Análise de Capacidade de Transporte",
    category: "Demandas",
    icon: "📊",
    summary: "Permite aos planejadores da ILC nivelar os volumes de coleta diários para evitar picos de capacidade de transporte.",
    relacao: "Alimenta o <b>Roteirizador</b> e a programação de veículos no <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/gestaoDemanda.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Balanceamento de peso e cubagem por rota semanal.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_GESTAO_DEMANDA</code>.</p>`
  },

  consulta_volumetria: {
    id: "consulta_volumetria",
    title: "Consulta Volumetria",
    subtitle: "Cálculo Volumétrico em M³, Pesos Brutos/Líquidos e Fator de Cubagem de Cargas",
    category: "Carga",
    icon: "📐",
    summary: "Calcula a cubagem total das ordens de coleta com base nas dimensões cadastradas no módulo de Embalagens.",
    relacao: "Alimenta o <b>ROC</b> e o dimensionamento da frota.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/consultaVolumetria.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Fórmula de cubagem (C x L x A x Qtd / 1.000.000).</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_VOLUMETRIA</code>.</p>`
  },

  previsao_carga: {
    id: "previsao_carga",
    title: "Previsão de Carga",
    subtitle: "Planejamento de Embarques Futuros, Agrupamento de Volumes e Pré-alocação de Veículos",
    category: "Carga",
    icon: "📦",
    summary: "Permite projetar a necessidade de carretas com até 7 dias de antecedência com base nas promessas confirmadas.",
    relacao: "Envia cargas planejadas para o <b>Roteirizador</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/previsaoCarga.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Projeção de ocupação por tipo de veículo (VUC, Toco, Truck, Carreta).</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_PREVISAO_CARGA</code>.</p>`
  },

  roteirizador: {
    id: "roteirizador",
    title: "Roteirizador",
    subtitle: "Otimização de Rotas de Milk Run, Janelas de Coleta e Sequenciamento de Paradas",
    category: "Carga",
    icon: "🗺️",
    summary: "Calcula o melhor sequenciamento de coleta entre fornecedores da mesma região para otimizar tempo e combustível.",
    relacao: "Gera a rota oficial para criação de viagens no <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/roteirizador.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Respeito estrito às janelas de horário de cada fornecedor.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_ROTEIRIZACAO</code>.</p>`
  },

  relatorio_ocupacao_carga: {
    id: "relatorio_ocupacao_carga",
    title: "ROC",
    subtitle: "Auditoria de Aproveitamento Volumétrico, Taxa de Ocupação da Carreta e Redução de Frete Morto",
    category: "Carga",
    icon: "📈",
    summary: "Gera o indicador ROC (Relatório de Ocupação de Carga) auditando se a carreta viajou com sua capacidade máxima aproveitada.",
    relacao: "Alimenta os relatórios de eficiência logística na <b>Lista Relatórios</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/relatorioOcupacaoCarga.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Cálculo de percentual de aproveitamento de assoalho e altura.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_AUDITORIA_ROC</code>.</p>`
  },

  gate_entrada: {
    id: "gate_entrada",
    title: "Gate De Entrada",
    subtitle: "Controle de Acesso de Veículos, Check-in de Portaria, Triagem de NFs e Liberação de Doca",
    category: "Execução",
    icon: "🚪",
    summary: "Registra o momento exato em que o caminhão ingressa no pátio da montadora, conferindo placas e motorista.",
    relacao: "Dispara o status 'No Pátio' no <b>Tracking Cockpit</b> e libera o descarregamento no <b>Gestão Embarcada</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/gateEntrada.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de placas e CTe associados à viagem.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_GATE_ENTRADA</code>.</p>`
  },

  gestao_embalagem: {
    id: "gestao_embalagem",
    title: "Gestão Embalagem",
    subtitle: "Controle de Saldo de Embalagens Vazias, Devolução de Racks, Pallets e Caixas aos Fornecedores",
    category: "Execução",
    icon: "🔄",
    summary: "Gerencia a conta-corrente de embalagens entre clientes e fornecedores, orquestrando as coletas de contentores vazios.",
    relacao: "Gera viagens de retorno de embalagens no <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/listaOperacaoEntregaEmbalagem.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Conciliação de saldos devedores de embalagens por planta.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_OPERACAO_EMBALAGEM</code>.</p>`
  },

  gestao_md: {
    id: "gestao_md",
    title: "Gestão MD",
    subtitle: "Gestão de Motoristas e Veículos Dedicados, Jornada de Trabalho e Documentação de Frota",
    category: "Execução",
    icon: "🚛",
    summary: "Controla a alocação e prontidão da frota dedicada (Motoristas Dedicados - MD), documentação CNH, ASO e inspeções veiculares.",
    relacao: "Disponibiliza motoristas e cavalos mecânicos para alocação no <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/gestaoMD.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de vencimento de CNH e bloqueio automático de motoristas irregulares.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_GESTAO_MD</code>.</p>`
  },

  gestao_embarcada: {
    id: "gestao_embarcada",
    title: "Gestão Embarcada",
    subtitle: "Aplicativo Mobile para Motoristas, Assinatura Eletrônica e Digitalização de Canhotos",
    category: "Execução",
    icon: "📱",
    summary: "Aplicativo móvel e módulo de recepção que conecta os motoristas à Torre de Controle, permitindo confirmação de entregas em tempo real e upload de canhotos.",
    relacao: "Alimenta os marcos de entrega no <b>Follow Up de Viagens</b> e libera o <b>Faturamento</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/gestaoEmbarcada.xhtml</code> e aplicativo móvel.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de geolocalização no momento da foto do canhoto.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_GESTAO_EMBARCADA</code>.</p>`
  },

  cockpit: {
    id: "cockpit",
    title: "Tracking Cockpit",
    subtitle: "Monitoramento em Tempo Real, Gestão à Vista, Semáforos de Criticidade e Smart Tracking",
    category: "Torre de Controle",
    icon: "🎯",
    summary: "Painel executivo da Torre de Controle que centraliza a visão panorâmica de todas as viagens em trânsito, alertas de atraso e itens com risco de desabastecimento.",
    relacao: "Consolida dados de <b>Follow Up de Viagens</b>, <b>Promessa de Entrega</b>, <b>Itens Críticos</b> e <b>Congel. de Notas</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/cockpit.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de alertas semafóricos e atualização dinâmica por polling.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_COCKPIT_LOGISTICO</code>.</p>`
  },

  smart_tracking: {
    id: "smart_tracking",
    title: "Smart Tracking",
    subtitle: "Rastreamento Satelital Integrado com Gerenciadoras de Risco (Buonny, AngelLira, Sascar, Omnilink)",
    category: "Torre de Controle",
    icon: "🛰️",
    summary: "Interface de mapa com visualização geográfica dos caminhões em trânsito, cálculo de ETA dinâmico e cercas eletrônicas.",
    relacao: "Alimenta os alertas de desvio de rota no <b>Tracking Cockpit</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/smartTracking.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Processamento de telemetria e recálculo de previsão de chegada (ETA).</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_SMART_TRACKING</code>.</p>`
  },

  tracking_pecas: {
    id: "tracking_pecas",
    title: "Tracking",
    subtitle: "Rastreamento Granular por Part Number, Número de Lote, Nota Fiscal e Posição Física na Carreta",
    category: "Torre de Controle",
    icon: "🔍",
    summary: "Permite ao cliente pesquisar uma peça específica e descobrir exatamente em qual carreta ela está viajando.",
    relacao: "Cruza dados de <b>Consulta de Ordem</b>, <b>Notas Fiscais</b> e <b>Follow Up de Viagens</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/trackingPecas.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Rastreamento por Part Number com histórico de notas fiscais associadas.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_TRACKING_PECA</code>.</p>`
  },

  smart_x: {
    id: "smart_x",
    title: "SMART X",
    subtitle: "Plataforma Avançada de Telemetria e Conectividade Veicular Integrada",
    category: "Torre de Controle",
    icon: "🚀",
    summary: "Módulo integrado de inteligência telemática para leitura de parâmetros de motor, velocidade, frenagem e telemetria avançada de carretas.",
    relacao: "Integra dados com a <b>Torre de Controle</b> e o <b>Smart Tracking</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/smartX.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de telemetria e recepção de pacotes CAN bus.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_SMART_X</code>.</p>`
  },

  smart_x_v2: {
    id: "smart_x_v2",
    title: "SMART X (V2)",
    subtitle: "Nova Geração da Plataforma SMART X com Algoritmos Preditivos de Chegada e IA",
    category: "Torre de Controle",
    icon: "✨",
    summary: "Versão evoluída da plataforma SMART X com modelos preditivos de inteligência artificial para cálculo refinado de ETA e detecção precoce de paradas.",
    relacao: "Alimenta os semáforos preditivos no <b>Tracking Cockpit</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/smartXV2.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Testes de regressão nos modelos preditivos de tráfego.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_SMART_X_V2</code>.</p>`
  },

  faturamento_frete: {
    id: "faturamento_frete",
    title: "Faturamento",
    subtitle: "Conferência de CTe, Extratos de Vale-Pedágio, Auditoria de Faturas e Emissão de DOCCOB",
    category: "Inteligência",
    icon: "💰",
    summary: "Realiza a pré-fatura e conciliação dos conhecimentos de transporte (CT-e) com as tabelas de frete contratadas.",
    relacao: "Consome dados do <b>Follow Up de Viagens</b>, <b>Pedágios</b> e alimenta a <b>Lista Relatórios</b>.",
    user_content: `<h2>📖 Guia Operacional Passo a Passo</h2><p>Tela: <code>/pages/faturamento.xhtml</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de divergência de valores entre CTe emitido e tabela homologada.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Tabela: <code>TB_FATURAMENTO_FRETE</code>.</p>`
  },

  api_gateway_swagger: {
    id: "api_gateway_swagger",
    title: "API Integrator",
    subtitle: "Catálogo de APIs REST, Swagger OpenAPI 3.0, Webhooks e Integrações Externas (qaapi.ilclogportal.com.br)",
    category: "Inteligência",
    icon: "⚡",
    summary: "Documentação interativa e sandbox para integração dos ERPs dos clientes e transportadores via API REST.",
    relacao: "Permite a troca de dados em tempo real com SAP, Oracle EBS, TOTVS e sistemas legados.",
    user_content: `<h2>📖 Guia de Integração via API</h2><p>URL: <code>https://qaapi.ilclogportal.com.br/swagger-ui.html</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & Automação de APIs</h2><p>Testes de contrato REST e segurança OAuth2/JWT.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Gateway: Spring Cloud Gateway / Swagger OpenAPI 3.0.</p>`
  },

  xforms_formularios: {
    id: "xforms_formularios",
    title: "XForms (Formulários)",
    subtitle: "Motor de Formulários Dinâmicos, Checklists de Inspeção de Veículos e Auditorias de Qualidade (qaxforms.ilclogportal.com.br)",
    category: "Inteligência",
    icon: "📋",
    summary: "Permite criar formulários dinâmicos de auditoria, checklist de veículos e vistorias sem necessidade de deploy de código.",
    relacao: "Integrado ao <b>Gate De Entrada</b> e às inspeções de qualidade na planta.",
    user_content: `<h2>📖 Guia de Formulários Dinâmicos</h2><p>URL: <code>https://qaxforms.ilclogportal.com.br/</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & BDD</h2><p>Validação de campos dinâmicos e regras de preenchimento obrigatório.</p>`,
    dev_content: `<h2>💻 Hub de Tecnologia</h2><p>Engine: XForms / Orbeon / JSON Schema Forms.</p>`
  },

  helpdesk_suporte: {
    id: "helpdesk_suporte",
    title: "HelpDesk",
    subtitle: "Abertura de Chamados, SLA de Atendimento, Gestão de Incidentes e Suporte Operacional (helpdesk.ilclogportal.com.br)",
    category: "Inteligência",
    icon: "🎧",
    summary: "Central oficial de chamados técnicos e operacionais para suporte 24 horas por dia a clientes, fornecedores e transportadores.",
    relacao: "Conecta os usuários do portal à equipe de suporte N1, N2 e engenharia da ILC.",
    user_content: `<h2>📖 Guia da Central de Helpdesk</h2><p>URL: <code>https://helpdesk.ilclogportal.com.br/</code>.</p>`,
    qa_content: `<h2>🧪 Estratégia de QA & Suporte</h2><p>Medição de tempo de resposta e cumprimento de SLAs de tickets.</p>`,
  },

  instrucoes_trabalho: {
    id: "instrucoes_trabalho",
    title: "Catálogo de ITs",
    subtitle: "Índice completo de manuais normatizados com visualizador em PDF e download direto",
    category: "Governança",
    icon: "📚",
    summary: "Consulte a lista completa das Instruções de Trabalho (IT.OPE) e Procedimentos Operacionais (P.OPE) oficiais do Grupo Mirassol. Clique em 'Visualizar' para ler no navegador ou em 'Baixar' para salvar o PDF.",
    content: `
      <div class="callout callout-info">
        <div class="callout-icon">💡</div>
        <div class="callout-content">
          <div class="callout-title">Repositório Oficial de Documentos Normatizados (SGQ)</div>
          Todos os documentos abaixo são as versões vigentes auditadas. Você pode <strong>visualizar o PDF diretamente no leitor integrado</strong> ou <strong>fazer o download</strong> para consulta offline.
        </div>
      </div>

      <h2>📁 Catálogo Completo de Instruções de Trabalho (IT.OPE & P.OPE)</h2>
      <div class="table-container">
        <table class="doc-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título da Instrução / Procedimento</th>
              <th>Módulo Relacionado</th>
              <th>Revisão</th>
              <th style="text-align: center; min-width: 200px;">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>IT.OPE.01</code></td>
              <td><strong>Promessa de Entrega – Materiais Produtivos</strong></td>
              <td>Promessa de Entrega</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.01.pdf', 'IT.OPE.01 - Promessa de Entrega Materiais Produtivos', 'IT.OPE.01 - PROMESSA DE ENTREGA - MATERIAIS PRODUTIVOS REV.00 (28-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.01.pdf" download="IT.OPE.01 - PROMESSA DE ENTREGA - MATERIAIS PRODUTIVOS REV.00 (28-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.02</code></td>
              <td><strong>Promessa de Entrega – Indiretos</strong></td>
              <td>Promessa de Entrega</td>
              <td><span class="tag-badge">REV.02</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.02.pdf', 'IT.OPE.02 - Promessa de Entrega Indiretos', 'IT.OPE.02 - PROMESSA DE ENTREGA INDIRETOS. REV02 (17-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.02.pdf" download="IT.OPE.02 - PROMESSA DE ENTREGA INDIRETOS. REV02 (17-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.04</code></td>
              <td><strong>Frete Expresso</strong></td>
              <td>Frete Expresso</td>
              <td><span class="tag-badge">REV.02</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.04.pdf', 'IT.OPE.04 - Frete Expresso', 'IT.OPE.04 - FRETE EXPRESSO - REV.002 (14-02-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.04.pdf" download="IT.OPE.04 - FRETE EXPRESSO - REV.002 (14-02-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.05</code></td>
              <td><strong>Pedidos Transportador</strong></td>
              <td>Gestão de Pedidos</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.05.pdf', 'IT.OPE.05 - Pedidos Transportador', 'IT.OPE.05 - PEDIDOS TRANSPORTADOR REV00 (22-04-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.05.pdf" download="IT.OPE.05 - PEDIDOS TRANSPORTADOR REV00 (22-04-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.06</code></td>
              <td><strong>Gestão de Pedágios</strong></td>
              <td>Gestão de Pedágios</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.06.pdf', 'IT.OPE.06 - Gestão de Pedágios', 'IT.OPE.06 - GESTÃO DE PEDÁGIOS REV.00 (21-07-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.06.pdf" download="IT.OPE.06 - GESTÃO DE PEDÁGIOS REV.00 (21-07-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.08</code></td>
              <td><strong>Gestão Embarcada Aplicativo Mobile</strong></td>
              <td>Pátio & Gestão Embarcada</td>
              <td><span class="tag-badge">REV.05</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.08.pdf', 'IT.OPE.08 - Gestão Embarcada Aplicativo', 'IT.OPE.08 - GESTAO EMBARCADA APLICATIVO REV05 (19-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.08.pdf" download="IT.OPE.08 - GESTAO EMBARCADA APLICATIVO REV05 (19-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.09</code></td>
              <td><strong>Tracking de Peças e Embalagens</strong></td>
              <td>Embalagens & Peças</td>
              <td><span class="tag-badge">REV.01</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.09.pdf', 'IT.OPE.09 - Tracking de Peças e Embalagens', 'IT.OPE.09 - TRACKING DE PEÇAS E EMBALAGENS. REV01 (05-02-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.09.pdf" download="IT.OPE.09 - TRACKING DE PEÇAS E EMBALAGENS. REV01 (05-02-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.11</code></td>
              <td><strong>Congelamento de Notas Fiscais</strong></td>
              <td>Congelamento de NFs</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.11.pdf', 'IT.OPE.11 - Congelamento de Notas', 'IT.OPE.11 - CONGELAMENTO DE NOTAS (06-02-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.11.pdf" download="IT.OPE.11 - CONGELAMENTO DE NOTAS (06-02-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.18</code></td>
              <td><strong>Faturamento Onze Onze</strong></td>
              <td>Faturamento & BI</td>
              <td><span class="tag-badge">REV.02</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.18.pdf', 'IT.OPE.18 - Faturamento Onze Onze', 'IT.OPE.18 - FATURAMENTO ONZE ONZE REV02 (03-09-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.18.pdf" download="IT.OPE.18 - FATURAMENTO ONZE ONZE REV02 (03-09-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.20</code></td>
              <td><strong>Sinalização de Itens Críticos</strong></td>
              <td>Itens Críticos</td>
              <td><span class="tag-badge">REV.03</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.20.pdf', 'IT.OPE.20 - Sinalização de Itens Críticos', 'IT.OPE.20 - SINALIZAÇÃO DE ITENS CRÍTICOS REV03 (28-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.20.pdf" download="IT.OPE.20 - SINALIZAÇÃO DE ITENS CRÍTICOS REV03 (28-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.21</code></td>
              <td><strong>Follow-up de Viagens</strong></td>
              <td>Follow-up de Viagens</td>
              <td><span class="tag-badge">REV.01</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.21.pdf', 'IT.OPE.21 - Follow-up de Viagens', 'IT.OPE.21 - FOLLOW UP DE VIAGENS. REV01 (27-02-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.21.pdf" download="IT.OPE.21 - FOLLOW UP DE VIAGENS. REV01 (27-02-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.22</code></td>
              <td><strong>Alteração de Senha</strong></td>
              <td>Usuários</td>
              <td><span class="tag-badge">REV.01</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.22.pdf', 'IT.OPE.22 - Alteração de Senha', 'IT.OPE.22 - ALTERAÇÃO DE SENHA REV01 (17-01-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.22.pdf" download="IT.OPE.22 - ALTERAÇÃO DE SENHA REV01 (17-01-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.24</code></td>
              <td><strong>Home Dashboard</strong></td>
              <td>Relatórios & BI</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.24.pdf', 'IT.OPE.24 - Home Dashboard', 'IT.OPE.24 - HOME DASHBOARD REV.00 (17-02-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.24.pdf" download="IT.OPE.24 - HOME DASHBOARD REV.00 (17-02-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.27</code></td>
              <td><strong>Resposta de Promessa</strong></td>
              <td>Promessa de Entrega</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.27.pdf', 'IT.OPE.27 - Resposta de Promessa', 'IT.OPE.27 - RESPOSTA DE PROMESSA REV00 (24-04-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.27.pdf" download="IT.OPE.27 - RESPOSTA DE PROMESSA REV00 (24-04-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.29</code></td>
              <td><strong>Consulta EDI</strong></td>
              <td>Consulta EDI & Volumetria</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.29.pdf', 'IT.OPE.29 - Consulta EDI', 'IT.OPE.29 - CONSULTA EDI REV.00 (20-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.29.pdf" download="IT.OPE.29 - CONSULTA EDI REV.00 (20-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.30</code></td>
              <td><strong>Consulta Volumetria</strong></td>
              <td>Consulta EDI & Volumetria</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.30.pdf', 'IT.OPE.30 - Consulta Volumetria', 'IT.OPE.30 - CONSULTA VOLUMETRIA REV.00 (18-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.30.pdf" download="IT.OPE.30 - CONSULTA VOLUMETRIA REV.00 (18-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.31</code></td>
              <td><strong>Monitor PE</strong></td>
              <td>Promessa de Entrega</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.31.pdf', 'IT.OPE.31 - Monitor PE', 'IT.OPE.31 - MONITOR PE. REV.00 (18-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.31.pdf" download="IT.OPE.31 - MONITOR PE. REV.00 (18-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.34</code></td>
              <td><strong>Cadastro de Rotas</strong></td>
              <td>Prazos de Entrega</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.34.pdf', 'IT.OPE.34 - Cadastro de Rotas', 'IT.OPE.34 - CADASTRO DE ROTAS REV00 (28-04-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.34.pdf" download="IT.OPE.34 - CADASTRO DE ROTAS REV00 (28-04-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.38</code></td>
              <td><strong>Solicitação de Ordem de Compra</strong></td>
              <td>Gestão de Pedidos</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.38.pdf', 'IT.OPE.38 - Solicitação de Ordem de Compra', 'IT.OPE.38 - SOLICITAÇÃO DE ORDEM DE COMPRA REV00 (21-07-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.38.pdf" download="IT.OPE.38 - SOLICITAÇÃO DE ORDEM DE COMPRA REV00 (21-07-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.43</code></td>
              <td><strong>Relatórios</strong></td>
              <td>Relatórios & BI</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.43.pdf', 'IT.OPE.43 - Relatórios', 'IT.OPE.43 - RELATÓRIOS REV00 (15-04-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.43.pdf" download="IT.OPE.43 - RELATÓRIOS REV00 (15-04-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.45</code></td>
              <td><strong>BI – Gestão de Comunicação</strong></td>
              <td>Relatórios & BI</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.45.pdf', 'IT.OPE.45 - BI Gestão de Comunicação', 'IT.OPE.45 - BI - GESTÃO DE COMUNICAÇÃO REV00 (11-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.45.pdf" download="IT.OPE.45 - BI - GESTÃO DE COMUNICAÇÃO REV00 (11-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.46</code></td>
              <td><strong>Faturamento ILC – Fretes Expressos</strong></td>
              <td>Faturamento & BI</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.46.pdf', 'IT.OPE.46 - Faturamento Fretes Expressos', 'IT.OPE.46 - FATURAMENTO ILC - FRETES EXPRESSOS REV.00 (21-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.46.pdf" download="IT.OPE.46 - FATURAMENTO ILC - FRETES EXPRESSOS REV.00 (21-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.47</code></td>
              <td><strong>Faturamento Serviço de Pedágios</strong></td>
              <td>Gestão de Pedágios</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.47.pdf', 'IT.OPE.47 - Faturamento Serviço de Pedágios', 'IT.OPE.47 - FATURAMENTO SERVIÇO DE PEDÁGIOS REV00 (21-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.47.pdf" download="IT.OPE.47 - FATURAMENTO SERVIÇO DE PEDÁGIOS REV00 (21-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.48</code></td>
              <td><strong>Faturamento MRO</strong></td>
              <td>Faturamento & BI</td>
              <td><span class="tag-badge">REV.01</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.48.pdf', 'IT.OPE.48 - Faturamento MRO', 'IT.OPE.48 - FATURAMENTO MRO REV.01 (25-07-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.48.pdf" download="IT.OPE.48 - FATURAMENTO MRO REV.01 (25-07-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.49</code></td>
              <td><strong>Faturamento ILC – MRM</strong></td>
              <td>Faturamento & BI</td>
              <td><span class="tag-badge">REV.03</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.49.pdf', 'IT.OPE.49 - Faturamento ILC MRM', 'IT.OPE.49 - FATURAMENTO ILC - MRM. REV03 (02-04-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.49.pdf" download="IT.OPE.49 - FATURAMENTO ILC - MRM. REV03 (02-04-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.50</code></td>
              <td><strong>Faturamento ILC – Broker</strong></td>
              <td>Faturamento & BI</td>
              <td><span class="tag-badge">REV.01</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.50.pdf', 'IT.OPE.50 - Faturamento ILC Broker', 'IT.OPE.50 - FATURAMENTO ILC - BROKER. REV01 (01-04-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.50.pdf" download="IT.OPE.50 - FATURAMENTO ILC - BROKER. REV01 (01-04-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.51</code></td>
              <td><strong>Tracking Logístico – Control Tower</strong></td>
              <td>Torre de Controle</td>
              <td><span class="tag-badge">REV.02</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.51.pdf', 'IT.OPE.51 - Tracking Logístico Control Tower', 'IT.OPE.51 - TRACKING LOGÍSTICO - CONTROL TOWER. REV02 (10-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.51.pdf" download="IT.OPE.51 - TRACKING LOGÍSTICO - CONTROL TOWER. REV02 (10-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.53</code></td>
              <td><strong>Confirmação de PFR</strong></td>
              <td>Promessa de Entrega</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.53.pdf', 'IT.OPE.53 - Confirmação de PFR', 'IT.OPE.53 - CONFIRMAÇÃO DE PFR REV.00 (16-05-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.53.pdf" download="IT.OPE.53 - CONFIRMAÇÃO DE PFR REV.00 (16-05-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.54</code></td>
              <td><strong>Código Planner Não Conhecido</strong></td>
              <td>Gestão de Pedidos</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.54.pdf', 'IT.OPE.54 - Código Planner Não Conhecido', 'IT.OPE.54 - CÓDIGO PLANNER NÃO CONHECIDO REV.00 (20-05-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.54.pdf" download="IT.OPE.54 - CÓDIGO PLANNER NÃO CONHECIDO REV.00 (20-05-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.55</code></td>
              <td><strong>PFRs sem Registro no Portal ILC</strong></td>
              <td>Promessa de Entrega</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.55.pdf', 'IT.OPE.55 - PFRs sem Registro no Portal', 'IT.OPE.55 - PFRs SEM REGISTRO NO PORTAL ILC REV.00 (06-06-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.55.pdf" download="IT.OPE.55 - PFRs SEM REGISTRO NO PORTAL ILC REV.00 (06-06-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.56</code></td>
              <td><strong>Solicitação de Acesso PFR</strong></td>
              <td>Usuários / Cadastros</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.56.pdf', 'IT.OPE.56 - Solicitação de Acesso PFR', 'IT.OPE.56 - SOLICITAÇÃO DE ACESSO PFR REV.00 (06-05-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.56.pdf" download="IT.OPE.56 - SOLICITAÇÃO DE ACESSO PFR REV.00 (06-05-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.57</code></td>
              <td><strong>Validação de Acesso PFR</strong></td>
              <td>Usuários / Cadastros</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.57.pdf', 'IT.OPE.57 - Validação de Acesso PFR', 'IT.OPE.57 - VALIDAÇÃO ACESSO PFR. REV.00 (25-07-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.57.pdf" download="IT.OPE.57 - VALIDAÇÃO ACESSO PFR. REV.00 (25-07-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>IT.OPE.59</code></td>
              <td><strong>Criação de Assinatura Eletrônica</strong></td>
              <td>Pátio & App Mobile</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/IT.OPE.59.pdf', 'IT.OPE.59 - Criação de Assinatura Eletrônica', 'IT.OPE.59 - CRIAÇÃO DE ASSINATURA ELETRÔNICA REV.00 (30-07-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/IT.OPE.59.pdf" download="IT.OPE.59 - CRIAÇÃO DE ASSINATURA ELETRÔNICA REV.00 (30-07-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>P.OPE.04</code></td>
              <td><strong>Priorização e Frete Extra para Entrega de Embalagens</strong></td>
              <td>Frete Expresso / Embalagens</td>
              <td><span class="tag-badge">REV.02</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/P.OPE.04.pdf', 'P.OPE.04 - Priorização e Frete Extra Embalagens', 'P.OPE.04 - PRIORIZAÇÃO E FRETE EXTRA PARA ENTREGA DE EMBALAGENS. REV02 (28-03-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/P.OPE.04.pdf" download="P.OPE.04 - PRIORIZAÇÃO E FRETE EXTRA PARA ENTREGA DE EMBALAGENS. REV02 (28-03-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>P.OPE.06</code></td>
              <td><strong>Notificação Risco de Não Envio de Coleta – Frete Morto</strong></td>
              <td>Follow-up de Viagens</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/P.OPE.06.pdf', 'P.OPE.06 - Risco de Não Envio Frete Morto', 'P.OPE.06 - NOTIFICAÇÃO RISCO DE NÃO ENVIO DE COLETA - FRETE MORTO REV.00 (07-08-2025).pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/P.OPE.06.pdf" download="P.OPE.06 - NOTIFICAÇÃO RISCO DE NÃO ENVIO DE COLETA - FRETE MORTO REV.00 (07-08-2025).pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
            <tr>
              <td><code>ROCs</code></td>
              <td><strong>Auditorias de ROCs (Relatório de Ocupação de Carga)</strong></td>
              <td>Pátio & App Mobile</td>
              <td><span class="tag-badge">REV.00</span></td>
              <td style="text-align: center;">
                <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openPdfModal('assets/docs/its/Auditorias.pdf', 'Auditorias de ROCs', 'Auditorias de ROCs.pdf')">👁️ Visualizar</button>
                <a href="assets/docs/its/Auditorias.pdf" download="Auditorias de ROCs.pdf" class="zoom-btn">📥 Baixar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  central_qa: {
    id: "central_qa",
    title: "Central de QA",
    subtitle: "Diretrizes Mestras de Qualidade, Esteira de Testes, Sinergia com Azure DevOps e Padrão de Homologação",
    category: "Governança",
    icon: "🧪",
    summary: "Guia completo da metodologia de Garantia da Qualidade (QA) aplicada ao ILC Integrator: Shift-Left Testing, integração com Azure DevOps (Work Items, Boards e Test Plans), esteira de homologação e padrão de 7 seções para testes nos 19 módulos.",
    content: `
      <!-- AÇÕES DE EXPORTAÇÃO & IMPRESSÃO -->
      <div style="display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-bottom: 16px;">
        <a href="export_central_qa.html" target="_blank" class="btn-print-doc" style="background-color: var(--color-qa-bg); color: var(--color-qa); border-color: var(--color-qa-border); font-weight: 700; text-decoration: none; padding: 8px 16px;">
          <span>📄 Abrir Versão Oficial para Impressão / PDF</span>
        </a>
      </div>

      <!-- BLOCO 1: MANIFESTO & VISÃO GERAL DE QA -->
      <div class="ilc-hero-banner" style="border-left: 4px solid var(--color-qa);">
        <div class="ilc-hero-tag" style="background: var(--color-qa-bg); color: var(--color-qa); border-color: var(--color-qa-border);">
          🧪 Metodologia de Testes • Padrão ILC Integrator
        </div>
        <h2 class="ilc-hero-title">Qualidade como Pilar Estratégico: Shift-Left, BDD e TestOps</h2>
        <p class="ilc-hero-desc">
          No ecossistema <strong>ILC Integrator</strong>, a Qualidade de Software não é uma etapa final de inspeção, mas uma disciplina contínua aplicada desde a concepção dos requisitos (<em>Shift-Left Testing</em>). Adotamos a abordagem dos <strong>Três Amigos</strong> (<em>Negócio/Operações + QA + Engenharia de Software</em>) para garantir que cada funcionalidade nasça com critérios de aceite claros, mensagens de validação documentadas e testes rastreáveis vinculados às Instruções de Trabalho (ITs) oficiais.
        </p>
      </div>

      <!-- BLOCO 2: SINERGIA DOCS HUB ⟷ AZURE DEVOPS -->
      <h2>🤝 Sinergia: Como o Docs Hub e o Azure DevOps se Complementam</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
        A estratégia de qualidade do ILC Integrator opera em dois pilares integrados que se alimentam mutuamente: o <strong>Docs Hub</strong> (este portal) como a <em>Fonte Única da Verdade</em> para consulta e treinamento, e o <strong>Azure DevOps</strong> como o <em>Motor de Execução, Gestão Ágil e Rastreabilidade</em>.
      </p>

      <div class="table-container" style="margin-bottom: 28px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 25%;">Dimensão</th>
              <th style="width: 37%;">📖 ILC Integrator Docs Hub (Portal)</th>
              <th style="width: 38%;">⚙️ Azure DevOps (Plataforma ALM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Papel Central</strong></td>
              <td><strong>Single Source of Truth</strong> (Conhecimento Vivo, Manuais e Treinamento)</td>
              <td><strong>Central de Execução, Gestão de Backlog & CI/CD</strong></td>
            </tr>
            <tr>
              <td><strong>Público-Alvo</strong></td>
              <td>Operadores, Clientes, Analistas de QA, Desenvolvedores e Gestores</td>
              <td>Equipe de Engenharia, QA, Product Owners e Scrum Masters</td>
            </tr>
            <tr>
              <td><strong>Estrutura de QA</strong></td>
              <td>
                • Matriz de Validações com mensagens reais de erro<br>
                • Roteiros passo a passo com telas ilustradas<br>
                • Cenários BDD em Gherkin prontos para automação<br>
                • Diagramas de arquitetura com Pan & Zoom
              </td>
              <td>
                • <strong>Epics</strong> (Migração/Módulo)<br>
                • <strong>Features</strong> (Capacidades de Negócio)<br>
                • <strong>User Stories</strong> com Critérios de Aceite BDD<br>
                • <strong>Test Plans & Test Suites</strong> executáveis diários<br>
                • <strong>Bugs</strong> linkados com rastreabilidade total
              </td>
            </tr>
            <tr>
              <td><strong>Dinâmica de Uso</strong></td>
              <td>Consulta de regras de negócio, estudo de fluxos e consulta de ITs (PDFs)</td>
              <td>Execução de testes (Pass/Fail), sprint planning, Kanban boards e dashboards</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">🔗 Mapeamento Hierárquico no Azure DevOps</h3>
      <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 16px;">
        Cada módulo documentado no portal é automaticamente mapeado na estrutura de Work Items do Azure DevOps através dos nossos scripts de automação:
      </p>

      <div class="card-grid" style="margin-bottom: 32px;">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(0, 82, 204, 0.1); color: var(--ilc-primary);">📦</div>
          <h3>1. Epic de Módulo</h3>
          <p>Representa a iniciativa macro do módulo (ex: <code>[QA] Migração Frontend - Frete Expresso (JSF -> Angular)</code>), vinculada à IT normativa.</p>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(0, 168, 107, 0.1); color: var(--ilc-green);">✨</div>
          <h3>2. Features & User Stories</h3>
          <p>Features divididas por capacidades funcionais, contendo User Stories estruturadas por Persona e Critérios de Aceite em formato <em>Given / When / Then</em>.</p>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(245, 158, 11, 0.1); color: var(--ilc-amber);">📋</div>
          <h3>3. Test Plans & Test Cases</h3>
          <p>Suítes de testes com passos enumerados (<em>Action</em>) e resultados esperados formais (<em>Expected Result</em>), alimentados pelos roteiros da Tab 2.</p>
        </div>
      </div>

      <!-- BLOCO 3: A ESTEIRA DE TESTES & QUALITY GATES -->
      <h2>🔄 A Esteira de Testes & Quality Gates (CI/CD)</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">
        O fluxo de vida de uma funcionalidade desde a especificação até a entrada segura em Produção:
      </p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
graph TD
    A["📄 1. Especificação & IT Normativa"] --> B["👥 2. Refinamento Three Amigos (QA + Dev + PO)"]
    B --> C["🧪 3. Design de Testes (BDD + Matriz de Validações)"]
    C --> D["⚙️ 4. Sincronização Azure DevOps (User Stories & Test Cases)"]
    D --> E["💻 5. Desenvolvimento & Testes Unitários"]
    E --> F["🚀 6. Deploy em Homologação (Staging)"]
    F --> G["🔍 7. Execução dos Test Plans de QA no Portal"]
    G --> H{"Bugs Encontrados?"}
    H -- "Sim (Bloqueante / Alto)" --> I["🐛 Registro de Bug no Azure DevOps ➔ Correção"]
    I --> F
    H -- "Não (100% Pass / DoD Atingido)" --> J["🛡️ Quality Gate & Aprovação Formal de QA"]
    J --> K["🚢 Deploy em Produção (Prod)"]
    K --> L["✅ Smoke Test / Sanity Check em Produção"]

    classDef stage fill:#f0f7ff,stroke:#0052cc,stroke-width:2px,color:#0052cc;
    classDef gate fill:#fff8e6,stroke:#f59e0b,stroke-width:2px,color:#d97706;
    classDef pass fill:#e6fcf5,stroke:#00a86b,stroke-width:2px,color:#00875a;
    classDef bug fill:#fff1f0,stroke:#e02424,stroke-width:2px,color:#e02424;

    class A,B,C,D,E,F,G stage;
    class H gate;
    class I bug;
    class J,K,L pass;
        </div>
      </div>

      <!-- BLOCO 4: PIRÂMIDE DE TESTES -->
      <h2>🔺 Pirâmide de Testes do ILC Integrator</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">
        Para garantir alta cobertura com eficiência e custo controlado, distribuímos os testes em 3 níveis complementares:
      </p>

      <div class="card-grid" style="margin-bottom: 32px;">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-qa-bg); color: var(--color-qa);">🔝</div>
          <h3>Nível 3: Testes E2E, Manuais & Homologação</h3>
          <p><strong>Foco:</strong> Validação de ponta a ponta dos fluxos operacionais, usabilidade em tela, testes exploratórios e validação com usuários-chave em <code>https://homolog.ilclogportal.com.br/</code>.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Roteiro Manual</span>
            <span class="tag-badge">Homologação</span>
            <span class="tag-badge">UAT</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-dev-bg); color: var(--color-dev);">⚙️</div>
          <h3>Nível 2: Integração, APIs REST & EDIs</h3>
          <p><strong>Foco:</strong> Testes de integração de endpoints REST, contratos de mensageria assíncrona, barramentos EDI (NOTFIS, CONEMB, OCOREN) e persistência com transações ACID no PostgreSQL.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">APIs REST</span>
            <span class="tag-badge">Layouts EDI</span>
            <span class="tag-badge">PostgreSQL</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-user-bg); color: var(--color-user);">🧱</div>
          <h3>Nível 1: Testes Unitários & Beans</h3>
          <p><strong>Foco:</strong> Validação de regras puras de cálculo (frete, alçadas, lead time), validações de campos e métodos isolados nos Managed Beans JSF e Services Spring Boot.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">JUnit</span>
            <span class="tag-badge">Mockito</span>
            <span class="tag-badge">Services</span>
          </div>
        </div>
      </div>

      <!-- BLOCO 5: O PADRÃO DEFINITIVO DA TAB 2 (QA) -->
      <h2>📐 O Padrão Definitivo da Tab 2 (Qualidade QA) nos 19 Módulos</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 20px;">
        Todo módulo presente no ILC Integrator segue rigorosamente a <strong>Metodologia de 7 Seções de QA</strong>, garantindo consistência e completude para os analistas:
      </p>

      <div class="steps-container" style="margin-bottom: 32px;">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Metadados & Criticidade do Módulo</div>
            <p>Define a criticidade operacional (Alta/Média/Baixa), alçadas financeiras de aprovação, SLAs de testes e link direto para a Instrução de Trabalho (IT) normativa.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Roteiro Passo a Passo de Testes Manuais</div>
            <p>Guia detalhado numerado de execução com pré-condições, passos operacionais em tela, dados de teste a preencher e evidências formais esperadas (prints, logs ou toasts).</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">Matriz de Validação & Mensagens Reais de Erro</div>
            <p>Tabela exaustiva mapeando: Campo de Tela ➔ Validação Aplicada ➔ Regra de Negócio ➔ <strong>Mensagem Real de Erro exibida pelo Sistema</strong> ➔ Ação Corretiva.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-title">Critérios de Aceite & Definition of Done (DoD)</div>
            <p>Checklist mandatório de qualidade contendo requisitos funcionais, não-funcionais, segurança de alçada e auditoria que devem ser 100% cumpridos antes da aprovação.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-body">
            <div class="step-title">Especificação BDD em Gherkin (Dado / Quando / Então)</div>
            <p>Cenários de comportamento (Caminho Feliz, Exceções de Negócio e Validações de Alçada) em linguagem natural estruturada, prontos para automação com Cucumber/Playwright.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">6</div>
          <div class="step-body">
            <div class="step-title">Matriz de Rastreabilidade & Gestão de Riscos</div>
            <p>Mapeamento bidirecional conectando: Requisito de Negócio ➔ IT Normativa ➔ User Story no Azure DevOps ➔ Casos de Teste (Test Cases) ➔ Nível de Risco Operacional.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">7</div>
          <div class="step-body">
            <div class="step-title">Checklist de Regressão & Homologação</div>
            <p>Conjunto enxuto de verificações obrigatórias de regressão (Smoke Test) para validar que novas alterações no módulo não quebraram fluxos adjacentes da esteira logística.</p>
          </div>
        </div>
      </div>

      <!-- BLOCO 6: GESTÃO DE DEFEITOS NO AZURE DEVOPS -->
      <h2>🐛 Gestão de Defeitos & Classificação de Severidade no Azure DevOps</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">
        Critérios formais para registro de bugs no Azure DevOps Boards durante as baterias de homologação:
      </p>

      <div class="table-container" style="margin-bottom: 28px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 15%;">Severidade</th>
              <th style="width: 30%;">Critério de Impacto</th>
              <th style="width: 35%;">Exemplo no ILC Integrator</th>
              <th style="width: 20%;">Ação / SLA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="tag-badge" style="background: rgba(224, 36, 36, 0.15); color: #e02424; font-weight:700;">🔴 1 - Bloqueante</span></td>
              <td>Impede totalmente a execução do fluxo operacional, indisponibilidade de tela ou corrupção de dados. Sem contorno (workaround).</td>
              <td>Erro 500 ao salvar Frete Expresso; impossibilidade de aprovação de alçada de viagem.</td>
              <td><strong>Correção Imediata (Hotfix)</strong> • Bloqueia Deploy</td>
            </tr>
            <tr>
              <td><span class="tag-badge" style="background: rgba(245, 158, 11, 0.15); color: #d97706; font-weight:700;">🟠 2 - Alta</span></td>
              <td>Inconsistência funcional grave em cálculos, alçadas ou dados fiscais, mas existe contorno operacional temporário.</td>
              <td>Cálculo incorreto de alíquota de pedágio em rota específica; falha no envio de e-mail de alerta.</td>
              <td>Correção na Sprint atual • Impede Release Major</td>
            </tr>
            <tr>
              <td><span class="tag-badge" style="background: rgba(0, 82, 204, 0.15); color: var(--ilc-primary); font-weight:700;">🟡 3 - Média</span></td>
              <td>Falha de validação secundária, comportamento divergente de layout que não impede a conclusão da tarefa.</td>
              <td>Filtro de busca por data não mantendo o valor selecionado após paginação da tabela.</td>
              <td>Correção na próxima iteração / backlog planejado</td>
            </tr>
            <tr>
              <td><span class="tag-badge" style="background: var(--bg-surface-subtle); color: var(--text-muted); font-weight:700;">🔵 4 - Baixa</span></td>
              <td>Ajuste cosmético, desalinhamento visual leve, erro ortográfico em rótulos ou melhoria de usabilidade.</td>
              <td>Label de campo desalinhada 2px; texto de tooltip com erro gramatical menor.</td>
              <td>Backlog de melhorias contínuas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- BLOCO 7: DEFINITION OF READY (DoR) & DEFINITION OF DONE (DoD) -->
      <h2>✅ Definition of Ready (DoR) & Definition of Done (DoD)</h2>
      <div class="card-grid">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-user-bg); color: var(--color-user);">📋</div>
          <h3>Definition of Ready (DoR) — Entrada</h3>
          <p>Critérios obrigatórios para que uma User Story seja considerada pronta para desenvolvimento:</p>
          <ul style="font-size: 0.86rem; color: var(--text-secondary); margin-left: 18px; margin-top: 8px; line-height: 1.6;">
            <li>Vinculação expressa à IT normativa correspondente.</li>
            <li>Critérios de aceite definidos em formato BDD (*Given/When/Then*).</li>
            <li>Mensagens de erro e validações de tela mapeadas.</li>
            <li>Massa de dados de teste e permissões RBAC identificadas.</li>
          </ul>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-qa-bg); color: var(--color-qa);">🏆</div>
          <h3>Definition of Done (DoD) — Saída / Deploy</h3>
          <p>Critérios mandatórios para autorizar a liberação de release para Produção:</p>
          <ul style="font-size: 0.86rem; color: var(--text-secondary); margin-left: 18px; margin-top: 8px; line-height: 1.6;">
            <li>100% dos Test Cases do Test Plan executados com sucesso em Staging.</li>
            <li>Zero bugs de Severidade 1 (Bloqueante) ou 2 (Alta) em aberto.</li>
            <li>Bateria de Regressão (Smoke Test) aprovada sem quebra colateral.</li>
            <li>Aprovação formal e evidências anexadas no Azure DevOps.</li>
          </ul>
        </div>
      </div>
    `
  },

  hub_tecnologia: {
    id: "hub_tecnologia",
    title: "Hub de Tecnologia",
    subtitle: "Diretrizes de Engenharia, Jornada de Modernização, Barramento EDI, Padrão de APIs e Infraestrutura",
    category: "Governança",
    icon: "💻",
    summary: "Guia arquitetural completo do ILC Integrator: jornada de modernização JSF para Angular e Spring Boot, barramento EDI (PROCEDA NOTFIS/CONEMB/OCOREN), padrões de APIs RESTful, observabilidade e padrão de 7 seções para desenvolvedores.",
    content: `
      <!-- BLOCO 1: MANIFESTO & PRINCÍPIOS DE ENGENHARIA -->
      <div class="ilc-hero-banner" style="border-left: 4px solid var(--color-dev);">
        <div class="ilc-hero-tag" style="background: var(--color-dev-bg); color: var(--color-dev); border-color: var(--color-dev-border);">
          💻 Engenharia de Software • Padrão ILC Integrator
        </div>
        <h2 class="ilc-hero-title">Arquitetura Resiliente, Barramentos de Alta Performance e Modernização Contínua</h2>
        <p class="ilc-hero-desc">
          O <strong>ILC Integrator</strong> é uma plataforma de missão crítica que opera em regime 24/7 orquestrando a cadeia logística de grandes indústrias e operadores. Nossa engenharia é orientada a princípios sólidos de <strong>alta disponibilidade</strong>, <strong>transações com consistência ACID</strong>, <strong>desacoplamento progressivo</strong>, <strong>rastreabilidade total de dados</strong> e <strong>segurança cibernética em conformidade com a LGPD</strong>.
        </p>
      </div>

      <!-- BLOCO 2: STACK TECNOLÓGICA & MODERNIZAÇÃO -->
      <h2>🏗️ Stack Tecnológica & Jornada de Modernização</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
        O Integrator atravessa uma transição tecnológica estratégica: mantendo a robustez e estabilidade do núcleo transacional legado em Java JSF enquanto evolui novas interfaces e microsserviços para tecnologias modernas e desacopladas.
      </p>

      <div class="table-container" style="margin-bottom: 28px;">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width: 20%;">Camada</th>
              <th style="width: 40%;">🏛️ Arquitetura Legada (Estável / Produção)</th>
              <th style="width: 40%;">🚀 Arquitetura Moderna (Migração / Evolução)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Frontend & UI</strong></td>
              <td>
                • JavaServer Faces (JSF 2.2+) & PrimeFaces<br>
                • Templates XHTML com OmniFaces<br>
                • Managed Beans (<code>@ViewScoped</code> / <code>@SessionScoped</code>)<br>
                • Renderização Server-Side (SSR)
              </td>
              <td>
                • Angular 17+ & TypeScript<br>
                • Componentes Standalone & Signals Reativos<br>
                • PrimeNG & Design System Institucional ILC<br>
                • Single Page Application (SPA) desacoplada
              </td>
            </tr>
            <tr>
              <td><strong>Backend & Core</strong></td>
              <td>
                • Java Enterprise (JEE 8) / Spring Core<br>
                • Transações Gerenciadas por Container (CMT)<br>
                • DAOs e Repositórios Hibernate / JPA<br>
                • Serviços SOAP / XML legados
              </td>
              <td>
                • Java 17 LTS & Spring Boot 3.x<br>
                • Microsserviços RESTful com OpenAPI / Swagger<br>
                • Spring Security com OAuth2 & JWT Token<br>
                • Migrações automáticas de banco via Flyway
              </td>
            </tr>
            <tr>
              <td><strong>Persistência & Dados</strong></td>
              <td>
                • PostgreSQL / Oracle Database<br>
                • Modelagem relacional em 3ª Forma Normal<br>
                • Stored Procedures & Triggers para integridade<br>
                • Conexões via DataSources no Tomcat / WildFly
              </td>
              <td>
                • PostgreSQL 15+ com particionamento de tabelas<br>
                • Spring Data JPA & QueryDSL para consultas dinâmicas<br>
                • Connection Pooling de alta performance com HikariCP<br>
                • Caching distribuído com Redis para consultas frequentes
              </td>
            </tr>
            <tr>
              <td><strong>Integração & Mensageria</strong></td>
              <td>
                • Processadores batch de arquivos EDI texto<br>
                • Transmissão via FTP / SFTP seguro agendado<br>
                • Webservices SOAP ponto-a-ponto
              </td>
              <td>
                • Barramento assíncrono com RabbitMQ / Apache Kafka<br>
                • Webhooks HTTP com assinatura HMAC para clientes<br>
                • APIs REST síncronas de baixa latência
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- BLOCO 3: BARRAMENTO EDI & MENSAGERIA LOGÍSTICA -->
      <h2>📬 Barramento EDI & Protocolos de Comunicação Logística</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">
        O Integrator processa diariamente milhares de arquivos de intercâmbio eletrônico de dados nos padrões <strong>PROCEDA</strong> e <strong>EDIFACT</strong>:
      </p>

      <div class="card-grid" style="margin-bottom: 28px;">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(0, 82, 204, 0.1); color: var(--ilc-primary);">📑</div>
          <h3>NOTFIS (Dados de Notas Fiscais)</h3>
          <p>Transmissão eletrônica de dados de NF-e, volumes, pesos, valores de mercadoria, remetente e destinatário para geração automática de pedidos e promessas de entrega.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Layout PROCEDA 3.1</span>
            <span class="tag-badge">Inbound / Outbound</span>
            <span class="tag-badge">NF-e XML</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(0, 168, 107, 0.1); color: var(--ilc-green);">🚚</div>
          <h3>CONEMB (Conhecimento de Embarque)</h3>
          <p>Registro formal de despacho da carga pelo transportador, contendo dados do CT-e, dados do motorista, placa do veículo, valor do frete e previsão de entrega.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Layout PROCEDA 3.0</span>
            <span class="tag-badge">CT-e / DACTE</span>
            <span class="tag-badge">Despacho</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(245, 158, 11, 0.1); color: var(--ilc-amber);">📍</div>
          <h3>OCOREN (Ocorrências de Transporte)</h3>
          <p>Atualização de status em tempo real da entrega: mercadoria entregue, insucesso de entrega, recusa, avaria, sinistro, retenção fiscal ou reentrega.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Tabela de Ocorrências</span>
            <span class="tag-badge">Tracking em Tempo Real</span>
            <span class="tag-badge">SLA</span>
          </div>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: rgba(139, 92, 246, 0.1); color: #8b5cf6;">💰</div>
          <h3>DOCCOB (Documento de Cobrança)</h3>
          <p>Intercâmbio de dados de faturas, duplicatas e conciliação de fretes entre embarcadores e transportadores para auditoria automática de faturamento.</p>
          <div class="card-footer-tags">
            <span class="tag-badge">Conciliação Financeira</span>
            <span class="tag-badge">Faturas</span>
            <span class="tag-badge">Auditoria</span>
          </div>
        </div>
      </div>

      <!-- BLOCO 4: DIAGRAMA DE ARQUITETURA GERAL -->
      <h2>🗺️ Diagrama de Arquitetura Geral do Sistema</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">
        Visão dos blocos arquiteturais do ILC Integrator, conectando canais de entrada, serviços de negócio, mensageria e integrações externas:
      </p>

      <div class="mermaid-wrapper">
        <div class="mermaid">
graph TD
    subgraph CLIENTS["📱 Camada de Apresentação & Clientes"]
        WEB_ANG["💻 Frontend Angular (SPA Moderna)"]
        WEB_JSF["🏛️ Portal JSF / Primefaces (Legado)"]
        APP_MOB["📱 App Embarcado Mobile (Motoristas/Pátio)"]
    end

    subgraph GATEWAY["🛡️ Borda, Segurança & Roteamento"]
        APIGW["🚪 API Gateway & Load Balancer (Nginx/Kong)"]
        AUTH_SRV["🔑 Servidor de Autenticação (OAuth2 / JWT / SSO)"]
    end

    subgraph SERVICES["⚙️ Microsserviços & Core de Negócio"]
        SRV_CAD["👤 Módulo Cadastros (Usuários, Perfis, Rotas)"]
        SRV_OPE["⚡ Módulo Operacional (Frete Expresso, Pedidos)"]
        SRV_TRK["🛰️ Torre de Controle & Tracking em Tempo Real"]
        SRV_EDI["📬 Motor de Parsing & Processamento de EDIs"]
        SRV_FIN["💰 Módulo Financeiro & Auditoria de Fretes"]
    end

    subgraph QUEUES["📨 Mensageria & Filas Assíncronas"]
        BROKER["🐇 Barramento RabbitMQ / Kafka Events"]
    end

    subgraph DATA["💾 Camada de Dados & Persistência"]
        DB_MAIN[("🐘 PostgreSQL / Oracle Cluster (Master-Replica)")]
        DB_CACHE[("⚡ Redis Cache (Sessões & Tokens)")]
    end

    subgraph EXTERNAL["🌐 Integrações & Parceiros Externos"]
        GR_RISCO["🛰️ Gerenciadoras de Risco (Buonny, AngelLira, GE)"]
        ERP_CLIENTES["🏢 ERPs Clientes (SAP, TOTVS, Oracle)"]
        TRANS_EDI["🚚 Transportadoras & Frotistas (EDI / FTP)"]
    end

    WEB_ANG --> APIGW
    WEB_JSF --> APIGW
    APP_MOB --> APIGW

    APIGW --> AUTH_SRV
    APIGW --> SRV_CAD
    APIGW --> SRV_OPE
    APIGW --> SRV_TRK
    APIGW --> SRV_EDI
    APIGW --> SRV_FIN

    SRV_EDI --> BROKER
    SRV_TRK --> BROKER
    BROKER --> SRV_OPE
    BROKER --> SRV_FIN

    SRV_CAD --> DB_MAIN
    SRV_OPE --> DB_MAIN
    SRV_TRK --> DB_MAIN
    SRV_EDI --> DB_MAIN
    SRV_FIN --> DB_MAIN

    AUTH_SRV --> DB_CACHE
    APIGW --> DB_CACHE

    SRV_TRK <--> GR_RISCO
    SRV_EDI <--> TRANS_EDI
    SRV_OPE <--> ERP_CLIENTES

    classDef client fill:#f0f7ff,stroke:#0052cc,stroke-width:2px,color:#0052cc;
    classDef gw fill:#fff8e6,stroke:#f59e0b,stroke-width:2px,color:#d97706;
    classDef srv fill:#e6fcf5,stroke:#00a86b,stroke-width:2px,color:#00875a;
    classDef broker fill:#f5f3ff,stroke:#8b5cf6,stroke-width:2px,color:#8b5cf6;
    classDef db fill:#fdf2f8,stroke:#ec4899,stroke-width:2px,color:#be185d;
    classDef ext fill:#f3f4f6,stroke:#4b5563,stroke-width:2px,color:#374151;

    class WEB_ANG,WEB_JSF,APP_MOB client;
    class APIGW,AUTH_SRV gw;
    class SRV_CAD,SRV_OPE,SRV_TRK,SRV_EDI,SRV_FIN srv;
    class BROKER broker;
    class DB_MAIN,DB_CACHE db;
    class GR_RISCO,ERP_CLIENTES,TRANS_EDI ext;
        </div>
      </div>

      <!-- BLOCO 5: PADRÃO DE DESIGN DE APIS REST -->
      <h2>🌐 Padrão & Convenções de Design de APIs RESTful</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">
        Todas as APIs desenvolvidas no ILC Integrator seguem rigorosamente a especificação <strong>OpenAPI 3.0</strong> e as melhores práticas REST:
      </p>

      <div class="card-grid" style="margin-bottom: 28px;">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-dev-bg); color: var(--color-dev);">🔗</div>
          <h3>1. URIs Semânticas & Versionamento</h3>
          <p>Recursos no plural com versionamento explícito na URL (ex: <code>/api/v1/usuarios</code>, <code>/api/v1/fretes-expressos/{id}/cotacoes</code>).</p>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-qa-bg); color: var(--color-qa);">🚦</div>
          <h3>2. Códigos de Status HTTP Padronizados</h3>
          <p>Uso semântico dos verbos HTTP (<code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>) e códigos (<code>200</code>, <code>201</code>, <code>400</code>, <code>401</code>, <code>403</code>, <code>422</code>, <code>500</code>).</p>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-user-bg); color: var(--color-user);">🛡️</div>
          <h3>3. Payload de Erro RFC 7807 (ProblemDetails)</h3>
          <p>Estrutura uniforme de retorno para exceções contendo <code>timestamp</code>, <code>status</code>, <code>error</code>, <code>message</code>, <code>path</code> e <code>correlationId</code> para rastreabilidade de logs.</p>
        </div>
      </div>

      <!-- BLOCO 6: O PADRÃO DEFINITIVO DA TAB 3 (DEV) -->
      <h2>📐 O Padrão Definitivo da Tab 3 (Desenvolvedores) nos 19 Módulos</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 20px;">
        Cada módulo do ILC Integrator possui uma documentação técnica profunda estruturada nas seguintes <strong>7 seções de engenharia</strong>:
      </p>

      <div class="steps-container" style="margin-bottom: 32px;">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Metadados de Engenharia do Módulo</div>
            <p>Mapeamento técnico formal: Camada da Aplicação, Nome do Managed Bean JSF, Componente Angular correspondente, Entidades JPA e Tabelas SQL associadas.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Diagrama de Sequência Interativo (Mermaid com Pan & Zoom)</div>
            <p>Fluxo de execução detalhado entre Usuário ➔ Frontend (XHTML/Angular) ➔ Managed Bean / Controller REST ➔ Service Layer ➔ Banco PostgreSQL ➔ Barramentos Externos.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">Catálogo de APIs REST & Contratos de Integração</div>
            <p>Tabela com endpoints, verbos HTTP, parâmetros de entrada, contratos JSON de Request/Response e códigos de resposta esperados com headers de autenticação.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-title">Especificação de Layouts EDI & Mensageria</div>
            <p>Definição de formato de registros de colunas fixas (NOTFIS, CONEMB, OCOREN), eventos em fila assíncrona e webhooks de notificação emitidos pelo módulo.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-body">
            <div class="step-title">Schema de Banco de Dados & Script DDL SQL</div>
            <p>Definição formal das tabelas do módulo com tipos de colunas, chaves primárias (PK), chaves estrangeiras (FK), índices de busca e constraints de integridade referencial.</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">6</div>
          <div class="step-body">
            <div class="step-title">Regras de Negócio & Validações de Backend</div>
            <p>Especificação algorítmica de validações executadas na camada de serviço (alçadas de aprovação, bloqueios de transportadora restrita, cálculos de prazos e consistências de datas).</p>
          </div>
        </div>

        <div class="step-item">
          <div class="step-number">7</div>
          <div class="step-body">
            <div class="step-title">Guia de Troubleshooting, Logs & Auditoria</div>
            <p>Instruções para diagnóstico de falhas, consultas SQL de auditoria em tabelas de log (<code>TB_AUDITORIA</code>, <code>TB_LOG_TRANSACAO</code>) e análise de stacktraces.</p>
          </div>
        </div>
      </div>

      <!-- BLOCO 7: SEGURANÇA & BOAS PRÁTICAS DE ENGENHARIA -->
      <h2>🔒 Segurança da Informação & Diretrizes de Código</h2>
      <div class="card-grid">
        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-qa-bg); color: var(--color-qa);">🛡️</div>
          <h3>Segurança & OWASP Compliance</h3>
          <ul style="font-size: 0.86rem; color: var(--text-secondary); margin-left: 18px; line-height: 1.6;">
            <li>Proteção estrita contra SQL Injection via PreparedStatements e JPQL parametrizado.</li>
            <li>Controle de acesso granular por RBAC (Role-Based Access Control) verificado em cada requisição.</li>
            <li>Hash de senhas com algoritmo BCrypt com fator de custo 12.</li>
            <li>Sanitização de inputs contra Cross-Site Scripting (XSS) e validação de tokens CSRF.</li>
          </ul>
        </div>

        <div class="doc-card" style="cursor: default;">
          <div class="card-icon-wrapper" style="background-color: var(--color-dev-bg); color: var(--color-dev);">📊</div>
          <h3>Observabilidade & Rastreabilidade Ponta a Ponta</h3>
          <ul style="font-size: 0.86rem; color: var(--text-secondary); margin-left: 18px; line-height: 1.6;">
            <li>Injeção de <code>X-Correlation-ID</code> em todos os logs e requisições HTTP para rastrear transações ponta a ponta.</li>
            <li>Métricas de tempo de resposta e latência de banco expostas via Prometheus.</li>
            <li>Logs estruturados em formato JSON para indexação automática no Elasticsearch / Kibana.</li>
            <li>Alertas automáticos de degradação de SLA de comunicação EDI e falhas de integração satelital.</li>
          </ul>
        </div>
      </div>
    `
  }
};


