import Cate from './Cate'
class DataItem{
  id!: number
  cateId!: Cate
  title!: string
  content!: string
  createTime!: string
  constructor(
    id =-1,
    cateId =-1,
    title ='',
    content ='',
    Time =-1
    ){
    this.id=id
    this.cateId=cateId
    this.title=title
    this.content=content
    this.createTime=this.dateFormat(Time)
  }
  dateFormat(timeNum: number): string{
    const date=new Date()
    const str=`${date.getFullYear()}`+`${date.getMonth()}`+`${date.getDay()}`+ timeNum
    return str
  }
}

export default DataItem