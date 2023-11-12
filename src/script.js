//Prisma Client API에 친숙해지고 사용 가능한 데이터베이스 쿼리 중 일부를 탐색해봅니다.

//소스코드에서 src/script.ts 파일에서 하나하나 알아보는 과정입니다. 아래는 실습해본 태스크들입니다.// 1
const { PrismaClient } = require("@prisma/client")

// 2
const prisma = new PrismaClient()

//3
async function main() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)

  const newUser = await prisma.user.create({
    data: {
        userId: 'sqkeks@naver.com',
        userName: '바다미술'
    },
  })
  console.log(newUser)

  const updateUser = await prisma.user.update({
    where: {
      email: "sqkeks@naver.com"
    },
    data: {
      name: "고래미술"
    },
  });
  console.log(updateUser)

  //6. User와 Tweet 레코드들을 연결하는 쿼리 작성
  const connect = await prisma.tweet.update({
    where: { tweetNo: 1 },
    data: {
      author: {
        connect: { userId: "sqkeks@naver.com" },
      },
    },
  });
  console.log(connect)



}

//4
main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })