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

def delete_page(path):
    proj_encoded = urllib.parse.quote(PROJECT)
    page_path_encoded = urllib.parse.quote(path)
    url = f"{ORG_URL}/{proj_encoded}/_apis/wiki/wikis/{WIKI_ID}/pages?path={page_path_encoded}&api-version=7.0"
    
    try:
        req_get = urllib.request.Request(url, headers=get_headers())
        resp_get = urllib.request.urlopen(req_get)
        etag = resp_get.headers.get('ETag')
        
        headers = get_headers()
        if etag:
            headers['If-Match'] = etag
            
        req_del = urllib.request.Request(url, headers=headers, method='DELETE')
        urllib.request.urlopen(req_del)
        print(f"Pagina antiga excluida: {path}")
    except Exception as e:
        pass

# ==============================================================================
# CONTEÚDOS DAS PÁGINAS DA NOVA ESTRUTURA POR PILARES (10, 20, 30)
# ==============================================================================

HOME_PAGE = """# 📋 00 - Visão Geral & Estratégia de QA

Bem-vindo à **Wiki Oficial e Central Viva de Garantia de Qualidade (QA)** do projeto **Migração Angular Integrator V0**.

Esta Wiki foi reestruturada para acompanhar em tempo real o avanço da migração da aplicação legado (JSF / XHTML) para a nova plataforma (Angular 18+ e Microserviços REST API).

---

## 🏛️ Navegação Principal pelos 3 Pilares de QA

```mermaid
graph TD
    Home["00. Visão Geral e Estratégia de QA"] --> Pilar10["10. Estratégia e Arquitetura de Testes"]
    Home --> Pilar20["20. Módulos do Sistema e Suítes BDD"]
    Home --> Pilar30["30. Qualidade, Evidências e Releases"]

    Pilar10 --> P10_1["10.1 Matriz de Paridade Global"]
    Pilar10 --> P10_2["10.2 Arquitetura de Automação"]
    Pilar10 --> P10_3["10.3 Esteiras de CI-CD"]
    Pilar10 --> P10_4["10.4 Guia de Execução QA"]

    Pilar20 --> P20_1["20.1 Core Security e Governança"]
    Pilar20 --> P20_2["20.2 Frete Expresso"]
    Pilar20 --> P20_3["20.3 Futuros Módulos..."]

    Pilar30 --> P30_1["30.1 Histórico de Cobertura CI-CD"]
    Pilar30 --> P30_2["30.2 Checklist de Homologação"]
```

---

## 🎯 Resumo da Estrutura da Wiki

- **[[10 - Estratégia & Arquitetura de Testes]]**: Contém a base técnica, padrões de automação (Playwright + Jest), funcionamento das Azure Pipelines e guias de boas práticas.
- **[[20 - Módulos do Sistema & Suítes BDD]]**: Área evolutiva contendo a matriz de paridade e os cenários BDD Gherkin de cada módulo entregue pelos desenvolvedores.
- **[[30 - Qualidade, Evidências & Releases]]**: Painel de relatórios de execução, métricas de cobertura e checklists de liberação Go/No-Go.

---

## 🌐 Ambiente de Homologação QA
- **URL QA Real**: `https://qaapi.ilclogportal.com.br:3000`
- **Usuário QA**: `luis.junior@opah.com.br`
"""

PILAR_10_MAIN = """# 🏛️ 10 - Estratégia & Arquitetura de Testes

Esta seção centraliza a **arquitetura de testes, padrões de automação, pipelines de CI/CD e guias operacionais** para a equipe de QA e desenvolvimento.

---

## 📚 Navegue pelas Sub-páginas Técnicas:

- **[[10 - Estratégia & Arquitetura de Testes/10.1 - Matriz de Paridade Global (JSF vs Angular)]]**: Mapeamento arquitetural entre EJBs legados e componentes Angular.
- **[[10 - Estratégia & Arquitetura de Testes/10.2 - Arquitetura de Automação (Playwright & Jest)]]**: Estrutura de Page Object Model, seletores Angular Material UI e testes de API REST.
- **[[10 - Estratégia & Arquitetura de Testes/10.3 - Esteiras de CI-CD nas Azure Pipelines]]**: Explicação detalhada de CI/CD, triggers, logs, status e relatórios gráficos no Azure DevOps.
- **[[10 - Estratégia & Arquitetura de Testes/10.4 - Guia de Execução & Boas Práticas de QA]]**: Manual prático para manutenção dos testes e inclusão de novas suítes.

---

Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

PILAR_10_1 = """# 🔄 10.1 - Matriz de Paridade Global (JSF vs Angular)

Esta página documenta o mapeamento de alto nível da transição do sistema legado em **Java Server Faces (JSF / XHTML)** para a arquitetura moderna baseada em **Angular 18+ e Microserviços REST API**.

---

## 🏛️ Comparativo de Arquitetura

- **Frontend Legado**: XHTML / PrimeFaces submetendo requisições para ManagedBeans Java (`@ViewScoped` / `@ManagedBean`).
- **Novo Frontend**: Angular 18+ SPA com Angular Material, formulários reativos (`ReactiveFormsModule`) e serviços RxJS.
- **Backend Legado**: EJBs acoplados executando em servidor de aplicação WildFly.
- **Novo Backend**: APIs REST JSON stateless securitizadas por tokens JWT.

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].
"""

PILAR_10_2 = """# 🎭 10.2 - Arquitetura de Automação (Playwright & Jest)

Documentação técnica da suíte de automação full-stack do projeto.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend E2E**: Playwright + TypeScript (Repositório `ms-integrator-frontend`).
- **Page Object Model (POM)**:
  - `LoginPage.ts`: Seletores Angular Material UI (`#login`, `#senha`, `button[type="submit"]`).
  - `FreteExpressoPage.ts`: Formulários dos 7 passos, painel de filtros e grid responsiva.
- **Backend API**: Jest + Supertest (Repositório `ms-integrator-backend`).
- **Repórter CI/CD**: `jest-junit` gerando relatórios XML nativos para a aba Tests do Azure DevOps.

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].
"""

PILAR_10_3 = """# 🚀 10.3 - Esteiras de CI-CD nas Azure Pipelines

Guia detalhado sobre o funcionamento do **Azure Pipelines**, conceitos de **CI/CD** e como interpretar os relatórios no Azure DevOps.

---

## ⚙️ Pipelines Registradas

- **`Pipeline-ms-integrator-frontend`**: Executa a suíte E2E em máquinas virtuais Linux (`ubuntu-latest`) e grava evidências em vídeo. Status: 🟢 **Succeeded (100%)**.
- **`Pipeline-ms-integrator-backend`**: Executa a suíte de API REST com `testTimeout: 15000ms`. Status: 🟢 **Succeeded (100%)**.

---

## 📊 Como Analisar os Resultados (QA)

1. **Aba Pipelines**: Visualização dos status (🟢 `Succeeded`, ⚠️ `partiallySucceeded / Warning`, 🔴 `Failed`).
2. **Aba Tests**: Painel gráfico com porcentagem de aprovação e tempo de execução de cada teste.
3. **Aba Artifacts**: Download dos vídeos `.webm` e screenshots das falhas na pasta `playwright-report-failed-traces`.

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].
"""

PILAR_10_4 = """# 📖 10.4 - Guia de Execução & Boas Práticas de QA

Manual operacional para engenheiros de QA e desenvolvedores.

---

## 🛠️ Execução Local de Testes

### Frontend (Playwright):
```cmd
cmd /c npx playwright test
```

### Backend (Jest API):
```cmd
cmd /c npm test
```

---

Retornar ao pilar técnico: [[10 - Estratégia & Arquitetura de Testes]].
"""

PILAR_20_MAIN = """# 📦 20 - Módulos do Sistema & Suítes BDD

Esta é a **área evolutiva viva da Wiki**, organizada por módulo do sistema **Integrator**. À medida que a equipe de desenvolvimento disponibilizar novos módulos, novas pastas serão adicionadas aqui.

---

## 📁 Módulos Atualmente Mapeados e Automatizados:

- **[[20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança]]**: Autenticação JWT, RouteGuards, RBAC e Multi-Tenancy.
- **[[20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)]]**: Os 7 passos do Frete Expresso, regras John Deere/Armani, NOX e ERP.

---

Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

PILAR_20_1_MAIN = """# 🛡️ 20.1 - Core Security & Governança

Esta seção centraliza a especificação funcional e os testes da camada **Core Security**.

---

## 📚 Navegue pelas Páginas do Módulo Core Security:

- **[[20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança/Visão Geral e Paridade]]**: Comparativo entre `LoginBean.java` e a arquitetura JWT / RouteGuards Angular.
- **[[20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança/Cenários BDD Gherkin]]**: Especificação oficial em Gherkin (`TC_CORE_001` a `TC_CORE_007`).

---

Retornar ao pilar de módulos: [[20 - Módulos do Sistema & Suítes BDD]].
"""

PILAR_20_1_PARITY = """# 📋 Visão Geral e Paridade - Core Security & Governança

Comparativo funcional e técnico entre a segurança legada em JSF e a nova segurança Angular.

- **Mecanismo de Login**: `login.xhtml` $\rightarrow$ `LoginComponent` chamando POST `/index/`.
- **Sessão**: `HttpSession` Java $\rightarrow$ Token JWT em `localStorage`.
- **Rotas**: `FiltroSeguranca.java` $\rightarrow$ `AuthGuard.ts` (`CanActivate`).
- **APIs**: Verificação EJB $\rightarrow$ Interceptor HTTP Bearer Token.

---

Retornar ao módulo: [[20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança]].
"""

PILAR_20_1_BDD = """# 🥒 Cenários BDD Gherkin - Core Security & Governança

Especificação em Gherkin da camada de segurança (TC_CORE_001 a TC_CORE_007):

```gherkin
@security @autenticacao @caminho_feliz
Cenário: TC_CORE_001 - Autenticação com credenciais válidas e geração de Token JWT
  Dado que o usuário acessa a tela de login em "https://qaapi.ilclogportal.com.br:3000/login"
  Quando preencher "luis.junior@opah.com.br" e senha "abc123456" e clicar em "LOGIN"
  Então o sistema deve autenticar o usuário, emitir o token JWT e redirecionar para a página inicial

@security @autenticacao @validacao
Cenário: TC_CORE_002 - Bloqueio de login com credenciais incorretas
  Dado que o usuário informa credenciais inválidas
  Quando clicar em "LOGIN"
  Então o sistema deve recusar a autenticação e exibir a mensagem "Usuário ou senha inválidos"

@security @route_guard @autorizacao
Cenário: TC_CORE_003 - Bloqueio de rota Angular não autorizada pelo Route Guard
  Dado que o usuário não possui sessão ativa
  Quando tentar acessar "/admin/empresas"
  Então o RouteGuard deve bloquear o acesso e redirecionar para o login

@security @api_rest @autorizacao
Cenário: TC_CORE_004 - Bloqueio de requisição REST API sem cabeçalho Authorization
  Dado que uma requisição REST é feita para "/api/v1/freight-express" sem token
  Quando a chamada for processada
  Então o backend deve retornar status HTTP 401 ou 403

@security @multi_tenancy @isolamento_dados
Cenário: TC_CORE_005 - Garantia de isolamento de dados Multi-Tenancy por Empresa/Grupo
  Dado que o usuário pertence à Empresa Logística A
  Quando consultar a grid de gestão
  Então o sistema deve exibir apenas dados da Empresa Logística A

@security @rbac @perfis_acesso
Cenário: TC_CORE_006 - Controle de acesso baseado em perfis (RBAC)
  Dado que o usuário possui o perfil "Operador Solicitante"
  Quando tentar acessar funções de aprovação
  Então o sistema deve ocultar os botões restritos a "Aprovadores"

@security @sessao @expiracao
Cenário: TC_CORE_007 - Encerramento automático de sessão por inatividade
  Dado que o token JWT do usuário expira
  Quando tentar realizar qualquer ação
  Então a sessão deve ser encerrada e o usuário redirecionado ao login
```

---

Retornar ao módulo: [[20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança]].
"""

PILAR_20_2_MAIN = """# 🚛 20.2 - Frete Expresso (IT.OPE.04 REV.02)

Esta seção centraliza a especificação funcional e os testes do módulo **Frete Expresso**.

---

## 📚 Navegue pelas Páginas do Módulo Frete Expresso:

- **[[20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)/Visão Geral e Paridade]]**: Mapeamento dos 7 passos da IT.OPE.04 REV.02 do `FreteExpressoController.java` para o Angular.
- **[[20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)/Cenários BDD Gherkin]]**: Especificação dos 20 cenários BDD Gherkin (`TC_FE_001` a `TC_FE_020`).

---

Retornar ao pilar de módulos: [[20 - Módulos do Sistema & Suítes BDD]].
"""

PILAR_20_2_PARITY = """# 📋 Visão Geral e Paridade - Frete Expresso

Detalhamento da paridade dos 7 passos entre o legado JSF e o Angular 18+:

```mermaid
graph LR
    P1["Etapa 1: Solicitação"] --> P2["Etapa 2: Cotação"]
    P2 --> P3["Etapa 3: Mesa de Aprovação"]
    P3 --> P4["Etapa 4: Código NOX"]
    P4 --> P5["Etapa 5: Validação Fiscal"]
    P5 --> P6["Etapa 6: Pedido e Coleta"]
    P6 --> P7["Etapa 7: Histórico e PDF"]
```

- **Passo 1 (Solicitação)**: `solicitacao.xhtml` $\rightarrow$ `FreteExpressoSolicitacaoComponent`.
- **Passo 2 (Cotação)**: `cotacoes.xhtml` $\rightarrow$ `FreteExpressoCotacaoComponent` (Com regra Armani/Gerdau).
- **Passo 3 (Mesa de Aprovação)**: `aprovacoes.xhtml` $\rightarrow$ `FreteExpressoAprovacaoComponent`.
- **Passo 4 (Código NOX)**: `codigonox.xhtml` $\rightarrow$ `FreteExpressoNoxComponent`.
- **Passo 5 (Validação Fiscal)**: `validacao.xhtml` $\rightarrow$ `FreteExpressoValidacaoComponent`.
- **Passo 6 (Pedido & Coleta)**: `pedido.xhtml` $\rightarrow$ `FreteExpressoPedidoComponent`.
- **Passo 7 (Histórico & PDF)**: `resumo.xhtml` $\rightarrow$ `FreteExpressoResumoComponent`.

---

Retornar ao módulo: [[20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)]].
"""

PILAR_20_2_BDD = """# 🥒 Cenários BDD Gherkin - Frete Expresso (20 Cenários Completos)

Especificação em Gherkin dos 20 cenários do Frete Expresso (TC_FE_001 a TC_FE_020):

```gherkin
@solicitacao @caminho_feliz
Cenário: TC_FE_001 - Criar nova solicitação de frete expresso com sucesso
  Dado que o usuário está na tela de "Gestão de Frete Expresso"
  Quando preencher os campos obrigatórios (*) e clicar em "Salvar"
  Então a solicitação deve ser salva no estado "Solicitado"

@solicitacao @validacao_formulario
Cenário: TC_FE_002 - Impedir salvamento de solicitação sem campos obrigatórios
  Dado que o usuário está na modal de "Nova Solicitação"
  Quando clicar em "Salvar" sem preencher os campos (*)
  Então o sistema deve exibir alerta "Preencha todos os campos obrigatórios"

@cotacao @caminho_feliz
Cenário: TC_FE_003 - Registrar cotações de transportadoras com sucesso
  Dado que a solicitação está no estado "Solicitado"
  Quando o cotador registrar valores de 3 transportadoras e salvar
  Então a solicitação avança para "Aguardando Aprovação"

@cotacao @cancelamento
Cenário: TC_FE_004 - Cancelar etapa de cotação por desistência do frete
  Dado que o usuário está na etapa de cotação
  Quando clicar em "Cancelar Cotação" informando o motivo
  Então a solicitação deve ser alterada para "Cancelado"

@cotacao @regra_negocio
Cenário: TC_FE_020 - Restrição de transportadora Armani para fornecedores restritos
  Dado que o fornecedor é "Gerdau" ou "Aperam"
  Quando abrir a lista de cotação
  Então a opção "Armani" não deve estar disponível

@aprovacao @caminho_feliz
Cenário: TC_FE_005 - Aprovar cotação de menor valor na mesa de aprovação
  Dado que a solicitação está em "Aguardando Aprovação"
  Quando o aprovador selecionar o menor valor e aprovar
  Então o estado avança para "Aguardando Código NOX"

@aprovacao @retorno_cotacao
Cenário: TC_FE_006 - Retornar solicitação em aprovação para reedição de cotação
  Dado que a solicitação está na mesa de aprovação
  Quando o aprovador clicar em "Retorno Cotação"
  Então a solicitação retorna para a etapa 2 no estado "Solicitado"

@codigo_nox @caminho_feliz
Cenário: TC_FE_007 - Registrar Código NOX e persistir o Aprovador corretamente
  Dado que a solicitação está em "Aguardando Código NOX"
  Quando salvar um código NOX válido e o aprovador
  Então o estado avança para "Aguardando Validação Fiscal"

@validacao @aprovacao
Cenário: TC_FE_008 - Aprovar solicitação na Etapa de Validação Fiscal
  Dado que a solicitação está em "Aguardando Validação Fiscal"
  Quando o fiscal clicar em "Aprovar Fiscal"
  Então o estado avança para "Aguardando Pedido e Coleta"

@validacao @cancelamento
Cenário: TC_FE_009 - Cancelar solicitação na Etapa de Validação por desconformidade fiscal
  Dado que a solicitação está em validação fiscal
  Quando o fiscal reprovar e cancelar
  Então o estado deve ser alterado para "Cancelado"

@pedido_coleta @caminho_feliz
Cenário: TC_FE_010 - Gerar Pedido e Coleta com sucesso e finalizar o frete
  Dado que a solicitação está em "Aguardando Pedido e Coleta"
  Quando informar os números de pedido/coleta ERP e finalizar
  Então a solicitação é encerrada no estado "Finalizado"

@pedido_coleta @tratamento_erro
Cenário: TC_FE_011 - Tratar erro de pedido inexistente sem colapsar a API
  Dado que o usuário informa um número de pedido inexistente no ERP
  Quando tentar gerar o pedido
  Então a API não deve retornar HTTP 500 e deve exibir um alerta legível

@historico @card_cancelamento
Cenário: TC_FE_012 - Exibir o Card de Cancelamento na Tela de Histórico
  Dado que a solicitação foi cancelada
  Quando abrir a aba "Histórico"
  Então o card de cancelamento deve exibir a justificativa e responsável

@historico @card_validacao
Cenário: TC_FE_013 - Exibir o Card da Etapa 5 (Validação) na Tela de Histórico
  Dado que a solicitação passou pela validação fiscal
  Quando abrir a aba "Histórico"
  Então o card da Etapa 5 deve estar visível

@historico @card_aprovacao
Cenário: TC_FE_014 - Exibir o Card da Etapa 3 (Aprovação) na Tela de Histórico
  Dado que a solicitação foi aprovada pela mesa
  Quando abrir a aba "Histórico"
  Então o card da Etapa 3 deve exibir os dados da cotação aprovada

@resumo @espelho_pdf
Cenário: TC_FE_015 - Gerar o PDF do Espelho do Frete na Tela Resumo
  Dado que a solicitação possui cotação aprovada
  Quando clicar em "Imprimir Espelho (PDF)"
  Então o sistema gera o arquivo PDF para download

@historico @card_nox
Cenário: TC_FE_016 - Exibir o Card da Etapa 4 (Código NOX) na Tela de Histórico
  Dado que o Código NOX foi registrado
  Quando abrir a aba "Histórico"
  Então o card da Etapa 4 deve exibir o NOX e o Aprovador

@gestao @auto_collapse
Cenário: TC_FE_017 - Recolher automaticamente o painel de filtros ao pesquisar
  Dado que o painel de filtros está expandido
  Quando clicar em "Pesquisar"
  Então o painel de filtros deve recolher automaticamente

@gestao @limpar_filtros
Cenário: TC_FE_018 - Limpar todos os campos de pesquisa pelo botão "Limpar Filtros"
  Dado que existem filtros preenchidos
  Quando clicar em "Limpar Filtros"
  Então todos os campos retornam aos valores vazios

@ui_ux @responsividade
Cenário: TC_FE_019 - Adaptar o layout em notebooks de 1366px sem rolagem horizontal global
  Dado uma resolução de 1366x768 pixels
  Quando visualizar a tela de gestão
  Então o layout se adapta sem gerar barra de rolagem horizontal na página
```

---

Retornar ao módulo: [[20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)]].
"""

PILAR_30_MAIN = """# 📊 30 - Qualidade, Evidências & Releases

Esta seção acompanha os **indicadores de cobertura de testes, histórico de execuções das Azure Pipelines e checklists de homologação Go/No-Go**.

---

## 📚 Navegue pelas Páginas de Qualidade:

- **[[30 - Qualidade, Evidências & Releases/30.1 - Histórico de Cobertura & Status das Pipelines]]**: Painel de status em tempo real das pipelines de Frontend e Backend.
- **[[30 - Qualidade, Evidências & Releases/30.2 - Checklist de Homologação (Go - No-Go)]]**: Critérios de aceite e segurança para liberação em produção.

---

Retornar à Home: [[00 - Visão Geral & Estratégia de QA]].
"""

PILAR_30_1 = """# 📊 30.1 - Histórico de Cobertura & Status das Pipelines

Acompanhamento do status de saúde das esteiras de integração contínua (CI/CD) no Azure DevOps.

---

## 🟢 Status Atual das Pipelines de QA

| Nome da Pipeline | Repositório | Suíte de Testes | Status CI/CD | Taxa de Aprovação |
| :--- | :--- | :--- | :--- | :--- |
| `Pipeline-ms-integrator-frontend` | `ms-integrator-frontend` | Playwright E2E TypeScript (21 cenários) | 🟢 **Succeeded** | **100%** |
| `Pipeline-ms-integrator-backend` | `ms-integrator-backend` | Jest + Supertest REST API (5 cenários) | 🟢 **Succeeded** | **100%** |

---

Retornar ao pilar de qualidade: [[30 - Qualidade, Evidências & Releases]].
"""

PILAR_30_2 = """# 🚦 30.2 - Checklist de Homologação (Go / No-Go)

Critérios mínimos para aprovação de versão da aplicação em ambiente de Produção.

---

## 📋 Critérios de Aceite para Liberação (Go):

- [x] **Execução de Pipelines**: 100% de aprovação verde nas esteiras de Frontend e Backend.
- [x] **Segurança**: Bloqueio de rotas não autorizadas (`RouteGuards`) e APIs REST sem token JWT.
- [x] **Frete Expresso**: 100% de paridade funcional comprovada nos 7 passos da IT.OPE.04 REV.02.
- [x] **UI/UX**: Layout 100% adaptado para notebooks em resolução 1366x768.

---

Retornar ao pilar de qualidade: [[30 - Qualidade, Evidências & Releases]].
"""

if __name__ == '__main__':
    # 1. Limpeza de paginas antigas do formato anterior
    delete_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)/Core Security e Governança')
    delete_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)/Frete Expresso')
    delete_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)')
    delete_page('/Plano de Testes e Estratégia de QA/02 - Camada Core Security & Governança/Cenários BDD Gherkin')
    delete_page('/Plano de Testes e Estratégia de QA/02 - Camada Core Security & Governança')
    delete_page('/Plano de Testes e Estratégia de QA/03 - Frete Expresso/Cenários BDD Gherkin')
    delete_page('/Plano de Testes e Estratégia de QA/03 - Frete Expresso')
    delete_page('/Plano de Testes e Estratégia de QA/04 - Automação Frontend com Playwright (TypeScript)')
    delete_page('/Plano de Testes e Estratégia de QA/05 - Automação Backend API com Jest & Supertest')
    delete_page('/Plano de Testes e Estratégia de QA/06 - Estrutura de CI-CD nas Azure Pipelines')
    delete_page('/Plano de Testes e Estratégia de QA/07 - Guia de Execução e Manutenção para QA')
    delete_page('/Plano de Testes e Estratégia de QA')

    # 2. Criar a nova estrutura pelos 3 Pilares (00, 10, 20, 30)
    create_or_update_page('/00 - Visão Geral & Estratégia de QA', HOME_PAGE)
    
    # Pilar 10
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes', PILAR_10_MAIN)
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.1 - Matriz de Paridade Global (JSF vs Angular)', PILAR_10_1)
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.2 - Arquitetura de Automação (Playwright & Jest)', PILAR_10_2)
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.3 - Esteiras de CI-CD nas Azure Pipelines', PILAR_10_3)
    create_or_update_page('/10 - Estratégia & Arquitetura de Testes/10.4 - Guia de Execução & Boas Práticas de QA', PILAR_10_4)

    # Pilar 20
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD', PILAR_20_MAIN)
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança', PILAR_20_1_MAIN)
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança/Visão Geral e Paridade', PILAR_20_1_PARITY)
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD/20.1 - Core Security & Governança/Cenários BDD Gherkin', PILAR_20_1_BDD)
    
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)', PILAR_20_2_MAIN)
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)/Visão Geral e Paridade', PILAR_20_2_PARITY)
    create_or_update_page('/20 - Módulos do Sistema & Suítes BDD/20.2 - Frete Expresso (IT.OPE.04 REV.02)/Cenários BDD Gherkin', PILAR_20_2_BDD)

    # Pilar 30
    create_or_update_page('/30 - Qualidade, Evidências & Releases', PILAR_30_MAIN)
    create_or_update_page('/30 - Qualidade, Evidências & Releases/30.1 - Histórico de Cobertura & Status das Pipelines', PILAR_30_1)
    create_or_update_page('/30 - Qualidade, Evidências & Releases/30.2 - Checklist de Homologação (Go - No-Go)', PILAR_30_2)
