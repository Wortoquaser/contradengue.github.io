var gdjs;(function(i){i.PixiFiltersTools.registerFilterCreator("Glow",new class extends i.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(e,r){return new PIXI.filters.GlowFilter}updatePreRender(e,r){}updateDoubleParameter(e,r,t){const l=e;r==="innerStrength"?l.innerStrength=t:r==="outerStrength"?l.outerStrength=t:r==="distance"&&(l.distance=t)}getDoubleParameter(e,r){const t=e;return r==="innerStrength"?t.innerStrength:r==="outerStrength"?t.outerStrength:r==="distance"?t.distance:0}updateStringParameter(e,r,t){const l=e;r==="color"&&(l.color=i.PixiFiltersTools.rgbOrHexToHexNumber(t))}updateColorParameter(e,r,t){const l=e;r==="color"&&(l.color=t)}getColorParameter(e,r){const t=e;return r==="color"?t.color:0}updateBooleanParameter(e,r,t){}getNetworkSyncData(e){const r=e;return{is:r.innerStrength,os:r.outerStrength,d:r.distance,c:r.color}}updateFromNetworkSyncData(e,r){const t=e;t.innerStrength=r.is,t.outerStrength=r.os,t.distance=r.d,t.color=r.c}})})(gdjs||(gdjs={}));
//# sourceMappingURL=glow-pixi-filter.js.map
