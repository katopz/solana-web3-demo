"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[9667],{9184:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-76878534",path:"/zh/tour/get-token-account.html",title:"Get Token Account",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/tour/get-token-account.md",git:{updatedTime:1652899335e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},2531:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="get-token-account" tabindex="-1"><a class="header-anchor" href="#get-token-account" aria-hidden="true">#</a> Get Token Account</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Connection<span class="token punctuation">,</span> PublicKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getAccount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/spl-token&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// connection</span>\n<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.devnet.solana.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tokenAccount1Pubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;37sAdhEFiYxKnQAm7CPd5GLK1ZxWovqn3p87kKjfD44c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tokenAccount2Pubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;CFEPU5Jd6DNj8gpjPLJ1d9i4xSJDGYNV7n6qw53zE3n1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// get token account info</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> tokenAccount <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAccount</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> tokenAccount1Pubkey<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tokenAccount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',2),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);