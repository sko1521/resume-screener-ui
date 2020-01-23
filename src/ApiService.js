import axios from 'axios';
class ApiService {
    
    deleteUser(userId){
        return axios.delete(`http://my-json-server.typicode.com/SudhirKulat/fakeApi/users/${userId}`)
    }

    getUserList(){
        return axios.get(`http://my-json-server.typicode.com/SudhirKulat/fakeApi/users`);
    }
}

export default new ApiService();

