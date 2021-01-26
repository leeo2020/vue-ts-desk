import Cate from '@/model/Cate'
import ItemData from '@/model/DataItem'

class DataAction{
  dataKey: string
  memoList: Array<ItemData>
  constructor(dataKey: string='item'){
    this.dataKey=dataKey
    this.memoList=this.readData()
  }
  readData(){
    const strData: string | null =localStorage.Item(this.dataKey)
    let arrData: any[]=[]
    if(strData!=null){
      arrData=JSON.parse(strData)
    }
    return arrData
  }
  addData(newData:ItemData): number{
    let dataArray=this.memoList
      if(dataArray==null){
        dataArray=[]
      }
      let newId=dataArray.length==0?1:dataArray[dataArray.length-1].id+1
      newData.id=newId
      dataArray.push(newData)
      this.saveData(dataArray)
      return newId
    }
    saveData(arrData:Array<ItemData>):void{
      const str:string=JSON.stringify(arrData)
      localStorage.setItem(this.dataKey,str)
    }
    
}

export default DataAction