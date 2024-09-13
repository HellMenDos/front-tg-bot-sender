<template><div><h1 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h1>
<p>Как установить ?</p>
<div class="language-pip line-numbers-mode" data-highlighter="prismjs" data-ext="pip" data-title="pip"><pre v-pre><code><span class="line">pip install tg-bot-sender</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="импорты" tabindex="-1"><a class="header-anchor" href="#импорты"><span>Импорты</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> tg_bot_sender <span class="token keyword">import</span> Data<span class="token punctuation">,</span> TelegramSender</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="начало-работы" tabindex="-1"><a class="header-anchor" href="#начало-работы"><span>Начало работы</span></a></h2>
<p>logs параметр указывает на сохранения логов в json формате</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">tg <span class="token operator">=</span> TelegramSender<span class="token punctuation">(</span>telegramToken<span class="token punctuation">,</span> logs <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="варианты-отправки-сообщении" tabindex="-1"><a class="header-anchor" href="#варианты-отправки-сообщении"><span>Варианты отправки сообщений</span></a></h2>
<h4 id="sendfromids-отправка-пользователям" tabindex="-1"><a class="header-anchor" href="#sendfromids-отправка-пользователям"><span>sendFromIds - отправка пользователям</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">tg<span class="token punctuation">.</span>sendFromIds<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>telegramUserIds<span class="token punctuation">]</span><span class="token punctuation">,</span> Data<span class="token punctuation">(</span></span>
<span class="line">    text <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">    photo <span class="token operator">=</span> <span class="token string">'Photo link'</span><span class="token punctuation">,</span></span>
<span class="line">    buttons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        buttonTitle<span class="token punctuation">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span></span>
<span class="line">        buttonUrl<span class="token punctuation">:</span> <span class="token string">'https://google.com'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sendfromid-отправка-пользователю" tabindex="-1"><a class="header-anchor" href="#sendfromid-отправка-пользователю"><span>sendFromId - отправка пользователю</span></a></h4>
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


