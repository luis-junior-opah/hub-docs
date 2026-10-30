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
# SUB-PÁGINA 10.3 - ESTEIRAS DE CI-CD NAS AZURE PIPELINES (VERSÃO RICA E DETALHADA)
# ==============================================================================

PAGE_10_3_RICH_CONTENT = """# 🚀 10.3 - Esteiras de CI-CD nas Azure Pipelines (Guia Didático Detalhado)

Este guia foi elaborado especialmente para explicar em detalhes o conceito de **CI/CD**, a ferramenta **Azure Pipelines**, como ela funciona por dentro, qual o seu objetivo estratégico no projeto Integrator e como analisar os relatórios de testes passo a passo.

---

## ❓ 1. O que é CI/CD? (Conceito Fundamental de DevOps)

**CI/CD** é a sigla para **Continuous Integration (Integração Contínua)** e **Continuous Delivery / Deployment (Entrega / Implantação Contínua)**. Trata-se da prática de automatizar todas as etapas de verificação, teste e publicação de software.

```mermaid
graph LR
    Dev["1. Dev envia código"] --> CI["2. Integração Contínua: Compilação e Testes"]
    CI --> Report["3. Relatórios Visuais de QA"]
    Report --> CD["4. Entrega Contínua: Deploy em QA/Produção"]
```

### 🔹 CI (Integração Contínua):
- **O Problema Sem CI**: Vários desenvolvedores alteram o sistema durante semanas. No final do mês, quando tentam juntar o código e testar, descobrem dezenas de bugs graves e incompatibilidades de última hora.
- **A Solução Com CI**: Toda vez que alguém envia uma alteração de código ou teste para o repositório (`ms-integrator-frontend` ou `ms-integrator-backend`), o Azure Pipelines liga automaticamente um "robô na nuvem" que baixa o projeto, roda todos os testes e avisa a equipe em menos de 5 minutos se o código novo quebrou alguma funcionalidade!

### 🔹 CD (Entrega Contínua):
Pega o sistema testado e aprovado pela esteira de CI e faz a publicação automatizada no servidor de QA (`https://qaapi.ilclogportal.com.br:3000`) ou Produção sem intervenção humana manual.

---

## ⚙️ 2. O que é o Azure Pipelines e para que ele serve?

O **Azure Pipelines** é o serviço de nuvem da Microsoft responsável pela execução dessas esteiras automatizadas.

### 🎯 Principais Objetivos:
- **Eliminar o Trabalho Manual**: O analista de QA ou desenvolvedor não precisa ficar rodando testes na própria máquina local antes de cada release.
- **Garantir Isenção ("Na minha máquina funciona")**: Os testes rodam sempre no mesmo ambiente limpo em nuvem (`ubuntu-latest`), garantindo que o resultado não dependa das configurações do computador pessoal do desenvolvedor.
- **Gerar Provas e Evidências para a Liderança**: Cria relatórios visuais com gráficos de porcentagem de aprovação, tempo de resposta e vídeos gravados das telas.

---

## 🔄 3. Passo a Passo: Como a Pipeline Funciona por Dentro

Quando uma alteração é enviada para os repositórios `ms-integrator-frontend` ou `ms-integrator-backend`, o Azure Pipelines executa a seguinte sequência automatizada descrita no arquivo `azure-pipelines.yml`:

```mermaid
sequenceDiagram
    participant Repo as Azure Repos (Git)
    participant Pipeline as Azure Pipelines
    participant Agent as VM na Nuvem (Ubuntu)
    participant QAEnv as Servidor QA Real

    Repo->>Pipeline: 1. Evento de Push / Commit na branch main
    Pipeline->>Agent: 2. Aloca uma Máquina Virtual Limpa
    Agent->>Repo: 3. Clona o Código do Repositório
    Agent->>Agent: 4. Instala Node.js 20, NPM e Chromium
    Agent->>QAEnv: 5. Executa os Testes E2E (Playwright) / API (Jest)
    Agent->>Pipeline: 6. Publica Relatórios XML e Vídeos/Screenshots
```

### Detalhamento das Etapas do Arquivo YAML:

```yaml
# 1. GATILHO (TRIGGER): Define quais branches disparam a pipeline automaticamente
trigger:
  branches:
    include:
      - main
      - develop

# 2. POOL DE AGENTES: Aloca uma máquina virtual Linux zerada na nuvem da Microsoft
pool:
  vmImage: 'ubuntu-latest'

steps:
# 3. INSTALAÇÃO DO RUNTIME: Configura o ambiente Node.js 20.x
- task: NodeTool@0
  inputs:
    versionSpec: '20.x'
  displayName: 'Instalar Node.js'

# 4. DEPENDÊNCIAS & PERMISSÕES: Instala os pacotes e dá permissão de execução aos robôs
- script: |
    npm install
    chmod -R +x node_modules/.bin
  displayName: 'Instalar Dependências e Ajustar Permissões'

# 5. INSTALAÇÃO DO NAVEGADOR: Baixa o Chromium para executar os testes em modo headless
- script: |
    node ./node_modules/playwright/cli.js install chromium --with-deps
  displayName: 'Instalar Navegador Chromium do Playwright'

# 6. EXECUÇÃO DOS TESTES: O robô acessa https://qaapi.ilclogportal.com.br:3000
- script: |
    npx playwright test
  displayName: 'Executar Suíte de Testes Automatizados E2E'
  continueOnError: true

# 7. PUBLICAÇÃO DE RESULTADOS: Envia o relatório gráfico para a aba Tests do Azure
- task: PublishTestResults@2
  condition: always()
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: 'results.xml'
    testRunTitle: 'Relatório de Testes Automatizados E2E'
  displayName: 'Publicar Relatório de Testes no Azure DevOps'

# 8. PUBLICAÇÃO DE EVIDÊNCIAS: Anexa os vídeos e prints gravados pelo Playwright
- task: PublishPipelineArtifact@1
  condition: always()
  inputs:
    targetPath: 'playwright-report'
    artifact: 'playwright-report-failed-traces'
  displayName: 'Publicar Evidências de Vídeos/Screenshots'
```

---

## 📊 4. Guia Prático: Como Analisar os Resultados no Azure DevOps

Para acompanhar o resultado das execuções como QA ou Gestor, siga o passo a passo abaixo no seu navegador:

### Passo 1: Acessar o Menu de Pipelines
1. No Azure DevOps, clique em **Pipelines -> Pipelines** no menu lateral esquerdo.
2. Você verá as duas pipelines oficiais do projeto:
   - 💻 **`Pipeline-ms-integrator-frontend`** (Testes de Tela / Playwright)
   - ⚙️ **`Pipeline-ms-integrator-backend`** (Testes de API REST / Jest)

---

### Passo 2: Entender os Status da Execução
Ao clicar em uma pipeline, você verá a lista de histórico de execuções (`Runs`). Cada execução exibirá um ícone de status:

- 🟢 **`Succeeded` (Verde)**: **100% de Sucesso**. Todos os cenários de teste foram aprovados na nuvem. Nenhuma ação necessária!
- ⚠️ **`partiallySucceeded / Warning` (Amarelo)**: **Sucesso Parcial**. A pipeline executou perfeitamente e publicou os relatórios, mas o robô encontrou algum teste com falha ou timeout no ambiente de QA. Acessar a aba **Tests** para ver qual teste específico falhou.
- 🔴 **`Failed` (Vermelho)**: **Falha de Compilação ou Infraestrutura**. A pipeline quebrou antes de terminar (ex: falta de internet, erro de sintaxe no código). Verificar a aba **Logs** para corrigir o script.

---

### Passo 3: Analisar os Gráficos na Aba "Tests"
Dentro de uma execução (ex: `Run #28` ou `Run #31`), clique no menu superior **Tests**:

1. **Painel de Resumo**:
   - Exibe o número total de testes (ex: `Passed: 21 / 21` ou `18 Passed, 3 Failed`).
   - Exibe a **taxa de aprovação em porcentagem** (ex: `100% Pass Rate`).
   - Exibe o **tempo exato de duração** de cada caso de teste (ex: `TC_CORE_001 - 1.3s`).
2. **Filtro de Falhas**:
   - Altere o filtro da lista de `Passed` para **`Failed`** para visualizar apenas os testes que apresentaram divergência.
   - Clique sobre o nome do teste (ex: `TC_FE_001`) para ver a mensagem de erro exata retornada pela aplicação.

---

### Passo 4: Baixar os Vídeos e Evidências na Aba "Artifacts"
Se algum teste apresentar comportamento inesperado na tela de QA:

1. Na tela principal da execução da Pipeline, clique no botão **Published Artifacts** (Artefatos Publicados) ou no link de **1 published artifact**.
2. Clique na pasta **`playwright-report-failed-traces`** e faça o download.
3. Abra o arquivo `.zip`: você encontrará os **vídeos em formato `.webm`** gravados pelo robô mostrando a tela do navegador exatamente no segundo em que a falha ocorreu!

---

## 🏗️ 5. As Duas Pipelines do Nosso Projeto

Nós organizamos as automações em duas pipelines independentes e especializadas:

1. **`Pipeline-ms-integrator-frontend`**:
   - Repositório: `ms-integrator-frontend`
   - Foco: Interface do usuário (UI), formulários reativos do Angular, fluxo visual do Frete Expresso e layouts responsivos (1366px).
2. **`Pipeline-ms-integrator-backend`**:
   - Repositório: `ms-integrator-backend`
   - Foco: Endpoints REST API, contratos de integração, códigos de status HTTP (200, 400, 401, 403, 500) e regras de negócio de retornos.

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].  
Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

if __name__ == '__main__':
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.3 - Esteiras de CI-CD nas Azure Pipelines', PAGE_10_3_RICH_CONTENT)
