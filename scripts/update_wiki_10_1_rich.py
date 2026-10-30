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
# SUB-PÁGINA 10.1 - MATRIZ DE PARIDADE GLOBAL (VERSÃO RICA E DETALHADA)
# ==============================================================================

PAGE_10_1_RICH_CONTENT = """# 🔄 10.1 - Matriz de Paridade Global (JSF vs Angular)

Esta página documenta minuciosamente a **Matriz de Paridade Funcional, Regras de Negócio e Arquitetura** da transição do sistema legado em **Java Server Faces (JSF / XHTML / Java EE)** para a nova plataforma **Angular 18+ e Microserviços REST API**.

---

## 🎯 1. Objetivo da Matriz de Paridade

O objetivo fundamental desta matriz é assegurar que **100% das funcionalidades, regras operacionais, tratamentos fiscais e integrações ERP** do sistema legado sejam preservadas e validadas sem nenhuma perda durante o processo de migração tecnológica.

```mermaid
graph LR
    subgraph Legado ["Sistema Legado JSF (integrator-bk-frontend)"]
        XHTML["Interface XHTML / PrimeFaces"] --> JSF_Bean["ManagedBeans Java (@ViewScoped)"]
        JSF_Bean --> EJB_Server["EJBs Monolíticos no WildFly"]
    end

    subgraph Novo ["Novo Ecossistema Angular (ms-integrator-frontend / backend)"]
        Angular_SPA["Angular 18+ SPA / Material UI"] --> RxJS_Service["Serviços RxJS e Reactive Forms"]
        RxJS_Service --> REST_Microservices["Microserviços REST API JSON"]
    end
```

---

## 🏛️ 2. Comparativo Arquitetural Detalhado

| Dimensão Técnica | Arquitetura Legada (JSF / Java EE) | Nova Arquitetura Modernizada (Angular / REST) | Benefício da Migração |
| :--- | :--- | :--- | :--- |
| **Arquitetura de UI** | Renderização no servidor (Server-Side Rendering - SSR) via JSF 2.2 e PrimeFaces. | Single Page Application (SPA) renderizada no cliente via Angular 18+ e Angular Material UI. | Navegação instantânea sem recarregamento de página. |
| **Gerenciamento de Estado** | `@ManagedBean` e `@ViewScoped` mantidos na memória `HttpSession` do servidor WildFly. | Serviços RxJS (`BehaviorSubject`), Estado local no componente e Reactive Forms. | Eliminação de vazamentos de memória e desacoplamento do servidor. |
| **Camada de Negócio** | Controladores EJB Monolíticos (ex: `FreteExpressoController.java` com 2.116 linhas de código Java). | Microserviços REST API desacoplados por domínio de negócio (`ms-integrator-backend`). | Manutenibilidade simples e escalabilidade independente. |
| **Segurança & Autenticação** | `FiltroSeguranca.java` em `web.xml` utilizando cookies de sessão Java EE. | Tokens JWT (JSON Web Tokens), `AuthInterceptor` HTTP e `CanActivate` RouteGuards. | Segurança baseada em padrões modernos e stateless. |
| **Validação de Formulários** | Alertas do PrimeFaces (`p:messages`) validados no ciclo do JSF (`Process Validations`). | Formulários Reativos Angular (`ReactiveFormsModule`) com validação síncrona/assíncrona em tempo real. | Feedback visual imediato ao usuário sem tráfego de rede desnecessário. |

---

## 📋 3. Matriz de Paridade Funcional por Módulo de Negócio

### 🛡️ Módulo 1: Core Security & Governança
- **Autenticação (AuthN)**: `LoginBean.autenticar()` $\rightarrow$ `AuthService.login('luis.junior@opah.com.br', 'abc123456')` emitindo token JWT.
- **Mensagens de Erro**: `FacesContext.addMessage()` $\rightarrow$ Alertas reativos na tela sem expor detalhes internos do backend (`TC_CORE_002`).
- **Proteção de Rotas (AuthZ)**: `FiltroSeguranca.java` $\rightarrow$ `CanActivate` Angular `RouteGuard` (`AuthGuard.ts`) protegendo `/admin/empresas` (`TC_CORE_003`).
- **Segurança de Endpoints REST**: Verificação de sessão Java $\rightarrow$ Verificação de cabeçalho `Authorization: Bearer <TOKEN>` retornando HTTP 401/403/404 (`TC_CORE_004`).
- **Multi-Tenancy**: Filtros SQL manuais $\rightarrow$ Escopo global por Empresa/Grupo no Interceptor REST (`TC_CORE_005`).
- **Controle por Perfis (RBAC)**: Validação de perfis em Beans Java $\rightarrow$ Diretivas e Guards por perfil (Operador, Cotador, Aprovador, Fiscal, Admin) (`TC_CORE_006`).

### 🚛 Módulo 2: Frete Expresso (IT.OPE.04 REV.02)
- **Passo 1 (Solicitação)**: `solicitacao.xhtml` & `FreteExpressoController.salvarSolicitacao()` $\rightarrow$ `FreteExpressoSolicitacaoComponent` & `POST /api/v1/freight-express/requests` com validação de campos obrigatórios (*) (`TC_FE_001`, `TC_FE_002`).
- **Passo 2 (Cotação)**: `cotacoes.xhtml` & `FreteExpressoController.salvarCotacoes()` $\rightarrow$ `FreteExpressoCotacaoComponent` & `POST /api/v1/freight-express/{id}/quotations`.
  - **Regra Transportadora Armani (John Deere)**: Bloqueio da transportadora Armani para os fornecedores Gerdau e Aperam (`TC_FE_020`).
  - **Transit Time**: Cálculo e arredondamento de prazo em dias úteis.
  - **Desistência**: Opção de cancelamento da cotação (`TC_FE_004`).
- **Passo 3 (Mesa de Aprovação)**: `aprovacoes.xhtml` & `FreteExpressoController.aprovarCotacao()` $\rightarrow$ `FreteExpressoAprovacaoComponent`. Destaque prévio de menor valor (`TC_FE_005`) e opção de retorno para cotação (`TC_FE_006`).
- **Passo 4 (Código NOX / PFR)**: `codigonox.xhtml` & `FreteExpressoController.salvarCodigoNox()` $\rightarrow$ `FreteExpressoNoxComponent` vinculando NOX e salvando o Aprovador responsável (`TC_FE_007`).
- **Passo 5 (Validação Fiscal)**: `validacao.xhtml` & `FreteExpressoController.validarFiscal()` $\rightarrow$ `FreteExpressoValidacaoComponent`. Aprovação fiscal (`TC_FE_008`) ou cancelamento por desconformidade fiscal (`TC_FE_009`).
- **Passo 6 (Pedido & Coleta ERP)**: `pedido.xhtml` & `FreteExpressoController.gerarPedidoColeta()` $\rightarrow$ `FreteExpressoPedidoComponent`. Emissão de pedido/coleta (`TC_FE_010`) e prevenção de erro interno HTTP 500 no ERP (`TC_FE_011`).
- **Passo 7 (Histórico & PDF)**: `resumo.xhtml` & `FreteExpressoController.gerarEspelhoPdf()` $\rightarrow$ `FreteExpressoResumoComponent`. Exibição dos cards auditáveis (`TC_FE_012` a `TC_FE_016`) e geração do PDF do Espelho de Frete (`TC_FE_015`).
- **UI/UX & Responsividade**: Auto-Collapse de filtros (`TC_FE_017`), Limpar Filtros (`TC_FE_018`) e adaptação em 1366px sem rolagem horizontal (`TC_FE_019`).

---

## 🔍 4. Tabela de De-Para (Arquivos Legados vs Novo Projeto)

| Funcionalidade | Arquivo / Bean Legado (Java/XHTML) | Componente / Serviço Novo (Angular/TypeScript) | Endpoint REST API Backend |
| :--- | :--- | :--- | :--- |
| **Login e Autenticação** | `login.xhtml` / `LoginBean.java` | `LoginComponent.ts` / `AuthService.ts` | `POST /index/` |
| **Proteção de Sessão** | `FiltroSeguranca.java` | `AuthGuard.ts` (`CanActivate`) | Interceptor Bearer Token |
| **Passo 1: Solicitação** | `solicitacao.xhtml` / `FreteExpressoController.java` | `FreteExpressoSolicitacaoComponent.ts` | `POST /api/v1/freight-express/requests` |
| **Passo 2: Cotação** | `cotacoes.xhtml` / `FreteExpressoController.java` | `FreteExpressoCotacaoComponent.ts` | `POST /api/v1/freight-express/{id}/quotations` |
| **Passo 3: Aprovação** | `aprovacoes.xhtml` / `FreteExpressoController.java` | `FreteExpressoAprovacaoComponent.ts` | `POST /api/v1/freight-express/{id}/approve` |
| **Passo 4: Código NOX** | `codigonox.xhtml` / `FreteExpressoController.java` | `FreteExpressoNoxComponent.ts` | `POST /api/v1/freight-express/{id}/nox-code` |
| **Passo 5: Validação** | `validacao.xhtml` / `FreteExpressoController.java` | `FreteExpressoValidacaoComponent.ts` | `POST /api/v1/freight-express/{id}/validate` |
| **Passo 6: Pedido ERP** | `pedido.xhtml` / `FreteExpressoController.java` | `FreteExpressoPedidoComponent.ts` | `POST /api/v1/freight-express/{id}/generate-order` |
| **Passo 7: Espelho PDF** | `resumo.xhtml` / `FreteExpressoController.java` | `FreteExpressoResumoComponent.ts` | `GET /api/v1/freight-express/{id}/pdf` |

---

## 🟢 5. Validação Automatizada de Paridade em CI/CD

A paridade de cada item desta matriz é verificada automaticamente pelas suítes de teste em nuvem:
- 💻 **`Pipeline-ms-integrator-frontend`**: Testes E2E via Playwright cobrindo 21 cenários de interface.
- ⚙️ **`Pipeline-ms-integrator-backend`**: Testes de API REST via Jest + Supertest cobrindo 5 suítes de backend.

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].  
Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

if __name__ == '__main__':
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.1 - Matriz de Paridade Global (JSF vs Angular)', PAGE_10_1_RICH_CONTENT)
