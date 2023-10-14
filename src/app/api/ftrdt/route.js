// Import Area 

// Define Area 
async function POST(req) {
    const { city ,area } = await req.json()
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('searchReferer')
    return Response.json(
                            {
                                city:'Hello '+city,
                                area:`Hello ${area}`,
                                msg:`Hello ${query}`
                            }
                        )
}
// Export Area 
// 3.1 Named Export
              // {key:value}
module.exports = {POST:POST}