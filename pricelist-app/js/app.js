const pricelist_items = [
  {id:1, name:'Klasicna manikura', category:'Njega ruku', price:'50'},
  {id:2, name:'Lakiranje', category:'Njega ruku', price:'20'},
  {id:3, name:'French lakiranje', category:'Njega ruku', price:'40'},
  {id:4, name:'Shellac manikura IBX tretman - prva aplikacija', category:'Njega ruku', price:'130'},
  {id:5, name:'IBX tretman Shellac + IBX - prva aplikacija', category:'Njega ruku', price:'130'},
  {id:6, name:'IBX tretman Shellac + IBX', category:'Njega ruku', price:'100'},
  {id:7, name:'Shellac + IBX - prva aplikacija', category:'Njega ruku', price:'180'},
  {id:8, name:'Shellac + IBX', category:'Njega ruku', price:'160'},
  {id:9, name:'Piling/maska za njegu', category:'Njega ruku', price:'20'},
  {id:10, name:'Popravak nokta', category:'Njega ruku', price:'10'},
  {id:11, name:'Ugradnja noktiju - produživanje', category:'Njega ruku', price:'280'},
  {id:12, name:'Geliranje prirodnih noktiju', category:'Njega ruku', price:'200'},
  {id:13, name:'Mjesecna korekcija - gel', category:'Njega ruku', price:'160'},
  {id:14, name:'Nail art', category:'Njega ruku', price:'20'},
  {id:15, name:'Skidanje gela', category:'Njega ruku', price:'50'},
  {id:16, name:'Kozmeticka pedikura + lakiranje ', category:'Njega stopala', price:'130'},
  {id:17, name:'Kozmeticka pedikura + Shellac', category:'Njega stopala', price:'180'},
  {id:18, name:'SPA kozmeticka pedikura (maska + piling + masaža) ', category:'Njega stopala', price:'180'},
  {id:19, name:'SPA kozmeticka pedikura + Shellac (maska + piling + masaža) ', category:'Njega stopala', price:'230'},
  {id:20, name:'Shellac njega stopala ', category:'Njega stopala', price:'100'},
  {id:21, name:'Njega stopala + lakiranje ', category:'Njega stopala', price:'60'},
  {id:22, name:'Korekcija nožnog palca (kom) ', category:'Njega stopala', price:'20'},
  {id:23, name:'Maska/piling/masaža (kom)', category:'Njega stopala', price:'20'},
  {id:24, name:'Threading obrva ', category:'Threading (depilacija koncem)', price:'60'},
  {id:25, name:'Threading obrva + boja ', category:'Threading (depilacija koncem)', price:'80'},
  {id:26, name:'Threading nausnica/zulufi/uho ', category:'Threading (depilacija koncem)', price:'20'},
  {id:27, name:'Threading brada/lice ', category:'Threading (depilacija koncem)', price:'30'},
  {id:28, name:'Bojanje obrva', category:'Threading (depilacija koncem)', price:'30'},
  {id:32, name:'Ruski volumen - ugradnja ekstenzija', category:'Trepavice', price:'400'},
  {id:33, name:'Ruski volumen-korekcija 2 tjedna', category:'Trepavice', price:'100'},
  {id:34, name:'Ruski volumen -korekcija 3 tjedna', category:'Trepavice', price:'150'},
  {id:35, name:'Ruski volumen- korekcija 4 tjedna', category:'Trepavice', price:'200'},
  {id:36, name:'Klasične trepavice - ugradnja ekstenzija', category:'Trepavice', price:'300'},
  {id:37, name:'Klasične trepavice -korekcija 2 tjedna ', category:'Trepavice', price:'80'},
  {id:38, name:'Klasične trepavice -korekcija 3 tjedna', category:'Trepavice', price:'120'},
  {id:39, name:'Klasične trepavice- korekcija 4 tjedna', category:'Trepavice', price:'160'},
  {id:40, name:'Skidanje ekstenzija trepavica', category:'Trepavice', price:'50'},
  {id:41, name:'Lash lift', category:'Trepavice', price:'150'},
  {id:42, name:'Lash lift + boja', category:'Trepavice', price:'170'},
  {id:43, name:'Bojanje trepavica', category:'Trepavice', price:'40'},
  {id:44, name:'BIKINI', category:'Depilacija (hladni vosak)', price:'40'},
  {id:45, name:'POLA RUKU', category:'Depilacija (hladni vosak)', price:'50'},
  {id:46, name:'CIJELE RUKE', category:'Depilacija (hladni vosak)', price:'70'},
  {id:47, name:'TRBUH ', category:'Depilacija (hladni vosak)', price:'50'},
  {id:48, name:'PRSA', category:'Depilacija (hladni vosak)', price:'60'},
  {id:49, name:'LEĐA', category:'Depilacija (hladni vosak)', price:'80'},
  {id:50, name:'CIJELE NOGE', category:'Depilacija (hladni vosak)', price:'110'},
  {id:51, name:'POLA NOGU', category:'Depilacija (hladni vosak)', price:'60'},
  {id:52, name:'BIKINI', category:'Depilacija (šećerna pasta)', price:'60'},
  {id:53, name:'DUBOKI BIKINI', category:'Depilacija (šećerna pasta)', price:'90'},
  {id:54, name:'BRAZILKA', category:'Depilacija (šećerna pasta)', price:'130'},
  {id:55, name:'POLA RUKU', category:'Depilacija (šećerna pasta)', price:'80'},
  {id:56, name:'CIJELE RUKE', category:'Depilacija (šećerna pasta)', price:'100'},
  {id:57, name:'PAZUH', category:'Depilacija (šećerna pasta)', price:'50'},
  {id:58, name:'TRBUH ', category:'Depilacija (šećerna pasta)', price:'80'},
  {id:59, name:'PRSA', category:'Depilacija (šećerna pasta)', price:'120'},
  {id:60, name:'LEĐA', category:'Depilacija (šećerna pasta)', price:'140'},
  {id:61, name:'CIJELE NOGE', category:'Depilacija (šećerna pasta)', price:'180'},
  {id:62, name:'POLA NOGU', category:'Depilacija (šećerna pasta)', price:'100'},
  {id:63, name:'Klasična masaža - parcijalna (30 min)', category:'Masaža', price:'100'},
  {id:64, name:'Klasična masaža (60 min)', category:'Masaža', price:'180'},
  {id:65, name:'Sportska masaža - parcijalna (30 min)', category:'Masaža', price:'120'},
  {id:66, name:'Sportska masaža  (60 min)', category:'Masaža', price:'200'},
  {id:67, name:'Anticelilutna masaža (45 min)', category:'Masaža', price:'100'},
  {id:68, name:'Masaža stopala (20 min)', category:'Masaža', price:'50'},
  {id:69, name:'Poklon kartica (predujam)', category:'Poklon kartice', price:'100'},
  {id:70, name:'Poklon kartica (predujam)', category:'Poklon kartice', price:'200'},
  {id:71, name:'Poklon kartica (predujam)', category:'Poklon kartice', price:'300'},
  {id:72, name:'Paket anticelulitna masaža 9+1', category:'Paketi', price:'900'},
  {id:73, name:'Paket 1 - mladenka ', category:'Paketi', price:'370'},
  {id:74, name:'Paket 2 - mladenka', category:'Paketi', price:'650'},
  {id:75, name:'Paket 3 - mladenka', category:'Paketi', price:'700'},
  {id:76, name:'Naknada za propušteni termin ( do 1 h)', category:'Propušteni termin', price:'50'},
  {id:77, name:'Naknada za propušteni termin (od 1h do 2h)', category:'Propušteni termin', price:'100'},
  {id:78, name:'Naknada za propušteni termin od 2h do 3 h)', category:'Propušteni termin', price:'150'},
  {id:79, name:'NAKNADA ZA PROPUŠTENI TERMIN (više od 3 h)', category:'Propušteni termin', price:'200'}
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
    specialOfferActive: false
  },
  methods: {
    update_source: function(category){
				this.category = category;
        console.log(category);
			}
  }
});