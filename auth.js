// auth.js - simple client-side auth (for prototype only)
const Auth = {
  key: 'loja_user',
  seed(){
    if(!localStorage.getItem('loja_users')){
      const users=[{username:'admin',password:'admin123',role:'admin'}];
      localStorage.setItem('loja_users', JSON.stringify(users));
    }
  },
  login(u,p){
    const users = JSON.parse(localStorage.getItem('loja_users')||'[]');
    const found = users.find(x=>x.username===u && x.password===p);
    if(found) localStorage.setItem(this.key, JSON.stringify({username:found.username,role:found.role}));
    return !!found;
  },
  logout(){ localStorage.removeItem(this.key); },
  current(){ return JSON.parse(localStorage.getItem(this.key)||'null'); }
};
Auth.seed();
