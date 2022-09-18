import axios from "axios";

const GetData= async (user_id)=>{
  const{data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
  const{data:post}=await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
  
  const data= [user,...post];
  return data;
}

export default GetData;
