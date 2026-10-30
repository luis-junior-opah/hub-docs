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
# SUB-PÁGINA 01: MAPEAMENTO E MATRIZ DE PARIDADE (JSF VS ANGULAR)
# ==============================================================================

PAGE_01_CONTENT = """# 🔄 01 - Mapeamento e Matriz de Paridade (JSF vs Angular)

Esta página documenta detalhadamente a **Matriz de Paridade Funcional e Arquitetural** entre a aplicação legado em **Java Server Faces (JSF / XHTML)** e a nova aplicação em **Angular 18+**.

---

## 🏛️ 1. Mapeamento Arquitetural Legado vs Novo

| Componente Arquitetural | Aplicação Legada (JSF) | Nova Aplicação (Angular + Microserviços) |
| :--- | :--- | :--- |
| **Tecnologia de UI** | XHTML / PrimeFaces / JSF 2.2 | Angular 18+ SPA / Angular Material / RxJS |
| **Gerenciamento de Estado** | `@ManagedBean`, `@ViewScoped` em Java | Serviços RxJS (`BehaviorSubject`), Reactive Forms |
| **Controlador Principal** | `FreteExpressoController.java` (2.116 linhas) | `FreteExpressoComponent.ts`, `FreteExpressoService.ts` |
| **Comunicação Server-Side** | Invocação direta de EJBs (`@EJB`) | API REST JSON via `HttpClient` (com Interceptores JWT) |
| **Persistência de Dados** | JPA / Hibernate / EJB Session Beans | REST Microservices / DTOs JSON |

---

## 📋 2. Matriz de Paridade Funcional por Passo da IT.OPE.04 REV.02

### 🔹 Passo 1: Solicitação de Frete Expresso
* **Legado JSF**: `solicitacao.xhtml` & `FreteExpressoController.salvarSolicitacao()`
* **Novo Angular**: `FreteExpressoSolicitacaoComponent` & `FreteExpressoService.createRequest()`
* **Campos Mapeados**: Cliente (`*`), Fornecedor (`*`), Modal (`*`), Tipo de Material (`*`), Motivo/Justificativa (`*`), Dimensões (Altura, Comprimento, Largura), Peso (`*`), Volumetria, Tipo de Veículo (`*`).
* **Validação**: Impedir salvamento e exibir alertas de validação para campos obrigatórios não preenchidos.

### 🔹 Passo 2: Cotação de Transportadoras
* **Legado JSF**: `cotacoes.xhtml` & `FreteExpressoController.salvarCotacoes()`
* **Novo Angular**: `FreteExpressoCotacaoComponent` & `FreteExpressoService.saveQuotations()`
* **Regras Mapeadas**:
  1. **Restrição de Transportadora (Regra John Deere)**: O sistema legado bloqueia cotações da transportadora *Armani* para os fornecedores *Gerdau* e *Aperam*. No Angular, a lista de transportadoras elegíveis filtra dinamicamente a opção *Armani* quando esses fornecedores são selecionados.
  2. **Cálculo de Transit Time**: Arredondamento e prazo de entrega em dias úteis.
  3. **Opção de Cancelamento**: Permite o cancelamento da cotação com registro do motivo.

### 🔹 Passo 3: Mesa de Aprovação
* **Legado JSF**: `aprovacoes.xhtml` & `FreteExpressoController.aprovarCotacao()`
* **Novo Angular**: `FreteExpressoAprovacaoComponent` & `FreteExpressoService.approveQuotation()`
* **Regras Mapeadas**:
  1. **Aprovação por Menor Valor**: Seleção prévia da cotação de menor custo com opção de justificativa para cotação alternativa.
  2. **Retorno para Cotação**: Permite que a mesa de aprovação devolva a solicitação para reedição de cotação.

### 🔹 Passo 4: Registro de Código NOX / PFR
* **Legado JSF**: `codigonox.xhtml` & `FreteExpressoController.salvarCodigoNox()`
* **Novo Angular**: `FreteExpressoNoxComponent` & `FreteExpressoService.saveNoxCode()`
* **Regras Mapeadas**: Vinculação do Código NOX/PFR e persistência obrigatória do usuário Aprovador.

### 🔹 Passo 5: Validação Fiscal
* **Legado JSF**: `validacao.xhtml` & `FreteExpressoController.validarFiscal()`
* **Novo Angular**: `FreteExpressoValidacaoComponent` & `FreteExpressoService.validateFiscal()`
* **Regras Mapeadas**: Aprovação ou cancelamento da solicitação por desconformidade fiscal.

### 🔹 Passo 6: Emissão de Pedido & Coleta
* **Legado JSF**: `pedido.xhtml` & `FreteExpressoController.gerarPedidoColeta()`
* **Novo Angular**: `FreteExpressoPedidoComponent` & `FreteExpressoService.generateOrder()`
* **Regras Mapeadas**: Geração de número de pedido/coleta e integração com ERP. Tratamento de erros HTTP preventivos para números de pedido inexistentes sem colapsar a API em HTTP 500.

### 🔹 Passo 7: Histórico & Resumo (PDF)
* **Legado JSF**: `resumo.xhtml` & `FreteExpressoController.gerarEspelhoPdf()`
* **Novo Angular**: `FreteExpressoResumoComponent` & `FreteExpressoService.downloadPdf()`
* **Regras Mapeadas**: Exibição de cards de histórico auditáveis (validação, cancelamento) e geração do documento PDF do Espelho de Frete.

---

## 🔍 3. Tabela Comparativa de Métodos (EJB Controller vs Angular Service)

| Função de Negócio | Método JSF EJB (`FreteExpressoController.java`) | Endpoint / Método Angular (`FreteExpressoService.ts`) |
| :--- | :--- | :--- |
| **Criar Solicitação** | `public String salvarSolicitacao()` | `POST /api/v1/freight-express/requests` |
| **Salvar Cotações** | `public String salvarCotacoes()` | `POST /api/v1/freight-express/{id}/quotations` |
| **Aprovar Cotação** | `public String aprovarCotacao()` | `POST /api/v1/freight-express/{id}/approve` |
| **Vincular NOX** | `public String salvarCodigoNox()` | `POST /api/v1/freight-express/{id}/nox-code` |
| **Validação Fiscal** | `public String validarFiscal()` | `POST /api/v1/freight-express/{id}/validate` |
| **Gerar Pedido/Coleta** | `public String gerarPedidoColeta()` | `POST /api/v1/freight-express/{id}/generate-order` |
| **Gerar Espelho PDF** | `public void gerarEspelhoPdf()` | `GET /api/v1/freight-express/{id}/pdf` |

---

> 🔗 *Para retornar ao plano geral, acesse a página principal: [[Plano de Testes e Estratégia de QA]].*
"""

if __name__ == '__main__':
    create_or_update_page('/Plano de Testes e Estratégia de QA/01 - Mapeamento e Matriz de Paridade (JSF vs Angular)', PAGE_01_CONTENT)
