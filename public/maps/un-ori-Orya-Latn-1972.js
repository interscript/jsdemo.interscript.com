var map = function(Interscript) {Interscript.define_map("un-ori-Orya-Latn-1972", function(Interscript, map) {
map.dependencies = [];
map.aliases.orya_chars_1 = "୍";
map.aliases_re.orya_chars_1 = "[୍ାିୀୁୂୃେୈୋୌ]";
map.stages.main = function(s) {
s = Interscript.gsub(s, "କ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "k");
s = Interscript.gsub(s, "ଖ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "kh");
s = Interscript.gsub(s, "ଗ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "g");
s = Interscript.gsub(s, "ଘ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "gh");
s = Interscript.gsub(s, "ଙ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṅ");
s = Interscript.gsub(s, "ଚ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ch");
s = Interscript.gsub(s, "ଛ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "chhh");
s = Interscript.gsub(s, "ଜ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "j");
s = Interscript.gsub(s, "ଝ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "jh");
s = Interscript.gsub(s, "ଞ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ñ");
s = Interscript.gsub(s, "ଟ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṭ");
s = Interscript.gsub(s, "ଠ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṭh");
s = Interscript.gsub(s, "ଡ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ḍ");
s = Interscript.gsub(s, "ଡ଼(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṙ");
s = Interscript.gsub(s, "ଢ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ḍh");
s = Interscript.gsub(s, "ଢ଼(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṙh");
s = Interscript.gsub(s, "ଣ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṇ");
s = Interscript.gsub(s, "ତ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "t");
s = Interscript.gsub(s, "ଥ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "th");
s = Interscript.gsub(s, "ଦ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "d");
s = Interscript.gsub(s, "ଧ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "dh");
s = Interscript.gsub(s, "ନ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "n");
s = Interscript.gsub(s, "ପ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "p");
s = Interscript.gsub(s, "ଫ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ph");
s = Interscript.gsub(s, "ବ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "b");
s = Interscript.gsub(s, "ଭ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "bh");
s = Interscript.gsub(s, "ମ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "m");
s = Interscript.gsub(s, "ଯ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ỵ");
s = Interscript.gsub(s, "ୟ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "y");
s = Interscript.gsub(s, "ର(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "r");
s = Interscript.gsub(s, "ଲ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "l");
s = Interscript.gsub(s, "ଳ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ḷ");
s = Interscript.gsub(s, "ଶ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "sh");
s = Interscript.gsub(s, "ଷ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "ṣh");
s = Interscript.gsub(s, "ସ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "s");
s = Interscript.gsub(s, "ହ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "h");
s = Interscript.gsub(s, "କ୍ଷ(?="+Interscript.get_alias_re("un-ori-Orya-Latn-1972", "orya_chars_1")+")", "kṣh");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_831633136123252317);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_831633136123252317 = {"2821":{"":"a"},"2822":{"":"ā"},"2823":{"":"i"},"2824":{"":"ī"},"2825":{"":"u"},"2826":{"":"ū"},"2827":{"":"ṛ"},"2912":{"":"ṝ"},"2828":{"":"ḻ"},"2831":{"":"e"},"2832":{"":"ai"},"2835":{"":"o"},"2929":{"":"va"},"2836":{"":"au"},"2837":{"":"ka","2893":{"2871":{"":"kṣha"}}},"2838":{"":"kha"},"2839":{"":"ga"},"2840":{"":"gha"},"2841":{"":"ṅa"},"2842":{"":"cha"},"2843":{"":"chha"},"2844":{"":"ja"},"2845":{"":"jha"},"2846":{"":"ña"},"2847":{"":"ṭa"},"2848":{"":"ṭha"},"2849":{"":"ḍa"},"2908":{"":"ṙa"},"2850":{"":"ḍha"},"2909":{"":"ṙha"},"2851":{"":"ṇa"},"2852":{"":"ta"},"2853":{"":"tha"},"2854":{"":"da"},"2855":{"":"dha"},"2856":{"":"na"},"2858":{"":"pa"},"2859":{"":"pha"},"2860":{"":"ba"},"2861":{"":"bha"},"2862":{"":"ma"},"2863":{"":"ỵa"},"2911":{"":"ya"},"2864":{"":"ra"},"2866":{"":"la"},"2867":{"":"ḷa"},"2870":{"":"sha"},"2871":{"":"ṣha"},"2872":{"":"sa"},"2873":{"":"ha"},"2817":{"":"m"},"2819":{"":"ḥ"},"2818":{"":"ṃ"},"2878":{"":"ā"},"2879":{"":"i"},"2880":{"":"ī"},"2881":{"":"u"},"2882":{"":"ū"},"2883":{"":"ṛ"},"2887":{"":"e"},"2888":{"":"ai"},"2891":{"":"o"},"2892":{"":"au"},"2381":{"":""},"2893":{"":""},"2364":{"":""},"2876":{"":""},"2404":{"":"."},"8205":{"":""},"8204":{"":""},"2918":{"":"0"},"2919":{"":"1"},"2920":{"":"2"},"2921":{"":"3"},"2922":{"":"4"},"2923":{"":"5"},"2924":{"":"6"},"2925":{"":"7"},"2926":{"":"8"},"2927":{"":"9"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }