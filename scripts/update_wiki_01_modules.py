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
# 01 - PÁGINA PRINCIPAL DO TÓPICO 01
# ==============================================================================
MAIN_PAGE_01_CONTENT = """# 🔄 01 - Mapeamento e Matriz de Paridade (JSF vs Angular)

Esta seção centraliza o **Mapeamento e Matriz de Paridade Funcional e Arquitetural** entre o sistema legado em **Java Server Faces (JSF / XHTML)** e a nova plataforma baseada em **Angular 18+ e Microserviços REST API**.

---

## 🏛️ 1. Visão Geral da Transição Arquitetural

A migração do sistema **Integrator** visa modernizar a experiência do usuário, eliminando a dependência do estado em memória do servidor (`@ViewScoped` JSF) e adotando uma arquitetura **Single Page Application (SPA)** desacoplada via APIs REST stateless.

```mermaid
graph LR
    subgraph Legado ["Legado JSF (integrator-bk-frontend)"]
        JSF_View[XHTML / PrimeFaces] --> JSF_Controller[FreteExpressoController.java 2.116 linhas]
        JSF_Controller --> EJB[EJB Session Beans / JPA Hibernate]
    end

    subgraph Novo ["Novo Angular (ms-integrator-frontend / backend)"]
        Angular_UI[Angular 18+ / Material UI] --> Angular_Service[FreteExpressoService.ts]
        Angular_Service --> REST_API[APIs REST Microservices JSON]
    end
```

---

## 📊 2. Tabela de Mapeamento Geral por Módulo

| Módulo do Integrator | Arquivos e ManagedBeans Legados (JSF) | Componentes e Serviços Novos (Angular) | Status da Paridade QA |
| :--- | :--- | :--- | :--- |
| **Core Security & Governança** | `LoginBean.java`, `FiltroSeguranca.java` | `LoginComponent`, `AuthService`, `RouteGuards` | 🟢 **100% Mapeado & Automatizado** |
| **Frete Expresso** | `solicitacao.xhtml`, `cotacoes.xhtml`, `aprovacoes.xhtml`, `codigonox.xhtml`, `validacao.xhtml`, `pedido.xhtml`, `resumo.xhtml`, `FreteExpressoController.java` | `FreteExpressoComponent`, `FreteExpressoService.ts`, `FreteExpressoPage.ts` | 🟢 **100% Mapeado & Automatizado** |

---

## 📚 3. Sub-páginas Detalhadas dos Módulos

Para visualizar a matriz de paridade detalhada com a comparação de campos, regras de negócio, seletores e métodos de cada módulo, navegue pelas sub-páginas abaixo:

* 🛡️ **[[01 - Mapeamento e Matriz de Paridade (JSF vs Angular)/Core Security e Governança]]**: Detalhamento da paridade de Autenticação, Tokens JWT, RouteGuards, RBAC, Multi-Tenancy e endpoints da camada Core.
* 🚛 **[[01 - Mapeamento e Matriz de Paridade (JSF vs Angular)/Frete Expresso]]**: Detalhamento minucioso dos 7 passos do ciclo de vida do Frete Expresso, regras John Deere/Armani, transit time, NOX/PFR, validação fiscal, geração de pedidos e PDFs.

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA 1: CORE SECURITY E GOVERNANÇA
# ==============================================================================
SUBPAGE_SECURITY_CONTENT = """# 🛡️ Mapeamento e Paridade - Core Security e Governança

Esta sub-página detalha a **Matriz de Paridade Funcional e Técnica** da camada de **Segurança, Autenticação, Roteamento e Governança Multi-Tenancy** entre o sistema legado (JSF) e a nova arquitetura (Angular 18+).

---

## 📋 1. Comparativo Técnico de Segurança

| Recurso de Segurança | Sistema Legado (JSF / Java EE) | Nova Plataforma (Angular 18+ / REST) |
| :--- | :--- | :--- |
| **Mecanismo de Login** | Formulário `login.xhtml` submetendo para `LoginBean.java` | `LoginComponent` chamando `AuthService.login()` via POST `/index/` ou `/api/v1/auth/login` |
| **Gestão de Sessão** | `HttpSession` Java gravada em memória no servidor WildFly | Tokens JWT armazenados no `localStorage` / Interceptor HTTP |
| **Proteção de Telas** | `Filter` Java (`FiltroSeguranca.java` em `web.xml`) | `CanActivate` Angular `RouteGuards` (`AuthGuard.ts`) |
| **Proteção de APIs** | Verificação de sessão EJB | Cabeçalho `Authorization: Bearer <TOKEN>` no Backend |
| **Multi-Tenancy** | Filtros SQL manuais por `idEmpresa` na instrução JPA | Filtro global no Interceptor REST e escopo por Empresa/Grupo |

---

## 🔍 2. Matriz de Paridade de Cenários de Segurança (QA)

### 🔹 CS-01: Autenticação com Credenciais Válidas
* **Legado JSF**: `LoginBean.autenticar()` valida usuário e senha no banco, criando a `HttpSession`.
* **Novo Angular**: `AuthService.login('luis.junior@opah.com.br', 'abc123456')` envia o payload JSON e armazena o token JWT.
* **Validação QA**: `TC_CORE_001` (Autenticação com sucesso em 1.3s no ambiente de QA).

### 🔹 CS-02: Tratamento de Tentativas Inválidas de Login
* **Legado JSF**: `FacesContext.addMessage()` exibe mensagem no `p:messages`.
* **Novo Angular**: Exibição de alerta reativo `.alert-danger` ou `mat-error` sem expor detalhes internos do backend.
* **Validação QA**: `TC_CORE_002` (Exibição de mensagem de erro amigável ao usuário).

### 🔹 CS-03: Proteção de Rotas não Autorizadas (`RouteGuards`)
* **Legado JSF**: `FiltroSeguranca` intercepta requisições `.xhtml` e redireciona para `login.xhtml`.
* **Novo Angular**: `RouteGuard` intercepta a navegação no cliente (ex: `/admin/empresas`) e redireciona para `/login`.
* **Validação QA**: `TC_CORE_003` (Bloqueio de acesso a rotas sem token de sessão).

### 🔹 CS-04: Bloqueio de Requisições REST sem Token (`AuthZ`)
* **Legado JSF**: Erro de sessão expirada redireciona para o login.
* **Novo Angular**: O backend recusa chamadas REST sem o cabeçalho Bearer Token retornando erro HTTP 401 ou 403.
* **Validação QA**: `TC_CORE_004` (Verificação dos status HTTP 401/403/404 em chamadas REST).

---

> 🔗 *Retornar ao sumário do tópico 01: [[01 - Mapeamento e Matriz de Paridade (JSF vs Angular)]].*
"""

# ==============================================================================
# SUB-PÁGINA 2: FRETE EXPRESSO
# ==============================================================================
SUBPAGE_FRETE_CONTENT = """# 🚛 Mapeamento e Paridade - Frete Expresso

Esta sub-página detalha minuciosamente a **Matriz de Paridade Funcional e Regras de Negócio** do módulo **Frete Expresso (IT.OPE.04 REV.02)** entre o controlador legado `FreteExpressoController.java` e a nova suíte Angular.

---

## 📋 1. Mapeamento dos 7 Passos do Ciclo de Vida do Frete Expresso

### 🔹 Passo 1: Solicitação (Criação de Rascunho)
* **Legado JSF**: `solicitacao.xhtml` $\rightarrow$ `FreteExpressoController.salvarSolicitacao()`
* **Novo Angular**: `FreteExpressoSolicitacaoComponent` $\rightarrow$ `POST /api/v1/freight-express/requests`
* **Campos & Validações**:
  * Cliente (`*`), Fornecedor (`*`), Modal (`*`), Tipo de Material (`*`), Motivo/Justificativa (`*`), Dimensões (Altura, Comprimento, Largura), Peso (`*`), Volumetria, Tipo de Veículo (`*`).
  * Validação de obrigatoriedade: Bloquear salvamento caso qualquer campo com `*` esteja em branco (`TC_FE_002`).

### 🔹 Passo 2: Cotação de Transportadoras
* **Legado JSF**: `cotacoes.xhtml` $\rightarrow$ `FreteExpressoController.salvarCotacoes()`
* **Novo Angular**: `FreteExpressoCotacaoComponent` $\rightarrow$ `POST /api/v1/freight-express/{id}/quotations`
* **Regras Especiais Mapeadas**:
  1. **Restrição Transportadora Armani (Regra John Deere/Gerdau)**: No legado, o Java valida se o fornecedor é *Gerdau* ou *Aperam* e remove a transportadora *Armani*. No Angular, o select/filtro filtra dinamicamente a transportadora Armani para esses fornecedores (`TC_FE_020`).
  2. **Cálculo de Transit Time**: Arredondamento de prazos de entrega em dias úteis.
  3. **Desistência do Frete**: Botão de cancelamento da cotação com registro do motivo (`TC_FE_004`).

### 🔹 Passo 3: Mesa de Aprovação
* **Legado JSF**: `aprovacoes.xhtml` $\rightarrow$ `FreteExpressoController.aprovarCotacao()`
* **Novo Angular**: `FreteExpressoAprovacaoComponent` $\rightarrow$ `POST /api/v1/freight-express/{id}/approve`
* **Regras Mapeadas**:
  1. **Aprovação de Menor Valor**: Destaque prévio da cotação mais barata (`TC_FE_005`).
  2. **Retorno para Cotação**: Permite à mesa devolver a solicitação para reedição (`TC_FE_006`).

### 🔹 Passo 4: Código NOX / PFR
* **Legado JSF**: `codigonox.xhtml` $\rightarrow$ `FreteExpressoController.salvarCodigoNox()`
* **Novo Angular**: `FreteExpressoNoxComponent` $\rightarrow$ `POST /api/v1/freight-express/{id}/nox-code`
* **Regras Mapeadas**: Inserção do Código NOX e gravação do usuário Aprovador responsável (`TC_FE_007`).

### 🔹 Passo 5: Validação Fiscal
* **Legado JSF**: `validacao.xhtml` $\rightarrow$ `FreteExpressoController.validarFiscal()`
* **Novo Angular**: `FreteExpressoValidacaoComponent` $\rightarrow$ `POST /api/v1/freight-express/{id}/validate`
* **Regras Mapeadas**: Aprovação fiscal (`TC_FE_008`) ou cancelamento por inconsistência fiscal (`TC_FE_009`).

### 🔹 Passo 6: Pedido & Coleta
* **Legado JSF**: `pedido.xhtml` $\rightarrow$ `FreteExpressoController.gerarPedidoColeta()`
* **Novo Angular**: `FreteExpressoPedidoComponent` $\rightarrow$ `POST /api/v1/freight-express/{id}/generate-order`
* **Regras Mapeadas**: Emissão do número de pedido/coleta no ERP (`TC_FE_010`) e prevenção de erro interno HTTP 500 para pedidos inexistentes (`TC_FE_011`).

### 🔹 Passo 7: Histórico & Resumo (PDF)
* **Legado JSF**: `resumo.xhtml` $\rightarrow$ `FreteExpressoController.gerarEspelhoPdf()`
* **Novo Angular**: `FreteExpressoResumoComponent` $\rightarrow$ `GET /api/v1/freight-express/{id}/pdf`
* **Regras Mapeadas**: Exibição dos cards auditáveis de cancelamento (`TC_FE_012`) e validação (`TC_FE_013`), além do download do PDF do Espelho do Frete (`TC_FE_015`).

---

> 🔗 *Retornar ao sumário do tópico 01: [[01 - Mapeamento e Matriz de Paridade (JSF vs Angular)]].*
"""

if __name__ == '__main__':
    create_or_update_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)', MAIN_PAGE_01_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)/Core Security e Governança', SUBPAGE_SECURITY_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)/Frete Expresso', SUBPAGE_FRETE_CONTENT)
