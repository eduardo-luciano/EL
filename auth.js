
const Auth = {
  key:'user_v1',
  seed(){ if(!localStorage.getItem('users_v1')){ const users=[{username:'admin',password:'admin123',role:'admin'}]; localStorage.setItem('users_v1',JSON.stringify(users)); } },
  login(u,p){ const users=JSON.parse(localStorage.getItem('users_v1')||'[]'); const found=users.find(x=>x.username===u && x.password===p); if(found) sessionStorage.setItem(this.key, JSON.stringify({username:found.username,role:found.role})); return !!found; },
  logout(){ sessionStorage.removeItem(this.key); },
  current(){ return JSON.parse(sessionStorage.getItem(this.key)||'null'); }
};
Auth.seed();
