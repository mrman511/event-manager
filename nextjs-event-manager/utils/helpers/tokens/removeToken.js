export default async function removeToken(){
  let res = await fetch('api/user/token', {
    method: 'DELETE'
  });
  res = await res.json();
  return res
}