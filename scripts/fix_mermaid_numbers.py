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
# PÁGINA PRINCIPAL DO TÓPICO 03 (COM MERMAID SINTAXE SEM "1. " DENTRO DAS CAIXAS)
# ==============================================================================
PAGE_03_MAIN_NO_LIST_IN_MERMAID = """# 🚛 03 - Frete Expresso

Esta página centraliza a documentação técnica, regras de negócio e estratégia de teste do módulo **Frete Expresso**, regulamentado pela instrução normativa **IT.OPE.04 REV.02**.

---

## 🎯 1. Visão Geral do Ciclo de Vida do Frete Expresso

O módulo Frete Expresso gerencia todo o fluxo de transporte de urgência da empresa, passando por 7 etapas encadeadas de aprovação e controle:

```mermaid
graph LR
    P1["Etapa 1: Solicitação"] --> P2["Etapa 2: Cotação"]
    P2 --> P3["Etapa 3: Mesa de Aprovação"]
    P3 --> P4["Etapa 4: Código NOX"]
    P4 --> P5["Etapa 5: Validação Fiscal"]
    P5 --> P6["Etapa 6: Pedido e Coleta"]
    P6 --> P7["Etapa 7: Histórico e PDF"]
```

---

## 📋 2. Estrutura dos Passos e Regras Mapeadas

- **Passo 1 (Solicitação)**: Cadastro de solicitação de transporte com campos obrigatórios (*).
- **Passo 2 (Cotação)**: Registro de transportadoras, cálculo de transit time e filtro de restrição (Transportadora Armani bloqueada para Gerdau/Aperam).
- **Passo 3 (Mesa de Aprovação)**: Aprovação pelo menor valor cotado ou justificativa de alternativa.
- **Passo 4 (Código NOX)**: Vínculo do código NOX/PFR e persistência obrigatória do Aprovador.
- **Passo 5 (Validação Fiscal)**: Verificação de conformidade fiscal e liberação.
- **Passo 6 (Pedido & Coleta)**: Emissão de pedidos e coleta no ERP com prevenção de erros HTTP 500.
- **Passo 7 (Histórico & PDF)**: Registro auditável em cards de histórico e geração do PDF do Espelho de Frete.

---

## 🥒 3. Cenários BDD Gherkin

Para visualizar os **20 cenários BDD Gherkin completos (TC_FE_001 a TC_FE_020) em formato Dado/Quando/Então**, acesse a sub-página:

👉 **[[03 - Frete Expresso/Cenários BDD Gherkin]]**

---

Retornar à página principal: [[Plano de Testes e Estratégia de QA]].
"""

if __name__ == '__main__':
    create_or_update_page('/Plano de Testes e Estratégia de QA/03 - Frete Expresso', PAGE_03_MAIN_NO_LIST_IN_MERMAID)
