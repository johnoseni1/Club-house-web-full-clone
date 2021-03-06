const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;

export default async function getToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: '5fc62c5872909272bf9995e1', // id for users assigned by you
      role: role, //  speaker , moderator, listener ,
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
}
