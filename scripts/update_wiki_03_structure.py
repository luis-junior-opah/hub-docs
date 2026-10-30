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
        print(f"Pagina antiga excluida com sucesso: {path}")
    except Exception as e:
        print(f"Nota/Aviso ao excluir {path}: {e}")

# ==============================================================================
# PÁGINA PRINCIPAL DO TÓPICO 03: FRETE EXPRESSO
# ==============================================================================
PAGE_03_MAIN_CONTENT = """# 🚛 03 - Frete Expresso

Esta página centraliza a documentação técnica, regras de negócio e estratégia de teste do módulo **Frete Expresso**, regulamentado pela instrução normativa **IT.OPE.04 REV.02**.

---

## 🎯 1. Visão Geral do Ciclo de Vida do Frete Expresso

O módulo Frete Expresso gerencia todo o fluxo de transporte de urgência da empresa, passando por 7 etapas encadeadas de aprovação e controle:

```mermaid
graph LR
    P1[1. Solicitação] --> P2[2. Cotação]
    P2 --> P3[3. Mesa de Aprovação]
    P3 --> P4[4. Código NOX / PFR]
    P4 --> P5[5. Validação Fiscal]
    P5 --> P6[6. Pedido & Coleta ERP]
    P6 --> P7[7. Histórico & Resumo PDF]
```

---

## 📋 2. Estrutura dos Passos e Regras Mapeadas

1. **Passo 1 (Solicitação)**: Cadastro de solicitação de transporte com campos obrigatórios (*).
2. **Passo 2 (Cotação)**: Registro de transportadoras, cálculo de transit time e filtro de restrição (Transportadora Armani bloqueada para Gerdau/Aperam).
3. **Passo 3 (Mesa de Aprovação)**: Aprovação pelo menor valor cotado ou justificativa de alternativa.
4. **Passo 4 (Código NOX)**: Vínculo do código NOX/PFR e persistência obrigatória do Aprovador.
5. **Passo 5 (Validação Fiscal)**: Verificação de conformidade fiscal e liberação.
6. **Passo 6 (Pedido & Coleta)**: Emissão de pedidos e coleta no ERP com prevenção de erros HTTP 500.
7. **Passo 7 (Histórico & PDF)**: Registro auditável em cards de histórico e geração do PDF do Espelho de Frete.

---

## 🥒 3. Cenários BDD Gherkin

Para visualizar os **20 cenários BDD Gherkin em formato Dado/Quando/Então** cobrindo todos os 7 passos do Frete Expresso, acesse a sub-página:

👉 **[[03 - Frete Expresso/Cenários BDD Gherkin]]**

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

# ==============================================================================
# SUB-PÁGINA BDD: CENÁRIOS BDD GHERKIN - FRETE EXPRESSO
# ==============================================================================
PAGE_03_BDD_SUBPAGE_CONTENT = """# 🥒 Cenários BDD Gherkin - Frete Expresso

Esta sub-página contém a especificação oficial dos **20 Cenários BDD Gherkin (Dado / Quando / Então)** para o módulo de **Frete Expresso (IT.OPE.04 REV.02)**.

---

## 📋 Lista Completa dos 20 Cenários BDD

### 🔹 Passo 1: Solicitação
```gherkin
@solicitacao @caminho_feliz
Cenário: TC_FE_001 - Criar nova solicitação de frete expresso com sucesso
  Dado que o usuário está autenticado no sistema com o perfil "Operador"
  E está na tela de "Gestão de Frete Expresso"
  Quando clicar no botão "Nova Solicitação"
  E preencher todos os campos obrigatórios (*): Cliente, Fornecedor, Modal, Tipo de Material, Motivo, Dimensões, Peso e Veículo
  E clicar em "Salvar"
  Então a solicitação deve ser salva no estado "Solicitado"
  E exibir a mensagem de sucesso "Solicitação cadastrada com sucesso"

@solicitacao @validacao_formulario
Cenário: TC_FE_002 - Impedir salvamento de solicitação sem campos obrigatórios
  Dado que o usuário está na modal de "Nova Solicitação"
  Quando clicar em "Salvar" sem preencher os campos obrigatórios (*)
  Então o sistema deve destacar os campos inválidos em vermelho
  E exibir a mensagem de erro "Preencha todos os campos obrigatórios"
```

### 🔹 Passo 2: Cotação
```gherkin
@cotacao @caminho_feliz
Cenário: TC_FE_003 - Registrar cotações de transportadoras com sucesso
  Dado que existe uma solicitação no estado "Solicitado"
  Quando o usuário cotador registrar os valores e transit time de 3 transportadoras
  E clicar em "Salvar Cotações"
  Então o sistema deve transicionar o estado para "Aguardando Aprovação"

@cotacao @cancelamento
Cenário: TC_FE_004 - Cancelar etapa de cotação por desistência do frete
  Dado que o usuário está na etapa de cotação de transportadoras
  Quando clicar no botão "Cancelar Cotação" e informar o motivo da desistência
  Então o estado da solicitação deve ser alterado para "Cancelado"

@cotacao @regra_negocio
Cenário: TC_FE_020 - Restrição de transportadora Armani para fornecedores restritos
  Dado que o fornecedor selecionado é "Gerdau" ou "Aperam"
  Quando o usuário abrir a lista de transportadoras para cotação
  Então a opção "Armani" não deve estar disponível para seleção
```

### 🔹 Passo 3: Mesa de Aprovação
```gherkin
@aprovacao @caminho_feliz
Cenário: TC_FE_005 - Aprovar cotação de menor valor na mesa de aprovação
  Dado que a solicitação está no estado "Aguardando Aprovação"
  Quando o usuário aprovador selecionar a cotação de menor valor
  E clicar no botão "Aprovar"
  Então o estado da solicitação deve avançar para "Aguardando Código NOX"

@aprovacao @retorno_cotacao
Cenário: TC_FE_006 - Retornar solicitação em aprovação para reedição de cotação
  Dado que a solicitação está na mesa de aprovação
  Quando o aprovador clicar em "Retorno Cotação" informando a justificativa
  Então a solicitação deve retornar para a etapa 2 no estado "Solicitado"
```

### 🔹 Passo 4: Código NOX / PFR
```gherkin
@codigo_nox @caminho_feliz
Cenário: TC_FE_007 - Registrar Código NOX e persistir o Aprovador corretamente
  Dado que a solicitação está no estado "Aguardando Código NOX"
  Quando o usuário inserir o código NOX/PFR válido e selecionar o aprovador responsável
  E clicar em "Salvar Código NOX"
  Então o sistema deve salvar o registro e transicionar para o estado "Aguardando Validação Fiscal"
```

### 🔹 Passo 5: Validação Fiscal
```gherkin
@validacao @aprovacao
Cenário: TC_FE_008 - Aprovar solicitação na Etapa de Validação Fiscal
  Dado que a solicitação está em "Aguardando Validação Fiscal"
  Quando o perfil fiscal confirmar a conformidade dos dados e clicar em "Aprovar Fiscal"
  Então o estado deve transicionar para "Aguardando Pedido e Coleta"

@validacao @cancelamento
Cenário: TC_FE_009 - Cancelar solicitação na Etapa de Validação por desconformidade fiscal
  Dado que a solicitação está na etapa de validação fiscal
  Quando o fiscal reprovar o registro e clicar em "Cancelar Solicitação"
  Então o estado da solicitação deve ser alterado para "Cancelado"
```

### 🔹 Passo 6: Emissão de Pedido & Coleta
```gherkin
@pedido_coleta @caminho_feliz
Cenário: TC_FE_010 - Gerar Pedido e Coleta com sucesso e finalizar o frete
  Dado que a solicitação está em "Aguardando Pedido e Coleta"
  Quando o usuário informar os números de pedido e coleta emitidos no ERP
  E clicar em "Finalizar Frete"
  Então a solicitação deve ser encerrada no estado "Finalizado"

@pedido_coleta @tratamento_erro
Cenário: TC_FE_011 - Tratar preventivamente erro de pedido inexistente sem colapsar a API
  Dado que o usuário informa um número de pedido inexistente na integração ERP
  Quando tentar gerar o pedido
  Então o backend deve tratar o erro de integração e retornar um código diferente de HTTP 500
  E exibir um alerta de validação legível ao usuário
```

### 🔹 Passo 7 & Histórico: Auditoria & PDF
```gherkin
@historico @card_cancelamento
Cenário: TC_FE_012 - Exibir o Card de Cancelamento na Tela de Histórico
  Dado que a solicitação foi cancelada em qualquer etapa do fluxo
  Quando o usuário visualizar a aba "Histórico"
  Então o card de cancelamento deve ser exibido com a justificativa, data e usuário responsável

@historico @card_validacao
Cenário: TC_FE_013 - Exibir o Card da Etapa 5 (Validação) na Tela de Histórico
  Dado que a solicitação passou pela validação fiscal
  Quando o usuário acessar a aba "Histórico"
  Então o card da Etapa 5 deve estar visível detalhando o parecer fiscal

@resumo @espelho_pdf
Cenário: TC_FE_015 - Gerar o PDF do Espelho do Frete na Tela Resumo
  Dado que a solicitação está finalizada ou em qualquer etapa com cotação aprovada
  Quando o usuário clicar em "Imprimir Espelho (PDF)"
  Então o sistema deve gerar o arquivo PDF formatado para download
```

### 🔹 Gestão, Filtros & UI/UX
```gherkin
@gestao @auto_collapse
Cenário: TC_FE_017 - Recolher automaticamente o painel de filtros ao pesquisar (Auto-Collapse)
  Dado que o usuário está na tela de gestão com o painel de filtros expandido
  Quando preencher os parâmetros e clicar em "Pesquisar"
  Então o painel de filtros deve recolher automaticamente para maximizar a área da grid

@gestao @limpar_filtros
Cenário: TC_FE_018 - Limpar todos os campos de pesquisa pelo botão "Limpar Filtros"
  Dado que existem filtros preenchidos no painel de busca
  Quando o usuário clicar em "Limpar Filtros"
  Então todos os campos devem retornar aos seus valores padrão vazios

@ui_ux @responsividade
Cenário: TC_FE_019 - Adaptar o layout em notebooks de 1366px sem rolagem horizontal global
  Dado que o usuário acessa o sistema com uma resolução de tela de 1366x768 pixels
  Quando visualizar a tela de gestão ou os formulários dos passos
  Então o layout deve se adaptar responsivamente sem gerar barra de rolagem horizontal na página
```

---

> 🔗 *Retornar ao sumário do módulo: [[03 - Frete Expresso]].*  
> 🔗 *Retornar ao plano geral: [[Plano de Testes e Estratégia de QA]].*
"""

if __name__ == '__main__':
    # Excluir a pagina antiga sem hierarquia se existir
    delete_page('/Plano de Testes e Estratégia de QA/03 - Cenários BDD Gherkin - Frete Expresso')
    
    # Criar a pagina principal do topico 03 e a sua sub-pagina BDD Gherkin
    create_or_update_page('/Plano de Testes e Estratégia de QA/03 - Frete Expresso', PAGE_03_MAIN_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/03 - Frete Expresso/Cenários BDD Gherkin', PAGE_03_BDD_SUBPAGE_CONTENT)
