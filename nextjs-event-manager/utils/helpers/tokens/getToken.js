export default async function getToken(){
  let res = await fetch('/api/user/token', {
    method: 'GET'
  });
  res = await res.json();
  return res
}