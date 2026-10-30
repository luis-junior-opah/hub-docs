/* ==========================================================================
   ILC INTEGRATOR - APLICAÇÃO DO PORTAL DE DOCUMENTAÇÃO
   Roteamento, Perspectivas, Mermaid e Temas (docs-app.js)
   ========================================================================== */

class DocsApp {
  constructor() {
    this.currentArticleId = 'home';
    this.currentPerspective = 'user'; // 'user' | 'qa' | 'dev'
    this.searchEngine = new SearchEngine(DOCS_DATABASE);
    this.initTheme();
    this.initEventListeners();
    this.initRouter();
    this.initMermaid();
  }

  initTheme() {
    let savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('ilc_docs_theme') || 'light';
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('ilc_docs_theme', next);
    } catch (e) {}
    this.updateThemeIcon(next);
    // Re-render mermaid com cores ajustadas se necessário
    this.renderCurrentArticle();
  }

  updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  initMermaid() {
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
        securityLevel: 'loose',
        flowchart: { curve: 'basis' }
      });
    }
  }

  initRouter() {
    window.addEventListener('hashchange', () => this.handleHashChange());
    this.handleHashChange();
  }

  handleHashChange() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) {
      this.navigateTo('home');
      return;
    }

    const parts = hash.split('/');
    const articleId = parts[0];
    const perspective = parts[1];

    if (perspective && ['user', 'qa', 'dev'].includes(perspective)) {
      this.currentPerspective = perspective;
    }

    this.navigateTo(articleId, false);
  }

  navigateTo(articleId, updateHash = true) {
    // Tabela de Aliases de Rotas
    const aliases = {
      'promessa_entrega': 'promessa_entrega',
      'respostas_promessa': 'promessa_entrega',
      'respostas_promessa_entrega': 'promessa_entrega',
      'monitor_pe': 'promessa_entrega',
      'pedidos_demandas': 'pedidos_demandas',
      'lista_pedidos': 'pedidos_demandas',
      'gestao_pedidos': 'pedidos_demandas',
      'pedidos': 'pedidos_demandas',
      'tracking_cockpit': 'tracking_cockpit',
      'cockpit': 'tracking_cockpit',
      'tracking_pecas': 'tracking_pecas',
      'tracking': 'tracking_pecas',
      'relatorios_bi': 'relatorios_bi',
      'relatorios': 'relatorios_bi',
      'lista_relatorios': 'relatorios_bi',
      'cad_empresas_grupos': 'cad_empresas',
      'cad_empresas': 'cad_empresas',
      'cad_grupos_empresas': 'cad_grupos_empresas',
      'consulta_edi_volumetria': 'consulta_edi',
      'patio_gestao_embarcada': 'gestao_embarcada',
      'solic_ordem_compra': 'solicitacao_ordem_compra',
      'consulta_de_ordem': 'consulta_ordem_compra',
      'gestao_embalagem': 'gestao_embalagem',
      'congel_de_notas': 'congelamento_nf',
      'gestao_pedagio': 'gestao_pedagios',
      'gestao_md': 'faturamento_frete',
      'smart_x': 'tracking_cockpit',
      'smart_x_v2': 'tracking_cockpit',
      'helpdesk': 'helpdesk_suporte',
      'helpdesk_suporte': 'helpdesk_suporte'
    };

    const resolvedId = DOCS_DATABASE[articleId] ? articleId : (aliases[articleId] && DOCS_DATABASE[aliases[articleId]] ? aliases[articleId] : 'home');

    this.currentArticleId = resolvedId;

    if (updateHash) {
      window.location.hash = `#${articleId}/${this.currentPerspective}`;
    }

    this.updateSidebarActiveState(articleId);
    this.renderCurrentArticle();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Fechar sidebar no mobile se estiver aberta
    const sidebar = document.getElementById('docs-sidebar');
    if (sidebar) sidebar.classList.remove('open');
  }

  setPerspective(perspective) {
    if (['user', 'qa', 'dev'].includes(perspective)) {
      this.currentPerspective = perspective;
      window.location.hash = `#${this.currentArticleId}/${perspective}`;
      this.renderCurrentArticle();
    }
  }

  updateSidebarActiveState(articleId) {
    let activeGroup = null;

    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
      const link = item.querySelector('a');
      if (link && (link.getAttribute('data-target') === articleId || link.getAttribute('href') === `#${articleId}`)) {
        item.classList.add('active');
        activeGroup = item.closest('.sidebar-group');
      } else {
        item.classList.remove('active');
      }
    });

    // Se encontramos o grupo do item ativo, expandir automaticamente o grupo
    if (activeGroup) {
      activeGroup.classList.remove('collapsed');
      this.updateToggleAllButtonState();
    }
  }

  toggleSidebarGroup(groupId) {
    const group = document.getElementById(groupId);
    if (group) {
      group.classList.toggle('collapsed');
      this.updateToggleAllButtonState();
    }
  }

  expandSidebarGroup(groupId) {
    const group = document.getElementById(groupId);
    if (group) {
      group.classList.remove('collapsed');
      this.updateToggleAllButtonState();
    }
  }

  collapseSidebarGroup(groupId) {
    const group = document.getElementById(groupId);
    if (group) {
      group.classList.add('collapsed');
      this.updateToggleAllButtonState();
    }
  }

  toggleAllSidebarGroups() {
    const groups = document.querySelectorAll('.sidebar-group');
    const hasOpenGroups = Array.from(groups).some(g => !g.classList.contains('collapsed'));

    groups.forEach(group => {
      if (hasOpenGroups) {
        group.classList.add('collapsed');
      } else {
        group.classList.remove('collapsed');
      }
    });

    this.updateToggleAllButtonState();
  }

  updateToggleAllButtonState() {
    const btnText = document.getElementById('sidebar-toggle-all-text');
    if (!btnText) return;

    const groups = document.querySelectorAll('.sidebar-group');
    const hasOpenGroups = Array.from(groups).some(g => !g.classList.contains('collapsed'));

    btnText.innerText = hasOpenGroups ? 'Recolher Todos' : 'Expandir Todos';
  }

  renderCurrentArticle() {
    const article = DOCS_DATABASE[this.currentArticleId];
    if (!article) return;

    const contentContainer = document.getElementById('article-render-area');
    if (!contentContainer) return;

    const isModule = article.user_content !== undefined || article.qa_content !== undefined || article.dev_content !== undefined;

    let perspectiveBarHtml = '';
    if (isModule) {
      perspectiveBarHtml = `
        <div class="perspective-selector-bar">
          <button class="perspective-btn tab-user ${this.currentPerspective === 'user' ? 'active' : ''}" onclick="window.setPerspective('user')">
            👥 1. Guia do Usuário
          </button>
          <button class="perspective-btn tab-qa ${this.currentPerspective === 'qa' ? 'active' : ''}" onclick="window.setPerspective('qa')">
            🧪 2. Qualidade (QA)
          </button>
          <button class="perspective-btn tab-dev ${this.currentPerspective === 'dev' ? 'active' : ''}" onclick="window.setPerspective('dev')">
            💻 3. Desenvolvedores
          </button>
        </div>
      `;
    }

    let activePerspectiveContent = '';
    if (isModule) {
      if (this.currentPerspective === 'user') activePerspectiveContent = article.user_content;
      else if (this.currentPerspective === 'qa') activePerspectiveContent = article.qa_content;
      else if (this.currentPerspective === 'dev') activePerspectiveContent = article.dev_content;

      // Fallback rico se a perspectiva estiver sendo detalhada na onda correspondente
      if (!activePerspectiveContent || activePerspectiveContent.trim() === '') {
        const perspectiveTitles = {
          user: '👥 Guia do Usuário & Manual Operacional',
          qa: '🧪 Roteiro de Testes & Critérios de Qualidade (QA)',
          dev: '💻 Hub de Engenharia & Especificação Técnica (Dev)'
        };
        activePerspectiveContent = `
          <div class="callout callout-info" style="margin-bottom: 20px;">
            <div class="callout-icon">📌</div>
            <div class="callout-content">
              <div class="callout-title">${perspectiveTitles[this.currentPerspective] || 'Visão do Módulo'}</div>
              <p>${article.summary || 'Módulo integrante da esteira operacional do ILC Integrator.'}</p>
            </div>
          </div>
          <div class="quick-info-box">
            <div class="quick-info-title">
              <span>📋</span>
              <span>Informações Operacionais do Módulo</span>
            </div>
            <div class="quick-info-grid">
              <div class="quick-info-item">
                <div class="quick-info-icon">🏷️</div>
                <div>
                  <div class="quick-info-label">Identificador</div>
                  <div class="quick-info-value"><code>${article.id}</code></div>
                </div>
              </div>
              <div class="quick-info-item">
                <div class="quick-info-icon">📂</div>
                <div>
                  <div class="quick-info-label">Categoria / Onda</div>
                  <div class="quick-info-value">${article.category || 'Operacional'}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    } else {
      activePerspectiveContent = article.content || '';
    }

    let relacaoBoxHtml = '';
    if (article.relacao) {
      relacaoBoxHtml = `
        <div class="callout callout-info" style="margin-top: 14px; margin-bottom: 24px;">
          <div class="callout-icon">🔗</div>
          <div class="callout-content">
            <div class="callout-title">Interconexão Sistêmica</div>
            ${article.relacao}
          </div>
        </div>
      `;
    }

    contentContainer.innerHTML = `
      <div class="article-header" style="margin-bottom: 24px;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="tag-badge" style="background-color: var(--ilc-primary-light); color: var(--ilc-primary); font-weight: 700;">${article.category}</span>
            <span style="font-size: 1.4rem;">${article.icon}</span>
          </div>
          <div class="article-header-actions">
            <button type="button" class="btn-print-doc" onclick="window.print()" title="Imprimir este documento ou Salvar como PDF">
              <span>🖨️</span>
              <span>Imprimir / Salvar PDF</span>
            </button>
          </div>
        </div>
        <h1 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px; letter-spacing: -0.5px;">${article.title}</h1>
        <p style="font-size: 1.05rem; color: var(--text-secondary);">${article.subtitle || ''}</p>
        ${relacaoBoxHtml}
      </div>

      ${perspectiveBarHtml}

      <div class="article-body">
        ${activePerspectiveContent}
      </div>
    `;

    // Processar e renderizar diagramas Mermaid com Toolbar de Zoom e Tela Cheia
    if (window.mermaid) {
      try {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: this.theme === 'dark' ? 'dark' : 'default',
          securityLevel: 'loose',
          fontFamily: 'Inter, system-ui, sans-serif'
        });

        window.mermaid.run({
          querySelector: '.mermaid'
        }).then(() => {
          this.attachMermaidZoomControls();
        });
      } catch (err) {
        console.warn('Erro ao renderizar Mermaid:', err);
      }
    }
  }

  attachMermaidZoomControls() {
    const wrappers = document.querySelectorAll('.mermaid-wrapper');
    wrappers.forEach((wrapper, index) => {
      // Se já tiver toolbar, não duplicar
      if (wrapper.querySelector('.mermaid-toolbar')) return;

      const mermaidEl = wrapper.querySelector('.mermaid');
      if (!mermaidEl) return;

      // Criar ID único para controle
      const diagramId = `diagram-${index}`;
      mermaidEl.setAttribute('data-diagram-id', diagramId);

      // Inicializar estado de pan/zoom
      window.diagramStates[diagramId] = { scale: 1.0, panX: 0, panY: 0 };

      // Envolver o .mermaid em um .mermaid-viewport se ainda não estiver
      let viewport = wrapper.querySelector('.mermaid-viewport');
      if (!viewport) {
        viewport = document.createElement('div');
        viewport.className = 'mermaid-viewport';
        wrapper.insertBefore(viewport, mermaidEl);
        viewport.appendChild(mermaidEl);
      }

      // Habilitar Pan e Wheel no viewport
      this.setupInteractivePanZoom(viewport, mermaidEl, diagramId);

      // Criar Toolbar de Zoom
      const toolbar = document.createElement('div');
      toolbar.className = 'mermaid-toolbar';
      toolbar.innerHTML = `
        <div class="mermaid-toolbar-title">
          <span>📊</span>
          <span>Diagrama Interativo</span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal; margin-left:6px;">(Arraste para mover / Use a rodinha para Zoom)</span>
        </div>
        <div class="diagram-zoom-controls">
          <button class="zoom-btn" onclick="window.zoomDiagram('${diagramId}', 1.25)" title="Aumentar Zoom (Zoom In)">🔍 +</button>
          <span class="zoom-level-badge" id="zoom-badge-${diagramId}">100%</span>
          <button class="zoom-btn" onclick="window.zoomDiagram('${diagramId}', 0.8)" title="Diminuir Zoom (Zoom Out)">🔍 -</button>
          <button class="zoom-btn" onclick="window.resetDiagram('${diagramId}')" title="Restaurar Tamanho Original">↺ Reset</button>
          <button class="zoom-btn" style="background:var(--ilc-primary); color:#fff; border-color:var(--ilc-primary);" onclick="window.openDiagramModal('${diagramId}')" title="Abrir em Tela Cheia">⛶ Tela Cheia</button>
        </div>
      `;

      wrapper.insertBefore(toolbar, wrapper.firstChild);
    });
  }

  setupInteractivePanZoom(viewport, target, diagramId) {
    let isDragging = false;
    let startX = 0, startY = 0;

    viewport.addEventListener('mousedown', (e) => {
      // Ignorar cliques em botões
      if (e.target.closest('button')) return;
      isDragging = true;
      const state = window.diagramStates[diagramId] || { scale: 1.0, panX: 0, panY: 0 };
      startX = e.clientX - state.panX;
      startY = e.clientY - state.panY;
      viewport.style.cursor = 'grabbing';
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const state = window.diagramStates[diagramId];
      if (!state) return;
      state.panX = e.clientX - startX;
      state.panY = e.clientY - startY;
      window.applyDiagramTransform(diagramId);
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        viewport.style.cursor = 'grab';
      }
    });

    // Zoom suave com a rodinha do mouse
    viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.15 : 0.87;
      window.zoomDiagram(diagramId, factor);
    }, { passive: false });
  }

  initEventListeners() {
    // Atalho de busca Ctrl + K e Escape
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === 'Escape') {
        this.closeSearchModal();
        window.closeDiagramModal();
      }
    });

    const searchTrigger = document.getElementById('search-trigger-btn');
    if (searchTrigger) {
      searchTrigger.addEventListener('click', () => this.openSearchModal());
    }

    const searchBackdrop = document.getElementById('search-modal-backdrop');
    if (searchBackdrop) {
      searchBackdrop.addEventListener('click', (e) => {
        if (e.target === searchBackdrop) this.closeSearchModal();
      });
    }

    const diagramBackdrop = document.getElementById('diagram-modal-backdrop');
    if (diagramBackdrop) {
      diagramBackdrop.addEventListener('click', (e) => {
        if (e.target === diagramBackdrop) window.closeDiagramModal();
      });
    }

    const searchInput = document.getElementById('search-main-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
    }

    const mobileToggle = document.getElementById('mobile-menu-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const sidebar = document.getElementById('docs-sidebar');
        if (sidebar) sidebar.classList.toggle('open');
      });
    }
  }

  openSearchModal() {
    const backdrop = document.getElementById('search-modal-backdrop');
    const input = document.getElementById('search-main-input');
    if (backdrop && input) {
      backdrop.classList.add('open');
      input.value = '';
      input.focus();
      this.handleSearchInput('');
    }
  }

  closeSearchModal() {
    const backdrop = document.getElementById('search-modal-backdrop');
    if (backdrop) backdrop.classList.remove('open');
  }

  handleSearchInput(query) {
    const resultsContainer = document.getElementById('search-results-list');
    if (!resultsContainer) return;

    if (!query.trim()) {
      resultsContainer.innerHTML = `
        <li style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          Digite para pesquisar por módulos, regras de negócio, APIs, ITs ou testes BDD...
        </li>
      `;
      return;
    }

    const results = this.searchEngine.search(query);
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <li style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          Nenhum resultado encontrado para "<strong>${query}</strong>"
        </li>
      `;
      return;
    }

    resultsContainer.innerHTML = results.map(r => `
      <li class="search-result-item" onclick="window.docsApp.selectSearchResult('${r.id}', '${r.perspective || 'user'}')">
        <div class="search-result-title">
          <span>${r.icon}</span>
          <span>${r.title}</span>
          <span class="tag-badge" style="margin-left: auto;">${r.category}</span>
        </div>
        <div class="search-result-desc">${r.subtitle}</div>
      </li>
    `).join('');
  }

  selectSearchResult(id, perspective) {
    this.closeSearchModal();
    if (perspective) {
      this.currentPerspective = perspective;
    }
    this.navigateTo(id);
  }
}

// Funções Globais de Pan & Zoom dos Diagramas
window.diagramStates = {};
window.modalState = { scale: 1.25, panX: 0, panY: 0 };

window.applyDiagramTransform = (diagramId) => {
  const el = document.querySelector(`[data-diagram-id="${diagramId}"]`);
  const state = window.diagramStates[diagramId];
  if (!el || !state) return;

  el.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.scale})`;

  const badge = document.getElementById(`zoom-badge-${diagramId}`);
  if (badge) {
    badge.innerText = `${Math.round(state.scale * 100)}%`;
  }
};

window.zoomDiagram = (diagramId, factor) => {
  if (!window.diagramStates[diagramId]) {
    window.diagramStates[diagramId] = { scale: 1.0, panX: 0, panY: 0 };
  }
  const state = window.diagramStates[diagramId];
  state.scale = Math.max(0.3, Math.min(4.0, state.scale * factor));
  window.applyDiagramTransform(diagramId);
};

window.resetDiagram = (diagramId) => {
  window.diagramStates[diagramId] = { scale: 1.0, panX: 0, panY: 0 };
  window.applyDiagramTransform(diagramId);
};

// Modal de Tela Cheia com Pan & Zoom
window.openDiagramModal = (diagramId) => {
  const sourceEl = document.querySelector(`[data-diagram-id="${diagramId}"]`);
  const modal = document.getElementById('diagram-modal-backdrop');
  const modalContent = document.getElementById('diagram-modal-content');
  const modalBody = document.getElementById('diagram-modal-body');

  if (!sourceEl || !modal || !modalContent) return;

  modalContent.innerHTML = sourceEl.innerHTML;
  modal.classList.add('open');

  window.modalState = { scale: 1.25, panX: 0, panY: 0 };
  window.applyModalTransform();

  // Setup interativo de Drag e Wheel no modal
  let isModalDragging = false;
  let startX = 0, startY = 0;

  modalBody.onmousedown = (e) => {
    if (e.target.closest('button')) return;
    isModalDragging = true;
    startX = e.clientX - window.modalState.panX;
    startY = e.clientY - window.modalState.panY;
    modalBody.style.cursor = 'grabbing';
    e.preventDefault();
  };

  window.onmousemove = (e) => {
    if (!isModalDragging) return;
    window.modalState.panX = e.clientX - startX;
    window.modalState.panY = e.clientY - startY;
    window.applyModalTransform();
  };

  window.onmouseup = () => {
    if (isModalDragging) {
      isModalDragging = false;
      modalBody.style.cursor = 'grab';
    }
  };

  modalBody.onwheel = (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 0.87;
    window.zoomModalDiagram(factor);
  };
};

window.closeDiagramModal = () => {
  const modal = document.getElementById('diagram-modal-backdrop');
  if (modal) modal.classList.remove('open');
};

window.zoomModalDiagram = (factor) => {
  window.modalState.scale = Math.max(0.3, Math.min(5.0, window.modalState.scale * factor));
  window.applyModalTransform();
};

window.resetModalDiagram = () => {
  window.modalState = { scale: 1.0, panX: 0, panY: 0 };
  window.applyModalTransform();
};

window.applyModalTransform = () => {
  const modalContent = document.getElementById('diagram-modal-content');
  const badge = document.getElementById('modal-zoom-badge');
  if (modalContent) {
    modalContent.style.transform = `translate(${window.modalState.panX}px, ${window.modalState.panY}px) scale(${window.modalState.scale})`;
  }
  if (badge) {
    badge.innerText = `${Math.round(window.modalState.scale * 100)}%`;
  }
};

// Funções do Visualizador de PDF (Instruções de Trabalho)
window.openPdfModal = (pdfUrl, pdfTitle, downloadName) => {
  const modal = document.getElementById('pdf-modal-backdrop');
  const iframe = document.getElementById('pdf-modal-iframe');
  const titleEl = document.getElementById('pdf-modal-title');
  const downloadBtn = document.getElementById('pdf-modal-download-btn');
  const externalBtn = document.getElementById('pdf-modal-external-btn');

  if (!modal || !iframe) return;

  if (titleEl) titleEl.innerText = pdfTitle || 'Instrução de Trabalho';
  iframe.src = pdfUrl;

  if (downloadBtn) {
    downloadBtn.href = pdfUrl;
    downloadBtn.setAttribute('download', downloadName || 'Instrucao_Trabalho.pdf');
  }

  if (externalBtn) {
    externalBtn.href = pdfUrl;
  }

  modal.classList.add('open');
};

window.closePdfModal = () => {
  const modal = document.getElementById('pdf-modal-backdrop');
  const iframe = document.getElementById('pdf-modal-iframe');
  if (modal) modal.classList.remove('open');
  if (iframe) iframe.src = '';
};

// Inicialização robusta e imediata da aplicação
function initDocsApp() {
  if (window.docsApp) return;
  try {
    window.docsApp = new DocsApp();
    window.setPerspective = (p) => window.docsApp && window.docsApp.setPerspective(p);
    window.navigateTo = (id) => window.docsApp && window.docsApp.navigateTo(id);

    // Fechar modal de PDF no clique fora
    const pdfBackdrop = document.getElementById('pdf-modal-backdrop');
    if (pdfBackdrop) {
      pdfBackdrop.addEventListener('click', (e) => {
        if (e.target === pdfBackdrop) window.closePdfModal();
      });
    }
  } catch (err) {
    console.error('Erro na inicialização do DocsApp:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDocsApp);
} else {
  initDocsApp();
}
