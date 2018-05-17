function pass_data() {
  alert("저장되었습니다.");
  //var string = ["이것은 테스트 데이터입니다.","~~이것은 취소선입니다~~","**이것은 볼드체입니다**", "__이것은 밑줄입니다__", "//이것은 이탤릭입니다//"];

  document.writeln("<h2>유재범 바보</h2>","<br>");
  var str = ["~~이것은 취소선입니다~~","**이것은 볼드체입니다**","__이것은 밑줄입니다__","//이것은 이탤릭입니다//"];
  document.writeln(str,"<br>");
  document.writeln("<h2>변환한 문자열</h2>","<br>");

  var startflag_s = true, startflag_b = true, startflag_u = true, startflag_i = true ;
  var re_s = /~~/g, re_b = /\*\*/g, re_u = /__/g, re_i = /\/\//g;

  var temp = str;

for(var i=0; i<str.length; i++){
    while ((match = re_s.exec(str[i])) != null) {
        if(startflag_s == true) {
            temp[i] = temp[i].replace("~~", "<s>");
            startflag_s = false;
            continue;
        }
        else {
            temp[i] = temp[i].replace("~~", "</s><br>");
            startflag_s = true;
            continue;
        }
    }

    while ((match = re_b.exec(str[i])) != null) {
        if(startflag_b == true) {
            temp[i] = temp[i].replace("**", "<b>");
            startflag_b = false;
            continue;
        }
        else {
            temp[i] = temp[i].replace("**", "</b><br>");
            startflag_b = true;
            continue;
        }
    }

    while ((match = re_u.exec(str[i])) != null) {
        if(startflag_u == true) {
            temp[i] = temp[i].replace("__", "<u>");
            startflag_u = false;
            continue;
        }
        else {
            temp[i] = temp[i].replace("__", "</u><br>");
            startflag_u = true;
            continue;
        }
    }

    while ((match = re_i.exec(str[i])) != null) {
        if(startflag_i == true) {
            temp[i] = temp[i].replace("\/\/", "<i>");
            startflag_i = false;
            continue;
        }
        else {
            temp[i] = temp[i].replace("\/\/", "</i><br>");
            startflag_i = true;
            continue;
        }
    }
}
document.writeln(temp,"<br>");


}
