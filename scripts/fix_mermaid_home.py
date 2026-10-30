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
# PÁGINA HOME (00) - MERMAID SEM DIGITO+PONTO+ESPAÇO
# ==============================================================================
HOME_PAGE_CLEAN_MERMAID = """# 📋 00 - Visão Geral & Estratégia de QA

Bem-vindo à **Wiki Oficial e Central Viva de Garantia de Qualidade (QA)** do projeto **Migração Angular Integrator V0**.

Esta Wiki foi reestruturada para acompanhar em tempo real o avanço da migração da aplicação legado (JSF / XHTML) para a nova plataforma (Angular 18+ e Microserviços REST API).

---

## 🏛️ Navegação Principal pelos 3 Pilares de QA

```mermaid
graph TD
    Home["Pilar 00: Visão Geral e Estratégia de QA"] --> Pilar10["Pilar 10: Estratégia e Arquitetura"]
    Home --> Pilar20["Pilar 20: Módulos do Sistema e BDD"]
    Home --> Pilar30["Pilar 30: Qualidade e Releases"]

    Pilar10 --> P10_1["10.1 - Matriz de Paridade Global"]
    Pilar10 --> P10_2["10.2 - Arquitetura de Automação"]
    Pilar10 --> P10_3["10.3 - Esteiras de CI-CD"]
    Pilar10 --> P10_4["10.4 - Guia de Execução QA"]

    Pilar20 --> P20_1["20.1 - Core Security e Governança"]
    Pilar20 --> P20_2["20.2 - Frete Expresso"]
    Pilar20 --> P20_3["20.3 - Futuros Módulos"]

    Pilar30 --> P30_1["30.1 - Histórico de Cobertura"]
    Pilar30 --> P30_2["30.2 - Checklist de Homologação"]
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

if __name__ == '__main__':
    create_or_update_page('/00 - Visão Geral & Estratégia de QA', HOME_PAGE_CLEAN_MERMAID)
