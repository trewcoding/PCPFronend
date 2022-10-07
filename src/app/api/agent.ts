import axios, {AxiosResponse} from 'axios';
import { Data } from '../models/data';
import { Products } from '../models/products';

axios.defaults.baseURL = 'https://localhost:5001/api'

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),

}

const ProductInformation = {
    getAllProducts: () => requests.get<Products[]>('/Products'),
    getProductDetails: (id: string) => requests.get<Data>(`/Products/${id}`),
}

const agent = {
    ProductInformation
}

export default agent;