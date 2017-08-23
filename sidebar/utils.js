
  function hasKeywords(node, hasVisit){
    if(hasVisit[node.visitId])
      return true;
    else if(node.children){
      for(var i in node.children){
        if(hasKeywords(node.children[i], hasVisit))
          return true;
      }
    }
    return false;
  }

  function 建空节点(title){
    return {title:title};
  }
  
  function notEmptyArray(array){
    return array && array.length > 0;
  }

  // 返回毫秒
  function 取今日开始时间点() {
    var now=new Date();
    var hour = now.getHours();
    var milli = now.getMilliseconds();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    return now-((60*hour+min)*60+sec)*1000+milli;
  }