var map = function(Interscript) {Interscript.define_map("bis-pnj-Guru-Latn-13194-1991", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "ੰ(?=[ਕਖਖ਼ਗਗ਼ਘਙ])", "ṅ");
s = Interscript.gsub(s, "ੰ(?=[ਚਛਜਜ਼ਝਞ])", "ñ");
s = Interscript.gsub(s, "ੰ(?=[ਟਠਡਢਣ])", "ṇ");
s = Interscript.gsub(s, "ੰ(?=[ਤਥਦਧਨ])", "n");
s = Interscript.gsub(s, "ੰ(?=[ਪਫਬਭਮ])", "m");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_4462850099134922064);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_4462850099134922064 = {"2565":{"":"a"},"2566":{"":"ā"},"2567":{"":"i"},"2568":{"":"ī"},"2569":{"":"u"},"2570":{"":"ū"},"2674":{"":"ṛ"},"2675":{"":"ṝ"},"2575":{"":"ē"},"2576":{"":"ai"},"2579":{"":"ŏ"},"2580":{"":"au"},"2581":{"":"k"},"2582":{"":"kh"},"2583":{"":"g"},"2584":{"":"gh"},"2585":{"":"ṅ"},"2586":{"":"c"},"2587":{"":"ch"},"2588":{"":"j"},"2589":{"":"jh"},"2590":{"":"ñ"},"2591":{"":"ṭ"},"2592":{"":"ṭh"},"2593":{"":"ḍ"},"2594":{"":"ḍh"},"2595":{"":"ṇ"},"2596":{"":"t"},"2597":{"":"th"},"2598":{"":"d"},"2652":{"":"ṛa"},"2599":{"":"dh"},"2600":{"":"ṉ"},"2602":{"":"p"},"2603":{"":"ph"},"2604":{"":"b"},"2605":{"":"bh"},"2606":{"":"m"},"2607":{"":"y"},"2608":{"":"r"},"2610":{"":"l"},"2611":{"":"ḷ"},"2613":{"":"v"},"2614":{"":"ś"},"2616":{"":"s"},"2617":{"":"h"},"2392":{"":"q"},"2649":{"":"ḵẖ"},"2650":{"":"gẖ"},"2651":{"":"z"},"2654":{"":"f"},"2305":{"":"m"},"2307":{"32":{"":"ḥ"}},"2562":{"":"n"},"2672":{"":"ṃ"},"2622":{"":"ā"},"2623":{"":"i"},"2624":{"":"ī"},"2625":{"":"u"},"2626":{"":"ū"},"2371":{"":"ṛ"},"2631":{"":"ē"},"2632":{"":"ai"},"2635":{"":"ō"},"2636":{"":"au"},"2637":{"":""},"2620":{"":""},"2673":{"":""},"2404":{"":"."},"8205":{"":""}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }