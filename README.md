Projeto: Loja Avançada - EL Serviços Técnicos

Arquivos importantes:
- gestao.html: Painel de gestão (CRUD)
- vendas.html: Loja com carrinho, PayPal sandbox e IBAN transfer
- vitrine.html: Vitrine pública
- dashboard.html: Dashboard com gráficos (Chart.js)
- db.js: Banco localStorage
- auth.js: Autenticação simples (protótipo)
- manifest.json, sw.js: PWA
- style.css: Estilos (tema baseado no logo)
- logo.png: Seu logo fornecido

Instruções rápidas:
1. Descompacte o ZIP.
2. Abra vitrine.html no navegador para ver a loja (ou use um servidor local).
3. Para PWA and Service Worker, hospede os ficheiros em um servidor (ex: GitHub Pages, Netlify).
4. PayPal atual: sandbox (client-id=test). Para produção substitua client-id.
5. Stripe: necessita backend; veja README para integrar.

IBAN/Transferência: dados de exemplo no checkout. Para produção ajuste com dados reais.

Segurança: este projecto usa auth client-side e localStorage — apenas para protótipo. Em produção use backend seguro.
