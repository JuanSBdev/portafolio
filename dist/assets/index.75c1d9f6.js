(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const _ of e)if(_.type==="childList")for(const o of _.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const _={};return e.integrity&&(_.integrity=e.integrity),e.referrerpolicy&&(_.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?_.credentials="include":e.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function n(e){if(e.ep)return;e.ep=!0;const _=s(e);fetch(e.href,_)}})();