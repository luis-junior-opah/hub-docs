import os
import urllib.request
import json
import base64
import urllib.parse

PAT = os.environ.get('AZURE_DEVOPS_PAT', '')
ORG_URL = 'https://dev.azure.com/projetosmirassol1'
PROJECT = 'Migração Angular Integrator V0'
WIKI_ID = '66129b64-375f-434b-b2a7-d2a5ea7df4a3'

def get_headers():
    auth = base64.b64encode(f':{PAT}'.encode()).decode()
    return {
        'Authorization': f'Basic {auth}',
        'Content-Type': 'application/json'
    }

def create_or_update_page(path, content):
    proj_encoded = urllib.parse.quote(PROJECT)
    page_path_encoded = urllib.parse.quote(path)
    url = f"{ORG_URL}/{proj_encoded}/_apis/wiki/wikis/{WIKI_ID}/pages?path={page_path_encoded}&api-version=7.0"
    
    etag = None
    try:
        req_get = urllib.request.Request(url, headers=get_headers())
        resp_get = urllib.request.urlopen(req_get)
        etag = resp_get.headers.get('ETag')
    except Exception:
        pass

    headers = get_headers()
    if etag:
        headers['If-Match'] = etag

    body = json.dumps({'content': content}).encode('utf-8')
    req = urllib.request.Request(url, data=body, headers=headers, method='PUT')
    resp = urllib.request.urlopen(req)
    data = json.loads(resp.read().decode())
    print(f"Pagina Wiki criada/atualizada com sucesso: {data.get('path')}")

# ==============================================================================
# PÁGINA 00 - VISÃO GERAL & ESTRATÉGIA DE QA (VERSÃO COMPLETA COM OVERVIEW, BOARDS, REPOS E PIPELINES)
# ==============================================================================

PAGE_00_RICH_CONTENT = """# 📋 00 - Visão Geral & Estratégia de QA

Bem-vindo à **Wiki Oficial e Central Viva de Garantia de Qualidade (QA)** do projeto **Migração Angular Integrator V0**.

Esta página apresenta o resumo executivo de **tudo o que foi realizado nos 4 módulos do Azure DevOps** (Overview, Boards, Repos e Pipelines) durante o processo de estruturação e automação de testes da migração da aplicação legado (JSF / XHTML) para a nova arquitetura moderna (**Angular 18+ SPA e Microserviços REST API**).

---

## 🏛️ 1. O que foi realizado no Módulo OVERVIEW

O módulo Overview centraliza a documentação de alto nível e a navegação executiva do projeto:

- **Summary & Readme Oficial**: O projeto foi configurado com a descrição oficial e o arquivo `README.md` estruturado no repositório padrão (`ms-integrator-frontend`), fornecendo a visão geral da migração e links diretos.
- **Wiki Oficial de QA (Estrutura de 3 Pilares)**: Criação e instanciação nativa da Wiki do projeto, organizada em 3 pilares estratégicos:
  - `10 - Estratégia & Arquitetura de Testes` (Bases técnicas, Playwright, Jest, CI/CD e Guia de Execução).
  - `20 - Módulos do Sistema & Suítes BDD` (Área viva de paridade e cenários Gherkin).
  - `30 - Qualidade, Evidências & Releases` (Status de relatórios e checklists Go/No-Go).
- **Dashboards**: Configuração de painel executivo com desobstrução de permissões de extensão.

---

## 📋 2. O que foi realizado no Módulo AZURE BOARDS

No módulo Azure Boards, estruturamos a **árvore completa de rastreabilidade de QA e desenvolvimento**, garantindo que 100% dos testes estejam vinculados aos itens de backlog:

- **2 Epics Criadas**:
  - `Epic #6385`: `[QA Core] Segurança, Autenticação, Cadastros Base & Multi-Tenancy`
  - `Epic #6402`: `[QA] Migração Frontend - Frete Expresso (JSF -> Angular)`
- **10 Features & 10 PBIs**: Mapeamento funcional das telas, formulários e regras de negócio da IT.OPE.04 REV.02.
- **26 Tasks de QA Automatizadas (`[QA Test]`)**: Cada caso de teste (ex: `TC_CORE_001` a `006`, `TC_FE_001` a `020`) possui sua Task dedicada vinculada ao respectivo PBI.
- **1 Task de Infraestrutura de Servidor**: `Task #6401` (`[Infra Server] Preparar o servidor para executar branch develop em produção`).

---

## 💻 3. O que foi realizado no Módulo AZURE REPOS

A estrutura de código-fonte foi organizada em repositórios dedicados e padronizados:

- **Repositório `ms-integrator-frontend`**:
  - Contém o projeto Angular 18+, seletores Angular Material UI (`#login`, `#senha`), Page Objects (`LoginPage.ts`, `FreteExpressoPage.ts`), suíte de testes E2E Playwright (`01_frete_expresso_complete.spec.ts`) e o script `azure-pipelines.yml`.
- **Repositório `ms-integrator-backend`**:
  - Contém a suíte de testes de API REST (Jest + Supertest), `tsconfig.json` (`esModuleInterop: true`), `jest.config.js` (`testTimeout: 15000ms`) e o script `azure-pipelines.yml`.
- **Limpeza de Repositórios Obsoletos**: Deletado o repositório auxiliar temporário `integrator-qa-automation` para manter o projeto limpo e organizado.

---

## 🚀 4. O que foi realizado no Módulo AZURE PIPELINES

No módulo Azure Pipelines, registramos e instanciamos as esteiras de **Integração Contínua (CI)** que executam os testes automatizados em nuvem:

- **`Pipeline-ms-integrator-frontend` (ID: 2)**:
  - Executa a suíte E2E do Playwright em máquinas virtuais Linux (`ubuntu-latest`), testa a interface do usuário contra o ambiente QA real (`https://qaapi.ilclogportal.com.br:3000`), gera relatórios JUnit (`results.xml`) e anexa evidências de vídeos (`.webm`) e screenshots.
- **`Pipeline-ms-integrator-backend` (ID: 3)**:
  - Executa a suíte de API REST do Jest em máquinas Linux, valida os contratos HTTP (200, 400, 401, 403, 500) e garante a resiliência com ERPs externos.
- **Status Atual das Execuções**: 🟢 **`Succeeded (Verde 100%)`** em ambas as pipelines!

---

## 🏛️ 5. Navegação Principal pelos 3 Pilares da Wiki

```mermaid
graph TD
    Home["Pilar 00: Visão Geral e Estratégia de QA"] --> Pilar10["Pilar 10: Estratégia e Arquitetura"]
    Home --> Pilar20["Pilar 20: Módulos do Sistema e BDD"]
    Home --> Pilar30["Pilar 30: Qualidade e Releases"]

    Pilar10 --> P10_1["10.1 - Matriz de Paridade Global"]
    Pilar10 --> P10_2["10.2 - Arquitetura de Automação"]
    Pilar10 --> P10_3["10.3 - Esteiras de CI-CD"]
    Pilar10 --> P10_4["10.4 - Guia de Execução QA"]

    Pilar20 --> P20_1["20.1 - Core Security e Governança"]
    Pilar20 --> P20_2["20.2 - Frete Expresso"]
    Pilar20 --> P20_3["20.3 - Futuros Módulos"]

    Pilar30 --> P30_1["30.1 - Histórico de Cobertura"]
    Pilar30 --> P30_2["30.2 - Checklist de Homologação"]
```

---

## 🎯 6. Resumo da Estrutura dos Pilares da Wiki

- **[[10 - Estratégia & Arquitetura de Testes]]**: Base técnica, padrões Playwright/Jest, Azure Pipelines e Guia de Execução.
- **[[20 - Módulos do Sistema & Suítes BDD]]**: Área viva contendo a paridade funcional e os 27 cenários BDD Gherkin do Core e Frete Expresso.
- **[[30 - Qualidade, Evidências & Releases]]**: Status de relatórios CI/CD e Checklists Go/No-Go.

---

## 🌐 7. Ambiente de Homologação QA
- **URL QA Real**: `https://qaapi.ilclogportal.com.br:3000`
- **Usuário QA**: `luis.junior@opah.com.br`
"""

if __name__ == '__main__':
    create_or_update_page('/00 - Visão Geral & Estratégia de QA', PAGE_00_RICH_CONTENT)
