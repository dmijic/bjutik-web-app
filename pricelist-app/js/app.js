const pricelist_items = [
{id:1, name:'Klasicna manikura', category:'Njega ruku', price:'100,00'},
{id:2, name:'Lakiranje', category:'Njega ruku', price:'100,00'},
{id:3, name:'French lakiranje', category:'Njega ruku', price:'100,00'},
{id:4, name:'Shellac manikura IBX tretman - prva aplikacija',category:'Njega ruku', price:'100,00'},
{id:5, name:'IBX tretman Shellac + IBX - prva aplikacija', category:'Njega ruku', price:'100,00'},
{id:6, name:'IBX tretman Shellac + IBX', category:'Njega ruku', price:'100,00'},
{id:7, name:'Shellac + IBX - prva aplikacija', category:'Njega ruku', price:'100,00'},
{id:8, name:'Shellac + IBX', category:'Njega ruku', price:'100,00'},
{id:9, name:'Piling/maska za njegu', category:'Njega ruku', price:'100,00'},
{id:10, name:'Popravak nokta', category:'Njega ruku', price:'100,00'},
{id:11, name:'Ugradnja noktiju - produživanje', category:'Njega ruku', price:'100,00'},
{id:12, name:'Geliranje prirodnih noktiju', category:'Njega ruku', price:'100,00'},
{id:13, name:'Mjesecna korekcija - gel', category:'Njega ruku', price:'100,00'},
{id:14, name:'Nail art', category:'Njega ruku', price:'100,00'},
{id:15, name:'Skidanje gela', category:'Njega ruku', price:'100,00'},
{id:16, name:'Kozmeticka pedikura + lakiranje ', category:'Njega stopala', price:'150,00'},
{id:17, name:'Kozmeticka pedikura + Shellac', category:'Njega stopala', price:'150,00'},
{id:18, name:'SPA kozmeticka pedikura (maska + piling + masaža) ', category:'Njega stopala', price:'150,00'},
{id:19, name:'SPA kozmeticka pedikura + Shellac (maska + piling + masaža) ', category:'Njega stopala', price:'150,00'},
{id:20, name:'Shellac njega stopala ', category:'Njega stopala', price:'150,00'},
{id:21, name:'Njega stopala + lakiranje ', category:'Njega stopala', price:'150,00'},
{id:22, name:'Korekcija nožnog palca (kom) ', category:'Njega stopala', price:'150,00'},
{id:23, name:'Maska/piling/masaža (kom)', category:'Njega stopala', price:'150,00'},
{id:24, name:'Threading obrva ', category:'Threading (depilacija koncem)', price:'50,00'},
{id:25, name:'Threading obrva + boja ', category:'Threading (depilacija koncem)', price:'50,00'},
{id:26, name:'Threading nausnica/zulufi/uho ', category:'Threading (depilacija koncem)', price:'50,00'},
{id:27, name:'Threading brada/lice ', category:'Threading (depilacija koncem)', price:'50,00'},
{id:28, name:'Bojanje obrva', category:'Threading (depilacija koncem)', price:'50,00'}
]

Vue.component('pricelist-component', {
  template:  `
    <div class="pricelist-item">
              <p><span class="strong">{{pricelist_item.name}}</span><span class="price">{{ pricelist_item.price }} kn</span><span class="dots"></span></p>
    </div>
    `,
  props: {
    pricelist_item: Object
  }
});

new Vue({
  el: '#app',
  data: {
    pricelist_items,
    category: 'all',
  },
  methods: {
    update_source: function(category){
				this.category = category;
        console.log(category);
			}
  }
});