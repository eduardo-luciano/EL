
Loja - Projeto Completo (Cliente-side prototype)
Arquivos principais:
- index.html / vitrine.html: página pública da loja
- vendas.html: loja com carrinho + checkout (IBAN / PayPal sandbox / Stripe placeholder)
- gestao.html: painel de gestão (protegido por sessão)
- dashboard.html: gráficos (Chart.js)
- chat.html: chat com clientes (localStorage polling, prototype)
- seo.html: página para SEO/admin visualizar contatos e pedidos
- db.js, app.js, auth.js: lógica e helpers
- style.css, manifest.json, sw.js: UI e PWA
- README: instruções

Nota de segurança: projeto é protótipo totalmente client-side. Para produção implemente backend seguro para auth, storage de imagens e pagamentos.


Realtime chat: current prototype uses localStorage polling. For real-time, integrate Firebase Realtime Database or Firestore and update chat.html accordingly.
Deployment: host files on static hosting (Netlify, GitHub Pages) to enable PWA and SW.
