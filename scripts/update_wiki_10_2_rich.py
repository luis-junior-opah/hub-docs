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
# SUB-PÁGINA 10.2 - ARQUITETURA DE AUTOMAÇÃO (VERSÃO RICA E DETALHADA)
# ==============================================================================

PAGE_10_2_RICH_CONTENT = """# 🎭 10.2 - Arquitetura de Automação (Playwright & Jest)

Esta página detalha minuciosamente a **Arquitetura de Automação de Testes Full-Stack** desenvolvida para o projeto Integrator, abrangendo os testes de interface E2E no frontend (**Playwright + TypeScript**) e os testes de API REST no backend (**Jest + Supertest**).

---

## 🎯 1. Filosofia da Arquitetura Full-Stack Testing

A estratégia de automação garante cobertura em duas camadas complementares da pirâmide de testes:

```mermaid
graph TD
    subgraph Piramide ["Pirâmide de Testes Automatizados"]
        E2E["Camada 1: Testes E2E de Interface (Playwright / TypeScript)"]
        API["Camada 2: Testes de API REST e Integração (Jest + Supertest)"]
    end

    subgraph AzureDevOps ["Publicação Automática de Resultados"]
        JUnit["Repórter JUnit (results.xml)"] --> Azure_Tests["Aba Tests do Azure DevOps"]
    end

    E2E --> JUnit
    API --> JUnit
```

---

## 💻 2. Camada Frontend: Automação E2E com Playwright (`ms-integrator-frontend`)

### 🔹 Por que escolhemos o Playwright?
- **Auto-Waiting**: Aguarda automaticamente elementos do Angular Material ficarem visíveis e clicáveis antes de realizar ações, eliminando esperas manuais instáveis (`sleep`).
- **Execução Headless & Multi-Browser**: Roda em modo invisível e ultra-rápido no Chromium na nuvem da Microsoft.
- **Gravação Completa de Evidências**: Captura automaticamente vídeos em `.webm`, screenshots e traces detalhados no exato segundo em que qualquer teste falhar.

---

### 🔹 Padrão Page Object Model (POM)
Para manter o código limpo e sustentável, aplicamos o padrão **Page Object Model**, onde cada tela do sistema possui uma classe dedicada contendo seus seletores e ações:

1. **[LoginPage.ts](file:///C:/temp/QA%20Integrator%20V0/Repos/Angular/Frontend/integrator-web/e2e/pages/LoginPage.ts)**:
   - **Seletores Mapeados**: `#login` (usuário), `#senha` (senha), `button[type="submit"]` (botão de login).
   - **Métodos**: `goto()`, `login(user, pass)`, `verifySuccess()`.
2. **[FreteExpressoPage.ts](file:///C:/temp/QA%20Integrator%20V0/Repos/Angular/Frontend/integrator-web/e2e/pages/FreteExpressoPage.ts)**:
   - **Seletores Mapeados**: Formulários dos 7 passos, botões de ação (`Nova Solicitação`, `Salvar Cotações`, `Aprovar`, `Salvar Código NOX`, `Aprovar Fiscal`, `Finalizar Frete`), painel de filtros e grid responsiva.

---

### 🔹 Detalhes do Arquivo `playwright.config.ts`:
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/specs',
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }]
  ],
  use: {
    baseURL: 'https://qaapi.ilclogportal.com.br:3000',
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1366, height: 768 }
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
});
```

---

## ⚙️ 3. Camada Backend: Automação API REST com Jest (`ms-integrator-backend`)

### 🔹 Por que escolhemos Jest + Supertest?
- **Validação Direta de APIs**: Testa requisições HTTP (`GET`, `POST`, `PUT`, `DELETE`) diretamente nos endpoints sem precisar carregar a interface gráfica.
- **Asserção Fluente de Status Codes**: Valida instantaneamente códigos de resposta HTTP (200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error).
- **Testes de Integração com ERP**: Valida que o backend trata erros de pedidos inexistentes sem colapsar a API (`TC_FE_API_002`).

---

### 🔹 Detalhes da Configuração (`jest.config.js` & `tsconfig.json`):
- **`preset: 'ts-jest'`**: Permite escrever testes nativamente em TypeScript.
- **`testTimeout: 15000`**: Define o tempo limite de 15 segundos para compensar a latência de rede do servidor de QA real.
- **`"esModuleInterop": true`**: Garante compatibilidade de importação das bibliotecas CommonJS (`supertest`).
- **`jest-junit`**: Gera o arquivo `results.xml` nativo para a aba Tests do Azure DevOps.

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.spec.ts'],
  testTimeout: 15000,
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '.', outputName: 'results.xml' }]
  ]
};
```

---

## 📊 4. Integração Nativa com Azure DevOps

Tanto o Playwright quanto o Jest foram configurados para gerar o relatório padronizado **JUnit XML (`results.xml`)**.

Quando a pipeline executa na nuvem, a tarefa `PublishTestResults@2` lê esse arquivo e renderiza automaticamente:
- Gráficos de barra e pizza com a taxa de aprovação (`100% Pass Rate`).
- Histórico de tempo de execução por teste.
- Detalhamento de stack traces em caso de falha.

---

## 🚀 5. Guia de Comandos para Execução Local

### Executar Testes Frontend (Playwright E2E):
```cmd
# Execução padrão em modo headless
cmd /c npx playwright test

# Execução com interface gráfica interativa
cmd /c npx playwright test --ui

# Execução abrindo o navegador visível (headed)
cmd /c npx playwright test --headed
```

### Executar Testes Backend (Jest API REST):
```cmd
# Execução padrão dos testes de API
cmd /c npm test

# Execução com acompanhamento de arquivos (watch)
cmd /c npx jest --watch
```

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].  
Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

if __name__ == '__main__':
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.2 - Arquitetura de Automação (Playwright & Jest)', PAGE_10_2_RICH_CONTENT)
