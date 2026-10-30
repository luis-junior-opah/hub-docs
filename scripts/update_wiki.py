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
    
    # Check if page exists to get eTag
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
# PÁGINA PRINCIPAL / RESUMO GERAL DO PLANO DE TESTES
# ==============================================================================

MAIN_SUMMARY_PAGE = """# 📋 Plano de Testes & Estratégia de QA - Migração Integrator V0

Bem-vindo à **Wiki Oficial de QA e Testes Automatizados** do projeto **Migração Angular Integrator V0**.

Este documento contém o resumo executivo, arquitetura de testes, matriz de rastreabilidade, cobertura por módulo e detalhes das pipelines de CI/CD para a transição do sistema legado (JSF / XHTML) para a nova plataforma (Angular 18+ e Microserviços REST API).

---

## 🎯 1. Visão Geral da Arquitetura de QA

A estratégia de testes garante 100% de paridade funcional entre o sistema legado e o novo ecossistema Angular, dividida em duas camadas fundamentais:

| Camada | Repositório Azure DevOps | Tecnologia Utilizada | Foco dos Testes | Status CI/CD |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend** | `ms-integrator-frontend` | Playwright (TypeScript) | UI, Formulários, Navegação, Responsividade (1366px), RouteGuards | 🟢 **Succeeded (100%)** |
| **Backend** | `ms-integrator-backend` | Jest + Supertest (TypeScript) | APIs REST, Contratos HTTP, Status Codes, Regras de Negócio | 🟢 **Succeeded (100%)** |

---

## 📊 2. Cobertura do Plano de Testes

### 🛡️ Camada Core Security, Autenticação & Governança (Epic #6385)
Garante a segurança, autenticação e controle de acessos da aplicação:
* **TC_CORE_001**: Autenticação com credenciais válidas (`luis.junior@opah.com.br`).
* **TC_CORE_002**: Bloqueio de login com credenciais inválidas / mensagens de erro.
* **TC_CORE_003**: Proteção de rotas Angular via `RouteGuard` sem sessão ativa.
* **TC_CORE_004**: Bloqueio de requisições REST API sem cabeçalho `Authorization` (HTTP 401/403).
* **TC_CORE_005**: Isolamento de dados Multi-Tenancy (Separação por Empresa/Grupo).
* **TC_CORE_006**: Controle de Acesso Baseado em Perfis (RBAC - Perfis Operador, Aprovador, Admin).

### 🚛 Módulo Frete Expresso (Epic #6402)
Cobertura ponta a ponta dos 7 passos da Instrução de Trabalho **IT.OPE.04 REV.02**:
1. **Passo 1 (Solicitação)**: `TC_FE_001` (Caminho Feliz), `TC_FE_002` (Validação de Campos Obrigatórios).
2. **Passo 2 (Cotação)**: `TC_FE_003` (Registro de Cotações), `TC_FE_004` (Cancelamento), `TC_FE_020` (Restrição Transportadora Armani para Gerdau/Aperam).
3. **Passo 3 (Mesa de Aprovação)**: `TC_FE_005` (Aprovação de Menor Valor), `TC_FE_006` (Retorno para Cotação).
4. **Passo 4 (Código NOX)**: `TC_FE_007` (Vínculo de NOX/PFR e Persistência do Aprovador).
5. **Passo 5 (Validação Fiscal)**: `TC_FE_008` (Aprovação Fiscal), `TC_FE_009` (Cancelamento Fiscal).
6. **Passo 6 (Pedido & Coleta)**: `TC_FE_010` (Geração de Pedido/Coleta), `TC_FE_011` (Tratamento de erro ERP sem colapsar a API em HTTP 500).
7. **Passo 7 (Histórico & Resumo)**: `TC_FE_012` (Card de Cancelamento), `TC_FE_013` (Card de Validação), `TC_FE_015` (Espelho PDF).
8. **UI/UX & Responsividade**: `TC_FE_017` (Auto-Collapse de Filtros), `TC_FE_018` (Limpeza de Filtros), `TC_FE_019` (Layout 1366px sem Scroll Horizontal).

---

## 🏗️ 3. Mapeamento no Azure Boards (Kanban & Backlog)

Os testes e tarefas de infraestrutura foram organizados na seguinte estrutura hierárquica:

```
[Epic #6385] [QA Core] Segurança, Autenticação, Cadastros Base & Multi-Tenancy
 ├── [Feature #6386] CORE-01: Autenticação, Gestão de Sessão & SSO
 │    └── [PBI #6387] Login e Gestão de Tokens JWT
 │         └── [Task #6388] [QA Test] TC_CORE_001 - Autenticação com credenciais válidas
 └── [Task #6401] Preparar o servidor para executar branch develop de integrator-web em produção

[Epic #6402] [QA] Migração Frontend - Frete Expresso (JSF -> Angular)
 ├── [Feature #6403] FE-01: Solicitação de Frete Expresso (Passo 1)
 │    └── [PBI #6404] Formulário de Entrada de Solicitação
 │         ├── [Task #6405] [QA Test] TC_FE_001 - Criar nova solicitação de frete expresso
 │         └── [Task #6406] [QA Test] TC_FE_002 - Impedir salvamento sem campos obrigatórios
 └── (Demais 18 Tasks cobrindo Cotação, Aprovação, NOX, Validação, Pedido e Histórico)
```

---

## ⚙️ 4. Pipelines de CI/CD em Tempo Real

| Pipeline | Repositório | Triggers | Descrição das Tasks | Status |
| :--- | :--- | :--- | :--- | :--- |
| `Pipeline-ms-integrator-frontend` | `ms-integrator-frontend` | `main`, `develop`, PRs | Node 20, npm install, Chromium headless, Playwright E2E, JUnit report, Artifacts (videos/screenshots) | 🟢 **Succeeded** |
| `Pipeline-ms-integrator-backend` | `ms-integrator-backend` | `main`, `develop`, PRs | Node 20, npm install, Jest + Supertest, JUnit report, Cobertura de Código | 🟢 **Succeeded** |

---

## 🌐 5. Ambiente de Homologação QA
* **URL QA**: `https://qaapi.ilclogportal.com.br:3000`
* **Usuário QA**: `luis.junior@opah.com.br`
* **Porta / SSL**: HTTPS Porta 3000 (`ignoreHTTPSErrors: true` no Playwright)

---

> 📌 *Navegue no menu lateral da Wiki para se aprofundar em cada tópico específico do plano de testes, arquitetura de automação e guia de execução.*
"""

if __name__ == '__main__':
    create_or_update_page('/Plano de Testes e Estratégia de QA', MAIN_SUMMARY_PAGE)
