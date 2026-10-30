@echo off
chcp 65001 > nul
echo ========================================================
echo  ILC Integrator - Gerador de PDF da Central de QA
echo ========================================================
echo.
echo Processando geracao do PDF via Microsoft Edge Headless...

set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE_PATH%" (
    set "EDGE_PATH=C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)
if not exist "%EDGE_PATH%" (
    set "EDGE_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe"
)

set "HTML_DIR=%~dp0..\docs-portal"
set "HTML_DIR=%HTML_DIR:\=/%"
set "HTML_INPUT=file:///%HTML_DIR%/export_central_qa.html"
set "PDF_OUTPUT=%~dp0..\Central_de_QA_ILC_Integrator.pdf"
set "PDF_DEST_IT=%~dp0..\Instruções de Trabalho ILC\Central de QA - Diretrizes Mestras de Qualidade ILC Integrator.pdf"

"%EDGE_PATH%" --headless --disable-gpu --virtual-time-budget=4000 --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="%PDF_OUTPUT%" "%HTML_INPUT%"

if exist "%PDF_OUTPUT%" (
    echo [SUCESSO] PDF principal gerado com sucesso em:
    echo  - %PDF_OUTPUT%
    copy /Y "%PDF_OUTPUT%" "%PDF_DEST_IT%" > nul
    echo [SUCESSO] Copia sincronizada na pasta de ITs / Base de Conhecimento:
    echo  - %PDF_DEST_IT%
) else (
    echo [ERRO] Nao foi possivel gerar o arquivo PDF.
)

echo.
pause
