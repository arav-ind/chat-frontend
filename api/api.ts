import { API_BASE_URL } from '@/constant/constants'
import axios from 'axios'

export const AxiosPost = async (formData: FormData) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/api/user`, formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        return res
    } catch (err: any) {
        console.log('[API Post] Error!', err)
    }
}