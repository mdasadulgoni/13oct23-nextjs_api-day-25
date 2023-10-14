// Import Area 

// Define Area 
async function POST(req) {
    const {city,vid} = await req.json()
    return Response.json(
        {
            mag:city,
            mag2:vid
        }
    )
}
// Export Area 
// 3.1 Named Export
              // {key:value}
module.exports = {POST:POST}