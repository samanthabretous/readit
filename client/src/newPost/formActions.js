import $ from 'jquery'

export const GET_ALL_CATEGORIES = 'get_all_category'

export const getAllCategory = (categories) => (
  {
    type: GET_ALL_CATEGORIES,
    categories
  }
)
export const getAllCategoryAysnc = () => (dispatch) =>{
  $.ajax({
    url: '/api/category/',
    dataType: 'json',
    type: 'get'
  })
  .then(categories => {
    dispatch(getAllCategory(categories));
  })
}