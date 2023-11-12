import client from "@/libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //새로운 유저 생성하기
  await client.user.create({
    data: {
      name: "RM",
      email: "rm@bighit.com",
    },
  });

  //응답 성공으로
  res.json({
    ok: true,
  });
}