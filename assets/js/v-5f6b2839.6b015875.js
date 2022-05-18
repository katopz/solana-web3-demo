"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[2134],{1950:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-5f6b2839",path:"/advanced/metaplex/get-tokenmeta.html",title:"Get Token Metadata",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"advanced/metaplex/get-tokenmeta.md",git:{updatedTime:1652899335e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},4397:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(6252).uE)('<h1 id="get-token-metadata" tabindex="-1"><a class="header-anchor" href="#get-token-metadata" aria-hidden="true">#</a> Get Token Metadata</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Connection<span class="token punctuation">,</span> PublicKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@metaplex-foundation/mpl-token-metadata&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// NFT is a mint. just like SRM, USDC ..., the only different is that NFT&#39;s supply is 1</span>\n<span class="token comment">//</span>\n<span class="token comment">// if we want to get NFT&#39;s metadata, first we need to know what is the mint address.</span>\n<span class="token comment">// here I take a random DAPE as an example</span>\n<span class="token comment">// https://explorer.solana.com/address/9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A</span>\n<span class="token comment">//</span>\n<span class="token comment">// tokenmeta is a PDA a which derived by mint address</span>\n<span class="token comment">// the formula is [&#39;metadata&#39;, metadata_program_id, mint_id]</span>\n<span class="token comment">// is it totally fine to forget it because sdk already wrapped it for us</span>\n\n<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.mainnet-beta.solana.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> mintPubkey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span><span class="token string">&quot;9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> tokenmetaPubkey <span class="token operator">=</span> <span class="token keyword">await</span> Metadata<span class="token punctuation">.</span><span class="token function">getPDA</span><span class="token punctuation">(</span>mintPubkey<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> tokenmeta <span class="token operator">=</span> <span class="token keyword">await</span> Metadata<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> tokenmetaPubkey<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tokenmeta<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',2),e={},p=(0,s(3744).Z)(e,[["render",function(n,a){return t}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,t]of a)n[s]=t;return n}}}]);