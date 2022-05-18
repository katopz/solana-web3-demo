"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[6205],{1138:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-77436f26",path:"/zh/advanced/durable-nonce/query-nonce.html",title:"Query Nonce",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/advanced/durable-nonce/query-nonce.md",git:{updatedTime:1652899335e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},8409:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const t=(0,a(6252).uE)('<h1 id="query-nonce" tabindex="-1"><a class="header-anchor" href="#query-nonce" aria-hidden="true">#</a> Query Nonce</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PublicKey<span class="token punctuation">,</span> NonceAccount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CONNECTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../helper/const&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 查詢nonce account帳戶詳細資料</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> nonceAccountPubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;2ZKe8GmRAqFRj3AvVSFBTLHNNrH1uB23hwjHV3CzJGmf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> accountInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">getAccountInfo</span><span class="token punctuation">(</span>nonceAccountPubkey<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> nonceAccount <span class="token operator">=</span> NonceAccount<span class="token punctuation">.</span><span class="token function">fromAccountData</span><span class="token punctuation">(</span>accountInfo<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">auth: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nonceAccount<span class="token punctuation">.</span>authorizedPubkey<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">nonce: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nonceAccount<span class="token punctuation">.</span>nonce<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token comment">// 拿來計算fee的價目表，目前都只有收簽名數量 (1個簽名 5000 lamports = 0.000005 SOL)</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">fee calculator: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nonceAccount<span class="token punctuation">.</span>feeCalculator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',2),p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);