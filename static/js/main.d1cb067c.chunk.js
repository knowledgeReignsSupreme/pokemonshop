(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,,function(e,a,t){e.exports={PageSwitchContainer:"PageSwitch_PageSwitchContainer__rUIS0",pageSwitchButton:"PageSwitch_pageSwitchButton__2mTbs",activeButton:"PageSwitch_activeButton__33aiZ"}},,,function(e,a,t){e.exports={cart__container:"CartCon_cart__container__RpCl9",cart__containerPrice:"CartCon_cart__containerPrice__1V0sg",cart__containerButton:"CartCon_cart__containerButton__23gSZ",listItems:"CartCon_listItems__3ARg7",container__price:"CartCon_container__price__OQ3KL",container__button:"CartCon_container__button__OyqtZ",cartIsEmptyWrapper:"CartCon_cartIsEmptyWrapper__OarB8",cartIsEmpty:"CartCon_cartIsEmpty__369WF",hr:"CartCon_hr__10hdr",backdropFadeIn:"CartCon_backdropFadeIn__37SAy"}},,function(e,a,t){e.exports={formWrapper:"Form_formWrapper__1Is4W",formDiv:"Form_formDiv__3Kq47",formButton:"Form_formButton__267Va",confirmationWrapper:"Form_confirmationWrapper__12hsK",confirmationHeader:"Form_confirmationHeader__9zjSL",confirmationSubHeader:"Form_confirmationSubHeader__2Yn0o"}},,,,,function(e,a,t){e.exports={learnMoreWrapper:"LearnMore_learnMoreWrapper__3KRV2",deliveryHeader:"LearnMore_deliveryHeader__2FGZb",deliveryPolicy:"LearnMore_deliveryPolicy__2fj-V",trustedWrapper:"LearnMore_trustedWrapper__1oWwl",trustedLogo:"LearnMore_trustedLogo__1GWIs"}},function(e,a,t){e.exports={footerContainer:"Footer_footerContainer__1sTDw",listContainer:"Footer_listContainer__3DEr6",active:"Footer_active__33nX1",iconContainer:"Footer_iconContainer__3vbmQ",git:"Footer_git__2ejen"}},function(e,a,t){e.exports={NavContainer:"Navbar_NavContainer__15D-h",active:"Navbar_active__1xO_1",item:"Navbar_item__3y19U"}},,,function(e,a,t){e.exports={pokemonContainer:"Pokemon_pokemonContainer__AJ8dC",pokemonContainer__headerMain:"Pokemon_pokemonContainer__headerMain__2vnVe",pokemonContainer__headerSub:"Pokemon_pokemonContainer__headerSub__3v789",cardContainer:"Pokemon_cardContainer__14GXL",typeList:"Pokemon_typeList__2Sl_T",pokemonContainer__addToCartButton:"Pokemon_pokemonContainer__addToCartButton__2KY7x",addedToCart:"Pokemon_addedToCart__1-POR"}},function(e,a,t){e.exports={contactWrapper:"ContactUs_contactWrapper__2kkkK",contactInfoContainer:"ContactUs_contactInfoContainer__3JKYm",contactUsFa:"ContactUs_contactUsFa__1bgDT"}},,,,,function(e,a,t){e.exports={SearchContainer:"Search_SearchContainer__2_oVO",SearchContainer__label:"Search_SearchContainer__label__39kTt",SearchContainer__input:"Search_SearchContainer__input__3nMtG"}},,,function(e,a,t){e.exports={cartContainer:"ShowCart_cartContainer__2htqv",addedToCart:"ShowCart_addedToCart__1xKk8"}},,,,,,,function(e,a,t){e.exports={CardsShopContainer:"PokemonRenderer_CardsShopContainer__Ztaag"}},,,function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),i=t(33),c=t.n(i),l=(t(43),t(10)),s=t(11),m=t(13),u=t(12),d=t(1),p=t(24),h=t(34),E=t(22),_=t.n(E),f=t(27),C=function(e){return e.children},g=function(e){return Object(n.useEffect)((function(){}),[]),r.a.createElement(C,null,e.eachPokemon.length>1&&!e.error?r.a.createElement("h1",{style:{fontFamily:"Krona One"},className:"shopHeader"},"Welcome to the Pokemon Shop!"):e.error?r.a.createElement("h1",null,"Try refershing the page. An error has occured"):r.a.createElement("h1",null,"Loading..."))},b=t(19),y=t.n(b),v=function e(a){return r.a.createElement(C,null,r.a.createElement("div",{className:y.a.pokemonContainer},r.a.createElement("div",{className:y.a.cardContainer},r.a.createElement("h2",{className:y.a.pokemonContainer__headerMain},r.a.createElement("span",{style:{textTransform:"capitalize"}},a.title))),r.a.createElement("h4",{className:y.a.pokemonContainer__headerSub},"Main Ability: ",r.a.createElement("span",{style:{textTransform:"capitalize"}},a.ability)),r.a.createElement("ul",{className:y.a.typeList},"Types:"),r.a.createElement("li",null,r.a.createElement("span",{style:{textTransform:"capitalize"}},r.a.createElement("span",null,a.type1))),a.type2?r.a.createElement("li",null,r.a.createElement("span",{style:{textTransform:"capitalize"}},r.a.createElement("span",null,a.type2))):null,r.a.createElement("p",null,"Base Stat: ",a.stat),r.a.createElement("img",{src:a.image,alt:e.name}),r.a.createElement("p",null,"Price: $",a.price/10),r.a.createElement("button",{onClick:a.addPokemonToCart,className:y.a.pokemonContainer__addToCartButton},"Add to cart")))},S=t(35),k=t.n(S),P=function(e){return Object(n.useEffect)((function(){}),[e.eachPokemon]),r.a.createElement("div",{className:k.a.CardsShopContainer},1===e.currentPage&&""===e.filter?e.eachPokemon.slice(16,31).map((function(a){return r.a.createElement(v,{title:a.name,key:a.order,ability:a.abilities[0].ability.name,stat:a.stats[0].base_stat,type1:a.types[0].type.name,type2:a.types[1]?a.types[1].type.name:null,image:a.sprites.front_default,price:a.weight,addPokemonToCart:function(){return e.addItemToCartHandler(a.weight,a.name,a.order,a.sprites.front_default)}})})):2===e.currentPage&&""===e.filter?e.eachPokemon.slice(0,15).map((function(a){return r.a.createElement(v,{title:a.name,key:a.order,ability:a.abilities[0].ability.name,stat:a.stats[0].base_stat,type1:a.types[0].type.name,type2:a.types[1]?a.types[1].type.name:null,image:a.sprites.front_default,price:a.weight,addPokemonToCart:function(){return e.addItemToCartHandler(a.weight,a.name,a.order,a.sprites.front_default)}})})):3===e.currentPage&&""===e.filter?e.eachPokemon.slice(32,40).map((function(a){return r.a.createElement(v,{title:a.name,key:a.order,ability:a.abilities[0].ability.name,stat:a.stats[0].base_stat,type1:a.types[0].type.name,type2:a.types[1]?a.types[1].type.name:null,image:a.sprites.front_default,price:a.weight,addPokemonToCart:function(){return e.addItemToCartHandler(a.weight,a.name,a.order,a.sprites.front_default)}})})):""!==e.filter?e.eachPokemon.filter((function(a){return a.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(a){return r.a.createElement(v,{title:a.name,key:a.order,ability:a.abilities[0].ability.name,stat:a.stats[0].base_stat,type1:a.types[0].type.name,type2:a.types[1]?a.types[1].type.name:null,image:a.sprites.front_default,price:a.weight,addPokemonToCart:function(){return e.addItemToCartHandler(a.weight/10,a.name,a.order,a.sprites.front_default)}})})):null)},N=t(4),w=t.n(N),I=function(e){return Object(n.useEffect)((function(){}),[e.currentPage]),r.a.createElement(C,null,1===e.currentPage?r.a.createElement("div",{className:w.a.PageSwitchContainer},r.a.createElement("button",{className:"".concat(w.a.activeButton," ").concat(w.a.pageSwitchButton),onClick:e.switchPageHandler},"1"),r.a.createElement("button",{className:w.a.pageSwitchButton,onClick:e.switchPageHandler},"2"),r.a.createElement("button",{className:w.a.pageSwitchButton,onClick:e.switchPageHandler},"3")):2===e.currentPage?r.a.createElement("div",{className:w.a.PageSwitchContainer},r.a.createElement("button",{className:w.a.pageSwitchButton,onClick:e.switchPageHandler},"1"),r.a.createElement("button",{className:"".concat(w.a.activeButton," ").concat(w.a.pageSwitchButton),onClick:e.switchPageHandler},"2"),r.a.createElement("button",{className:w.a.pageSwitchButton,onClick:e.switchPageHandler},"3")):3===e.currentPage?r.a.createElement("div",{className:w.a.PageSwitchContainer},r.a.createElement("button",{className:w.a.pageSwitchButton,onClick:e.switchPageHandler},"1"),r.a.createElement("button",{className:w.a.pageSwitchButton,onClick:e.switchPageHandler},"2"),r.a.createElement("button",{className:"".concat(w.a.activeButton," ").concat(w.a.pageSwitchButton),onClick:e.switchPageHandler},"3")):null)},B=t(25),T=t.n(B),M=function(e){return Object(n.useEffect)((function(){}),[e.searchInput]),r.a.createElement("div",{className:T.a.SearchContainer},r.a.createElement("label",{className:T.a.SearchContainer__label},"Search By Name:"),r.a.createElement("input",{className:T.a.SearchContainer__input,ref:e.aRef,onChange:e.onChange}))},A=t(28),F=t.n(A),H=function(e){return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{className:F.a.cartContainer},r.a.createElement("button",{className:F.a.cartContainer__button,disabled:e.disableButton,onClick:e.priceSumHandler},"Show Cart"))},O=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],x=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).fetchURLs=Object(f.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=[],Promise.all(O.map((function(e){return new Promise((function(t){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e,"/")).then((function(e){return new Promise((function(){e.json().then((function(e){a.push(e)})).then((function(e){n.setState({eachPokemon:a}),t()}))}))}))}))})))}catch(t){n.setState({error:!0})}case 1:case"end":return e.stop()}}),e)}))),n.componentDidMount=Object(f.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fetchURLs(),void 0!==n.props.location.state&&null!==n.props.location.state&&n.setState({totalPrice:n.props.location.state.totalPrice,pokemonsInCart:n.props.location.state.pokemonsInCart});case 2:case"end":return e.stop()}}),e)}))),n.switchPageHandler=function(e){n.setState({currentPage:+e.target.textContent})},n.filterSearch=function(){n.setState({filter:n.inputRef.current.value})},n.addItemToCartHandler=function(e,a,t,r){var o=e/10,i=+(Object(h.a)({},n.state).totalPrice+o).toFixed(2),c=Object(p.a)(n.state.pokemonsInCart);c.push({name:a,price:o,key:Math.random(),image:r}),n.setState({pokemonsInCart:c,totalPrice:i,enableCart:!0},(function(){}))},n.saveToHistory=function(){n.props.history.push("/")},n.state={error:!1,eachPokemon:[],currentPage:1,filter:"",totalPrice:0,pokemonsInCart:[],enableCart:void 0!==n.props.location.state},n.inputRef=r.a.createRef(),n}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C,null,r.a.createElement(g,{shouldUpdate:this.state.eachPokemon,eachPokemon:this.state.eachPokemon,error:this.state.error}),r.a.createElement(o.b,{to:{pathname:"/cart",state:{pokemonsInCart:this.state.pokemonsInCart,totalPrice:this.state.totalPrice}}},r.a.createElement(H,{disableButton:!0===!this.state.enableCart})," "),""===this.state.filter?r.a.createElement(I,{currentPage:this.state.currentPage,switchPageHandler:function(a){return e.switchPageHandler(a)}}):null,this.state.eachPokemon.length>0?r.a.createElement(M,{searchInput:this.state.filter,aRef:this.inputRef,onChange:this.filterSearch}):null,r.a.createElement(P,{currentPage:this.state.currentPage,filter:this.state.filter,eachPokemon:this.state.eachPokemon,addItemToCartHandler:this.addItemToCartHandler}),this.state.eachPokemon.length>1&&""===this.state.filter?r.a.createElement(I,{currentPage:this.state.currentPage,switchPageHandler:function(a){return e.switchPageHandler(a)}}):null)}}]),t}(n.Component),j=t(18),U=t(20),z=t.n(U),L=function(e){return r.a.createElement(C,null,r.a.createElement("div",{className:z.a.contactWrapper},r.a.createElement("div",{className:z.a.contactInfoContainer},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone:")," +1-202-555-0182 ",r.a.createElement(j.e,{className:z.a.contactUsFa})),r.a.createElement("p",null,r.a.createElement("strong",null,"Facebook:")," ",r.a.createElement("a",{href:"https://www.facebook.com"},r.a.createElement(j.b,{className:z.a.contactUsFa}))),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," pokemonshop@gmail.com ",r.a.createElement(j.d,{className:z.a.contactUsFa})),r.a.createElement("p",null,r.a.createElement("strong",null,"Address:")," New York, 3515 Angus Road ",r.a.createElement(j.a,{className:z.a.contactUsFa})))))},R=t(14),D=t.n(R),G=function(e){return r.a.createElement(C,null,r.a.createElement("div",{className:D.a.learnMoreWrapper},r.a.createElement("p",{className:D.a.deliveryHeader},"We offer free ground shipping* on all orders over $29.99, shipping estimates are as below"),r.a.createElement("p",{className:D.a.deliveryPolicy},r.a.createElement("strong",null,"Ground:")," Should arrive 2 to 10 business days after shipment"),r.a.createElement("p",{className:D.a.deliveryPolicy},r.a.createElement("strong",null,"2nd Day:")," Should arrive 2 business days after shipment"),r.a.createElement("p",{className:D.a.deliveryPolicy},r.a.createElement("strong",null,"Overnight:")," Should arrive 1 business day after shipment")),r.a.createElement("div",{className:D.a.trustedWrapper},r.a.createElement("h3",null,"The number 1 Pokemon Shop worldwide!"),r.a.createElement("img",{className:D.a.trustedLogo,alt:"recommended-store",src:"https://1.bp.blogspot.com/-Ml2XxH3m4eM/UcyaUAI1tSI/AAAAAAAAB4I/rITnTj5rQGw/s336/689958d494120c88ec09a0ff5c9f2e2a.jpg"})))},W=t(7),K=t.n(W),V=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={itemsInCart:e.props.location.state.pokemonsInCart,totalPrice:+e.props.location.state.totalPrice},e.removeItemFromCart=function(a){var t=Object(p.a)(e.state.itemsInCart).filter((function(e){return e.key!==a})),n=0;t.map((function(e){return 0===t.length?n=0:n+=e.price}));e.setState({itemsInCart:t,totalPrice:+n.toFixed(2)})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement("div",{className:K.a.cart__container},r.a.createElement("h3",{style:{marginBottom:10,textAlign:"center"}},"Items In Cart:"),r.a.createElement("ul",{className:K.a.cartItemsUl},this.state.itemsInCart.length>0?this.state.itemsInCart.map((function(a,t){return r.a.createElement("li",{key:a.key},r.a.createElement("div",{className:K.a.listItems},r.a.createElement("img",{src:a.image,alt:a.name}),r.a.createElement("span",{style:{textTransform:"capitalize"}},r.a.createElement("strong",null,"Name:")," ",a.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:")," $",a.price),r.a.createElement("button",{onClick:function(){return e.removeItemFromCart(a.key)}},"Delete"),r.a.createElement("hr",{className:K.a.hr})))})):r.a.createElement("div",{className:K.a.cartIsEmptyWrapper},r.a.createElement("p",{className:K.a.cartIsEmpty},'Cart is empty. Click the "Continue Shopping" button to add Pokemons')))),r.a.createElement("div",{className:K.a.container__price},r.a.createElement("h3",null,"Total Price:"),r.a.createElement("p",{className:K.a.cart__containerPrice},"$",this.state.totalPrice)),r.a.createElement("div",{className:K.a.container__button},0===this.state.itemsInCart.length?r.a.createElement("button",{className:K.a.cart__containerButton,disabled:!0},"Checkout ",r.a.createElement("span",{style:{fontSize:11}},"(Cart is empty)")):r.a.createElement("button",{className:K.a.cart__containerButton,disabled:!1},r.a.createElement(o.b,{to:"/form"},"Checkout")),r.a.createElement(o.b,{to:{pathname:"/",state:{totalPrice:this.state.totalPrice,pokemonsInCart:this.state.itemsInCart}}},r.a.createElement("button",{className:K.a.cart__containerButton,onClick:this.state.itemsInCart.cartRemove},"Continue Shopping")))))}}]),t}(n.Component),Z=t(15),J=t.n(Z),q=function(e){return Object(n.useEffect)((function(){}),[e.active]),r.a.createElement("div",{className:J.a.footerContainer},r.a.createElement("h4",null,"The Pokemon Shop"),r.a.createElement("ul",{className:J.a.listContainer},r.a.createElement("li",null,r.a.createElement(o.c,{activeClassName:J.a.active,to:"/",exact:!0},"Shop")),r.a.createElement("li",null,r.a.createElement(o.c,{activeClassName:J.a.active,to:"/contact",exact:!0},"Contact Us")),r.a.createElement("li",null,r.a.createElement(o.c,{activeClassName:J.a.active,to:"/learn-more",exact:!0},"Learn More"))),r.a.createElement("h4",{style:{textAlign:"center"}},"This site was built by davidOren. All rights reserved ",r.a.createElement("span",{role:"img","aria-label":"default"},"\xa9\ufe0f")),r.a.createElement("div",{className:J.a.iconContainer},r.a.createElement("a",{href:"https://github.com/knowledgeReignsSupreme"},r.a.createElement("p",null,"GitHub:",r.a.createElement("span",null,r.a.createElement(j.c,{className:J.a.git}))))))},$=t(23),Y=["Usa","United states","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","\xc5land Islands"],Q=t(9),X=t.n(Q),ee=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={username:"",email:"",country:"",address:"",zipcode:"",usernameError:"",emailError:"",countryError:"",addressError:"",zipcodeError:"",checkoutDone:!1},e.validZip=function(e){return/^\d+$/.test(e)},e.checkInput=function(){e.state.username.trim()&&e.state.username?""!==e.state.usernameError&&e.setState({usernameError:""}):e.setState({usernameError:"Username is too short"}),e.validEmail(e.state.email)?""!==e.state.emailError&&e.setState({emailError:""}):e.setState({emailError:"Email is not valid"}),e.state.country.length<=2?e.setState({countryError:"Country name is not valid"}):Y.includes(e.state.country.charAt(0).toUpperCase()+e.state.country.slice(1))?""!==e.state.countryError&&e.setState({countryError:""}):e.setState({countryError:"We do not ship to ".concat(e.state.country.charAt(0).toUpperCase()+e.state.country.slice(1))}),e.state.address.length<2?e.setState({addressError:"Address is not valid"}):""!==e.state.address&&e.setState({addressError:""}),!e.validZip(e.state.zipcode)||e.state.zipcode.length<=4?e.setState({zipcodeError:"Zip code is not valid"}):e.validZip(e.state.zipcode)&&e.state.zipcode.length>4&&e.setState({zipcodeError:""})},e.submitHandler=function(e){e.preventDefault()},e.finalValidator=function(){e.setState({checkoutDone:!0})},e.checkoutDone=function(){e.checkInput(),""===e.state.usernameError&&""===e.state.emailError&&""===e.state.countryError&&""===e.state.addressError&&""===e.state.zipcodeError&&e.state.username.trim()&&e.validEmail(e.state.email)&&e.state.country.length>=2&&Y.includes(e.state.country.charAt(0).toUpperCase()+e.state.country.slice(1))&&e.validZip(e.state.zipcode)?e.finalValidator():e.setState({showCheckout:!1})},e.handleChange=function(a){e.setState(Object($.a)({},a.target.name,a.target.value))},e}return Object(s.a)(t,[{key:"validEmail",value:function(e){return-1!==String(e).search(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,this.state.checkoutDone?r.a.createElement("div",{className:X.a.confirmationWrapper},r.a.createElement("p",{className:X.a.confirmationHeader},"Thank you for your order ",this.state.username,"!"),r.a.createElement("p",{className:X.a.confirmationSubHeader},"An email has been sent to ",this.state.email),r.a.createElement("p",{className:X.a.confirmationSubHeader},"Check out the",r.a.createElement(o.b,{to:"learn-more"}," Learn More")," page to read about our shipping policy")):r.a.createElement("div",{className:X.a.formWrapper},r.a.createElement("form",{onSubmit:function(a){return e.submitHandler(a)}},r.a.createElement("div",{className:X.a.formDiv},r.a.createElement("label",{htmlFor:"username"},"Name:"),r.a.createElement("input",{name:"username",id:"username",type:"text",onChange:function(a){return e.handleChange(a)}}),this.state.usernameError&&r.a.createElement("span",null,this.state.usernameError)),r.a.createElement("div",{className:X.a.formDiv},r.a.createElement("label",{htmlFor:"email"},"E-mail:"),r.a.createElement("input",{name:"email",id:"email",type:"email",onChange:function(a){return e.handleChange(a)}}),this.state.emailError&&r.a.createElement("span",null,this.state.emailError)),r.a.createElement("div",{className:X.a.formDiv},r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("input",{name:"country",id:"country",type:"text",onChange:function(a){return e.handleChange(a)}}),this.state.countryError&&r.a.createElement("span",null,this.state.countryError)),r.a.createElement("div",{className:X.a.formDiv},r.a.createElement("label",{htmlFor:"address"},"Address:"),r.a.createElement("input",{name:"address",id:"address",type:"text",onChange:function(a){return e.handleChange(a)}}),this.state.addressError&&r.a.createElement("span",null,this.state.addressError)),r.a.createElement("div",{className:X.a.formDiv},r.a.createElement("label",{htmlFor:"zipcode"},"Zipcode:"),r.a.createElement("input",{name:"zipcode",id:"zipcode",type:"text",onChange:function(a){return e.handleChange(a)}}),this.state.zipcodeError&&r.a.createElement("span",null,this.state.zipcodeError)),r.a.createElement("div",{className:X.a.formButton},r.a.createElement("button",{onClick:this.checkoutDone,type:"submit"},"Submit")))))}}]),t}(n.Component),ae=t(16),te=t.n(ae),ne=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,a){return this.props.match!==e.match}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:te.a.NavContainer},r.a.createElement("li",{className:te.a.item},r.a.createElement(o.c,{activeClassName:te.a.active,to:"/",exact:!0},"Shop")),r.a.createElement("li",{className:te.a.item},r.a.createElement(o.c,{activeClassName:te.a.active,to:"/contact",exact:!0},"Contact Us")),r.a.createElement("li",{className:te.a.item},r.a.createElement(o.c,{activeClassName:te.a.active,to:"/learn-more",exact:!0},"Learn More"))))}}]),t}(n.Component),re=t(37),oe=function(){return r.a.createElement("div",null,r.a.createElement(re.TinyButton,{style:{zIndex:10,backgroundColor:"white"}}))},ie=(t(52),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).changeActive=function(e){var a=e.target.textContent.replace(/\s/g,"");n.setState({currentPage:a})},n.state={currentPage:"Shop"},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(ne,null),r.a.createElement(oe,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:x,exact:!0}),r.a.createElement(d.a,{path:"/contact",component:L}),r.a.createElement(d.a,{path:"/learn-more",component:G}),r.a.createElement(d.a,{path:"/cart",component:V}),r.a.createElement(d.a,{path:"/form",component:ee})),r.a.createElement(q,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{basename:"/pokemonshop"},r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[38,1,2]]]);
//# sourceMappingURL=main.d1cb067c.chunk.js.map