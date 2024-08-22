export async function getToken(){
  let res = await fetch('/api/user/token', {
    method: 'GET'
  });
  res = await res.json();
  return res
}

export async function removeToken(){
  let res = await fetch('api/user/token', {
    method: 'DELETE'
  });
  res = await res.json();
  return res
}