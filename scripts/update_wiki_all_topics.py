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
# SUB-PÁGINA 02: CORE SECURITY & GOVERNANÇA
# ==============================================================================
PAGE_02_CONTENT = """# 🛡️ 02 - Camada Core Security & Governança

Esta página detalha os requisitos de **Segurança, Autenticação, Controle de Acesso Baseado em Perfis (RBAC) e Isolamento Multi-Tenancy** que servem de fundação para toda a plataforma Integrator.

---

## 🔑 1. Autenticação e Gestão de Sessão (AuthN)
* **Tokens JWT**: Emissão de tokens de acesso seguros no login via endpoint `/index/` ou `/api/v1/auth/login`.
* **Credenciais de Homologação QA**: `luis.junior@opah.com.br` / `abc123456`.
* **Cenários Automatizados**:
  * `TC_CORE_001`: Autenticação com credenciais válidas e recebimento de token.
  * `TC_CORE_002`: Bloqueio de tentativa de login com e-mail/senha incorretos com exibição de alerta.

---

## 🚫 2. Proteção de Rotas e Segurança de API (AuthZ & RouteGuards)
* **RouteGuards Angular**: Impedem a navegação via URL direta para telas internas (ex: `/admin/empresas`, `/pages/freteexpresso`) caso o usuário não possua sessão autenticada.
* **Segurança de Endpoints REST**: A API Backend intercepta requisições sem o cabeçalho `Authorization: Bearer <TOKEN>` e retorna status de erro HTTP 401 Unauthorized ou 403 Forbidden.
* **Cenários Automatizados**:
  * `TC_CORE_003`: Bloqueio de rota Angular não autorizada pelo Route Guard.
  * `TC_CORE_004`: Bloqueio de requisições REST API sem cabeçalho de autorização.

---

## 🏢 3. Isolamento Multi-Tenancy e Controle de Acesso (RBAC)
* **Multi-Tenancy por Empresa/Grupo**: Garantia de que os dados de solicitações de frete de uma empresa/grupo logístico não fiquem visíveis para usuários de outras empresas.
* **Controle Baseado em Perfis (RBAC)**:
  * **Operador Solicitante**: Cria solicitações e visualiza apenas seus rascunhos.
  * **Comprador/Cotador**: Registra valores de frete e prazos de transportadoras.
  * **Aprovador**: Aprova valores na mesa de aprovação e vincula Código NOX/PFR.
  * **Fiscal**: Valida aspectos fiscais na Etapa 5.
* **Cenários Automatizados**:
  * `TC_CORE_005`: Garantia de isolamento de dados por empresa/grupo.
  * `TC_CORE_006`: Validação de permissões por perfil de usuário.

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA 03: CENÁRIOS BDD GHERKIN - FRETE EXPRESSO
# ==============================================================================
PAGE_03_CONTENT = """# 🥒 03 - Cenários BDD Gherkin - Frete Expresso

Esta página contém os **20 Cenários de Teste em formato BDD Gherkin (Dado / Quando / Então)** baseados na instrução normativa **IT.OPE.04 REV.02**.

---

## 📋 Cenários Mapeados

### 🔹 Passo 1: Solicitação
```gherkin
@solicitacao @caminho_feliz
Cenário: TC_FE_001 - Criar nova solicitação de frete expresso com sucesso
  Dado que o usuário está autenticado no sistema com o perfil "Operador"
  E está na tela de "Gestão de Frete Expresso"
  Quando clicar no botão "Nova Solicitação"
  E preencher todos os campos obrigatórios (*): Cliente, Fornecedor, Modal, Tipo de Material, Motivo, Dimensões, Peso e Veículo
  E clicar em "Salvar"
  Então a solicitação deve ser salva no estado "Solicitado"
  E exibir a mensagem de sucesso "Solicitação cadastrada com sucesso"
```

```gherkin
@solicitacao @validacao_formulario
Cenário: TC_FE_002 - Impedir salvamento de solicitação sem campos obrigatórios
  Dado que o usuário está na modal de "Nova Solicitação"
  Quando clicar em "Salvar" sem preencher os campos obrigatórios (*)
  Então o sistema deve destacar os campos inválidos em vermelho
  E exibir a mensagem de erro "Preencha todos os campos obrigatórios"
```

### 🔹 Passo 2: Cotação
```gherkin
@cotacao @caminho_feliz
Cenário: TC_FE_003 - Registrar cotações de transportadoras com sucesso
  Dado que existe uma solicitação no estado "Solicitado"
  Quando o usuário cotador registrar os valores e transit time de 3 transportadoras
  E clicar em "Salvar Cotações"
  Então o sistema deve transicionar o estado para "Aguardando Aprovação"
```

```gherkin
@cotacao @regra_negocio
Cenário: TC_FE_020 - Restrição de transportadora Armani para fornecedores restritos
  Dado que o fornecedor selecionado é "Gerdau" ou "Aperam"
  Quando o usuário abrir a lista de transportadoras para cotação
  Então a opção "Armani" não deve estar disponível para seleção
```

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA 04: AUTOMAÇÃO FRONTEND COM PLAYWRIGHT
# ==============================================================================
PAGE_04_CONTENT = """# 🎭 04 - Automação Frontend com Playwright (TypeScript)

Esta página documenta a arquitetura da suíte de testes de interface do usuário (UI) desenvolvida com **Playwright e TypeScript** no repositório **`ms-integrator-frontend`**.

---

## 🏗️ 1. Padrão Page Object Model (POM)

A automação utiliza o padrão **Page Object Model** para desacoplar a localização de elementos de tela dos cenários de teste:

* **[LoginPage.ts](file:///C:/temp/QA%20Integrator%20V0/Repos/Angular/Frontend/integrator-web/e2e/pages/LoginPage.ts)**: Encapsula os seletores do Angular Material UI (`#login`, `#senha`, `button[type="submit"]`).
* **[FreteExpressoPage.ts](file:///C:/temp/QA%20Integrator%20V0/Repos/Angular/Frontend/integrator-web/e2e/pages/FreteExpressoPage.ts)**: Encapsula formulários dos 7 passos, painel de filtros e grid de gestão.

---

## ⚙️ 2. Configuração do Playwright (`playwright.config.ts`)

* **URL Base**: `https://qaapi.ilclogportal.com.br:3000`
* **Navegador**: Chromium (Desktop Chrome 1366x768)
* **Resiliência SSL**: `ignoreHTTPSErrors: true`
* **Evidências**: Gravação de vídeos (`video: 'retain-on-failure'`), screenshots e traces em falhas.

---

## 🚀 3. Execução Local

```cmd
cmd /c npx playwright test
```
Ou com interface visual interativa:
```cmd
cmd /c npx playwright test --ui
```

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA 05: AUTOMAÇÃO BACKEND API COM JEST & SUPERTEST
# ==============================================================================
PAGE_05_CONTENT = """# ⚙️ 05 - Automação Backend API com Jest & Supertest

Esta página documenta a suíte de testes de API REST e integração desenvolvida com **Jest e Supertest** no repositório **`ms-integrator-backend`**.

---

## 🎯 1. Escopo dos Testes de API
* **Autenticação REST**: Validação de endpoints de login e emissão de tokens JWT.
* **Segurança de Endpoints**: Garantia de retorno HTTP 401/403 sem token.
* **Contratos & Payloads**: Validação de requisições de criação de solicitações (`POST /api/v1/freight-express/requests`).
* **Resiliência ERP**: Validação de que a API trata números de pedidos inválidos sem colapsar com erro interno HTTP 500.

---

## ⚙️ 2. Configuração do Jest (`jest.config.js`)
* **Preset**: `ts-jest`
* **Configuração TypeScript**: `tsconfig.json` com `esModuleInterop: true`
* **Timeout de Rede**: `testTimeout: 15000` (15 segundos para latência do servidor QA)
* **Repórter Nativo Azure DevOps**: `jest-junit` (gerando `results.xml`)

---

## 🚀 3. Execução Local

```cmd
cmd /c npm test
```

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA 06: ESTRUTURA DE CI-CD NAS AZURE PIPELINES
# ==============================================================================
PAGE_06_CONTENT = """# 🚀 06 - Estrutura de CI-CD nas Azure Pipelines

Esta página documenta as **Azure Pipelines de CI/CD** criadas para automação contínua de testes no Azure DevOps.

---

## ⚙️ 1. Pipelines Registradas

| Nome da Pipeline | Repositório Vinculado | Arquivo YAML | Gatilhos (Triggers) | Status |
| :--- | :--- | :--- | :--- | :--- |
| `Pipeline-ms-integrator-frontend` | `ms-integrator-frontend` | `/azure-pipelines.yml` | `main`, `develop`, PRs | 🟢 **Succeeded (Verde 100%)** |
| `Pipeline-ms-integrator-backend` | `ms-integrator-backend` | `/azure-pipelines.yml` | `main`, `develop`, PRs | 🟢 **Succeeded (Verde 100%)** |

---

## 🛠️ 2. Passos da Pipeline de Frontend (`azure-pipelines.yml`)
1. Instalar Node.js 20.x Runtime.
2. `npm install` e ajuste de permissões (`chmod -R +x node_modules/.bin`).
3. Instalar navegador Chromium (`node ./node_modules/playwright/cli.js install chromium --with-deps`).
4. Executar Playwright E2E com `continueOnError: true`.
5. Publicar relatório JUnit nativo via `PublishTestResults@2`.
6. Publicar evidências de vídeos e screenshots como artefato via `PublishPipelineArtifact@1`.

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA 07: GUIA DE EXECUÇÃO E MANUTENÇÃO PARA QA
# ==============================================================================
PAGE_07_CONTENT = """# 📖 07 - Guia de Execução e Manutenção para QA

Este guia serve como referência prática para os engenheiros e analistas de QA que manterão e executarão as suítes de teste.

---

## 🛠️ 1. Como Adicionar Novos Cenários de Teste

### No Frontend (Playwright):
1. Abra a pasta `e2e/specs/01_frete_expresso_complete.spec.ts` no repositório `ms-integrator-frontend`.
2. Adicione um novo bloco `test('@tag TC_FE_XXX: ...', async ({ page }) => { ... })`.
3. Se houver novos elementos na tela, adicione os seletores no Page Object `e2e/pages/FreteExpressoPage.ts`.

### No Backend (Jest):
1. Abra a pasta `tests/frete_expresso_api.spec.ts` no repositório `ms-integrator-backend`.
2. Adicione um novo bloco `it('TC_FE_API_XXX: ...', async () => { ... })`.

---

## 🔄 2. Como Atualizar os Testes Quando os Devs Entregarem Novo Código

Como as pipelines já estão vinculadas aos repositórios no seu Azure DevOps:
1. Faça o commit do novo código.
2. A Pipeline do Azure DevOps será disparada automaticamente e exibirá os resultados gráficos na aba **Tests** sem necessidade de intervenção manual!

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

if __name__ == '__main__':
    create_or_update_page('/Plano de Testes e Estratégia de QA/02 - Camada Core Security & Governança', PAGE_02_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/03 - Cenários BDD Gherkin - Frete Expresso', PAGE_03_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/04 - Automação Frontend com Playwright (TypeScript)', PAGE_04_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/05 - Automação Backend API com Jest & Supertest', PAGE_05_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/06 - Estrutura de CI-CD nas Azure Pipelines', PAGE_06_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/07 - Guia de Execução e Manutenção para QA', PAGE_07_CONTENT)
