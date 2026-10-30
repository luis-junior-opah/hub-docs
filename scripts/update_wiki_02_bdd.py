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
# SUB-PÁGINA: CENÁRIOS BDD GHERKIN - CORE SECURITY & GOVERNANÇA
# ==============================================================================

BDD_SECURITY_CONTENT = """# 🥒 Cenários BDD Gherkin - Core Security & Governança

Esta sub-página contém a especificação oficial dos **Cenários BDD Gherkin (Dado / Quando / Então)** para a camada de **Segurança, Autenticação, Autorização e Governança Multi-Tenancy** do projeto Integrator.

---

## 📋 Lista dos Cenários BDD de Segurança

### 🔹 Cenário 1: Autenticação com Credenciais Válidas
```gherkin
@security @autenticacao @caminho_feliz
Cenário: TC_CORE_001 - Autenticação com credenciais de QA válidas e geração de Token JWT
  Dado que o usuário acessa a tela de login do sistema Integrator em "https://qaapi.ilclogportal.com.br:3000/login"
  Quando preencher o campo "e-mail" com "luis.junior@opah.com.br"
  E preencher o campo "senha" com "abc123456"
  E clicar no botão "LOGIN"
  Então o sistema deve validar a autenticação junto ao backend
  E emitir o token de autorização JWT
  E redirecionar o usuário com sucesso para a página inicial/dashboard
  E o endereço da URL não deve conter mais o sufixo "/login"
```

---

### 🔹 Cenário 2: Bloqueio de Login com Credenciais Inválidas
```gherkin
@security @autenticacao @validacao
Cenário: TC_CORE_002 - Bloqueio de login com e-mail ou senha incorretos
  Dado que o usuário está na tela de login do sistema Integrator
  Quando informar o e-mail "usuario.invalido@opah.com.br" ou uma senha incorreta
  E clicar no botão "LOGIN"
  Então o sistema deve recusar a autenticação no backend
  E manter o usuário na tela de login
  E exibir uma mensagem de alerta contendo "Usuário ou senha inválidos"
  E não deve permitir a emissão do token JWT
```

---

### 🔹 Cenário 3: Proteção de Rotas Angular via RouteGuard
```gherkin
@security @route_guard @autorizacao
Cenário: TC_CORE_003 - Bloqueio de rota Angular não autorizada pelo Route Guard sem sessão ativa
  Dado que o usuário NÃO possui uma sessão autenticada ou token JWT ativo
  Quando tentar acessar diretamente pela barra de endereço a URL restrita "/admin/empresas"
  Então o componente "RouteGuard" (CanActivate) deve interceptar a tentativa de navegação
  E impedir a renderização dos componentes administrativos
  E redirecionar automaticamente o usuário para a página de "/login" ou "/acesso-negado"
```

---

### 🔹 Cenário 4: Bloqueio de Requisições REST API sem Autorização
```gherkin
@security @api_rest @autorizacao
Cenário: TC_CORE_004 - Bloqueio de requisição REST API sem cabeçalho Authorization
  Dado que um cliente ou sistema externo realiza uma chamada HTTP POST para a API "/api/v1/freight-express"
  E o cabeçalho HTTP "Authorization: Bearer <TOKEN>" NÃO for enviado na requisição
  Quando a requisição for recebida pelos microserviços do backend
  Então o servidor deve rejeitar o processamento da solicitação
  E retornar um código de status HTTP 401 Unauthorized ou 403 Forbidden
```

---

### 🔹 Cenário 5: Isolamento de Dados Multi-Tenancy por Empresa/Grupo
```gherkin
@security @multi_tenancy @isolamento_dados
Cenário: TC_CORE_005 - Garantia de isolamento de dados entre diferentes empresas/grupos logísticos
  Dado que o usuário "Operador A" está autenticado e pertence à "Empresa Logística A"
  E existe um usuário "Operador B" pertencente à "Empresa Logística B"
  Quando o "Operador A" consultar a grid de gestão de fretes expresso
  Então o sistema deve aplicar o filtro de escopo Multi-Tenancy
  E exibir apenas as solicitações de frete pertencentes à "Empresa Logística A"
  E não deve permitir a visualização de registros pertencentes à "Empresa Logística B"
```

---

### 🔹 Cenário 6: Controle de Acesso Baseado em Perfis (RBAC)
```gherkin
@security @rbac @perfis_acesso
Cenário: TC_CORE_006 - Restrição de funcionalidades por perfil de acesso (Operador vs Aprovador vs Admin)
  Dado que o usuário está autenticado com o perfil "Operador Solicitante"
  Quando tentar acessar a funcionalidade de "Aprovação de Código NOX / PFR"
  Então o sistema deve ocultar ou desabilitar os botões de aprovação
  E restringir o acesso apenas a usuários que possuam o perfil "Aprovador" ou "Administrador"
```

---

### 🔹 Cenário 7: Expiração Automática de Sessão por Inatividade
```gherkin
@security @sessao @expiracao
Cenário: TC_CORE_007 - Encerramento automático de sessão e invalidação de token expirado
  Dado que o usuário possui uma sessão ativa no sistema
  Quando o tempo limite de validade do token JWT for atingido sem renovação (Refresh Token)
  E o usuário realizar qualquer ação na interface
  Então a requisição deve ser recusada pelo backend
  E o sistema deve encerrar a sessão local
  E redirecionar o usuário para a tela de login informando "Sessão expirada. Faça login novamente."
```

---

> 🔗 *Retornar à página do módulo: [[02 - Camada Core Security & Governança]].*  
> 🔗 *Retornar ao plano geral: [[Plano de Testes e Estratégia de QA]].*
"""

# Update Page 02 to link to its new BDD subpage
PAGE_02_UPDATED_CONTENT = """# 🛡️ 02 - Camada Core Security & Governança

Esta página detalha os requisitos de **Segurança, Autenticação, Controle de Acesso Baseado em Perfis (RBAC) e Isolamento Multi-Tenancy** que servem de fundação para toda a plataforma Integrator.

---

## 🔑 1. Autenticação e Gestão de Sessão (AuthN)
* **Tokens JWT**: Emissão de tokens de acesso seguros no login via endpoint `/index/` ou `/api/v1/auth/login`.
* **Credenciais de Homologação QA**: `luis.junior@opah.com.br` / `abc123456`.
* **Cenários Automatizados**:
  * `TC_CORE_001`: Autenticação com credenciais válidas (`luis.junior@opah.com.br`).
  * `TC_CORE_002`: Bloqueio de login com senha incorreta / e-mail inválido.

---

## 🚫 2. Proteção de Rotas e Segurança de API (AuthZ & RouteGuards)
* **RouteGuards Angular**: Impedem a navegação via URL direta para telas internas (ex: `/admin/empresas`, `/pages/freteexpresso`) caso o usuário não possua sessão autenticada.
* **Segurança de Endpoints REST**: A API Backend intercepta requisições sem o cabeçalho `Authorization: Bearer <TOKEN>` e retorna status de erro HTTP 401 Unauthorized ou 403 Forbidden.
* **Cenários Automatizados**:
  * `TC_CORE_003`: Bloqueio de rota Angular não autorizada pelo Route Guard.
  * `TC_CORE_004`: Bloqueio de requisições REST API sem cabeçalho de autorização.

---

## 🏢 3. Isolamento Multi-Tenancy e Controle de Acesso (RBAC)
* **Multi-Tenancy por Empresa/Grupo**: Garantia de que os dados de solicitações de frete de uma empresa/grupo logístico não fiquem visíveis para usuários de outras empresas.
* **Controle Baseado em Perfis (RBAC)**:
  * **Operador Solicitante**: Cria solicitações e visualiza apenas seus rascunhos.
  * **Comprador/Cotador**: Registra valores de frete e prazos de transportadoras.
  * **Aprovador**: Aprova valores na mesa de aprovação e vincula Código NOX/PFR.
  * **Fiscal**: Valida aspectos fiscais na Etapa 5.
* **Cenários Automatizados**:
  * `TC_CORE_005`: Garantia de isolamento de dados por empresa/grupo.
  * `TC_CORE_006`: Validação de permissões por perfil de usuário.

---

## 🥒 4. Cenários BDD Gherkin

Para visualizar os 7 cenários BDD em formato Dado/Quando/Então da camada de segurança, acesse a sub-página:

👉 **[[02 - Camada Core Security & Governança/Cenários BDD Gherkin]]**

---

> 🔗 *Retornar à página principal: [[Plano de Testes e Estratégia de QA]].*
"""

if __name__ == '__main__':
    create_or_update_page('/Plano de Testes e Estratégia de QA/02 - Camada Core Security & Governança', PAGE_02_UPDATED_CONTENT)
    create_or_update_page('/Plano de Testes e Estratégia de QA/02 - Camada Core Security & Governança/Cenários BDD Gherkin', BDD_SECURITY_CONTENT)
