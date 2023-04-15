export const config = {
  runtime: 'edge',
}

export async function GET(req: Request) {
  // res.setHeader('Access-Control-Allow-Origin', '*')

  const data = {
    revenue: '$2,129,430',
    transactions: '1,520',
    likes: '9,721',
    users: '892',
    guestVisits: [200, 350, 200, 400, 500],
    userVisits: [100, 400, 100, 450, 300],
    topProducts: [
      {
        name: 'Super Hoodies',
        sold: 14,
      },
      {
        name: 'Custom Short Pants',
        sold: 31,
      },
      {
        name: 'Basic Tees',
        sold: 55,
      },
    ],
    tasks: [
      {
        description: 'Meeting with suppliers from Kuta Bali',
        time: '14.00-15.00',
        location: 'Sunset Road, Kuta, Bali',
      },
      {
        description: 'Check operation at Giga Factory 1',
        time: '18.00-20.00',
        location: 'Central Jakarta',
      },
    ],
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
