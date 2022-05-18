"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[2729],{7466:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-9ba0de92",path:"/zh/advanced/durable-nonce/",title:"Durable Nonce",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[{level:2,title:"機制",slug:"機制",children:[]}],filePathRelative:"zh/advanced/durable-nonce/README.md",git:{updatedTime:1652899335e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},6917:(e,n,a)=>{a.r(n),a.d(n,{default:()=>_});var l=a(6252);const c=(0,l._)("h1",{id:"durable-nonce",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#durable-nonce","aria-hidden":"true"},"#"),(0,l.Uk)(" Durable Nonce")],-1),o=(0,l._)("p",null,"在solana發交易的時候，會在tx內包一塊最近的blockhash塞進去，之後一起簽名。而這個blockhash距離鏈上最新的區塊太遠的話，tx就會被拒絕。 (大概拿到之後兩分鐘就會過期) 這個機制使我們沒有辦法讓tx在本地放一陣子之後再送出。官方有提供一個解法叫做durable nonce。",-1),t=(0,l._)("h2",{id:"機制",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#機制","aria-hidden":"true"},"#"),(0,l.Uk)(" 機制")],-1),u=(0,l._)("p",null,"這個durable nonce會需要你先創一個nonce account。nonce account在創建完後同時裡面也會存在一個nonce。我們只要讓tx符合下面條件就可以啟動nonce的機制",-1),d=(0,l._)("ol",null,[(0,l._)("li",null,"把 nonce 放在 blockhash (就不用放最近一塊的blockhash了)"),(0,l._)("li",null,"tx的第一個instruction是advanced nonce的操作")],-1),r=(0,l._)("p",null,"滿足上面兩個條件就可以啟動durable nonce的機制，下面會分成幾個步驟帶大家一步一步操作。",-1),h=(0,l.Uk)("創建Nonce帳戶"),i=(0,l.Uk)("抓取Nonce帳戶"),s=(0,l.Uk)("使用Nonce"),b={},_=(0,a(3744).Z)(b,[["render",function(e,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[c,o,t,u,d,r,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"/zh/advanced/durable-nonce/create-nonce-account.html"},{default:(0,l.w5)((()=>[h])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"/zh/advanced/durable-nonce/query-nonce.html"},{default:(0,l.w5)((()=>[i])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"/zh/advanced/durable-nonce/use-nonce.html"},{default:(0,l.w5)((()=>[s])),_:1})])])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,l]of n)e[a]=l;return e}}}]);