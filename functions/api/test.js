export async function onRequest(context) {
  const result = await context.env.DB.prepare(
    "SELECT 'D1 已连接成功' AS message"
  ).first();

  return Response.json(result);
}
