import axios from 'axios'

export default class HotelService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get('./hotels.json', {
      params: {
        _limit: limit,
        _page: page,
      },
    })
    return response
  }

  static async getById(id) {
    const response = await axios.get('./hotels.json' + id)
    return response
  }
}
