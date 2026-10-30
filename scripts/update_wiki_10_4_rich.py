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
# SUB-PÁGINA 10.4 - GUIA DE EXECUÇÃO & BOAS PRÁTICAS DE QA (VERSÃO RICA E DETALHADA)
# ==============================================================================

PAGE_10_4_RICH_CONTENT = """# 📖 10.4 - Guia de Execução & Boas Práticas de QA

Este guia serve como **Manual de Referência Operacional e Código de Boas Práticas** para engenheiros de QA, analistas de teste e desenvolvedores que atuarão na manutenção e expansão da suíte de automação do projeto **Integrator**.

---

## 🎯 1. Princípios Norteadores da Automação de QA

1. **Independência de Ambiente**: Os testes automatizados foram construídos para rodar sem qualquer necessidade de banco de dados local ou dependências específicas de máquina. Eles executam diretamente contra os serviços de homologação em nuvem (`https://qaapi.ilclogportal.com.br:3000`).
2. **Determinismo e Estabilidade**: Um teste automatizado deve ser determinístico (retornar sempre o mesmo resultado para as mesmas condições). Testes instáveis (*flaky tests*) devem ser corrigidos imediatamente.
3. **Manutenibilidade via Page Object Model (POM)**: Nenhum seletor CSS ou XPath deve ficar solto nos arquivos de teste `.spec.ts`. Todos os seletores residem exclusivamente nas classes Page Object.

---

## 🏷️ 2. Padronização de Nomenclatura e Tags

Para organizar e filtrar a execução de testes, siga a padronização oficial de tags e identificadores:

### 🔹 Padrão de Identificação dos Casos de Teste:
- **`TC_CORE_XXX`**: Casos de teste referentes à camada Core Security, Autenticação, Roteamento e Governança.
- **`TC_FE_XXX`**: Casos de teste referentes ao módulo Frete Expresso (IT.OPE.04 REV.02).
- **`TC_FE_API_XXX`**: Casos de teste de API REST no backend.

### 🔹 Padrão de Tags BDD Gherkin:
- **Tags de Módulo**: `@security`, `@solicitacao`, `@cotacao`, `@aprovacao`, `@codigo_nox`, `@validacao`, `@pedido_coleta`, `@historico`, `@resumo`, `@gestao`, `@ui_ux`.
- **Tags de Tipo de Cenário**:
  - `@caminho_feliz`: Cenários de fluxo principal sem erros.
  - `@validacao_formulario`: Cenários de impedimento de salvamento e campos obrigatórios (*).
  - `@cancelamento`: Cenários de desistência ou reprovação.
  - `@regra_negocio`: Cenários que validam regras específicas (ex: Restrição Armani/Gerdau).
  - `@tratamento_erro`: Cenários de prevenção de falhas internas (ex: HTTP 500 ERP).

---

## 🎭 3. Boas Práticas de Automação Frontend (Playwright)

1. **Uso de Seletores Resilientes do Angular Material UI**:
   - Preferir seletores por ID fixo: `#login`, `#senha`.
   - Preferir seletores por atributos de controle do Angular: `input[formcontrolname="login"]`.
   - Preferir seletores semânticos acessíveis: `button:has-text("Nova Solicitação")` ou `button:has-text("Salvar")`.
   - **EVITAR** seletores XPaths absolutos dependentes da estrutura da DOM (ex: `//div[2]/span[3]/button`).

2. **Aproveitamento do Auto-Waiting Nativamente**:
   - O Playwright aguarda automaticamente que os botões fiquem visíveis, habilitados e desimpedidos antes de clicar. Evite utilizar esperas fixas manuais (`sleep` ou `waitForTimeout`) sem necessidade.

3. **Tratamento Gracioso de Passos Opcionais**:
   - Ao interagir com modais ou notificações dinâmicas do Angular Material, utilize capturas graciosas: `.click().catch(() => {})` ou `.isVisible({ timeout: 5000 }).catch(() => false)`.

---

## ⚙️ 4. Boas Práticas de Automação Backend (Jest & Supertest)

1. **Idempotência e Isolamento**:
   - Cada teste de API deve ser autossuficiente e não depender do estado modificado por um teste executado anteriormente.

2. **Asserção Abrangente de Status Code HTTP**:
   - Valide sempre se o status code retornado é adequado para o cenário (ex: `expect([200, 302, 301, 404]).toContain(res.status)` ou `expect(res.status).not.toBe(500)`).

3. **Configuração de Timeout de Rede**:
   - Mantenha a instrução `jest.setTimeout(15000)` ou `testTimeout: 15000` no `jest.config.js` para suportar variações na latência de rede HTTPS do servidor de QA.

---

## 🚀 5. Passo a Passo: Como Adicionar Testes para Novos Módulos

Quando a equipe de desenvolvimento entregar um novo módulo (ex: *Averbação* ou *Faturamento*), siga o procedimento abaixo para manter a Wiki e as suítes atualizadas:

```mermaid
graph TD
    Step1["Passo 1: Mapear Seletores e Criar Page Object"] --> Step2["Passo 2: Escrever a Suíte de Testes (.spec.ts)"]
    Step2 --> Step3["Passo 3: Executar e Validar Localmente"]
    Step3 --> Step4["Passo 4: Commit e Push (Dispara Pipeline CI/CD)"]
    Step4 --> Step5["Passo 5: Adicionar a Sub-pasta na Wiki"]
```

### Passo 1: Criar o Page Object
No repositório `ms-integrator-frontend`, crie a classe `e2e/pages/AverbacaoPage.ts` mapeando os elementos do formulário e da grid.

### Passo 2: Criar a Suíte de Teste E2E
Crie o arquivo `e2e/specs/02_averbacao.spec.ts` com os cenários BDD Gherkin.

### Passo 3: Atualizar a Wiki do Azure DevOps
No pilar **`20 - Módulos do Sistema & Suítes BDD`**, crie a sub-pasta **`20.3 - Averbação`** contendo:
- `Visão Geral e Paridade`
- `Cenários BDD Gherkin`

---

## 🔍 6. Como Diagnosticar e Resolver Instabilidades (Flaky Tests)

Se uma pipeline no Azure DevOps marcar o status **`partiallySucceeded / Warning` (Amarelo)**:

1. Acesse a aba **Tests** da execução e identifique o caso de teste que falhou.
2. Acesse a aba **Artifacts** e faça o download da pasta `playwright-report-failed-traces`.
3. Abra o vídeo `.webm` correspondente para visualizar a tela exata no momento do erro.
4. Execute o teste localmente em modo visual interativo para depurar:
   ```cmd
   cmd /c npx playwright test --ui
   ```
5. Ajuste o seletor ou tempo de carregamento no Page Object, faça o commit e o Azure DevOps re-executará a esteira automaticamente!

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].  
Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

if __name__ == '__main__':
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.4 - Guia de Execução & Boas Práticas de QA', PAGE_10_4_RICH_CONTENT)
