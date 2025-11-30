
class ProductDB {
  constructor(key='prod_v3'){ this.key=key; this._seed(); }
  _seed(){
    if(!localStorage.getItem(this.key)){
      const sample=[
        {id:this._id(), name:'Camiseta Branca', code:'CAM001', category:'Vestuário', quantity:25, price:4500, reorder:5, notes:'S/M/L', image:null},
        {id:this._id(), name:'Teclado USB', code:'TEC002', category:'Periféricos', quantity:8, price:7500, reorder:3, notes:'USB 2.0', image:null}
      ];
      localStorage.setItem(this.key, JSON.stringify(sample));
    }
  }
  _id(){return 'p_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7);}
  all(){try{return JSON.parse(localStorage.getItem(this.key))||[];}catch(e){return []}}
  saveAll(arr){localStorage.setItem(this.key, JSON.stringify(arr));}
  add(prod){const all=this.all(); prod.id=this._id(); all.unshift(prod); this.saveAll(all); return prod;}
  update(id,patch){const all=this.all(); const i=all.findIndex(x=>x.id===id); if(i===-1) return null; all[i]=Object.assign({},all[i],patch); this.saveAll(all); return all[i];}
  remove(id){let all=this.all(); all=all.filter(x=>x.id!==id); this.saveAll(all);}
  find(id){return this.all().find(x=>x.id===id);}
  import(jsonStr){try{const p=JSON.parse(jsonStr); if(Array.isArray(p)){ this.saveAll(p); return true;}}catch(e){} return false;}
}
window.DB = new ProductDB();

// orders and messages
function saveOrder(order){
  const key='orders_v1'; const arr=JSON.parse(localStorage.getItem(key)||'[]'); arr.unshift(order); localStorage.setItem(key,JSON.stringify(arr)); return order;
}
function listOrders(){ return JSON.parse(localStorage.getItem('orders_v1')||'[]'); }
function saveMessage(msg){ const key='msgs_v1'; const arr=JSON.parse(localStorage.getItem(key)||'[]'); arr.push(msg); localStorage.setItem(key,JSON.stringify(arr)); }
function listMessages(){ return JSON.parse(localStorage.getItem('msgs_v1')||'[]'); }
