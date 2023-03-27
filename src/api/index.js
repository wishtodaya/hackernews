 function getContentList(current,pageSize,date) {
      let result = {
            total: 50,
            contentList: []
      };
        for (let i = 0; i < current; i++) {
            result.contentList.push({
                id: i,
                title: `这是第${i}条数据`,
                abstract: `这是第${i}条数据的内容${date}`
            })
        }
      return result;
  }
  function getDataList(){
      let list = [];
      for (let i = 0; i < 4; i++) {
          list.push({
              month:i,
              days:[]
          })
          for (let j = 0; j < 7; j++) {
              list[i].days.push({
                    day:j,
              })
          }
      }
      return list;
  }
  export {getContentList,getDataList}