(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,function(e,t,a){e.exports={PageSwitchContainer:"PageSwitch_PageSwitchContainer__rUIS0",pageSwitchButton:"PageSwitch_pageSwitchButton__2mTbs",activeButton:"PageSwitch_activeButton__33aiZ"}},,,,,function(e,t,a){e.exports={cart__container:"Cart_cart__container__3-8HX",cart__containerPrice:"Cart_cart__containerPrice___NJvM",cart__containerButton:"Cart_cart__containerButton__2zLCj",listItems:"Cart_listItems__WY9dz",container__price:"Cart_container__price__16glM",container__button:"Cart_container__button__1PnTA",cartIsEmptyWrapper:"Cart_cartIsEmptyWrapper__342NN",cartIsEmpty:"Cart_cartIsEmpty__1Nx4L",backdropFadeIn:"Cart_backdropFadeIn__1cl-G"}},function(e,t,a){e.exports={cart__container:"CartCon_cart__container__RpCl9",cart__containerPrice:"CartCon_cart__containerPrice__1V0sg",cart__containerButton:"CartCon_cart__containerButton__23gSZ",listItems:"CartCon_listItems__3ARg7",container__price:"CartCon_container__price__OQ3KL",container__button:"CartCon_container__button__OyqtZ",cartIsEmptyWrapper:"CartCon_cartIsEmptyWrapper__OarB8",cartIsEmpty:"CartCon_cartIsEmpty__369WF",backdropFadeIn:"CartCon_backdropFadeIn__37SAy"}},,,,,function(e,t,a){e.exports={NavContainer:"Navbar_NavContainer__15D-h",active:"Navbar_active__1xO_1",item:"Navbar_item__3y19U"}},function(e,t,a){e.exports={footerContainer:"Footer_footerContainer__1sTDw",listContainer:"Footer_listContainer__3DEr6",active:"Footer_active__33nX1",iconContainer:"Footer_iconContainer__3vbmQ",git:"Footer_git__2ejen"}},function(e,t,a){e.exports={learnMoreWrapper:"LearnMore_learnMoreWrapper__3KRV2",deliveryHeader:"LearnMore_deliveryHeader__2FGZb",deliveryPolicy:"LearnMore_deliveryPolicy__2fj-V",trustedWrapper:"LearnMore_trustedWrapper__1oWwl",trustedLogo:"LearnMore_trustedLogo__1GWIs"}},,,function(e,t,a){e.exports={pokemonContainer:"Pokemon_pokemonContainer__AJ8dC",pokemonContainer__headerMain:"Pokemon_pokemonContainer__headerMain__2vnVe",pokemonContainer__headerSub:"Pokemon_pokemonContainer__headerSub__3v789",cardContainer:"Pokemon_cardContainer__14GXL",typeList:"Pokemon_typeList__2Sl_T",pokemonContainer__addToCartButton:"Pokemon_pokemonContainer__addToCartButton__2KY7x",addedToCart:"Pokemon_addedToCart__1-POR"}},function(e,t,a){e.exports={contactWrapper:"ContactUs_contactWrapper__2kkkK",contactInfoContainer:"ContactUs_contactInfoContainer__3JKYm",contactUsFa:"ContactUs_contactUsFa__1bgDT"}},,,,,,function(e,t,a){e.exports={SearchContainer:"Search_SearchContainer__2_oVO",SearchContainer__label:"Search_SearchContainer__label__39kTt",SearchContainer__input:"Search_SearchContainer__input__3nMtG"}},,,,,function(e,t,a){e.exports={cartContainer:"ShowCart_cartContainer__2htqv",addedToCart:"ShowCart_addedToCart__1xKk8"}},,,,,function(e,t,a){e.exports={CardsShopContainer:"PokemonRenderer_CardsShopContainer__Ztaag"}},,,,function(e,t,a){e.exports=a(55)},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a(34),l=a.n(o),i=(a(45),a(10)),s=a(11),m=a(13),u=a(12),p=a(1),_=a(25),h=a(39),d=a(23),C=a.n(d),E=a(28),f=function(e){return e.children},g=a(14),b=a.n(g),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.match!==e.match}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:b.a.NavContainer},r.a.createElement("li",{className:b.a.item},r.a.createElement(c.c,{activeClassName:b.a.active,to:"/",exact:!0},"Shop")),r.a.createElement("li",{className:b.a.item},r.a.createElement(c.c,{activeClassName:b.a.active,to:"/contact",exact:!0},"Contact Us")),r.a.createElement("li",{className:b.a.item},r.a.createElement(c.c,{activeClassName:b.a.active,to:"/learn-more",exact:!0},"Learn More"))))}}]),a}(n.Component),k=function(e){return Object(n.useEffect)((function(){}),[]),r.a.createElement(f,null,e.eachPokemon.length>1&&!e.error?r.a.createElement("h1",{style:{fontFamily:"Krona One"},className:"shopHeader"},"Welcome to the Pokemon Shop!"):e.error?r.a.createElement("h1",null,"Try refershing the page. An error has occured"):r.a.createElement("h1",null,"Loading..."))},v=a(19),P=a.n(v),N=function e(t){return r.a.createElement(f,null,r.a.createElement("div",{className:P.a.pokemonContainer},r.a.createElement("div",{className:P.a.cardContainer},r.a.createElement("h2",{className:P.a.pokemonContainer__headerMain},r.a.createElement("span",{style:{textTransform:"capitalize"}},t.title))),r.a.createElement("h4",{className:P.a.pokemonContainer__headerSub},"Main Ability: ",r.a.createElement("span",{style:{textTransform:"capitalize"}},t.ability)),r.a.createElement("ul",{className:P.a.typeList},"Types:"),r.a.createElement("li",null,r.a.createElement("span",{style:{textTransform:"capitalize"}},r.a.createElement("span",null,t.type1))),t.type2?r.a.createElement("li",null,r.a.createElement("span",{style:{textTransform:"capitalize"}},r.a.createElement("span",null,t.type2))):null,r.a.createElement("p",null,"Base Stat: ",t.stat),r.a.createElement("img",{src:t.image,alt:e.name}),r.a.createElement("p",null,"Price: $",t.price/10),r.a.createElement("button",{onClick:t.addPokemonToCart,className:P.a.pokemonContainer__addToCartButton},"Add to cart")))},S=a(36),w=a.n(S),I=function(e){return Object(n.useEffect)((function(){}),[e.eachPokemon]),r.a.createElement("div",{className:w.a.CardsShopContainer},1===e.currentPage&&""===e.filter?e.eachPokemon.slice(0,20).map((function(t){return r.a.createElement(N,{title:t.name,key:t.order,ability:t.abilities[0].ability.name,stat:t.stats[0].base_stat,type1:t.types[0].type.name,type2:t.types[1]?t.types[1].type.name:null,image:t.sprites.front_default,price:t.weight,addPokemonToCart:function(){return e.addItemToCartHandler(t.weight,t.name,t.order,t.sprites.front_default)}})})):2===e.currentPage&&""===e.filter?e.eachPokemon.slice(21,41).map((function(t){return r.a.createElement(N,{title:t.name,key:t.order,ability:t.abilities[0].ability.name,stat:t.stats[0].base_stat,type1:t.types[0].type.name,type2:t.types[1]?t.types[1].type.name:null,image:t.sprites.front_default,price:t.weight,addPokemonToCart:function(){return e.addItemToCartHandler(t.weight,t.name,t.order,t.sprites.front_default)}})})):3===e.currentPage&&""===e.filter?e.eachPokemon.slice(42,61).map((function(t){return r.a.createElement(N,{title:t.name,key:t.order,ability:t.abilities[0].ability.name,stat:t.stats[0].base_stat,type1:t.types[0].type.name,type2:t.types[1]?t.types[1].type.name:null,image:t.sprites.front_default,price:t.weight,addPokemonToCart:function(){return e.addItemToCartHandler(t.weight,t.name,t.order,t.sprites.front_default)}})})):""!==e.filter?e.eachPokemon.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(t){return r.a.createElement(N,{title:t.name,key:t.order,ability:t.abilities[0].ability.name,stat:t.stats[0].base_stat,type1:t.types[0].type.name,type2:t.types[1]?t.types[1].type.name:null,image:t.sprites.front_default,price:t.weight,addPokemonToCart:function(){return e.addItemToCartHandler(t.weight/10,t.name,t.order,t.sprites.front_default)}})})):null)},x=a(3),T=a.n(x),O=function(e){return Object(n.useEffect)((function(){}),[e.currentPage]),r.a.createElement(f,null,1===e.currentPage?r.a.createElement("div",{className:T.a.PageSwitchContainer},r.a.createElement("button",{className:"".concat(T.a.activeButton," ").concat(T.a.pageSwitchButton),onClick:e.switchPageHandler},"1"),r.a.createElement("button",{className:T.a.pageSwitchButton,onClick:e.switchPageHandler},"2"),r.a.createElement("button",{className:T.a.pageSwitchButton,onClick:e.switchPageHandler},"3")):2===e.currentPage?r.a.createElement("div",{className:T.a.PageSwitchContainer},r.a.createElement("button",{className:T.a.pageSwitchButton,onClick:e.switchPageHandler},"1"),r.a.createElement("button",{className:"".concat(T.a.activeButton," ").concat(T.a.pageSwitchButton),onClick:e.switchPageHandler},"2"),r.a.createElement("button",{className:T.a.pageSwitchButton,onClick:e.switchPageHandler},"3")):3===e.currentPage?r.a.createElement("div",{className:T.a.PageSwitchContainer},r.a.createElement("button",{className:T.a.pageSwitchButton,onClick:e.switchPageHandler},"1"),r.a.createElement("button",{className:T.a.pageSwitchButton,onClick:e.switchPageHandler},"2"),r.a.createElement("button",{className:"".concat(T.a.activeButton," ").concat(T.a.pageSwitchButton),onClick:e.switchPageHandler},"3")):null)},B=a(26),j=a.n(B),H=function(e){return Object(n.useEffect)((function(){}),[e.searchInput]),r.a.createElement("div",{className:j.a.SearchContainer},r.a.createElement("label",{className:j.a.SearchContainer__label},"Search By Name:"),r.a.createElement("input",{className:j.a.SearchContainer__input,ref:e.aRef,onChange:e.onChange}))},A=a(38),L=a(31),M=a.n(L),W=function(e){var t=Object(n.useState)(e.disableButton),a=Object(A.a)(t,2),c=a[0];a[1];return Object(n.useEffect)((function(){}),[c]),r.a.createElement("div",{className:M.a.cartContainer},r.a.createElement("button",{className:M.a.cartContainer__button,disabled:e.disableButton,onClick:e.priceSumHandler},"Show Cart"))},F=(a(8),a(18)),U=a(15),R=a.n(U),z=function(e){return Object(n.useEffect)((function(){}),[e.active]),r.a.createElement("div",{className:R.a.footerContainer},r.a.createElement("h4",null,"The Pokemon Shop"),r.a.createElement("ul",{className:R.a.listContainer},r.a.createElement("li",null,r.a.createElement(c.c,{activeClassName:R.a.active,to:"/",exact:!0},"Shop")),r.a.createElement("li",null,r.a.createElement(c.c,{activeClassName:R.a.active,to:"/contact",exact:!0},"Contact Us")),r.a.createElement("li",null,r.a.createElement(c.c,{activeClassName:R.a.active,to:"/learn-more",exact:!0},"Learn More"))),r.a.createElement("h4",{style:{textAlign:"center"}},"This site was built by davidOren. All rights reserved ",r.a.createElement("span",{role:"img","aria-label":"default"},"\xa9\ufe0f")),r.a.createElement("div",{className:R.a.iconContainer},r.a.createElement("a",{href:"https://github.com/knowledgeReignsSupreme"},r.a.createElement("p",null,"GitHub:",r.a.createElement("span",null,r.a.createElement(F.c,{className:R.a.git}))))))},G=a(37),D=function(){return r.a.createElement("div",null,r.a.createElement(G.TinyButton,{style:{zIndex:10,backgroundColor:"white"}}))},K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fetchURLs=Object(E.a)(C.a.mark((function e(){var t,a,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[],a=1;case 3:if(!(a<62)){e.next=14;break}return e.next=6,fetch("https://pokeapi.co/api/v2/pokemon/".concat(a,"/"));case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,t.push(c);case 11:a++,e.next=3;break;case 14:n.setState({eachPokemon:t}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),n.setState({error:!0});case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),n.componentDidMount=Object(E.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fetchURLs(),void 0!==n.props.location.state&&n.setState({totalPrice:n.props.location.state.totalPrice,pokemonsInCart:n.props.location.state.pokemonsInCart});case 2:case"end":return e.stop()}}),e)}))),n.switchPageHandler=function(e){n.setState({currentPage:+e.target.textContent})},n.filterSearch=function(){n.setState({filter:n.inputRef.current.value})},n.addItemToCartHandler=function(e,t,a,r){var c=e/10,o=Object(h.a)({},n.state).totalPrice+c,l=Object(_.a)(n.state.pokemonsInCart);l.push({name:t,price:c,key:Math.random(),image:r}),n.setState({pokemonsInCart:l,totalPrice:o,enableCart:!0},(function(){}))},n.saveToHistory=function(){n.props.history.push("/")},n.state={error:!1,eachPokemon:[],currentPage:1,filter:"",totalPrice:0,pokemonsInCart:[],enableCart:void 0!==n.props.location.state},n.inputRef=r.a.createRef(),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f,null,r.a.createElement(D,null),r.a.createElement(y,{active:"Shop",makeActive:this.saveToHistory}),r.a.createElement(k,{shouldUpdate:this.state.eachPokemon,eachPokemon:this.state.eachPokemon,error:this.state.error}),r.a.createElement(c.b,{to:{pathname:"/cart",state:{pokemonsInCart:this.state.pokemonsInCart,totalPrice:this.state.totalPrice}}},r.a.createElement(W,{disableButton:!0===!this.state.enableCart})," "),""===this.state.filter?r.a.createElement(O,{currentPage:this.state.currentPage,switchPageHandler:function(t){return e.switchPageHandler(t)}}):null,this.state.eachPokemon.length>0?r.a.createElement(H,{searchInput:this.state.filter,aRef:this.inputRef,onChange:this.filterSearch}):null,r.a.createElement(I,{currentPage:this.state.currentPage,filter:this.state.filter,eachPokemon:this.state.eachPokemon,addItemToCartHandler:this.addItemToCartHandler}),this.state.eachPokemon.length>1&&""===this.state.filter?r.a.createElement(O,{currentPage:this.state.currentPage,switchPageHandler:function(t){return e.switchPageHandler(t)}}):null,r.a.createElement(z,{active:"Shop"}))}}]),a}(n.Component),J=a(20),V=a.n(J),Z=function(e){return console.log(e.history.location.pathname),r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement("div",{className:V.a.contactWrapper},r.a.createElement("div",{className:V.a.contactInfoContainer},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone:")," +1-202-555-0182 ",r.a.createElement(F.e,{className:V.a.contactUsFa})),r.a.createElement("p",null,r.a.createElement("strong",null,"Facebook:")," ",r.a.createElement("a",{href:"https://www.facebook.com"},r.a.createElement(F.b,{className:V.a.contactUsFa}))),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," pokemonshop@gmail.com ",r.a.createElement(F.d,{className:V.a.contactUsFa})),r.a.createElement("p",null,r.a.createElement("strong",null,"Address:")," New York, 3515 Angus Road ",r.a.createElement(F.a,{className:V.a.contactUsFa})))),r.a.createElement(z,null))},$=a(16),X=a.n($),Y=function(e){return r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement("div",{className:X.a.learnMoreWrapper},r.a.createElement("p",{className:X.a.deliveryHeader},"We offer free ground shipping* on all orders over $29.99, shipping estimates are as below"),r.a.createElement("p",{className:X.a.deliveryPolicy},r.a.createElement("strong",null,"Ground:")," Should arrive 2 to 10 business days after shipment"),r.a.createElement("p",{className:X.a.deliveryPolicy},r.a.createElement("strong",null,"2nd Day:")," Should arrive 2 business days after shipment"),r.a.createElement("p",{className:X.a.deliveryPolicy},r.a.createElement("strong",null,"Overnight:")," Should arrive 1 business day after shipment")),r.a.createElement("div",{className:X.a.trustedWrapper},r.a.createElement("h3",null,"The number 1 Pokemon Shop worldwide!"),r.a.createElement("img",{className:X.a.trustedLogo,src:"https://1.bp.blogspot.com/-Ml2XxH3m4eM/UcyaUAI1tSI/AAAAAAAAB4I/rITnTj5rQGw/s336/689958d494120c88ec09a0ff5c9f2e2a.jpg"})),r.a.createElement(z,null))},Q=a(9),q=a.n(Q),ee=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={itemsInCart:e.props.location.state.pokemonsInCart,totalPrice:+e.props.location.state.totalPrice},e.removeItemFromCart=function(t){var a=Object(_.a)(e.state.itemsInCart).filter((function(e){return e.key!==t})),n=0;a.map((function(e){return 0===a.length?n=0:n+=e.price}));e.setState({itemsInCart:a,totalPrice:n})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f,null,r.a.createElement("div",null,r.a.createElement("div",{className:q.a.cart__container},r.a.createElement("h3",{style:{marginBottom:10,textAlign:"center"}},"Items In Cart:"),r.a.createElement("ul",{className:q.a.cartItemsUl},this.state.itemsInCart.length>0?this.state.itemsInCart.map((function(t,a){return r.a.createElement("li",{key:t.key},r.a.createElement("div",{className:q.a.listItems},r.a.createElement("img",{src:t.image,alt:t.name}),r.a.createElement("span",{style:{textTransform:"capitalize"}},r.a.createElement("strong",null,"Name:")," ",t.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:")," $",t.price),r.a.createElement("button",{onClick:function(){return e.removeItemFromCart(t.key)}},"Delete"),r.a.createElement("hr",null)))})):r.a.createElement("div",{className:q.a.cartIsEmptyWrapper},r.a.createElement("p",{className:q.a.cartIsEmpty},'Cart is empty. Click the "Continue Shopping" button to add Pokemons')))),r.a.createElement("div",{className:q.a.container__price},r.a.createElement("h3",null,"Total Price:"),r.a.createElement("p",{className:q.a.cart__containerPrice},"$",this.state.totalPrice)),r.a.createElement("div",{className:q.a.container__button},r.a.createElement("button",{className:q.a.cart__containerButton},"Checkout ",r.a.createElement("span",{style:{fontSize:11}},"(No backend yet)")),r.a.createElement(c.b,{to:{pathname:"/",state:{totalPrice:this.state.totalPrice,pokemonsInCart:this.state.itemsInCart}}},r.a.createElement("button",{className:q.a.cart__containerButton,onClick:this.state.itemsInCart.cartRemove},"Continue Shopping")))))}}]),a}(n.Component),te=(a(54),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeActive=function(e){var t=e.target.textContent.replace(/\s/g,"");n.setState({currentPage:t})},n.state={currentPage:"Shop"},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:K,exact:!0}),r.a.createElement(p.a,{path:"/contact",component:Z}),r.a.createElement(p.a,{path:"/learn-more",component:Y}),r.a.createElement(p.a,{path:"/cart",component:ee})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{basename:"/pokemonshop"},r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[40,1,2]]]);
//# sourceMappingURL=main.d622ac8f.chunk.js.map