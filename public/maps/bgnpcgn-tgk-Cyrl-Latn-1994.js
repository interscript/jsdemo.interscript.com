var map = function(Interscript) {Interscript.define_map("bgnpcgn-tgk-Cyrl-Latn-1994", function(Interscript, map) {
map.dependencies = [];
map.stages.main = function(s) {
s = Interscript.gsub(s, "(?<=[ГгЗзКкСс])ҳ", "·h");
s = Interscript.gsub(s, "(?<=[ГгЗзКкСс])Ҳ", "·H");
s = Interscript.gsub(s, "Ц(?=[АаЕеЁёИиОоУуЫыЭэЮюЯя])", "S");
s = Interscript.gsub(s, "ц(?=[АаЕеЁёИиОоУуЫыЭэЮюЯя])", "s");
s = Interscript.parallel_replace_tree(s, map.cache.PTREE_3639233464595487674);
return s;
};
map.cache.PTREE_3639233464595487674 = {"1040":{"":"A"},"1041":{"":"B"},"1042":{"":"V"},"1043":{"":"G"},"1170":{"":"Gh"},"1044":{"":"D"},"1045":{"":"E"},"1025":{"":"Yo"},"1046":{"":"Zh"},"1047":{"":"Z"},"1048":{"":"I"},"1250":{"":"Í"},"1049":{"":"Y"},"1050":{"":"K"},"1178":{"":"Q"},"1051":{"":"L"},"1052":{"":"M"},"1053":{"":"N"},"1054":{"":"O"},"1055":{"":"P"},"1056":{"":"R"},"1057":{"":"S"},"1058":{"":"T"},"1059":{"":"U"},"1262":{"":"Ŭ"},"1060":{"":"F"},"1061":{"":"Kh"},"1202":{"":"H"},"1063":{"":"Ch"},"1206":{"":"J"},"1062":{"":"Ts"},"1064":{"":"Sh"},"1065":{"":"Sh"},"1066":{"":"’"},"1067":{"":"I"},"1068":{"":""},"1069":{"":"Ė"},"1070":{"":"Yu"},"1071":{"":"Ya"},"1072":{"":"a"},"1073":{"":"b"},"1074":{"":"v"},"1075":{"":"g"},"1171":{"":"gh"},"1076":{"":"d"},"1077":{"":"e"},"1105":{"":"yo"},"1078":{"":"zh"},"1079":{"":"z"},"1080":{"":"i"},"1251":{"":"í"},"1081":{"":"y"},"1082":{"":"k"},"1179":{"":"q"},"1083":{"":"l"},"1084":{"":"m"},"1085":{"":"n"},"1086":{"":"o"},"1087":{"":"p"},"1088":{"":"r"},"1089":{"":"s"},"1090":{"":"t"},"1091":{"":"u"},"1263":{"":"ŭ"},"1092":{"":"f"},"1093":{"":"kh"},"1203":{"":"h"},"1095":{"":"ch"},"1207":{"":"j"},"1094":{"":"ts"},"1096":{"":"sh"},"1097":{"":"sh"},"1098":{"":"’"},"1099":{"":"i"},"1100":{"":""},"1101":{"":"ė"},"1102":{"":"yu"},"1103":{"":"ya"}};
});};if (typeof module !== 'undefined') { module.exports = map; }else if (typeof Interscript !== 'undefined') { map(Interscript); }else { throw "We couldn't dispatch Interscript from a map!"; }