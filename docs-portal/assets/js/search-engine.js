/* ==========================================================================
   ILC INTEGRATOR - MOTOR DE BUSCA INDEXADA
   Search Engine & Command Palette Ctrl+K (search-engine.js)
   ========================================================================== */

class SearchEngine {
  constructor(database) {
    this.database = database;
    this.index = [];
    this.buildIndex();
  }

  stripHtml(html) {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  buildIndex() {
    this.index = [];
    if (!this.database) return;
    for (const [key, item] of Object.entries(this.database)) {
      if (!item) continue;
      // Conteúdo bruto limpo
      const rawContent = this.stripHtml(item.content || "");
      const rawUser = this.stripHtml(item.user_content || "");
      const rawQa = this.stripHtml(item.qa_content || "");
      const rawDev = this.stripHtml(item.dev_content || "");

      // Indexar artigo geral
      this.index.push({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle || "",
        category: item.category || "Geral",
        icon: item.icon || "📄",
        type: "general",
        text: `${item.title} ${item.subtitle} ${item.summary} ${item.category} ${rawContent}`.toLowerCase()
      });

      // Se tiver seções específicas por perspectiva
      if (item.user_content) {
        this.index.push({
          id: item.id,
          perspective: 'user',
          title: `${item.title} (Guia Operacional / Passo a Passo)`,
          subtitle: "Passo a passo com telas legadas e regras de negócio",
          category: item.category,
          icon: "👥",
          text: `${item.title} passo a passo telas operacao manual ${rawUser}`.toLowerCase()
        });
      }

      if (item.qa_content) {
        this.index.push({
          id: item.id,
          perspective: 'qa',
          title: `${item.title} (QA & Cenários BDD)`,
          subtitle: "Validações, critérios de aceite e Gherkin",
          category: item.category,
          icon: "🧪",
          text: `${item.title} qa bdd gherkin testes validacao ${rawQa}`.toLowerCase()
        });
      }

      if (item.dev_content) {
        this.index.push({
          id: item.id,
          perspective: 'dev',
          title: `${item.title} (Tecnologia, APIs & EDI)`,
          subtitle: "Arquitetura, Beans, APIs REST e banco de dados",
          category: item.category,
          icon: "💻",
          text: `${item.title} dev api rest edi xhtml managedbean banco ${rawDev}`.toLowerCase()
        });
      }
    }
  }

  search(query) {
    if (!query || !query.trim()) return [];
    const term = query.toLowerCase().trim();
    const words = term.split(/\s+/);

    return this.index.filter(item => {
      return words.every(word => item.text.includes(word));
    }).slice(0, 10);
  }
}
