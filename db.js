// db.js - localStorage simple DB
class ProductDB {
  constructor(key='prod_db_v2'){ this.key=key; this._seed(); }
  _seed(){
    if(!localStorage.getItem(this.key)){
      const sample = [
        {id:this._id(), name:'Camiseta Branca', code:'CAM001', category:'Vestuário', quantity:25, price:4500, reorder:5, notes:'S/M/L'},
        {id:this._id(), name:'Teclado USB', code:'TEC002', category:'Periféricos', quantity:8, price:7500, reorder:3, notes:''},
        {id:this._id(), name:'Cabo HDMI 2m', code:'CAB003', category:'Acessórios', quantity:50, price:1200, reorder:10, notes:''}
      ];
      localStorage.setItem(this.key, JSON.stringify(sample));
    }
  }
  _id(){ return 'p_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7); }
  all(){ try{ return JSON.parse(localStorage.getItem(this.key))||[] }catch(e){return[]}}
  saveAll(arr){ localStorage.setItem(this.key, JSON.stringify(arr)); }
  add(prod){ const a=this.all(); prod.id=this._id(); a.unshift(prod); this.saveAll(a); return prod; }
  update(id,patch){ const a=this.all(); const i=a.findIndex(x=>x.id===id); if(i===-1) return null; a[i]=Object.assign({},a[i],patch); this.saveAll(a); return a[i]; }
  remove(id){ let a=this.all(); a=a.filter(x=>x.id!==id); this.saveAll(a); }
  find(id){ return this.all().find(x=>x.id===id); }
  import(jsonStr){ try{ const p=JSON.parse(jsonStr); if(Array.isArray(p)){ this.saveAll(p); return true }}catch(e){} return false; }
}
window.DB = new ProductDB();
