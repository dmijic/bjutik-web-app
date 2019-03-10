const tweets = [
  {id:1, name:'Klasicna manikura', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Klasicna manikura', user_type:'Njega ruku'},
{id:2, name:'Lakiranje', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Lakiranje', user_type:'Njega ruku'},
{id:3, name:'French lakiranje', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about French lakiranje', user_type:'Njega ruku'},
{id:4, name:'Shellac manikura IBX tretman - prva aplikacija', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Shellac manikura IBX tretman - prva aplikacija', user_type:'Njega ruku'},
{id:5, name:'IBX tretman Shellac + IBX - prva aplikacija', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about IBX tretman Shellac + IBX - prva aplikacija', user_type:'Njega ruku'},
{id:6, name:'IBX tretman Shellac + IBX', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about IBX tretman Shellac + IBX', user_type:'Njega ruku'},
{id:7, name:'Shellac + IBX - prva aplikacija', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Shellac + IBX - prva aplikacija', user_type:'Njega ruku'},
{id:8, name:'Shellac + IBX', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Shellac + IBX', user_type:'Njega ruku'},
{id:9, name:'Piling/maska za njegu', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Piling/maska za njegu', user_type:'Njega ruku'},
{id:10, name:'Popravak nokta', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Popravak nokta', user_type:'Njega ruku'},
{id:11, name:'Ugradnja noktiju - produživanje', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Ugradnja noktiju - produživanje', user_type:'Njega ruku'},
{id:12, name:'Geliranje prirodnih noktiju', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Geliranje prirodnih noktiju', user_type:'Njega ruku'},
{id:13, name:'Mjesecna korekcija - gel', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Mjesecna korekcija - gel', user_type:'Njega ruku'},
{id:14, name:'Nail art', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Nail art', user_type:'Njega ruku'},
{id:15, name:'Skidanje gela', handle:'Njega ruku', img:'rsrcs/Njega ruku.png', tweet:'random text about Skidanje gela', user_type:'Njega ruku'},
{id:16, name:'Kozmeticka pedikura + lakiranje ', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about Kozmeticka pedikura + lakiranje ', user_type:'Njega stopala'},
{id:17, name:'Kozmeticka pedikura + Shellac', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about Kozmeticka pedikura + Shellac', user_type:'Njega stopala'},
{id:18, name:'SPA kozmeticka pedikura (maska + piling + masaža) ', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about SPA kozmeticka pedikura (maska + piling + masaža) ', user_type:'Njega stopala'},
{id:19, name:'SPA kozmeticka pedikura + Shellac (maska + piling + masaža) ', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about SPA kozmeticka pedikura + Shellac (maska + piling + masaža) ', user_type:'Njega stopala'},
{id:20, name:'Shellac njega stopala ', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about Shellac njega stopala ', user_type:'Njega stopala'},
{id:21, name:'Njega stopala + lakiranje ', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about Njega stopala + lakiranje ', user_type:'Njega stopala'},
{id:22, name:'Korekcija nožnog palca (kom) ', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about Korekcija nožnog palca (kom) ', user_type:'Njega stopala'},
{id:23, name:'Maska/piling/masaža (kom)', handle:'Njega stopala', img:'rsrcs/Njega stopala.png', tweet:'random text about Maska/piling/masaža (kom)', user_type:'Njega stopala'},
{id:24, name:'Threading obrva ', handle:'Threading (depilacija koncem)', img:'rsrcs/Threading (depilacija koncem).png', tweet:'random text about Threading obrva ', user_type:'Threading (depilacija koncem)'},
{id:25, name:'Threading obrva + boja ', handle:'Threading (depilacija koncem)', img:'rsrcs/Threading (depilacija koncem).png', tweet:'random text about Threading obrva + boja ', user_type:'Threading (depilacija koncem)'},
{id:26, name:'Threading nausnica/zulufi/uho ', handle:'Threading (depilacija koncem)', img:'rsrcs/Threading (depilacija koncem).png', tweet:'random text about Threading nausnica/zulufi/uho ', user_type:'Threading (depilacija koncem)'},
{id:27, name:'Threading brada/lice ', handle:'Threading (depilacija koncem)', img:'rsrcs/Threading (depilacija koncem).png', tweet:'random text about Threading brada/lice ', user_type:'Threading (depilacija koncem)'},
{id:28, name:'Bojanje obrva', handle:'Threading (depilacija koncem)', img:'rsrcs/Threading (depilacija koncem).png', tweet:'random text about Bojanje obrva', user_type:'Threading (depilacija koncem)'}
]

Vue.component('tweet-component', {
  template:  `
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="tweet.img">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small></p>
              <p>{{tweet.tweet}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    `,
  props: {
    tweet: Object
  }
});

new Vue({
  el: '#app',
  data: {
    tweets,
    user_type: 'all',
  },
  methods: {
    update_source: function(user_type){
				this.user_type = user_type;
        console.log(user_type);
			}
  }
});