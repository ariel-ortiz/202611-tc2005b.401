export const handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Saludos desde el Tec",
      code: 42,
      neta: true
    })
  };
  return response;
};
