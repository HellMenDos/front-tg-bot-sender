<template><div><h1 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h1>
<p>How to install ?</p>
<div class="language-pip line-numbers-mode" data-highlighter="prismjs" data-ext="pip" data-title="pip"><pre v-pre><code><span class="line">pip install tg-bot-sender</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="imports" tabindex="-1"><a class="header-anchor" href="#imports"><span>Imports</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> tg_bot_sender <span class="token keyword">import</span> Data<span class="token punctuation">,</span> TelegramSender</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting started</span></a></h2>
<p>The logs parameter indicates that logs are saved in json format</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">tg <span class="token operator">=</span> TelegramSender<span class="token punctuation">(</span>telegramToken<span class="token punctuation">,</span> logs <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Response structure</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span> <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token comment">// number of messages sent</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="options-for-sending-messages" tabindex="-1"><a class="header-anchor" href="#options-for-sending-messages"><span>Options for sending messages</span></a></h2>
<h4 id="sendfromids-sending-to-users" tabindex="-1"><a class="header-anchor" href="#sendfromids-sending-to-users"><span>sendFromIds - sending to users</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">tg<span class="token punctuation">.</span>sendFromIds<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>telegramUserIds<span class="token punctuation">]</span><span class="token punctuation">,</span> Data<span class="token punctuation">(</span></span>
<span class="line">    text <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">    photo <span class="token operator">=</span> <span class="token string">'Photo link'</span><span class="token punctuation">,</span></span>
<span class="line">    buttons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        buttonTitle<span class="token punctuation">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">        buttonUrl<span class="token punctuation">:</span> <span class="token string">'https://google.com'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sendfromid-sending-to-the-user" tabindex="-1"><a class="header-anchor" href="#sendfromid-sending-to-the-user"><span>sendFromId - sending to the user</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">tg<span class="token punctuation">.</span>sendFromIds<span class="token punctuation">(</span>telegramUserId<span class="token punctuation">,</span> Data<span class="token punctuation">(</span></span>
<span class="line">    text <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">    photo <span class="token operator">=</span> <span class="token string">'Photo link'</span><span class="token punctuation">,</span></span>
<span class="line">    buttons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        buttonTitle<span class="token punctuation">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">        buttonUrl<span class="token punctuation">:</span> <span class="token string">'https://google.com'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


