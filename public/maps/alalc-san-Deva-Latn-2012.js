var map = function(Interscript) {Interscript.define_map("alalc-san-Deva-Latn-2012", function(Interscript, map) {
map.dependencies = [];
map.aliases.deva_chars_1 = "ा";
map.aliases_re.deva_chars_1 = "[ािीुूृॄेैोौ्]";
map.stages.main = function(s) {
s = Interscript.gsub(s, "क(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "k");
s = Interscript.gsub(s, "ख(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "kh");
s = Interscript.gsub(s, "ग(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "g");
s = Interscript.gsub(s, "घ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "gh");
s = Interscript.gsub(s, "ङ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ṅ");
s = Interscript.gsub(s, "च(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "c");
s = Interscript.gsub(s, "छ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ch");
s = Interscript.gsub(s, "ज(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "j");
s = Interscript.gsub(s, "झ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "jh");
s = Interscript.gsub(s, "ञ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ñ");
s = Interscript.gsub(s, "ट(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ṭ");
s = Interscript.gsub(s, "ठ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ṭh");
s = Interscript.gsub(s, "ड(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ḍ");
s = Interscript.gsub(s, "ढ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ḍh");
s = Interscript.gsub(s, "ण(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ṇ");
s = Interscript.gsub(s, "त(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "t");
s = Interscript.gsub(s, "थ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "th");
s = Interscript.gsub(s, "द(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "d");
s = Interscript.gsub(s, "ध(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "dh");
s = Interscript.gsub(s, "न(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "n");
s = Interscript.gsub(s, "प(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "p");
s = Interscript.gsub(s, "फ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ph");
s = Interscript.gsub(s, "ब(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "b");
s = Interscript.gsub(s, "भ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "bh");
s = Interscript.gsub(s, "म(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "m");
s = Interscript.gsub(s, "य(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "y");
s = Interscript.gsub(s, "र(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "r");
s = Interscript.gsub(s, "ल(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "l");
s = Interscript.gsub(s, "ळ(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ḻ");
s = Interscript.gsub(s, "व(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "v");
s = Interscript.gsub(s, "श(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ś");
s = Interscript.gsub(s, "ष(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "ṣ");
s = Interscript.gsub(s, "स(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "s");
s = Interscript.gsub(s, "ह(?="+Interscript.get_alias_re("alalc-san-Deva-Latn-2012", "deva_chars_1")+")", "h");
s = Interscript.gsub(s, "ं(?=[कखगघङ])", "ṅ");
s = Interscript.gsub(s, "ं(?=[चछजझञ])", "ñ");
s = Interscript.gsub(s, "ं(?=[टठडढण])", "ṇ");
s = Interscript.gsub(s, "ं(?=[तथदधन])", "n");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_2012156088561091648);
s = Interscript.functions.compose(s, {});
return s;
};
map.cache.PTREE_2012156088561091648 = {"2309":{"":"a"},"2310":{"":"ā"},"2311":{"":"i"},"2312":{"":"ī"},"2313":{"":"u"},"2314":{"":"ū"},"2315":{"":"ṛ"},"2400":{"":"ṝ"},"2316":{"":"ḷ"},"2319":{"":"e"},"2320":{"":"ai"},"2323":{"":"o"},"2324":{"":"au"},"2325":{"":"ka"},"2326":{"":"kha"},"2327":{"":"ga"},"2328":{"":"gha"},"2329":{"":"ṅa"},"2330":{"":"ca"},"2331":{"":"cha"},"2332":{"":"ja"},"2333":{"":"jha"},"2334":{"":"ña"},"2335":{"":"ṭa"},"2336":{"":"ṭha"},"2337":{"":"ḍa"},"2338":{"":"ḍha"},"2339":{"":"ṇa"},"2340":{"":"ta"},"2341":{"":"tha"},"2342":{"":"da"},"2343":{"":"dha"},"2344":{"":"na"},"2346":{"":"pa"},"2347":{"":"pha"},"2348":{"":"ba"},"2349":{"":"bha"},"2350":{"":"ma"},"2351":{"":"ya"},"2352":{"":"ra"},"2354":{"":"la"},"2355":{"":"ḻa"},"2357":{"":"va"},"2358":{"":"śa"},"2359":{"":"ṣa"},"2360":{"":"sa"},"2361":{"":"ha"},"2306":{"":"ṃ"},"2307":{"":"ḥ"},"2305":{"":"m̐"},"2365":{"":"’"},"3313":{"":"ẖ"},"3314":{"":"ḫ"},"2366":{"":"ā"},"2367":{"":"i"},"2368":{"":"ī"},"2369":{"":"u"},"2370":{"":"ū"},"2371":{"":"ṛ"},"2372":{"":"ṝ"},"2375":{"":"e"},"2376":{"":"ai"},"2379":{"":"o"},"2380":{"":"au"},"2381":{"":""},"8205":{"":""}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }