import {
  HTTP 
} from '../util/http-p.js'

class BookModel extends HTTP{
  getHotList(){
    return this.request({
      url: '/book/hot_list'
    })
  }

  search(start,q){
    return this.request({
      url:'/book/search',
      data:{
        start: start,
        summary:1,
        q: q
      }
    })
  }
  
  getMyBookCount(){
    return this.request({
      url: '/book/favor/count'
    })
  }

  getDetail(bid){
    return this.request({
      url: `/book/${bid}/detail`
    })
  }

  getComments(bid) {
    return this.request({
      url: `/book/${bid}/short_comment`
    })
  }

  getLikeStatus(bid) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }

  postComment(bid,comment) {
    return this.request({
      url: `/book/add/short_comment`,
      method:'POST',
      data:{
        book_id:bid,
        content:comment
      }
    })
  }

  getMyBoolCount(){
    return this.request({
      url:'/book/favor/count'
    })
  }

}

export {BookModel}